'use client';

import '@ui5/webcomponents/dist/GroupHeaderListItem.js';
import type { ReactNode } from 'react';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface GroupHeaderListItemAttributes {
  /**
   * Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;
  /**
   * Defines the selected state of the `ListItem`.
   */
  selected?: boolean;
}

export interface GroupHeaderListItemDomRef extends GroupHeaderListItemAttributes, Ui5DomRef {}

export interface GroupHeaderListItemPropTypes extends GroupHeaderListItemAttributes, CommonProps {
  /**
   * Defines the text of the component.
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `GroupHeaderListItem` is a special list item, used only to separate other list items into logical groups
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-List" target="_blank">UI5 Web Components Storybook</ui5-link>
 */
const GroupHeaderListItem = withWebComponent<GroupHeaderListItemPropTypes, GroupHeaderListItemDomRef>(
  'ui5-li-groupheader',
  ['accessibleName'],
  ['selected'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/GroupHeaderListItem.js')
);

GroupHeaderListItem.displayName = 'GroupHeaderListItem';

export { GroupHeaderListItem };
