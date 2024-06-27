// src/context/LocalizationContext.js
import React, { createContext, useState, useContext } from 'react';
import { IntlProvider } from 'react-intl';
import messages_en from '../lang/en.json';
import messages_ar from '../lang/ar.json';

const messages = {
    ar: messages_ar,
  en: messages_en,
  
};

const LocalizationContext = createContext();

export const useLocalization = () => useContext(LocalizationContext);

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState('ar'); // Default locale

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <LocalizationContext.Provider value={{ locale, changeLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocalizationContext.Provider>
  );
};
