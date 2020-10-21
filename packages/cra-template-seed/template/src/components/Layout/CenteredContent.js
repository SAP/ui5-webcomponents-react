import React from 'react';
import { isMobile } from '@ui5/webcomponents-base/dist/Device';

const style = {
  centered: {
    minWidth: isMobile ? '80%' : '50%',
    padding: '1rem',
    margin: '0 auto',
  },
};

export default function CenteredContent({ ...props }) {
  return (
    <div data-testid="centered-content" style={style.centered}>
      {props.children}
    </div>
  );
}
