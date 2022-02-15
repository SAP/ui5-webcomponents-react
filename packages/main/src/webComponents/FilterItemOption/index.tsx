import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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

export interface FilterItemOptionPropTypes extends FilterItemOptionAttributes, CommonProps {
  /**
   * Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.
   *
   * __Note:__ This adds a rendering cycle to your component.
   */
  waitForDefine?: boolean;
}

/**
 *
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/FilterItemOption" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const FilterItemOption = withWebComponent<FilterItemOptionPropTypes, FilterItemOptionDomRef>(
  'ui5-filter-item-option',
  ['text', 'waitForDefine'],
  ['selected'],
  [],
  []
);

FilterItemOption.displayName = 'FilterItemOption';

export { FilterItemOption };
