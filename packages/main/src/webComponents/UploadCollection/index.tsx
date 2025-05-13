'use client';

import '@ui5/webcomponents-fiori/dist/UploadCollection.js';
import type UploadCollectionSelectionMode from '@ui5/webcomponents-fiori/dist/types/UploadCollectionSelectionMode.js';
import type {
  UploadCollectionItemDeleteEventDetail,
  UploadCollectionSelectionChangeEventDetail,
} from '@ui5/webcomponents-fiori/dist/UploadCollection.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface UploadCollectionAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * By default there will be drag and drop overlay shown over the `UploadCollection` when files
   * are dragged. If you don't intend to use drag and drop, set this property.
   *
   * **Note:** It is up to the application developer to add handler for `drop` event and handle it.
   * `UploadCollection` only displays an overlay.
   * @default false
   */
  hideDragOverlay?: boolean;

  /**
   * Allows you to set your own text for the 'No data' description.
   * @default undefined
   */
  noDataDescription?: string | undefined;

  /**
   * Allows you to set your own text for the 'No data' text.
   * @default undefined
   */
  noDataText?: string | undefined;

  /**
   * Defines the selection mode of the `UploadCollection`.
   * @default "None"
   */
  selectionMode?: UploadCollectionSelectionMode | keyof typeof UploadCollectionSelectionMode;
}

interface UploadCollectionDomRef extends Required<UploadCollectionAttributes>, Ui5DomRef {}

interface UploadCollectionPropTypes
  extends UploadCollectionAttributes,
    Omit<CommonProps, keyof UploadCollectionAttributes | 'children' | 'header' | 'onItemDelete' | 'onSelectionChange'> {
  /**
   * Defines the items of the `UploadCollection`.
   *
   * **Note:** Use `UploadCollectionItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the `UploadCollection` header.
   *
   * **Note:** If `header` slot is provided,
   * the labelling of the `UploadCollection` is a responsibility of the application developer.
   * `accessibleName` should be used.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired when an element is dropped inside the drag and drop overlay.
   *
   * **Note:** The `drop` event is fired only when elements are dropped within the drag and drop overlay and ignored for the other parts of the `UploadCollection`.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onItemDelete?: (event: Ui5CustomEvent<UploadCollectionDomRef, UploadCollectionItemDeleteEventDetail>) => void;

  /**
   * Fired when selection is changed by user interaction
   * in `Single` and `Multiple` modes.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onSelectionChange?: (
    event: Ui5CustomEvent<UploadCollectionDomRef, UploadCollectionSelectionChangeEventDetail>,
  ) => void;
}

/**
 * This component allows you to represent files before uploading them to a server, with the help of `UploadCollectionItem`.
 * It also allows you to show already uploaded files.
 *
 *
 *
 * `import "@ui5/webcomponents-fiori/dist/UploadCollectionItem.js";` (for `UploadCollectionItem`)
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const UploadCollection = withWebComponent<UploadCollectionPropTypes, UploadCollectionDomRef>(
  'ui5-upload-collection',
  ['accessibleName', 'noDataDescription', 'noDataText', 'selectionMode'],
  ['hideDragOverlay'],
  ['header'],
  ['item-delete', 'selection-change'],
);

UploadCollection.displayName = 'UploadCollection';

export { UploadCollection };
export type { UploadCollectionDomRef, UploadCollectionPropTypes };
