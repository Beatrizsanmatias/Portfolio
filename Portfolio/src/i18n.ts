import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/eng/trans.json";
import pt from "./translation/pt/trans.json";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, pt: { translation: pt } },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
