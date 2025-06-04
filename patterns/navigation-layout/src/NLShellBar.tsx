import NavigationLayoutMode from '@ui5/webcomponents-fiori/dist/types/NavigationLayoutMode.js';
import da2Icon from '@ui5/webcomponents-icons/dist/da-2.js';
import daIcon from '@ui5/webcomponents-icons/dist/da.js';
import menu2Icon from '@ui5/webcomponents-icons/dist/menu2.js';
import sysHelpIcon from '@ui5/webcomponents-icons/dist/sys-help.js';
import {
  Avatar,
  Button,
  NavigationLayoutDomRef,
  ResponsivePopoverDomRef,
  SearchItem,
  SearchScope,
  ShellBar,
  ShellBarItem,
  ShellBarPropTypes,
  ShellBarSearch,
  ShellBarSearchPropTypes,
  ShellBarSpacer,
  Tag,
  Text,
  ToggleButton,
  ToggleButtonPropTypes,
  UserMenuDomRef,
} from '@ui5/webcomponents-react';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { NLUserMenu } from './NLUserMenu.tsx';
import { NotificationsPopover } from './NotificationsPopover.tsx';

interface NLShellBarProps extends ShellBarPropTypes {
  setMode: Dispatch<SetStateAction<NavigationLayoutMode>>;
}

export function NLShellBar(props: NLShellBarProps) {
  const { setMode, ...rest } = props;
  const notificationsPopoverRef = useRef<ResponsivePopoverDomRef>(null);
  const userMenuRef = useRef<UserMenuDomRef>(null);
  const [assistantBtnPressed, setAssistantBtnPressed] = useState(false);
  const [notificationsPopoverOpen, setNotificationsPopoverOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

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

  const handleProfileClick: ShellBarPropTypes['onProfileClick'] = (e) => {
    userMenuRef.current!.opener = e.detail.targetRef;
    setUserMenuOpen(true);
  };

  const handleSearchScopeChange: ShellBarSearchPropTypes['onScopeChange'] = (e) => {};

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
        onProfileClick={handleProfileClick}
        startButton={
          <Button
            id="menu-button"
            icon={menu2Icon}
            tooltip="Toggle side navigation"
            accessibleName="Toggle side navigation"
            onClick={handleMenuBtnClick}
          />
        }
        logo={<img src="sap-logo.svg" alt="SAP Logo" />}
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
          <ShellBarSearch
            id="search-scope"
            showClearIcon
            placeholder="Search Apps, Products"
            onScopeChange={handleSearchScopeChange}
            scopes={
              <>
                <SearchScope text="All" selected />
                <SearchScope text="Apps" />
                <SearchScope text="Products" />
              </>
            }
          >
            {scopeData.map((item) => (
              <SearchItem key={item.name} text={item.name} scopeName={item.scope} />
            ))}
          </ShellBarSearch>
        }
        profile={
          <Avatar>
            <img src="avatar.png" alt="User Avatar" />
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
      <NLUserMenu open={userMenuOpen} ref={userMenuRef} setOpen={setUserMenuOpen} />
    </>
  );
}

NLShellBar.displayName = 'NLShellBar';

const scopeData = [
  { name: 'Laptop', scope: 'products' },
  { name: 'Leave Requests', scope: 'apps' },
  { name: 'Log work', scope: 'apps' },
  { name: 'Manage Products', scope: 'apps' },
  { name: 'Mobile Phones', scope: 'products' },
  { name: 'Tablet', scope: 'products' },
];
