import { getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { attachLanguageChange, detachLanguageChange } from '@ui5/webcomponents-base/dist/locale/languageChange.js';
import { I18nBundle, I18nContext } from '@ui5/webcomponents-react-base';
import React, { ReactNode, useCallback, useEffect, useReducer, useRef } from 'react';

export interface I18nProviderPropTypes {
  children: ReactNode;
}

type I18nBundleMap = Record<string, I18nBundle>;

const bundleReducer = (currentBundles: I18nBundleMap, action: { payload: I18nBundleMap }) => {
  return {
    ...currentBundles,
    ...action.payload
  };
};

export function I18nProvider({ children }: I18nProviderPropTypes): JSX.Element {
  const [i18nBundles, setI18nBundles] = useReducer(bundleReducer, {});
  const localBundles = useRef<I18nBundleMap>({});
  const isSyncedWithWindow = useRef(false);

  if (!isSyncedWithWindow.current && typeof window !== 'undefined') {
    window['@ui5/webcomponents-react'] ??= {};
    window['@ui5/webcomponents-react'].I18nContext = I18nContext;
    isSyncedWithWindow.current = true;
  }

  const updateBundles = useCallback(() => {
    Promise.all(Object.keys(localBundles.current).map((bundleName) => getI18nBundle(bundleName))).then((bundles) => {
      const bundleMap = bundles.reduce(
        (acc, bundle) => ({
          ...acc,
          [bundle.packageName]: bundle
        }),
        {}
      );
      setI18nBundles({
        payload: bundleMap
      });
    });
  }, []);

  const setI18nBundle = useCallback((name: string, bundle: I18nBundle) => {
    localBundles.current[name] = bundle;
    updateBundles();
  }, []);

  useEffect(() => {
    let isMounted = true;
    attachLanguageChange(updateBundles);
    return () => {
      isMounted = false;
      detachLanguageChange(updateBundles);
    };
  }, []);

  return (
    <I18nContext.Provider
      value={{
        i18nBundles,
        setI18nBundle
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}
