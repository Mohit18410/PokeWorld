import React from "react";
import imgPath from "../../Image/bulbasaur.png";
import { FaHeart } from "react-icons/fa";

const Release = () => {
  return (
    <div className="mx-8 my-4">
      <div className="text-3xl mb-4">This Week Release:</div>
      <div className="flex justify-around items-center gap-20 border-black border-4">
        <div className="">
          <img src={imgPath} alt="Not Found" />
        </div>
        <div className="">
          <div>
            <div className=" text-center text-5xl mb-4">Name</div>
            <div className="text-2xl mb-2">Type:</div>
            <div className="text-2xl mb-4">Attack:</div>
          </div>
          <div className="flex items-center">
            <button className=" border-4 border-black rounded-lg mr-3 p-2">
              Add To Collection
            </button>
            <button>
              <FaHeart
                size={34}
                className=" fill-red-600 border-2 border-black rounded-sm p-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Release;
