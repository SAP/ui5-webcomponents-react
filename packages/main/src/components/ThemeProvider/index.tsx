import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { cssVariablesStyles } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/lib/useIsomorphicLayoutEffect';
import React, { FC, ReactNode } from 'react';
import { ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { GlobalStyleClassesStyles } from './GlobalStyleClasses.jss';

const useStyles = createComponentStyles(GlobalStyleClassesStyles);

const cssVarsPonyfillNeeded = () => !!window.CSSVarsPonyfill;

export interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const { children } = props;
  useStyles();

  useIsomorphicLayoutEffect(() => {
    if (!document.querySelector('style[data-ui5-webcomponents-react-sizes]')) {
      const variables = document.createElement('style');
      variables.setAttribute('data-ui5-webcomponents-react-sizes', '');
      variables.innerHTML = cssVariablesStyles;
      document.head.appendChild(variables);
    }

    if (cssVarsPonyfillNeeded()) {
      window.CSSVarsPonyfill.cssVars({
        rootElement: document.head,
        include: 'style[data-ui5-webcomponents-react-sizes],style[data-jss]',
        watch: true,
        silent: true
      });
    }
  }, []);

  return <ReactJssThemeProvider theme={ThemingParameters}>{children}</ReactJssThemeProvider>;
};

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
