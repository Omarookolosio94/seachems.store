/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import { product2, product3 } from "core/consts/images";
import { formatCurrency } from "core/helpers/generalHelpers";
import { Delete, Minus, Plus, XCircle } from "react-feather";
import { btn, invoiceGroup } from "core/consts/styling";
import PlusMinusField from "core/components/formfields/PlusMinusField";
import { useState } from "react";

const Cart = () => {
  const navigate = useNavigate();

  // TODO: Make cart items a component
  const [qty, setQty] = useState(1);

  /*
  const onSubCategoryChange = (e: any, index: number) => {
    const { name, value }: any = e?.target;

    const data: any = [...subCategories];
    data[index][name] = value;

    setSubCategories(data);

    setNewProduct((state: any) => ({ ...state, hotelCategories: data }));
  };*/

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
          <div className="te mb-5 hidden items-center gap-2 rounded-[4px] border p-4 text-[12px] font-[500] shadow-sm sm:flex">
            <p className="w-1/4">Product</p>
            <p className="w-1/4">Price</p>
            <p className="w-2/4 lg:w-1/4">Quantity</p>
            <p className="w-1/4">Subtotal</p>
          </div>

          <div className="border-1 mb-5 flex flex-col items-center gap-2 rounded-[4px] border border-black-shade p-3 sm:flex-row sm:gap-5">
            <div
              className="flex w-full items-center gap-3 hover:cursor-pointer sm:w-1/4"
              onClick={() => navigate(`/products/sasasasasas`)}
            >
              <img src={product3} alt="" className="w-[32px]" />
              <p>Monitor</p>
            </div>

            <p className="w-full sm:w-1/4">
              <span className="mr-2 sm:hidden">Unit Price:</span>
              <span>{formatCurrency(20000)}</span>
            </p>

            <div className="w-full sm:w-2/4 lg:w-1/4">
              <PlusMinusField
                qty={qty}
                setQty={setQty}
                boxStyle="flex items-center"
              />
            </div>

            <div className="flex w-full items-center justify-between sm:w-1/4">
              <p className="text-[14px]">
                <span className="mr-2 sm:hidden">Total:</span>
                <span>{formatCurrency(50000)}</span>
              </p>
              <button>
                <Delete className="text-red-500" />
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
          <div className="w-full rounded-[4px] border border-black p-4 md:w-2/3 lg:w-2/5">
            <p className="mb-5 font-[500]">Cart Total</p>

            <div className="mb-5">
              <div className={`${invoiceGroup}`}>
                <p>Subtotal:</p>
                <p>{formatCurrency(60000)}</p>
              </div>

              <div className={`${invoiceGroup}`}>
                <p>Shipping:</p>
                <p>To be determined</p>
              </div>

              <div className={`${invoiceGroup}`}>
                <p>Total:</p>
                <p>{formatCurrency(60000)}</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Link
                to="/checkout"
                className={`${btn} !px-[32px] border bg-brand text-[12px] font-[500] text-white`}
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
