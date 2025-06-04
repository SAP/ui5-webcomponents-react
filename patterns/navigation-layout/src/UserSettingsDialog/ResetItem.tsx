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
import { Dispatch, SetStateAction, useState } from 'react';
import { createPortal } from 'react-dom';

interface ResetItemProps {
  slot?: string;
  setUserSettingsDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export function ResetItem({ slot, setUserSettingsDialogOpen }: ResetItemProps) {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState('Changes reset!');

  const handleReset: ButtonPropTypes['onClick'] = (e) => {
    const target = e.currentTarget;
    if (target?.dataset.key === 'resetPersonalization') {
      setToastText('Changes reset!');
    } else {
      setToastText('All changes reset!');
    }
    setToastOpen(true);
    setUserSettingsDialogOpen(false);
  };

  return (
    <>
      <UserSettingsItem
        slot={slot}
        icon={resetIcon}
        text="Reset Settings"
        tooltip="Reset Settings"
        headerText="Reset Settings"
      >
        <UserSettingsView text="Reset Personalization">
          <Button data-key="resetPersonalization" onClick={handleReset}>
            Reset Personalization content
          </Button>
        </UserSettingsView>
        <UserSettingsView text="Reset All Settings">
          <Button data-key="resetAll" onClick={handleReset}>
            Reset All Settings content
          </Button>
        </UserSettingsView>
      </UserSettingsItem>
      {createPortal(
        <Toast
          open={toastOpen}
          onClose={() => {
            setToastOpen(false);
          }}
        >
          {toastText}
        </Toast>,
        document.body,
      )}
    </>
  );
}

ResetItem.displayName = 'ResetItem';
