/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import { product3 } from "core/consts/images";
import { formatCurrency } from "core/helpers/generalHelpers";
import { Delete } from "react-feather";
import { btn, invoiceGroup } from "core/consts/styling";
import PlusMinusField from "core/components/formfields/PlusMinusField";
import useProductStore from "core/services/stores/useProductStore";
import notification from "core/helpers/notification";

const Cart = () => {
  const navigate = useNavigate();

  const cart = useProductStore((store) => store.cart);
  const addToCart = useProductStore((store) => store.addToCart);
  const clearCart = useProductStore((store) => store.clearCart);
  const removeFromCart = useProductStore((store) => store.removeFromCart);

  const handleAddToCart = async (product: Product, quantity: number) => {
    await addToCart(product!, quantity);
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item?.product!?.sellingPrice * item.quantity;
  }, 0);

  return (
    <>
      {addMetaData({
        title: "Ocean Global Chemicals Nigeria - Cart",
        description: "Shop and manage your cart",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/cart" className="text-black hover:underline">
              Cart
            </Link>
          </header>
        </section>

        <section className="mb-[28px]">
          <div className="mb-5 hidden items-center gap-2 rounded-[4px] border p-4 text-[12px] font-[500] shadow-sm sm:flex">
            <p className="w-1/4">Product</p>
            <p className="w-1/4">Price</p>
            <p className="w-2/4 lg:w-1/4">Quantity</p>
            <p className="w-1/4">Subtotal</p>
          </div>

          {cart?.length > 0 ? (
            cart?.map((item) => (
              <div
                key={item?.productId}
                className="border-1 mb-5 flex flex-col items-center gap-2 rounded-[4px] border border-black-shade p-3 sm:flex-row sm:gap-5"
              >
                <div
                  className="hover:text-underline flex w-full items-center gap-3 hover:cursor-pointer sm:w-1/4"
                  onClick={() => navigate(`/products/sasasasasas`)}
                >
                  <img src={product3} alt="" className="w-[32px]" />
                  <p>{item?.product?.name}</p>
                </div>

                <p className="w-full sm:w-1/4">
                  <span className="mr-2 sm:hidden">Unit Price:</span>
                  <span>{formatCurrency(item?.product?.sellingPrice)}</span>
                </p>

                <div className="w-full sm:w-2/4 lg:w-1/4">
                  <PlusMinusField
                    qty={item?.quantity}
                    setQty={handleAddToCart}
                    boxStyle="flex !h-10 items-center"
                    product={item?.product}
                  />
                </div>

                <div className="flex w-full items-center justify-between sm:w-1/4">
                  <p className="text-[14px]">
                    <span className="mr-2 sm:hidden">Total:</span>
                    <span>
                      {formatCurrency(
                        item?.product!?.sellingPrice * item?.quantity,
                      )}
                    </span>
                  </p>
                  <button onClick={() => removeFromCart(item?.productId!)}>
                    <Delete className="text-red-500" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="mb-5 hidden items-center gap-2 rounded-[4px] border p-4 text-[12px] font-[500] shadow-sm sm:flex">
              <p className="w-full">No item in cart</p>
            </div>
          )}

          <div className="flex items-center justify-between">
            <Link
              to="/products"
              className={`${btn} border text-[12px] font-[500]`}
            >
              Return to Shop
            </Link>

            <button
              disabled={cart?.length < 1}
              onClick={() => {
                if (cart.length < 1) return;
                if (
                  window.confirm(
                    "You are about to clear your cart. Do you still want to proceed?",
                  )
                ) {
                  clearCart();
                }
              }}
              className={`${btn} border text-[12px] font-[500]`}
            >
              Clear Cart
            </button>
          </div>
        </section>

        <section className="mb-[28px] flex justify-end text-[14px]">
          <div className="w-full rounded-[4px] border border-black p-4 md:w-2/3 lg:w-2/5">
            <p className="mb-5 font-[500]">Cart Total</p>

            <div className="mb-5">
              <div className={`${invoiceGroup}`}>
                <p>Subtotal:</p>
                <p>{formatCurrency(totalPrice)}</p>
              </div>

              <div className={`${invoiceGroup}`}>
                <p>Shipping:</p>
                <p>To be determined</p>
              </div>

              <div className={`${invoiceGroup}`}>
                <p>Total:</p>
                <p>{formatCurrency(totalPrice)}</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Link
                to="/checkout"
                onClick={(e) => {
                  if (cart.length < 1) {
                    e.preventDefault();
                    notification({
                      type: "warning",
                      message: "Please add item to cart before checkout",
                    });
                  }
                }}
                className={`${btn} w-full border bg-brand !px-[32px] text-[12px] font-[500] text-white`}
              >
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
