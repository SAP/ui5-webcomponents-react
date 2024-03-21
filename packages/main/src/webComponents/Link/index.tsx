'use client';

import '@ui5/webcomponents/dist/Link.js';
import type { AccessibilityAttributes, LinkClickEventDetail } from '@ui5/webcomponents/dist/Link.js';
import type LinkDesign from '@ui5/webcomponents/dist/types/LinkDesign.js';
import type WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface LinkAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;

  /**
   * Receives id(or many ids) of the elements that label the input
   */
  accessibleNameRef?: string;

  /**
   * Defines the ARIA role of the component.
   *
   * **Note:** Use the "button" role in cases when navigation is not expected to occur and the href property is not defined.
   * @default "link"
   */
  accessibleRole?: string;

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
   * Defines the component href.
   *
   * **Note:** Standard hyperlink behavior is supported.
   */
  href?: string;

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
   */
  target?: string;

  /**
   * Defines how the text of a component will be displayed when there is not enough space.
   *
   * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
   * @default "None"
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

interface LinkDomRef extends Required<LinkAttributes>, Ui5DomRef {
  /**
   * An object of strings that defines several additional accessibility attribute values
   * for customization depending on the use case.
   *
   * It supports the following fields:
   *
   * - `expanded`: Indicates whether the anchor element, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
   * - `true`
   * - `false`
   * - `hasPopup`: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the anchor element. Accepts the following string values:
   * - `Dialog`
   * - `Grid`
   * - `ListBox`
   * - `Menu`
   * - `Tree`
   */
  accessibilityAttributes: AccessibilityAttributes;
}

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
   * __Note__: Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
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
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Link = withWebComponent<LinkPropTypes, LinkDomRef>(
  'ui5-link',
  ['accessibleName', 'accessibleNameRef', 'accessibleRole', 'design', 'href', 'target', 'wrappingType'],
  ['disabled'],
  [],
  ['click'],
  () => import('@ui5/webcomponents/dist/Link.js')
);

Link.displayName = 'Link';

export { Link };
export type { LinkDomRef, LinkPropTypes };
