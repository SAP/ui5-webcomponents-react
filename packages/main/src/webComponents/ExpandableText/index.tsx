'use client';

import '@ui5/webcomponents/dist/ExpandableText.js';
import type ExpandableTextOverflowMode from '@ui5/webcomponents/dist/types/ExpandableTextOverflowMode.js';
import type TextEmptyIndicatorMode from '@ui5/webcomponents/dist/types/TextEmptyIndicatorMode.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface ExpandableTextAttributes {
  /**
   * Specifies if an empty indicator should be displayed when there is no text.
   * @default "Off"
   */
  emptyIndicatorMode?: TextEmptyIndicatorMode | keyof typeof TextEmptyIndicatorMode;

  /**
   * Maximum number of characters to be displayed initially. If the text length exceeds this limit, the text will be truncated with an ellipsis, and the "More" link will be displayed.
   * @default 100
   */
  maxCharacters?: number;

  /**
   * Determines how the full text will be displayed.
   * @default "InPlace"
   */
  overflowMode?: ExpandableTextOverflowMode | keyof typeof ExpandableTextOverflowMode;

  /**
   * Text of the component.
   * @default undefined
   */
  text?: string | undefined;
}

interface ExpandableTextDomRef extends Required<ExpandableTextAttributes>, Ui5DomRef {}

interface ExpandableTextPropTypes extends ExpandableTextAttributes, Omit<CommonProps, keyof ExpandableTextAttributes> {}

/**
 * The `ExpandableText` component allows displaying a large body of text in a small space. It provides an "expand/collapse" functionality, which shows/hides potentially truncated text.
 *
 * ### Usage
 *
 * #### When to use:
 * - To accommodate long texts in limited space, for example in list items, table cell texts, or forms
 *
 * #### When not to use:
 * - The content is critical for the user. In this case use short descriptions that can fit in
 * - Strive to provide short and meaningful texts to avoid excessive number of "Show More" links on the page
 *
 * ### Responsive Behavior
 *
 * On phones, if the component is configured to display the full text in a popover, the popover will appear in full screen.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of __@ui5/webcomponents__.
 */
const ExpandableText = withWebComponent<ExpandableTextPropTypes, ExpandableTextDomRef>(
  'ui5-expandable-text',
  ['emptyIndicatorMode', 'maxCharacters', 'overflowMode', 'text'],
  [],
  [],
  []
);

ExpandableText.displayName = 'ExpandableText';

export { ExpandableText };
export type { ExpandableTextDomRef, ExpandableTextPropTypes };
