'use client';

import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
import { MouseEventHandler } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface ShellBarItemAttributes {
  /**
   * Defines the count displayed in the top-right corner.
   */
  count?: string;
  /**
   * Defines the name of the item's icon.
   */
  icon?: string;
  /**
   * Defines the item text.
   */
  text?: string;
}

export interface ShellBarItemDomRef extends ShellBarItemAttributes, Ui5DomRef {}

export interface ShellBarItemPropTypes extends ShellBarItemAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Fired, when the item is pressed.
   */
  onClick?: MouseEventHandler<ShellBarItemDomRef>;
}

/**
 * The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ShellBar" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ShellBarItem = withWebComponent<ShellBarItemPropTypes, ShellBarItemDomRef>(
  'ui5-shellbar-item',
  ['count', 'icon', 'text'],
  [],
  [],
  ['click']
);

ShellBarItem.displayName = 'ShellBarItem';

export { ShellBarItem };
