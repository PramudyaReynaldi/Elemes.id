import React from "react";
import { useSwiper } from "swiper/react";
import imgPrev from "../../assets/images/prev.png";
import imgNext from "../../assets/images/next.png";

function SwiperNavButtons() {
  const swiper = useSwiper();

  return (
    <>
      <div className="swiper-nav-btns">
        <button onClick={() => swiper.slidePrev()}>
          <img src={imgPrev} /> &nbsp;
          Prev
        </button>
        <button onClick={() => swiper.slideNext()}>
          Next &nbsp;
          <img src={imgNext} /> 
        </button>
      </div>
    </>
  );
}

export { SwiperNavButtons }