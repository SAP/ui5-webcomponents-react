import { useLocation, useNavigate } from 'react-router';
import { getTheme, setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import paletteIcon from '@ui5/webcomponents-icons/dist/palette.js';
import {
  Button,
  List,
  ListItemStandard,
  ListPropTypes,
  ResponsivePopover,
  ResponsivePopoverDomRef,
  ShellBar,
  ShellBarItem,
  ShellBarItemPropTypes
} from '@ui5/webcomponents-react';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import { useRef, useState } from 'react';
import classes from './AppShellBar.module.css';

const THEMES = [
  { key: 'sap_horizon', value: 'Morning Horizon (Light)' },
  { key: 'sap_horizon_dark', value: 'Evening Horizon (Dark)' },
  { key: 'sap_horizon_hcb', value: 'Horizon High Contrast Black' },
  { key: 'sap_horizon_hcw', value: 'Horizon High Contrast White' }
];

export function AppShellBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const popoverRef = useRef<ResponsivePopoverDomRef | null>(null);
  const [currentTheme, setCurrentTheme] = useState(getTheme);

  const handleThemeSwitchItemClick: ShellBarItemPropTypes['onClick'] = (e) => {
    if (popoverRef.current) {
      popoverRef.current.opener = e.detail.targetRef;
      popoverRef.current.open = true;
    }
  };
  const handleThemeSwitch: ListPropTypes['onSelectionChange'] = (e) => {
    const { targetItem } = e.detail;
    setTheme(targetItem.dataset.key!);
    setCurrentTheme(targetItem.dataset.key!);
  };

  return (
    <>
      <ShellBar
        primaryTitle={'UI5 Web Components for React Examples'}
        secondaryTitle={'Remix.run App'}
        startButton={
          pathname !== '/' && (
            <Button
              icon={navBackIcon}
              onClick={() => {
                navigate(-1);
              }}
            />
          )
        }
      >
        <ShellBarItem icon={paletteIcon} text="Change Theme" onClick={handleThemeSwitchItemClick} />
      </ShellBar>
      <ResponsivePopover ref={popoverRef} className={classes.popover}>
        <List onSelectionChange={handleThemeSwitch} headerText="Change Theme" selectionMode={ListSelectionMode.Single}>
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
