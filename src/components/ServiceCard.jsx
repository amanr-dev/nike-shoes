import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-red-400 rounded-full">
        <span className="text-white text-xl font-bold">{imgURL}</span>
      </div>
      <h3 className="mt-4 font-palanquin text-2xl leading-normal font-bold ">
        {label}
      </h3>
      <p className="mt-2 break-words font-montserrat text-md leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
