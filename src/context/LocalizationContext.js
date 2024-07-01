// src/context/LocalizationContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { navigate } from 'gatsby';
import messages_en from '../lang/en.json';
import messages_ar from '../lang/ar.json';

const messages = {
  ar: messages_ar,
  en: messages_en,
};

const LocalizationContext = createContext({
  locale: 'ar',
  changeLocale: () => {},
});

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlLocale = window.location.pathname.split('/')[1];
      return ['ar', 'en'].includes(urlLocale) ? urlLocale : 'ar';
    }
    return 'ar';
  });

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const changeLocale = (newLocale) => {
    if (newLocale !== locale) {
      setLocale(newLocale);
      localStorage.setItem('locale', newLocale);
      if (typeof window !== 'undefined') {
        const newPath = `/${newLocale}${window.location.pathname.replace(/^\/[a-z]{2}/, '')}`;
        // Use window.location.href for a hard refresh
        window.location.href = newPath;
      }
    }
  };

  return (
    <LocalizationContext.Provider value={{ locale, changeLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => useContext(LocalizationContext);