'use client';

import I18nBundle from '@ui5/webcomponents-base/dist/i18nBundle.js';
import { useEffect } from 'react';
import { useSyncExternalStore } from 'use-sync-external-store/shim/index.js';
import { I18nStore } from '../stores/I18nStore.js';

const defaultBundle = new I18nBundle('defaultBundle');

export const useI18nBundle = (bundleName: string): I18nBundle => {
  const bundles = useSyncExternalStore(I18nStore.subscribe, I18nStore.getSnapshot, I18nStore.getServerSnapshot);

  useEffect(() => {
    I18nStore.loadBundle(bundleName);
  }, [bundleName]);

  console.log(`-> bundles[${bundleName}]`, bundles[bundleName]);

  return bundles[bundleName] ?? defaultBundle;
};
