/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import { btn } from "core/consts/styling";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <>
      {addMetaData({
        title: "Ocean Global Chemicals Nigeria - 404",
        description: "Page does not exist.",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/notfound" className="text-black hover:underline">
              404 Error
            </Link>
          </header>
        </section>

        <section className="mb-[28px]">
          <p className="mb-5">
            The page or resource you requested for does not exist.
          </p>

          <div className="flex w-full flex-col items-center gap-3 sm:w-2/3 sm:flex-row lg:w-1/2">
            <Link
              to="/home"
              className={`${btn} bg-shade w-full border !px-[32px] text-[12px] font-[500] sm:w-1/2`}
            >
              Back to Home
            </Link>

            <Link
              to="/products"
              className={`${btn} w-full bg-brand !px-[32px] text-[12px] font-[500] text-white sm:w-1/2`}
            >
              Shop for Products
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Notfound;
