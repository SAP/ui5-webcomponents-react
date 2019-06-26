import React, { FC } from 'react';
import { ListItemTypes } from '../../lib/ListItemTypes';
import { ValueState } from '../../lib/ValueState';
import UI5StandardListItem from '@ui5/webcomponents/dist/StandardListItem';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface StandardListItemPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  type?: ListItemTypes; // @generated
  description?: string; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  image?: string; // @generated
  info?: string; // @generated
  infoState?: ValueState; // @generated
  children?: string; // @generated
}

const StandardListItem: FC<StandardListItemPropTypes> = withWebComponent<StandardListItemPropTypes>(
  UI5StandardListItem
);

StandardListItem.displayName = 'StandardListItem';

StandardListItem.defaultProps = {
  type: ListItemTypes.Active, // @generated
  infoState: ValueState.None // @generated
};

export { StandardListItem };
