import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import BrowserURL from '../../util/BrowserURL';

const style = {
  shell: {
    position: 'fixed',
    width: '100%',
    zIndex: 100
  }
};

const Shell = ({ title, ...props }) => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <ShellBar
      data-testid='shell-wrapper'
      style={style.shell}
      onLogoClick={() => history.push(BrowserURL.HOME)}
      primaryTitle={title}
      logo={
        <img alt={t('shell.logo.alt')} src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />
      }
      {...props} />
  );
}

export default Shell;
