'use client';

import '@ui5/webcomponents/dist/SegmentedButton.js';
import type {
  ISegmentedButtonItem,
  SegmentedButtonSelectionChangeEventDetail,
} from '@ui5/webcomponents/dist/SegmentedButton.js';
import type SegmentedButtonSelectionMode from '@ui5/webcomponents/dist/types/SegmentedButtonSelectionMode.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface SegmentedButtonAttributes {
  /**
   * Defines the accessible description of the component.
   *
   * **Note:** Available since [v2.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleDescription?: string | undefined;

  /**
   * Defines the IDs of the HTML Elements that describe the component.
   *
   * **Note:** Available since [v2.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleDescriptionRef?: string | undefined;

  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.0.3](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.3) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the IDs of the HTML Elements that label the component.
   *
   * **Note:** Available since [v2.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.15.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines the component selection mode.
   *
   * **Note:** Available since [v1.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14.0) of **@ui5/webcomponents**.
   * @default "Single"
   */
  selectionMode?: SegmentedButtonSelectionMode | keyof typeof SegmentedButtonSelectionMode;
}

interface SegmentedButtonDomRef extends Required<SegmentedButtonAttributes>, Ui5DomRef {
  /**
   * Returns an array of the currently selected items.
   *
   * **Note:** Available since [v1.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.14.0) of **@ui5/webcomponents**.
   */
  readonly selectedItems: Array<ISegmentedButtonItem>;
}

interface SegmentedButtonPropTypes
  extends SegmentedButtonAttributes,
    Omit<CommonProps, keyof SegmentedButtonAttributes | 'children' | 'onSelectionChange'> {
  /**
   * Defines the items of `SegmentedButton`.
   *
   * **Note:** Multiple items are allowed.
   *
   * **Note:** Use the `SegmentedButtonItem` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the selected item changes.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onSelectionChange?: (event: Ui5CustomEvent<SegmentedButtonDomRef, SegmentedButtonSelectionChangeEventDetail>) => void;
}

/**
 * The `SegmentedButton` shows a group of items. When the user clicks or taps
 * one of the items, it stays in a pressed state. It automatically resizes the items
 * to fit proportionally within the component. When no width is set, the component uses the available width.
 *
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const SegmentedButton = withWebComponent<SegmentedButtonPropTypes, SegmentedButtonDomRef>(
  'ui5-segmented-button',
  ['accessibleDescription', 'accessibleDescriptionRef', 'accessibleName', 'accessibleNameRef', 'selectionMode'],
  [],
  [],
  ['selection-change'],
);

SegmentedButton.displayName = 'SegmentedButton';

export { SegmentedButton };
export type { SegmentedButtonDomRef, SegmentedButtonPropTypes };
