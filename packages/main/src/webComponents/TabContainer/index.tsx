import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import UI5TabContainer from '@ui5/webcomponents/dist/TabContainer';
import React, { ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TabContainerPropTypes extends WithWebComponentPropTypes {
  fixed?: boolean;
  collapsed?: boolean;
  showOverflow?: boolean;
  onItemSelect?: (event: Event) => any;
  children?: ReactNode | ReactNode[];
}

const TabContainer = withWebComponent<TabContainerPropTypes>(UI5TabContainer);

TabContainer.displayName = 'TabContainer';

export { TabContainer };
