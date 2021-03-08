import { BarDesign } from '@ui5/webcomponents-react/dist/BarDesign';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
import '@ui5/webcomponents-fiori/dist/Bar';
import { FC, ReactNode } from 'react';

export interface BarPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the `Bar` design.
   *
   * **Note:** Available options are "Header", "Subheader", "Footer", "FloatingFooter".
   */
  design?: BarDesign;
  /**
   *
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  endContent?: ReactNode | ReactNode[];
  /**
   *
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  middleContent?: ReactNode | ReactNode[];
  /**
   *
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  startContent?: ReactNode | ReactNode[];
}

/**
 * The Bar component consists of three areas to hold its content. It has the capability to center content, such as a title, while having other components on the left and right side.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Bar" target="_blank">UI5 Web Components Playground</a>
 */
const Bar: FC<BarPropTypes> = withWebComponent<BarPropTypes>(
  'ui5-bar',
  ['design'],
  [],
  ['endContent', 'middleContent', 'startContent'],
  []
);

Bar.displayName = 'Bar';

Bar.defaultProps = {
  design: BarDesign.Header
};

export { Bar };
