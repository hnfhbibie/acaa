import React from "react";

const SpotifyCard = () => {
  return (
    <div>
      <iframe
        className="border-radius:12px shadow-xl rounded-lg w-[300px] h-[352px] md:w-[400px] md:h-[352px] lg:w-[600px] lg:h-[352px]"
        src="https://open.spotify.com/embed/playlist/7keAxSl3vMVhQpu4TPynRI?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyCard;
