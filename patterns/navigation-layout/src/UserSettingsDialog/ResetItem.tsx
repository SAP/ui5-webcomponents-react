import resetIcon from '@ui5/webcomponents-icons/dist/reset.js';
import type { ButtonPropTypes } from '@ui5/webcomponents-react';
import { Button, Toast, UserSettingsItem, UserSettingsView } from '@ui5/webcomponents-react';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
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
