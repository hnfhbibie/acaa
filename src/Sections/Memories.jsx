import React from "react";
import MemoriesCard from "../components/Cards/MemoriesCard";
import { memoriesCardImage } from "../constant";

const Memories = () => {
  return (
    <div
      className="max-container min-h-screen flex flex-col gap-10"
      id="memories"
    >
      <div className="flex flex-col justify-center items-center gap-3 text-2xl lg:text-4xl">
        <h1 className="font-bold">MEMORIES</h1>
        <div className="w-24 h-2 bg-underline rounded-lg lg:w-56" />
      </div>
      <div className="grid gap-10 md:mx-5 md:grid-cols-2 justify-center items-center xl:grid-cols-3 mt-10 lg:mx-5 ">
        {memoriesCardImage.map((item) => (
          <MemoriesCard key={item.headline} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Memories;
