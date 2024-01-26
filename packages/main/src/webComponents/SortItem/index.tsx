'use client';

import '@ui5/webcomponents-fiori/dist/SortItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface SortItemAttributes {
  /**
   * Defines if the component is selected.
   */
  selected?: boolean;
  /**
   * Defines the text of the component.
   */
  text?: string;
}

export interface SortItemDomRef extends SortItemAttributes, Ui5DomRef {}

export interface SortItemPropTypes extends SortItemAttributes, CommonProps {}

/**
 *
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ViewSettingsDialog)
 */
const SortItem = withWebComponent<SortItemPropTypes, SortItemDomRef>(
  'ui5-sort-item',
  ['text'],
  ['selected'],
  [],
  [],
  () => import('@ui5/webcomponents-fiori/dist/SortItem.js')
);

SortItem.displayName = 'SortItem';

export { SortItem };
