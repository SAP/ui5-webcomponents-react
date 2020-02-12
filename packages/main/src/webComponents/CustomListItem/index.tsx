import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5CustomListItem from '@ui5/webcomponents/dist/CustomListItem';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CustomListItemPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  type?: ListItemTypes; // @generated
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';</code>
 */
const CustomListItem: FC<CustomListItemPropTypes> = withWebComponent<CustomListItemPropTypes>(UI5CustomListItem);

CustomListItem.displayName = 'CustomListItem';

CustomListItem.defaultProps = {
  type: ListItemTypes.Active // @generated
};

export { CustomListItem };
