import { getCompactSize } from '@ui5/webcomponents-base/dist/config/CompactSize';
import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { getRTL } from '@ui5/webcomponents-base/dist/config/RTL';
import { cssVariablesStyles } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { MessageToast } from '@ui5/webcomponents-react/lib/MessageToast';
import React, { FC, Fragment, ReactNode, useEffect, useMemo } from 'react';
import { ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { JSSTheme } from '../../interfaces/JSSTheme';

declare global {
  interface Window {
    CSSVarsPonyfill: {
      cssVars: (options: any) => void;
    };
  }
}

const cssVarsPonyfillNeeded = () => !!window.CSSVarsPonyfill;

export interface ThemeProviderProps {
  /*
   * If true, the Theme Provider will also inject the root node for message toasts.
   * Required in case you want to use them.
   */
  withToastContainer?: boolean;
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
  const { withToastContainer = false, children } = props;
  const theme = getTheme();
  const isCompactSize = getCompactSize();

  const themeContext: JSSTheme = useMemo(() => {
    return {
      theme,
      contentDensity: isCompactSize ? ContentDensity.Compact : ContentDensity.Cozy,
      parameters: ThemingParameters,
      rtl: getRTL()
    };
  }, [theme, isCompactSize]);

  useEffect(() => {
    if (isCompactSize) {
      document.body.classList.add('ui5-content-density-compact');
    } else {
      document.body.classList.remove('ui5-content-density-compact');
    }
  }, [isCompactSize]);

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

  return (
    <ReactJssThemeProvider theme={themeContext}>
      <Fragment>
        {children}
        {withToastContainer && <MessageToast />}
      </Fragment>
    </ReactJssThemeProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
