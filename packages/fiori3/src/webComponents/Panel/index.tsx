import React, { FC, ReactNode } from 'react';
import { BackgroundDesign } from '@fiori-for-react/core/enums/BackgroundDesign';
import { PanelAccessibleRoles } from '@fiori-for-react/core/enums/PanelAccessibleRoles';
import UI5Panel from '@ui5/webcomponents/dist/Panel';
import { Event } from '@fiori-for-react/utils';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface PanelPropTypes extends WithWebComponentPropTypes {
  headerText?: string; // @generated
  fixed?: boolean; // @generated
  collapsed?: boolean; // @generated
  backgroundDesign?: BackgroundDesign; // @generated
  accessibleRole?: PanelAccessibleRoles; // @generated
  onToggle?: (event: Event) => void; // @generated
  header?: ReactNode; // @generated
  children?: ReactNode | ReactNode[];
}

const Panel: FC<PanelPropTypes> = withWebComponent<PanelPropTypes>(UI5Panel);

Panel.displayName = 'Panel';

Panel.defaultProps = {
  headerText: '', // @generated
  backgroundDesign: BackgroundDesign.Solid, // @generated
  accessibleRole: PanelAccessibleRoles.Form // @generated
};

export { Panel };
