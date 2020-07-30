import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC } from 'react';

export interface SideNavigationSubItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines whether the subitem is selected
   */
  selected?: boolean;
  /**
   * Defines the text of the item.
   */
  text?: string;
}

/**
 * <code>import { SideNavigationSubItem } from '@ui5/webcomponents-react/lib/SideNavigationSubItem';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigationSubItem" target="_blank">UI5 Web Components Playground</a>
 */
const SideNavigationSubItem: FC<SideNavigationSubItemPropTypes> = withWebComponent<SideNavigationSubItemPropTypes>(
  'ui5-side-navigation-sub-item',
  ['text'],
  ['selected'],
  [],
  []
);

SideNavigationSubItem.displayName = 'SideNavigationSubItem';

SideNavigationSubItem.defaultProps = {
  selected: false
};

export { SideNavigationSubItem };
