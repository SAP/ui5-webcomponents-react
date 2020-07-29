import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Tree';
import { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TreePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the <code>ui5-tree</code> footer text.
   */
  footerText?: string;
  /**
   * Defines the <code>ui5-tree</code> header text. <br><br> <b>Note:</b> If the <code>header</code> slot is set, this property is ignored.
   */
  headerText?: string;
  /**
   * Defines the mode of the <code>ui5-tree</code>. Since the tree uses a <code>ui5-list</code> to display its structure, the tree modes are exactly the same as the list modes, and are all applicable. <br><br> <b>Note:</b> Available options are <code>None</code>, <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code>, <code>MultiSelect</code>, and <code>Delete</code>.
   */
  mode?: ListMode;
  /**
   * Defines the text that is displayed when the <code>ui5-tree</code> contains no items.
   */
  noDataText?: string;
  /**
   * Defines the items of the <code>ui5-tree</code>. Tree items may have other tree items as children. <br><br> <b>Note:</b> Use <code>ui5-tree-item</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the <code>ui5-tree</code> header. <br><br> <b>Note:</b> When the <code>header</code> slot is set, the <code>headerText</code> property is ignored.
   */
  header?: ReactNode | ReactNode[];
  /**
   * Fired when a tree item is activated.
   */
  onItemClick?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when the Delete button of any tree item is pressed. <br><br> <b>Note:</b> A Delete button is displayed on each item, when the <code>ui5-tree</code> <code>mode</code> property is set to <code>Delete</code>.
   */
  onItemDelete?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when a tree item is expanded or collapsed. <i>Note:</i> You can call <code>preventDefault()</code> on the event object to suppress the event, if needed. This may be handy for example if you want to dynamically load tree items upon the user expanding a node. Even if you prevented the event's default behavior, you can always manually call <code>toggle()</code> on a tree item.
   */
  onItemToggle?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when selection is changed by user interaction in <code>SingleSelect</code>, <code>SingleSelectBegin</code>, <code>SingleSelectEnd</code> and <code>MultiSelect</code> modes.
   */
  onSelectionChange?: (event: CustomEvent<{ selectedItems: unknown[]; previouslySelectedItems: unknown[] }>) => void;
}

/**
 * <code>import { Tree } from '@ui5/webcomponents-react/lib/Tree';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Tree" target="_blank">UI5 Web Components Playground</a>
 */
const Tree: FC<TreePropTypes> = withWebComponent<TreePropTypes>(
  'ui5-tree',
  ['footerText', 'headerText', 'mode', 'noDataText'],
  [],
  ['header'],
  ['item-click', 'item-delete', 'item-toggle', 'selection-change']
);

Tree.displayName = 'Tree';

Tree.defaultProps = {
  mode: ListMode.None
};

export { Tree };
