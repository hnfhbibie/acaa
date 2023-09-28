"use client";

import { Carousel } from "flowbite-react";
import { carouselImage } from "../../constant";

const CarouselCard = () => {
  return (
    <div className=" w-72 md:w-[700px] md:h-[400px] lg:w-full lg:h-96 h-40 rounded-2xl shadow-xl">
      <Carousel slideInterval={4000} className="">
        {carouselImage.map((carouselImageItem) => (
          <img
            className="w-full h-full"
            src={carouselImageItem.src}
            key={carouselImageItem.alt}
            alt={carouselImageItem.alt}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCard;
