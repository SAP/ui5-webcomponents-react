import '@ui5/webcomponents-fiori/dist/UploadCollectionItem.js';
import { ReactNode } from 'react';
import { UploadState, ListItemType } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface UploadCollectionItemAttributes {
  /**
   * Disables the delete button.
   */
  disableDeleteButton?: boolean;
  /**
   * Holds an instance of `File` associated with this item.
   */
  file?: File;
  /**
   * The name of the file.
   */
  fileName?: string;
  /**
   * If set to `true` the file name will be clickable and it will fire `onFileNameClick` event upon click.
   */
  fileNameClickable?: boolean;
  /**
   * Hides the retry button when `uploadState` property is `Error`.
   */
  hideRetryButton?: boolean;
  /**
   * Hides the terminate button when `uploadState` property is `Uploading`.
   */
  hideTerminateButton?: boolean;
  /**
   * The upload progress in percentage.
   *
   * **Note:** Expected values are in the interval \[0, 100\].
   */
  progress?: number;
  /**
   * If set to `Uploading` or `Error`, a progress indicator showing the `progress` is displayed. Also if set to `Error`, a refresh button is shown. When this icon is pressed `onRetry` event is fired. If set to `Uploading`, a terminate button is shown. When this icon is pressed `onTerminate` event is fired.
   */
  uploadState?: UploadState | keyof typeof UploadState;
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

export interface UploadCollectionItemDomRef extends UploadCollectionItemAttributes, Ui5DomRef {}

export interface UploadCollectionItemPropTypes extends UploadCollectionItemAttributes, CommonProps {
  /**
   * Hold the description of the `UploadCollectionItem`. Will be shown below the file name.
   */
  children?: ReactNode | ReactNode[];
  /**
   * A thumbnail, which will be shown in the beginning of the `UploadCollectionItem`.
   *
   * **Note:** Use `Icon` or `img` for the intended design.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  thumbnail?: ReactNode;
  /**
   * Fired when the file name is clicked.
   *
   * **Note:** This event is only available when `fileNameClickable` property is `true`.
   */
  onFileNameClick?: (event: Ui5CustomEvent<UploadCollectionItemDomRef>) => void;
  /**
   * Fired when the `fileName` property gets changed.
   *
   * **Note:** An edit button is displayed on each item, when the `UploadCollectionItem` `type` property is set to `Detail`.
   */
  onRename?: (event: Ui5CustomEvent<UploadCollectionItemDomRef>) => void;
  /**
   * Fired when the retry button is pressed.
   *
   * **Note:** Retry button is displayed when `uploadState` property is set to `Error`.
   */
  onRetry?: (event: Ui5CustomEvent<UploadCollectionItemDomRef>) => void;
  /**
   * Fired when the terminate button is pressed.
   *
   * **Note:** Terminate button is displayed when `uploadState` property is set to `Uploading`.
   */
  onTerminate?: (event: Ui5CustomEvent<UploadCollectionItemDomRef>) => void;
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: Ui5CustomEvent<UploadCollectionItemDomRef>) => void;
}

/**
 * A component to be used within the `UploadCollection`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/UploadCollectionItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const UploadCollectionItem = withWebComponent<UploadCollectionItemPropTypes, UploadCollectionItemDomRef>(
  'ui5-upload-collection-item',
  ['file', 'fileName', 'progress', 'uploadState', 'type'],
  ['disableDeleteButton', 'fileNameClickable', 'hideRetryButton', 'hideTerminateButton', 'selected'],
  ['thumbnail'],
  ['file-name-click', 'rename', 'retry', 'terminate', 'detail-click']
);

UploadCollectionItem.displayName = 'UploadCollectionItem';

UploadCollectionItem.defaultProps = {
  file: null,
  progress: 0,
  uploadState: UploadState.Ready,
  type: ListItemType.Active
};

export { UploadCollectionItem };
