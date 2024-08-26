import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import paletteIcon from '@ui5/webcomponents-icons/dist/palette.js';
import {
  Avatar,
  Breadcrumbs,
  Button,
  DynamicPage,
  DynamicPageTitle,
  List,
  ListPropTypes,
  ResponsivePopover,
  ShellBar,
  ShellBarItem,
  ShellBarItemPropTypes,
  ListItemStandard,
  ButtonDomRef,
  Title
} from '@ui5/webcomponents-react';
import { useRef, useState } from 'react';
import { Outlet, useLocation, useMatches, useNavigate } from 'react-router-dom';
import { SingleTodoHandle } from './main.tsx';
import { Todo } from './mockImplementations/mockData.ts';
import classes from './AppShell.module.css';
import { getTheme, setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import ListMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';

const THEMES = [
  { key: 'sap_horizon', value: 'Morning Horizon (Light)' },
  { key: 'sap_horizon_dark', value: 'Evening Horizon (Dark)' },
  { key: 'sap_horizon_hcb', value: 'Horizon High Contrast Black' },
  { key: 'sap_horizon_hcw', value: 'Horizon High Contrast White' }
];

function AppShell() {
  const popoverOpenerRef = useRef<ButtonDomRef | undefined>(undefined);
  const [popoverOpen, setPopoverOpen] = useState(false);
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
    popoverOpenerRef.current = e.detail.targetRef as ButtonDomRef;
    setPopoverOpen(true);
  };
  const handleThemeSwitch: ListPropTypes['onSelectionChange'] = (e) => {
    const { targetItem } = e.detail;
    void setTheme(targetItem.dataset.key!);
    setCurrentTheme(targetItem.dataset.key!);
    setPopoverOpen(false);
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
            disabled={!location.key || location.key === 'default'}
          />
        }
      >
        <ShellBarItem icon={paletteIcon} text="Change Theme" onClick={handleThemeSwitchItemClick} />
      </ShellBar>
      <DynamicPage
        className={classes.dynamicPage}
        titleArea={
          <DynamicPageTitle
            heading={<Title>{detailViewMatchHandle?.getTitle(detailViewMatchData) ?? 'My To-Do List'}</Title>}
            breadcrumbs={<Breadcrumbs>{detailViewMatchHandle?.getBreadCrumbItems(detailViewMatchData)}</Breadcrumbs>}
          />
        }
      >
        <Outlet />
      </DynamicPage>
      <ResponsivePopover
        className={classes.popover}
        open={popoverOpen}
        opener={popoverOpenerRef.current}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        <List onSelectionChange={handleThemeSwitch} headerText="Change Theme" selectionMode={ListMode.Single}>
          {THEMES.map((theme) => (
            <ListItemStandard key={theme.key} selected={currentTheme === theme.key} data-key={theme.key}>
              {theme.value}
            </ListItemStandard>
          ))}
        </List>
      </ResponsivePopover>
    </>
  );
}

export default AppShell;
