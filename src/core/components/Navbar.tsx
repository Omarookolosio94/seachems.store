import { btn } from "core/consts/styling";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Sidenav from "./Sidenav";
import { useState } from "react";
import { logoImg } from "core/consts/images";
import { Search, ShoppingCart } from "react-feather";

const Navbar = ({ showLinks = true }: { showLinks?: boolean }) => {
  const navigate = useNavigate();
  const [showSidenav, setSidenav] = useState(false);

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  // TODO: Responsiveness

  return (
    <>
      <div
        className={`border-b-black-shade bg-white fixed left-0 right-0 top-0 border-b-[0.5px]
        `}
        style={{
          zIndex: 600,
        }}
      >
        <nav className="mx-auto my-1 flex w-11/12 items-center justify-between py-[10px] md:w-4/5">
          <Link to="/home" className="flex items-center gap-1">
            <img
              src={logoImg}
              alt="Seachems.ng"
              loading="lazy"
              className="w-[18px]"
            />
            <span className="font-[600] uppercase">SEACHEMS.NG</span>
          </Link>
          <div className="flex items-center justify-between gap-10 text-[14px]">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "underline hover:underline" : "hover:underline"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "underline hover:underline" : "hover:underline"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "underline hover:underline" : "hover:underline"
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center rounded-[5px] bg-[#f5f5f5] px-4">
              <input
                type="text"
                className="bg-transparent py-2 outline-none"
                placeholder="what are you looking for"
              />
              <Search className="hover:cursor-pointer" />
            </div>
            <button className="relative">
              <ShoppingCart className="hover:cursor-pointer" />
              <span className="absolute top-0 h-[20px] w-[20px] rounded-full bg-brand text-white">
                1
              </span>
            </button>
          </div>
        </nav>
      </div>

      <Sidenav isOpen={showSidenav} close={() => setSidenav(false)} />
    </>
  );
};

export default Navbar;
