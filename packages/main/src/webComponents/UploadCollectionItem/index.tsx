'use client';

import '@ui5/webcomponents-fiori/dist/UploadCollectionItem.js';
import type { ListItemAccessibilityAttributes } from '@ui5/webcomponents/dist/ListItem.js';
import type { ListItemBaseClickEventDetail } from '@ui5/webcomponents/dist/ListItemBase.js';
import type Highlight from '@ui5/webcomponents/dist/types/Highlight.js';
import type ListItemAccessibleRole from '@ui5/webcomponents/dist/types/ListItemAccessibleRole.js';
import type ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import type UploadState from '@ui5/webcomponents-fiori/dist/types/UploadState.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface UploadCollectionItemAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following fields are supported:
   *
   * - **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
   * **Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set `-1`.
   *
   * 	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
   * 	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
   *
   * **Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents-fiori**.
   * @default {}
   */
  accessibilityAttributes?: ListItemAccessibilityAttributes;

  /**
   * Used to define the role of the list item.
   *
   * **Note:** If not set, the role is automatically inherited from the parent `ui5-list` based on its `accessible-role` property
   * (e.g. `Menu` -> `MenuItem`, `Tree` -> `TreeItem`, `ListBox` -> `Option`).
   * An explicitly set `accessible-role` on the list item takes precedence over the inherited role.
   *
   * **Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  accessibleRole?: ListItemAccessibleRole | undefined | keyof typeof ListItemAccessibleRole;

  /**
   * Disables the delete button.
   * @default false
   */
  disableDeleteButton?: boolean;

  /**
   * Holds an instance of `File` associated with this item.
   * @default null
   */
  file?: File | null;

  /**
   * The name of the file.
   */
  fileName?: string;

  /**
   * If set to `true` the file name will be clickable and it will fire `file-name-click` event upon click.
   * @default false
   */
  fileNameClickable?: boolean;

  /**
   * Hides the delete button.
   * @default false
   */
  hideDeleteButton?: boolean;

  /**
   * Hides the retry button when `uploadState` property is `Error`.
   * @default false
   */
  hideRetryButton?: boolean;

  /**
   * Hides the terminate button when `uploadState` property is `Uploading`.
   * @default false
   */
  hideTerminateButton?: boolean;

  /**
   * Defines the highlight state of the list items.
   * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
   *
   * **Note:** Available since [v1.24.0](https://github.com/UI5/webcomponents/releases/tag/v1.24.0) of **@ui5/webcomponents-fiori**.
   * @default "None"
   */
  highlight?: Highlight | keyof typeof Highlight;

  /**
   * The navigated state of the list item.
   * If set to `true`, a navigation indicator is displayed at the end of the list item.
   *
   * **Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  navigated?: boolean;

  /**
   * The upload progress in percentage.
   *
   * **Note:** Expected values are in the interval [0, 100].
   * @default 0
   */
  progress?: number;

  /**
   * Defines the selected state of the component.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the tooltip that would be displayed for the list item.
   *
   * **Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines the visual indication and behavior of the list items.
   * Available options are `Active` (by default), `Inactive`, `InactiveSelectable`, `Detail` and `Navigation`.
   *
   * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
   * while with type `Inactive`, `InactiveSelectable` and `Detail` - will not.
   *
   * **Note:** `InactiveSelectable` behaves like `Inactive` (no active press/hover feedback and the
   * `item-click` event is not fired), but the item can still be selected. Clicking the item body,
   * pressing Space/Enter, or interacting with the selection component (checkbox in Multi mode, radio
   * button in Single modes) toggles the selection when the list has a selection mode.
   * @default "Active"
   */
  type?: ListItemType | keyof typeof ListItemType;

  /**
   * Upload state.
   *
   * Depending on this property, the item displays the following:
   *
   * - `Ready` - progress indicator is displayed.
   * - `Uploading` - progress indicator and terminate button are displayed. When the terminate button is pressed, `terminate` event is fired.
   * - `Error` - progress indicator and retry button are displayed. When the retry button is pressed, `retry` event is fired.
   * - `Complete` - progress indicator is not displayed.
   * @default "Ready"
   */
  uploadState?: UploadState | keyof typeof UploadState;
}

