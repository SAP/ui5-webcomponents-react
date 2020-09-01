import React from 'react';

import { Link as LinkWC } from '@ui5/webcomponents-react/lib/Link';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';

function Link({ text, onClick }) {
  return (
    <LinkWC
      data-testid='link-wrapper'
      onClick={onClick}
      design={LinkDesign.Emphasized}>
      {text}
    </LinkWC>
  );
}

export default Link;
