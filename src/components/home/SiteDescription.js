import React from "react";
import imgPath from "../../Image/Img1.png";

const SiteDescription = () => {
  return (
    <div className=" my-14 flex justify-center items-center gap-32">
      <div>
        <div className="text-5xl mb-2">PokeWorld: Collect, Chat, Explore</div>
        <div className="text-3xl">Your Ultimate Pokemon Sanctuary</div>
      </div>
      <div className=" w-1/3">
        <img src={imgPath} alt="Not Found" />
      </div>
    </div>
  );
};

export default SiteDescription;
