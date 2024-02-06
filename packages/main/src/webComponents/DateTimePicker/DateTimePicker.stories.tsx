import '@ui5/webcomponents-localization/dist/features/calendar/Gregorian.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Islamic.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Japanese.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Persian.js';
import type { Meta, StoryObj } from '@storybook/react';
import { CalendarType } from '../../enums/CalendarType';
import { ValueState } from '../../enums/ValueState';
import { DateTimePicker } from './index.js';

const meta = {
  title: 'Inputs / DateTimePicker',
  component: DateTimePicker,
  argTypes: {
    valueStateMessage: { control: { disable: true } }
  },
  args: {
    primaryCalendarType: CalendarType.Gregorian,
    valueState: ValueState.None
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
