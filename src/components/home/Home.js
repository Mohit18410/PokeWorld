import React from "react";
import SiteDescription from "./SiteDescription";
import WeekPokemon from "./WeekPokemon";
import Explore from "./Explore";
import TopUsers from "./TopUsers";
import SignLogin from "./SignLogin";
import { Header } from "../Header";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div className=" h-screen">
      <Header />
      <SiteDescription />
      <WeekPokemon />
      <Explore />
      <TopUsers />
      <SignLogin />
      <Footer />
    </div>
  );
}

export default Home;
