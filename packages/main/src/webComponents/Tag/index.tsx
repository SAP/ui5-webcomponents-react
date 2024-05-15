'use client';

import '@ui5/webcomponents/dist/Tag.js';
import type TagDesign from '@ui5/webcomponents/dist/types/TagDesign.js';
import type TagSize from '@ui5/webcomponents/dist/types/TagSize.js';
import type WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface TagAttributes {
  /**
   * Defines the color scheme of the component.
   * There are 10 predefined schemes.
   * To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.
   * @default "1"
   */
  colorScheme?: string;

  /**
   * Defines the design type of the component.
   *
   * **Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.
   * @default "Neutral"
   */
  design?: TagDesign | keyof typeof TagDesign;

  /**
   * Defines if the default state icon is shown.
   *
   * **Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.
   * @default false
   */
  hideStateIcon?: boolean;

  /**
   * Defines if the component is interactive (focusable and pressable).
   *
   * **Note:** The tag cannot be `interactive`
   * when `design` property is `TagDesign.Set3`
   *
   * **Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.
   * @default false
   */
  interactive?: boolean;

  /**
   * Defines predefined size of the component.
   *
   * **Note:** Available since [v2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0) of **@ui5/webcomponents**.
   * @default "S"
   */
  size?: TagSize | keyof typeof TagSize;

  /**
   * Defines how the text of a component will be displayed when there is not enough space.
   *
   * **Note:** For option "Normal" the text will wrap and the
   * words will not be broken based on hyphenation.
   *
   * **Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.
   * @default "None"
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

interface TagDomRef extends Required<TagAttributes>, Ui5DomRef {}

interface TagPropTypes extends TagAttributes, Omit<CommonProps, keyof TagAttributes | 'children' | 'icon' | 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the icon to be displayed in the component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="icon"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  icon?: UI5WCSlotsNode;
  /**
   * Fired when the user clicks on an interactive tag.
   *
   * **Note:** The event will be fired if the `interactive` property is `true`
   *
   * **Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.
   */
  onClick?: (event: Ui5CustomEvent<TagDomRef>) => void;
}

/**
 * The `Tag` is a component which serves
 * the purpose to attract the user attention to some piece
 * of information (state, quantity, condition, etc.).
 * It can contain icon and text information, and its design can be chosen from specific design types.
 *
 * ### Usage Guidelines
 *
 * - If the text is longer than the width of the component, it can wrap, or it can show ellipsis, depending on the `wrappingType` property.
 * - Colors can be semantic or not semantic.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const Tag = withWebComponent<TagPropTypes, TagDomRef>(
  'ui5-tag',
  ['colorScheme', 'design', 'size', 'wrappingType'],
  ['hideStateIcon', 'interactive'],
  ['icon'],
  ['click'],
  () => import('@ui5/webcomponents/dist/Tag.js')
);

Tag.displayName = 'Tag';

export { Tag };
export type { TagDomRef, TagPropTypes };
