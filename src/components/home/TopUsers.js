import React from "react";
import UsersCarousel from "./UsersCarousel";

const TopUsers = () => {
  return (
    <div className=" my-20 mx-6">
      <div className="mb-4 text-3xl">Top Users</div>
      <UsersCarousel />
    </div>
  );
};

export default TopUsers;
