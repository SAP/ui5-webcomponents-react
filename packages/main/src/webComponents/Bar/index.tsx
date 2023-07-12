'use client';

import '@ui5/webcomponents-fiori/dist/Bar.js';
import type { ReactNode } from 'react';
import { BarDesign } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface BarAttributes {
  /**
   * Defines the component's design.
   *
   * **Note:** Available options are:
   *
   * *   `Header`
   * *   `Subheader`
   * *   `Footer`
   * *   `FloatingFooter`
   */
  design?: BarDesign | keyof typeof BarDesign;
}

export interface BarDomRef extends BarAttributes, Ui5DomRef {}

export interface BarPropTypes extends BarAttributes, CommonProps {
  /**
   * Defines the content in the middle of the bar
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the content at the end of the bar
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="endContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  endContent?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines the content at the start of the bar
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="startContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  startContent?: UI5WCSlotsNode | UI5WCSlotsNode[];
}

/**
 * The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and functionality is the basis for page headers and footers. The component consists of three areas to hold its content - startContent slot, default slot and endContent slot. It has the capability to center content, such as a title, while having other components on the left and right side.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-Bar)
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

Bar.defaultProps = {
  design: BarDesign.Header
};

export { Bar };
