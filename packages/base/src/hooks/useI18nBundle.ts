import { getI18nBundleData } from '@ui5/webcomponents-base/dist/asset-registries/i18n';
import { fetchI18nBundle, getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle';
import { attachLanguageChange, detachLanguageChange } from '@ui5/webcomponents-base/dist/locale/languageChange';
import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/lib/hooks';
import { useEffect, useState } from 'react';

type TextWithDefault = { key: string; defaultText: string } | string;

interface I18nBundle {
  getText: (textObj: TextWithDefault, ...args: any[]) => string;
}

export const useI18nBundle = (bundleName: string): I18nBundle => {
  const [_, setUpdater] = useState(0);

  useIsomorphicLayoutEffect(() => {
    let isMounted = true;
    const i18nBundleData = getI18nBundleData(bundleName);
    if (!i18nBundleData) {
      fetchI18nBundle(`${bundleName}`).then(() => {
        if (isMounted) {
          setUpdater((old) => old + 1);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [bundleName]);

  useEffect(() => {
    let isMounted = true;
    const handler = () => {
      fetchI18nBundle(`${bundleName}`).then(() => {
        if (isMounted) {
          setUpdater((old) => old + 1);
        }
      });
    };
    attachLanguageChange(handler);
    return () => {
      isMounted = false;
      detachLanguageChange(handler);
    };
  }, []);

  return getI18nBundle(bundleName);
};
