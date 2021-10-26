import { getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { attachLanguageChange, detachLanguageChange } from '@ui5/webcomponents-base/dist/locale/languageChange.js';
import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/dist/hooks';
import { useEffect, useState } from 'react';

type TextWithDefault = { key: string; defaultText: string } | string;

interface I18nBundle {
  getText: (textObj: TextWithDefault, ...args: any[]) => string;
}

export const useI18nBundle = (bundleName: string): I18nBundle => {
  //todo still necessary?
  const [_, setUpdater] = useState(0);
  const [data, setData] = useState({ getText: (val) => val?.defaultText ?? val });

  useIsomorphicLayoutEffect(() => {
    let isMounted = true;
    const fetchI18n = async () => {
      const bundle = await getI18nBundle(bundleName);
      setData(bundle);
    };
    fetchI18n().then(() => {
      if (isMounted) {
        setUpdater((old) => old + 1);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const handler = () => {
      getI18nBundle(bundleName).then(() => {
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

  return data;
};
