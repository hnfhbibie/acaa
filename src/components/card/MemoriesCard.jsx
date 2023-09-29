import React from "react";

const MemoriesCard = ({ imgUrl, alt, headline, body }) => {
  return (
    <div className="flex items-center rounded-xl bg-underline shadow-xl w-[300px] h-[150px] lg:w-[400px] lg:h-[250px]">
      <div className="h-full">
        <img
          src={imgUrl}
          alt={alt}
          className="object-cover h-full max-w-lg rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center max-w-md gap-2 px-2 py-2">
        <h2 className="text-center  font-poppin text-sm font-semibold">
          {headline}
        </h2>
        <p className="text-start font-nunito font-thin text-[10px] max-w-sm">
          {body}
        </p>
      </div>
    </div>
  );
};

export default MemoriesCard;
