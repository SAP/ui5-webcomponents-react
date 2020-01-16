import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5TabContainer from '@ui5/webcomponents/dist/TabContainer';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TabContainerPropTypes extends WithWebComponentPropTypes {
  fixed?: boolean;
  collapsed?: boolean;
  showOverflow?: boolean;
  onItemSelect?: (event: Event) => any;
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TabContainer" target="_blank">UI5 Web Components Playground</a>
 */
const TabContainer: FC<TabContainerPropTypes> = withWebComponent<TabContainerPropTypes>(UI5TabContainer);

TabContainer.displayName = 'TabContainer';

export { TabContainer };
