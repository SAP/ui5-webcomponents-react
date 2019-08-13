import boot from '@ui5/webcomponents-base/src/boot';
import { getCompactSize, getTheme } from '@ui5/webcomponents-base/src/Configuration';
import { injectThemeProperties } from '@ui5/webcomponents-base/src/theming/StyleInjection';
import { createGenerateClassName, sap_fiori_3, Device } from '@ui5/webcomponents-react-base';
import fiori3Theme from '@ui5/webcomponents/dist/generated/themes/sap_fiori_3/parameters-bundle.css.js';
import React, { FC, Fragment, ReactNode, useEffect, useMemo } from 'react';
import { JssProvider, ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { ContentDensity } from '../../lib/ContentDensity';
import { MessageToast } from '../../lib/MessageToast';
import { Themes } from '../../lib/Themes';

export interface ThemeProviderProps {
  withToastContainer?: boolean;
  children: ReactNode;
}

const generateClassName = createGenerateClassName();

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const theme = getTheme();
  useEffect(() => {
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
  }, [theme]);
  const { withToastContainer, children } = props;

  const isCompactSize = getCompactSize();

  const contentDensity = useMemo(() => {
    return isCompactSize ? ContentDensity.Compact : ContentDensity.Cozy;
  }, [isCompactSize]);

  const parameters = useMemo(() => {
    if (theme === Themes.sap_fiori_3) return sap_fiori_3;
    return null;
  }, [theme]);

  const themeContext = useMemo(() => {
    return {
      theme,
      contentDensity,
      parameters
    };
  }, [theme, contentDensity, parameters]);

  return (
    <JssProvider generateId={generateClassName}>
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
