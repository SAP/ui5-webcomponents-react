import { GitHubLogo } from '@sb/components/GitHub-Mark';
import type { Meta, StoryObj } from '@storybook/react';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import { Button } from '../Button';
import { Input } from '../Input';
import { Link } from '../Link';
import { Title } from '../Title';
import { Bar } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Bar',
  component: Bar,
  argTypes: {
    startContent: { control: { disable: true } },
    children: { control: { disable: true } },
    endContent: { control: { disable: true } }
  },
  args: {
    design: BarDesign.Header,
    startContent: <span>Start Content</span>,
    children: <span>Center Content</span>,
    endContent: <span>End Content</span>
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof Bar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomElements: Story = {
  render(args) {
    return (
      <Bar
        {...args}
        startContent={
          <>
            <Button icon={navBackIcon} design={ButtonDesign.Transparent} />
            <img
              src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/Logo-Sticker.png"
              alt="logo"
              style={{ marginLeft: '6px', width: '120px' }}
            />
          </>
        }
        endContent={
          <>
            <Input placeholder="Search" />
            <Link style={{ marginLeft: '6px' }} href="https://github.com/SAP/ui5-webcomponents-react" target="_blank">
              <GitHubLogo />
            </Link>
          </>
        }
      >
        <Title>Bar</Title>
      </Bar>
    );
  }
};
