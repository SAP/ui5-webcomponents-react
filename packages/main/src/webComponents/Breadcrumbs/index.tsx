import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { BreadcrumbsDesign } from '@ui5/webcomponents-react/dist/BreadcrumbsDesign';
import { BreadcrumbsSeparatorStyle } from '@ui5/webcomponents-react/dist/BreadcrumbsSeparatorStyle';
import { ReactNode } from 'react';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';

import '@ui5/webcomponents/dist/Breadcrumbs';

export interface BreadcrumbsPropTypes extends CommonProps {
  /**
   * Defines the visual indication and behavior of the breadcrumbs. Available options are `Standard` (by default) and `NoCurrentPage`.
   *
   * **Note:** The `Standard` breadcrumbs show the current page as the last item in the trail. The last item contains only plain text and is not a link.
   */
  design?: BreadcrumbsDesign;
  /**
   * Determines the visual style of the separator between the breadcrumb items.
   *
   * Available options are:
   *
   * *   `Slash`
   * *   `BackSlash`
   * *   `DoubleBackSlash`
   * *   `DoubleGreaterThan`
   * *   `DoubleSlash`
   * *   `GreaterThan`
   */
  separatorStyle?: BreadcrumbsSeparatorStyle;
  /**
   * Defines the component items.
   *
   * **Note:** Use the `BreadcrumbsItem` component to define the desired items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fires when a `BreadcrumbsItem` is clicked.
   */
  onItemClick?: (event: Ui5CustomEvent<HTMLElement, { item: ReactNode }>) => void;
}

/**
 * Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path. It helps the user to be aware of their location within the application and allows faster navigation.
 *
 * The last three steps can be accessed as links directly, while the remaining links prior to them are available in a drop-down menu.
 *
 * You can choose the type of separator to be used from a number of predefined options.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Breadcrumbs" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Breadcrumbs = withWebComponent<BreadcrumbsPropTypes>(
  'ui5-breadcrumbs',
  ['design', 'separatorStyle'],
  [],
  [],
  ['item-click']
);

Breadcrumbs.displayName = 'Breadcrumbs';

Breadcrumbs.defaultProps = {
  design: BreadcrumbsDesign.Standard,
  separatorStyle: BreadcrumbsSeparatorStyle.Slash
};

export { Breadcrumbs };
