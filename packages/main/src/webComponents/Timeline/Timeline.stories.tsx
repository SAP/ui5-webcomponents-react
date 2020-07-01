import '@ui5/webcomponents-icons/dist/icons/calendar';
import '@ui5/webcomponents-icons/dist/icons/phone';
import { Timeline } from '@ui5/webcomponents-react/lib/Timeline';
import { TimelineItem } from '@ui5/webcomponents-react/lib/TimelineItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / Timeline',
  component: Timeline,
  parameters: {
    subcomponents: { TimelineItem }
  },
  args: {
    titleText1: 'called',
    subtitleText1: '2019/01/01',
    icon1: 'phone',
    itemName1: 'John Smith',
    titleText2: 'Weekly Sync - CP Design',
    subtitleText2: '2019/01/02',
    icon2: 'calendar'
  },
  argTypes: {
    ref: {
      type: null
    },
    children: {
      type: null
    }
  }
};

export const generatedDefaultStory = (props) => (
  <Timeline>
    <TimelineItem
      titleText={props.titleText1}
      subtitleText={props.subtitleText1}
      icon={props.icon1}
      itemName={props.itemName1}
    />
    <TimelineItem titleText={props.titleText2} subtitleText={props.subtitleText2} icon={props.icon2}>
      <div>MR SOF02 2.43</div>
    </TimelineItem>
  </Timeline>
);

generatedDefaultStory.storyName = 'Generated default story';
