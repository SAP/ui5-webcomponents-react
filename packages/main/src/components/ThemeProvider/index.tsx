import boot from '@ui5/webcomponents-base/src/boot';
import { getCompactSize, getTheme } from '@ui5/webcomponents-base/src/Configuration';
import { injectThemeProperties } from '@ui5/webcomponents-base/src/theming/StyleInjection';
import { sap_fiori_3 } from '@ui5/webcomponents-react-base';
import fiori3ThemeProperties from '@ui5/webcomponents/dist/themes/sap_fiori_3/parameters-bundle.css.js';
import React, { Fragment, PureComponent, ReactNode } from 'react';
import { jss, ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { ContentDensity } from '../../lib/ContentDensity';
import { MessageToast } from '../../lib/MessageToast';
import { Themes } from '../../lib/Themes';

export interface ThemeProviderProps {
  withToastContainer?: boolean;
  children: ReactNode;
}

export class ThemeProvider extends PureComponent<ThemeProviderProps> {
  static defaultProps = {
    withToastContainer: false
  };

  constructor(props) {
    super(props);
    // inject default CSS custom parameters in head
    boot().then((_) => {
      injectThemeProperties(fiori3ThemeProperties);
    });
  }

  private static getTheme = (theme: Themes) => {
    if (theme === Themes.sap_fiori_3) return sap_fiori_3;
    return null;
  };

  private static getContentDensity = (compactSize: boolean) => {
    return compactSize ? ContentDensity.Compact : ContentDensity.Cozy;
  };

  render() {
    const { withToastContainer } = this.props;
    return (
      <ReactJssThemeProvider
        jss={jss}
        theme={{
          theme: getTheme(),
          contentDensity: ThemeProvider.getContentDensity(getCompactSize()),
          parameters: ThemeProvider.getTheme(getTheme())
        }}
      >
        <Fragment>
          {this.props.children}
          {withToastContainer && <MessageToast />}
        </Fragment>
      </ReactJssThemeProvider>
    );
  }
}
