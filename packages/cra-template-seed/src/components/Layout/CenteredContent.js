import React from 'react';
import { isMobile } from 'react-device-detect';

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
