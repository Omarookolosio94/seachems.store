/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import InputField from "core/components/formfields/InputField";
import { useState } from "react";
import SelectField from "core/components/formfields/SelectField";
import { STATES_AND_LGAS } from "core/consts/statesandlgas";
import { DELIVERY_MODE } from "core/consts/systemconst";
import { formatCurrency } from "core/helpers/generalHelpers";
import { btn, invoiceGroup } from "core/consts/styling";
import { product1, product2, product3 } from "core/consts/images";

const Checkout = () => {
  const navigate = useNavigate();

  const [deliveryData, setDeliveryData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    state: "Lagos",
    lga: "",
    address: "",
    phoneNumber: "",
    deliveryMode: "",
  });

  const setLga = (state: string) => {
    var filteredArea = STATES_AND_LGAS?.filter((nga) => nga?.state === state);

    if (filteredArea?.length > 0) {
      return filteredArea[0]?.lgas;
    } else {
      return [];
    }
  };

  const lgas = setLga(deliveryData?.state);

  const handleFormChange = (e: any) => {
    const { name, value } = e?.target;

    setDeliveryData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleCheckout = (e: any) => {
    e.preventDefault();

    console.log(deliveryData);
  };

  return (
    <>
      {addMetaData({
        title: "",
        description: " ",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/product" className="hover:underline">
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

        <form className="mb-[28px] flex gap-10" onSubmit={handleCheckout}>
          <div className="w-1/2">
            <p className="mb-5 text-[24px] font-[500]">Billing Details</p>

            <div>
              <InputField
                boxStyle="mb-3"
                label="First Name"
                isRequired
                name="firstName"
                value={deliveryData?.firstName}
                onChange={handleFormChange}
              />

              <InputField
                boxStyle="mb-3"
                label="Last Name/Surname"
                isRequired
                name="lastName"
                value={deliveryData?.lastName}
                onChange={handleFormChange}
              />

              <InputField
                boxStyle="mb-3"
                label="Company/Business Name"
                name="companyName"
                value={deliveryData?.companyName}
                onChange={handleFormChange}
                instruction={`* if purchase is made on behalf of a business or company`}
              />

              <InputField
                boxStyle="mb-3"
                label="Email"
                name="email"
                type="email"
                value={deliveryData?.email}
                onChange={handleFormChange}
              />

              <InputField
                boxStyle="mb-3"
                label="Contact Number"
                name="phoneNumber"
                isNumberOnly
                value={deliveryData?.phoneNumber}
                onChange={handleFormChange}
              />

              <SelectField
                boxStyle="mb-3"
                name="deliveryMode"
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
                  />

                  <InputField
                    boxStyle="mb-3"
                    label="Delivery Address"
                    isRequired
                    name="address"
                    value={deliveryData?.address}
                    onChange={handleFormChange}
                  />
                </>
              )}

              <div className="flex h-[14px] w-[14px] w-full flex-row items-center gap-2">
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
            </div>
          </div>

          <div className="w-1/2 rounded-[4px]">
            <div className="mb-5">
              <div className="mb-5">
                <div className={`${invoiceGroup} !border-none`}>
                  <div className="flex w-2/3 items-center gap-3">
                    <img src={product3} alt="" className="w-[32px]" />
                    <p>Monitor (x1)</p>
                  </div>
                  <p>{formatCurrency(700)}</p>
                </div>

                <div className={`${invoiceGroup} !border-none`}>
                  <div className="flex w-2/3 items-center gap-3">
                    <img src={product1} alt="" className="w-[32px]" />
                    <p>45L of Ozyuin (X2) </p>
                  </div>
                  <p>{formatCurrency(67000)}</p>
                </div>

                <div className={`${invoiceGroup} !border-none`}>
                  <div className="flex w-2/3 items-center gap-3">
                    <img src={product2} alt="" className="w-[32px]" />
                    <p>80 L of Nixort (x3)</p>
                  </div>
                  <p>{formatCurrency(77000)}</p>
                </div>
              </div>

              <div className={`${invoiceGroup}`}>
                <p>Subtotal:</p>
                <p>{formatCurrency(60000)}</p>
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
                      (** exclusive of delivery fee)
                    </span>
                  )}
                </p>

                <p>{formatCurrency(60000)}</p>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-start">
              <Link
                to="/products"
                className={`${btn} border text-[12px] font-[500]`}
              >
                Return to Shop
              </Link>

              <button
                className={`${btn} border bg-brand text-[12px] font-[500] text-white`}
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
