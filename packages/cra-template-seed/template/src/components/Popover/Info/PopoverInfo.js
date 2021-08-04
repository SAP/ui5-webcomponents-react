import React from 'react';

import { FlexBox, FlexBoxDirection, Popover, PopoverPlacementType, Title } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';

const PopoverInfo = ({ popoverRef, placementType = PopoverPlacementType.Bottom, title, ...props }) => {
  return (
    <Popover data-testid="popoverInfo-wrapper" ref={popoverRef} placementType={placementType}>
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
};

export default PopoverInfo;
