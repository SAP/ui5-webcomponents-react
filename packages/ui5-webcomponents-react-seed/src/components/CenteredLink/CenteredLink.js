import React from 'react';

import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';

import './CenteredLink.css';

function CenteredLink() {
  return (
    <FlexBox
      style={{ width: '100%', height: '100vh' }}
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      <Link
        href="https://sap.github.io/ui5-webcomponents-react/"
        target="_blank"
        design={LinkDesign.Emphasized}>
        Getting Started with UI5 Web Component for React
      </Link>
    </FlexBox>
  );
}

export default CenteredLink;
