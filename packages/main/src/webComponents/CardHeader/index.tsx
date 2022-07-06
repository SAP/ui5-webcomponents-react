import '@ui5/webcomponents/dist/CardHeader.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface CardHeaderAttributes {
  /**
   * Defines if the component would be interactive, e.g gets hover effect, gets focus outline and `onClick` event is fired, when pressed.
   */
  interactive?: boolean;
  /**
   * Defines the status text.
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
}

export interface CardHeaderDomRef extends CardHeaderAttributes, Ui5DomRef {}

export interface CardHeaderPropTypes extends CardHeaderAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Defines an action, displayed in the right most part of the header.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  action?: ReactNode | ReactNode[];
  /**
   * Defines an avatar image, displayed in the left most part of the header.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  avatar?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated by mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event would be fired only if the `interactive` property is set to true.
   */
  onClick?: (event: Ui5CustomEvent<CardHeaderDomRef>) => void;
}

/**
 * The `CardHeader` is a component, meant to be used as a header of the `Card` component. It displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `status` and two slots: `avatar` and `action`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Card" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const CardHeader = withWebComponent<CardHeaderPropTypes, CardHeaderDomRef>(
  'ui5-card-header',
  ['status', 'subtitleText', 'titleText'],
  ['interactive'],
  ['action', 'avatar'],
  ['click']
);

CardHeader.displayName = 'CardHeader';

export { CardHeader };
