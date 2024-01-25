'use client';

import '@ui5/webcomponents-fiori/dist/UploadCollectionItem.js';
import type { ReactNode } from 'react';
import { UploadState, ListItemType } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef, UI5WCSlotsNode, Nullable } from '../../types/index.js';

interface UploadCollectionItemAttributes {
  /**
   * Disables the delete button.
   */
  disableDeleteButton?: boolean;
  /**
   * Holds an instance of `File` associated with this item.
   */
  file?: Nullable<File>;
  /**
   * The name of the file.
   */
  fileName?: string;
  /**
   * If set to `true` the file name will be clickable and it will fire `onFileNameClick` event upon click.
   */
  fileNameClickable?: boolean;
  /**
   * By default, the delete button will always be shown, regardless of the `UploadCollection`'s property `mode`. Setting this property to `true` will hide the delete button.
   */
  hideDeleteButton?: boolean;
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
   * The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item.
   */
  navigated?: boolean;
  /**
   * Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
   *
   * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.
   */
  type?: ListItemType | keyof typeof ListItemType;
  /**
   * Defines the selected state of the `ListItem`.
   */
  selected?: boolean;
}

export interface UploadCollectionItemDomRef extends UploadCollectionItemAttributes, Ui5DomRef {
  /**
   * An object of strings that defines several additional accessibility attribute values for customization depending on the use case. It supports the following fields:
   *
   * *   `ariaSetsize`: Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM. The value of each `aria-setsize` is an integer reflecting number of items in the complete set. **Note:** If the size of the entire set is unknown, set `aria-setsize="-1"`.
   * *   `ariaPosinset`: Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM. The value of each `aria-posinset` is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
   */
  accessibilityAttributes: Record<string, unknown>;
}

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
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="thumbnail"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  thumbnail?: UI5WCSlotsNode;
  /**
   * Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the `Button` component. **Note:** When the slot is not present, a built-in delete button will be displayed.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="deleteButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  deleteButton?: UI5WCSlotsNode;
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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-UploadCollection)
 */
const UploadCollectionItem = withWebComponent<UploadCollectionItemPropTypes, UploadCollectionItemDomRef>(
  'ui5-upload-collection-item',
  ['file', 'fileName', 'progress', 'uploadState', 'type'],
  [
    'disableDeleteButton',
    'fileNameClickable',
    'hideDeleteButton',
    'hideRetryButton',
    'hideTerminateButton',
    'navigated',
    'selected'
  ],
  ['thumbnail', 'deleteButton'],
  ['file-name-click', 'rename', 'retry', 'terminate', 'detail-click'],
  () => import('@ui5/webcomponents-fiori/dist/UploadCollectionItem.js')
);

UploadCollectionItem.displayName = 'UploadCollectionItem';

UploadCollectionItem.defaultProps = {
  file: null,
  progress: 0,
  uploadState: UploadState.Ready,
  type: ListItemType.Active
};

export { UploadCollectionItem };
