import '@ui5/webcomponents/dist/Toast.js';
import { ReactNode } from 'react';
import { ToastPlacement } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface ToastAttributes {
  /**
   * Defines the duration in milliseconds for which component remains on the screen before it's automatically closed.
   *
   * **Note:** The minimum supported value is `500` ms and even if a lower value is set, the duration would remain `500` ms.
   */
  duration?: number;
  /**
   * Defines the placement of the component.
   *
   * Available options are:
   *
   * *   `TopStart`
   * *   `TopCenter`
   * *   `TopEnd`
   * *   `MiddleStart`
   * *   `MiddleCenter`
   * *   `MiddleEnd`
   * *   `BottomStart`
   * *   `BottomCenter`
   * *   `BottomEnd`
   */
  placement?: ToastPlacement | keyof typeof ToastPlacement;
}

export interface ToastDomRef extends ToastAttributes, Ui5DomRef {
  /**
   * Shows the component.
   *
   */
  show: () => void;
}

export interface ToastPropTypes extends ToastAttributes, CommonProps {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.
   *
   * __Note:__ This adds a rendering cycle to your component.
   */
  waitForDefine?: boolean;
}

/**
 * The `Toast` is a small, non-disruptive popup for success or information messages that disappears automatically after a few seconds.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Toast" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Toast = withWebComponent<ToastPropTypes, ToastDomRef>(
  'ui5-toast',
  ['duration', 'placement', 'waitForDefine'],
  [],
  [],
  []
);

Toast.displayName = 'Toast';

Toast.defaultProps = {
  duration: 3000,
  placement: ToastPlacement.BottomCenter
};

export { Toast };
