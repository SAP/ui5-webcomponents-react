import image from '@sb/demoImages/Person.png';
import type { Meta, StoryObj } from '@storybook/react-vite';
import menu2Icon from '@ui5/webcomponents-icons/dist/menu2.js';
import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import sysHelpIcon from '@ui5/webcomponents-icons/dist/sys-help.js';
import { FlexBox } from '../../components/FlexBox/index.js';
import { Button } from '../Button/index.js';
import { Avatar, ShellBarItem, ShellBarSpacer } from '../index.js';
import { Label } from '../Label/index.js';
import { ShellBarBranding } from '../ShellBarBranding/index.js';
import { ShellBarSearch } from '../ShellBarSearch/index.js';
import { Switch } from '../Switch/index.js';
import { Tag } from '../Tag/index.js';
import { Text } from '../Text/index.js';
import { ShellBar } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / ShellBar',
  component: ShellBar,
  argTypes: {
    children: { control: { disable: true } },
    logo: { control: { disable: true } },
    menuItems: { control: { disable: true } },
    profile: { control: { disable: true } },
    searchField: { control: { disable: true } },
    startButton: { control: { disable: true } },
  },
  args: {
    primaryTitle: 'Shell Bar',
    notificationsCount: '10',
    showNotifications: true,
    logo: <img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />,
    profile: (
      <Avatar>
        <img src={image} alt="person-placeholder" />
      </Avatar>
    ),
    startButton: <Button icon={menu2Icon} tooltip="Menu" accessibleName="Menu" />,
    searchField: <ShellBarSearch showClearIcon placeholder="Search Apps, Products" />,
    children: <ShellBarItem text={'Help'} icon={sysHelpIcon} />,
  },
  tags: ['package:@ui5/webcomponents-fiori'],
} satisfies Meta<typeof ShellBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllFeatures: Story = {
  args: {
    showProductSwitch: true,
    startButton: (
      <>
        <Button icon={menu2Icon} tooltip="Menu" accessibleName="Menu" />
        <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />
      </>
    ),
    content: (
      <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
        <ShellBarSpacer />
        <FlexBox gap="0 5px" alignItems="Center">
          <Switch />
          <Label>Try Beta Version</Label>
        </FlexBox>
      </>
    ),
  },
};

export const EmbeddedBackNavigation: Story = {
  args: {
    startButton: <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />,
  },
};

export const TrialExample: Story = {
  args: {
    content: (
      <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
      </>
    ),
  },
};

export const ProductiveInstances: Story = {
  args: {
    content: (
      <Tag design="Set2" colorScheme="10">
        Region EMEA
      </Tag>
    ),
  },

  render(args) {
    return (
      <>
        <ShellBar {...args} />
        <ShellBar
          {...args}
          content={
            <Tag design="Set2" colorScheme="10">
              Region APJ
            </Tag>
          }
        />
      </>
    );
  },
};

export const NonProductiveInstances: Story = {
  args: {
    content: (
      <>
        <Tag design="Set2" colorScheme="8">
          Q System
        </Tag>
        <Text>Region EMEA</Text>
      </>
    ),
  },

  render(args) {
    return (
      <>
        <ShellBar {...args} />
        <ShellBar
          {...args}
          content={
            <>
              <Tag design="Set2" colorScheme="8">
                Q System
              </Tag>
              <Text>Region APJ</Text>
            </>
          }
        />
      </>
    );
  },
};

export const ShellBarBrandingStory: Story = {
  name: 'with ShellBarBranding',
  args: {
    branding: (
      <ShellBarBranding
        logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />}
        href="https://ui5.github.io/webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs"
        target="_blank"
        onClick={(e) => {
          console.log('ShellBarBranding clicked', e);
        }}
      >
        ShellBar Branding
      </ShellBarBranding>
    ),
  },
  render(args) {
    return <ShellBar {...args} />;
  },
};
