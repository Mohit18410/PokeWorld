import React from "react";
import { NavLink, Link } from "react-router-dom";
import imgPath from "../Image/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import "./header.css";
export const Header = () => {
  return (
    <div className="header-container py-1 lg:px-12 md:px-7 sm:px-6 px-5">
      <div className="flex justify-between items-center">
        <div className=" w-20">
          <Link>
            <img src={imgPath} alt="Not Found" className=" w-full" />
          </Link>
        </div>
        <div className="flex justify-between items-center w-auto gap-2 sm:gap-4 2xl:text-xl xl:text-lg md:text-md">
          <NavLink to="/" className="links">
            Home
          </NavLink>
          <NavLink to="/explorePokeworld" className="links">
            Explore PokeWorld
          </NavLink>
          <NavLink className="links">Contact Us</NavLink>
          <div className=" w-6 flex justify-center">
            <FaRegUserCircle
              size={"1.5em"}
              className="sign-icon fill-white hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
