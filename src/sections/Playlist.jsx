import { SpotifyCard } from "../components/card";

const Playlist = () => {
  return (
    <div className="w-full bg-bghero">
      <div className="max-container min-h-screen flex flex-col gap-10 py-20">
        <div className="flex flex-col justify-center items-center gap-3 text-2xl lg:text-4xl">
          <h1 className="font-bold">PLAYLIST</h1>
          <div className="w-24 h-2 bg-primary rounded-lg lg:w-56" />
        </div>
        <div lassName="flex flex-col">
          <div className="flex justify-center items-center">
            <SpotifyCard />
          </div>
        </div>
        <div className="flex justify-center mt-20 w-full items-center">
          <p className="text-center font-light italic max-w-xl mx-10 text-2xl font-nunito ">
            -Your laughter is the soundtrack of my happiest moments, and your
            smile, the light that guides me through my darkest days.-
          </p>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
