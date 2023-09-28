import React from "react";
import { aboutImage } from "../assets/images";

const About = () => {
  return (
    <div
      className="max-container min-h-[785px] flex flex-col gap-10 "
      id="about"
    >
      <div className="flex flex-col justify-center items-center gap-3 text-2xl lg:text-4xl">
        <h1 className="font-bold">ABOUT HER</h1>
        <div className="w-24 h-2 bg-underline rounded-lg lg:w-56" />
      </div>
      <div className="flex lg:flex-row justify-between items-center gap-10 flex-col lg:mx-20">
        <div className="max-w-2xl flex flex-col lg:items-start items-center lg:text-start text-center justify-center mx-4">
          <h1 className="font-semibold text-2xl mb-5 lg:text-3xl">
            SO SWEET AND BEAUTIFULL
          </h1>
          <p className="lg:text-2xl">
            As I sit here thinking about you, my heart overflows with love. You
            are the most beautiful and precious part of my life, and every day
            with you is a gift. Your smile brightens even the darkest of days,
            and your love fills my heart with warmth and joy.
          </p>
        </div>
        <div className="max-w-lg mx-4 md:mx-0">
          <img src={aboutImage} className="rounded-3xl shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
