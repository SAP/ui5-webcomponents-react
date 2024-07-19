'use client';

import '@ui5/webcomponents/dist/MessageStrip.js';
import type MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface MessageStripAttributes {
  /**
   * Defines the color scheme of the component.
   * There are 10 predefined schemes.
   * To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default "1"
   */
  colorScheme?: string;

  /**
   * Defines the component type.
   * @default "Information"
   */
  design?: MessageStripDesign | keyof typeof MessageStripDesign;

  /**
   * Defines whether the MessageStrip renders close button.
   * @default false
   */
  hideCloseButton?: boolean;

  /**
   * Defines whether the MessageStrip will show an icon in the beginning.
   * You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.
   *
   *  * **Note:** If <code>MessageStripDesign.ColorSet1</code> or <code>MessageStripDesign.ColorSet2</code> value is set to the <code>design</code> property, default icon will not be presented.
   * @default false
   */
  hideIcon?: boolean;
}

interface MessageStripDomRef extends Required<MessageStripAttributes>, Ui5DomRef {}

interface MessageStripPropTypes
  extends MessageStripAttributes,
    Omit<CommonProps, keyof MessageStripAttributes | 'children' | 'icon' | 'onClose'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the content to be displayed as graphical element within the component.
   *
   * **Note:** If no icon is given, the default icon for the component type will be used.
   * The SAP-icons font provides numerous options.
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="icon"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  icon?: UI5WCSlotsNode;
  /**
   * Fired when the close button is pressed either with a
   * click/tap or by using the Enter or Space key.
   */
  onClose?: (event: Ui5CustomEvent<MessageStripDomRef>) => void;
}

/**
 * The ui5-message-strip component allows for the embedding of application-related messages.
 * It supports four semantic designs, each with its own color and icon: "Information", "Positive", "Critical", and "Negative".
 * Additionally, users can choose from two color sets ("ColorSet1" and "ColorSet2"), each containing 10 predefined color schemes.
 * Each message shows a "Close" button, so that it can be removed from the UI, if needed.
 *
 * ### Usage
 *
 * For the `MessageStrip` component, you can define whether it displays
 * an icon in the beginning and a close button. Moreover, its size and background
 * can be controlled with CSS.
 *
 * ### Keyboard Handling
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const MessageStrip = withWebComponent<MessageStripPropTypes, MessageStripDomRef>(
  'ui5-message-strip',
  ['colorScheme', 'design'],
  ['hideCloseButton', 'hideIcon'],
  ['icon'],
  ['close'],
  () => import('@ui5/webcomponents/dist/MessageStrip.js')
);

MessageStrip.displayName = 'MessageStrip';

export { MessageStrip };
export type { MessageStripDomRef, MessageStripPropTypes };
