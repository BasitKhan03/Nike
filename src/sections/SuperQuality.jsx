import React, { useEffect } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

import AOS from "aos";
import "aos/dist/aos.css";

const SuperQuality = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div
        className="flex flex-1 flex-col xl:pl-5"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="Shop now" iconUrl={arrowRight} />
        </div>
      </div>

      <div
        className="flex-1 flex justify-center items-center"
        data-aos="zoom-in-down"
        data-aos-duration="1500"
      >
        <img
          src={shoe8}
          alt="Shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
