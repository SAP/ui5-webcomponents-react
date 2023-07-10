import type { StyleDataCSP } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import { createOrUpdateStyle, removeStyle } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import * as React from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect.js';

const canUseInsertionEffect = 'useInsertionEffect' in React;
const useInsertionEffect = canUseInsertionEffect ? Reflect.get(React, 'useInsertionEffect') : useIsomorphicLayoutEffect;

export function useStylesheet(styles: StyleDataCSP, componentName: string) {
  useInsertionEffect(() => {
    createOrUpdateStyle(styles, styles.packageName, componentName);

    return () => {
      removeStyle(styles.packageName, componentName);
    };
  });
}
