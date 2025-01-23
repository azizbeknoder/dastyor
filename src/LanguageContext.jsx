import React, { createContext, useState, useEffect } from 'react';

// Создаем контекст
export const LanguageContext = createContext();

// Провайдер контекста
export const LanguageProvider = ({ children }) => {
  // Загружаем язык из localStorage или устанавливаем язык по умолчанию (RU)
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'RU';
  });

  // Сохраняем выбранный язык в localStorage
  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === 'RU' ? 'UZ' : 'RU';
      localStorage.setItem('language', newLanguage); // Сохраняем язык
      return newLanguage;
    });
  };

  // Следим за изменениями языка и сохраняем его
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
