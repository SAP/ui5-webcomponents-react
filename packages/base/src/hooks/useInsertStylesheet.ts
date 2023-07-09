import type { StyleData } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import { createOrUpdateStyle } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import * as React from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect.js';

const canUseInsertionEffect = 'useInsertionEffect' in React;
const useInsertionEffect = canUseInsertionEffect ? Reflect.get(React, 'useInsertionEffect') : useIsomorphicLayoutEffect;

export function useInsertStylesheet(styles: StyleData, pkgName: string) {
  useInsertionEffect(() => {
    createOrUpdateStyle(styles, pkgName);
  });
}
