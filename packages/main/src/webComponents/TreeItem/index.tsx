import '@ui5/webcomponents/dist/TreeItem.js';
import { ReactNode } from 'react';
import { ValueState, ListItemType } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

interface TreeItemAttributes {
  /**
   * Defines the `additionalText`, displayed in the end of the tree item.
   */
  additionalText?: string;
  /**
   * Defines the state of the `additionalText`.
   * Available options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.
   */
  additionalTextState?: ValueState | keyof typeof ValueState;
  /**
   * Defines the text of the tree item.
   */
  text?: string;
  /**
   * Defines the accessible name of the component.
   */
  accessibleName?: string;
  /**
   * Defines whether the tree list item will show a collapse or expand icon inside its toggle button.
   */
  expanded?: boolean;
  /**
   * Defines whether the tree node has children, even if currently no other tree nodes are slotted inside.
   * _Note:_ This property is useful for showing big tree structures where not all nodes are initially loaded due to performance reasons. Set this to `true` for nodes you intend to load lazily, when the user clicks the expand button. It is not necessary to set this property otherwise. If a tree item has children, the expand button will be displayed anyway.
   */
  hasChildren?: boolean;
  /**
   * If set, an icon will be displayed before the text of the tree list item.
   */
  icon?: string;
  /**
   * Defines whether the selection of a tree node is displayed as partially selected.
   *
   * **Note:** The indeterminate state can be set only programmatically and can’t be achieved by user interaction, meaning that the resulting visual state depends on the values of the `indeterminate` and `selected` properties:
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
   * Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive` and `Detail`.
   *
   * **Note:** When set to `Active`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.
   */
  type?: ListItemType | keyof typeof ListItemType;
  /**
   * Defines the selected state of the `ListItem`.
   */
  selected?: boolean;
}

export interface TreeItemDomRef extends TreeItemAttributes, Ui5DomRef {
  /**
   * Call this method to manually switch the `expanded` state of a tree item.
   */
  toggle: () => void;
}

export interface TreeItemPropTypes extends TreeItemAttributes, CommonProps {
  /**
   * Defines the items of the component.
   *
   * **Note:** Use `TreeItem` or `TreeItemCustom`
   */
  children?: ReactNode;
  /**
   * Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the `Button` component. **Note:** When the slot is not present, a built-in delete button will be displayed.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="deleteButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them in the body of the component, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  deleteButton?: UI5WCSlotsNode;
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: Ui5CustomEvent<TreeItemDomRef>) => void;
}

/**
 * The `TreeItem` represents a node in a tree structure, shown as a `List`.
 * This is the item to use inside a `Tree`. You can represent an arbitrary tree structure by recursively nesting tree items.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Tree" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TreeItem = withWebComponent<TreeItemPropTypes, TreeItemDomRef>(
  'ui5-tree-item',
  ['additionalText', 'additionalTextState', 'text', 'accessibleName', 'icon', 'type'],
  ['expanded', 'hasChildren', 'indeterminate', 'selected'],
  ['deleteButton'],
  ['detail-click']
);

TreeItem.displayName = 'TreeItem';

TreeItem.defaultProps = {
  additionalTextState: ValueState.None,
  type: ListItemType.Active
};

export { TreeItem };
