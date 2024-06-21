import type I18nBundle from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { getI18nBundle } from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { attachLanguageChange, detachLanguageChange } from '@ui5/webcomponents-base/dist/locale/languageChange.js';
import { getI18nContext } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useReducer, useRef } from 'react';

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

export function I18nProvider({ children }: I18nProviderPropTypes) {
  const [i18nBundles, setI18nBundles] = useReducer(bundleReducer, {});
  const localBundles = useRef<I18nBundleMap>({});
  const isMounted = useRef(false);

  const updateBundles = useCallback(() => {
    return Promise.all(Object.keys(localBundles.current).map((bundleName) => getI18nBundle(bundleName))).then(
      (bundles) => {
        const bundleMap = bundles.reduce(
          (acc, bundle) => ({
            ...acc,
            [bundle.packageName]: bundle
          }),
          {}
        );
        if (isMounted.current) {
          setI18nBundles({
            payload: bundleMap
          });
        }
      }
    );
  }, []);

  const setI18nBundle = useCallback((name: string, bundle: I18nBundle) => {
    localBundles.current[name] = bundle;
    void updateBundles();
  }, []);

  useEffect(() => {
    isMounted.current = true;
    attachLanguageChange(updateBundles);
    return () => {
      isMounted.current = false;
      detachLanguageChange(updateBundles);
    };
  }, []);

  const Context = getI18nContext();

  return (
    <Context.Provider
      value={{
        i18nBundles,
        setI18nBundle
      }}
    >
      {children}
    </Context.Provider>
  );
}
