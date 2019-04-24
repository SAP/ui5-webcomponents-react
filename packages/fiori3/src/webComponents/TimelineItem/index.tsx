import React, { FC, ReactNode } from 'react';
import { Event } from '@fiori-for-react/utils';
import UI5TimelineItem from '@ui5/webcomponents/dist/TimelineItem';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TimelineItemPropTypes extends WithWebComponentPropTypes {
  icon?: string; // @generated
  itemName?: string; // @generated
  itemNameClickable?: boolean; // @generated
  titleText?: string; // @generated
  subtitleText?: string; // @generated
  onItemNamePress?: (event: Event) => void; // @generated
  children?: ReactNode; // @generated
}

const TimelineItem: FC<TimelineItemPropTypes> = withWebComponent<TimelineItemPropTypes>(UI5TimelineItem);

TimelineItem.displayName = 'TimelineItem';

TimelineItem.defaultProps = {
  icon: null, // @generated
  itemName: '', // @generated
  titleText: '', // @generated
  subtitleText: '' // @generated
};

export { TimelineItem };
