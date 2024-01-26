'use client';

import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

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
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ViewSettingsDialog)
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
