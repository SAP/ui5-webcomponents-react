import { createContext } from 'react';
import { I18nBundle } from '../hooks/useI18nBundle';

export const I18nContext = createContext<{
  i18nBundles: Record<string, I18nBundle>;
  setI18nBundle: (name: string, bundle: I18nBundle) => void;
}>(null);
