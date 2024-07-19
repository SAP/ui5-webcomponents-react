'use client';

import '@ui5/webcomponents-fiori/dist/FilterItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface FilterItemAttributes {
  /**
   * Defines the additional text of the component.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;
}

interface FilterItemDomRef extends Required<FilterItemAttributes>, Ui5DomRef {}

interface FilterItemPropTypes extends FilterItemAttributes, Omit<CommonProps, keyof FilterItemAttributes | 'values'> {
  /**
   * Defines the `values` list.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="values"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  values?: UI5WCSlotsNode;
}

/**
 * ### Usage
 *
 * For the `FilterItem`
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const FilterItem = withWebComponent<FilterItemPropTypes, FilterItemDomRef>(
  'ui5-filter-item',
  ['additionalText', 'text'],
  [],
  ['values'],
  [],
  () => import('@ui5/webcomponents-fiori/dist/FilterItem.js')
);

FilterItem.displayName = 'FilterItem';

export { FilterItem };
export type { FilterItemDomRef, FilterItemPropTypes };
