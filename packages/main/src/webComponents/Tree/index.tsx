import '@ui5/webcomponents/dist/Tree.js';
import { ReactNode } from 'react';
import { ListMode } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface TreeAttributes {
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
   * Defines the mode of the component. Since the tree uses a `List` to display its structure, the tree modes are exactly the same as the list modes, and are all applicable.
   *
   * **Note:**
   *
   * *   `None`
   * *   `SingleSelect`
   * *   `SingleSelectBegin`
   * *   `SingleSelectEnd`
   * *   `MultiSelect`
   * *   `Delete`
   */
  mode?: ListMode | keyof typeof ListMode;
  /**
   * Defines the text that is displayed when the component contains no items.
   */
  noDataText?: string;
}

export interface TreeDomRef extends TreeAttributes, Ui5DomRef {
  /**
   * Perform Depth-First-Search walk on the tree and run a callback on each node
   * @param {(treeNode: HTMLElement, level: number) => void} callback - function to execute on each node of the tree with 2 arguments: the node and the level
   */
  walk: (callback: (treeNode: HTMLElement, level: number) => void) => void;
}

export interface TreePropTypes extends TreeAttributes, CommonProps {
  /**
   * Defines the items of the component. Tree items may have other tree items as children.
   *
   * **Note:** Use `TreeItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the component header.
   *
   * **Note:** When the `header` slot is set, the `headerText` property is ignored.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  header?: ReactNode | ReactNode[];
  /**
   * Fired when a tree item is activated.
   */
  onItemClick?: (event: Ui5CustomEvent<HTMLElement, { item: HTMLElement }>) => void;
  /**
   * Fired when the Delete button of any tree item is pressed.
   *
   * **Note:** A Delete button is displayed on each item, when the component `mode` property is set to `Delete`.
   */
  onItemDelete?: (event: Ui5CustomEvent<HTMLElement, { item: HTMLElement }>) => void;
  /**
   * Fired when the mouse cursor leaves the tree item borders.
   */
  onItemMouseout?: (event: Ui5CustomEvent<HTMLElement, { item: HTMLElement }>) => void;
  /**
   * Fired when the mouse cursor enters the tree item borders.
   */
  onItemMouseover?: (event: Ui5CustomEvent<HTMLElement, { item: HTMLElement }>) => void;
  /**
   * Fired when a tree item is expanded or collapsed. _Note:_ You can call `preventDefault()` on the event object to suppress the event, if needed. This may be handy for example if you want to dynamically load tree items upon the user expanding a node. Even if you prevented the event's default behavior, you can always manually call `toggle()` on a tree item.
   */
  onItemToggle?: (event: Ui5CustomEvent<HTMLElement, { item: HTMLElement }>) => void;
  /**
   * Fired when selection is changed by user interaction in `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd` and `MultiSelect` modes.
   */
  onSelectionChange?: (
    event: Ui5CustomEvent<HTMLElement, { selectedItems: unknown[]; previouslySelectedItems: unknown[] }>
  ) => void;
}

/**
 * The `Tree` component provides a tree structure for displaying data in a hierarchy.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Tree" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Tree = withWebComponent<TreePropTypes, TreeDomRef>(
  'ui5-tree',
  ['footerText', 'headerText', 'mode', 'noDataText'],
  [],
  ['header'],
  ['item-click', 'item-delete', 'item-mouseout', 'item-mouseover', 'item-toggle', 'selection-change']
);

Tree.displayName = 'Tree';

Tree.defaultProps = {
  mode: ListMode.None
};

export { Tree };
