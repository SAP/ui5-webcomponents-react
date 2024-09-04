'use client';

import '@ui5/webcomponents/dist/Text.js';
import type EmptyIndicatorMode from '@ui5/webcomponents/dist/types/TextEmptyIndicatorMode.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TextAttributes {
  /**
   * Specifies if an empty indicator should be displayed when there is no text.
   *
   * **Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.
   * @default "Off"
   */
  emptyIndicatorMode?: EmptyIndicatorMode | keyof typeof EmptyIndicatorMode;

  /**
   * Defines the number of lines the text should wrap before it truncates.
   * @default Infinity
   */
  maxLines?: number;
}

interface TextDomRef extends Required<TextAttributes>, Ui5DomRef {}

interface TextPropTypes extends TextAttributes, Omit<CommonProps, keyof TextAttributes | 'children'> {
  /**
   * Defines the text of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <h3>Overview</h3>
 *
 * The `Text` component displays text that can be used in any content area of an application.
 *
 * <h3>Usage</h3>
 *
 * - Use the `Text` if you want to display text inside a form, table, or any other content area.
 * - Do not use the `Text` if you need to reference input type of components (use ui5-label).
 *
 * <h3>Responsive behavior</h3>
 *
 * The `Text` component is fully adaptive to all screen sizes.
 * By default, the text will wrap when the space is not enough.
 * In addition, the component supports truncation via the <code>max-lines</code> property,
 * by defining the number of lines the text should wrap before start truncating.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Text";</code>
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const Text = withWebComponent<TextPropTypes, TextDomRef>('ui5-text', ['emptyIndicatorMode', 'maxLines'], [], [], []);

Text.displayName = 'Text';

export { Text };
export type { TextDomRef, TextPropTypes };
