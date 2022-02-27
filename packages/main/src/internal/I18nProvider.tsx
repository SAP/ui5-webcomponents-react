import { I18nContext } from '@ui5/webcomponents-react-base';
import React, { ReactNode, useCallback, useReducer } from 'react';

export interface I18nProviderPropTypes {
  children: ReactNode;
}

type TextWithDefault = { key: string; defaultText: string } | string;

interface I18nBundle {
  getText: (textObj: TextWithDefault, ...args: any[]) => string;
}

type I18nBundleMap = Record<string, I18nBundle>;

const bundleReducer = (currentBundles: I18nBundleMap, action: { name: string; bundle: I18nBundle }) => {
  return {
    ...currentBundles,
    [action.name]: action.bundle
  };
};

export function I18nProvider({ children }: I18nProviderPropTypes): JSX.Element {
  const [i18nBundles, setI18nBundles] = useReducer(bundleReducer, {});

  const setI18nBundle = useCallback((name: string, bundle: I18nBundle) => {
    setI18nBundles({
      name,
      bundle
    });
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
