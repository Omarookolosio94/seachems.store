/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

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
            <Link to="/privacy" className="text-black hover:underline">
              Privacy
            </Link>
          </header>
        </section>
      </div>
    </>
  );
};

export default Privacy;
