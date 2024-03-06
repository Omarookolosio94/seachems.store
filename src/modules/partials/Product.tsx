import { product3 } from "core/consts/images";
import { formatCurrency } from "core/helpers/generalHelpers";
import { Eye, ShoppingCart } from "react-feather";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product | null;
}

const Product = ({ product = null }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      key={product?.id}
      className="h-[322px] hover:cursor-pointer"
      onClick={() => navigate(`/products/${product?.id}`)}
    >
      <div className="relative h-4/5 !rounded-[4px] bg-shade">
        <div className="relative flex h-[90%] flex-row items-center justify-center">
          <Eye className="absolute right-[10px] top-[10px] h-[18px] hover:cursor-pointer" />
          <img src={product3} alt={product?.name} className="h-2/3" />
        </div>

        <button className="absolute bottom-0 flex w-full items-center justify-center gap-2 rounded-b-[5px] bg-black py-[6px] text-[12px] text-white">
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
