import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

import en from "./languages/en.json";
import es from "./languages/es.json";


const resources = {
  es: {
    translation: es,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
