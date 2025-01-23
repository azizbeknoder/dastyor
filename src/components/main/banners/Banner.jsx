import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./banner.css";
import {slidesData } from "../../../assets/data/data.js";
import Callculator from "../callculator/Callculator.jsx";
import { LanguageContext } from "../../../LanguageContext.jsx";

const Banner = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="banners">
      <Callculator/>
      <Swiper
        className="banner__content container"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slidesData[language].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`slide__banner ${slide.className}`}>
              <div className="slide__banner-items">
                <h2 className="slide__banner-title">{slide.title}</h2>
                <p className="slide__banner-desc">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
