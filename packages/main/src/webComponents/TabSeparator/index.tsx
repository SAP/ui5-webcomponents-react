import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5TabSeparator from '@ui5/webcomponents/dist/TabSeparator';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TabSeparatorPropTypes extends WithWebComponentPropTypes {}

/**
 * <code>import { TabSeparator } from '@ui5/webcomponents-react/lib/TabSeparator';</code>
 */
const TabSeparator: FC<TabSeparatorPropTypes> = withWebComponent<TabSeparatorPropTypes>(UI5TabSeparator);

TabSeparator.displayName = 'TabSeparator';

export { TabSeparator };
