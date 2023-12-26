import React from "react";
import { NavLink, Link } from "react-router-dom";
import imgPath from "../Image/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import "./header.css";
export const Header = () => {
  return (
    <div className="header-container overflow-x-hidden py-1 px-12">
      <div className="flex justify-between items-center">
        <Link>
          <img src={imgPath} alt="Not Found" className=" w-20" />
        </Link>
        <div className="flex justify-between items-center w-1/4 text-lg">
          <NavLink className=" text-white">Home</NavLink>
          <NavLink className=" text-white">Explore PokeWorld</NavLink>
          <NavLink className=" text-white">Contact Us</NavLink>
          <FaRegUserCircle
            size={26}
            className=" fill-white hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
