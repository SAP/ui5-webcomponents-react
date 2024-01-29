'use client';

import '@ui5/webcomponents/dist/BusyIndicator.js';
import type BusyIndicatorSize from '@ui5/webcomponents/dist/types/BusyIndicatorSize.js';
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
}

interface BusyIndicatorDomRef extends BusyIndicatorAttributes, Ui5DomRef {}

interface BusyIndicatorPropTypes extends BusyIndicatorAttributes, Omit<CommonProps, keyof BusyIndicatorAttributes> {
  /**
   * Determines the content over which the component will appear.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `BusyIndicator` signals that some operation is going on and that the user must wait. It does not block the current UI screen so other operations could be triggered in parallel. It displays 3 dots and each dot expands and shrinks at a different rate, resulting in a cascading flow of animation.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const BusyIndicator = withWebComponent<BusyIndicatorPropTypes, BusyIndicatorDomRef>(
  'ui5-busy-indicator',
  ['delay', 'size', 'text'],
  ['active'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/BusyIndicator.js')
);

BusyIndicator.displayName = 'BusyIndicator';

export { BusyIndicator };
export type { BusyIndicatorDomRef, BusyIndicatorPropTypes };
