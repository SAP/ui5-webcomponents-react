import React from 'react';

import { Link } from '@ui5/webcomponents-react/lib/Link';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';

const HyperLink = ({ text, onClick }) => {
  return (
    <Link data-testid="hyperlink-wrapper" onClick={onClick} design={LinkDesign.Emphasized}>
      {text}
    </Link>
  );
};

export default HyperLink;
