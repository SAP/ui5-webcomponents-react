'use client';

import '@ui5/webcomponents/dist/Tree.js';
import type {
  TreeItemClickEventDetail,
  TreeItemDeleteEventDetail,
  TreeItemMouseoutEventDetail,
  TreeItemMouseoverEventDetail,
  TreeItemToggleEventDetail,
  TreeSelectionChangeEventDetail,
  WalkCallback
} from '@ui5/webcomponents/dist/Tree.js';
import type ListMode from '@ui5/webcomponents/dist/types/ListMode.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface TreeAttributes {
  /**
   * Defines the accessible name of the component.
   */
  accessibleName?: string;

  /**
   * Defines the IDs of the elements that label the component.
   */
  accessibleNameRef?: string;

  /**
   * Defines the component footer text.
   */
  footerText?: string;

  /**
   * Defines the component header text.
   *
   * **Note:** If the `header` slot is set, this property is ignored.
   */
  headerText?: string;

  /**
   * Defines the mode of the component. Since the tree uses a `List` to display its structure,
   * the tree modes are exactly the same as the list modes, and are all applicable.
   * @default "None"
   */
  mode?: ListMode | keyof typeof ListMode;

  /**
   * Defines the text that is displayed when the component contains no items.
   */
  noDataText?: string;
}

interface TreeDomRef extends Required<TreeAttributes>, Ui5DomRef {
  /**
   * Perform Depth-First-Search walk on the tree and run a callback on each node
   * @param {WalkCallback} callback - function to execute on each node of the tree with 3 arguments: the node, the level and the index
   * @returns {void}
   */
  walk: (callback: WalkCallback) => void;
}

interface TreePropTypes
  extends TreeAttributes,
    Omit<
      CommonProps,
      | keyof TreeAttributes
      | 'children'
      | 'header'
      | 'onItemClick'
      | 'onItemDelete'
      | 'onItemMouseout'
      | 'onItemMouseover'
      | 'onItemToggle'
      | 'onSelectionChange'
    > {
  /**
   * Defines the items of the component. Tree items may have other tree items as children.
   *
   * **Note:** Use `TreeItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the component header.
   *
   * **Note:** When the `header` slot is set, the
   * `headerText` property is ignored.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired when a tree item is activated.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onItemClick?: (event: Ui5CustomEvent<TreeDomRef, TreeItemClickEventDetail>) => void;

  /**
   * Fired when the Delete button of any tree item is pressed.
   *
   * **Note:** A Delete button is displayed on each item,
   * when the component `mode` property is set to `Delete`.
   */
  onItemDelete?: (event: Ui5CustomEvent<TreeDomRef, TreeItemDeleteEventDetail>) => void;

  /**
   * Fired when the mouse cursor leaves the tree item borders.
   */
  onItemMouseout?: (event: Ui5CustomEvent<TreeDomRef, TreeItemMouseoutEventDetail>) => void;

  /**
   * Fired when the mouse cursor enters the tree item borders.
   */
  onItemMouseover?: (event: Ui5CustomEvent<TreeDomRef, TreeItemMouseoverEventDetail>) => void;

  /**
   * Fired when a tree item is expanded or collapsed.
   *
   * **Note:** You can call `preventDefault()` on the event object to suppress the event, if needed.
   * This may be handy for example if you want to dynamically load tree items upon the user expanding a node.
   * Even if you prevented the event's default behavior, you can always manually call `toggle()` on a tree item.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onItemToggle?: (event: Ui5CustomEvent<TreeDomRef, TreeItemToggleEventDetail>) => void;

  /**
   * Fired when selection is changed by user interaction
   * in `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd` and `MultiSelect` modes.
   */
  onSelectionChange?: (event: Ui5CustomEvent<TreeDomRef, TreeSelectionChangeEventDetail>) => void;
}

/**
 * The `Tree` component provides a tree structure for displaying data in a hierarchy.
 *
 * ### Usage
 *
 * #### When to use:
 *
 * - To display hierarchically structured items.
 * - To select one or more items out of a set of hierarchically structured items.
 *
 * #### When not to use:
 *
 * - To display items not hierarchically structured. In this case, use the List component.
 * - To select one item from a very small number of non-hierarchical items. Select or ComboBox might be more appropriate.
 * - The hierarchy turns out to have only two levels. In this case, use List with group items.
 *
 * ### Keyboard Handling
 *
 * The `Tree` provides advanced keyboard handling.
 * The user can use the following keyboard shortcuts in order to navigate trough the tree:
 *
 * - [UP/DOWN] - Navigates up and down the tree items that are currently visible.
 * - [RIGHT] - Drills down the tree by expanding the tree nodes.
 * - [LEFT] - Goes up the tree and collapses the tree nodes.
 *
 * The user can use the following keyboard shortcuts to perform selection,
 * when the `mode` property is in use:
 *
 * - [SPACE] - Selects the currently focused item upon keyup.
 * - [ENTER]  - Selects the currently focused item upon keydown.
 *
 *
 *
 * `import "@ui5/webcomponents/dist/TreeItem.js";`
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Tree = withWebComponent<TreePropTypes, TreeDomRef>(
  'ui5-tree',
  ['accessibleName', 'accessibleNameRef', 'footerText', 'headerText', 'mode', 'noDataText'],
  [],
  ['header'],
  ['item-click', 'item-delete', 'item-mouseout', 'item-mouseover', 'item-toggle', 'selection-change'],
  () => import('@ui5/webcomponents/dist/Tree.js')
);

Tree.displayName = 'Tree';

export { Tree };
export type { TreeDomRef, TreePropTypes };
