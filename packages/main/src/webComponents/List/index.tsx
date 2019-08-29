import { Event } from '@ui5/webcomponents-react-base';
import UI5List from '@ui5/webcomponents/dist/List';
import React, { FC, ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';

export interface ListPropTypes extends WithWebComponentPropTypes {
  headerText?: string;
  footerText?: string;
  inset?: boolean;
  mode?: ListMode;
  noDataText?: string;
  separators?: ListSeparators;
  onItemClick?: (event: Event) => void;
  onItemDelete?: (event: Event) => void;
  onSelectionChange?: (event: Event) => void;
  header?: ReactNode;
  children?: ReactNode | ReactNode[];
}

const List: FC<ListPropTypes> = withWebComponent<ListPropTypes>(UI5List);

List.defaultProps = {
  headerText: '',
  footerText: '',
  mode: ListMode.None,
  noDataText: '',
  separators: ListSeparators.All
};

export { List };
