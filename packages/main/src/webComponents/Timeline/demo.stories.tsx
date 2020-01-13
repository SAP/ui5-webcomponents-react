import { Timeline } from '@ui5/webcomponents-react/lib/Timeline';
import { TimelineItem } from '@ui5/webcomponents-react/lib/TimelineItem';
import '@ui5/webcomponents-icons/dist/icons/calendar';
import '@ui5/webcomponents-icons/dist/icons/phone';
import React from 'react';
import notes from './Timeline.md';

export default {
  title: 'UI5 Web Components / Timeline',
  component: Timeline,
  parameters: { notes }
};

export const generatedDefaultStory = () => (
  <Timeline>
    <TimelineItem titleText="called" subtitleText={'2019/01/01'} icon="phone" itemName="John Smith" />
    <TimelineItem titleText="Weekly Sync - CP Design" subtitleText={'2019/01/02'} icon="calendar">
      <div>MR SOF02 2.43</div>
    </TimelineItem>
  </Timeline>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
