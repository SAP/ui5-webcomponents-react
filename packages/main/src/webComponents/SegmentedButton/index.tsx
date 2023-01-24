'use client';

import '@ui5/webcomponents/dist/SegmentedButton.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface SegmentedButtonAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
}

export interface SegmentedButtonDomRef extends SegmentedButtonAttributes, Ui5DomRef {
  /**
   * Currently selected item.
   */
  readonly selectedItem: ReactNode;
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
  onSelectionChange?: (event: Ui5CustomEvent<SegmentedButtonDomRef, { selectedItem: HTMLElement }>) => void;
}

/**
 * The `SegmentedButton` shows a group of items. When the user clicks or taps one of the items, it stays in a pressed state. It automatically resizes the items to fit proportionally within the component. When no width is set, the component uses the available width.
 *
 * **Note:** There can be just one selected `item` at a time.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButton" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SegmentedButton = withWebComponent<SegmentedButtonPropTypes, SegmentedButtonDomRef>(
  'ui5-segmented-button',
  ['accessibleName'],
  [],
  [],
  ['selection-change']
);

SegmentedButton.displayName = 'SegmentedButton';

export { SegmentedButton };
