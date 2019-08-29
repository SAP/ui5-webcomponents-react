import boot from '@ui5/webcomponents-base/src/boot';
import { getCompactSize, getTheme } from '@ui5/webcomponents-base/src/Configuration';
import { injectThemeProperties } from '@ui5/webcomponents-base/src/theming/StyleInjection';
import { createGenerateClassName, sap_fiori_3, Device } from '@ui5/webcomponents-react-base';
import fiori3Theme from '@ui5/webcomponents/dist/generated/themes/sap_fiori_3/parameters-bundle.css.js';
import React, { FC, Fragment, ReactNode, useEffect, useMemo } from 'react';
import { JssProvider, ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';
import { MessageToast } from '@ui5/webcomponents-react/lib/MessageToast';
import { Themes } from '@ui5/webcomponents-react/lib/Themes';
import { Jss } from 'jss';

export interface ThemeProviderProps {
  /*
   * If true, the Theme Provider will also inject the root node for message toasts.
   * Required in case you want to use them.
   */
  withToastContainer?: boolean;
  children: ReactNode;
  /*
   * Allows you to inject a custom JSS instance, e.g. if you need another insertionPoint or differnent plugins.
   * If not provided, the default instance from `react-jss` will be used.
   */
  jss?: Jss;
  /*
   * The Theme Provider injects the fiori_3 theme variables into the document head.
   * If this prop is set to true, this step is skipped.
   */
  noInjectThemeProperties?: boolean;
}

const generateClassName = createGenerateClassName();

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { withToastContainer, children, jss, noInjectThemeProperties } = props;
  const theme = getTheme();

  useEffect(() => {
    if (!noInjectThemeProperties) {
      boot().then(async () => {
        // TODO will rename to 'data-ui5-theme-properties' after next UI5 Web Components Release
        const styleElement = document.head.querySelector('style[data-ui5-webcomponents-theme-properties]');
        // only inject parameters for sap_fiori_3 and if they haven't been injected before
        if (theme === Themes.sap_fiori_3 && !styleElement.textContent) {
          injectThemeProperties(fiori3Theme);
          const CSSVarsPonyfill = window['CSSVarsPonyfill'];
          if (Device.browser.msie && CSSVarsPonyfill) {
            setTimeout(() => {
              CSSVarsPonyfill.resetCssVars();
              CSSVarsPonyfill.cssVars();
            }, 0);
          }
        }
      });
    }
  }, [theme, noInjectThemeProperties]);

  const isCompactSize = getCompactSize();

  const parameters = useMemo(() => {
    if (theme === Themes.sap_fiori_3) return sap_fiori_3;
    return null;
  }, [theme]);

  const themeContext = useMemo(() => {
    return {
      theme,
      contentDensity: isCompactSize ? ContentDensity.Compact : ContentDensity.Cozy,
      parameters
    };
  }, [theme, isCompactSize, parameters]);

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
  withToastContainer: false,
  noInjectThemeProperties: false
};

export { ThemeProvider };
