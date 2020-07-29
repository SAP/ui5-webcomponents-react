import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/BusyIndicator';
import { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface BusyIndicatorPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the busy indicator is visible on the screen. By default it is not.
   */
  active?: boolean;
  /**
   * Defines the size of the <code>ui5-busyindicator</code>. <br><br> <b>Note:</b> Available options are "Small", "Medium", and "Large".
   */
  size?: BusyIndicatorSize;
  /**
   * Defines text to be displayed below the busy indicator. It can be used to inform the user of the current operation.
   */
  text?: string;
  /**
   * Determines the content over which the <code>ui5-busyindicator</code> will appear.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';</code>
 * <br />
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
