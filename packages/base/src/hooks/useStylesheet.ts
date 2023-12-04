'use client';

import type { StyleDataCSP } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import { createOrUpdateStyle, removeStyle } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import * as React from 'react';

function getUseInsertionEffect(isSSR: boolean) {
  return isSSR ? React.useEffect : Reflect.get(React, 'useInsertionEffect') || React.useLayoutEffect;
}

export function useStylesheet(styles: StyleDataCSP, componentName: string) {
  getUseInsertionEffect(typeof window === 'undefined')(() => {
    createOrUpdateStyle(styles, 'data-ui5wcr-component', componentName);

    return () => {
      removeStyle('data-ui5wcr-component', componentName);
    };
  }, [styles]);
}
