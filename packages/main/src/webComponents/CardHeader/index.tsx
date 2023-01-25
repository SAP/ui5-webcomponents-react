import '@ui5/webcomponents/dist/CardHeader.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

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
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="action"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  action?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines an avatar image, displayed in the left most part of the header.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="avatar"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  avatar?: UI5WCSlotsNode | UI5WCSlotsNode[];
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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
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
