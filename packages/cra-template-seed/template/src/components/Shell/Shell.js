import { getScopedVarName } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import { Avatar, AvatarShape, ShellBar } from '@ui5/webcomponents-react';
import React, { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '@ui5/webcomponents-icons/dist/customer.js';
import { ROUTES } from '../../routes/Routes';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import PopoverListItems from '../Popover/List/PopoverListItems';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const style = {
  shell: {
    position: 'fixed',
    width: '100%',
    zIndex: 100
  },
  emptySpace: {
    paddingTop: getScopedVarName('--_ui5_shellbar_root_height')
  }
};

const Shell = ({ title, ...props }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const popoverConfigItemsRef = useRef(null);
  const popoverItems = useMemo(
    () => [
      {
        description: t('shell.button.user.settings.item.languageSwitch'),
        icon: 'user-settings',
        children: <LanguageSwitch />
      },
      {
        description: t('shell.button.user.settings.item.themeSwitch'),
        icon: 'customize',
        children: <ThemeSwitch />
      }
    ],
    [t]
  );

  return (
    <>
      <ShellBar
        data-testid="shell-wrapper"
        primaryTitle={title}
        style={style.shell}
        logo={
          <img alt={t('shell.logo.alt')} src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />
        }
        onLogoClick={() => navigate(ROUTES.HOME)}
        profile={<Avatar icon="customer" shape={AvatarShape.Circle} />}
        onProfileClick={(e) => popoverConfigItemsRef.current.showAt(e.detail.targetRef)}
        {...props}
      />
      <div data-testid="emptySpace-wrapper" style={style.emptySpace} />
      <PopoverListItems
        popoverRef={popoverConfigItemsRef}
        title={t('shell.button.user.settings')}
        items={popoverItems}
      />
    </>
  );
};

export default Shell;
