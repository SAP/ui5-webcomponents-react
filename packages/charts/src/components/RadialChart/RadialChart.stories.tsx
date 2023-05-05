import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent, Text } from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { RadialChart } from './RadialChart.js';

const meta = {
  title: 'RadialChart',
  component: RadialChart,
  args: { displayValue: '50%', value: 50, maxValue: 100 }
} satisfies Meta<typeof RadialChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColor: Story = {
  args: {
    color: '#f0ab00'
  }
};

export const MicroRadialCharts: Story = {
  render: () => {
    return (
      <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} alignItems={FlexBoxAlignItems.Center}>
        <RadialChart
          value={50}
          style={{ height: '50px', width: '50px' }}
          chartConfig={{ innerRadius: '75%', margin: { top: 0, right: 0, bottom: 0, left: 0 } }}
          displayValue={'50%'}
          displayValueStyle={{
            fontSize: ThemingParameters.sapFontSmallSize,
            fill: ThemingParameters.sapChart_OrderedColor_1
          }}
        />
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <RadialChart
            value={50}
            style={{ width: '25px', height: '25px' }}
            chartConfig={{ innerRadius: '70%', margin: { top: 0, right: 0, bottom: 0, left: 0 } }}
          />
          <Text>50%</Text>
        </FlexBox>
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <RadialChart
            value={50}
            style={{ height: '16px', width: '16px' }}
            chartConfig={{ innerRadius: '75%', margin: { top: 0, right: 0, bottom: 0, left: 0 } }}
          />
          <Text style={{ fontSize: ThemingParameters.sapFontSmallSize }}>50%</Text>
        </FlexBox>
      </FlexBox>
    );
  }
};
