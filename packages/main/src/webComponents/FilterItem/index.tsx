import { ListItemType } from '@ui5/webcomponents-react/dist/ListItemType';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { ReactNode } from 'react';

import '@ui5/webcomponents-fiori/dist/FilterItem.js';

export interface FilterItemPropTypes extends CommonProps {
  /**
   * Defines the text of the component.
   */
  text?: string;
  /**
   * Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive` and `Detail`.
   *
   * **Note:** When set to `Active`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.
   */
  type?: ListItemType | keyof typeof ListItemType;
  /**
   * Defines the selected state of the `ListItem`.
   */
  selected?: boolean;
  /**
   * Defines the `values` list.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  values?: ReactNode | ReactNode[];
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: Ui5CustomEvent<HTMLElement>) => void;
}

/**
 *
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/FilterItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const FilterItem = withWebComponent<FilterItemPropTypes>(
  'ui5-filter-item',
  ['text', 'type'],
  ['selected'],
  ['values'],
  ['detail-click']
);

FilterItem.displayName = 'FilterItem';

FilterItem.defaultProps = {
  type: ListItemType.Active,
  selected: false
};

export { FilterItem };
