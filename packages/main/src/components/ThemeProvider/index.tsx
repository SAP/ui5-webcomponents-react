'use client';

import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { attachThemeLoaded, detachThemeLoaded } from '@ui5/webcomponents-base/dist/theming/ThemeLoaded.js';
import { ThemingParameters, useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base';
import type { FC, ReactNode } from 'react';
import React from 'react';
import { createUseStyles, ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { I18nProvider } from '../../internal/I18nProvider.js';
import { ModalsProvider } from '../Modals/ModalsProvider.js';
import { GlobalStyleClassesStyles } from './GlobalStyleClasses.jss.js';

// todo remove after jss types have been enhanced (https://github.com/cssinjs/jss/issues/1480)
// @ts-expect-error: types currently don't allow an array of objects for the `extend` value, but the implementation does
const useStyles = createUseStyles(GlobalStyleClassesStyles, {
  name: 'ThemeProvider'
});

export interface ThemeProviderPropTypes {
  children: ReactNode;
  withoutModalsProvider?: boolean;
}

/**
 * In order to use `@ui5/webcomponents-react` you have to wrap your application's root component into the ThemeProvider.
 *
 * __Note:__ Per default, the `ThemeProvider` adds another provider for the [Modals](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-modals--docs) API.
 * If you don't use this, you can omit it by setting the prop `withoutModalsProvider` to `true`. (With v2.0, the `Modals` provider will be offered separately to reduce overhead)
 */
const ThemeProvider: FC<ThemeProviderPropTypes> = (props: ThemeProviderPropTypes) => {
  const { children, withoutModalsProvider } = props;
  useStyles();

  useIsomorphicLayoutEffect(() => {
    document.documentElement.setAttribute('data-sap-theme', getTheme());
    const handler = (newTheme) => {
      document.documentElement.setAttribute('data-sap-theme', newTheme);
    };
    // themeLoaded is fired on theme change
    attachThemeLoaded(handler);
    return () => {
      detachThemeLoaded(handler);
    };
  }, []);

  return (
    <ReactJssThemeProvider theme={ThemingParameters}>
      <I18nProvider>{withoutModalsProvider ? children : <ModalsProvider>{children}</ModalsProvider>}</I18nProvider>
    </ReactJssThemeProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
