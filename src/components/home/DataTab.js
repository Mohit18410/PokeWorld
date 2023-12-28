import React from "react";

const DataTab = ({ element }) => {
  return (
    <div className=" flex justify-center">
      {element.map((value, index) => {
        const backgroundColor = index % 2 === 0 ? "black" : "red";
        return (
          <div
            key={index}
            style={{ backgroundColor }}
            className=" text-lg text-white rounded-2xl m-1 py-1 px-3 text-center"
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default DataTab;
