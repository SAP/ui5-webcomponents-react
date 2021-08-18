import { ListMode } from '@ui5/webcomponents-react/dist/ListMode';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { ReactNode, DragEventHandler } from 'react';

import '@ui5/webcomponents-fiori/dist/UploadCollection';

export interface UploadCollectionPropTypes extends Omit<CommonProps, 'onDrop'> {
  /**
   * By default there will be drag and drop overlay shown over the `UploadCollection` when files are dragged. If you don't intend to use drag and drop, set this property.
   *
   * **Note:** It is up to the application developer to add handler for `drop` event and handle it. `UploadCollection` only displays an overlay.
   */
  hideDragOverlay?: boolean;
  /**
   * Defines the mode of the `UploadCollection`.
   *
   * **Note:**
   *
   * *   `None`
   * *   `SingleSelect`
   * *   `MultiSelect`
   * *   `Delete`
   */
  mode?: ListMode | keyof typeof ListMode;
  /**
   * Allows you to set your own text for the 'No data' description.
   */
  noDataDescription?: string;
  /**
   * Allows you to set your own text for the 'No data' text.
   */
  noDataText?: string;
  /**
   * Defines the items of the `UploadCollection`.
   * **Note:** Use `UploadCollectionItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the `UploadCollection` header.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  header?: ReactNode | ReactNode[];
  /**
   * Fired when an element is dropped inside the drag and drop overlay.
   *
   * **Note:** The `drop` event is fired only when elements are dropped within the drag and drop overlay and ignored for the other parts of the `UploadCollection`.
   */
  onDrop?: DragEventHandler<HTMLElement>;
  /**
   * Fired when the Delete button of any item is pressed.
   *
   * **Note:** A Delete button is displayed on each item, when the `UploadCollection` `mode` property is set to `Delete`.
   */
  onItemDelete?: (event: Ui5CustomEvent<HTMLElement, { item: ReactNode }>) => void;
  /**
   * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
   */
  onSelectionChange?: (event: Ui5CustomEvent<HTMLElement, { selectedItems: unknown[] }>) => void;
}

/**
 * This component allows you to represent files before uploading them to a server, with the help of `UploadCollection-item`. It also allows you to show already uploaded files.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/UploadCollection" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const UploadCollection = withWebComponent<UploadCollectionPropTypes>(
  'ui5-upload-collection',
  ['mode', 'noDataDescription', 'noDataText'],
  ['hideDragOverlay'],
  ['header'],
  ['drop', 'item-delete', 'selection-change']
);

UploadCollection.displayName = 'UploadCollection';

UploadCollection.defaultProps = {
  hideDragOverlay: false,
  mode: ListMode.None
};

export { UploadCollection };
