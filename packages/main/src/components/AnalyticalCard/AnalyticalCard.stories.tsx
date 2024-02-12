import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '@ui5/webcomponents-react-charts';
import { DeviationIndicator, ValueColor } from '../../enums/index.js';
import { AnalyticalCardHeader } from '../AnalyticalCardHeader/index.js';
import { NumericSideIndicator } from '../NumericSideIndicator/index.js';
import { AnalyticalCard } from './index.js';

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
  title: 'Data Display / AnalyticalCard',
  component: AnalyticalCard,
  // todo: remove after chromatic supports >=Chrome 120
  parameters: {
    chromatic: { disableSnapshot: true }
  },
  argTypes: {
    header: {
      control: { disable: true }
    },
    children: {
      control: { disable: true }
    }
  },
  args: {
    children: (
      <LineChart
        className="chromatic-ignore"
        noLegend
        dimensions={[{ accessor: 'name' }]}
        measures={[{ accessor: 'users', formatter: (val) => `${val}k` }]}
        dataset={simpleDataSet}
      />
    ),
    header: (
      <AnalyticalCardHeader
        titleText="Project Cloud Transformation"
        subtitleText="Revenue"
        unitOfMeasurement="EUR"
        trend={DeviationIndicator.Down}
        value="65.34"
        state={ValueColor.Error}
        scale="K"
        description="Q1, 2018"
      >
        <NumericSideIndicator titleText="Target" number="100" unit="k" />
        <NumericSideIndicator titleText="Deviation" number="34.7" unit="%" state={ValueColor.Critical} />
      </AnalyticalCardHeader>
    )
  }
} satisfies Meta<typeof AnalyticalCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
