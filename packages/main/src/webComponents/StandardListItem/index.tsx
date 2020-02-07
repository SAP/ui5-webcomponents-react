import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5StandardListItem from '@ui5/webcomponents/dist/StandardListItem';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface StandardListItemPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  type?: ListItemTypes; // @generated
  description?: string; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  image?: string; // @generated
  info?: string; // @generated
  infoState?: ValueState; // @generated
  children?: ReactNode | ReactNode[] | string;
}

/**
 * <code>import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';</code>
 */
const StandardListItem: FC<StandardListItemPropTypes> = withWebComponent<StandardListItemPropTypes>(
  UI5StandardListItem
);

StandardListItem.displayName = 'StandardListItem';

StandardListItem.defaultProps = {
  type: ListItemTypes.Active, // @generated
  infoState: ValueState.None // @generated
};

export { StandardListItem };
