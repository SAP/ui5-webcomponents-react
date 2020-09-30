import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import BrowserProvider from '../../util/URL/BrowserProvider';
import PopoverListItems from '../Popover/List/PopoverListItems';

const style = {
  shell: {
    position: 'fixed',
    width: '100%',
    zIndex: 100,
  },
  emptySpace: {
    paddingTop: '44px',
  },
};

const Shell = ({ title, ...props }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const popoverConfigItemsRef = useRef(null);
  const popoverItemsInterface = [
    {
      children: t('shell.button.user.settings.item.languageSwitch'),
      icon: 'user-settings',
      onClick: () => alert('activate language switch dialog'),
    },
    {
      children: t('shell.button.user.settings.item.themeSwitch'),
      icon: 'customize',
      onClick: () => alert('activate theme switch dialog'),
    },
  ];

  return (
    <>
      <ShellBar
        data-testid="shell-wrapper"
        primaryTitle={title}
        style={style.shell}
        logo={<img alt={t('shell.logo.alt')} src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />}
        onLogoClick={() => history.push(BrowserProvider.HOME)}
        profile={<Avatar icon="customer" shape={AvatarShape.Circle} size={AvatarSize.S} />}
        onProfileClick={(e) => popoverConfigItemsRef.current.openBy(e.detail.targetRef)}
        {...props}
      />
      <div style={style.emptySpace} />
      <PopoverListItems popoverRef={popoverConfigItemsRef} title={t('shell.button.user.settings')} items={popoverItemsInterface} />
    </>
  );
};

export default Shell;
