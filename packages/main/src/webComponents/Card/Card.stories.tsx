import type { Meta, StoryObj } from '@storybook/react';
import personIcon from '@ui5/webcomponents-icons/dist/person-placeholder.js';
import { LineChart } from '@ui5/webcomponents-react-charts';
import { AnalyticalCardHeader } from '../../components/AnalyticalCardHeader';
import { NumericSideIndicator } from '../../components/NumericSideIndicator';
import { DeviationIndicator, ValueColor } from '../../enums';
import { CardHeader } from '../CardHeader';
import { Icon } from '../Icon';
import { List } from '../List';
import { StandardListItem } from '../StandardListItem';
import { Card } from './index.js';

const meta = {
  title: 'Data Display / Card',
  component: Card,
  argTypes: {
    header: { control: { disable: true } },
    children: { control: { disable: true } }
  },
  args: {
    style: { width: '300px' },
    header: (
      <CardHeader
        titleText="TeamSpace"
        subtitleText="Direct Reports"
        status={'3 of 5'}
        avatar={<Icon name={personIcon} />}
      />
    )
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Card {...args}>
        <List>
          <StandardListItem description="Software Architect">Richard Wilson</StandardListItem>
          <StandardListItem description="Visual Designer">Elena Petrova</StandardListItem>
          <StandardListItem description="Quality Specialist">John Miller</StandardListItem>
        </List>
      </Card>
    );
  }
};

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

export const WithAnalyticalCardHeader = {
  render: (args) => {
    return (
      <Card
        header={
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
        }
      >
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
