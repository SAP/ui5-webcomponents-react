import { ContentDensity } from '../../lib/ContentDensity';
import { MessageToast } from '../../lib/MessageToast';
import { Themes } from '../../lib/Themes';
import { jss, ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import React, { Fragment, PureComponent, ReactNode } from 'react';
import { bootstrap, sap_fiori_3 } from '@fiori-for-react/styles';

bootstrap();

export interface ThemeProviderProps {
  theme: Themes;
  contentDensity: ContentDensity;
  withToastContainer?: boolean;
  children: ReactNode;
}

export class ThemeProvider extends PureComponent<ThemeProviderProps> {
  static defaultProps = {
    theme: Themes.sap_fiori_3,
    contentDensity: ContentDensity.Compact,
    withToastContainer: false
  };

  private static getTheme = (theme: Themes) => {
    if (theme === Themes.sap_fiori_3) return sap_fiori_3;
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
