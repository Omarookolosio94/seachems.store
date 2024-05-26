/* eslint-disable no-template-curly-in-string */
import { useSearchParams } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { formatCurrency, formatDate } from "core/helpers/generalHelpers";
import { btn, invoiceGroup } from "core/consts/styling";
import { product3 } from "core/consts/images";
import useProductStore from "core/services/stores/useProductStore";

const TrackOrder = () => {
  const [searchParams, setSearchParams]: any = useSearchParams();

  const order = useProductStore((store) => store.order);
  const getOrderAction = useProductStore((store) => store.getOrderById);

  const totalPrice = order?.cart.reduce((total, item) => {
    return total + item?.unitPriceAtPurchase * item.quantity;
  }, 0);

  useEffect(() => {
    var orderId = searchParams.get("orderId");

    if (orderId != null) {
      getOrderAction(orderId!);
    }
  }, [searchParams.get("orderId")]);

  return (
    <>
      {addMetaData({
        title: "Ocean Global Chemicals Nigeria - Track Order",
        description: "Track your order from point of purchase to delivery",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <div className="text-black hover:underline">Track Order</div>
          </header>
        </section>

        <div className="mb-[28px] flex flex-col gap-10 sm:flex-row">
          <section className="w-full sm:w-1/2">
            <p className="mb-5 text-[24px] font-[500]">Order Details</p>

            {order == null ? (
              <>
                <p>Order not found</p>
              </>
            ) : (
              <>
                <div className="mb-5">
                  <h5 className="text-[12px]">Order Code</h5>
                  <p>{order?.code}</p>
                </div>

                <div className="mb-5">
                  <h5 className="text-[12px]">Status</h5>
                  <p>{order?.status}</p>
                </div>

                <div className="mb-5">
                  <h5 className="text-[12px]">Delivery Method</h5>
                  <p>{order?.deliveryMethod}</p>
                </div>

                <div className="mb-5">
                  <h5 className="text-[12px]">Date Placed</h5>
                  <p>{formatDate(order?.dateAdded!)}</p>
                </div>

                <div className="mb-5">
                  <h5 className="text-[12px]">Last Updated</h5>
                  <p>{formatDate(order?.lastUpdated!)}</p>
                </div>

                <div>
                  <h5 className="text-[12px]">Timeline</h5>

                  {order &&
                    order?.timeLine != null &&
                    order?.timeLine?.length > 0 &&
                    order?.timeLine?.map((act, index) => (
                      <div className="mb-5 w-full" key={index}>
                        <p className="font-semibold">
                          {index + 1} ORDER {act?.process}
                        </p>
                        <p className="mb-1">Initiated By: {act?.initiatedBy}</p>
                        <p className="mb-1">
                          Date:{" "}
                          {act?.dateAdded == null
                            ? "N/A"
                            : formatDate(act?.dateAdded)}
                        </p>
                        <p>Instruction:</p>
                        <p>{act?.instruction}</p>
                      </div>
                    ))}
                </div>
              </>
            )}
          </section>

          <div className="w-full rounded-[4px] sm:w-1/2">
            <div className="mb-5">
              <div className="mb-5">
                {order &&
                  order?.cart?.length > 0 &&
                  order?.cart?.map((item) => (
                    <div
                      key={item?.productId}
                      className={`${invoiceGroup} !border-none`}
                    >
                      <div className="flex w-2/3 items-center gap-3">
                        <img src={product3} alt="" className="w-[32px]" />
                        <p>
                          {item?.productName} (x {item?.quantity})
                        </p>
                      </div>
                      <p>
                        {formatCurrency(
                          item?.quantity * item?.unitPriceAtPurchase,
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
                <p>Delivery Fee:</p>
                <p>{formatCurrency(order?.deliveryFee)}</p>
              </div>

              <div className={`${invoiceGroup}`}>
                <p>Tax:</p>
                <p>{formatCurrency(order?.tax)}</p>
              </div>

              <div className={`${invoiceGroup}`}>
                <p>Total:</p>

                <p>{formatCurrency(order?.totalPaid)}</p>
              </div>

              <div className={`${invoiceGroup}`}>
                <p>Payment Status:</p>

                <p>{order?.isPaid ? "Paid" : "Not Paid"}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-3 lg:flex-row">
              <Link
                to="/products"
                className={`${btn} !lg:w-1/2 !w-full border text-[12px] font-[500]`}
              >
                Return to Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
