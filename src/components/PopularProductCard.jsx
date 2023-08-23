import React from "react";
import { FaStar } from "react-icons/fa";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <FaStar className="text-red-400 text-xl" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.4)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <h3 className="mt-2 font-semibold font-montserrat text-red-400 text-md leading-normal ">
        {price}
      </h3>
    </div>
  );
};

export default PopularProductCard;
