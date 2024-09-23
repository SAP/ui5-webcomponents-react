'use client';

import type { StyleDataCSP } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import { createOrUpdateStyle, removeStyle } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import { getCurrentRuntimeIndex } from '@ui5/webcomponents-base/dist/Runtimes.js';
import { useSyncExternalStore } from 'use-sync-external-store/shim/index.js';
import { StyleStore } from '../stores/StyleStore.js';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect.js';

interface UseStyleSheetOptions {
  alwaysInject?: boolean;
}

export function useStylesheet(styles: StyleDataCSP, componentName: string, options?: UseStyleSheetOptions) {
  const { staticCssInjected, componentsMap } = useSyncExternalStore(
    StyleStore.subscribe,
    StyleStore.getSnapshot,
    StyleStore.getServerSnapshot
  );

  useIsomorphicLayoutEffect(() => {
    const scopedComponentName = `${componentName}-${getCurrentRuntimeIndex()}`;
    console.log(scopedComponentName);
    const shouldInject = options?.alwaysInject || !staticCssInjected;
    if (shouldInject) {
      createOrUpdateStyle(styles, 'data-ui5wcr-component', scopedComponentName);
      StyleStore.mountComponent(componentName);
    }

    return () => {
      if (shouldInject) {
        StyleStore.unmountComponent(componentName);
        const numberOfMountedComponents = componentsMap.get(componentName)!;
        if (numberOfMountedComponents <= 0) {
          removeStyle('data-ui5wcr-component', scopedComponentName);
        }
      }
    };
  }, [styles, staticCssInjected]);
}
