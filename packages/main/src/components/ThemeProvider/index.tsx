import { createGenerateClassName, sap_fiori_3 } from '@ui5/webcomponents-react-base';
import { getCompactSize, getTheme } from '@ui5/webcomponents-base/src/Configuration';
import React, { Fragment, PureComponent, ReactNode } from 'react';
import { JssProvider, ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { ContentDensity } from '../../lib/ContentDensity';
import { MessageToast } from '../../lib/MessageToast';
import { Themes } from '../../lib/Themes';

export interface ThemeProviderProps {
  withToastContainer?: boolean;
  children: ReactNode;
}

const generateClassName = createGenerateClassName();

export class ThemeProvider extends PureComponent<ThemeProviderProps> {
  static defaultProps = {
    withToastContainer: false
  };

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
      <JssProvider generateId={generateClassName}>
        <ReactJssThemeProvider
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
      </JssProvider>
    );
  }
}
