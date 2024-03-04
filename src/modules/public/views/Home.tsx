/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import useProductStore from "core/services/stores/useProduct.Store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import { product3 } from "core/consts/images";

const Home = () => {
  const navigate = useNavigate();

  const categories = useProductStore((store) => store.categories);
  const getCategories = useProductStore((store) => store.getCategories);

  const productList = useProductStore((store) => store.productList);
  const getProducts = useProductStore((store) => store.getProducts);

  useEffect(() => {
    categories?.length < 1 && getCategories();
    productList != null && productList?.products?.length < 1 && getProducts();
  }, []);

  return (
    <>
      {addMetaData({
        title: "",
        description: " ",
      })}

      <div className="mx-auto mb-[34px] mt-[-20px] h-full w-11/12 overflow-hidden md:w-4/5">
        <section className="flex h-[60vh] gap-5">
          <div className="border-r-black-shade flex h-full w-3/12 flex-col gap-2 border-r pr-[10px] pt-[20px] text-[14px]">
            <Link to="/products">All</Link>
            {categories?.length > 1 &&
              categories?.map((cat) => (
                <Link to={`/products?category=${cat?.id}`}>{cat?.name}</Link>
              ))}
          </div>
          <div className="h-full w-9/12 pt-5">
            <div className="item-center flex h-full w-full bg-black">
              <div className="flex h-full w-1/2 flex-col justify-center p-8 text-white">
                <p className="mb-5 text-[24px] font-[500]">
                  Your One-Stop Shop for Wholesale Chemicals in Nigeria
                </p>
                <Link to="/products" className="w-1/3">
                  <span className="border-b py-1 text-[14px]">Shop Now</span>
                  <ArrowRight className="ml-3 inline-block h-[14px] w-[14px]" />
                </Link>
              </div>
              <div className="flex h-full w-1/2 items-center justify-center p-5">
                <img src={product3} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
