import type { Meta, StoryObj } from '@storybook/react-vite';
import actionSettingsIcon from '@ui5/webcomponents-icons/dist/action-settings.js';
import type { UserMenuDomRef, UserMenuPropTypes } from '@ui5/webcomponents-react';
import {
  Avatar,
  Button,
  ComboBox,
  ComboBoxItem,
  Icon,
  Text,
  Label,
  List,
  ListItemStandard,
  Panel,
  ShellBar,
  UserMenu,
  UserMenuAccount,
  UserMenuItem,
  UserSettingsItem,
  UserSettingsView,
  CheckBox,
  Title,
  RadioButton,
} from '@ui5/webcomponents-react';
import { useEffect, useRef, useState } from 'react';
import { UserSettingsDialog } from './index.js';

const meta = {
  title: 'Modals & Popovers / UserSettingsDialog',
  component: UserSettingsDialog,
  argTypes: {
    children: { control: { disable: true } },
    fixedItems: { control: { disable: true } },
  },
  args: {},
  tags: ['package:@ui5/webcomponents', 'experimental'],
} satisfies Meta<typeof UserSettingsDialog>;
type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  render(args) {
    const userMenuRef = useRef<UserMenuDomRef>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(args.open);

    const handleUserMenuItemClick: UserMenuPropTypes['onItemClick'] = (e) => {
      const { settings } = e.detail.item.dataset;
      if (settings) {
        setOpen(true);
      }
    };

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <ShellBar
          primaryTitle={'Corporate Portal'}
          logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />}
          profile={
            <Avatar>
              <img
                src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png"
                alt={'Avatar of the current user'}
              />
            </Avatar>
          }
          onProfileClick={(event) => {
            userMenuRef.current.opener = event.detail.targetRef;
            userMenuRef.current.open = true;
            setMenuOpen((prev) => !prev);
          }}
        />
        <UserMenu
          ref={userMenuRef}
          open={menuOpen}
          accounts={
            <UserMenuAccount
              avatarSrc="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png"
              titleText="Alaina Chevalier"
              subtitleText="aliana.chevalier@sap.com"
              description="Delivery Manager, SAP SE"
              selected
            />
          }
          onClose={() => {
            setMenuOpen(false);
          }}
          onItemClick={handleUserMenuItemClick}
        >
          <UserMenuItem icon={actionSettingsIcon} text="Settings" data-settings={'true'} />
        </UserMenu>
        <UserSettingsDialog
          {...args}
          open={open}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <UserSettingsItem
            icon="user-settings"
            text="User Account"
            tooltip="User Account"
            headerText="User Account"
            pages={
              <>
                <UserSettingsView>
                  <Icon name="person-placeholder" />
                  <Title level="H3" size="H3" className="ua-name">
                    Alain Chevalier
                  </Title>
                  <div className="container">
                    <div className="ua-info-item">
                      <Label for="name">Name:</Label>
                      <Text>Alain Chevalier</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="email">Email:</Label>
                      <Text>alian.chevalier@sap.com</Text>
                    </div>
                    <div className="ua-info-item">
                      <Label for="server">Server:</Label>
                      <Text>delivery-001.sap.com</Text>
                    </div>
                  </div>
                  <Label for="reset-all-button">Personalization</Label>
                  <br />
                  <Button>Reset All Personalization</Button>
                  <Panel fixed className="ua-panel">
                    <Text>
                      Reset your personalization settings for the launchpad (such as theme, language, user activities,
                      and home page content).
                    </Text>
                  </Panel>
                </UserSettingsView>
              </>
            }
          />
          <UserSettingsItem icon="palette" text="Appearance" tooltip="Appearance" headerText="Appearance">
            <UserSettingsView text="Themes">
              <List separators="Inner">
                <ListItemStandard icon="palette" text="SAP Morning Horizon" />
                <ListItemStandard icon="palette" text="SAP Evening Horizon" />
                <ListItemStandard icon="palette" text="SAP High Contrast Black (SAP Horizon)" />
                <ListItemStandard icon="palette" text="SAP High Contrast White (SAP Horizon)" />
              </List>
              <Button className="save-btn" design="Emphasized">
                Save
              </Button>
            </UserSettingsView>
            <UserSettingsView text="Display settings">
              <CheckBox checked text="Optimized for Touch Input" />
              <Panel fixed>
                <Label>
                  Increases the size and spacing of controls to allow you to interact with them more easily using your
                  fingertip. This is useful for hybrid devices that combine touch and mouse events.
                </Label>
              </Panel>
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem
            text="Language & Region"
            tooltip="Language & Region"
            headerText="Language & Region"
            pages={
              <UserSettingsView>
                <div className="us-container">
                  <div className="lr-item">
                    <Label>Language and Region:</Label>
                    <ComboBox placeholder="Language">
                      <ComboBoxItem text="Browse Language" />
                      <ComboBoxItem text="English" />
                      <ComboBoxItem text="European Spanish" />
                      <ComboBoxItem text="French (France)" />
                      <ComboBoxItem text="Germany" />
                    </ComboBox>
                  </div>
                  <div className="lr-item">
                    <Label for="format">Date Format:</Label>
                    <Text>MMM d, y</Text>
                  </div>
                </div>
                <Panel fixed>
                  <Label>
                    The time zone will not be applied in UI5 apps. If you don't know the type of an app, you can check
                    it in the "About" dialog in the "ID of the Application Framework” field.
                  </Label>
                </Panel>
                <br />
                <div className="lt-time-format">
                  <Label for="timeFormat">Time Format:</Label>
                  <RadioButton name="timeFormat" text="12h" />
                  <RadioButton checked name="timeFormat" text="24h" />
                </div>
                <Panel fixed>
                  <Label>
                    After you save your settings, the browser will refresh for the new settings to take effect.
                  </Label>
                </Panel>
              </UserSettingsView>
            }
          />
          <UserSettingsItem
            icon="iphone"
            text="SAP Mobile Start Application"
            tooltip="SAP Mobile Start Application"
            headerText="SAP Mobile Start Application"
          >
            <UserSettingsView slot="pages">
              <Button>iOS</Button>
              <Button>Android</Button>
            </UserSettingsView>
            <UserSettingsView slot="pages" text="Inner Page" secondary>
              <Text>Enable access to your site from the SAP Mobile Start application.</Text>
              <Button>Install</Button>
              <Button>Register</Button>
              <Text>Scan the QR Code to install the mobile application</Text>
              <Icon name="qr-code" style={{ width: '20rem', height: '20rem' }} />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem icon="bell" text="Notifications" tooltip="Notifications" headerText="Notifications">
            <UserSettingsView slot="pages">
              <CheckBox checked text="Show High-Priority Notification Alerts" />
            </UserSettingsView>
          </UserSettingsItem>
          <UserSettingsItem
            icon="reset"
            slot="fixedItems"
            text="Reset Settings"
            tooltip="Reset Settings"
            headerText="Reset Settings"
          >
            <UserSettingsView text="Reset Personalization">
              <Button>Reset Personalization content</Button>
            </UserSettingsView>
            <UserSettingsView text="Reset All Settings">
              <Button>Reset All Settings content</Button>
            </UserSettingsView>
          </UserSettingsItem>
        </UserSettingsDialog>
      </>
    );
  },
};
