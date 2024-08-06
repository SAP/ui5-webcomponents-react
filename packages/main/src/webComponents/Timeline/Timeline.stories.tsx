import type { Meta, StoryObj } from '@storybook/react';
import calendarIcon from '@ui5/webcomponents-icons/dist/calendar.js';
import phoneIcon from '@ui5/webcomponents-icons/dist/phone.js';
import { Avatar } from '../Avatar/index.js';
import { Label } from '../Label/index.js';
import { TimelineGroupItem } from '../TimelineGroupItem/index.js';
import { TimelineItem } from '../TimelineItem/index.js';
import { Timeline } from './index.js';

const meta = {
  title: 'Data Display / Timeline',
  component: Timeline,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {},
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Timeline {...args}>
        <TimelineItem titleText="Schedule Call" subtitleText="2019/01/01" icon={phoneIcon} name={`John Smith`} />
        <TimelineItem titleText="Weekly Sync - CP Design" subtitleText="2019/01/02" icon={calendarIcon}>
          <div>MR SOF02 2.43</div>
        </TimelineItem>
      </Timeline>
    );
  }
};

export const WithGroups: Story = {
  render: (args) => {
    return (
      <Timeline {...args}>
        <TimelineGroupItem groupName="Events">
          <TimelineItem titleText="Event" subtitleText="18.06.2024 11:30" name="SAP D-com" />
          <TimelineItem titleText="Event" subtitleText="19.06.2024 12:30" icon={calendarIcon} name="SAP Talk" />
          <TimelineItem titleText="Event" subtitleText="21.06.2024 18:30" name="SAP iXP Summer Party" />
        </TimelineGroupItem>

        <TimelineGroupItem groupName="Meetings">
          <TimelineItem
            titleText="coming up"
            subtitleText="10.07.2024 11:30"
            icon={calendarIcon}
            name="Team Balkan Meeting"
          />
          <TimelineItem
            titleText="coming up"
            subtitleText="20.08.2024 12:30"
            icon={calendarIcon}
            name="Team Balkan Planning"
          />
          <TimelineItem
            titleText="coming up"
            subtitleText="22.08.2024 14:30"
            icon={calendarIcon}
            name="Team Balkan Retrospective"
          />
        </TimelineGroupItem>
        <TimelineGroupItem groupName="Calls">
          <TimelineItem
            titleText="made group call"
            subtitleText="20.09.2024 11:30"
            icon={phoneIcon}
            name="John Doe"
            nameClickable
          />
          <TimelineItem subtitleText="20.09.2024 12:30" name="John Doe" nameClickable>
            <Avatar initials="JD"></Avatar>
            <Label>Has ended the call</Label>
          </TimelineItem>
        </TimelineGroupItem>
      </Timeline>
    );
  }
};
