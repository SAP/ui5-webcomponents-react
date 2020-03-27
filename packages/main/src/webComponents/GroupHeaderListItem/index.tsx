import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5GroupHeaderListItem from '@ui5/webcomponents/dist/GroupHeaderListItem';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface GroupHeaderListItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text of the <code>ui5-li-groupheader</code>. <br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { GroupHeaderListItem } from '@ui5/webcomponents-react/lib/GroupHeaderListItem';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/GroupHeaderListItem" target="_blank">UI5 Web Components Playground</a>
 */
const GroupHeaderListItem: FC<GroupHeaderListItemPropTypes> = withWebComponent<GroupHeaderListItemPropTypes>(
  UI5GroupHeaderListItem
);

GroupHeaderListItem.displayName = 'GroupHeaderListItem';

GroupHeaderListItem.defaultProps = {};

export { GroupHeaderListItem };
