import '@fiori-for-react/core/utils/bootstrap';
import { jss, ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { ContentDensity, Themes } from '@fiori-for-react/core/enums';
import React, { Fragment, PureComponent, ReactNode } from 'react';
import { sap_fiori_3 } from '@fiori-for-react/styles';
import { MessageToast } from '../MessageToast';

export interface ThemeProviderProps {
  theme: Themes;
  contentDensity: ContentDensity;
  withToastContainer?: boolean;
  children: ReactNode;
}

export class ThemeProvider extends PureComponent<ThemeProviderProps> {
  static defaultProps = {
    theme: Themes.sap_fiori3_light,
    contentDensity: ContentDensity.Compact,
    withToastContainer: false
  };

  private static getTheme = (theme: Themes) => {
    if (theme === Themes.sap_fiori3_light) return sap_fiori_3;
    return null;
  };

  render() {
    const { theme, contentDensity, withToastContainer } = this.props;
    return (
      <ReactJssThemeProvider
        jss={jss}
        theme={{ theme, contentDensity, parameters: ThemeProvider.getTheme(this.props.theme) }}
      >
        <Fragment>
          {this.props.children}
          {withToastContainer && <MessageToast />}
        </Fragment>
      </ReactJssThemeProvider>
    );
  }
}
