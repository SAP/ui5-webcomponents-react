import React from 'react';

import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { FlexBoxDirection, Title } from '@ui5/webcomponents-react';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { spacing } from '@ui5/webcomponents-react-base';

export default function PopoverInfo({ popoverRef, placementType, title, ...props }) {
  return (
    <Popover data-testid="popoverInfo-wrapper" ref={popoverRef} placementType={placementType ? placementType : PlacementType.Bottom}>
      <FlexBox direction={FlexBoxDirection.Column}>
        <div className="popover-header">
          {title && (
            <Title data-testid="popoverInfo-title-wrapper" style={spacing.sapUiContentPadding}>
              {title}
            </Title>
          )}
        </div>
        <div className="popover-content">{props.children}</div>
      </FlexBox>
    </Popover>
  );
}
