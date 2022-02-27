import { getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { attachLanguageChange, detachLanguageChange } from '@ui5/webcomponents-base/dist/locale/languageChange.js';
import formatMessage from '@ui5/webcomponents-base/dist/util/formatMessage.js';
import { useContext } from 'react';
import { I18nContext } from '../context/I18nContext';
import { useIsomorphicLayoutEffect } from '../hooks';

type TextWithDefault = { key: string; defaultText: string } | string;

export interface I18nBundle {
  getText: (textObj: TextWithDefault, ...args: any[]) => string;
}

const defaultBundle = {
  getText: (val, ...values) => {
    return formatMessage(val?.defaultText ?? val ?? '', values);
  }
};

export const useI18nBundle = (bundleName: string): I18nBundle => {
  const i18nContext = useContext(I18nContext);

  if (!i18nContext) {
    throw new Error(`'useI18nBundle()' may be used only in the context of a '<ThemeProvider>' component.`);
  }

  const { i18nBundles, setI18nBundle } = i18nContext;

  useIsomorphicLayoutEffect(() => {
    let isMounted = true;
    const fetchI18n = async () => {
      const internalBundle = await getI18nBundle(bundleName);
      if (isMounted) {
        setI18nBundle(bundleName, internalBundle);
      }
    };
    void fetchI18n();
    attachLanguageChange(fetchI18n);
    return () => {
      detachLanguageChange(fetchI18n);
      isMounted = false;
    };
  }, [bundleName]);

  return i18nBundles[bundleName] ?? defaultBundle;
};
