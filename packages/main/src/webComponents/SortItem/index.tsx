import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/SortItem.js';
import { FC } from 'react';

export interface SortItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the component is selected.
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
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SortItem" target="_blank">UI5 Web Components Playground</a>
 */
const SortItem: FC<SortItemPropTypes> = withWebComponent<SortItemPropTypes>(
  'ui5-sort-item',
  ['text'],
  ['selected'],
  [],
  []
);

SortItem.displayName = 'SortItem';

SortItem.defaultProps = {
  selected: false
};

export { SortItem };
