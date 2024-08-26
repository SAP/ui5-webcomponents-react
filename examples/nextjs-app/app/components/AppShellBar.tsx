'use client';

import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import paletteIcon from '@ui5/webcomponents-icons/dist/palette.js';
import {
  Button,
  List,
  ListPropTypes,
  ResponsivePopover,
  ResponsivePopoverDomRef,
  ShellBar,
  ShellBarItem,
  ShellBarItemPropTypes,
  ListItemStandard,
  ButtonDomRef
} from '@ui5/webcomponents-react';
import { usePathname, useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import classes from './AppShellBar.module.css';
import { getTheme, setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import ListMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';

const THEMES = [
  { key: 'sap_horizon', value: 'Morning Horizon (Light)' },
  { key: 'sap_horizon_dark', value: 'Evening Horizon (Dark)' },
  { key: 'sap_horizon_hcb', value: 'Horizon High Contrast Black' },
  { key: 'sap_horizon_hcw', value: 'Horizon High Contrast White' }
];

export function AppShellBar() {
  const router = useRouter();
  const pathname = usePathname();
  const popoverOpenerRef = useRef<ButtonDomRef | undefined>(undefined);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(getTheme);

  const handleThemeSwitchItemClick: ShellBarItemPropTypes['onClick'] = (e) => {
    popoverOpenerRef.current = e.detail.targetRef as ButtonDomRef;
    setPopoverOpen(true);
  };
  const handleThemeSwitch: ListPropTypes['onSelectionChange'] = (e) => {
    const { targetItem } = e.detail;
    void setTheme(targetItem.dataset.key!);
    setCurrentTheme(targetItem.dataset.key!);
  };

  return (
    <>
      <ShellBar
        primaryTitle={'UI5 Web Components for React Examples'}
        secondaryTitle={'NextJS - App Router'}
        startButton={
          pathname !== '/' && (
            <Button
              icon={navBackIcon}
              onClick={() => {
                router.back();
              }}
            />
          )
        }
      >
        <ShellBarItem icon={paletteIcon} text="Change Theme" onClick={handleThemeSwitchItemClick} />
      </ShellBar>
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
