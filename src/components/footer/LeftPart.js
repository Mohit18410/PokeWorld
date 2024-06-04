import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./footer.css";

const LeftPart = () => {
  return (
    <div className="flex-vertical flex-col leftfooter">
      <div className="footerlinkbox">
        <div className="text-3xl">PokeWorld</div>
        <div className="flex flex-col text-lg footerlinkgroup">
          <NavLink to="/" className="footerlinks">
            Home
          </NavLink>
          <NavLink to="/explorePokeworld" className="footerlinks">
            Explore The PokeWorld
          </NavLink>
          <NavLink className="footerlinks">Contact Us</NavLink>
          <NavLink className="footerlinks">Pokemon.com</NavLink>
        </div>
      </div>
      <div className="flex-horizontal gap-2 mt-3 pt-3 border-t-2 w-2/4 footericongroup">
        <FaInstagram size={24} className="footericons" />
        <FaFacebookSquare size={24} className="footericons" />
        <FaLinkedin size={24} className="footericons" />
        <FaSquareXTwitter size={24} className="footericons" />
      </div>
    </div>
  );
};

export default LeftPart;
