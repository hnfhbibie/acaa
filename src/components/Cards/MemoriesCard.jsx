import React from "react";

const MemoriesCard = ({ imgUrl, alt, headline, body }) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-underline shadow-xl w-[300px] h-[150px] lg:w-[400px] lg:h-[250px]">
      <div className="w-full h-full">
        <img
          src={imgUrl}
          alt={alt}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 max-w-md mr-2 my-2 ">
        <h2 className="text-center  font-poppin text-sm font-semibold">
          {headline}
        </h2>
        <p className="text-start font-nunito font-thin text-sm ">{body}</p>
      </div>
    </div>
  );
};

export default MemoriesCard;
