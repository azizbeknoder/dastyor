import React, { useContext, useState } from "react";
import { icons } from "../../assets/image";
import { LanguageContext } from "../../LanguageContext.jsx";
import logo2 from '../../assets/img/logo2.png'

const NavItem = ({ text, targetId }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      className="flex items-center gap-2 py-3 px-4 rounded-lg text-[#494037] hover:bg-[#0ba39c] hover:text-[#efeeee] text-xl "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleScroll}
    >
      <p className=" text-base cursor-pointer">{text}</p>
    </li>
  );
};

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    RU: {
      about: "О нас",
      services: "Услуги",
      fleet: "Автопарк",
      reviews: "Отзывы",
    },
    UZ: {
      about: "Haqimizda",
      services: "Xizmatlar",
      fleet: "Avtopark",
      reviews: "Fikrlar",
    },
  };

  const currentTranslations = translations[language];

  const navItems = [
    { text: currentTranslations.about, targetId: "aboutUs" },
    { text: currentTranslations.services, targetId: "servises" },
    { text: currentTranslations.fleet, targetId: "autopark" },
    { text: currentTranslations.reviews, targetId: "feedbacks" },
  ];

  // return (
  //   <div className="fixed w-full z-[1001]">
  //     <div className="relative flex justify-between ">
  //       <div className="bg-white p-2 rounded-xl shadow-md w-[90%] flex justify-between items-center mt-7 mx-auto">
  //         <h1 className="absolute text-4xl font-bold text-[#0ba39c] z-10">
  //           DASTYOR
  //         </h1>

  //         {/* Burger menyu */}
  //         <button
  //           onClick={() => setIsMenuOpen(!isMenuOpen)}
  //           className="sm:hidden p-3 rounded-lg"
  //         >
  //           <img
  //             src={icons.burger}
  //             alt="burger menu"
  //             className="h-6 w-6 text-[#0ba39c]"
  //           />
  //         </button>

  //         {/* Mobil menyu */}
  //         {isMenuOpen && (
  //           <div className=" top-0 left-0   bg-white shadow-lg z-20">
  //             <ul className="flex flex-col gap-4 mt-10">
  //               {navItems.map((item) => (
  //                 <NavItem
  //                   key={item.targetId}
  //                   text={item.text}
  //                   targetId={item.targetId}
  //                 />
  //               ))}
  //             </ul>
  //             <button
  //               onClick={toggleLanguage}
  //               className="font-bold text-base rounded-lg bg-transparent text-[#494037] px-4 py-2 hover:bg-[#0ba39c] hover:text-[#efeeee] transition mt-4"
  //             >
  //               {language === "RU" ? "RU" : "UZ"}
  //             </button>
  //           </div>
  //         )}

  //         {/* Desktop menyu */}
  //         <ul className="hidden sm:flex gap-2 bg-white rounded-xl mx-auto">
  //           {navItems.map((item) => (
  //             <NavItem
  //               key={item.targetId}
  //               text={item.text}
  //               targetId={item.targetId}
  //             />
  //           ))}
  //         </ul>

  //         <div className="flex gap-2 items-center">
  //           <a
  //             href="tel:+998901234567"
  //             className="flex items-center gap-2 bg-[#0ba39c] rounded-lg p-4 py-2 ml-0"
  //           >
  //             <img src={icons.phone} alt="" className="h-4" />
  //             <p className="text-base text-[#efeeee]">+998 90 123 45 67</p>
  //           </a>
  //           <button
  //             onClick={toggleLanguage}
  //             className="hidden sm:block font-bold text-base rounded-lg bg-transparent text-[#494037] px-4 py-2 hover:bg-[#0ba39c] hover:text-[#efeeee] transition"
  //           >
  //             {language === "RU" ? "RU" : "UZ"}
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="w-[90%] h-[70px] bg-white shadow-md my-10 mx-auto rounded-3xl border-[2px] flex flex-row justify-between px-4">
      <div className="grow">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 rounded-2xl bg-[#0BA39C] ml-4 "
        >
          <img
            src={icons.burger}
            alt="burger menu"
            className="h-6 w-6 text-[#0ba39c]"
          />
        </button>

        <ul className="flex gap-4 hidden md:flex w-fit">
          {navItems.map((item, ixd) => {
            return (
              <li>
                <NavItem
                  key={item.targetId}
                  text={item.text}
                  targetId={item.targetId}
                />
              </li>
            );
          })}
        </ul>
        {isMenuOpen && (
        <div className="absolute top-16 left-0 w-1/3 bg-white shadow-lg z-10 rounded-lg p-4 flex flex-col gap-4 md:hidden mt-12">
          <ul className="flex flex-col gap-4 ">
            {navItems.map((item) => (
              <NavItem
              
                key={item.targetId}
                text={item.text}
                targetId={item.targetId}
              />
            ))}
          </ul>
          <button
            onClick={toggleLanguage}
            className="mt-4 font-bold text-base rounded-lg bg-transparent text-[#494037] px-4 py-2 hover:bg-[#0ba39c] hover:text-[#efeeee] transition"
          >
            {language === "RU" ? "RU" : "UZ"}
          </button>
        </div>
      )}
      </div>
      <div className="grow ">
        <img src={logo2} alt="" className="max-w-32" />
      </div>
      <div className="grow">
        <div className="flex gap-2 justify-end">
          <a
            href="tel:+998901234567"
            className="flex items-center gap-2 bg-[#0ba39c] rounded-lg p-4 py-2 ml-0 "
          >
            <img src={icons.phone} alt="" className="h-4" />
            <p className="text-base text-[#efeeee] hidden xl:block">+998 90 123 45 67</p>
          </a>
          <button
            onClick={toggleLanguage}
            className="hidden xl:block font-bold text-base rounded-lg bg-transparent text-[#494037] px-4 py-2 hover:bg-[#0ba39c] hover:text-[#efeeee] transition"
          >
            {language === "RU" ? "RU" : "UZ"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
