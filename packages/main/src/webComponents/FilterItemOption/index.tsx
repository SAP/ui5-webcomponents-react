import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';
import { FC } from 'react';

export interface FilterItemOptionPropTypes extends WithWebComponentPropTypes {
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
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/FilterItemOption" target="_blank">UI5 Web Components Playground</a>
 */
const FilterItemOption: FC<FilterItemOptionPropTypes> = withWebComponent<FilterItemOptionPropTypes>(
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
