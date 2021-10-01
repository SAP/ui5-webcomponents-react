import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/CardHeader.js';

export interface CardHeaderPropTypes extends Omit<CommonProps, 'onClick'> {
  /**
   * Defines if the component would be interactive, e.g gets hover effect, gets focus outline and `click` event is fired, when pressed.
   */
  interactive?: boolean;
  /**
   * Defines the status text.
   *
   * **Note:** If the `action` slot is set, the `status` will not be displayed, you can either have `action`, or `status`.
   */
  status?: string;
  /**
   * Defines the subtitle text.
   */
  subtitleText?: string;
  /**
   * Defines the title text.
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
  /**
   * Fired when the component is activated by mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event would be fired only if the `interactive` property is set to true.
   */
  onClick?: (event: Ui5CustomEvent<HTMLElement>) => void;
}

/**
 * The `CardHeader` is a component, meant to be used as a header of the `Card` component. It displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `status` and two slots: `avatar` and `action`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/CardHeader" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const CardHeader = withWebComponent<CardHeaderPropTypes>(
  'ui5-card-header',
  ['status', 'subtitleText', 'titleText'],
  ['interactive'],
  ['action', 'avatar'],
  ['click']
);

CardHeader.displayName = 'CardHeader';

CardHeader.defaultProps = {
  interactive: false
};

export { CardHeader };
