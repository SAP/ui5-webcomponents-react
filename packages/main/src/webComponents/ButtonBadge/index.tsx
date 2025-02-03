'use client';

import '@ui5/webcomponents/dist/ButtonBadge.js';
import type ButtonBadgeDesign from '@ui5/webcomponents/dist/types/ButtonBadgeDesign.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ButtonBadgeAttributes {
  /**
   * Determines where the badge should be placed and how it should be styled.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.
   * @default "AttentionDot"
   */
  design?: ButtonBadgeDesign | keyof typeof ButtonBadgeDesign;

  /**
   * Defines the text of the component.
   *
   * **Note:** Text is not needed when the `design` property is set to `AttentionDot`.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.
   */
  text?: string;
}

interface ButtonBadgeDomRef extends Required<ButtonBadgeAttributes>, Ui5DomRef {}

interface ButtonBadgePropTypes extends ButtonBadgeAttributes, Omit<CommonProps, keyof ButtonBadgeAttributes> {}

/**
 * The `ButtonBadge` component defines a badge that appears in the `Button`.
 *
 *  *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents__.
 */
const ButtonBadge = withWebComponent<ButtonBadgePropTypes, ButtonBadgeDomRef>(
  'ui5-button-badge',
  ['design', 'text'],
  [],
  [],
  []
);

ButtonBadge.displayName = 'ButtonBadge';

export { ButtonBadge };
export type { ButtonBadgeDomRef, ButtonBadgePropTypes };
