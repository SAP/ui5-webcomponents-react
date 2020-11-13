import { UploadState } from '@ui5/webcomponents-react/lib/UploadState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/UploadCollectionItem';
import { FC, ReactNode } from 'react';

export interface UploadCollectionItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Holds `File`, associated with this item.
   */
  file?: File;
  /**
   * The name of the file.
   */
  fileName?: string;
  /**
   * If set to `true` the file name will be clickable and it will fire `file-name-click` event upon click.
   */
  fileNameClickable?: boolean;
  /**
   * Removes delete option from `ui5-upload-collection` with `mode` `Delete` for this item.
   */
  noDelete?: boolean;
  /**
   * Hides the retry button when `uploadState` property is `Error`.
   */
  noRetry?: boolean;
  /**
   * Hides the terminate button when `uploadState` property is `Uploading`.
   */
  noTerminate?: boolean;
  /**
   * The upload progress in percentage.
   *
   * **Note:** Expected values are in the interval \[0, 100\].
   */
  progress?: number;
  /**
   * If set to `Uploading` or `Error`, a progress indicator showing the `progress` is displayed. Also if set to `Error`, a refresh button is shown. When this icon is pressed `retry` event is fired. If set to `Uploading`, a terminate button is shown. When this icon is pressed `terminate` event is fired.
   */
  uploadState?: UploadState;
  /**
   * Hold the description of the `UploadCollectionItem`. Will be shown below the file name.
   */
  children?: ReactNode | ReactNode[];
  /**
   * A thumbnail, which will be shown in the beginning of the `UploadCollectionItem`.
   *
   * **Note:** Use `ui5-icon` or `img` for the intended design.
   */
  thumbnail?: ReactNode;
  /**
   * Fired when the file name is clicked. <br><br> <b>Note:</b> This event is only available when <code>fileNameClickable</code> property is <code>true</code>.
   */
  onFileNameClick?: (event: CustomEvent) => void;
  /**
   * Fired when the <code>fileName</code> property gets changed. <br><br> <b>Note:</b> An edit button is displayed on each item, when the <code>UploadCollectionItem</code> <code>type</code> property is set to <code>Detail</code>.
   */
  onRename?: (event: CustomEvent) => void;
  /**
   * Fired when the retry button is pressed. <br><br> <b>Note:</b> Retry button is displayed when <code>uploadState</code> property is set to <code>Error</code>.
   */
  onRetry?: (event: CustomEvent) => void;
  /**
   * Fired when the terminate button is pressed. <br><br> <b>Note:</b> Terminate button is displayed when <code>uploadState</code> property is set to <code>Uploading</code>.
   */
  onTerminate?: (event: CustomEvent) => void;
}

/**
 * A component to be used within the `UploadCollection`.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/UploadCollectionItem" target="_blank">UI5 Web Components Playground</a>
 */
const UploadCollectionItem: FC<UploadCollectionItemPropTypes> = withWebComponent<UploadCollectionItemPropTypes>(
  'ui5-upload-collection-item',
  ['file', 'fileName', 'progress', 'uploadState'],
  ['fileNameClickable', 'noDelete', 'noRetry', 'noTerminate'],
  ['thumbnail'],
  ['file-name-click', 'rename', 'retry', 'terminate']
);

UploadCollectionItem.displayName = 'UploadCollectionItem';

UploadCollectionItem.defaultProps = {
  file: null,
  fileNameClickable: false,
  noDelete: false,
  noRetry: false,
  noTerminate: false,
  progress: 0,
  uploadState: UploadState.Ready
};

export { UploadCollectionItem };
