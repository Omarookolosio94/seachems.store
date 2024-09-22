/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";
import { hero1 } from "core/consts/images";
import ValueProposition from "modules/partials/ValueProposition";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      {addMetaData({
        title: "Ocean Global Chemicals Nigeria - About",
        description:
          "Ocean Global Chemicals Nigeria is a leading wholesale distributor of high-quality chemicals serving diverse industries across Nigeria.",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/about" className="text-black hover:underline">
              About
            </Link>
          </header>
        </section>

        <section className="mb-[38px] flex h-auto flex-col-reverse items-center gap-5 sm:flex-row">
          <div className="h-full w-full sm:w-1/2">
            <h5 className="mb-5 text-[28px] font-[500]">Our Story</h5>
            <p className="mb-5 whitespace-pre-wrap">
              {`Ocean Global Chemicals Nigeria has established itself as a premier wholesale distributor of high-quality chemicals, serving a wide array of industries across the nation. With a mission to drive industrial growth and innovation, Ocean Global Chemicals stands out for its unwavering commitment to delivering excellence.

Founded with the vision to provide businesses with access to top-tier chemical products, Ocean Global Chemicals has built strong relationships with trusted manufacturers, ensuring that every product meets stringent quality standards. Whether catering to the agriculture, manufacturing, pharmaceuticals, or oil and gas sectors, the company offers a comprehensive range of chemicals designed to meet the unique needs of each industry.

Beyond products, Ocean Global Chemicals takes pride in providing exceptional customer support. The company's team of experts works closely with clients, offering guidance on product selection, safety protocols, and regulatory compliance. This hands-on approach ensures that businesses can confidently rely on Ocean Global Chemicals not just as a supplier but as a strategic partner.

In an industry where reliability is crucial, Ocean Global Chemicals has consistently proven its ability to maintain a steady supply chain. By leveraging a robust logistics network, the company guarantees timely deliveries, helping customers maintain uninterrupted operations.

Competitive pricing, coupled with superior product quality and reliable support, makes Ocean Global Chemicals Nigeria the go-to distributor for businesses seeking a dependable partner in their growth journey. Through its dedication to innovation and service, Ocean Global Chemicals continues to fuel industrial success across Nigeria, empowering businesses to reach new heights.`}
            </p>
          </div>

          <div className="flex h-full w-full items-center overflow-hidden rounded-[4px] sm:w-1/2">
            <img src={hero1} alt="" className="w-full rounded-[4px]" />
          </div>
        </section>

        <ValueProposition />
      </div>
    </>
  );
};

export default About;
