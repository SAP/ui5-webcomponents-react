'use client';

import '@ui5/webcomponents-fiori/dist/SortItem.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ViewSettingsDialog" target="_blank">UI5 Web Components Storybook</ui5-link>
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
