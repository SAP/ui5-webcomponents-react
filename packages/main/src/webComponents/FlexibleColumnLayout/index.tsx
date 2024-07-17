'use client';

import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';
import type {
  FCLAccessibilityAttributes,
  FlexibleColumnLayoutColumnLayout,
  FlexibleColumnLayoutLayoutChangeEventDetail
} from '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';
import type FCLLayout from '@ui5/webcomponents-fiori/dist/types/FCLLayout.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface FlexibleColumnLayoutAttributes {
  /**
   * Defines additional accessibility attributes on different areas of the component.
   *
   * The accessibilityAttributes object has the following fields,
   * where each field is an object supporting one or more accessibility attributes:
   *
   *  - **startColumn**: `startColumn.role` and `startColumn.name`.
   *  - **midColumn**: `midColumn.role` and `midColumn.name`.
   *  - **endColumn**: `endColumn.role` and `endColumn.name`.
   *  - **startSeparator**: `startSeparator.role` and `startSeparator.name`.
   *  - **endSeparator**: `endSeparator.role` and `endSeparator.name`.
   *
   * The accessibility attributes support the following values:
   *
   * - **role**: Defines the accessible ARIA landmark role of the area.
   * Accepts the following values: `none`, `complementary`, `contentinfo`, `main` or `region`.
   *
   * - **name**: Defines the accessible ARIA name of the area.
   * Accepts any string.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   * @default {}
   */
  accessibilityAttributes?: FCLAccessibilityAttributes;

  /**
   * Specifies if the user is allowed to change the columns layout by dragging the separator between the columns.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  disableResizing?: boolean;

  /**
   * Defines the columns layout and their proportion.
   *
   * **Note:** The layout also depends on the screen size - one column for screens smaller than 599px,
   * two columns between 599px and 1023px and three columns for sizes bigger than 1023px.
   *
   * **For example:** layout=`TwoColumnsStartExpanded` means the layout will display up to two columns
   * in 67%/33% proportion.
   * @default "OneColumn"
   */
  layout?: FCLLayout | keyof typeof FCLLayout;
}

interface FlexibleColumnLayoutDomRef extends Required<FlexibleColumnLayoutAttributes>, Ui5DomRef {
  /**
   * Returns the current column layout, based on both the `layout` property and the screen size.
   *
   * **For example:** ["67%", "33%", 0], ["100%", 0, 0], ["25%", "50%", "25%"], etc,
   * where the numbers represents the width of the start, middle and end columns.
   */
  readonly columnLayout: FlexibleColumnLayoutColumnLayout | undefined;

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

interface FlexibleColumnLayoutPropTypes
  extends FlexibleColumnLayoutAttributes,
    Omit<
      CommonProps,
      keyof FlexibleColumnLayoutAttributes | 'endColumn' | 'midColumn' | 'startColumn' | 'onLayoutChange'
    > {
  /**
   * Defines the content in the end column.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="endColumn"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  endColumn?: UI5WCSlotsNode;

  /**
   * Defines the content in the middle column.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="midColumn"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  midColumn?: UI5WCSlotsNode;

  /**
   * Defines the content in the start column.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="startColumn"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  startColumn?: UI5WCSlotsNode;
  /**
   * Fired when the layout changes via user interaction by dragging the separators
   * or by changing the component size due to resizing.
   */
  onLayoutChange?: (
    event: Ui5CustomEvent<FlexibleColumnLayoutDomRef, FlexibleColumnLayoutLayoutChangeEventDetail>
  ) => void;
}

/**
 * The `FlexibleColumnLayout` implements the list-detail-detail paradigm by displaying up to three pages in separate columns.
 * There are several possible layouts that can be changed either with the component API, or by dragging the column separators.
 *
 * ### Usage
 *
 * Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.).
 * The Component is flexible in a sense that the application can focus the user's attention on one particular column.
 *
 * ### Responsive Behavior
 *
 * The `FlexibleColumnLayout` automatically displays the maximum possible number of columns based on `layout` property and the window size.
 * The component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px,
 * and 3 columns for sizes bigger than 1023px.
 *
 * **Note:** When the component displays more than one column, the minimal width of each column is 312px. Consequently, when the user drags a column separator to resize the columns, the minimal allowed width of any resized column is 312px.
 *
 * ### Keyboard Handling
 *
 * #### Basic Navigation
 *
 * When a column separator is focused,  the following keyboard
 * shortcuts allow the user to resize the columns and change the layout:
 *
 * - [Shift] + [Left] or [Shift] + [Right] - Moves the separator to the left or right, which resizes the columns accordingly.
 * - [Left] or [Right] - Moves the separator to the left or right with a bigger step, which resizes the columns accordingly.
 * - [Home] - Moves the separator to the start position.
 * - [End] - Moves the separator to the end position.
 * - This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const FlexibleColumnLayout = withWebComponent<FlexibleColumnLayoutPropTypes, FlexibleColumnLayoutDomRef>(
  'ui5-flexible-column-layout',
  ['accessibilityAttributes', 'layout'],
  ['disableResizing'],
  ['endColumn', 'midColumn', 'startColumn'],
  ['layout-change'],
  () => import('@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js')
);

FlexibleColumnLayout.displayName = 'FlexibleColumnLayout';

export { FlexibleColumnLayout };
export type { FlexibleColumnLayoutDomRef, FlexibleColumnLayoutPropTypes };
