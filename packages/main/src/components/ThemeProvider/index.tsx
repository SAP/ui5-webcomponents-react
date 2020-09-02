import { getRTL } from '@ui5/webcomponents-base/dist/config/RTL';
import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { cssVariablesStyles } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base/lib/useIsomorphicLayoutEffect';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import React, { FC, ReactNode, useMemo } from 'react';
import { ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { GlobalStyleClassesStyles } from './GlobalStyleClasses.jss';

const useStyles = createComponentStyles(GlobalStyleClassesStyles);

const cssVarsPonyfillNeeded = () => !!window.CSSVarsPonyfill;

export interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const { children } = props;
  const isCompactSize = document.body.classList.contains('ui5-content-density-compact');
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

  const theme = getTheme();

  const themeContext: JSSTheme = useMemo(() => {
    return {
      theme,
      contentDensity: isCompactSize ? ContentDensity.Compact : ContentDensity.Cozy,
      parameters: ThemingParameters,
      rtl: getRTL()
    };
  }, [theme, isCompactSize]);

  return <ReactJssThemeProvider theme={themeContext}>{children}</ReactJssThemeProvider>;
};

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
