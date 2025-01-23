import React, { useState } from "react";
import { icons } from "../../../assets/image";

const SocialLink = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="fixed bottom-4 right-6 z-50">
      {/* Ijtimoiy tarmoq tugmalari */}
      <div
        className={`absolute flex flex-col items-center transition-all duration-300 ${
          isMenuVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ bottom: "4.5rem" }} // Toggle tugmasining tepasidan chiqish uchun
      >
        <a
          href="https://t.me/dastyorserviceuz"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 ml-2  w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
        >
          <img src={icons.teleB} alt="Telegram" className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/dastyorservice/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 ml-2 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
        >
          <img src={icons.instB} alt="Instagram" className="w-6 h-6" />
        </a>
      </div>

      {/* Toggle tugma */}
      <button
        onClick={toggleMenu}
        className="w-16 h-16 bg-[#0ba39c] rounded-full flex items-center justify-center shadow-lg "
      >
        <img src={icons.chat} alt="Toggle Menu" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SocialLink;
