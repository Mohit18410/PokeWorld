import React from "react";
import imgPath from "../../Image/Img1.png";
import "./home.css";

const SiteDescription = () => {
  return (
    <div className=" my-20 flex-horizontal-vertical flex-wrap-reverse lg:gap-32 md:gap-8">
      <div className=" site-moto md:text-left text-center md:mt-0 mt-4">
        <div className="lg:text-5xl md:text-3xl text-2xl md:mb-2 mb-1">
          PokeWorld: Collect, Chat, Explore
        </div>
        <div className="lg:text-3xl md:text-xl text-lg">
          Your Ultimate Pokemon Sanctuary
        </div>
      </div>
      <div className=" lg:w-1/3 md:w-2/5 w-4/6">
        <img src={imgPath} alt="Not Found" />
      </div>
    </div>
  );
};

export default SiteDescription;
