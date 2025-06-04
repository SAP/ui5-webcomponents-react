import actionSettingsIcon from '@ui5/webcomponents-icons/dist/action-settings.js';
import messageInformationIcon from '@ui5/webcomponents-icons/dist/message-information.js';
import officialServiceIcon from '@ui5/webcomponents-icons/dist/official-service.js';
import { MessageBox, MessageBoxPropTypes, UserMenuDomRef, UserMenuPropTypes } from '@ui5/webcomponents-react';
import { UserMenu, UserMenuAccount, UserMenuItem, Text } from '@ui5/webcomponents-react';
import { Dispatch, forwardRef, SetStateAction, useState } from 'react';
import { NLUserSettingsDialog } from './UserSettingsDialog/NLUserSettingsDialog.tsx';

interface NLUserMenuProps extends Pick<UserMenuPropTypes, 'open'> {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const NLUserMenu = forwardRef<UserMenuDomRef, NLUserMenuProps>((props, ref) => {
  const { open, setOpen } = props;
  const [accountsLoading, setAccountsLoading] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState('0');
  const [messageBoxOpen, setMessageBoxOpen] = useState(false);
  const [userSettingsOpen, setUserSettingsOpen] = useState(false);

  const handleChangeAccount: UserMenuPropTypes['onChangeAccount'] = (e) => {
    setAccountsLoading(true);
    setTimeout(() => {
      setSelectedAccount(e.detail.selectedAccount.dataset.key!);
      setAccountsLoading(false);
    }, 1000);
  };

  const handleSignOutClick: UserMenuPropTypes['onSignOutClick'] = (e) => {
    e.preventDefault();
    setMessageBoxOpen(true);
  };

  const handleMessageBoxClose: MessageBoxPropTypes['onClose'] = (e) => {
    if (e === 'OK') {
      console.log('Signed out!');
      setOpen(false);
    }
    setMessageBoxOpen(false);
  };

  const handleSettingsClick = () => {
    setUserSettingsOpen(true);
  };

  return (
    <>
      <UserMenu
        ref={ref}
        open={open}
        showManageAccount
        showOtherAccounts
        showEditAccounts
        showEditButton
        onClose={() => {
          setOpen(false);
        }}
        onAvatarClick={() => {
          console.log('Avatar clicked!');
        }}
        onManageAccountClick={() => {
          console.log('Manage Account clicked!');
        }}
        onEditAccountsClick={() => {
          console.log('Edit Account clicked!');
        }}
        onChangeAccount={handleChangeAccount}
        onSignOutClick={handleSignOutClick}
        accounts={
          <>
            <UserMenuAccount
              loading={accountsLoading}
              avatarSrc="avatar.png"
              titleText="Alain Chevalier 1"
              subtitleText="alian.chevalier@sap.com"
              description="Delivery Manager, SAP SE"
              data-key="0"
              selected={selectedAccount === '0'}
            />
            <UserMenuAccount
              loading={accountsLoading}
              avatarInitials="JW"
              titleText="John Walker"
              subtitleText="john.walker@sap.com"
              description="Project Manager"
              data-key="1"
              selected={selectedAccount === '1'}
            />
            <UserMenuAccount
              loading={accountsLoading}
              avatarInitials="DS"
              titleText="David Wilson"
              subtitleText="david.wilson@sap.com"
              description="Project Manager"
              data-key="2"
              selected={selectedAccount === '2'}
            />
          </>
        }
      >
        <UserMenuItem icon={actionSettingsIcon} text="Setting" data-id="setting" onClick={handleSettingsClick} />
        <UserMenuItem icon={officialServiceIcon} text="Legal Information">
          <UserMenuItem text="Terms of Use" data-id="terms-of-use" />
          <UserMenuItem text="Private Policy" data-id="privacy-policy" />
        </UserMenuItem>
        <UserMenuItem icon={messageInformationIcon} text="About" data-id="about" />
      </UserMenu>
      <MessageBox open={messageBoxOpen} titleText="Sign Out" onClose={handleMessageBoxClose}>
        <Text>Are you sure you want to sign out?</Text>
      </MessageBox>
      {/*  conditionally rendered as the dialog could have a lot of content*/}
      {userSettingsOpen && <NLUserSettingsDialog open setOpen={setUserSettingsOpen} />}
    </>
  );
});

NLUserMenu.displayName = 'NLUserMenu';
