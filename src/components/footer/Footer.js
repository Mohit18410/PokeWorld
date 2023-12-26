import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(22, 26, 29)",
        color: "rgb(253, 240, 213)",
      }}
      className=" mt-6 px-4 h-3/5 flex flex-col items-center"
    >
      <div className=" w-3/5 flex justify-center items-center text-center border-b-2 h-5/6">
        <div className="w-3/5">
          <LeftPart />
        </div>
        <div className=" grow h-5/6 border-l-2 border-white">
          <RightPart />
        </div>
      </div>
      <div className=" mt-3 flex flex-col items-center text-base">
        <div>Made by Mohit</div>
        <div>
          Special Mention to{" "}
          <Link
            to="https://pokedevs.gitbook.io/pokedex/"
            className=" underline"
          >
            Pokédex API
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
