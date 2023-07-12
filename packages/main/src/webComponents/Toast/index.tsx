'use client';

import '@ui5/webcomponents/dist/Toast.js';
import type { ReactNode } from 'react';
import { ToastPlacement } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

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
}

/**
 * The `Toast` is a small, non-disruptive popup for success or information messages that disappears automatically after a few seconds.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Toast" target="_blank">UI5 Web Components Storybook</ui5-link>
 */
const Toast = withWebComponent<ToastPropTypes, ToastDomRef>(
  'ui5-toast',
  ['duration', 'placement'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/Toast.js')
);

Toast.displayName = 'Toast';

Toast.defaultProps = {
  duration: 3000,
  placement: ToastPlacement.BottomCenter
};

export { Toast };
