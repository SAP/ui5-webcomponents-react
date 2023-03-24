import type { Meta, StoryObj } from '@storybook/react';
import personIcon from '@ui5/webcomponents-icons/dist/person-placeholder.js';
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
