import '@ui5/webcomponents-localization/dist/features/calendar/Gregorian.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Islamic.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Japanese.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Persian.js';
import type { Meta, StoryObj } from '@storybook/react';
import { CalendarType, CalendarSelectionMode } from '../../enums/index.js';
import { Calendar } from './index.js';

const meta = {
  title: 'Inputs / Calendar',
  component: Calendar,
  argTypes: {
    children: { control: { disable: true } }
  },
  args: {
    primaryCalendarType: CalendarType.Gregorian,
    selectionMode: CalendarSelectionMode.Single
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
