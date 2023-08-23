import React from "react";
import { logoFooter } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import copyrightSign from "../assets/images/";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={logoFooter} alt="nike" width={120} height={40} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm ">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon, idx) => (
              <div
                className="flex justify-center items-center bg-white h-11 w-11 rounded-full cursor-pointer"
                key={idx}
              >
                <span className="text-2xl text-black ">{icon.src}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((link, idx) => (
            <div key={idx}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-4">
                {link.title}
              </h4>
              <ul>
                {link.links.map((item) => (
                  <li
                    className="mt-2 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={item.name}
                  >
                    <a href="">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <span className="rounded text-2xl text-white-400 font-montserrat ">
            &copy;
          </span>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
