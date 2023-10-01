import React from "react";

const Quest = () => {
  return (
    <div className="w-full bg-primary">
      <div className="max-container bg-quest bg-cover bg-center min-h-screen flex flex-col gap-10">
        <div className="py-20 w-full flex justify-center items-center flex-col gap-20">
          <div className="border w-60 h-24 md:w-96 md:h-32 bg-slate-200 bg-opacity-40 rounded-lg flex justify-center items-center text-center">
            <p className="font-nunito md:text-sm text-[9px] mx-5 italic ">
              I love you, not just for who you are, but for who I am when I'm
              with you. You make me want to be the best version of myself, and
              I'm grateful for the love, joy, and endless happiness you bring
              into my world.
            </p>
          </div>
          <h1 className="text-white font-poppin font-bold md:text-[72px] text-center text-[48px] hover:text-black">
            SHE IS MY GIRLFRIEND
          </h1>
          <div className="border w-60 h-24 md:w-96 md:h-32 bg-slate-200 bg-opacity-40 rounded-lg flex justify-center items-center text-center">
            <p className="font-nunito md:text-sm text-[9px] mx-5 italic ">
              So, here it is, plain and simpleI love you more than words can
              ever convey, and I can't wait to continue writing this beautiful
              love story with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quest;
