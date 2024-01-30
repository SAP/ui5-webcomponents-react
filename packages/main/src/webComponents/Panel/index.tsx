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
   * Sets the accessible ARIA role of the component. Depending on the usage, you can change the role from the default `Form` to `Region` or `Complementary`.
   * @default "Form"
   */
  accessibleRole?: PanelAccessibleRole | keyof typeof PanelAccessibleRole;

  /**
   * Indicates whether the component is collapsed and only the header is displayed.
   * @default false
   */
  collapsed?: boolean;

  /**
   * Determines whether the component is in a fixed state that is not expandable/collapsible by user interaction.
   * @default false
   */
  fixed?: boolean;

  /**
   * Defines the "aria-level" of component heading, set by the `headerText`.
   * @default "H2"
   */
  headerLevel?: TitleLevel | keyof typeof TitleLevel;

  /**
   * This property is used to set the header text of the component. The text is visible in both expanded and collapsed states.
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
   * Indicates whether the Panel header is sticky or not. If stickyHeader is set to true, then whenever you scroll the content or the application, the header of the panel will be always visible and a solid color will be used for its design.
   * @default false
   */
  stickyHeader?: boolean;
}

interface PanelDomRef extends PanelAttributes, Ui5DomRef {}

interface PanelPropTypes extends PanelAttributes, Omit<CommonProps, keyof PanelAttributes | 'onToggle'> {
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
 * The `Panel` component is a container which has a header and a content area and is used for grouping and displaying information. It can be collapsed to save space on the screen.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
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
