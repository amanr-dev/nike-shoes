import React from "react";
import Logo from "../assets/images/headerLogo.png";
import { navLinks } from "../constants";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={Logo}
            alt="logo"
            style={{ height: "50px", width: "66px" }}
            className="m-0"
          />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-red-400
                transition-all ease-in duration-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block cursor-pointer">
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
