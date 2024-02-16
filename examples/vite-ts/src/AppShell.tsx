import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import paletteIcon from '@ui5/webcomponents-icons/dist/palette.js';
import {
  Avatar,
  Breadcrumbs,
  Button,
  DynamicPage,
  DynamicPageTitle,
  List,
  ListMode,
  ListPropTypes,
  ResponsivePopover,
  ResponsivePopoverDomRef,
  ShellBar,
  ShellBarItem,
  ShellBarItemPropTypes,
  StandardListItem
} from '@ui5/webcomponents-react';
import { useRef, useState } from 'react';
import { Outlet, useLocation, useMatches, useNavigate } from 'react-router-dom';
import { SingleTodoHandle } from './main.tsx';
import { Todo } from './mockImplementations/mockData.ts';
import classes from './AppShell.module.css';
import { getTheme, setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';

const THEMES = [
  { key: 'sap_horizon', value: 'Morning Horizon (Light)' },
  { key: 'sap_horizon_dark', value: 'Evening Horizon (Dark)' },
  { key: 'sap_horizon_hcb', value: 'Horizon High Contrast Black' },
  { key: 'sap_horizon_hcw', value: 'Horizon High Contrast White' }
];

function AppShell() {
  const popoverRef = useRef<ResponsivePopoverDomRef>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const matches = useMatches();
  const [currentTheme, setCurrentTheme] = useState(getTheme);
  const detailViewMatch = matches.find((match) => Boolean(match.handle));
  const detailViewMatchHandle = detailViewMatch?.handle as SingleTodoHandle;
  const detailViewMatchData = detailViewMatch?.data as Todo;

  const handleLogoClick = () => {
    navigate('/');
  };
  const handleThemeSwitchItemClick: ShellBarItemPropTypes['onClick'] = (e) => {
    popoverRef.current?.showAt(e.detail.targetRef);
  };
  const handleThemeSwitch: ListPropTypes['onSelectionChange'] = (e) => {
    const { targetItem } = e.detail;
    setTheme(targetItem.dataset.key!);
    setCurrentTheme(targetItem.dataset.key!);
    popoverRef.current!.close();
  };
  return (
    <>
      <ShellBar
        logo={<img src="/vite.svg" alt={'Vite Logo'} />}
        primaryTitle="UI5 Web Components for React Examples"
        secondaryTitle="Vite.js"
        profile={
          <Avatar>
            <img src="/person.png" alt="Profile Avatar" />
          </Avatar>
        }
        onLogoClick={handleLogoClick}
        startButton={
          <Button
            icon={navBackIcon}
            onClick={() => {
              navigate(-1);
            }}
            disabled={!!location.key && location.key !== 'default'}
          />
        }
      >
        <ShellBarItem icon={paletteIcon} text="Change Theme" onClick={handleThemeSwitchItemClick} />
      </ShellBar>
      <DynamicPage
        headerTitle={
          <DynamicPageTitle
            header={detailViewMatchHandle?.getTitle(detailViewMatchData) ?? 'My To-Do List'}
            breadcrumbs={<Breadcrumbs>{detailViewMatchHandle?.getBreadCrumbItems(detailViewMatchData)}</Breadcrumbs>}
          />
        }
        showHideHeaderButton={false}
      >
        <Outlet />
      </DynamicPage>
      <ResponsivePopover ref={popoverRef} className={classes.popover}>
        <List onSelectionChange={handleThemeSwitch} headerText="Change Theme" mode={ListMode.SingleSelect}>
          {THEMES.map((theme) => (
            <StandardListItem key={theme.key} selected={currentTheme === theme.key} data-key={theme.key}>
              {theme.value}
            </StandardListItem>
          ))}
        </List>
      </ResponsivePopover>
    </>
  );
}

export default AppShell;
