import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '@ui5/webcomponents-react-charts';
import { DeviationIndicator, ValueColor } from '../../enums';
import { Card } from '../../webComponents/Card/index';
import { NumericSideIndicator } from '../NumericSideIndicator';
import { AnalyticalCardHeader } from './index';

const simpleDataSet = [
  {
    name: 'January',
    users: 76
  },
  {
    name: 'February',
    users: 230
  },
  {
    name: 'March',
    users: 240
  },
  {
    name: 'April',
    users: 280
  },
  {
    name: 'May',
    users: 100
  }
];

const meta = {
  title: 'Data Display / AnalyticalCardHeader',
  component: AnalyticalCardHeader,
  argTypes: {
    children: {
      control: { disable: true }
    }
  },
  args: {
    children: (
      <>
        <NumericSideIndicator titleText="Target" number="100" unit="k" />
        <NumericSideIndicator titleText="Deviation" number="34.7" unit="%" state={ValueColor.Critical} />
      </>
    ),
    titleText: 'Project Cloud Transformation',
    subtitleText: 'Revenue',
    unitOfMeasurement: 'EUR',
    trend: DeviationIndicator.Down,
    value: '65.34',
    state: ValueColor.Error,
    scale: 'K',
    description: 'Q1, 2018'
  }
} satisfies Meta<typeof AnalyticalCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(props) {
    return (
      <Card header={<AnalyticalCardHeader {...props} />}>
        <LineChart
          className="chromatic-ignore"
          noLegend
          dimensions={[{ accessor: 'name' }]}
          measures={[{ accessor: 'users', formatter: (val) => `${val}k` }]}
          dataset={simpleDataSet}
        />
      </Card>
    );
  }
};
