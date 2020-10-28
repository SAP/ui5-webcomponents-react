import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translation.json';
import translationPT from '../locales/pt/translation.json';

const SUPPORTED_LANGUAGES = {
  en: {
    translation: translationEN,
    code: 'en',
    textKey: 'shell.button.user.settings.item.languageSwitch.en',
  },
  pt: {
    translation: translationPT,
    code: 'pt',
    textKey: 'shell.button.user.settings.item.languageSwitch.pt',
  },
};

export const getResources = () => {
  const languages = Object.assign({}, SUPPORTED_LANGUAGES);
  for (const [key] of Object.entries(languages)) {
    delete languages[key].textKey;
    delete languages[key].code;
  }
  return languages;
};

export const getSupportedLanguageResources = () => {
  const languages = [];
  for (const [key, value] of Object.entries(SUPPORTED_LANGUAGES)) {
    languages.push({ [key]: value });
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
