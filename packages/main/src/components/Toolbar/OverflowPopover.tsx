import React from 'react';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import '@ui5/webcomponents-icons/dist/icons/overflow';

const openByStyle = {
  display: 'flex'
};

export function OverflowPopover(props) {
  const { lastVisibleIndex, contentClass, children } = props;
  return (
    <Popover
      placementType={PlacementType.Bottom}
      openBy={<ToggleButton design={ButtonDesign.Transparent} icon="sap-icon://overflow" />}
      openByStyle={openByStyle}
    >
      <div className={contentClass}>
        {React.Children.map(children, (item, index) => {
          if (index > lastVisibleIndex) return item;
          return null;
        })}
      </div>
    </Popover>
  );
}
