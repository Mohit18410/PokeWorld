import React from "react";
import SiteDescription from "./SiteDescription";
import Release from "./Release";
import Explore from "./Explore";
import TopUsers from "./TopUsers";
import SignLogin from "./SignLogin";

function Home() {
  return (
    <div className=" overflow-x-hidden">
      <SiteDescription />
      <Release />
      <Explore />
      <TopUsers />
      <SignLogin />
    </div>
  );
}

export default Home;
