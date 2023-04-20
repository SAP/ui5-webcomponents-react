'use client';

import I18nBundle, { getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { useRef } from 'react';
import { useI18nContext } from '../context/I18nContext.js';
import { useIsomorphicLayoutEffect } from '../hooks/index.js';

const defaultBundle = new I18nBundle('defaultBundle');

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
      getI18nBundle(bundleName).then(
        (internalBundle) => {
          if (isMounted) {
            setI18nBundle(bundleName, internalBundle);
          }
        },
        () => {
          // noop
        }
      );
    }
    return () => {
      isMounted = false;
    };
  }, [bundleName]);

  return i18nContext.i18nBundles[bundleName] ?? defaultBundle;
};
