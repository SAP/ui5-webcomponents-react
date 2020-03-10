import { getCompactSize } from '@ui5/webcomponents-base/dist/config/CompactSize';
import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { createGenerateClassName } from '@ui5/webcomponents-react-base/lib/createGenerateClassName';
import { cssVariablesStyles } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import * as sap_fiori_3 from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { MessageToast } from '@ui5/webcomponents-react/lib/MessageToast';
import { Jss } from 'jss';
import React, { FC, Fragment, ReactNode, useEffect, useMemo } from 'react';
import { JssProvider, ThemeProvider as ReactJssThemeProvider } from 'react-jss';

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
  /*
   * Allows you to inject a custom JSS instance, e.g. if you need another insertionPoint or different plugins.
   * If not provided, the default instance from `react-jss` will be used.
   */
  jss?: Jss;
}

const generateClassName = createGenerateClassName();

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
const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { withToastContainer, children, jss } = props;
  const theme = getTheme();
  const isCompactSize = getCompactSize();

  const themeContext = useMemo(() => {
    return {
      theme,
      contentDensity: isCompactSize ? ContentDensity.Compact : ContentDensity.Cozy,
      parameters: sap_fiori_3
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
        include: 'style[data-ui5-webcomponents-react-sizes],style[data-jss]'
      });
    }
  }, []);

  return (
    <JssProvider generateId={generateClassName} jss={jss}>
      <ReactJssThemeProvider theme={themeContext}>
        <Fragment>
          {children}
          {withToastContainer && <MessageToast />}
        </Fragment>
      </ReactJssThemeProvider>
    </JssProvider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';
ThemeProvider.defaultProps = {
  withToastContainer: false
};

export { ThemeProvider };
