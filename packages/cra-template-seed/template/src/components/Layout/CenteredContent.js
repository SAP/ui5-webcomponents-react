import React from 'react';
import { isPhone } from '@ui5/webcomponents-base/dist/Device.js';

const style = {
  centered: {
    minWidth: isPhone() ? '80%' : '50%',
    padding: '1rem',
    margin: '0 auto'
  }
};

const CenteredContent = (props) => {
  return (
    <div data-testid="centered-content" style={style.centered} {...props}>
      {props.children}
    </div>
  );
};

export default CenteredContent;
