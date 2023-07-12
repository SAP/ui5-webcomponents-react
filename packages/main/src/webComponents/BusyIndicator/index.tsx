'use client';

import '@ui5/webcomponents/dist/BusyIndicator.js';
import type { ReactNode } from 'react';
import { BusyIndicatorSize } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface BusyIndicatorAttributes {
  /**
   * Defines if the busy indicator is visible on the screen. By default it is not.
   */
  active?: boolean;
  /**
   * Defines the delay in milliseconds, after which the busy indicator will be visible on the screen.
   */
  delay?: number;
  /**
   * Defines the size of the component.
   *
   * **Note:**
   *
   * *   `Small`
   * *   `Medium`
   * *   `Large`
   */
  size?: BusyIndicatorSize | keyof typeof BusyIndicatorSize;
  /**
   * Defines text to be displayed below the component. It can be used to inform the user of the current operation.
   */
  text?: string;
}

export interface BusyIndicatorDomRef extends BusyIndicatorAttributes, Ui5DomRef {}

export interface BusyIndicatorPropTypes extends BusyIndicatorAttributes, CommonProps {
  /**
   * Determines the content over which the component will appear.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `BusyIndicator` signals that some operation is going on and that the user must wait. It does not block the current UI screen so other operations could be triggered in parallel. It displays 3 dots and each dot expands and shrinks at a different rate, resulting in a cascading flow of animation.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-BusyIndicator" target="_blank">UI5 Web Components Storybook</ui5-link>
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

BusyIndicator.defaultProps = {
  delay: 1000,
  size: BusyIndicatorSize.Medium
};

export { BusyIndicator };
