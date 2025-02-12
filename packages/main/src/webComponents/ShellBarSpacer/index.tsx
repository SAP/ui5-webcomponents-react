'use client';

import '@ui5/webcomponents-fiori/dist/ShellBarSpacer.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface ShellBarSpacerAttributes {}

interface ShellBarSpacerDomRef extends Required<ShellBarSpacerAttributes>, Ui5DomRef {}

interface ShellBarSpacerPropTypes extends ShellBarSpacerAttributes, CommonProps {}

/**
 * The `ShellBarSpacer` is an element, used for visual separation between the two content parts of the `ShellBar`.
 * **Note:** The `ShellBarSpacer` component is in an experimental state and is a subject to change.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 */
const ShellBarSpacer = withWebComponent<ShellBarSpacerPropTypes, ShellBarSpacerDomRef>(
  'ui5-shellbar-spacer',
  [],
  [],
  [],
  []
);

ShellBarSpacer.displayName = 'ShellBarSpacer';

export { ShellBarSpacer };
export type { ShellBarSpacerDomRef, ShellBarSpacerPropTypes };
