/* eslint-disable no-template-curly-in-string */
import { useNavigate, useSearchParams } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import useProductStore from "core/services/stores/useProductStore";
import { useEffect, useState } from "react";
import Subheader from "core/components/Subheader";
import Product from "modules/partials/Product";
import Pagination from "core/components/Pagination";
import Modal from "core/components/Modal";
import ProductDetail from "modules/partials/ProductDetail";
import { productBox } from "core/consts/styling";
import SelectField from "core/components/formfields/SelectField";

const Products = () => {
  const navigate = useNavigate();

  const productList = useProductStore((store) => store.productList);
  const getProducts = useProductStore((store) => store.getProducts);

  const categories = useProductStore((store) => store.categories);
  const getCategories = useProductStore((store) => store.getCategories);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openProductModal, setOpenProductModal] = useState(false);
  const [searchParams, setSearchParams]: any = useSearchParams();

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setOpenProductModal(true);
  };

  const [query, setQuery] = useState({
    category: "",
    currentPage: 1,
    totalItem: 0,
    totalPage: 1,
    pageSize: 6,
  });

  const fetchMore = async (page: number) => {
    setQuery((state) => ({ ...state, currentPage: page }));

    getProducts(query?.category, page, query?.pageSize);
  };

  useEffect(() => {
    var category = searchParams.get("category");

    setQuery((state) => ({
      ...state,
      category: category != null ? category : "",
    }));

    getProducts(
      (category = category != null ? category : ""),
      query?.currentPage,
      query?.pageSize,
    );
  }, [searchParams.get("category")]);

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

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="text-black hover:underline">
              Products
            </Link>
            <span>/</span>
            {categories?.length > 0 && query?.category?.length > 0 ? (
              <>
                <Link
                  to={`/products?category=${query?.category}`}
                  className="capitalize hover:underline"
                >
                  {categories?.find((x) => x.id == query?.category)?.name}
                </Link>
              </>
            ) : (
              <p className="capitalize text-black hover:underline">All</p>
            )}
          </header>
        </section>

        <section className="mb-[38px]">
          <Subheader shortHeader="Products" fullHeader="Currently On Sale">
            <SelectField
              boxStyle=""
              name="category"
              isRequired
              selectStyle="!h-8 !text-[12px] !py-1 !px-2"
              defaultName="Filter By Category"
              defaultValue=""
              value={query?.category}
              options={
                categories?.length > 0
                  ? [
                      ...categories?.map((cat) => ({
                        name: cat?.name,
                        value: cat?.id,
                      })),
                    ]
                  : []
              }
              onChange={(e: any) => {
                setQuery((state) => ({
                  ...state,
                  category: e?.target?.value,
                  currentPage: 1,
                }));

                setSearchParams({ category: e?.target?.value });

                // getProducts(e?.target?.value, 1, query?.pageSize);
              }}
            />
          </Subheader>

          <div className={`${productBox}`}>
            {productList?.products?.length > 0 ? (
              productList?.products?.map((product) => (
                <Product product={product} handleOpen={handleViewProduct} />
              ))
            ) : (
              <>
                <p>No products yet</p>
              </>
            )}
          </div>

          <div className="flex w-full justify-center">
            <Pagination
              pageNumber={productList?.currentPage}
              pageSize={query?.pageSize}
              totalCount={productList?.totalItem}
              totalPage={productList?.totalPage}
              onFetch={fetchMore}
            />
          </div>
        </section>
      </div>

      {openProductModal && (
        <Modal
          bodyStyle="w-11/12 md:w-11/12 lg:w-11/12"
          onClose={() => {
            setSelectedProduct(null);
            setOpenProductModal(false);
          }}
        >
          <ProductDetail product={selectedProduct} />
        </Modal>
      )}
    </>
  );
};

export default Products;
