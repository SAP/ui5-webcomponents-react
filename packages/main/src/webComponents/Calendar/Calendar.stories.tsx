import '@ui5/webcomponents-localization/dist/features/calendar/Gregorian.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Islamic.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Japanese.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Persian.js';
import type { Meta, StoryObj } from '@storybook/react';
import CalendarLegendItemType from '@ui5/webcomponents/dist/types/CalendarLegendItemType.js';
import { CalendarSelectionMode, CalendarType } from '../../enums/index.js';
import { CalendarLegend } from '../CalendarLegend/index.js';
import { CalendarLegendItem } from '../CalendarLegendItem/index.js';
import { SpecialCalendarDate } from '../SpecialCalendarDate/index.js';
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

const currentDate = new Date();
const firstDayOfTheMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const yearMonthString = `${firstDayOfTheMonth.getFullYear()}-${(firstDayOfTheMonth.getMonth() + 1).toString().padStart(2, '0')}-`;
const firstDateOfMonthString = `${yearMonthString}${firstDayOfTheMonth.getDate()}`;

export const SpecialDate: Story = {
  args: {
    specialDates: <SpecialCalendarDate type={CalendarLegendItemType.Type01} value={firstDateOfMonthString} />
  }
};

export const CalendarLegendStory: Story = {
  name: 'CalenderLegend',
  args: {
    calendarLegend: (
      <CalendarLegend>
        <CalendarLegendItem text="Vacation" type={CalendarLegendItemType.Type05} />
        <CalendarLegendItem text="School Vacation" type={CalendarLegendItemType.Type07} />
        <CalendarLegendItem text="Wedding" type={CalendarLegendItemType.Type13} />
      </CalendarLegend>
    ),
    specialDates: (
      <>
        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}01`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}02`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}03`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}11`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}12`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}13`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type13} value={`${yearMonthString}26`} />
      </>
    )
  }
};
