'use client';

import '@ui5/webcomponents/dist/Toast.js';
import type ToastPlacement from '@ui5/webcomponents/dist/types/ToastPlacement.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface ToastAttributes {
  /**
   * Defines the duration in milliseconds for which component
   * remains on the screen before it's automatically closed.
   *
   * **Note:** The minimum supported value is `500` ms
   * and even if a lower value is set, the duration would remain `500` ms.
   * @default 3000
   */
  duration?: number;

  /**
   * Indicates whether the component is open (visible).
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default false
   */
  open?: boolean;

  /**
   * Defines the placement of the component.
   * @default "BottomCenter"
   */
  placement?: ToastPlacement | keyof typeof ToastPlacement;
}

interface ToastDomRef extends Required<ToastAttributes>, Ui5DomRef {}

interface ToastPropTypes extends ToastAttributes, Omit<CommonProps, keyof ToastAttributes | 'children' | 'onClose'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired after the component is auto closed.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   */
  onClose?: (event: Ui5CustomEvent<ToastDomRef>) => void;
}

/**
 * The `Toast` is a small, non-disruptive popup for success or information messages that
 * disappears automatically after a few seconds.
 *
 * ### Usage
 *
 * #### When to use:
 *
 * - You want to display a short success or information message.
 * - You do not want to interrupt users while they are performing an action.
 * - You want to confirm a successful action.
 *
 * #### When not to use:
 *
 * - You want to display error or warning message.
 * - You want to interrupt users while they are performing an action.
 * - You want to make sure that users read the message before they leave the page.
 * - You want users to be able to copy some part of the message text.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Toast = withWebComponent<ToastPropTypes, ToastDomRef>(
  'ui5-toast',
  ['duration', 'placement'],
  ['open'],
  [],
  ['close']
);

Toast.displayName = 'Toast';

export { Toast };
export type { ToastDomRef, ToastPropTypes };
