import React from "react";

const DataTab = ({ element }) => {
  return (
    <div className=" flex-horizontal flex-wrap">
      {element.map((value, index) => {
        const backgroundColor = index % 2 === 0 ? "black" : "red";
        return (
          <div
            key={index}
            style={{ backgroundColor }}
            className=" lg:text-lg md:text-base text-white rounded-2xl m-1 py-1 px-3 text-center flex-vertical"
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default DataTab;
