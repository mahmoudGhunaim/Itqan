// src/context/LocalizationContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import messages_en from '../lang/en.json';
import messages_ar from '../lang/ar.json';

const messages = {
    ar: messages_ar,
    en: messages_en,
};

const LocalizationContext = createContext({
    locale: 'ar', // Default locale
    changeLocale: () => {}, // Default changeLocale function
});
export const useLocalization = () => useContext(LocalizationContext);

export const LocalizationProvider = ({ children }) => {
    const [locale, setLocale] = useState(() => {
        // Check if locale is already set in localStorage
        const storedLocale = localStorage.getItem('locale');
        return storedLocale || 'ar'; // Default to 'ar' if not set
    });

    const changeLocale = (newLocale) => {
        setLocale(newLocale);
        localStorage.setItem('locale', newLocale); // Store locale in localStorage
    };

    useEffect(() => {
        // Update the HTML lang attribute to reflect the current locale
        document.documentElement.lang = locale;
    }, [locale]);

    return (
        <LocalizationContext.Provider value={{ locale, changeLocale }}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                {children}
            </IntlProvider>
        </LocalizationContext.Provider>
    );
};