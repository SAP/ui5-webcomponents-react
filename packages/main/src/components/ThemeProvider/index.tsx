import { root as sap_fiori_3 } from '@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/variables.json';
import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { getRTL } from '@ui5/webcomponents-base/dist/config/RTL';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { cssVariablesStyles } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { Themes } from '@ui5/webcomponents-react/lib/Themes';
import React, { FC, ReactNode, useEffect, useMemo } from 'react';
import { ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { GlobalStyleClassesStyles } from './GlobalStyleClasses.jss';

const themeMap = window['@ui5/webcomponents-react-theming'] || (window['@ui5/webcomponents-react-theming'] = new Map());
themeMap.set('sap_fiori_3', sap_fiori_3);
const useStyles = createComponentStyles(GlobalStyleClassesStyles);

const insertThemeDesignerParameters = (parameters = {}) => {
  let element = document.querySelector('head #ui5wcr-theming-parameters');
  if (!element) {
    element = document.createElement('style');
    element.id = 'ui5wcr-theming-parameters';
    document.head.insertBefore(element, document.head.firstChild);
  }
  element.innerHTML = `
:root {
  ${Object.entries(parameters)
    .map(([key, value]) => `--${key}:${value};`)
    .join('\n')}
}`;
};

declare global {
  interface Window {
    CSSVarsPonyfill: {
      cssVars: (options: any) => void;
    };
  }
}

const cssVarsPonyfillNeeded = () => !!window.CSSVarsPonyfill;

export interface ThemeProviderProps {
  theme: Themes;
  children: ReactNode;
}

// inject the size variables first before the ThemeProvider Component is mounted, otherwise there will be some flickering
if (!document.querySelector('style[data-ui5-webcomponents-react-sizes]')) {
  const variables = document.createElement('style');
  variables.setAttribute('data-ui5-webcomponents-react-sizes', '');
  variables.innerHTML = cssVariablesStyles;
  document.head.appendChild(variables);
}

/**
 * <code>import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';</code>
 */
const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const { children, theme = getTheme() } = props;
  const isCompactSize = document.body.classList.contains('ui5-content-density-compact');
  useStyles();

  useEffect(() => {
    if (themeMap) {
      insertThemeDesignerParameters(themeMap.get(theme));
    }
  }, [theme]);

  const themeContext: JSSTheme = useMemo(() => {
    return {
      theme,
      contentDensity: isCompactSize ? ContentDensity.Compact : ContentDensity.Cozy,
      parameters: ThemingParameters,
      rtl: getRTL()
    };
  }, [theme, isCompactSize]);

  useEffect(() => {
    if (cssVarsPonyfillNeeded()) {
      window.CSSVarsPonyfill.cssVars({
        rootElement: document.head,
        include: 'style[data-ui5-webcomponents-react-sizes],style[data-jss]',
        watch: true,
        silent: true
      });
    }
    if (getRTL()) {
      document.dir = 'rtl';
    }
  }, []);

  return <ReactJssThemeProvider theme={themeContext}>{children}</ReactJssThemeProvider>;
};

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
