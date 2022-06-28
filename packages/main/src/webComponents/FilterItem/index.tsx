import '@ui5/webcomponents-fiori/dist/FilterItem.js';
import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface FilterItemAttributes {
  /**
   * Defines the text of the component.
   */
  text?: string;
}

export interface FilterItemDomRef extends FilterItemAttributes, Ui5DomRef {}

export interface FilterItemPropTypes extends FilterItemAttributes, CommonProps {
  /**
   * Defines the `values` list.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  values?: ReactNode | ReactNode[];
}

/**
 *
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/FilterItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const FilterItem = withWebComponent<FilterItemPropTypes, FilterItemDomRef>(
  'ui5-filter-item',
  ['text'],
  [],
  ['values'],
  []
);

FilterItem.displayName = 'FilterItem';

export { FilterItem };
