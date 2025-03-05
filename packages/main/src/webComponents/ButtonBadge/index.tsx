'use client';

import '@ui5/webcomponents/dist/ButtonBadge.js';
import type ButtonBadgeDesign from '@ui5/webcomponents/dist/types/ButtonBadgeDesign.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface ButtonBadgeAttributes {
  /**
   * Defines the badge placement and appearance.
   * - **InlineText** - displayed inside the button after its text, and recommended for **compact** density.
   * - **OverlayText** - displayed at the top-end corner of the button, and recommended for **cozy** density.
   * - **AttentionDot** - displayed at the top-end corner of the button as a dot, and suitable for both **cozy** and **compact** densities.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.
   * @default "AttentionDot"
   */
  design?: ButtonBadgeDesign | keyof typeof ButtonBadgeDesign;

  /**
   * Defines the text of the component.
   *
   * **Note:** Text is not applied when the `design` property is set to `AttentionDot`.
   *
   * **Note:** The badge component only accepts numeric values and the "+" symbol. Using other characters or formats may result in unpredictable behavior, which is not guaranteed or supported.
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
 *
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
