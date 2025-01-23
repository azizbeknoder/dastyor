import React, { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./autopark.css";
import { images } from "../../../assets/image";

import { carData } from "../../../assets/data/data.js";
import { LanguageContext } from "../../../LanguageContext.jsx";

const AutoPark = () => {
  const { language } = useContext(LanguageContext); // This will select RU or UZ
  const swiperRef = useRef(null);

  const { title, cars, labels } = carData[language]; // Extract relevant data based on selected language

  return (
    <div id="autopark" className="autopark container">
      <h1 className="autopark__title cards__title">{title}</h1>
      <div className="autopark__content">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="autopark__swiper"
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index} className="autopark__slide">
              <div className="autopark__slide-content">
                <div className="autopark__image">
                  <img src={images[`auto${index + 1}`]} alt={car.name} />
                </div>
                <div className="autopark__details">
                  <h2 className="autopark__car-name card__title">{car.name}</h2>
                  <div className="auto__data">
                    <div className="card__names">
                      <div className="auto__name">
                        <strong className="auto__strong">{labels.length}</strong>
                      </div>
                      <div className="auto__name">
                        <strong className="auto__strong">{labels.width}</strong>
                      </div>
                      <div className="auto__name">
                        <strong className="auto__strong">{labels.height}</strong>
                      </div>
                      <div className="auto__name">
                        <strong className="auto__strong">{labels.volume}</strong>
                      </div>
                      <div className="auto__name">
                        <strong className="auto__strong">{labels.capacity}</strong>
                      </div>
                    </div>

                    <div className="card__values">
                      <div className="auto__value">
                        <span>{car.length}</span>
                      </div>
                      <div className="auto__value">
                        <span>{car.width}</span>
                      </div>
                      <div className="auto__value">
                        <span>{car.height}</span>
                      </div>
                      <div className="auto__value">
                        <span>{car.volume}</span>
                      </div>
                      <div className="auto__value">
                        <span>{car.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="autopark__swiper-buttons swiper-buttons">
          <button
            className="swiper-button-prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={images.prev} alt="Previous" className="swiper__btn-img" />
          </button>
          <button
            className="swiper-button-next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src={images.next} alt="Next" className="swiper__btn-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoPark;
