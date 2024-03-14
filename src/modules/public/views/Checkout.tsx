/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import InputField from "core/components/formfields/InputField";
import { useEffect, useState } from "react";
import SelectField from "core/components/formfields/SelectField";
import { STATES_AND_LGAS } from "core/consts/statesandlgas";
import { DELIVERY_MODE } from "core/consts/systemconst";
import { formatCurrency } from "core/helpers/generalHelpers";
import { btn, invoiceGroup } from "core/consts/styling";
import { product1, product2, product3 } from "core/consts/images";
import useProductStore from "core/services/stores/useProductStore";
import notification from "core/helpers/notification";

const Checkout = () => {
  const navigate = useNavigate();

  const cart = useProductStore((store) => store.cart);
  const placeOrder = useProductStore((store) => store.placeOrder);
  const clearCart = useProductStore((store) => store.clearCart);

  const totalPrice = cart.reduce((total, item) => {
    return total + item?.product!?.sellingPrice * item.quantity;
  }, 0);

  const [deliveryData, setDeliveryData] = useState<NewOrder>({
    firstName: "",
    lastName: "",
    state: "Lagos",
    lga: "",
    deliveryMode: "",
    businessName: "",
    cart: [],
    customerEmail: "",
    customerPhone: "",
    deliveryAddress: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState({
    FirstName: [],
    LastName: [],
    State: [],
    LGA: [],
    DeliveryMode: [],
    BusinessName: [],
    Cart: [],
    CustomerEmail: [],
    CustomerPhone: [],
    DeliveryAddress: [],
    PaymentMethod: [],
  });

  const handleErrorChange = (name: string, value: string[]) => {
    setErrors((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const setLga = (state: string) => {
    var filteredArea = STATES_AND_LGAS?.filter((nga) => nga?.state === state);

    if (filteredArea?.length > 0) {
      return filteredArea[0]?.lgas;
    } else {
      return [];
    }
  };

  const lgas = setLga(deliveryData?.state);

  // TODO: Add Validations
  const validation = (data: NewOrder) => {
    var isValid = true;

    if (data?.firstName?.length < 1) {
      isValid = false;
      handleErrorChange("FirstName", ["First Name is required"]);
    }

    if (data?.lastName?.length < 1) {
      isValid = false;
      handleErrorChange("LastName", ["Last Name is required"]);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data?.customerEmail)) {
      handleErrorChange("CustomerEmail", ["A valid Email address is required"]);
      isValid = false;
    }

    if (
      data?.customerPhone?.length !== 11 &&
      data?.customerPhone?.length !== 13
    ) {
      handleErrorChange("CustomerPhone", [
        "Phone number must be 11 digits or 13 digits",
      ]);
      isValid = false;
    }

    if (data?.deliveryMode?.length < 1) {
      handleErrorChange("DeliveryMode", ["Please select a delivery mode"]);
      isValid = false;
    }

    if (data?.deliveryMode === "DELIVERY") {
      if (data?.state?.length < 1) {
        handleErrorChange("State", ["Please select a State"]);
        isValid = false;
      }

      if (data?.lga?.length < 1) {
        handleErrorChange("LGA", ["Please select a Local Government Area"]);
        isValid = false;
      }

      if (data?.deliveryAddress?.length < 1) {
        handleErrorChange("DeliveryAddress", ["Please input delivery address"]);
        isValid = false;
      }
    }

    return isValid;
  };

  const handleFormChange = (e: any) => {
    const { name, value } = e?.target;

    setDeliveryData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleCheckout = async (e: any) => {
    e.preventDefault();

    if (!validation(deliveryData)) {
      notification({
        type: "danger",
        message: "Please pass in all required information",
      });

      return;
    }

    if (
      window.confirm(
        "You are about to place an order. Do you still want to proceed?",
      )
    ) {
      var res = await placeOrder({
        ...deliveryData,
        cart: cart.map((item) => ({
          productId: item?.productId,
          quantity: item?.quantity,
        })),
      });

      if (res?.success) {
        navigate("/products");
      } else {
        setErrors((state) => ({
          ...state,
          ...res?.data,
        }));
      }
    }
  };

  useEffect(() => {
    cart?.length < 1 && navigate("/products");
  }, []);

  // TODO: Save customer details for automatic refill

  return (
    <>
      {addMetaData({
        title: "Ocean Global Chemicals Nigeria - Checkout",
        description: "Easy checkout in less than 2 minutes",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">
              Product
            </Link>
            <span>/</span>
            <Link to="/cart" className="hover:underline">
              View Cart
            </Link>
            <span>/</span>
            <Link to="/checkout" className="text-black hover:underline">
              Checkout
            </Link>
          </header>
        </section>

        <form
          className="mb-[28px] flex flex-col gap-10 sm:flex-row"
          onSubmit={handleCheckout}
        >
          <div className="w-full sm:w-1/2">
            <p className="mb-5 text-[24px] font-[500]">Billing Details</p>

            <div>
              <InputField
                boxStyle="mb-3"
                label="First Name"
                isRequired
                name="firstName"
                value={deliveryData?.firstName}
                onChange={handleFormChange}
                errors={errors?.FirstName}
                onBlur={() => handleErrorChange("FirstName", [])}
              />

              <InputField
                boxStyle="mb-3"
                label="Last Name/Surname"
                isRequired
                name="lastName"
                value={deliveryData?.lastName}
                onChange={handleFormChange}
                errors={errors?.LastName}
                onBlur={() => handleErrorChange("LastName", [])}
              />

              <InputField
                boxStyle="mb-3"
                label="Company/Business Name"
                name="businessName"
                value={deliveryData?.businessName}
                onChange={handleFormChange}
                instruction={`* if purchase is made on behalf of a business or company`}
                errors={errors?.BusinessName}
                onBlur={() => handleErrorChange("BusinessName", [])}
              />

              <InputField
                boxStyle="mb-3"
                label="Email"
                isRequired
                name="customerEmail"
                value={deliveryData?.customerEmail}
                onChange={handleFormChange}
                errors={errors?.CustomerEmail}
                onBlur={() => handleErrorChange("CustomerEmail", [])}
              />

              <InputField
                boxStyle="mb-3"
                label="Contact Phone Number"
                name="customerPhone"
                isNumberOnly
                isRequired
                value={deliveryData?.customerPhone}
                onChange={handleFormChange}
                errors={errors?.CustomerPhone}
                onBlur={() => handleErrorChange("CustomerPhone", [])}
              />

              <SelectField
                boxStyle="mb-3"
                name="deliveryMode"
                isRequired
                label="Select Delivery Mode"
                defaultName=""
                defaultValue=""
                options={
                  DELIVERY_MODE?.length > 0
                    ? [
                        ...DELIVERY_MODE?.map((mode) => ({
                          name: mode?.name,
                          value: mode?.value,
                        })),
                      ]
                    : []
                }
                value={deliveryData?.deliveryMode}
                onChange={handleFormChange}
                errors={errors?.DeliveryMode}
                onBlur={() => handleErrorChange("DeliveryMode", [])}
              />

              {deliveryData?.deliveryMode === "DELIVERY" && (
                <>
                  <SelectField
                    boxStyle="mb-3"
                    isRequired
                    name="state"
                    label="Select State"
                    defaultName=""
                    defaultValue=""
                    options={[
                      ...STATES_AND_LGAS?.map((st) => ({
                        name: st?.state,
                        value: st?.state,
                      })),
                    ]}
                    value={deliveryData?.state}
                    onChange={handleFormChange}
                    errors={errors?.State}
                    onBlur={() => handleErrorChange("State", [])}
                  />

                  <SelectField
                    boxStyle="mb-3"
                    name="lga"
                    isRequired
                    label="Select Local Government Area"
                    defaultName=""
                    defaultValue=""
                    options={
                      lgas?.length > 0
                        ? [
                            ...lgas?.map((lg: string) => ({
                              name: lg,
                              value: lg,
                            })),
                          ]
                        : []
                    }
                    value={deliveryData?.lga}
                    onChange={handleFormChange}
                    errors={errors?.LGA}
                    onBlur={() => handleErrorChange("LGA", [])}
                  />

                  <InputField
                    boxStyle="mb-3"
                    label="Delivery Address"
                    isRequired
                    name="deliveryAddress"
                    value={deliveryData?.deliveryAddress}
                    onChange={handleFormChange}
                    errors={errors?.DeliveryAddress}
                    onBlur={() => handleErrorChange("DeliveryAddress", [])}
                  />
                </>
              )}

              {/* 
              <div className="mt-5 flex h-[14px] w-[14px] w-full flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="h-[14px] w-[14px] accent-brand"
                />
                <span className="inline-block">
                  save this information for faster check-out next time
                </span>
              </div>
              */}
            </div>
          </div>

          <div className="w-full rounded-[4px] sm:w-1/2">
            <div className="mb-5">
              <div className="mb-5">
                {cart?.length > 0 &&
                  cart?.map((item) => (
                    <div
                      key={item?.productId}
                      className={`${invoiceGroup} !border-none`}
                    >
                      <div className="flex w-2/3 items-center gap-3">
                        <img src={product3} alt="" className="w-[32px]" />
                        <p>
                          {item?.product?.name} (x{item?.quantity})
                        </p>
                      </div>
                      <p>
                        {formatCurrency(
                          item?.quantity * item?.product!?.sellingPrice,
                        )}
                      </p>
                    </div>
                  ))}
              </div>

              <div className={`${invoiceGroup}`}>
                <p>Subtotal:</p>
                <p>{formatCurrency(totalPrice)}</p>
              </div>

              <div className={`${invoiceGroup}`}>
                <p>Shipping:</p>
                <p>
                  {deliveryData?.deliveryMode === "IN STORE"
                    ? formatCurrency(0)
                    : "To be determined"}
                </p>
              </div>

              <div className={`${invoiceGroup}`}>
                <p>
                  Total:{" "}
                  {deliveryData?.deliveryMode === "DELIVERY" && (
                    <span className="text-[10px] text-red-500">
                      (** exclusive of delivery fee and additional charges)
                    </span>
                  )}
                </p>

                <p>{formatCurrency(totalPrice)}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-3 lg:flex-row">
              <Link
                to="/products"
                className={`${btn} !lg:w-1/2 !w-full border text-[12px] font-[500]`}
              >
                Return to Shop
              </Link>

              <button
                className={`${btn} !lg:w-1/2 !w-full border bg-brand text-[12px] font-[500] text-white`}
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
