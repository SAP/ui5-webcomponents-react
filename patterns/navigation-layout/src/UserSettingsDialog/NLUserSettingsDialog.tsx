import bellIcon from '@ui5/webcomponents-icons/dist/bell.js';
import type { UserSettingsDialogPropTypes } from '@ui5/webcomponents-react/UserSettingsDialog';
import { CheckBox } from '@ui5/webcomponents-react/CheckBox';
import { UserSettingsDialog } from '@ui5/webcomponents-react/UserSettingsDialog';
import { UserSettingsItem } from '@ui5/webcomponents-react/UserSettingsItem';
import { UserSettingsView } from '@ui5/webcomponents-react/UserSettingsView';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { AppearanceItem } from './AppearanceItem.tsx';
import { LanguageRegionItem } from './LanguageRegionItem.tsx';
import { MobileItem } from './MobileItem.tsx';
import { ResetItem } from './ResetItem.tsx';
import { UserAccountItem } from './UserAccountItem.tsx';

interface UserSettingsDialogProps extends Pick<UserSettingsDialogPropTypes, 'open'> {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function NLUserSettingsDialog({ open, setOpen }: UserSettingsDialogProps) {
  const [languageLoading, setLanguageLoading] = useState(false);
  const closeDialog = () => {
    setOpen(false);
  };

  const handleSelectionChange: UserSettingsDialogPropTypes['onSelectionChange'] = (e) => {
    if (e.detail.item?.text === 'Language & Region') {
      setLanguageLoading(true);
      setTimeout(() => {
        setLanguageLoading(false);
      }, 1000);
    }
  };

  return (
    <UserSettingsDialog
      open={open}
      headerText="Settings"
      showSearchField
      onClose={closeDialog}
      onSelectionChange={handleSelectionChange}
      fixedItems={<ResetItem setUserSettingsDialogOpen={setOpen} />}
    >
      <UserAccountItem />
      <AppearanceItem />
      <LanguageRegionItem loading={languageLoading} />
      <MobileItem />
      <UserSettingsItem
        icon={bellIcon}
        text="Notifications"
        tooltip="Notifications"
        headerText="Notifications"
        pages={
          <UserSettingsView>
            <CheckBox checked text="Show High-Priority Notification Alerts" />
          </UserSettingsView>
        }
      />
    </UserSettingsDialog>
  );
}

NLUserSettingsDialog.displayName = 'NLUserSettingsDialog';
