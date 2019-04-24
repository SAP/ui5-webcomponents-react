import React, { FC } from 'react';
import UI5GroupHeaderListItem from '@ui5/webcomponents/dist/GroupHeaderListItem';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface GroupHeaderListItemPropTypes extends WithWebComponentPropTypes {
  children?: string; // @generated
}

const GroupHeaderListItem: FC<GroupHeaderListItemPropTypes> = withWebComponent<GroupHeaderListItemPropTypes>(
  UI5GroupHeaderListItem
);

GroupHeaderListItem.displayName = 'GroupHeaderListItem';

export { GroupHeaderListItem };
