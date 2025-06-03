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
import { NLShellBar } from './NLShellBar.tsx';
import { NLSideNavigation } from './NLSideNavigation.tsx';

function App() {
  const [mode, setMode] = useState<NavigationLayoutMode>(NavigationLayoutMode.Auto);
  const [contentTitle, setContentTitle] = useState('Home');
  return (
    <>
      <NavigationLayout
        id="navigation-layout"
        header={<NLShellBar setMode={setMode} />}
        sideContent={<NLSideNavigation setContentTitle={setContentTitle} />}
        mode={mode}
      >
        <UserMenu id="userMenu" showManageAccount showOtherAccounts showEditAccounts showEditButton>
          <UserMenuAccount
            slot="accounts"
            avatarSrc="../assets/images/avatars/man_avatar_3.png"
            titleText="Alain Chevalier 1"
            subtitleText="alian.chevalier@sap.com"
            description="Delivery Manager, SAP SE"
            selected
          />
          <UserMenuAccount
            slot="accounts"
            avatarInitials="SD"
            titleText="John Walker"
            subtitleText="john.walker@sap.com"
            description="Project Manager"
          />
          <UserMenuAccount
            slot="accounts"
            avatarInitials="DS"
            titleText="David Wilson"
            subtitleText="david.wilson@sap.com"
            description="Project Manager"
          />
          <UserMenuItem icon={actionSettingsIcon} text="Setting" data-id="setting" />
          <UserMenuItem icon={officialServiceIcon} text="Legal Information">
            <UserMenuItem text="Terms of Use" data-id="terms-of-use" />
            <UserMenuItem text="Private Policy" data-id="privacy-policy" />
          </UserMenuItem>
          <UserMenuItem icon={messageInformationIcon} text="About" data-id="about" />
        </UserMenu>

        <div className="mainContent">
          <Title>{contentTitle}</Title>
          <br />
          <Text>Content...</Text>
        </div>
      </NavigationLayout>
    </>
  );
}

export default App;
