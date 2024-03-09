import PlusMinusField from "core/components/formfields/PlusMinusField";
import { product1, product2, product3 } from "core/consts/images";
import { btn, gallery } from "core/consts/styling";
import { formatCurrency } from "core/helpers/generalHelpers";
import { useEffect, useState } from "react";
import { ShoppingBag } from "react-feather";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product | null;
  boxStyle?: string;
}

const ProductDetail = ({ product = null, boxStyle = "" }: Props) => {
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [displayedImg, setDisplayedImg] = useState<any>("");

  useEffect(() => {
    setDisplayedImg(product1);
  }, [product?.id]);

  return (
    <>
      {product !== null && (
        <section className={`flex flex-col gap-5 sm:flex-row ${boxStyle}`}>
          <div className="flex w-full flex-col-reverse gap-3 sm:w-3/5 sm:flex-row">
            <div className="flex w-full justify-center gap-5 sm:block sm:w-[80px]">
              <div
                className={`${gallery}`}
                onClick={() => setDisplayedImg(product1)}
              >
                <img src={product1} alt="" className="h-2/3 w-2/3" />
              </div>
              <div
                className={`${gallery}`}
                onClick={() => setDisplayedImg(product2)}
              >
                <img src={product2} alt="" className="h-2/3 w-2/3" />
              </div>
              <div
                className={`${gallery}`}
                onClick={() => setDisplayedImg(product3)}
              >
                <img src={product3} alt="" className="h-2/3 w-2/3" />
              </div>
              <div
                className={`${gallery} !mb-0`}
                onClick={() => setDisplayedImg(product1)}
              >
                <img src={product1} alt="" className="h-2/3 w-2/3" />
              </div>
            </div>
            <div className="flex h-full w-full items-center justify-center rounded-[4px] bg-[#f5f5f5] py-5 sm:py-0">
              <div className="flex h-2/3 w-2/3 items-center justify-center">
                <img src={displayedImg} alt="" className="" />
              </div>
            </div>
          </div>

          <div className="w-full sm:w-2/5">
            <h4 className="text-[18px] font-[500]">{product?.name}</h4>

            <p className="text-[12px] text-[18px] font-[500] text-red-500">
              {formatCurrency(product?.sellingPrice)}
            </p>

            <p className="my-3">{product?.description}</p>

            <div className="border-b border-b-[.5px] border-black-shade"></div>

            <div className="mb-3 mt-2">
              {product?.unit?.length > 0 && (
                <div className="mb-2 flex items-center gap-3">
                  <p>Unit:</p>
                  <span className="rounded-[4px] border border-black-shade bg-shade px-1 font-[500]">
                    {product?.unit}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <p>Item Per Pack:</p>
                <span className="rounded-[4px] border border-brand bg-shade px-1 font-[500] text-brand">
                  {Number(product?.itemPerPack)?.toLocaleString("en-US")}
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center gap-3 lg:flex-row">
              <PlusMinusField
                qty={qty}
                setQty={setQty}
                boxStyle="flex !w-full lg:!w-1/2 !h-8 items-center"
              />

              <button
                className={`${btn} !h-8 !w-full bg-brand text-[12px] font-[500] text-white lg:!w-1/2`}
              >
                <ShoppingBag className="h-[14px]" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
