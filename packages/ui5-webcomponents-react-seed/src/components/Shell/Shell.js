import React from 'react';
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
  const history = useHistory();

  return (
    <ShellBar
      data-testid='shell-wrapper'
      style={style.shell}
      onLogoClick={() => history.push(BrowserURL.HOME)}
      logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" />}
      primaryTitle={title}
      {...props} />
  );
}

export default Shell;
