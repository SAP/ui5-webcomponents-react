import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { PanelAccessibleRoles } from '@ui5/webcomponents-react/lib/PanelAccessibleRoles';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Panel from '@ui5/webcomponents/dist/Panel';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface PanelPropTypes extends WithWebComponentPropTypes {
  headerText?: string; // @generated
  fixed?: boolean; // @generated
  collapsed?: boolean; // @generated
  accessibleRole?: PanelAccessibleRoles; // @generated
  onToggle?: (event: Event) => void; // @generated
  header?: ReactNode; // @generated
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { Panel } from '@ui5/webcomponents-react/lib/Panel';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Panel" target="_blank">UI5 Web Components Playground</a>
 */
const Panel: FC<PanelPropTypes> = withWebComponent<PanelPropTypes>(UI5Panel);

Panel.displayName = 'Panel';

Panel.defaultProps = {
  headerText: '', // @generated
  accessibleRole: PanelAccessibleRoles.Form // @generated
};

export { Panel };
