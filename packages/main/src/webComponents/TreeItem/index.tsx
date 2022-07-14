import '@ui5/webcomponents/dist/TreeItem.js';
import { ReactNode } from 'react';
import { ValueState } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface TreeItemAttributes {
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
   * Defines whether the selection of a tree node is displayed as partially selected.
   *
   * **Note:** The indeterminate state can be set only programatically and can’t be achieved by user interaction, meaning that the resulting visual state depends on the values of the `indeterminate` and `selected` properties:
   *
   * *   If a tree node has both `selected` and `indeterminate` set to `true`, it is displayed as partially selected.
   * *   If a tree node has `selected` set to `true` and `indeterminate` set to `false`, it is displayed as selected.
   * *   If a tree node has `selected` set to `false`, it is displayed as not selected regardless of the value of the `indeterminate` property.
   *
   *
   * **Note:** This property takes effect only when the `Tree` is in `MultiSelect` mode.
   */
  indeterminate?: boolean;
  /**
   * Defines whether the tree node is selected by the user. Only has effect if the `Tree` is in one of the following modes: in `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd` and `MultiSelect`.
   */
  selected?: boolean;
  /**
   * Defines the text of the tree item.
   */
  text?: string;
}

export interface TreeItemDomRef extends TreeItemAttributes, Ui5DomRef {
  /**
   * Call this method to manually switch the `expanded` state of a tree item.
   */
  toggle: () => void;
}

export interface TreeItemPropTypes extends TreeItemAttributes, CommonProps {
  /**
   * Defines the items of this component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * This is the item to use inside a `Tree`. You can represent an arbitrary tree structure by recursively nesting tree items.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Tree" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TreeItem = withWebComponent<TreeItemPropTypes, TreeItemDomRef>(
  'ui5-tree-item',
  ['additionalText', 'additionalTextState', 'icon', 'text'],
  ['expanded', 'hasChildren', 'indeterminate', 'selected'],
  [],
  []
);

TreeItem.displayName = 'TreeItem';

TreeItem.defaultProps = {
  additionalTextState: ValueState.None
};

export { TreeItem };
