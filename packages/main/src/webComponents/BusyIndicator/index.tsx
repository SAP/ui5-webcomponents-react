import { BusyIndicatorSize } from '@ui5/webcomponents-react/dist/BusyIndicatorSize';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/BusyIndicator.js';

export interface BusyIndicatorPropTypes extends CommonProps {
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
  /**
   * Determines the content over which the component will appear.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `BusyIndicator` signals that some operation is going on and that the user must wait. It does not block the current UI screen so other operations could be triggered in parallel. It displays 3 dots and each dot expands and shrinks at a different rate, resulting in a cascading flow of animation.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/BusyIndicator" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const BusyIndicator = withWebComponent<BusyIndicatorPropTypes>(
  'ui5-busy-indicator',
  ['delay', 'size', 'text'],
  ['active'],
  [],
  []
);

BusyIndicator.displayName = 'BusyIndicator';

BusyIndicator.defaultProps = {
  active: false,
  delay: 1000,
  size: BusyIndicatorSize.Medium
};

export { BusyIndicator };
