import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5GroupHeaderListItem from '@ui5/webcomponents/dist/GroupHeaderListItem';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface GroupHeaderListItemPropTypes extends WithWebComponentPropTypes {
  children?: string; // @generated
}

/**
 * <code>import { GroupHeaderListItem } from '@ui5/webcomponents-react/lib/GroupHeaderListItem';</code>
 */
const GroupHeaderListItem: FC<GroupHeaderListItemPropTypes> = withWebComponent<GroupHeaderListItemPropTypes>(
  UI5GroupHeaderListItem
);

GroupHeaderListItem.displayName = 'GroupHeaderListItem';

export { GroupHeaderListItem };
