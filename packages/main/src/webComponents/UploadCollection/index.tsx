import '@ui5/webcomponents-fiori/dist/UploadCollection';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC, ReactNode } from 'react';

export interface UploadCollectionPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the mode of the <code>UploadCollection</code>. <br><br> <b>Note:</b> Available options are <code>None</code>, <code>SingleSelect</code>, <code>MultiSelect</code>, and <code>Delete</code>.
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
   * By default there will be drag and drop overlay shown over the <code>UploadCollection</code> when files are dragged. If you don't intend to use drag and drop, set this property to <code>true</code> <br><br> <b>Note:</b> It is up to the application developer to add handler for <code>drop</code> event and handle it. <code>UploadCollection</code> only shows an overlay.
   */
  noDnd?: boolean;
  /**
   * Defines the items of the <code>UploadCollection</code>. <br><b>Note:</b> Use <code>UploadCollection-item</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the <code>UploadCollection</code> header.
   */
  header?: ReactNode | ReactNode[];
  /**
   * Fired when the Delete button of any item is pressed. <br><br> <b>Note:</b> A Delete button is displayed on each item, when the <code>UploadCollection</code> <code>mode</code> property is set to <code>Delete</code>.
   */
  onFileDeleted?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.
   */
  onSelectionChange?: (event: CustomEvent<{ selectedItems: unknown[] }>) => void;
}

/**
 * This component allows you to represent files before uploading them to a server, with the help of
 <code>UploadCollection-item</code>. It also allows you to show already uploaded files.

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
