/* eslint-disable no-template-curly-in-string */
import { useNavigate, useParams } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate();

  const product = { name: "Te ha", id: "asa" };

  const { productId } = useParams();

  return (
    <>
      {addMetaData({
        title: "",
        description: " ",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="text-black-shade flex flex-wrap items-center gap-3 text-[12px]">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link
              to={`/products/${product?.id}`}
              className="text-black hover:underline"
            >
              {product?.name}
            </Link>
          </header>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
