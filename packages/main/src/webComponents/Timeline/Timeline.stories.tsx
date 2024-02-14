import type { Meta, StoryObj } from '@storybook/react';
import calendarIcon from '@ui5/webcomponents-icons/dist/calendar.js';
import phoneIcon from '@ui5/webcomponents-icons/dist/phone.js';
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
