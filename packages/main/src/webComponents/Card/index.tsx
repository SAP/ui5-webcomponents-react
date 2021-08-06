import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/Card';

export interface CardPropTypes extends CommonProps {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the header of the component.
   *
   * **Note:** Use `CardHeader` for the intended design.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  header?: ReactNode | ReactNode[];
}

/**
 * The `Card` is a component that represents information in the form of a tile with separate header and content areas.
 * The content area of a `Card` can be arbitrary HTML content. The header can be used through slot `header`.
 * For which there is a `CardHeader` component to achieve the card look and fill.
 *
 * Note: We recommend the usage of `CardHeader` for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Card" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Card = withWebComponent<CardPropTypes>('ui5-card', [], [], ['header'], []);

Card.displayName = 'Card';

Card.defaultProps = {};

export { Card };
