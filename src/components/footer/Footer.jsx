import React, { useContext } from "react";
import "./footer.css";
import { icons } from "../../assets/image";
import { footerData } from "../../assets/data/data.js";
import { LanguageContext } from "../../LanguageContext.jsx";
import logo2 from "../../assets/img/logo2.png";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="footer" className="footer container ">
      <div className="flex">
        <div className="footer__info">
          <img src={logo2} alt="" className="w-[200px]" />
          <div className="footer__info-links">
            <div className="footer__info-menu">
              <ul className="footer__menu">
                {footerData[language].menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      onClick={() => handleScroll(item.target)}
                      href={`#${item.target}`}
                      className="footer__menu-link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__info-servises">
              <ul className="footer__menu">
                {footerData[language].serviceItems.map((item, index) => (
                  <li key={index}>
                    <a
                      onClick={() => handleScroll(item.target)}
                      href={`#${item.target}`}
                      className="footer__menu-link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__info-contacts">
              {footerData[language].contactInfo.map((contact, index) => (
                <div key={index} className={``}>
                  <div className="flex">
                    {contact.links.map((link, linkIndex) => (
                      <div className="flex ">
                        <img
                          src={icons[contact.type]}
                          alt={`${contact.type}-icon`}
                          className={`footer__contacts-${contact.type}-icon mr-3`}
                        />
                        <a
                          key={linkIndex}
                          href={link.href}
                          className="text-white"
                        >
                          {link.text}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__form">
          <form
            action="https://formspree.io/f/mkggokkb"
            method="POST"
            className="form"
          >
            <input
              type="text"
              name="first"
              placeholder={footerData[language].formPlaceholders.name}
              autoComplete="off"
              className="form__item"
              required
            />
            <input
              type="tel"
              name="tel"
              placeholder={footerData[language].formPlaceholders.phone}
              autoComplete="off"
              className="form__item"
              required
            />
            <textarea
              rows="5"
              cols="60"
              name="text"
              placeholder={footerData[language].formPlaceholders.message}
              autoComplete="off"
              className="form__item message"
            ></textarea>
            <button type="submit" className="form__button">
              {language == "UZ" ? "Yuborish" : "Отправить"}
            </button>
          </form>
          <div className="footer__sociallinks">
            <p>{footerData[language].socialLinksText}</p>
            <div className="footer__sociallinks-flex">
              <a
                href="https://t.me/dastyorserviceuz"
                target="_blank"
                className="footer__sociallinks-link"
              >
                <img
                  src={icons.telegram}
                  alt="telegram"
                  className="footer__sociallink-icon"
                />
              </a>
              <a
                href="https://www.instagram.com/dastyorservice/"
                target="_blank"
                className="footer__sociallinks-link"
              >
                <img
                  src={icons.instagram}
                  alt="instagram"
                  className="footer__sociallink-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
