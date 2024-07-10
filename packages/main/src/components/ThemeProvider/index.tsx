'use client';

import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { getScopedVarName } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import type { StyleDataCSP } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import { attachThemeLoaded, detachThemeLoaded } from '@ui5/webcomponents-base/dist/theming/ThemeLoaded.js';
import {
  StyleStore,
  ThemingParameters,
  useIsomorphicId,
  useIsomorphicLayoutEffect,
  useStylesheet
} from '@ui5/webcomponents-react-base';
import type { FC, ReactNode } from 'react';
import { ThemeProvider as ReactJssThemeProvider } from 'react-jss';
import { I18nProvider } from '../../internal/I18nProvider.js';
import { ModalsProvider } from '../Modals/ModalsProvider.js';
import { styleData } from './ThemeProvider.css.js';

function ThemeProviderStyles() {
  const uniqueId = useIsomorphicId();
  useStylesheet(styleData, `${ThemeProvider.displayName}-${uniqueId}`);
  useStylesheet(ui5WcVariablesStyleData, `${ThemeProvider.displayName}-css-vars-${uniqueId}`);
  return null;
}

const InternalUI5WCVVarNames = {
  '--_ui5wcr_card_header_focus_offset': `var(${getScopedVarName('--_ui5_card_header_focus_offset')})`,
  '--_ui5wcr_card_header_focus_border': `var(${getScopedVarName('--_ui5_card_header_focus_border')})`,
  '--_ui5wcr_card_header_focus_radius': `var(${getScopedVarName('--_ui5_card_header_focus_radius')})`,
  '--_ui5wcr_card_header_focus_bottom_radius': `var(${getScopedVarName('--_ui5_card_header_focus_bottom_radius')})`,
  '--_ui5wcr_popup_header_font_family': `var(${getScopedVarName('--_ui5_popup_header_font_family')})`,
  '--_ui5wcr_popup_default_header_height': `var(${getScopedVarName('--_ui5_popup_default_header_height')})`
};

const ui5WcVariablesStyleData: StyleDataCSP = {
  content: `:root {${Object.entries(InternalUI5WCVVarNames)
    .map(([key, value]) => {
      return `${key}: ${value};`;
    })
    .join(' ')}}`,
  packageName: '@ui5/webcomponents-react',
  fileName: 'ThemeProvider'
};

export interface ThemeProviderPropTypes {
  children: ReactNode;
  withoutModalsProvider?: boolean;

  /**
   * You can set this flag to true in case you have imported our static CSS Bundle/s in your application.
   * This will prevent the ThemeProvider from injecting the CSS during runtime again.
   *
   * * __main:__ `import '@ui5/webcomponents-react/styles.css'`
   * * __charts:__ `import '@ui5/webcomponents-react-charts/styles.css'`
   */
  staticCssInjected?: boolean;
}

/**
 * In order to use `@ui5/webcomponents-react` you have to wrap your application's root component into the ThemeProvider.
 *
 * __Note:__ Per default, the `ThemeProvider` adds another provider for the [Modals](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-modals--docs) API.
 * If you don't use this, you can omit it by setting the prop `withoutModalsProvider` to `true`. (With v2.0, the `Modals` provider will be offered separately to reduce overhead)
 *
 * __Note:__ Per default, the `ThemeProvider` injects the CSS for the components during runtime. If you have imported our static CSS bundle/s in your application, you can set the prop `staticCssInjected` to `true` to prevent this.
 */
const ThemeProvider: FC<ThemeProviderPropTypes> = (props: ThemeProviderPropTypes) => {
  const { children, withoutModalsProvider = false, staticCssInjected = false } = props;

  useIsomorphicLayoutEffect(() => {
    document.documentElement.setAttribute('data-sap-theme', getTheme());
    const handler = (newTheme: string) => {
      document.documentElement.setAttribute('data-sap-theme', newTheme);
    };
    // themeLoaded is fired on theme change
    attachThemeLoaded(handler);
    return () => {
      detachThemeLoaded(handler);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    StyleStore.setStaticCssInjected(staticCssInjected);
  }, [staticCssInjected]);

  return (
    <>
      <ThemeProviderStyles />
      <ReactJssThemeProvider theme={ThemingParameters}>
        <I18nProvider>{withoutModalsProvider ? children : <ModalsProvider>{children}</ModalsProvider>}</I18nProvider>
      </ReactJssThemeProvider>
    </>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
