import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import UI5Link from '@ui5/webcomponents/dist/Link';
import React, { FC } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';

export interface LinkPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  href?: string; // @generated
  target?: string; // @generated
  design?: LinkDesign; // @generated
  wrap?: boolean; // @generated
  onClick?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const Link: FC<LinkPropTypes> = withWebComponent<LinkPropTypes>(UI5Link);

Link.displayName = 'Link';

Link.defaultProps = {
  design: LinkDesign.Default // @generated
};

export { Link };
