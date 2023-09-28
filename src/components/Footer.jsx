import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent py-5 absolute">
      <div className="flex max-container px-4 items-center justify-between gap-10">
        <p className="text-start text-[8px] md:text-[14px] max-w-md md:max-w-lg font-nunito">
          You are the unsung heroes in the credits of my story, and your
          presence is the sweetest part of our tale. With love and gratitude,
          Your Casper
        </p>
        <h2 className="font-bold font-poppin max-w-sm text-[10px] md:text-xl text-right md:text-center">
          DESIGNED BY HANIF HABIBIE
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
