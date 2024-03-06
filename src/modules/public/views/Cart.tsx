/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import { product3 } from "core/consts/images";
import { formatCurrency } from "core/helpers/generalHelpers";
import { Minus, Plus, XCircle } from "react-feather";
import { btn } from "core/consts/styling";

const Cart = () => {
  const navigate = useNavigate();

  // TODO: Make cart items a component

  // TODO: Add empty state for cart
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
            <Link to="/cart" className="text-black hover:underline">
              Cart
            </Link>
          </header>
        </section>

        <section className="mb-[28px]">
          <div className="mb-5 flex items-center rounded-[4px] border p-4 shadow-sm">
            <p className="w-1/4">Product</p>
            <p className="w-1/4">Price</p>
            <p className="w-1/4">Quantity</p>
            <p className="w-1/4">Subtotal</p>
          </div>

          <div className="mb-5 flex items-center rounded-[4px] border p-4 shadow-sm">
            <div className="flex w-1/4 items-center gap-3">
              <img src={product3} alt="" className="w-[32px]" />
              <p>Monitor</p>
            </div>
            <p className="w-1/4">{formatCurrency(20000)}</p>
            <div className="flex w-1/4 items-center gap-2">
              <button>
                <Plus />
              </button>
              <input
                type="number"
                className="w-1/4 rounded-[4px] border p-2 outline-none"
              />
              <button>
                <Minus />
              </button>
            </div>
            <div className="flex w-1/4 items-center justify-between">
              <p className="text-[14px]">{formatCurrency(50000)}</p>
              <button>
                <XCircle className="text-red-500" />
              </button>
            </div>
          </div>

          <div className="mb-5 flex items-center rounded-[4px] border p-4 shadow-sm">
            <div className="flex w-1/4 items-center gap-3">
              <img src={product3} alt="" className="w-[32px]" />
              <p>Monitor</p>
            </div>
            <p className="w-1/4">{formatCurrency(20000)}</p>
            <div className="flex w-1/4 items-center gap-2">
              <button>
                <Plus />
              </button>
              <input
                type="number"
                className="w-1/4 rounded-[4px] border p-2 outline-none"
              />
              <button>
                <Minus />
              </button>
            </div>
            <div className="flex w-1/4 items-center justify-between">
              <p className="text-[14px]">{formatCurrency(50000)}</p>
              <button>
                <XCircle className="text-red-500" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Link
              to="/products"
              className={`${btn} border text-[12px] font-[500]`}
            >
              Return to Shop
            </Link>

            <button className={`${btn} border text-[12px] font-[500]`}>
              Clear Cart
            </button>
          </div>
        </section>

        <section className="mb-[28px] flex justify-end text-[14px]">
          <div className="w-2/5 rounded-[4px] border border-black p-4">
            <p className="mb-5 font-[500]">Cart Total</p>

            <div className="mb-5">
              <div className="flex items-center justify-between border-b py-3">
                <p>Subtotal:</p>
                <p>{formatCurrency(60000)}</p>
              </div>

              <div className="flex items-center justify-between border-b py-3">
                <p>Shipping:</p>
                <p>To be determined</p>
              </div>

              <div className="flex items-center justify-between border-b py-3">
                <p>Total:</p>
                <p>{formatCurrency(60000)}</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Link
                to="/checkout"
                className={`${btn} border bg-brand text-[12px] font-[500] text-white`}
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
