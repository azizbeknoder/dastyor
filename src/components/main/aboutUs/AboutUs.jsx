import React, { useContext, useRef, useState } from "react";
import "./aboutUs.css";
import { images } from "../../../assets/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { aboutUsData } from "../../../assets/data/data.js";
import { LanguageContext } from "../../../LanguageContext.jsx";

const AboutUs = () => {
  const { language } = useContext(LanguageContext);
  const swiperRef = useRef(null);
  const [mutedMainVideo, setMutedMainVideo] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const mainVideoRef = useRef(null);

  const toggleMainVideoSound = () => {
    setMutedMainVideo((prevMuted) => !prevMuted);
  };

  const toggleMainVideoPlay = () => {
    if (mainVideoRef.current.paused) {
      mainVideoRef.current.play();
    } else {
      mainVideoRef.current.pause();
    }
    setIsPaused((prevPaused) => !prevPaused);
  };

  return (
    <div id="aboutUs" className="aboutus container">
      <h1 className="aboutus__title">{language == 'UZ' ? 'Biz haqimizda' : 'О нас'}</h1>

      <div className="aboutus__items">
        <div className="aboutus__swiper">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="aboutus__swiper-content"
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            breakpoints={{
              546: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {aboutUsData[language].slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="video-container">
                  <video
                    className="aboutus__swiper-item"
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-buttons">
            <button
              className="swiper-button-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img
                src={images.prev}
                alt="Previous"
                className="swiper__btn-img"
              />
            </button>
            <button
              className="swiper-button-next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={images.next} alt="Next" className="swiper__btn-img" />
            </button>
          </div>

          <p className="aboutus__swiper-desc">{aboutUsData[language].description}</p>
        </div>

        <div className="mainvideo-container">
          <video
            ref={mainVideoRef}
            className="mainvideo"
            src={aboutUsData[language].mainVideo.src}
            autoPlay
            muted={mutedMainVideo}
            loop
          ></video>
          <div className="video-controls">
            <button
              onClick={toggleMainVideoSound}
              className="sound-toggle-btn toggle__main"
            >
              <img width="25" src={mutedMainVideo ? "/off.png" : "/on.png"} alt="" />
            </button>
            {/* <button
  onClick={toggleMainVideoPlay}
  className="play-pause-btn toggle__main"
  style={{ backgroundColor: 'transparent' }} //added this line
>
  {isPaused ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4H8V20H6V4ZM14 4H16V20H14V4Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4L20 12L8 20V4Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )}
</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
