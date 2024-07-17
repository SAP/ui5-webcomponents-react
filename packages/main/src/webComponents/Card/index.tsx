'use client';

import '@ui5/webcomponents/dist/Card.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface CardAttributes {
  /**
   * Defines the accessible name of the component, which is used as the name of the card region and should be unique per card.
   *
   * **Note:** `accessibleName` should be always set, unless `accessibleNameRef` is set.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the IDs of the elements that label the component.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;
}

interface CardDomRef extends Required<CardAttributes>, Ui5DomRef {}

interface CardPropTypes extends CardAttributes, Omit<CommonProps, keyof CardAttributes | 'children' | 'header'> {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the header of the component.
   *
   * **Note:** Use `CardHeader` for the intended design.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
}

/**
 * The `Card` is a component that represents information in the form of a
 * tile with separate header and content areas.
 * The content area of a `Card` can be arbitrary HTML content.
 * The header can be used through slot `header`. For which there is a `CardHeader` component to achieve the card look and feel.
 *
 * Note: We recommend the usage of `CardHeader` for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.
 *
 *
 *
 * `import "@ui5/webcomponents/dist/CardHeader.js";` (for `CardHeader`)
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Card = withWebComponent<CardPropTypes, CardDomRef>(
  'ui5-card',
  ['accessibleName', 'accessibleNameRef'],
  [],
  ['header'],
  [],
  () => import('@ui5/webcomponents/dist/Card.js')
);

Card.displayName = 'Card';

export { Card };
export type { CardDomRef, CardPropTypes };
