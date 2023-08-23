import React from "react";

const Subscribe = () => {
  return (
    <div
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign up for <span className="text-red-400">Updates</span> <br />&
        Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <button className="flex justify-center items-center gap-2 px-4 py-3 border font-montserrat text-lg leading-none bg-red-400 rounded-full text-white border-red-600">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
