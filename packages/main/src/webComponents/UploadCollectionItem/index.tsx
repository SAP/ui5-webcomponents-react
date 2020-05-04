import '@ui5/webcomponents-fiori/dist/UploadCollectionItem';
import { UploadState } from '@ui5/webcomponents-react/lib/UploadState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface UploadCollectionItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Holds <code>File</code>, associated with this item.
   */
  file?: File;
  /**
   * The name of the file.
   */
  fileName?: string;
  /**
   * If set to <code>true</code> the file name will be clickable and it will fire <code>fileNameClick</code> event upon click.
   */
  fileNameClickable?: boolean;
  /**
   * Removes delete option from <code>ui5-upload-collection</code> with <code>mode</code> <code>Delete</code> for this item.
   */
  noDelete?: boolean;
  /**
   * Hides the retry button when <code>uploadState</code> property is <code>Error</code>.
   */
  noRetry?: boolean;
  /**
   * Hides the terminate button when <code>uploadState</code> property is <code>Uploading</code>.
   */
  noTerminate?: boolean;
  /**
   * The upload progress in percentage. <br><br> <b>Note:</b> Expected values are in the interval [0, 100].
   */
  progress?: number;
  /**
   * If set to <code>Uploading</code> or <code>Error</code>, a progress indicator showing the <code>progress</code> is displayed. Also if set to <code>Error</code>, a refresh button is shown. When this icon is pressed <code>retry</code> event is fired. If set to <code>Uploading</code>, a terminate button is shown. When this icon is pressed <code>terminate</code> event is fired.
   */
  uploadState?: UploadState;
  /**
   * Hold the description of the <code>ui5-upload-collection-item</code>. Will be shown below the file name.
   */
  children?: ReactNode | ReactNode[];
  /**
   * A thumbnail, which will be shown in the beginning of the <code>ui5-upload-collection-item</code>. <br><br> <b>Note:</b> Use <code>ui5-icon</code> or <code>img</code> for the intended design.
   */
  thumbnail?: ReactNode;
  /**
   * Fired when the file name is clicked. <br><br> <b>Note:</b> This event is only available when <code>fileNameClickable</code> property is <code>true</code>.
   */
  onFileNameClick?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the <code>fileName</code> property gets changed. <br><br> <b>Note:</b> An edit button is displayed on each item, when the <code>ui5-upload-collection-item</code> <code>type</code> property is set to <code>Detail</code>.
   */
  onRename?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the retry button is pressed. <br><br> <b>Note:</b> Retry button is displayed when <code>uploadState</code> property is set to <code>Error</code>.
   */
  onRetry?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the terminate button is pressed. <br><br> <b>Note:</b> Terminate button is displayed when <code>uploadState</code> property is set to <code>Uploading</code>.
   */
  onTerminate?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { UploadCollectionItem } from '@ui5/webcomponents-react/lib/UploadCollectionItem';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/UploadCollectionItem" target="_blank">UI5 Web Components Playground</a>
 */
const UploadCollectionItem: FC<UploadCollectionItemPropTypes> = withWebComponent<UploadCollectionItemPropTypes>(
  'ui5-upload-collection-item',
  ['file', 'fileName', 'progress', 'uploadState'],
  ['fileNameClickable', 'noDelete', 'noRetry', 'noTerminate'],
  ['thumbnail'],
  ['fileNameClick', 'rename', 'retry', 'terminate']
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
