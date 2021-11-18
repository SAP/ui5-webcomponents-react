import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';

import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';

interface FilterItemOptionAttributes {
  /**
   * Defines whether the option is selected
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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/FilterItemOption" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const FilterItemOption = withWebComponent<FilterItemOptionPropTypes, FilterItemOptionDomRef>(
  'ui5-filter-item-option',
  ['text'],
  ['selected'],
  [],
  []
);

FilterItemOption.displayName = 'FilterItemOption';

export { FilterItemOption };
