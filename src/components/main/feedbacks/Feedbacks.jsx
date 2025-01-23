import React, { useRef, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./feedbacks.css";
import { feedbacksData } from "../../../assets/data/data.js";
import { images } from "../../../assets/image.js";
import { LanguageContext } from "../../../LanguageContext.jsx";
const Feedbacks = () => {
  const swiperRef = useRef(null);
  const { language } = useContext(LanguageContext);
  return (
    <div id="feedbacks" className="feedbacks container">
      <h1 className="autopark__title cards__title">{language == 'UZ' ? 'Fikrlar' : 'Отзывы'}</h1>
      <div className="feedbacks__content">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="feedbacks__swiper"
          spaceBetween={70}
          slidesPerView={4}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1020: {
              slidesPerView: 4,
            },
            741: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {feedbacksData.map((feedback, index) => (
            <SwiperSlide key={index} className="feedbacks__slide">
              <div className="feedbacks__card">
                <h3 className="feedbacks__client">{feedback.client}</h3>
                <div className="feed__flex">
                  <a
                    href={feedback.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="feedbacks__platform"
                  >
                    {feedback.platform}
                  </a>
                  <div className="feedbacks__rating">
                    {Array.from({ length: feedback.rating }).map((_, i) => (
                      <span key={i} className="star">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <p className="feedbacks__text">{feedback.feedback}</p>
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

export default Feedbacks;
