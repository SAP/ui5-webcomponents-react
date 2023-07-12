'use client';

import '@ui5/webcomponents/dist/Title.js';
import type { ReactNode } from 'react';
import type { WrappingType } from '../../enums/index.js';
import { TitleLevel } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface TitleAttributes {
  /**
   * Defines the component level. Available options are: `"H6"` to `"H1"`.
   */
  level?: TitleLevel | keyof typeof TitleLevel;
  /**
   * Defines how the text of a component will be displayed when there is not enough space. Available options are:
   *
   * *   `None` - The text will be truncated with an ellipsis.
   * *   `Normal` - The text will wrap. The words will not be broken based on hyphenation.
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

export interface TitleDomRef extends TitleAttributes, Ui5DomRef {}

export interface TitlePropTypes extends TitleAttributes, CommonProps {
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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Title" target="_blank">UI5 Web Components Storybook</ui5-link>
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
