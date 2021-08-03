import { BarDesign } from '@ui5/webcomponents-react/dist/BarDesign';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ReactNode } from 'react';

import '@ui5/webcomponents-fiori/dist/Bar';

export interface BarPropTypes extends CommonProps {
  /**
   * Defines the `Bar` design.
   *
   * **Note:** Available options are:
   *
   * *   `Header`
   * *   `Subheader`
   * *   `Footer`
   * *   `FloatingFooter`
   */
  design?: BarDesign;
  /**
   * Defines the content in the middle of the bar
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the content at the end of the bar
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  endContent?: ReactNode | ReactNode[];
  /**
   * Defines the content at the start of the bar
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  startContent?: ReactNode | ReactNode[];
}

/**
 * The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and functionality is the basis for page headers and footers. The component consists of three areas to hold its content - startContent slot, default slot and endContent slot. It has the capability to center content, such as a title, while having other components on the left and right side.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Bar" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Bar = withWebComponent<BarPropTypes>('ui5-bar', ['design'], [], ['endContent', 'startContent'], []);

Bar.displayName = 'Bar';

Bar.defaultProps = {
  design: BarDesign.Header
};

export { Bar };
