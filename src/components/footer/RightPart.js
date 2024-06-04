import React from "react";
import imgPath from "../../Image/footer-image.png";

const RightPart = () => {
  return (
    <div className=" h-full flex-horizontal">
      <img src={imgPath} alt="" className=" max-h-full max-w-full" />
    </div>
  );
};

export default RightPart;
