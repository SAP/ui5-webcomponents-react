import { PageBackgroundDesign } from '@ui5/webcomponents-react/lib/PageBackgroundDesign';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/Page.js';
import { FC, ReactNode } from 'react';

export interface PagePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the background color of the `Page`.
   *
   * **Note:** When a List is placed inside the page, we recommend using “List” to ensure better color contrast.
   *
   * Available options are:
   *
   * *   `List`
   * *   `Solid`
   * *   `Standard`
   * (default)*   `Transparent`
   */
  backgroundDesign?: PageBackgroundDesign;
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
  /**
   * Defines the content HTML Element.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the footer HTML Element.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  footer?: ReactNode | ReactNode[];
  /**
   * Defines the header HTML Element.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  header?: ReactNode | ReactNode[];
}

/**
 * The `Page` is a container control that holds one whole screen of an application. The page has three distinct areas that can hold content - a header, content area and a footer.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Page" target="_blank">UI5 Web Components Playground</a>
 */
const Page: FC<PagePropTypes> = withWebComponent<PagePropTypes>(
  'ui5-page',
  ['backgroundDesign'],
  ['disableScrolling', 'floatingFooter', 'hideFooter'],
  ['footer', 'header'],
  []
);

Page.displayName = 'Page';

Page.defaultProps = {
  backgroundDesign: PageBackgroundDesign.Standard,
  disableScrolling: false,
  floatingFooter: true,
  hideFooter: false
};

export { Page };
