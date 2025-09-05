import userSettingsIcon from '@ui5/webcomponents-icons/dist/user-settings.js';
import type { MessageBoxPropTypes } from '@ui5/webcomponents-react/MessageBox';
import { Avatar } from '@ui5/webcomponents-react/Avatar';
import { Button } from '@ui5/webcomponents-react/Button';
import { Label } from '@ui5/webcomponents-react/Label';
import { MessageBox } from '@ui5/webcomponents-react/MessageBox';
import { Panel } from '@ui5/webcomponents-react/Panel';
import { Text } from '@ui5/webcomponents-react/Text';
import { Title } from '@ui5/webcomponents-react/Title';
import { UserSettingsItem } from '@ui5/webcomponents-react/UserSettingsItem';
import { UserSettingsView } from '@ui5/webcomponents-react/UserSettingsView';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export function UserAccountItem() {
  const [messageBoxOpen, setMessageBoxOpen] = useState(false);

  const handleMessageBoxClose: MessageBoxPropTypes['onClose'] = (action) => {
    if (action === 'OK') {
      console.log('Personalization was reset successfully!');
    }
    setMessageBoxOpen(false);
  };

  return (
    <>
      <UserSettingsItem
        icon={userSettingsIcon}
        text="User Account"
        tooltip="User Account"
        headerText="User Account"
        pages={
          <UserSettingsView>
            <div className="container">
              <Avatar size="L" className="ua-info-profile">
                <img src="../assets/images/avatars/man_avatar_3.png" alt="Profile" />
              </Avatar>
              <Title level="H3" className="ua-name ua-info-profile">
                Alain Chevalier
              </Title>
              <div className="ua-info-item">
                <Label for="name">Name:</Label>
                <Text id="name">Alain Chevalier</Text>
              </div>
              <div className="ua-info-item">
                <Label for="email">Email:</Label>
                <Text id="email">alian.chevalier@sap.com</Text>
              </div>
              <div className="ua-info-item">
                <Label for="server">Server:</Label>
                <Text id="server">delivery-001.sap.com</Text>
              </div>
            </div>
            <Label for="reset-all-button">Personalization</Label>
            <br />
            <Button
              id="reset-all-button"
              onClick={() => {
                setMessageBoxOpen(true);
              }}
            >
              Reset All Personalization
            </Button>
            <Panel fixed className="ua-panel">
              <Text>
                Reset your personalization settings for the launchpad (such as theme, language, user activities, and
                home page content).
              </Text>
            </Panel>
          </UserSettingsView>
        }
      />
      {createPortal(
        <MessageBox open={messageBoxOpen} type="Warning" onClose={handleMessageBoxClose}>
          Clicking on reset will delete your personalization settings for the launchpad (e.g. theme, language, user
          activities, and home page content) and for apps using the launchpad personalization features (e.g. filter
          settings, table columns). This action is irreversible. Further changes in the dialog will not be applied. Are
          you sure you want to proceed with the reset?
        </MessageBox>,
        document.body,
      )}
    </>
  );
}

UserAccountItem.displayName = 'UserAccountItem';
