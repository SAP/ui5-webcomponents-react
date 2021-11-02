import { getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { attachLanguageChange, detachLanguageChange } from '@ui5/webcomponents-base/dist/locale/languageChange.js';
import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/dist/hooks';
import { useState } from 'react';

type TextWithDefault = { key: string; defaultText: string } | string;

interface I18nBundle {
  getText: (textObj: TextWithDefault, ...args: any[]) => string;
}

const defaultBundle = { getText: (val) => val?.defaultText ?? val };

const i18nBundles = new Map<string, I18nBundle>([]);

export const useI18nBundle = (bundleName: string): I18nBundle => {
  const [bundle, setBundle] = useState(i18nBundles.get(bundleName) ?? defaultBundle);
  const [_, setUpdater] = useState(0);

  useIsomorphicLayoutEffect(() => {
    let isMounted = true;
    const fetchI18n = async (newLanguage?) => {
      const internalBundle = await getI18nBundle(bundleName);
      if (isMounted) {
        if (!i18nBundles.has(bundleName) || newLanguage) {
          setBundle(internalBundle);
          setUpdater((prev) => prev + 1);
        }
        i18nBundles.set(bundleName, internalBundle);
      }
    };
    fetchI18n();
    attachLanguageChange(fetchI18n);
    return () => {
      detachLanguageChange(fetchI18n);
      isMounted = false;
    };
  }, [bundleName]);

  return bundle;
};
