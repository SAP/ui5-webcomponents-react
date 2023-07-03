'use client';

import '@ui5/webcomponents/dist/SegmentedButton.js';
import type { SegmentedButtonSelectionChangeEventDetail } from '@ui5/webcomponents/dist/SegmentedButton.js';
import type { ReactNode } from 'react';
import { SegmentedButtonMode } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface SegmentedButtonAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Defines the component selection mode.
   *
   * **The available values are:**
   *
   * *   `SingleSelect`
   * *   `MultiSelect`
   */
  mode?: SegmentedButtonMode | keyof typeof SegmentedButtonMode;
}

export interface SegmentedButtonDomRef extends SegmentedButtonAttributes, Ui5DomRef {
  /**
   * Currently selected item.
   *
   * @deprecated This method will be removed in the next major release. Please use the <code>selectedItems</code> property instead.
   */
  readonly selectedItem: ReactNode;
  /**
   * Returns an array of the currently selected items.
   */
  readonly selectedItems: ReactNode | ReactNode[];
}

export interface SegmentedButtonPropTypes extends SegmentedButtonAttributes, CommonProps {
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
   */
  onSelectionChange?: (event: Ui5CustomEvent<SegmentedButtonDomRef, SegmentedButtonSelectionChangeEventDetail>) => void;
}

/**
 * The `SegmentedButton` shows a group of items. When the user clicks or taps one of the items, it stays in a pressed state. It automatically resizes the items to fit proportionally within the component. When no width is set, the component uses the available width.
 *
 * **Note:** There can be just one selected `item` at a time.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-SegmentedButton" target="_blank">UI5 Web Components Storybook</ui5-link>
 */
const SegmentedButton = withWebComponent<SegmentedButtonPropTypes, SegmentedButtonDomRef>(
  'ui5-segmented-button',
  ['accessibleName', 'mode'],
  [],
  [],
  ['selection-change'],
  () => import('@ui5/webcomponents/dist/SegmentedButton.js')
);

SegmentedButton.displayName = 'SegmentedButton';

SegmentedButton.defaultProps = {
  mode: SegmentedButtonMode.SingleSelect
};

export { SegmentedButton };
