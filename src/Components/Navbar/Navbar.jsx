import React from "react";
import { Link } from "react-router";
import { assets } from "../../assets/assets";

// nav menus array of obj
const navItems = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/career",
    label: "Career",
  },
];

const NavItems = () => {
  return (
    <ul className="flex items-center gap-4">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <nav className="mt-5 mb-20 w-full flex items-center justify-between">
      <div className=""></div>

      <div className="">
        <NavItems />
      </div>

      <div className="flex items-center gap-2.5">
        <div className="">
          <img
            className="cursor-pointer"
            src={assets.user_icon}
            alt="user_icon"
          />
        </div>

        <div className="">
          <button className="cursor-pointer px-[25px] py-3 rounded-full text-sm font-normal bg-black text-white hover:bg-black/70">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
