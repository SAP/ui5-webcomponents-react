import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5CustomListItem from '@ui5/webcomponents/dist/CustomListItem';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CustomListItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the content of the <code>ui5-li-custom</code>.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/CustomListItem" target="_blank">UI5 Web Components Playground</a>
 */
const CustomListItem: FC<CustomListItemPropTypes> = withWebComponent<CustomListItemPropTypes>(UI5CustomListItem);

CustomListItem.displayName = 'CustomListItem';

CustomListItem.defaultProps = {};

export { CustomListItem };
