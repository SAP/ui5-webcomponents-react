import { ContextType, createContext, useContext } from 'react';
import { I18nBundle } from '../hooks/useI18nBundle';

export const I18nContext = createContext<{
  i18nBundles: Record<string, I18nBundle>;
  setI18nBundle: (name: string, bundle: I18nBundle) => void;
}>(null);

export const getI18nContext = (): typeof I18nContext => {
  globalThis['@ui5/webcomponents-react'] ??= {};
  globalThis['@ui5/webcomponents-react'].I18nContext ??= I18nContext;
  return globalThis['@ui5/webcomponents-react'].I18nContext;
};

export const useI18nContext = () => useContext(getI18nContext());
