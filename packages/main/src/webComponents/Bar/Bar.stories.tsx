import { GitHubLogo } from '@sb/components/GitHub-Mark';
import type { Meta, StoryObj } from '@storybook/react';
import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import { BarDesign } from '../../enums/BarDesign';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { Button } from '../Button';
import { Input } from '../Input';
import { Link } from '../Link';
import { Title } from '../Title';
import { CenterContent, EndContent, Img, StartContent } from './CodeGen';
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
    startContent: StartContent,
    children: CenterContent,
    endContent: EndContent
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
            {Img}
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
