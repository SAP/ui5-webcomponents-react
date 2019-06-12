import { ListItemTypes } from '../../lib/ListItemTypes';
import UI5StandardListItem from '@ui5/webcomponents/dist/StandardListItem';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface StandardListItemPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  type?: ListItemTypes; // @generated
  description?: string; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  image?: string; // @generated
  children?: any[]; // @generated
}

const StandardListItem: FC<StandardListItemPropTypes> = withWebComponent<StandardListItemPropTypes>(
  UI5StandardListItem
);

StandardListItem.displayName = 'StandardListItem';

StandardListItem.defaultProps = {
  type: ListItemTypes.Active // @generated
};

export { StandardListItem };
