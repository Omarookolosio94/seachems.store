/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import useProductStore from "core/services/stores/useProductStore";
import { useEffect, useState } from "react";
import Subheader from "core/components/Subheader";
import Product from "modules/partials/Product";
import Pagination from "core/components/Pagination";
import Modal from "core/components/Modal";
import ProductDetail from "modules/partials/ProductDetail";

const Products = () => {
  const navigate = useNavigate();

  const productList = useProductStore((store) => store.productList);
  const getProducts = useProductStore((store) => store.getProducts);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openProductModal, setOpenProductModal] = useState(false);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setOpenProductModal(true);
  };

  useEffect(() => {
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
          </header>
        </section>

        <section className="mb-[38px]">
          <Subheader shortHeader="All Product" fullHeader=""></Subheader>

          <div className="mb-[28px] grid grid-cols-4 gap-5">
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

          <Pagination
            pageNumber={1}
            pageSize={10}
            totalCount={20}
            totalPage={2}
          />
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
