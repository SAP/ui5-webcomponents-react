import { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/CardHeader';

export interface CardHeaderPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the component header would be interactive, e.g gets hover effect, gets focused and `headerPress` event is fired, when it is pressed.
   */
  headerInteractive?: boolean;
  /**
   * Defines the status displayed in the component header.
   *
   * **Note:** If the `action` slot is set, the `status` will not be displayed, you can either have `action`, or `status`.
   */
  status?: string;
  /**
   * Defines the subtitle displayed in the component header.
   */
  subtitleText?: string;
  /**
   * Defines the title displayed in the component header.
   */
  titleText?: string;
  /**
   * Defines an action, displayed in the right most part of the header.
   *
   * **Note:** If set, the `status` text will not be displayed, you can either have `action`, or `status`.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  action?: ReactNode | ReactNode[];
  /**
   * Defines an avatar image, displayed in the left most part of the header.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  avatar?: ReactNode | ReactNode[];
}

/**
 * The `CardHeader` is a component that represents information in the header slot of the `Card` component. The header can be used through several properties, such as: `titleText`, `subtitleText`, `status` and two slots: `avatar` and `action`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/CardHeader" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const CardHeader: FC<CardHeaderPropTypes> = withWebComponent<CardHeaderPropTypes>(
  'ui5-card-header',
  ['status', 'subtitleText', 'titleText'],
  ['headerInteractive'],
  ['action', 'avatar'],
  []
);

CardHeader.displayName = 'CardHeader';

CardHeader.defaultProps = {
  headerInteractive: false
};

export { CardHeader };
