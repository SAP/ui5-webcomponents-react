import '@ui5/webcomponents/dist/dynamic-date-range-options/Today.js';
import '@ui5/webcomponents/dist/dynamic-date-range-options/Yesterday.js';
import '@ui5/webcomponents/dist/dynamic-date-range-options/Tomorrow.js';
import '@ui5/webcomponents/dist/dynamic-date-range-options/SingleDate.js';
import '@ui5/webcomponents/dist/dynamic-date-range-options/DateRange.js';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FlexBox } from '../../components/FlexBox/index.js';
import { Input } from '../Input/index.js';
import { Label } from '../Label/index.js';
import { DynamicDateRange } from './index.js';

const meta = {
  title: 'Inputs / DynamicDateRange',
  component: DynamicDateRange,
  argTypes: {},
  args: {
    options: 'TODAY, TOMORROW, YESTERDAY, DATE, DATERANGE',
  },
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof DynamicDateRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ValueChange: Story = {
  render(args) {
    const [selValue, setSelValue] = useState('');
    const [convertedDates, setConvertedDates] = useState('');
    return (
      <>
        <DynamicDateRange
          {...args}
          onChange={(e) => {
            const selectedValue = e.detail.value;
            setSelValue(JSON.stringify(selectedValue));

            //@ts-expect-error: `toDates` is available
            const dates = e.currentTarget.toDates(selectedValue);
            setConvertedDates(dates.map((date) => date.toLocaleString()).join(' - '));
          }}
        />
        <hr />
        <FlexBox alignItems="Center" gap="0.5rem">
          <Label for="sel-val" showColon>
            Selected Value
          </Label>
          <Input id="sel-val" readonly value={selValue} style={{ width: '100%', maxWidth: '400px' }} />
        </FlexBox>
        <FlexBox alignItems="Center" gap="0.5rem">
          <Label for="conv-val" showColon>
            Converted Dates
          </Label>
          <Input id="conv-val" readonly value={convertedDates} style={{ width: '100%', maxWidth: '400px' }} />
        </FlexBox>
      </>
    );
  },
};
