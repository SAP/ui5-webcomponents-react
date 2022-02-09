import { ReactNode } from 'react';
import { FCLLayout } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';

interface FlexibleColumnLayoutAttributes {
  /**
   * An object of strings that defines additional accessibility roles for further customization. It supports the following fields:
   *  - `startColumnRole`: the accessibility role for the `startColumn`
   *  - `startArrowContainerRole`: the accessibility role for the first arrow container (between the `begin` and `mid` columns)
   *  - `midColumnRole`: the accessibility role for the `midColumn`
   *  - `endArrowContainerRole`: the accessibility role for the second arrow container (between the `mid` and `end` columns)
   *  - `endColumnRole`: the accessibility role for the `endColumn`
   */
  accessibilityRoles?: Record<string, unknown>;
  /**
   * An object of strings that defines several additional accessibility texts for even further customization. It supports the following fields:
   * - `startColumnAccessibleName`: the accessibility name for the `startColumn` region
   * - `midColumnAccessibleName`: the accessibility name for the `midColumn` region
   * - `endColumnAccessibleName`: the accessibility name for the `endColumn` region
   * - `startArrowLeftText`: the text that the first arrow (between the `begin` and `mid` columns) will have when pointing to the left
   * - `startArrowRightText`: the text that the first arrow (between the `begin` and `mid` columns) will have when pointing to the right
   * - `endArrowLeftText`: the text that the second arrow (between the `mid` and `end` columns) will have when pointing to the left
   * - `endArrowRightText`: the text that the second arrow (between the `mid` and `end` columns) will have when pointing to the right
   * - `startArrowContainerAccessibleName`: the text that the first arrow container (between the `begin` and `mid` columns) will have as `aria-label`
   * - `endArrowContainerAccessibleName`: the text that the second arrow container (between the `mid` and `end` columns) will have as `aria-label`
   */
  accessibilityTexts?: Record<string, unknown>;
  /**
   * Defines the visibility of the arrows, used for expanding and shrinking the columns.
   */
  hideArrows?: boolean;
  /**
   * Defines the columns layout and their proportion.
   *
   * **Note:** The layout also depends on the screen size - one column for screens smaller than 599px, two columns between 599px and 1023px and three columns for sizes bigger than 1023px.
   *
   * Available options are:
   *
   * *   `OneColumn`
   * *   `TwoColumnsStartExpanded`
   * *   `TwoColumnsMidExpanded`
   * *   `ThreeColumnsMidExpanded`
   * *   `ThreeColumnsEndExpanded`
   * *   `ThreeColumnsStartExpandedEndHidden`
   * *   `ThreeColumnsMidExpandedEndHidden`
   * *   `MidColumnFullScreen`
   * *   `EndColumnFullScreen`
   *
   *
   *
   * **For example:** layout=`TwoColumnsStartExpanded` means the layout will display up to two columns in 67%/33% proportion.
   */
  layout?: FCLLayout | keyof typeof FCLLayout;
}

export interface FlexibleColumnLayoutDomRef extends FlexibleColumnLayoutAttributes, Ui5DomRef {
  /**
   * Returns the current column layout, based on both the `layout` property and the screen size.
   *
   * **For example:** \["67%", "33%", 0\], \["100%", 0, 0\], \["25%", "50%", "25%"\], etc, where the numbers represents the width of the start, middle and end columns.
   */
  readonly columnLayout: unknown[];
  /**
   * Returns if the `end` column is visible.
   */
  readonly endColumnVisible: boolean;
  /**
   * Returns if the `middle` column is visible.
   */
  readonly midColumnVisible: boolean;
  /**
   * Returns if the `start` column is visible.
   */
  readonly startColumnVisible: boolean;
  /**
   * Returns the number of currently visible columns.
   */
  readonly visibleColumns: number;
}

export interface FlexibleColumnLayoutPropTypes extends FlexibleColumnLayoutAttributes, CommonProps {
  /**
   * Defines the content in the end column.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  endColumn?: ReactNode;
  /**
   * Defines the content in the middle column.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  midColumn?: ReactNode;
  /**
   * Defines the content in the start column.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  startColumn?: ReactNode;
  /**
   * Fired when the layout changes via user interaction by clicking the arrows or by changing the component size due to resizing.
   */
  onLayoutChange?: (
    event: Ui5CustomEvent<
      HTMLElement,
      {
        layout: FCLLayout | keyof typeof FCLLayout;
        columnLayout: unknown[];
        startColumnVisible: boolean;
        midColumnVisible: boolean;
        endColumnVisible: boolean;
        arrowsUsed: boolean;
        resize: boolean;
      }
    >
  ) => void;
}

/**
 * The `FlexibleColumnLayout` implements the master-detail-detail paradigm by displaying up to three pages in separate columns. There are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/FlexibleColumnLayout" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const FlexibleColumnLayout = withWebComponent<FlexibleColumnLayoutPropTypes, FlexibleColumnLayoutDomRef>(
  'ui5-flexible-column-layout',
  ['accessibilityRoles', 'accessibilityTexts', 'layout'],
  ['hideArrows'],
  ['endColumn', 'midColumn', 'startColumn'],
  ['layout-change']
);

FlexibleColumnLayout.displayName = 'FlexibleColumnLayout';

FlexibleColumnLayout.defaultProps = {
  layout: FCLLayout.OneColumn
};

export { FlexibleColumnLayout };
