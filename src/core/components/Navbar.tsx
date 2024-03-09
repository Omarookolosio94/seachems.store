import { Link, NavLink, useNavigate } from "react-router-dom";
import Sidenav from "./Sidenav";
import { useState } from "react";
import { logoImg } from "core/consts/images";
import { Menu, Search, ShoppingCart } from "react-feather";
import Modal from "./Modal";

const Navbar = ({ showLinks = true }: { showLinks?: boolean }) => {
  const navigate = useNavigate();
  const [showSidenav, setSidenav] = useState(false);

  const [showSearch, setShowSearch] = useState(false);

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  // TODO: Responsiveness

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 border-b-[0.5px] border-b-black-shade bg-white
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
              className="h-[28px] w-[28px] min-w-[28px]"
            />
            <span className="hidden text-[16px] font-[600] lg:block">
              Ocean Global Chemicals
            </span>
          </Link>

          <div className="hidden items-center justify-between gap-5 text-[14px] sm:flex lg:gap-10">
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

          <div className="flex items-center justify-between gap-3 lg:gap-5">
            <div className="hidden items-center justify-between rounded-[4px] bg-[#f5f5f5] px-2 sm:flex">
              <input
                type="text"
                className=" w-[90%] bg-transparent py-2 outline-none"
                placeholder="what are you looking for"
              />
              <Search className="h-[14px] hover:cursor-pointer" />
            </div>
            <button
              className="block sm:hidden"
              onClick={() => {
                setShowSearch(true);
              }}
            >
              <Search />
            </button>
            <button className="relative" onClick={() => navigate("/cart")}>
              <ShoppingCart />
              <span className="absolute top-0 h-[20px] w-[20px] rounded-full bg-brand text-white">
                1
              </span>
            </button>
            <button
              className="block sm:hidden"
              onClick={() => setSidenav(!showSidenav)}
            >
              <Menu />
            </button>
          </div>
        </nav>
      </div>

      <Sidenav isOpen={showSidenav} close={() => setSidenav(false)} />

      {showSearch && (
        <Modal bodyStyle="h-[25%]" onClose={() => setShowSearch(false)}>
          <div className="mt-3 flex items-center justify-between rounded-[4px] bg-[#f5f5f5] px-5">
            <input
              type="text"
              className="w-[90%] bg-transparent py-2 outline-none"
              placeholder="what are you looking for"
            />

            <Search className="h-[14px] hover:cursor-pointer" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Navbar;
