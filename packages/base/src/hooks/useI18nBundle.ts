'use client';

import { getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';
import formatMessage from '@ui5/webcomponents-base/dist/util/formatMessage.js';
import { useRef } from 'react';
import { useI18nContext } from '../context/I18nContext';
import { useIsomorphicLayoutEffect } from '../hooks';

type TextWithDefault = { key: string; defaultText: string } | string;

export interface I18nBundle {
  getText: (textObj: TextWithDefault, ...args: any[]) => string;
  packageName: string;
}

const defaultBundle = {
  packageName: 'defaultBundle',
  getText: (val, ...values) => {
    return formatMessage(val?.defaultText ?? val ?? '', values);
  }
};

export const useI18nBundle = (bundleName: string): I18nBundle => {
  const i18nContext = useI18nContext();

  if (!i18nContext) {
    throw new Error(`'useI18nBundle()' may be used only in the context of a '<ThemeProvider>' component.`);
  }
  const i18nRef = useRef(i18nContext);

  useIsomorphicLayoutEffect(() => {
    const { i18nBundles, setI18nBundle } = i18nRef.current;
    let isMounted = true;
    if (!i18nBundles.hasOwnProperty(bundleName)) {
      getI18nBundle(bundleName).then((internalBundle) => {
        if (isMounted) {
          setI18nBundle(bundleName, internalBundle);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [bundleName]);

  return i18nContext.i18nBundles[bundleName] ?? defaultBundle;
};
