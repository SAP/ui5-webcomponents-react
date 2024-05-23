'use client';

import type { StyleDataCSP } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import { createOrUpdateStyle, removeStyle } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import * as React from 'react';
import { useSyncExternalStore } from 'use-sync-external-store';
import { StyleStore } from '../stores/StyleStore.js';

function getUseInsertionEffect(isSSR: boolean) {
  return isSSR ? React.useEffect : Reflect.get(React, 'useInsertionEffect') || React.useLayoutEffect;
}

export function useStylesheet(styles: StyleDataCSP, componentName: string) {
  const { staticCssInjected, componentsMap } = useSyncExternalStore(StyleStore.subscribe, StyleStore.getSnapshot);

  getUseInsertionEffect(typeof window === 'undefined')(() => {
    if (!staticCssInjected) {
      createOrUpdateStyle(styles, 'data-ui5wcr-component', componentName);
      StyleStore.mountComponent(componentName);
    }

    return () => {
      if (!staticCssInjected) {
        StyleStore.unmountComponent(componentName);
        const numberOfMountedComponents = componentsMap.get(componentName);
        if (typeof numberOfMountedComponents === 'number' && numberOfMountedComponents <= 0) {
          removeStyle('data-ui5wcr-component', componentName);
        }
      }
    };
  }, [styles, staticCssInjected]);
}
