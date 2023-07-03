'use client';

import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface FilterItemOptionAttributes {
  /**
   * Defines if the component is selected.
   */
  selected?: boolean;
  /**
   * Defines the text of the component.
   */
  text?: string;
}

export interface FilterItemOptionDomRef extends FilterItemOptionAttributes, Ui5DomRef {}

export interface FilterItemOptionPropTypes extends FilterItemOptionAttributes, CommonProps {}

/**
 *
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ViewSettingsDialog" target="_blank">UI5 Web Components Storybook</ui5-link>
 */
const FilterItemOption = withWebComponent<FilterItemOptionPropTypes, FilterItemOptionDomRef>(
  'ui5-filter-item-option',
  ['text'],
  ['selected'],
  [],
  [],
  () => import('@ui5/webcomponents-fiori/dist/FilterItemOption.js')
);

FilterItemOption.displayName = 'FilterItemOption';

export { FilterItemOption };
