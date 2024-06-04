import React from "react";
import SiteDescription from "./SiteDescription";
import WeekPokemon from "./WeekPokemon";
import Explore from "./Explore";
import TopUsers from "./TopUsers";
import SignLogin from "./SignLogin";

function Home() {
  return (
    <div>
      <SiteDescription />
      <WeekPokemon />
      <Explore />
      <TopUsers />
      <SignLogin />
    </div>
  );
}

export default Home;
