import React, { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { getUrl } from '../../util/browser/BrowserProvider';
import PopoverListItems from '../Popover/List/PopoverListItems';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

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
  const popoverItems = useMemo(
    () => [
      {
        description: t('shell.button.user.settings.item.languageSwitch'),
        icon: 'user-settings',
        children: <LanguageSwitch />,
      },
      {
        description: t('shell.button.user.settings.item.themeSwitch'),
        icon: 'customize',
        children: <ThemeSwitch />,
      },
    ],
    [t],
  );

  return (
    <>
      <ShellBar
        data-testid="shell-wrapper"
        primaryTitle={title}
        style={style.shell}
        logo={<img alt={t('shell.logo.alt')} src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />}
        onLogoClick={() => history.push(getUrl('HOME'))}
        profile={<Avatar icon="customer" shape={AvatarShape.Circle} size={AvatarSize.S} />}
        onProfileClick={(e) => popoverConfigItemsRef.current.openBy(e.detail.targetRef)}
        {...props}
      />
      <div data-testid="emptySpace-wrapper" style={style.emptySpace} />
      <PopoverListItems popoverRef={popoverConfigItemsRef} title={t('shell.button.user.settings')} items={popoverItems} />
    </>
  );
};

export default Shell;
