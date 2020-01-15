import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Card from '@ui5/webcomponents/dist/Card';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CardPropTypes extends WithWebComponentPropTypes {
  heading?: string; // @generated
  subtitle?: string; // @generated
  status?: string; // @generated
  headerInteractive?: boolean; // @generated
  avatar?: ReactNode; // @generated
  onHeaderClick?: (event: Event) => void; // @generated
  children?: ReactNode | ReactNode[]; // @generated
}

const Card: FC<CardPropTypes> = withWebComponent<CardPropTypes>(UI5Card);

Card.displayName = 'Card';

export { Card };
