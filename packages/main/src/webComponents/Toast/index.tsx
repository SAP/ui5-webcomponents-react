import { ToastPlacement } from '@ui5/webcomponents-react/lib/ToastPlacement';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Toast.js';
import { FC, ReactNode } from 'react';

export interface ToastPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the duration in milliseconds for which `Toast` remains on the screen before it's automatically closed.
   *
   * **Note:** The minimum supported value is `500` ms and even if a lower value is set, the duration would remain `500` ms.
   */
  duration?: number;
  /**
   * Defines the placement of the `Toast` web component.
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
  placement?: ToastPlacement;
  /**
   * Defines the text of the `Toast` web component.
   *
   * **Note:** Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Toast` is a small, non-disruptive popup for success or information messages that disappears automatically after a few seconds.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Toast" target="_blank">UI5 Web Components Playground</a>
 */
const Toast: FC<ToastPropTypes> = withWebComponent<ToastPropTypes>('ui5-toast', ['duration', 'placement'], [], [], []);

Toast.displayName = 'Toast';

Toast.defaultProps = {
  duration: 3000,
  placement: ToastPlacement.BottomCenter
};

export { Toast };
