import '@ui5/webcomponents-localization/dist/features/calendar/Gregorian.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Islamic.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Japanese.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Persian.js';
import type { Meta, StoryObj } from '@storybook/react';
import { CalendarType } from '../../enums/CalendarType';
import { ValueState } from '../../enums/ValueState';
import { DatePicker } from './index';

const meta = {
  title: 'Inputs / DatePicker',
  component: DatePicker,
  argTypes: {
    valueStateMessage: { control: { disable: true } }
  },
  args: {
    primaryCalendarType: CalendarType.Gregorian,
    valueState: ValueState.None
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
