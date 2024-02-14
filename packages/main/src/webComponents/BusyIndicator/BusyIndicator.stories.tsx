import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../components/Text';
import { BusyIndicatorSize } from '../../enums';
import { Select } from '../Select';
import { BusyIndicator } from './index';

const meta = {
  title: 'User Feedback / BusyIndicator',
  component: BusyIndicator,
  argTypes: { children: { control: { disable: true } } },
  args: {
    size: BusyIndicatorSize.Medium,
    delay: 1000,
    active: true
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof BusyIndicator>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithChildren: Story = {
  render(args) {
    return (
      <>
        <BusyIndicator {...args}>
          <Select />
        </BusyIndicator>
        <hr />
        <BusyIndicator {...args}>
          <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Text>
        </BusyIndicator>
      </>
    );
  }
};
