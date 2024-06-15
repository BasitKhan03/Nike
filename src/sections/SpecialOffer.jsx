import React, { useEffect } from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";

import AOS from "aos";
import "aos/dist/aos.css";

const SpecialOffer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div
        className="flex-1 xl:pl-5"
        data-aos="fade-up-right"
        data-aos-duration="1500"
      >
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div
        className="flex flex-1 flex-col"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View details" />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
