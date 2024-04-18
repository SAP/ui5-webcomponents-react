'use client';

import '@ui5/webcomponents/dist/BusyIndicator.js';
import type BusyIndicatorSize from '@ui5/webcomponents/dist/types/BusyIndicatorSize.js';
import type BusyIndicatorTextPlacement from '@ui5/webcomponents/dist/types/BusyIndicatorTextPlacement.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface BusyIndicatorAttributes {
  /**
   * Defines if the busy indicator is visible on the screen. By default it is not.
   * @default false
   */
  active?: boolean;

  /**
   * Defines the delay in milliseconds, after which the busy indicator will be visible on the screen.
   * @default 1000
   */
  delay?: number;

  /**
   * Defines the size of the component.
   * @default "Medium"
   */
  size?: BusyIndicatorSize | keyof typeof BusyIndicatorSize;

  /**
   * Defines text to be displayed below the component. It can be used to inform the user of the current operation.
   */
  text?: string;

  /**
   * Defines the placement of the text.
   * @default "Bottom"
   */
  textPlacement?: BusyIndicatorTextPlacement | keyof typeof BusyIndicatorTextPlacement;
}

interface BusyIndicatorDomRef extends Required<BusyIndicatorAttributes>, Ui5DomRef {}

interface BusyIndicatorPropTypes
  extends BusyIndicatorAttributes,
    Omit<CommonProps, keyof BusyIndicatorAttributes | 'children'> {
  /**
   * Determines the content over which the component will appear.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `BusyIndicator` signals that some operation is going on and that the
 * user must wait. It does not block the current UI screen so other operations could be triggered in parallel.
 * It displays 3 dots and each dot expands and shrinks at a different rate, resulting in a cascading flow of animation.
 *
 * ### Usage
 * For the `BusyIndicator` you can define the size, the text and whether it is shown or hidden.
 * In order to hide it, use the "active" property.
 *
 * In order to show busy state over an HTML element, simply nest the HTML element in a `BusyIndicator` instance.
 *
 * **Note:** Since `BusyIndicator` has `display: inline-block;` by default and no width of its own,
 * whenever you need to wrap a block-level element, you should set `display: block` to the busy indicator as well.
 *
 * #### When to use:
 *
 * - The user needs to be able to cancel the operation.
 * - Only part of the application or a particular component is affected.
 *
 * #### When not to use:
 *
 * - The operation takes less than one second.
 * - You need to block the screen and prevent the user from starting another activity.
 * - Do not show multiple busy indicators at once.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const BusyIndicator = withWebComponent<BusyIndicatorPropTypes, BusyIndicatorDomRef>(
  'ui5-busy-indicator',
  ['delay', 'size', 'text', 'textPlacement'],
  ['active'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/BusyIndicator.js')
);

BusyIndicator.displayName = 'BusyIndicator';

export { BusyIndicator };
export type { BusyIndicatorDomRef, BusyIndicatorPropTypes };
