import React from 'react';

import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';

import './CenteredLink.css';

function CenteredLink({ text, onClick }) {
  return (
    <FlexBox
      style={{ width: '100%', height: 'auto' }}
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      <Link
        onClick={onClick}
        design={LinkDesign.Emphasized}>
        {text}
      </Link>
    </FlexBox>
  );
}

export default CenteredLink;
