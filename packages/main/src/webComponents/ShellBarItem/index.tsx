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
  onClick?: MouseEventHandler<HTMLElement>;
  /**
   * Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.
   *
   * __Note:__ This adds a rendering cycle to your component.
   */
  waitForDefine?: boolean;
}

/**
 * The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ShellBarItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ShellBarItem = withWebComponent<ShellBarItemPropTypes, ShellBarItemDomRef>(
  'ui5-shellbar-item',
  ['count', 'icon', 'text', 'waitForDefine'],
  [],
  [],
  ['click']
);

ShellBarItem.displayName = 'ShellBarItem';

export { ShellBarItem };
