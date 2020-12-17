import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/BusyIndicator';
import { FC, ReactNode } from 'react';

export interface BusyIndicatorPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the busy indicator is visible on the screen. By default it is not.
   */
  active?: boolean;
  /**
   * Defines the size of the `BusyIndicator`.
   *
   * **Note:** Available options are "Small", "Medium", and "Large".
   */
  size?: BusyIndicatorSize;
  /**
   * Defines text to be displayed below the busy indicator. It can be used to inform the user of the current operation.
   */
  text?: string;
  /**
   * Determines the content over which the `BusyIndicator` will appear.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `BusyIndicator` signals that some operation is going on and that the user must wait. It does not block the current UI screen so other operations could be triggered in parallel.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/BusyIndicator" target="_blank">UI5 Web Components Playground</a>
 */
const BusyIndicator: FC<BusyIndicatorPropTypes> = withWebComponent<BusyIndicatorPropTypes>(
  'ui5-busyindicator',
  ['size', 'text'],
  ['active'],
  [],
  []
);

BusyIndicator.displayName = 'BusyIndicator';

BusyIndicator.defaultProps = {
  active: false,
  size: BusyIndicatorSize.Medium
};

export { BusyIndicator };
