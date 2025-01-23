import React, { useEffect, useContext } from "react";
import "./advantages.css";
import { icons } from "../../../assets/image";
import { LanguageContext } from "../../../LanguageContext.jsx";
const Advantages = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      toggleLanguage(storedLanguage);
    }
  }, []);

  const translations = {
    RU: {
      title: "Наши преимущества",
      cards: [
        { img: icons.adv1, h3: "Опытные специалисты" },
        { img: icons.adv2, h3: "Оперативная доставка" },
        { img: icons.adv3, h3: "Индивидуальный подход" },
        { img: icons.adv4, h3: "Удобная оплата" },
        { img: icons.adv5, h3: "Работаем 24/7" },
      ],
    },
    UZ: {
      title: "Bizning afzalliklarimiz",
      cards: [
        { img: icons.adv1, h3: "Tajribali mutaxassislar" },
        { img: icons.adv2, h3: "Operativ yetkazib berish" },
        { img: icons.adv3, h3: "Individual yondashuv" },
        { img: icons.adv4, h3: "Qulay to'lov" },
        { img: icons.adv5, h3: "24/7 ishlaymiz" },
      ],
    },
  };

  const { title, cards } = translations[language];

  return (
    <div className="advantages">
      <h2 className="cards__title">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 shadow-none gap-5 ">
        {cards.map((item, index) => (
          <div key={index} className="card__gap font-extralight ">
            <div className="card__box shadow-xl border-[2px]">
              <img src={item.img} alt="" className="card__img" />
            </div>
            <h3 className="card__title">{item.h3}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
