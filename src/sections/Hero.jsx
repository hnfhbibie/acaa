import { CarouselCard } from "../components/card";

const Hero = () => {
  return (
    <section
      className="w-full bg-bghero min-h-screen xl:min-h-[800px]"
      id="home"
    >
      <div className="max-container py-10 flex justify-center items-center md:px-10 sm:px-5">
        <CarouselCard />
      </div>
      <div className="flex flex-col justify-center mt-10 items-center max-container">
        <div className="text-center max-w-4xl mb-10 md:max-w-2xl md:text-xl">
          <h1 className="font-semibold font-poppin text-2xl">SITI HAFSHAH</h1>
          <p className="mt-5 font-nunito font-light">
            I can't imagine a future without you by my side, sharing in life's
            adventures and creating memories together. Forever and always, it's
            you and me, my love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
