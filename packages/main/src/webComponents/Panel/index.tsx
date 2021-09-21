import { PanelAccessibleRoles } from '@ui5/webcomponents-react/lib/PanelAccessibleRoles';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Panel.js';
import { FC, ReactNode } from 'react';

export interface PanelPropTypes extends WithWebComponentPropTypes {
  /**
   * Sets the accessible aria name of the `Panel`.
   */
  accessibleName?: string;
  /**
   * Sets the accessible aria role of the component. Depending on the usage, you can change the role from the default `Form` to `Region` or `Complementary`.
   */
  accessibleRole?: PanelAccessibleRoles;
  /**
   * Indicates whether the `Panel` is collapsed and only the header is displayed.
   */
  collapsed?: boolean;
  /**
   * Determines whether the `Panel` is in a fixed state that is not expandable/collapsible by user interaction.
   */
  fixed?: boolean;
  /**
   * Defines the "aria-level" of `Panel` heading, set by the `headerText`.
   *
   * Available options are: `"H6"` to `"H1"`.
   */
  headerLevel?: TitleLevel;
  /**
   * This property is used to set the header text of the `Panel`. The text is visible in both expanded and collapsed states.
   *
   * **Note:** This property is overridden by the `header` slot.
   */
  headerText?: string;
  /**
   * Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled.
   */
  noAnimation?: boolean;
  /**
   * Determines the content of the `Panel`. The content is visible only when the `Panel` is expanded.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the `Panel` header area.
   *
   * **Note:** When a header is provided, the `headerText` property is ignored.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  header?: ReactNode | ReactNode[];
}

/**
 * The `Panel` component is a container which has a header and a content area and is used for grouping and displaying information. It can be collapsed to save space on the screen.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Panel" target="_blank">UI5 Web Components Playground</a>
 */
const Panel: FC<PanelPropTypes> = withWebComponent<PanelPropTypes>(
  'ui5-panel',
  ['accessibleName', 'accessibleRole', 'headerLevel', 'headerText'],
  ['collapsed', 'fixed', 'noAnimation'],
  ['header'],
  []
);

Panel.displayName = 'Panel';

Panel.defaultProps = {
  accessibleRole: PanelAccessibleRoles.Form,
  collapsed: false,
  fixed: false,
  headerLevel: TitleLevel.H2,
  noAnimation: false
};

export { Panel };