interface UploadCollectionItemDomRef extends Required<UploadCollectionItemAttributes>, Ui5DomRef {}

interface UploadCollectionItemPropTypes
  extends
    UploadCollectionItemAttributes,
    Omit<
      CommonProps,
      | keyof UploadCollectionItemAttributes
      | 'children'
      | 'deleteButton'
      | 'thumbnail'
      | 'onClick'
      | 'onDetailClick'
      | 'onFileNameClick'
      | 'onRename'
      | 'onRetry'
      | 'onTerminate'
    > {
  /**
   * Hold the description of the `UploadCollectionItem`. Will be shown below the file name.
   *
   * __Supported Node Type/s:__ `Array<Node>`
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the delete button, displayed in "Delete" mode.
   * **Note:** While the slot allows custom buttons, to match
   * design guidelines, please use the `ui5-button` component.
   * **Note:** When the slot is not present, a built-in delete button will be displayed.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="deleteButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.9.0](https://github.com/UI5/webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents-fiori**.
   *
   * __Supported Node Type/s:__ `Array<IButton>`
   */
  deleteButton?: UI5WCSlotsNode;

  /**
   * A thumbnail, which will be shown in the beginning of the `UploadCollectionItem`.
   *
   * **Note:** Use `ui5-icon` or `img` for the intended design.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="thumbnail"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  thumbnail?: UI5WCSlotsNode;
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   *
   * **Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<UploadCollectionItemDomRef, ListItemBaseClickEventDetail>) => void;

  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onDetailClick?: (event: Ui5CustomEvent<UploadCollectionItemDomRef>) => void;

  /**
   * Fired when the file name is clicked.
   *
   * **Note:** This event is only available when `fileNameClickable` property is `true`.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onFileNameClick?: (event: Ui5CustomEvent<UploadCollectionItemDomRef>) => void;

  /**
   * Fired when the `fileName` property gets changed.
   *
   * **Note:** An edit button is displayed on each item,
   * when the `UploadCollectionItem` `type` property is set to `Detail`.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onRename?: (event: Ui5CustomEvent<UploadCollectionItemDomRef>) => void;

  /**
   * Fired when the retry button is pressed.
   *
   * **Note:** Retry button is displayed when `uploadState` property is set to `Error`.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onRetry?: (event: Ui5CustomEvent<UploadCollectionItemDomRef>) => void;

  /**
   * Fired when the terminate button is pressed.
   *
   * **Note:** Terminate button is displayed when `uploadState` property is set to `Uploading`.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onTerminate?: (event: Ui5CustomEvent<UploadCollectionItemDomRef>) => void;
}

/**
 * A component to be used within the `UploadCollection`.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [UploadCollectionItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UploadCollectionItem) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents-fiori__.
 */
const UploadCollectionItem = withWebComponent<UploadCollectionItemPropTypes, UploadCollectionItemDomRef>(
  'ui5-upload-collection-item',
  [
    'accessibilityAttributes',
    'accessibleRole',
    'file',
    'fileName',
    'highlight',
    'progress',
    'tooltip',
    'type',
    'uploadState',
  ],
  [
    'disableDeleteButton',
    'fileNameClickable',
    'hideDeleteButton',
    'hideRetryButton',
    'hideTerminateButton',
    'navigated',
    'selected',
  ],
  ['deleteButton', 'thumbnail'],
  ['click', 'detail-click', 'file-name-click', 'rename', 'retry', 'terminate'],
);

UploadCollectionItem.displayName = 'UploadCollectionItem';

export { UploadCollectionItem };
export type { UploadCollectionItemDomRef, UploadCollectionItemPropTypes };
