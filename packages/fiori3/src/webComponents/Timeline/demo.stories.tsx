import React from 'react';
import { storiesOf } from '@storybook/react';
import { Timeline } from './index';
import { TimelineItem } from '../TimelineItem';

storiesOf('UI5 Web Components | Timeline', module).add('Generated default story', () => (
  <Timeline>
    <TimelineItem titleText="called" subtitleText={'2019/01/01'} icon="sap-icon://phone" itemName="John Smith" />
    <TimelineItem titleText="Weekly Sync - CP Design" subtitleText={'2019/01/02'} icon="sap-icon://calendar">
      <div>MR SOF02 2.43</div>
    </TimelineItem>
  </Timeline>
));
