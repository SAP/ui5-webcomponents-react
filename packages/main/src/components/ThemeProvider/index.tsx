import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { attachThemeLoaded, detachThemeLoaded } from '@ui5/webcomponents-base/dist/theming/ThemeLoaded.js';
import { ThemingParameters, useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { createUseStyles, ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { I18nProvider } from '../../internal/I18nProvider';
import { GlobalStyleClassesStyles } from './GlobalStyleClasses.jss';

const useStyles = createUseStyles(GlobalStyleClassesStyles, {
  name: 'ThemeProvider'
});

const cssVarsPonyfillNeeded = () => !!window.CSSVarsPonyfill;

export interface ThemeProviderPropTypes {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderPropTypes> = (props: ThemeProviderPropTypes) => {
  const { children } = props;
  const [theme, setTheme] = useState<string>(() => getTheme());
  useStyles();

  useIsomorphicLayoutEffect(() => {
    attachThemeLoaded(setTheme);
    return () => {
      detachThemeLoaded(setTheme);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    document.documentElement.setAttribute('data-sap-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (cssVarsPonyfillNeeded()) {
      window.CSSVarsPonyfill.cssVars({
        rootElement: document.head,
        include: 'style[data-ui5-webcomponents-react-sizes],style[data-jss]',
        watch: true,
        silent: true
      });
    }
  }, []);

  return (
    <ReactJssThemeProvider theme={ThemingParameters}>
      <I18nProvider>{children}</I18nProvider>
    </ReactJssThemeProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
