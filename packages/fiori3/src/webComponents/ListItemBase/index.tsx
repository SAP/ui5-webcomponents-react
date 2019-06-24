import UI5ListItemBase from '@ui5/webcomponents/dist/ListItemBase';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ListItemBasePropTypes extends WithWebComponentPropTypes {}

const ListItemBase: FC<ListItemBasePropTypes> = withWebComponent<ListItemBasePropTypes>(UI5ListItemBase);

ListItemBase.displayName = 'ListItemBase';

export { ListItemBase };
