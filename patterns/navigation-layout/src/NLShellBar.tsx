import {
  Avatar,
  Button,
  NavigationLayoutDomRef,
  ResponsivePopoverDomRef,
  SearchScope,
  ShellBar,
  ShellBarItem,
  ShellBarPropTypes,
  ShellBarSearch,
  ShellBarSpacer,
  Tag,
  Text,
  ToggleButton,
  ToggleButtonPropTypes,
} from '@ui5/webcomponents-react';
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
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import NavigationLayoutMode from '@ui5/webcomponents-fiori/dist/types/NavigationLayoutMode.js';
import { NotificationsPopover } from './NotificationsPopover.tsx';

interface NLShellBarProps extends ShellBarPropTypes {
  setMode: Dispatch<SetStateAction<NavigationLayoutMode>>;
}

export function NLShellBar(props: NLShellBarProps) {
  const { setMode, ...rest } = props;
  const notificationsPopoverRef = useRef<ResponsivePopoverDomRef>(null);
  const [assistantBtnPressed, setAssistantBtnPressed] = useState(false);
  const [notificationsPopoverOpen, setNotificationsPopoverOpen] = useState(false);

  const handleAssistantClick: ToggleButtonPropTypes['onClick'] = (e) => {
    setAssistantBtnPressed(e.currentTarget!.pressed);
  };

  const handleMenuBtnClick = () => {
    const navigationLayout = document.getElementById('navigation-layout') as NavigationLayoutDomRef | null;
    if (navigationLayout) {
      setMode(navigationLayout.isSideCollapsed() ? NavigationLayoutMode.Expanded : NavigationLayoutMode.Collapsed);
    }
  };

  const handleNotificationsClick: ShellBarPropTypes['onNotificationsClick'] = (e) => {
    e.preventDefault();
    notificationsPopoverRef.current!.opener = e.detail.targetRef;
    setNotificationsPopoverOpen(true);
  };

  const closeNotificationsPopover = () => {
    setNotificationsPopoverOpen(false);
  };

  return (
    <>
      <ShellBar
        {...rest}
        id="shellbar"
        primaryTitle="VEGA CRM"
        notificationsCount="10"
        showNotifications
        showProductSwitch
        onNotificationsClick={handleNotificationsClick}
        startButton={
          <Button
            id="menu-button"
            icon={menu2Icon}
            tooltip="Toggle side navigation"
            accessibleName="Toggle side navigation"
            onClick={handleMenuBtnClick}
          />
        }
        logo={
          <img
            //todo: sap logo
            src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/ui5-logo.svg"
            alt="SAP Logo"
          />
        }
        content={
          <>
            <Tag design="Set2" colorScheme="7" data-hide-order="2">
              Trial
            </Tag>
            <Text data-hide-order="1">30 days remaining</Text>
            <ShellBarSpacer />
          </>
        }
        assistant={
          <ToggleButton
            pressed={assistantBtnPressed}
            icon={assistantBtnPressed ? da2Icon : daIcon}
            tooltip="Assistant"
            accessibleName="Assistant"
            onClick={handleAssistantClick}
          />
        }
        searchField={
          <ShellBarSearch id="search-scope" showClearIcon placeholder="Search Apps, Products">
            <SearchScope text="All" selected />
            <SearchScope text="Apps" />
            <SearchScope text="Products" />
          </ShellBarSearch>
        }
        profile={
          <Avatar>
            {/*todo person placeholder*/}
            <img src="../assets/images/avatars/man_avatar_3.png" alt="User Avatar" />
          </Avatar>
        }
      >
        <ShellBarItem icon={sysHelpIcon} text="Help" />
      </ShellBar>
      {/* If there are many notifications, conditionally rendering the popover might improve performance*/}
      <NotificationsPopover
        open={notificationsPopoverOpen}
        ref={notificationsPopoverRef}
        closeNotificationsPopover={closeNotificationsPopover}
      />
    </>
  );
}

NLShellBar.displayName = 'NLShellBar';
