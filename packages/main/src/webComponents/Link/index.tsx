'use client';

import '@ui5/webcomponents/dist/Link.js';
import type { ReactNode } from 'react';
import type { WrappingType } from '../../enums/index.js';
import { LinkDesign } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

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
   * Defines the ARIA role of the component. **Note:** Use the "button" role in cases when navigation is not expected to occur and the href property is not defined.
   */
  accessibleRole?: string;
  /**
   * Defines the component design.
   *
   * **Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.
   */
  design?: LinkDesign | keyof typeof LinkDesign;
  /**
   * Defines whether the component is disabled.
   *
   * **Note:** When disabled, the click event cannot be triggered by the user.
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
   * *   `_self`
   * *   `_top`
   * *   `_blank`
   * *   `_parent`
   * *   `_search`
   *
   * **This property must only be used when the `href` property is set.**
   */
  target?: string;
  /**
   * Defines how the text of a component will be displayed when there is not enough space. Available options are:
   *
   * *   `None` - The text will be truncated with an ellipsis.
   * *   `Normal` - The text will wrap. The words will not be broken based on hyphenation.
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

export interface LinkDomRef extends LinkAttributes, Ui5DomRef {
  /**
   * An object of strings that defines several additional accessibility attribute values for customization depending on the use case. It supports the following fields:
   *
   * *   `expanded`: Indicates whether the anchor element, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
   *     *   `true`
   *     *   `false`
   * *   `hasPopup`: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the anchor element. Accepts the following string values:
   *     *   `Dialog`
   *     *   `Grid`
   *     *   `ListBox`
   *     *   `Menu`
   *     *   `Tree`
   */
  accessibilityAttributes: Record<string, unknown>;
}

export interface LinkPropTypes extends LinkAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Defines the text of the component.
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is triggered either with a mouse/tap or by using the Enter key.
   */
  onClick?: (
    event: Ui5CustomEvent<LinkDomRef, { altKey: boolean; ctrlKey: boolean; metaKey: boolean; shiftKey: boolean }>
  ) => void;
}

/**
 * The `Link` is a hyperlink component that is used to navigate to other apps and web pages, or to trigger actions. It is a clickable text element, visualized in such a way that it stands out from the standard text. On hover, it changes its style to an underlined text to provide additional feedback to the user.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Link" target="_blank">UI5 Web Components Playground</ui5-link>
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

Link.defaultProps = {
  accessibleRole: 'link',
  design: LinkDesign.Default
};

export { Link };
