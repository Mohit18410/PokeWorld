import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const LeftPart = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl">PokeWorld</div>
      <div className="flex flex-col text-lg">
        <NavLink>Home</NavLink>
        <NavLink>Explore The PokeWorld</NavLink>
        <NavLink>Contact Us</NavLink>
        <NavLink>Pokemon.com</NavLink>
      </div>
      <div className="flex justify-center gap-2 mt-3 pt-3 border-t-2 w-2/4">
        <FaInstagram size={24} />
        <FaFacebookSquare size={24} />
        <FaLinkedin size={24} />
        <FaSquareXTwitter size={24} />
      </div>
    </div>
  );
};

export default LeftPart;
