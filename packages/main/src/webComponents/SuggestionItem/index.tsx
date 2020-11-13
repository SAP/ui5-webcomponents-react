import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/SuggestionItem';
import { FC } from 'react';

export interface SuggestionItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;
  /**
   * Defines the item to be displayed as a group item. <br><br> <b>Note:</b> When set, the other properties, such as <code>image</code>, <code>icon</code>, <code>description</code>, etc. will be omitted and only the <code>text</code> will be displayed.
   */
  group?: boolean;
  /**
   * Defines the <code>icon</code> source URI. <br><br> <b>Note:</b> SAP-icons font provides numerous buil-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the <code>icon</code> should be displayed in the beginning of the item or in the end. <br><br> <b>Note:</b> If <code>image</code> is set, the <code>icon</code> would be displayed after the <code>image</code>.
   */
  iconEnd?: boolean;
  /**
   * Defines the <code>image</code> source URI. <br><br> <b>Note:</b> The <code>image</code> would be displayed in the beginning of the item.
   */
  image?: string;
  /**
   * Defines the <code>info</code>, displayed in the end of the item.
   */
  info?: string;
  /**
   * Defines the state of the <code>info</code>. <br><br> Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code> and <code>"Erorr"</code>.
   */
  infoState?: ValueState;
  /**
   * Defines the text of the <code>SuggestionItem</code>.
   */
  text?: string;
  /**
   * Defines the visual indication and behavior of the item. Available options are <code>Active</code> (by default), <code>Inactive</code> and <code>Detail</code>. <br><br> <b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press and hover, while when <code>Inactive</code> or <code>Detail</code> - will not.
   */
  type?: ListItemTypes;
}

/**
 * The <code>SuggestionItem</code> represents the suggestion item of the <code>Input</code>
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SuggestionItem" target="_blank">UI5 Web Components Playground</a>
 */
const SuggestionItem: FC<SuggestionItemPropTypes> = withWebComponent<SuggestionItemPropTypes>(
  'ui5-suggestion-item',
  ['description', 'icon', 'image', 'info', 'infoState', 'text', 'type'],
  ['group', 'iconEnd'],
  [],
  []
);

SuggestionItem.displayName = 'SuggestionItem';

SuggestionItem.defaultProps = {
  group: false,
  iconEnd: false,
  infoState: ValueState.None,
  type: ListItemTypes.Active
};

export { SuggestionItem };
