import React from "react";
import SiteDescription from "./SiteDescription";
import Release from "./Release";
import Explore from "./Explore";

function Home() {
  return (
    <div className=" overflow-x-hidden">
      <SiteDescription />
      <Release />
      <Explore />
    </div>
  );
}

export default Home;
