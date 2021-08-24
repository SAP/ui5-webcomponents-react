import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5TreeItemDomRef } from '@ui5/webcomponents-react/interfaces/Ui5TreeItemDomRef';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/TreeItem';

export interface TreeItemPropTypes extends CommonProps {
  /**
   * Defines the `additionalText`, displayed in the end of the tree item.
   */
  additionalText?: string;
  /**
   * Defines the state of the `additionalText`.
   * Available options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Erorr"`.
   */
  additionalTextState?: ValueState | keyof typeof ValueState;
  /**
   * Defines whether the tree node is expanded or collapsed. Only has visual effect for tree nodes with children.
   */
  expanded?: boolean;
  /**
   * Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.
   * _Note:_ This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons. Set this to `true` for nodes you intend to load lazily, when the user clicks the expand button. It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.
   */
  hasChildren?: boolean;
  /**
   * If set, an icon will be displayed before the text, representing the tree item.
   */
  icon?: string;
  /**
   * Defines whether the tree node is selected by the user. Only has effect if the `Tree` is in one of the following modes: in `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd` and `MultiSelect`.
   */
  selected?: boolean;
  /**
   * Defines the text of the tree item.
   */
  text?: string;
  /**
   * Defines the items of this component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * This is the item to use inside a `Tree`. You can represent an arbitrary tree structure by recursively nesting tree items.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TreeItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TreeItem = withWebComponent<TreeItemPropTypes, Ui5TreeItemDomRef>(
  'ui5-tree-item',
  ['additionalText', 'additionalTextState', 'icon', 'text'],
  ['expanded', 'hasChildren', 'selected'],
  [],
  []
);

TreeItem.displayName = 'TreeItem';

TreeItem.defaultProps = {
  additionalTextState: ValueState.None,
  expanded: false,
  hasChildren: false,
  selected: false
};

export { TreeItem };
