import '@ui5/webcomponents-icons/dist/icons/overflow';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React, { useCallback, useEffect, useRef, useState } from 'react';

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

  useEffect(() => {
    return () => {
      if (popoverRef.current) {
        popoverRef.current.close();
      }
    };
  }, []);

  const handleClose = () => {
    setPressed(false);
  };

  const renderChildren = useCallback(() => {
    return React.Children.map(children, (item, index) => {
      if (item.type.displayName === 'ToolbarSeparator') {
        console.log(
          React.cloneElement(item, {
            style: {
              height: '0.0625rem',
              margin: '0.375rem 0.1875rem',
              width: '100%'
            }
          })
        );
        return React.cloneElement(item, {
          style: {
            height: '0.0625rem',
            margin: '0.375rem 0.1875rem',
            width: '100%',
            background: ThemingParameters.sapToolbar_SeparatorColor
          }
        });
      }
      if (index > lastVisibleIndex) return item;
      return null;
    });
  }, [children]);

  return (
    <>
      <ToggleButton
        design={ButtonDesign.Transparent}
        icon="sap-icon://overflow"
        onClick={handleToggleButtonClick}
        pressed={pressed}
      />
      <Popover placementType={PlacementType.Bottom} ref={popoverRef} onAfterClose={handleClose}>
        <div className={contentClass}>{renderChildren()}</div>
      </Popover>
    </>
  );
}
