'use client';

import { createOrUpdateStyle, removeStyle } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import { getCurrentRuntimeIndex } from '@ui5/webcomponents-base/dist/Runtimes.js';
import { useSyncExternalStore } from 'react';
import { StyleStore } from '../stores/StyleStore.js';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect.js';

interface UseStyleSheetOptions {
  alwaysInject?: boolean;
}

export function useStylesheet(styles: string, componentName: string, options?: UseStyleSheetOptions) {
  const { staticCssInjected, componentsMap } = useSyncExternalStore(
    StyleStore.subscribe,
    StyleStore.getSnapshot,
    StyleStore.getServerSnapshot,
  );

  useIsomorphicLayoutEffect(() => {
    const scopedComponentName = `${componentName}-${getCurrentRuntimeIndex()}`;
    const shouldInject = options?.alwaysInject || !staticCssInjected;
    if (shouldInject) {
      createOrUpdateStyle(styles, 'data-ui5wcr-component', scopedComponentName);
      StyleStore.mountComponent(componentName);
    }

    return () => {
      if (shouldInject) {
        StyleStore.unmountComponent(componentName);
        const numberOfMountedComponents = componentsMap.get(componentName);
        if (numberOfMountedComponents <= 0) {
          removeStyle('data-ui5wcr-component', scopedComponentName);
        }
      }
    };
  }, [styles, staticCssInjected]);
}
