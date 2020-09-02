import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC } from 'react';
import { ReactNode } from 'react';

export interface GroupHeaderListItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the selected state of the <code>ListItem</code>.
   */
  selected?: boolean;
  /**
   * Defines the text of the <code>ui5-li-groupheader</code>. <br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/GroupHeaderListItem" target="_blank">UI5 Web Components Playground</a>
 */
const GroupHeaderListItem: FC<GroupHeaderListItemPropTypes> = withWebComponent<GroupHeaderListItemPropTypes>(
  'ui5-li-groupheader',
  () => import('@ui5/webcomponents/dist/GroupHeaderListItem'),
  [],
  ['selected'],
  [],
  []
);

GroupHeaderListItem.displayName = 'GroupHeaderListItem';

GroupHeaderListItem.defaultProps = {
  selected: false
};

export { GroupHeaderListItem };
