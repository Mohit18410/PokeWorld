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
      className=" mt-6 sm:px-4 py-5 flex-vertical flex-col"
    >
      <div className=" py-11 md:w-3/5 w-4/5 h-96 flex-horizontal-vertical text-center border-b-2 upperfooter">
        <div className="w-3/5 left">
          <LeftPart />
        </div>
        <div className=" grow h-full border-l-2 border-white rightfooter">
          <RightPart />
        </div>
      </div>
      <div className=" mt-3 flex-vertical flex-col text-base">
        Made by Mohit
      </div>
    </div>
  );
};

export default Footer;
