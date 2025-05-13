import type { Meta, StoryObj } from '@storybook/react';
import ButtonBadgeDesign from '@ui5/webcomponents/dist/types/ButtonBadgeDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { ButtonBadge } from '../ButtonBadge/index.js';
import { Button } from './index.js';

const meta = {
  title: 'Inputs / Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    badge: { control: { disable: true } },
  },
  args: {
    design: ButtonDesign.Default,
    icon: employeeIcon,
    children: 'Button Text',
  },
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBadge: Story = {
  render(args) {
    return (
      <>
        <Button {...args} badge={<ButtonBadge design={ButtonBadgeDesign.AttentionDot} />}>
          ButtonBadgeDesign.AttentionDot
        </Button>
        <Button {...args} badge={<ButtonBadge design={ButtonBadgeDesign.InlineText} text="badge" />}>
          ButtonBadgeDesign.InlineText
        </Button>
        <Button {...args} badge={<ButtonBadge design={ButtonBadgeDesign.OverlayText} text="badge" />}>
          ButtonBadgeDesign.OverlayText
        </Button>
      </>
    );
  },
};
