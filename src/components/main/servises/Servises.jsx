import React, { useContext } from "react";
import "./servises.css";
import { images } from "../../../assets/image";
import { serviceData } from "../../../assets/data/data.js";
import { LanguageContext } from "../../../LanguageContext.jsx";

const Servises = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="servises" className=" pb-[150px] ">
      <h2 className="cards__title text-center">{language == 'UZ' ? 'bizlarni xizmatlarimiz  ' : 'Наши услуги'}</h2>
      <div className="cards container flex justify-center items-center ">
        {serviceData[language].map((item, index) => (
          <div key={index} className="servcard__gap">
            <div className="servcard__box">
              <img
                src={images[`serv${index + 1}`]}
                alt={item.h3}
                className="serv__card__img"
              />
            </div>
            <h3 className="card__title">{item.h3}</h3>
            <p className="card__desc">{item.p}</p>
            <h4 className="card__price">{item.h4}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servises;
