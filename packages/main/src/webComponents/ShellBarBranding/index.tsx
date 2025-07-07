'use client';

import '@ui5/webcomponents-fiori/dist/ShellBarBranding.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ShellBarBrandingAttributes {
  /**
   * Defines the text alternative of the component.
   * If not provided a default text alternative will be set, if present.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the component href.
   *
   * **Note:** Standard hyperlink behavior is supported.
   * @default undefined
   */
  href?: string | undefined;

  /**
   * Defines the component target.
   *
   * **Notes:**
   *
   * - `_self`
   * - `_top`
   * - `_blank`
   * - `_parent`
   * - `_search`
   *
   * **This property must only be used when the `href` property is set.**
   * @default undefined
   */
  target?: string | undefined;
}

interface ShellBarBrandingDomRef extends Required<ShellBarBrandingAttributes>, Ui5DomRef {}

interface ShellBarBrandingPropTypes
  extends ShellBarBrandingAttributes,
    Omit<CommonProps, keyof ShellBarBrandingAttributes | 'children' | 'logo' | 'onClick'> {
  /**
   * Defines the title for the ui5-shellbar-branding component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the logo of the `ShellBar`.
   * For example, you can use `ui5-avatar` or `img` elements as logo.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="logo"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  logo?: UI5WCSlotsNode;
  /**
   * Fired, when the logo is activated.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<ShellBarBrandingDomRef>) => void;
}

/**
 * The `ShellBarBranding` component is intended to be placed inside the branding slot of the
 * `ShellBar` component. Its content has higher priority than the `primaryTitle` property
 * and the `logo` slot of `ShellBar`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const ShellBarBranding = withWebComponent<ShellBarBrandingPropTypes, ShellBarBrandingDomRef>(
  'ui5-shellbar-branding',
  ['accessibleName', 'href', 'target'],
  [],
  ['logo'],
  ['click'],
);

ShellBarBranding.displayName = 'ShellBarBranding';

export { ShellBarBranding };
export type { ShellBarBrandingDomRef, ShellBarBrandingPropTypes };
