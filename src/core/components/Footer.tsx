import { logoImg } from "core/consts/images";
import { ArrowUpCircle } from "react-feather";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#111111] text-white">
        <div className="mx-auto w-11/12 pt-[75px] md:w-4/5">
          <div className="mb-[48px] grid grid-cols-4 grid-cols-5 gap-5">
            <div className="col-span-5 text-center md:col-span-2 md:text-start">
              <Link
                to="/home"
                className="mb-5 flex items-center justify-center gap-1 md:justify-start"
              >
                <img
                  src={logoImg}
                  alt="Seachems.ng"
                  loading="lazy"
                  className="w-[14px]"
                />
                <span className="text-[12px] font-[600] uppercase">
                  SEACHEMS.NG
                </span>
              </Link>
              <p className="text-[12px]">
                Seachems NG is a leading wholesale distributor of high-quality
                chemicals serving diverse industries across Nigeria. We offer a
                comprehensive range of products, competitive pricing, reliable
                supply, and expert support to meet your specific needs.
              </p>
            </div>

            <div className="col-span-5 md:col-span-1">
              <h5 className="mb-1 text-center text-[14px] font-[500] md:mb-5 md:text-start">
                Account
              </h5>

              <div className="flex justify-center gap-5 md:flex-col md:justify-start">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[12px] underline hover:underline"
                      : "text-[12px] hover:underline"
                  }
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[12px] underline hover:underline"
                      : "text-[12px] hover:underline"
                  }
                >
                  Cart
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[12px] underline hover:underline"
                      : "text-[12px] hover:underline"
                  }
                >
                  About
                </NavLink>
              </div>
            </div>

            <div className="col-span-5 md:col-span-1">
              <h5 className="mb-1 text-center text-[14px] font-[500] md:mb-5 md:text-start">
                Quick Links
              </h5>

              <div className="flex justify-center gap-5 md:flex-col md:justify-start">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[12px] underline hover:underline "
                      : "text-[12px] hover:underline "
                  }
                >
                  Contact
                </NavLink>

                <NavLink
                  to="/privacy"
                  //onClick={(e: any) => e.preventDefault()}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[12px] underline hover:underline"
                      : "text-[12px] hover:underline"
                  }
                >
                  Privacy Policy
                </NavLink>
                <NavLink
                  to="/terms"
                  //onClick={(e: any) => e.preventDefault()}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[12px] underline hover:underline "
                      : "text-[12px] hover:underline"
                  }
                >
                  Terms of Use
                </NavLink>
              </div>
            </div>

            <div className="col-span-5 md:col-span-1">
              <h5 className="mb-1 text-center text-[14px] font-[500] md:mb-5 md:text-start">
                Support
              </h5>

              <div className="flex flex-col items-center gap-2 text-[12px] md:items-start md:gap-5">
                <p>48 Lagos Street Lagos</p>

                <a
                  href="mailto:oceanglobalchems@gmail.com"
                  className="hover:underline"
                >
                  oceanglobalchems@gmail.com
                </a>

                <a href="tel:+" className="hover:underline">
                  +234 701 900 0000
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-t-[.5px] border-t-[#d9d9d9]">
            <div className="mx-auto flex flex-col items-center justify-between gap-3 py-[20px] text-[12px] md:flex-row">
              <p>
                &copy; 2012 - {new Date().getFullYear()} Seachems.ng. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
