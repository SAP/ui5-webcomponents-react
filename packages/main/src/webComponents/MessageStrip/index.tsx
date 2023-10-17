'use client';

import '@ui5/webcomponents/dist/MessageStrip.js';
import type { ReactNode } from 'react';
import { MessageStripDesign } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface MessageStripAttributes {
  /**
   * Defines the component type.
   */
  design?: MessageStripDesign | keyof typeof MessageStripDesign;
  /**
   * Defines whether the MessageStrip renders close button.
   */
  hideCloseButton?: boolean;
  /**
   * Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.
   */
  hideIcon?: boolean;
}

export interface MessageStripDomRef extends MessageStripAttributes, Ui5DomRef {}

export interface MessageStripPropTypes extends MessageStripAttributes, CommonProps {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the content to be displayed as graphical element within the component.
   *
   * **Note:** If no icon is given, the default icon for the component type will be used. The SAP-icons font provides numerous options.
   *
   * See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective global [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="icon"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  icon?: UI5WCSlotsNode;
  /**
   * Fired when the close button is pressed either with a click/tap or by using the Enter or Space key.
   */
  onClose?: (event: Ui5CustomEvent<MessageStripDomRef>) => void;
}

/**
 * The `MessageStrip` component enables the embedding of app-related messages. It displays 4 designs of messages, each with corresponding semantic color and icon: Information, Positive, Warning and Negative. Each message can have a Close button, so that it can be removed from the UI, if needed.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-MessageStrip)
 */
const MessageStrip = withWebComponent<MessageStripPropTypes, MessageStripDomRef>(
  'ui5-message-strip',
  ['design'],
  ['hideCloseButton', 'hideIcon'],
  ['icon'],
  ['close'],
  () => import('@ui5/webcomponents/dist/MessageStrip.js')
);

MessageStrip.displayName = 'MessageStrip';

MessageStrip.defaultProps = {
  design: MessageStripDesign.Information
};

export { MessageStrip };
