import React, { FC, ReactNode } from 'react';
import { Event } from '@ui5/webcomponents-react-base';
import UI5Card from '@ui5/webcomponents/dist/Card';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CardPropTypes extends WithWebComponentPropTypes {
  heading?: string; // @generated
  subtitle?: string; // @generated
  status?: string; // @generated
  headerInteractive?: boolean; // @generated
  avatar?: string; // @generated
  onHeaderClick?: (event: Event) => void; // @generated
  children?: ReactNode | ReactNode[]; // @generated
}

const Card: FC<CardPropTypes> = withWebComponent<CardPropTypes>(UI5Card);

Card.displayName = 'Card';

export { Card };
