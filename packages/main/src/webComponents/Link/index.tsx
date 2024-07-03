'use client';

import '@ui5/webcomponents/dist/Link.js';
import type { LinkAccessibilityAttributes, LinkClickEventDetail } from '@ui5/webcomponents/dist/Link.js';
import type LinkAccessibleRole from '@ui5/webcomponents/dist/types/LinkAccessibleRole.js';
import type LinkDesign from '@ui5/webcomponents/dist/types/LinkDesign.js';
import type WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface LinkAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following fields are supported:
   *
   * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
   * Accepts the following string values: `true` or `false`.
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
   * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   * @default {}
   */
  accessibilityAttributes?: LinkAccessibilityAttributes;

  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the input
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines the ARIA role of the component.
   *
   * **Note:** Use the <code>LinkAccessibleRole.Button</code> role in cases when navigation is not expected to occur and the href property is not defined.
   *
   * **Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.
   * @default "Link"
   */
  accessibleRole?: LinkAccessibleRole | keyof typeof LinkAccessibleRole;

  /**
   * Defines the component design.
   *
   * **Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.
   * @default "Default"
   */
  design?: LinkDesign | keyof typeof LinkDesign;

  /**
   * Defines whether the component is disabled.
   *
   * **Note:** When disabled, the click event cannot be triggered by the user.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon, displayed as graphical element within the component after the link's text.
   * The SAP-icons font provides numerous options.
   *
   * **Note:** Usage of icon-only link is not supported, the link must always have a text.
   *
   * **Note:** We recommend using аn icon in the beginning or the end only, and with text.
   *
   * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  endIcon?: string | undefined;

  /**
   * Defines the component href.
   *
   * **Note:** Standard hyperlink behavior is supported.
   * @default undefined
   */
  href?: string | undefined;

  /**
   * Defines the icon, displayed as graphical element within the component before the link's text.
   * The SAP-icons font provides numerous options.
   *
   * **Note:** Usage of icon-only link is not supported, the link must always have a text.
   *
   * **Note:** We recommend using аn icon in the beginning or the end only, and with text.
   *
   * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  icon?: string | undefined;

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

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines how the text of a component will be displayed when there is not enough space.
   *
   * **Note:** By default the text will wrap. If "None" is set - the text will truncate.
   * @default "Normal"
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

interface LinkDomRef extends Required<LinkAttributes>, Ui5DomRef {}

interface LinkPropTypes extends LinkAttributes, Omit<CommonProps, keyof LinkAttributes | 'children' | 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is triggered either with a mouse/tap
   * or by using the Enter key.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onClick?: (event: Ui5CustomEvent<LinkDomRef, LinkClickEventDetail>) => void;
}

/**
 * The `Link` is a hyperlink component that is used to navigate to other
 * apps and web pages, or to trigger actions.
 * It is a clickable text element, visualized in such a way that it stands out
 * from the standard text.
 * On hover, it changes its style to an underlined text to provide additional feedback to the user.
 *
 * ### Usage
 *
 * You can set the `Link` to be enabled or disabled.
 *
 * To create a visual hierarchy in large lists of links, you can set the less important links as
 * `Subtle` or the more important ones as `Emphasized`,
 * by using the `design` property.
 *
 * If the `href` property is set, the link behaves as the HTML
 * anchor tag (`<a></a>`) and opens the specified URL in the given target frame (`target` property).
 * To specify where the linked content is opened, you can use the `target` property.
 *
 * ### Responsive behavior
 *
 * If there is not enough space, the text of the `Link` becomes truncated.
 * If the `wrappingType` property is set to `"Normal"`, the text is displayed
 * on several lines instead of being truncated.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Link = withWebComponent<LinkPropTypes, LinkDomRef>(
  'ui5-link',
  [
    'accessibilityAttributes',
    'accessibleName',
    'accessibleNameRef',
    'accessibleRole',
    'design',
    'endIcon',
    'href',
    'icon',
    'target',
    'tooltip',
    'wrappingType'
  ],
  ['disabled'],
  [],
  ['click'],
  () => import('@ui5/webcomponents/dist/Link.js')
);

Link.displayName = 'Link';

export { Link };
export type { LinkDomRef, LinkPropTypes };
