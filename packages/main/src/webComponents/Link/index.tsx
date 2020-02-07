import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Link from '@ui5/webcomponents/dist/Link';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface LinkPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  href?: string; // @generated
  target?: string; // @generated
  design?: LinkDesign; // @generated
  wrap?: boolean; // @generated
  onClick?: (event: Event) => void; // @generated
  children?: string; // @generated
}

/**
 * <code>import { Link } from '@ui5/webcomponents-react/lib/Link';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Link" target="_blank">UI5 Web Components Playground</a>
 */
const Link: FC<LinkPropTypes> = withWebComponent<LinkPropTypes>(UI5Link);

Link.displayName = 'Link';

Link.defaultProps = {
  design: LinkDesign.Default // @generated
};

export { Link };
