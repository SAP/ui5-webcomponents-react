'use client';

import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { attachLanguageChange, detachLanguageChange } from '@ui5/webcomponents-base/dist/locale/languageChange.js';
import { attachThemeLoaded, detachThemeLoaded } from '@ui5/webcomponents-base/dist/theming/ThemeLoaded.js';
import {
  I18nStore,
  StyleStore,
  useIsomorphicId,
  useIsomorphicLayoutEffect,
  useStylesheet
} from '@ui5/webcomponents-react-base';
import type { FC, ReactNode } from 'react';
import { styleData } from './ThemeProvider.css.js';

function ThemeProviderStyles() {
  const uniqueId = useIsomorphicId();
  useStylesheet(styleData, `${ThemeProvider.displayName}-${uniqueId}`);
  return null;
}

export interface ThemeProviderPropTypes {
  children: ReactNode;

  /**
   * You can set this flag to true in case you have imported our static CSS Bundle/s in your application.
   * This will prevent the ThemeProvider from injecting the CSS during runtime again.
   *
   * * __main:__ `import '@ui5/webcomponents-react/styles.css'`
   * * __charts:__ `import '@ui5/webcomponents-react-charts/styles.css'`
   */
  staticCssInjected?: boolean;
}

/**
 * In order to use `@ui5/webcomponents-react` you have to wrap your application's root component into the ThemeProvider.
 *
 * __Note:__ Per default, the `ThemeProvider` injects the CSS for the components during runtime. If you have imported our static CSS bundle/s in your application, you can set the prop `staticCssInjected` to `true` to prevent this.
 */
const ThemeProvider: FC<ThemeProviderPropTypes> = (props: ThemeProviderPropTypes) => {
  const { children, staticCssInjected = false } = props;

  useIsomorphicLayoutEffect(() => {
    document.documentElement.setAttribute('data-sap-theme', getTheme());
    const handler = (newTheme: string) => {
      document.documentElement.setAttribute('data-sap-theme', newTheme);
    };
    // themeLoaded is fired on theme change
    attachThemeLoaded(handler);
    return () => {
      detachThemeLoaded(handler);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    StyleStore.setStaticCssInjected(staticCssInjected);
  }, [staticCssInjected]);

  useIsomorphicLayoutEffect(() => {
    attachLanguageChange(I18nStore.handleLanguageChange);
    return () => {
      detachLanguageChange(I18nStore.handleLanguageChange);
    };
  }, []);

  return (
    <>
      <ThemeProviderStyles />
      {children}
    </>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
