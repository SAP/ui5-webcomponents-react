import { ContextType, createContext, useContext } from 'react';
import { I18nBundle } from '../hooks/useI18nBundle';

export const I18nContext = createContext<{
  i18nBundles: Record<string, I18nBundle>;
  setI18nBundle: (name: string, bundle: I18nBundle) => void;
}>(null);

export const useI18nContext = (): ContextType<typeof I18nContext> => {
  let context = I18nContext;
  if (typeof window !== 'undefined' && window['@ui5/webcomponents-react']?.I18nContext) {
    context = window['@ui5/webcomponents-react'].I18nContext;
  }
  return useContext(context);
};
