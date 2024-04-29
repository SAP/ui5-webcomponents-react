'use client';

import '@ui5/webcomponents/dist/Title.js';
import type TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import type WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TitleAttributes {
  /**
   * Defines the component level.
   * Available options are: `"H6"` to `"H1"`.
   * @default "H2"
   */
  level?: TitleLevel | keyof typeof TitleLevel;

  /**
   * Defines how the text of a component will be displayed when there is not enough space.
   *
   * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
   * @default "None"
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

interface TitleDomRef extends Required<TitleAttributes>, Ui5DomRef {}

interface TitlePropTypes extends TitleAttributes, Omit<CommonProps, keyof TitleAttributes | 'children'> {
  /**
   * Defines the text of the component.
   * This component supports nesting a `Link` component inside.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Title` component is used to display titles inside a page.
 * It is a simple, large-sized text with explicit header/title semantics.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Title = withWebComponent<TitlePropTypes, TitleDomRef>(
  'ui5-title',
  ['level', 'wrappingType'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/Title.js')
);

Title.displayName = 'Title';

export { Title };
export type { TitleDomRef, TitlePropTypes };
