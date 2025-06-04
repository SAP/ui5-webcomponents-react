import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import {
  Avatar,
  Button,
  ListItemStandard,
  Popover,
  Title,
  ToggleButton,
  List,
  Tag,
  Text,
  Bar,
  Dialog,
  Link,
  Icon,
  Label,
  Panel,
  ComboBox,
  ComboBoxItem,
  RadioButton,
  CheckBox,
  Toast,
  ShellBar,
  ShellBarItem,
  ShellBarSearch,
  ShellBarSpacer,
  SearchItem,
  SearchScope,
  Menu,
  MenuItem,
  MessageStrip,
  NotificationList,
  NotificationListGroupItem,
  NotificationListItem,
  IllustratedMessage,
  NoNotifications,
  UserMenu,
  UserMenuAccount,
  UserMenuItem,
  UserSettingsView,
  UserSettingsItem,
  UserSettingsDialog,
  NavigationLayout,
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
  ButtonPropTypes,
  UserSettingsItemPropTypes,
  MessageBox,
  MessageBoxPropTypes,
} from '@ui5/webcomponents-react';
import NavigationLayoutMode from '@ui5/webcomponents-fiori/dist/types/NavigationLayoutMode.js';
import globeIcon from '@ui5/webcomponents-icons/dist/globe.js';
import collaborateIcon from '@ui5/webcomponents-icons/dist/collaborate.js';
import officialServiceIcon from '@ui5/webcomponents-icons/dist/official-service.js';
import privateIcon from '@ui5/webcomponents-icons/dist/private.js';
import acceleratedIcon from '@ui5/webcomponents-icons/dist/accelerated.js';
import daIcon from '@ui5/webcomponents-icons/dist/da.js';
import da2Icon from '@ui5/webcomponents-icons/dist/da-2.js';
import menu2Icon from '@ui5/webcomponents-icons/dist/menu2.js';
import settingsIcon from '@ui5/webcomponents-icons/dist/settings.js';
import sysHelpIcon from '@ui5/webcomponents-icons/dist/sys-help.js';
import homeIcon from '@ui5/webcomponents-icons/dist/home.js';
import favoriteListIcon from '@ui5/webcomponents-icons/dist/favorite-list.js';
import accountIcon from '@ui5/webcomponents-icons/dist/account.js';
import businessByDesignIcon from '@ui5/webcomponents-icons/dist/business-by-design.js';
import crmSalesIcon from '@ui5/webcomponents-icons/dist/crm-sales.js';
import s4hanaIcon from '@ui5/webcomponents-icons/dist/s4hana.js';
import addIcon from '@ui5/webcomponents-icons/dist/add.js';
import managerInsightIcon from '@ui5/webcomponents-icons/dist/manager-insight.js';
import actionSettingsIcon from '@ui5/webcomponents-icons/dist/action-settings.js';
import sortIcon from '@ui5/webcomponents-icons/dist/sort.js';
import messageInformationIcon from '@ui5/webcomponents-icons/dist/message-information.js';
import expenseReportIcon from '@ui5/webcomponents-icons/dist/expense-report.js';
import userSettingsIcon from '@ui5/webcomponents-icons/dist/user-settings.js';
import personPlaceholderIcon from '@ui5/webcomponents-icons/dist/person-placeholder.js';
import paletteIcon from '@ui5/webcomponents-icons/dist/palette.js';
import iphoneIcon from '@ui5/webcomponents-icons/dist/iphone.js';
import qrCodeIcon from '@ui5/webcomponents-icons/dist/qr-code.js';
import bellIcon from '@ui5/webcomponents-icons/dist/bell.js';
import resetIcon from '@ui5/webcomponents-icons/dist/reset.js';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export function UserAccountItem(props) {
  const [messageBoxOpen, setMessageBoxOpen] = useState(false);

  const handleMessageBoxClose: MessageBoxPropTypes['onClose'] = (action) => {
    if (action === 'OK') {
      console.log('Personalization was reset successfully!');
    }
    setMessageBoxOpen(false);
  };

  return (
    <>
      <UserSettingsItem
        icon={userSettingsIcon}
        text="User Account"
        tooltip="User Account"
        headerText="User Account"
        pages={
          <UserSettingsView>
            <div className="container">
              <Avatar size="L" className="ua-info-profile">
                <img src="../assets/images/avatars/man_avatar_3.png" alt="Profile" />
              </Avatar>
              <Title level="H3" className="ua-name ua-info-profile">
                Alain Chevalier
              </Title>
              <div className="ua-info-item">
                <Label for="name">Name:</Label>
                <Text id="name">Alain Chevalier</Text>
              </div>
              <div className="ua-info-item">
                <Label for="email">Email:</Label>
                <Text id="email">alian.chevalier@sap.com</Text>
              </div>
              <div className="ua-info-item">
                <Label for="server">Server:</Label>
                <Text id="server">delivery-001.sap.com</Text>
              </div>
            </div>
            <Label for="reset-all-button">Personalization</Label>
            <br />
            <Button
              id="reset-all-button"
              onClick={() => {
                setMessageBoxOpen(true);
              }}
            >
              Reset All Personalization
            </Button>
            <Panel fixed className="ua-panel">
              <Text>
                Reset your personalization settings for the launchpad (such as theme, language, user activities, and
                home page content).
              </Text>
            </Panel>
          </UserSettingsView>
        }
      />
      {createPortal(
        <MessageBox open={messageBoxOpen} type="Warning" onClose={handleMessageBoxClose}>
          Clicking on reset will delete your personalization settings for the launchpad (e.g. theme, language, user
          activities, and home page content) and for apps using the launchpad personalization features (e.g. filter
          settings, table columns). This action is irreversible. Further changes in the dialog will not be applied. Are
          you sure you want to proceed with the reset?
        </MessageBox>,
        document.body,
      )}
    </>
  );
}

UserAccountItem.displayName = 'UserAccountItem';
