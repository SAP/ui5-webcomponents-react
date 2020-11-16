import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/UploadCollection';
import { FC, ReactNode } from 'react';

export interface UploadCollectionPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the mode of the `UploadCollection`.
   *
   * **Note:** Available options are `None`, `SingleSelect`, `MultiSelect`, and `Delete`.
   */
  mode?: ListMode;
  /**
   * Allows you to set your own text for the 'No data' description.
   */
  noDataDescription?: string;
  /**
   * Allows you to set your own text for the 'No data' text.
   */
  noDataText?: string;
  /**
   * By default there will be drag and drop overlay shown over the `UploadCollection` when files are dragged. If you don't intend to use drag and drop, set this property to `true`
   *
   * **Note:** It is up to the application developer to add handler for `drop` event and handle it. `UploadCollection` only shows an overlay.
   */
  noDnd?: boolean;
  /**
   * Defines the items of the `UploadCollection`.
   * **Note:** Use `UploadCollectionItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the `UploadCollection` header.
   */
  header?: ReactNode | ReactNode[];
  /**
   * Fired when the Delete button of any item is pressed.
   *
   * **Note:** A Delete button is displayed on each item, when the `UploadCollection` `mode` property is set to `Delete`.
   */
  onFileDeleted?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
   */
  onSelectionChange?: (event: CustomEvent<{ selectedItems: unknown[] }>) => void;
}

/**
 * This component allows you to represent files before uploading them to a server, with the help of `UploadCollectionItem`. It also allows you to show already uploaded files.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/UploadCollection" target="_blank">UI5 Web Components Playground</a>
 */
const UploadCollection: FC<UploadCollectionPropTypes> = withWebComponent<UploadCollectionPropTypes>(
  'ui5-upload-collection',
  ['mode', 'noDataDescription', 'noDataText'],
  ['noDnd'],
  ['header'],
  ['file-deleted', 'selection-change']
);

UploadCollection.displayName = 'UploadCollection';

UploadCollection.defaultProps = {
  mode: ListMode.None,
  noDnd: false
};

export { UploadCollection };
