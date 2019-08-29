import { Event } from '@ui5/webcomponents-react-base';
import UI5TimelineItem from '@ui5/webcomponents/dist/TimelineItem';
import React, { FC, ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TimelineItemPropTypes extends WithWebComponentPropTypes {
  icon?: string; // @generated
  itemName?: string; // @generated
  itemNameClickable?: boolean; // @generated
  titleText?: string; // @generated
  subtitleText?: string; // @generated
  onItemNameClick?: (event: Event) => void; // @generated
  children?: ReactNode; // @generated
}

const TimelineItem: FC<TimelineItemPropTypes> = withWebComponent<TimelineItemPropTypes>(UI5TimelineItem);

TimelineItem.displayName = 'TimelineItem';

TimelineItem.defaultProps = {
  icon: null // @generated
};

export { TimelineItem };
