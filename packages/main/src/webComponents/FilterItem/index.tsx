import '@ui5/webcomponents-fiori/dist/FilterItem.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

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
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="values"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them in the body of the component, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  values?: UI5WCSlotsNode | UI5WCSlotsNode[];
}

/**
 *
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>
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
