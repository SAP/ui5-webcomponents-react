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
    titleText: 'called',
    subtitleText: '2019/01/01',
    icon: 'phone',
    itemName: 'John Smith'
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
      titleText={props.titleText}
      subtitleText={props.subtitleText}
      icon={props.icon}
      itemName={props.itemName}
    />
    <TimelineItem titleText={props.titleText} subtitleText={props.subtitleText} icon={props.icon}>
      <div>MR SOF02 2.43</div>
    </TimelineItem>
  </Timeline>
);

generatedDefaultStory.storyName = 'Generated default story';
