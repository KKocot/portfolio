// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translation.json";
import plTranslations from "./locales/pl/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    pl: { translation: plTranslations },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if the user’s language is not available
  interpolation: {
    escapeValue: false, // React already protects from XSS
  },
});

export default i18n;
