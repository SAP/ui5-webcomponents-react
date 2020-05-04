import { PanelAccessibleRoles } from '@ui5/webcomponents-react/lib/PanelAccessibleRoles';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Panel';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface PanelPropTypes extends WithWebComponentPropTypes {
  /**
   * Sets the accessible aria role of the <code>ui5-panel</code>. Depending on the usage, you can change the role from the default <code>Form</code> to <code>Region</code> or <code>Complementary</code>.
   */
  accessibleRole?: PanelAccessibleRoles;
  /**
   * Indicates whether the <code>ui5-panel</code> is collapsed and only the header is displayed.
   */
  collapsed?: boolean;
  /**
   * Determines whether the <code>ui5-panel</code> is in a fixed state that is not expandable/collapsible by user interaction.
   */
  fixed?: boolean;
  /**
   * Defines the "aria-level" of <code>ui5-panel</code> heading, set by the <code>headerText</code>. <br><br> Available options are: <code>"H6"</code> to <code>"H1"</code>.
   */
  headerLevel?: TitleLevel;
  /**
   * This property is used to set the header text of the <code>ui5-panel</code>. The text is visible in both expanded and collapsed states. <br><br> <b>Note:</b> This property is overridden by the <code>header</code> slot.
   */
  headerText?: string;
  /**
   * Determines the content of the <code>ui5-panel</code>. The content is visible only when the <code>ui5-panel</code> is expanded.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the <code>ui5-panel</code> header area. <br><br> <b>Note:</b> When a header is provided, the <code>headerText</code> property is ignored.
   */
  header?: ReactNode | ReactNode[];
}

/**
 * <code>import { Panel } from '@ui5/webcomponents-react/lib/Panel';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Panel" target="_blank">UI5 Web Components Playground</a>
 */
const Panel: FC<PanelPropTypes> = withWebComponent<PanelPropTypes>(
  'ui5-panel',
  ['accessibleRole', 'headerLevel', 'headerText'],
  ['collapsed', 'fixed'],
  ['header'],
  []
);

Panel.displayName = 'Panel';

Panel.defaultProps = {
  accessibleRole: PanelAccessibleRoles.Form,
  collapsed: false,
  fixed: false,
  headerLevel: TitleLevel.H2,
  headerText: ''
};

export { Panel };
