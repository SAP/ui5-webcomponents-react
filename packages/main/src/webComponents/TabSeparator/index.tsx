import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TabSeparator';
import { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TabSeparatorPropTypes extends WithWebComponentPropTypes {}

/**
 * <code>import { TabSeparator } from '@ui5/webcomponents-react/lib/TabSeparator';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TabSeparator" target="_blank">UI5 Web Components Playground</a>
 */
const TabSeparator: FC<TabSeparatorPropTypes> = withWebComponent<TabSeparatorPropTypes>(
  'ui5-tab-separator',
  [],
  [],
  [],
  []
);

TabSeparator.displayName = 'TabSeparator';

TabSeparator.defaultProps = {};

export { TabSeparator };
