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
            <Link to="/about" className="text-black hover:underline">
              About
            </Link>
          </header>
        </section>

        <section className="mb-[38px] flex h-[60vh] items-center gap-5">
          <div className="h-full w-1/2">
            <h5 className="mb-5 text-[28px] font-[500]">Our Story</h5>
            <p className="mb-5">
              Seachems NG is a leading wholesale distributor of high-quality
              chemicals serving diverse industries across Nigeria. We offer a
              comprehensive range of products, competitive pricing, reliable
              supply, and expert support to meet your specific needs.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              cupiditate dicta cum nostrum aliquid nesciunt? Omnis ducimus, illo
              consectetur rerum veniam dolores eaque quisquam esse neque
              cupiditate voluptas dicta autem incidunt maxime ea voluptatibus
              non atque voluptate. A earum beatae nesciunt ab fugit explicabo,
              cupiditate inventore est atque labore voluptatem.
            </p>
          </div>
          <div className="flex h-full w-1/2 items-center overflow-hidden rounded-[4px]">
            <img src={hero1} alt="" className="rounded-[4px] w-full" />
          </div>
        </section>

        <ValueProposition />
      </div>
    </>
  );
};

export default About;
