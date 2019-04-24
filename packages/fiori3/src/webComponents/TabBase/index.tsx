import React, { FC } from 'react';

import UI5TabBase from '@ui5/webcomponents/dist/TabBase';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TabBasePropTypes extends WithWebComponentPropTypes {}

const TabBase: FC<TabBasePropTypes> = withWebComponent<TabBasePropTypes>(UI5TabBase);

TabBase.displayName = 'TabBase';

export { TabBase };
