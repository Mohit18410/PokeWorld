import React from "react";
import UsersCarousel from "./UsersCarousel";
import Spinner from "../Spinner";

let userData = [
  {
    name: "1",
    pokemonCollected: "1",
    rank: "1",
    firstPokemon: "1",
  },
  {
    name: "2",
    pokemonCollected: "2",
    rank: "2",
    firstPokemon: "2",
  },
  {
    name: "3",
    pokemonCollected: "3",
    rank: "3",
    firstPokemon: "3",
  },
];

const TopUsers = () => {
  return (
    <div className=" mb-10 mx-6">
      <div className=" mb-10 text-3xl lg:ml-14">Top Users</div>
      <div className="flex-horizontal">
        {userData ? (
          <UsersCarousel users={userData} />
        ) : (
          <div className="rounded-xl border-4 flex-horizontal-vertical w-2/5 h-full py-12">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopUsers;
