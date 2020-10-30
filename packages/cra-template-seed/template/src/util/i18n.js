import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translation.json';
import translationPT from '../locales/pt/translation.json';

const SUPPORTED_LANGUAGES = {
  en: {
    translation: translationEN,
    code: 'en-US',
    textKey: 'shell.button.user.settings.item.languageSwitch.en',
  },
  pt: {
    translation: translationPT,
    code: 'pt',
    textKey: 'shell.button.user.settings.item.languageSwitch.pt',
  },
};

export const getSupportedLanguageResources = () => {
  const languages = [];
  for (const [key] of Object.entries(SUPPORTED_LANGUAGES)) {
    languages.push(SUPPORTED_LANGUAGES[key]);
  }
  return languages;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources: SUPPORTED_LANGUAGES,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
