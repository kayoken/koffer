import React, { createContext, useState, useContext } from "react";
import { translations } from "../assets/translations";

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translate = (key) => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  return useContext(I18nContext);
};
