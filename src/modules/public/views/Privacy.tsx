/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <>
      {addMetaData({
        title: "Ocean Global Chemicals Nigeria - Privacy",
        description: "Our privacy policy",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/privacy" className="text-black hover:underline">
              Privacy Policy
            </Link>
          </header>
        </section>

        <section className="mb-[28px]">
          <p>
            This page is under construction. We'll be back soon with something
            awesome!
          </p>
        </section>
      </div>
    </>
  );
};

export default Privacy;
