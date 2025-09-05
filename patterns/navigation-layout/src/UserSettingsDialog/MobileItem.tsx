import iphoneIcon from '@ui5/webcomponents-icons/dist/iphone.js';
import qrCodeIcon from '@ui5/webcomponents-icons/dist/qr-code.js';
import type { ButtonPropTypes } from '@ui5/webcomponents-react/Button';
import type { UserSettingsItemPropTypes } from '@ui5/webcomponents-react/UserSettingsItem';
import { Button } from '@ui5/webcomponents-react/Button';
import { Icon } from '@ui5/webcomponents-react/Icon';
import { Text } from '@ui5/webcomponents-react/Text';
import { UserSettingsItem } from '@ui5/webcomponents-react/UserSettingsItem';
import { UserSettingsView } from '@ui5/webcomponents-react/UserSettingsView';
import { useState } from 'react';

export function MobileItem() {
  const [selectedView, setSelectedView] = useState('primary');
  const [viewText, setViewText] = useState('');

  const handleMobileBtnClick: ButtonPropTypes['onClick'] = (e) => {
    setSelectedView('secondary');
    setViewText(e.target.innerText);
  };

  const handleSelectionChange: UserSettingsItemPropTypes['onSelectionChange'] = () => {
    setSelectedView('primary');
  };

  return (
    <UserSettingsItem
      icon={iphoneIcon}
      text="SAP Mobile Start Application"
      tooltip="SAP Mobile Start Application"
      headerText="SAP Mobile Start Application"
      onSelectionChange={handleSelectionChange}
      pages={
        <>
          <UserSettingsView
            text="SAP Mobile Start Application"
            data-view="primary"
            selected={selectedView === 'primary'}
          >
            <Button onClick={handleMobileBtnClick}>iOS</Button>
            <Button onClick={handleMobileBtnClick}>Android</Button>
          </UserSettingsView>
          <UserSettingsView text={viewText} secondary data-view="secondary" selected={selectedView === 'secondary'}>
            <Text>Enable access to your site from the SAP Mobile Start application.</Text>
            <Button id="mobile-install">Install</Button>
            <Button id="mobile-register">Register</Button>
            <Text>Scan the QR Code to install the mobile application</Text>
            <Icon name={qrCodeIcon} style={{ width: '20rem', height: '20rem' }} />
          </UserSettingsView>
        </>
      }
    />
  );
}

MobileItem.displayName = 'MobileItem';
