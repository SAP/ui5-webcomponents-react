import { ListItemTypes } from '@lib/ListItemTypes';
import React, { FC } from 'react';
import UI5ListItem from '@ui5/webcomponents/dist/ListItem';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ListItemPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  type?: ListItemTypes; // @generated
}

const ListItem: FC<ListItemPropTypes> = withWebComponent<ListItemPropTypes>(UI5ListItem);

ListItem.displayName = 'ListItem';

ListItem.defaultProps = {
  type: ListItemTypes.Inactive // @generated
};

export { ListItem };
