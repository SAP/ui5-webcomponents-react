import iphoneIcon from '@ui5/webcomponents-icons/dist/iphone.js';
import qrCodeIcon from '@ui5/webcomponents-icons/dist/qr-code.js';
import type { ButtonPropTypes, UserSettingsItemPropTypes } from '@ui5/webcomponents-react';
import { Button, Icon, Text, UserSettingsItem, UserSettingsView } from '@ui5/webcomponents-react';
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
