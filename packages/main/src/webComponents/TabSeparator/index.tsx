import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
import { FC } from 'react';

import '@ui5/webcomponents/dist/TabSeparator';

export type TabSeparatorPropTypes = WithWebComponentPropTypes;

/**
 * The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabSeparator" target="_blank">UI5 Web Components Playground</ui5-link>
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
