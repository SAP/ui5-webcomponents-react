import React from 'react';

import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';

const style = {
  shell: {
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid #ececec',
    position: 'fixed',
    width: '100%',
    zIndex: 100
  }
};

const Shell = ({ title, ...props }) => {

  return (
    <div data-testid='shell-wrapper' style={style.shell} className='p-4'>
      <ShellBar primaryTitle={title} {...props} />
    </div>
  );
}

export default Shell;
