import React from 'react';

import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { FlexBoxDirection, Title } from '@ui5/webcomponents-react';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { spacing } from '@ui5/webcomponents-react-base';

export default function PopoverInfo({ popoverRef, placementType, title, children }) {
  return (
    <Popover ref={popoverRef} placementType={placementType && PlacementType.Bottom}>
      <FlexBox direction={FlexBoxDirection.Column}>
        <div className="popover-header">
          <Title style={spacing.sapUiContentPadding}>{title}</Title>
        </div>
        <div className="popover-content">{children}</div>
      </FlexBox>
    </Popover>
  );
}
