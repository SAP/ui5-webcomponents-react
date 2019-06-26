import UI5TabSeparator from '@ui5/webcomponents/dist/TabSeparator';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TabSeparatorPropTypes extends WithWebComponentPropTypes {}

const TabSeparator: FC<TabSeparatorPropTypes> = withWebComponent<TabSeparatorPropTypes>(UI5TabSeparator);

TabSeparator.displayName = 'TabSeparator';

export { TabSeparator };
