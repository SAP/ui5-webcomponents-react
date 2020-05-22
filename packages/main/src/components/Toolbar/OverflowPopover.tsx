import React, { useEffect, useRef, useState } from 'react';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import '@ui5/webcomponents-icons/dist/icons/overflow';

export function OverflowPopover(props) {
  const { lastVisibleIndex, contentClass, children } = props;
  const popoverRef = useRef();
  const [pressed, setPressed] = useState(false);

  const handleToggleButtonClick = (e) => {
    if (popoverRef.current) {
      if (!pressed) {
        popoverRef.current.openBy(e.target);
        setPressed(true);
      } else {
        popoverRef.current.close();
      }
    }
  };

  const handleClose = () => {
    setPressed(false);
  };

  return (
    <>
      <ToggleButton
        design={ButtonDesign.Transparent}
        icon="sap-icon://overflow"
        onClick={handleToggleButtonClick}
        pressed={pressed}
      />
      <Popover placementType={PlacementType.Bottom} ref={popoverRef} onAfterClose={handleClose}>
        <div className={contentClass}>
          {React.Children.map(children, (item, index) => {
            if (index > lastVisibleIndex) return item;
            return null;
          })}
        </div>
      </Popover>
    </>
  );
}
