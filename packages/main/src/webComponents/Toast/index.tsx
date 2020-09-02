import { ToastPlacement } from '@ui5/webcomponents-react/lib/ToastPlacement';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC, ReactNode } from 'react';

export interface ToastPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the duration in milliseconds for which <code>ui5-toast</code> remains on the screen before it's automatically closed. <br><br> <b>Note:</b> The minimum supported value is <code>500</code> ms and even if a lower value is set, the duration would remain <code>500</code> ms.
   */
  duration?: number;
  /**
   * Defines the placement of the <code>ui5-toast</code> web component. <br><br> Available options are: <ul> <li><code>TopStart</code></li> <li><code>TopCenter</code></li> <li><code>TopEnd</code></li> <li><code>MiddleStart</code></li> <li><code>MiddleCenter</code></li> <li><code>MiddleEnd</code></li> <li><code>BottomStart</code></li> <li><code>BottomCenter</code></li> <li><code>BottomEnd</code></li> </ul>
   */
  placement?: ToastPlacement;
  /**
   * Defines the text of the <code>ui5-toast</code> web component. <br><br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Toast" target="_blank">UI5 Web Components Playground</a>
 */
const Toast: FC<ToastPropTypes> = withWebComponent<ToastPropTypes>(
  'ui5-toast',
  () => import('@ui5/webcomponents/dist/Toast'),
  ['duration', 'placement'],
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
