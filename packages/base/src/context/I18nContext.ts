'use client';

import type I18nBundle from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { createContext, useContext } from 'react';

export const I18nContext = createContext<{
  i18nBundles: Record<string, I18nBundle>;
  setI18nBundle: (name: string, bundle: I18nBundle) => void;
} | null>(null);

export const getI18nContext = (): typeof I18nContext => {
  globalThis['@ui5/webcomponents-react'] ??= {};
  globalThis['@ui5/webcomponents-react'].I18nContext ??= I18nContext;
  return globalThis['@ui5/webcomponents-react'].I18nContext;
};

export const useI18nContext = () => useContext(getI18nContext());
