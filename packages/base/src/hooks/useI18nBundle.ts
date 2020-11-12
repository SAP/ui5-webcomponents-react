import { fetchI18nBundle, getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle';
import { useEffect, useState } from 'react';

type TextWithDefault = { key: string; defaultText: string };
type TextWithPlaceholders = [TextWithDefault, ...string[]];

interface I18nBundle {
  getText: (textObj: TextWithDefault, ...args: any) => string;
}

const resolveTranslations = (bundle, texts) => {
  return texts.map((text) => {
    if (Array.isArray(text)) {
      const [key, ...replacements] = text;
      return bundle.getText(key, replacements);
    }
    return bundle.getText(text);
  });
};

export const useI18nText = (bundleName: string, ...texts: (TextWithDefault | TextWithPlaceholders)[]): string[] => {
  const i18nBundle: I18nBundle = getI18nBundle(bundleName);
  const [translations, setTranslations] = useState(resolveTranslations(i18nBundle, texts));

  useEffect(() => {
    let didCancel = false;
    const fetchAndLoadBundle = async () => {
      await fetchI18nBundle(bundleName);
      if (!didCancel) {
        setTranslations((prev) => {
          const next = resolveTranslations(i18nBundle, texts);
          if (prev.length === next.length && prev.every((translation, index) => next[index] === translation)) {
            return prev;
          }
          return next;
        });
      }
    };
    fetchAndLoadBundle();
    return () => {
      didCancel = true;
    };
  }, [fetchI18nBundle, bundleName, texts]);

  return translations;
};
