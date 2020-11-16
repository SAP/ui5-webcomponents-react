import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TabSeparator';
import { FC } from 'react';

export interface TabSeparatorPropTypes extends WithWebComponentPropTypes {}

/**
 * The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`
 *
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
