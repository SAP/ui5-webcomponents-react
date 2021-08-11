import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/ViewSettingsDialog';
import { FC, ReactNode } from 'react';

export interface ViewSettingsDialogPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the initial sort order.
   */
  sortDescending?: boolean;
  /**
   * Defines the `sortItems` list.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  sortItems?: ReactNode | ReactNode[];
  /**
   * Fired when cancel button is activated.
   */
  onCancel?: (event: CustomEvent<{ sortOrder: string; sortBy: string }>) => void;
  /**
   * Fired when confirmation button is activated.
   */
  onConfirm?: (event: CustomEvent<{ sortOrder: string; sortBy: string }>) => void;
}

/**
 * The `ViewSettingsDialog` component helps the user to sort data within a list or a table. It consists of several lists like `Sort order` which is built-in and `Sort By` which must be provided by the developer. The selected options can be used to create sorters for the table. The `ViewSettingsDialog` interrupts the current application processing as it is the only focused UI element and the main screen is dimmed/blocked. The `ViewSettingsDialog` is modal, which means that user action is required before returning to the parent window is possible.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</a>
 */
const ViewSettingsDialog: FC<ViewSettingsDialogPropTypes> = withWebComponent<ViewSettingsDialogPropTypes>(
  'ui5-view-settings-dialog',
  [],
  ['sortDescending'],
  ['sortItems'],
  ['cancel', 'confirm']
);

ViewSettingsDialog.displayName = 'ViewSettingsDialog';

ViewSettingsDialog.defaultProps = {
  sortDescending: false
};

export { ViewSettingsDialog };
