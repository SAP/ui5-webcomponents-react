import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';

import '@ui5/webcomponents-fiori/dist/SortItem.js';

export interface SortItemPropTypes extends CommonProps {
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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SortItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SortItem = withWebComponent<SortItemPropTypes>('ui5-sort-item', ['text'], ['selected'], [], []);

SortItem.displayName = 'SortItem';

SortItem.defaultProps = {
  selected: false
};

export { SortItem };
