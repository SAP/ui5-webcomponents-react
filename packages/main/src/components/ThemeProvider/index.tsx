import boot from '@ui5/webcomponents-base/src/boot';
import { getCompactSize, getTheme } from '@ui5/webcomponents-base/src/Configuration';
import { injectThemeProperties } from '@ui5/webcomponents-base/src/theming/StyleInjection';
import { createGenerateClassName, sap_fiori_3 } from '@ui5/webcomponents-react-base';
import fiori3ThemeProperties from '@ui5/webcomponents/dist/themes/sap_fiori_3/parameters-bundle.css.json';
import React, { FC, Fragment, ReactNode, useEffect, useMemo, lazy, Suspense } from 'react';
import { JssProvider, ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { ContentDensity } from '../../lib/ContentDensity';
import { Themes } from '../../lib/Themes';

export interface ThemeProviderProps {
  withToastContainer?: boolean;
  children: ReactNode;
}

const EmptyComponent = () => null;

const generateClassName = createGenerateClassName();

const MessageToast = lazy(() => import('../../lib/MessageToast'));

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  useEffect(() => {
    boot().then((_) => {
      let existingThemingProperties = document.querySelector('head style[data-ui5-webcomponents-theme-properties]');
      if (!existingThemingProperties || !existingThemingProperties.innerHTML) {
        injectThemeProperties(fiori3ThemeProperties._);
      }
    });
  }, []);
  const { withToastContainer, children } = props;

  const theme = getTheme();
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
          {withToastContainer && (
            <Suspense fallback={<EmptyComponent />}>
              <MessageToast />
            </Suspense>
          )}
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
