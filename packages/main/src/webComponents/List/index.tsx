import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5List from '@ui5/webcomponents/dist/List';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

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

/**
 * <code>import { List } from '@ui5/webcomponents-react/lib/List';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/List" target="_blank">UI5 Web Components Playground</a>
 */
const List: FC<ListPropTypes> = withWebComponent<ListPropTypes>(UI5List);

List.defaultProps = {
  headerText: '',
  footerText: '',
  mode: ListMode.None,
  noDataText: '',
  separators: ListSeparators.All
};

export { List };
