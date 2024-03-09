import { product3 } from "core/consts/images";
import { formatCurrency } from "core/helpers/generalHelpers";
import { Maximize, ShoppingCart } from "react-feather";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product | null;
  handleOpen?: any;
  allowExpansion?: boolean;
}

const Product = ({
  product = null,
  handleOpen = () => {},
  allowExpansion = true,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="h-[260px] hover:cursor-pointer sm:h-[322px]"
      onClick={() => navigate(`/products/${product?.id}`)}
    >
      <div className="relative h-4/5 !rounded-[4px] bg-shade">
        <div className="relative flex h-[90%] flex-row items-center justify-center">
          {allowExpansion && (
            <div
              className="absolute right-[2px] top-[2px] p-2 hover:cursor-pointer lg:right-[5px] lg:top-[5px] "
              onClick={(e: any) => {
                e?.stopPropagation();
                handleOpen(product);
              }}
            >
              <Maximize className="h-[18px] sm:h-[24px]" />
            </div>
          )}
          <img src={product3} alt={product?.name} className="h-2/3" />
        </div>

        <button
          onClick={(e: any) => {
            e?.stopPropagation();
            alert("item added to cart");
          }}
          className="absolute bottom-0 flex w-full items-center justify-center gap-2 rounded-b-[5px] bg-black py-[10px] text-[12px] text-white"
        >
          <ShoppingCart className="h-[12px] w-[12px]" />
          <span className="inline-block">Add to Cart</span>
        </button>
      </div>

      <div className="mt-2">
        <p className="font-[500]">{product?.name}</p>
        <p className="text-[12px] font-[500] text-red-500">
          {formatCurrency(product?.sellingPrice)}
        </p>
      </div>
    </div>
  );
};

export default Product;
