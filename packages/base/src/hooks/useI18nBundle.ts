import { fetchI18nBundle, getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle';
import { useEffect, useState } from 'react';

type TextWithDefault = { key: string; defaultText: string };

interface I18nBundle {
  getText: (textObj: TextWithDefault, ...args: any) => string;
}

export const useI18nBundle = (bundleName): I18nBundle => {
  const [bundle, setBundle] = useState(getI18nBundle(bundleName));

  useEffect(() => {
    const fetchAndLoadBundle = async () => {
      await fetchI18nBundle(bundleName);
      setBundle(getI18nBundle(bundleName));
    };
    fetchAndLoadBundle();
  }, []);

  return bundle;
};

const resolveTranslations = (bundle, texts) => {
  return texts.map((text) => {
    if (Array.isArray(text)) {
      const [key, ...replacements] = text;
      return bundle.getText(key, replacements);
    }
    return bundle.getText(text);
  });
};

export const useI18nText = (bundleName: string, ...texts: (TextWithDefault | any[])[]): string[] => {
  const i18nBundle: I18nBundle = getI18nBundle(bundleName);
  const [translations, setTranslations] = useState(resolveTranslations(i18nBundle, texts));

  useEffect(() => {
    const fetchAndLoadBundle = async () => {
      await fetchI18nBundle(bundleName);
      setTranslations(resolveTranslations(i18nBundle, texts));
    };
    fetchAndLoadBundle();
  }, [fetchI18nBundle]);

  return translations;
};
