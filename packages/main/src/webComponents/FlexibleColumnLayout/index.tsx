'use client';

import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';
import type { FlexibleColumnLayoutLayoutChangeEventDetail } from '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';
import { FCLLayout } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface FlexibleColumnLayoutAttributes {
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
  /**
   * An object of strings that defines additional accessibility roles for further customization. It supports the following fields:
   * - `startColumnRole`: the accessibility role for the `startColumn`
   * - `startArrowContainerRole`: the accessibility role for the first arrow container (between the `begin` and `mid` columns)
   * - `midColumnRole`: the accessibility role for the `midColumn`
   * - `endArrowContainerRole`: the accessibility role for the second arrow container (between the `mid` and `end` columns)
   * - `endColumnRole`: the accessibility role for the `endColumn`
   */
  accessibilityRoles: Record<string, unknown>;
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
  accessibilityTexts: Record<string, unknown>;
}

export interface FlexibleColumnLayoutPropTypes extends FlexibleColumnLayoutAttributes, CommonProps {
  /**
   * Defines the content in the end column.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="endColumn"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  endColumn?: UI5WCSlotsNode;
  /**
   * Defines the content in the middle column.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="midColumn"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  midColumn?: UI5WCSlotsNode;
  /**
   * Defines the content in the start column.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="startColumn"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  startColumn?: UI5WCSlotsNode;
  /**
   * Fired when the layout changes via user interaction by clicking the arrows or by changing the component size due to resizing.
   */
  onLayoutChange?: (
    event: Ui5CustomEvent<FlexibleColumnLayoutDomRef, FlexibleColumnLayoutLayoutChangeEventDetail>
  ) => void;
}

/**
 * The `FlexibleColumnLayout` implements the list-detail-detail paradigm by displaying up to three pages in separate columns. There are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-FlexibleColumnLayout)
 */
const FlexibleColumnLayout = withWebComponent<FlexibleColumnLayoutPropTypes, FlexibleColumnLayoutDomRef>(
  'ui5-flexible-column-layout',
  ['layout'],
  ['hideArrows'],
  ['endColumn', 'midColumn', 'startColumn'],
  ['layout-change'],
  () => import('@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js')
);

FlexibleColumnLayout.displayName = 'FlexibleColumnLayout';

FlexibleColumnLayout.defaultProps = {
  layout: FCLLayout.OneColumn
};

export { FlexibleColumnLayout };
