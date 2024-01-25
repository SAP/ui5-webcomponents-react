'use client';

import '@ui5/webcomponents-fiori/dist/Page.js';
import type { ReactNode } from 'react';
import { PageBackgroundDesign } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface PageAttributes {
  /**
   * Defines the background color of the `Page`.
   *
   * **Note:** When a List is placed inside the page, we recommend using “List” to ensure better color contrast.
   */
  backgroundDesign?: PageBackgroundDesign | keyof typeof PageBackgroundDesign;
  /**
   * Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all.
   */
  disableScrolling?: boolean;
  /**
   * Defines if the footer should float over the content.
   *
   * **Note:** When set to true the footer floats over the content with a slight offset from the bottom, otherwise it is fixed at the very bottom of the page.
   */
  floatingFooter?: boolean;
  /**
   * Defines the footer visibility.
   */
  hideFooter?: boolean;
}

export interface PageDomRef extends PageAttributes, Ui5DomRef {}

export interface PagePropTypes extends PageAttributes, CommonProps {
  /**
   * Defines the content HTML Element.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the footer HTML Element.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="footer"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  footer?: UI5WCSlotsNode;
  /**
   * Defines the header HTML Element.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
}

/**
 * The `Page` is a container component that holds one whole screen of an application. The page has three distinct areas that can hold content - a header, content area and a footer.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-Page)
 */
const Page = withWebComponent<PagePropTypes, PageDomRef>(
  'ui5-page',
  ['backgroundDesign'],
  ['disableScrolling', 'floatingFooter', 'hideFooter'],
  ['footer', 'header'],
  [],
  () => import('@ui5/webcomponents-fiori/dist/Page.js')
);

Page.displayName = 'Page';

Page.defaultProps = {
  backgroundDesign: PageBackgroundDesign.Solid,
  floatingFooter: true
};

export { Page };
