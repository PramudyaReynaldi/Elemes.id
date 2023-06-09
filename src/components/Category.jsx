import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import { SwiperNavButtons } from "./Buttons/SwiperNavButtons";
import Container from "react-bootstrap/Container";
import imgCupcake from "../assets/images/Card-Image.png";
import imgPizza from "../assets/images/Card-pizza.png";
import imgKebab from "../assets/images/Card-kebab.png";
import imgSalmon from "../assets/images/Card-salmon.png";
import imgDonut from "../assets/images/Card-doughnut.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Category() {
  return (
    <>
      <Container className="category__content">
        <h1 style={{ fontSize: "38px" }}>Browser Our Category</h1>
        <h2 style={{ color: "#8BAC3E" }}>Receipt</h2>
        <div className="card__food">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={40}
            watchSlidesProgress={true}
            slidesPerView={3}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={imgCupcake} className="mt-5" />
              <p className="mt-3">Cupcake</p>
              <p className="text__items">22 Items</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgPizza} className="mt-5" />
              <p className="mt-3">Pizza</p>
              <p className="text__items">25 Items</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgKebab} className="mt-5" />
              <p className="mt-3">Kebab</p>
              <p className="text__items">12 Items</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgSalmon} className="mt-5" />
              <p className="mt-3">Salmon</p>
              <p className="text__items">22 Items</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imgDonut} className="mt-5" />
              <p className="mt-3">Doughnut</p>
              <p className="text__items">11 Items</p>
            </SwiperSlide>
            <SwiperNavButtons />
          </Swiper>
        </div>
      </Container>
    </>
  );
}
