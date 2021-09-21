import { FCLLayout } from '@ui5/webcomponents-react/lib/FCLLayout';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';
import { FC, ReactNode } from 'react';

export interface FlexibleColumnLayoutPropTypes extends WithWebComponentPropTypes {
  /**
   * An object of strings that defines several additional accessibility texts for even further customization. It supports the following fields:
   *
   * *   `startColumnAccessibleName`: the accessibility name for the `startColumn` region
   * *   `midColumnAccessibleName`: the accessibility name for the `midColumn` region
   * *   `endColumnAccessibleName`: the accessibility name for the `endColumn` region
   * *   `startArrowLeftText`: the text that the first arrow (between the `begin` and `mid` columns) will have when pointing to the left
   * *   `startArrowRightText`: the text that the first arrow (between the `begin` and `mid` columns) will have when pointing to the right
   * *   `endArrowLeftText`: the text that the second arrow (between the `mid` and `end` columns) will have when pointing to the left
   * *   `endArrowRightText`: the text that the second arrow (between the `mid` and `end` columns) will have when pointing to the right
   */
  accessibilityTexts?: Record<string, unknown>;
  /**
   * Defines the columns layout and their proportion.
   *
   * **Note:** The layout also depends on the screen size - one column for screens smaller than 900px, two columns between 900px and 1280px and three columns for sizes bigger than 1280px.
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
  layout?: FCLLayout;
  /**
   * Defines the visibility of the arrows, used for expanding and shrinking the columns.
   */
  noArrows?: boolean;
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
    event: CustomEvent<{
      layout: FCLLayout;
      columnLayout: unknown[];
      startColumnVisible: boolean;
      midColumnVisible: boolean;
      endColumnVisible: boolean;
      arrowsUsed: boolean;
      resize: boolean;
    }>
  ) => void;
}

/**
 * The `FlexibleColumnLayout` implements the master-detail-detail paradigm by displaying up to three pages in separate columns. There are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/FlexibleColumnLayout" target="_blank">UI5 Web Components Playground</a>
 */
const FlexibleColumnLayout: FC<FlexibleColumnLayoutPropTypes> = withWebComponent<FlexibleColumnLayoutPropTypes>(
  'ui5-flexible-column-layout',
  ['accessibilityTexts', 'layout'],
  ['noArrows'],
  ['endColumn', 'midColumn', 'startColumn'],
  ['layout-change']
);

FlexibleColumnLayout.displayName = 'FlexibleColumnLayout';

FlexibleColumnLayout.defaultProps = {
  layout: FCLLayout.OneColumn,
  noArrows: false
};

export { FlexibleColumnLayout };
