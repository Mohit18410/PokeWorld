import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(22, 26, 29)",
        color: "rgb(253, 240, 213)",
      }}
      className=" mt-6 sm:px-4 py-5 flex flex-col items-center"
    >
      <div className=" py-11 md:w-3/5 w-4/5 h-96 flex justify-center items-center text-center border-b-2 upperfooter">
        <div className="w-3/5 left">
          <LeftPart />
        </div>
        <div className=" grow h-full border-l-2 border-white rightfooter">
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
