'use client';

import '@ui5/webcomponents-fiori/dist/Page.js';
import type PageBackgroundDesign from '@ui5/webcomponents-fiori/dist/types/PageBackgroundDesign.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface PageAttributes {
  /**
   * Defines the background color of the `Page`.
   *
   * **Note:** When a ui5-list is placed inside the page, we recommend using “List” to ensure better color contrast.
   * @default "Solid"
   */
  backgroundDesign?: PageBackgroundDesign | keyof typeof PageBackgroundDesign;

  /**
   * Defines if the footer is fixed at the very bottom of the page.
   *
   * **Note:** When set to true the footer is fixed at the very bottom of the page, otherwise it floats over the content with a slight offset from the bottom.
   * @default false
   */
  fixedFooter?: boolean;

  /**
   * Defines the footer visibility.
   * @default false
   */
  hideFooter?: boolean;

  /**
   * Disables vertical scrolling of page content.
   * If set to true, there will be no vertical scrolling at all.
   * @default false
   */
  noScrolling?: boolean;
}

interface PageDomRef extends Required<PageAttributes>, Ui5DomRef {}

interface PagePropTypes
  extends PageAttributes,
    Omit<CommonProps, keyof PageAttributes | 'children' | 'footer' | 'header'> {
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
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  footer?: UI5WCSlotsNode;

  /**
   * Defines the header HTML Element.
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
 * The `Page` is a container component that holds one whole screen of an application.
 * The page has three distinct areas that can hold content - a header, content area and a footer.
 * ### Structure
 * #### Header
 * The top most area of the page is occupied by the header. The standard header includes a navigation button and a title.
 * #### Content
 * The content occupies the main part of the page. Only the content area is scrollable by default.
 * This can be prevented by setting  `enableScrolling` to `false`.
 * #### Footer
 * The footer is optional and occupies the part above the bottom part of the content. Alternatively, the footer can be fixed at the bottom of the page by enabling the `fixedFooter` property.
 *
 * **Note:** `Page` occipues the whole available space of its parent. In order to achieve the intended design you have to make sure
 * that there is enough space for the `Page` to be rendered.
 * **Note:** In order for the `Page` to be displayed, the parent element should have fixed height.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Page = withWebComponent<PagePropTypes, PageDomRef>(
  'ui5-page',
  ['backgroundDesign'],
  ['fixedFooter', 'hideFooter', 'noScrolling'],
  ['footer', 'header'],
  []
);

Page.displayName = 'Page';

export { Page };
export type { PageDomRef, PagePropTypes };
