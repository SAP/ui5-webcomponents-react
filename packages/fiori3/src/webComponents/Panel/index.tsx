import { Event } from '@ui5-webcomponents-react/utils';
import { PanelAccessibleRoles } from '../../lib/PanelAccessibleRoles';
import UI5Panel from '@ui5/webcomponents/dist/Panel';
import React, { FC, ReactNode } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface PanelPropTypes extends WithWebComponentPropTypes {
  headerText?: string; // @generated
  fixed?: boolean; // @generated
  collapsed?: boolean; // @generated
  accessibleRole?: PanelAccessibleRoles; // @generated
  onToggle?: (event: Event) => void; // @generated
  header?: ReactNode; // @generated
  children?: ReactNode | ReactNode[];
}

const Panel: FC<PanelPropTypes> = withWebComponent<PanelPropTypes>(UI5Panel);

Panel.displayName = 'Panel';

Panel.defaultProps = {
  headerText: '', // @generated
  accessibleRole: PanelAccessibleRoles.Form // @generated
};

export { Panel };
