import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/FilterItem.js';
import { FC, ReactNode } from 'react';

export interface FilterItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text of the component.
   */
  text?: string;
  /**
   * Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive` and `Detail`.
   *
   * **Note:** When set to `Active`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.
   */
  type?: ListItemTypes;
  /**
   * Defines the selected state of the `ListItem`.
   */
  selected?: boolean;
  /**
   * Defines the `values` list.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterItemOption` in order to preserve the intended design.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  values?: ReactNode | ReactNode[];
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: CustomEvent) => void;
}

/**
 *
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/FilterItem" target="_blank">UI5 Web Components Playground</a>
 */
const FilterItem: FC<FilterItemPropTypes> = withWebComponent<FilterItemPropTypes>(
  'ui5-filter-item',
  ['text', 'type'],
  ['selected'],
  ['values'],
  ['detail-click']
);

FilterItem.displayName = 'FilterItem';

FilterItem.defaultProps = {
  type: ListItemTypes.Active,
  selected: false
};

export { FilterItem };
