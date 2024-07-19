import React from "react";
import SiteDescription from "./SiteDescription";
import WeekPokemon from "./WeekPokemon";
import Explore from "./Explore";
import TopUsers from "./TopUsers";
import SignLogin from "./SignLogin";

function Home() {
  return (
    <>
      <SiteDescription />
      <WeekPokemon />
      <Explore />
      <TopUsers />
      <SignLogin />
    </>
  );
}

export default Home;
