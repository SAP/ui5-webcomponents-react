import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';

import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';

export interface FilterItemOptionPropTypes extends CommonProps {
  /**
   * Defines whether the option is selected
   */
  selected?: boolean;
  /**
   * Defines the text of the component.
   */
  text?: string;
}

/**
 *
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/FilterItemOption" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const FilterItemOption = withWebComponent<FilterItemOptionPropTypes>(
  'ui5-filter-item-option',
  ['text'],
  ['selected'],
  [],
  []
);

FilterItemOption.displayName = 'FilterItemOption';

FilterItemOption.defaultProps = {
  selected: false
};

export { FilterItemOption };
