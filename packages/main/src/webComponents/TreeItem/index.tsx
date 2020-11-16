import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TreeItem';
import { FC, ReactNode } from 'react';

export interface TreeItemPropTypes extends WithWebComponentPropTypes {
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
   * Defines the items of this `TreeItem`.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * This is the item to use inside a `Tree`. You can represent an arbitrary tree structure by recursively nesting tree items.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TreeItem" target="_blank">UI5 Web Components Playground</a>
 */
const TreeItem: FC<TreeItemPropTypes> = withWebComponent<TreeItemPropTypes>(
  'ui5-tree-item',
  ['icon', 'text'],
  ['expanded', 'hasChildren', 'selected'],
  [],
  []
);

TreeItem.displayName = 'TreeItem';

TreeItem.defaultProps = {
  expanded: false,
  hasChildren: false,
  selected: false
};

export { TreeItem };
