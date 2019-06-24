import UI5CustomListItem from '@ui5/webcomponents/dist/CustomListItem';
import React, { FC, ReactNode } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { ListItemTypes } from '../../lib/ListItemTypes';

export interface CustomListItemPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  type?: ListItemTypes; // @generated
  children?: ReactNode | ReactNode[];
}

const CustomListItem: FC<CustomListItemPropTypes> = withWebComponent<CustomListItemPropTypes>(UI5CustomListItem);

CustomListItem.displayName = 'CustomListItem';

CustomListItem.defaultProps = {
  type: ListItemTypes.Active // @generated
};

export { CustomListItem };
