import React from "react";
import { offer } from "../assets/images";
import { FaArrowRight } from "react-icons/fa";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer banner"
          width={777}
          height={688}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-red-400 inline-block mt-3"> Special </span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap  gap-5">
          <button className="flex justify-center items-center gap-2 px-3 py-3 border font-montserrat text-lg leading-none bg-red-400 rounded-full text-white border-red-600">
            view details
          </button>
          <button className="flex justify-center items-center gap-2 px-3 py-3 border font-montserrat text-lg leading-none bg-white rounded-full text-slate-gray">
            Know more
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
