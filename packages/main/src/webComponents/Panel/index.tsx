'use client';

import '@ui5/webcomponents/dist/Panel.js';
import type PanelAccessibleRole from '@ui5/webcomponents/dist/types/PanelAccessibleRole.js';
import type TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface PanelAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;

  /**
   * Sets the accessible ARIA role of the component.
   * Depending on the usage, you can change the role from the default `Form`
   * to `Region` or `Complementary`.
   * @default "Form"
   */
  accessibleRole?: PanelAccessibleRole | keyof typeof PanelAccessibleRole;

  /**
   * Indicates whether the component is collapsed and only the header is displayed.
   * @default false
   */
  collapsed?: boolean;

  /**
   * Determines whether the component is in a fixed state that is not
   * expandable/collapsible by user interaction.
   * @default false
   */
  fixed?: boolean;

  /**
   * Defines the "aria-level" of component heading,
   * set by the `headerText`.
   * @default "H2"
   */
  headerLevel?: TitleLevel | keyof typeof TitleLevel;

  /**
   * This property is used to set the header text of the component.
   * The text is visible in both expanded and collapsed states.
   *
   * **Note:** This property is overridden by the `header` slot.
   */
  headerText?: string;

  /**
   * Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.
   * @default false
   */
  noAnimation?: boolean;

  /**
   * Indicates whether the Panel header is sticky or not.
   * If stickyHeader is set to true, then whenever you scroll the content or
   * the application, the header of the panel will be always visible and
   * a solid color will be used for its design.
   * @default false
   */
  stickyHeader?: boolean;
}

interface PanelDomRef extends Required<PanelAttributes>, Ui5DomRef {}

interface PanelPropTypes
  extends PanelAttributes,
    Omit<CommonProps, keyof PanelAttributes | 'children' | 'header' | 'onToggle'> {
  /**
   * Defines the content of the component. The content is visible only when the component is expanded.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the component header area.
   *
   * **Note:** When a header is provided, the `headerText` property is ignored.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired when the component is expanded/collapsed by user interaction.
   */
  onToggle?: (event: Ui5CustomEvent<PanelDomRef>) => void;
}

/**
 * The `Panel` component is a container which has a header and a
 * content area and is used
 * for grouping and displaying information. It can be collapsed to save space on the screen.
 *
 * ### Guidelines:
 *
 * - Nesting two or more panels is not recommended.
 * - Do not stack too many panels on one page.
 *
 * ### Structure
 * The panel's header area consists of a title bar with a header text or custom header.
 *
 * The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.
 *
 * The custom header can be set through the `header` slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.
 *
 * The content area can contain an arbitrary set of controls.
 *
 * **Note:** The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.
 *
 * ### Responsive Behavior
 *
 * - If the width of the panel is set to 100% (default), the panel and its children are
 * resized responsively,
 * depending on its parent container.
 * - If the panel has a fixed height, it will take up the space even if the panel is
 * collapsed.
 * - When the panel is expandable (the `fixed` property is set to `false`),
 * an arrow icon (pointing to the right) appears in front of the header.
 * - When the animation is activated, expand/collapse uses a smooth animation to open or
 * close the content area.
 * - When the panel expands/collapses, the arrow icon rotates 90 degrees
 * clockwise/counter-clockwise.
 *
 * ### Keyboard Handling
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
const Panel = withWebComponent<PanelPropTypes, PanelDomRef>(
  'ui5-panel',
  ['accessibleName', 'accessibleRole', 'headerLevel', 'headerText'],
  ['collapsed', 'fixed', 'noAnimation', 'stickyHeader'],
  ['header'],
  ['toggle'],
  () => import('@ui5/webcomponents/dist/Panel.js')
);

Panel.displayName = 'Panel';

export { Panel };
export type { PanelDomRef, PanelPropTypes };
