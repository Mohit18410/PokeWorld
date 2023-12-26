import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import imgPath from "../../Image/Img1.png";
import imgPath2 from "../../Image/bulbasaur.png";

const UsersCarousel = () => {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 1,
        autoplay: true,
        width: "80vw",
        height: "30vw",
        pagination: false,
        drag: "free",
        pauseOnHover: true,
        lazyLoad: "nearby",
      }}
      aria-label="Images"
    >
      <SplideSlide>
        <div className=" border-2 border-black">
          <img src={imgPath} alt="Not found" />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className=" border-2 border-black">
          <img src={imgPath2} alt="Not found" />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className=" border-2 border-black">
          <img src={imgPath} alt="Not found" />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className=" border-2 border-black">
          <img src={imgPath2} alt="Not found" />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className=" border-2 border-black">
          <img src={imgPath} alt="Not found" />
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default UsersCarousel;
