/* eslint-disable no-template-curly-in-string */
import { useNavigate, useParams } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import { isObjectEmpty } from "core/helpers/generalHelpers";
import { useEffect } from "react";
import useProductStore from "core/services/stores/useProductStore";
import Subheader from "core/components/Subheader";
import Product from "modules/partials/Product";
import ProductDetail from "modules/partials/ProductDetail";
import { productBox } from "core/consts/styling";

const SingleProduct = () => {
  const navigate = useNavigate();

  const product = useProductStore((store) => store.product);
  const productList = useProductStore((store) => store.productList);
  const getProductById = useProductStore((store) => store.getProductById);
  const getProducts = useProductStore((store) => store.getProducts);

  const { productId } = useParams();

  useEffect(() => {
    if (productId == null || productId?.length < 1) {
      navigate("/products");
    } else {
      if (isObjectEmpty(product) || product?.id !== productId) {
        getProductById(productId);
      }
    }

    getProducts();
  }, [productId]);

  return (
    <>
      {addMetaData({
        title: "",
        description: " ",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-1 text-[12px] leading-none text-black-shade sm:gap-3">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">
              Product
            </Link>
            <span>/</span>
            {product != null && (
              <>
                <Link
                  to={`/products?category=${product?.category?.name}`}
                  className="capitalize hover:underline"
                >
                  {product?.category?.name}
                </Link>
                <span>/</span>
                <Link
                  to={`/products/${product?.id}`}
                  className="capitalize text-black hover:underline"
                >
                  {product?.name}
                </Link>
              </>
            )}
          </header>
        </section>

        {product !== null && (
          <ProductDetail product={product} boxStyle="mb-[48px]" />
        )}

        <section className="mb-[38px]">
          <Subheader shortHeader="Related Item" fullHeader="" />

          <div className={`${productBox}`}>
            {productList?.products?.length > 0 ? (
              productList?.products
                ?.slice(0, 4)
                ?.map((product) => (
                  <Product product={product} allowExpansion={false} />
                ))
            ) : (
              <>
                <p>No products yet</p>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
