'use client';

import '@ui5/webcomponents/dist/Title.js';
import type { ReactNode } from 'react';
import type { WrappingType } from '../../enums/index.js';
import { TitleLevel } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TitleAttributes {
  /**
   * Defines the component level. Available options are: `"H6"` to `"H1"`.
   */
  level?: TitleLevel | keyof typeof TitleLevel;
  /**
   * Defines how the text of a component will be displayed when there is not enough space.
   * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

interface TitleDomRef extends TitleAttributes, Ui5DomRef {}

interface TitlePropTypes extends TitleAttributes, Omit<CommonProps, keyof TitleAttributes> {
  /**
   * Defines the text of the component. This component supports nesting a `Link` component inside.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Title` component is used to display titles inside a page. It is a simple, large-sized text with explicit header/title semantics.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Title)
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

Title.defaultProps = {
  level: TitleLevel.H2
};

export { Title };
export type { TitleDomRef, TitlePropTypes };
