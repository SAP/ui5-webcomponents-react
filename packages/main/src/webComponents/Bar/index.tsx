'use client';

import '@ui5/webcomponents-fiori/dist/Bar.js';
import type BarDesign from '@ui5/webcomponents-fiori/dist/types/BarDesign.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface BarAttributes {
  /**
   * Defines the component's design.
   * @default "Header"
   */
  design?: BarDesign | keyof typeof BarDesign;
}

interface BarDomRef extends BarAttributes, Ui5DomRef {}

interface BarPropTypes extends BarAttributes, Omit<CommonProps, keyof BarAttributes> {
  /**
   * Defines the content in the middle of the bar.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the content at the end of the bar.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="endContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  endContent?: UI5WCSlotsNode;

  /**
   * Defines the content at the start of the bar.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="startContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  startContent?: UI5WCSlotsNode;
}

/**
 * The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and functionality is the basis for page headers and footers. The component consists of three areas to hold its content - startContent slot, default slot and endContent slot. It has the capability to center content, such as a title, while having other components on the left and right side.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Bar = withWebComponent<BarPropTypes, BarDomRef>(
  'ui5-bar',
  ['design'],
  [],
  ['endContent', 'startContent'],
  [],
  () => import('@ui5/webcomponents-fiori/dist/Bar.js')
);

Bar.displayName = 'Bar';

export { Bar };
export type { BarDomRef, BarPropTypes };
