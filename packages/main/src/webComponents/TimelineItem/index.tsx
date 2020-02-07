import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5TimelineItem from '@ui5/webcomponents/dist/TimelineItem';
import React, { FC, ReactNode } from 'react';
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

/**
 * <code>import { TimelineItem } from '@ui5/webcomponents-react/lib/TimelineItem';</code>
 */
const TimelineItem: FC<TimelineItemPropTypes> = withWebComponent<TimelineItemPropTypes>(UI5TimelineItem);

TimelineItem.displayName = 'TimelineItem';

TimelineItem.defaultProps = {
  icon: null // @generated
};

export { TimelineItem };
