import { Timeline } from '@ui5/webcomponents-react/lib/Timeline';
import { TimelineItem } from '@ui5/webcomponents-react/lib/TimelineItem';
import '@ui5/webcomponents/dist/icons/calendar';
import '@ui5/webcomponents/dist/icons/phone';
import React from 'react';

export default {
  title: 'UI5 Web Components | Timeline',
  component: Timeline
};

export const generatedDefaultStory = () => (
  <Timeline>
    <TimelineItem titleText="called" subtitleText={'2019/01/01'} icon="sap-icon://phone" itemName="John Smith" />
    <TimelineItem titleText="Weekly Sync - CP Design" subtitleText={'2019/01/02'} icon="sap-icon://calendar">
      <div>MR SOF02 2.43</div>
    </TimelineItem>
  </Timeline>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
