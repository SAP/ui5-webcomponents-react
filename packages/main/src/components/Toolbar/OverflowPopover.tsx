import '@ui5/webcomponents-icons/dist/icons/overflow';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { stopPropagation } from '../../internal/stopPropagation';

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

  const handleClose = (e) => {
    stopPropagation(e);
    setPressed(false);
  };

  const renderChildren = useCallback(() => {
    return React.Children.toArray(children?.type === React.Fragment ? children.props.children : children).map(
      (item: ReactElement<any>, index) => {
        if (index > lastVisibleIndex) {
          if (item.type.displayName === 'ToolbarSeparator') {
            return React.cloneElement(item, {
              style: {
                height: '0.0625rem',
                margin: '0.375rem 0.1875rem',
                width: '100%',
                background: ThemingParameters.sapToolbar_SeparatorColor
              }
            });
          }
          return item;
        }
        return null;
      }
    );
  }, [children, lastVisibleIndex]);

  return (
    <>
      <ToggleButton
        design={ButtonDesign.Transparent}
        icon="sap-icon://overflow"
        onClick={handleToggleButtonClick}
        pressed={pressed}
      />
      {createPortal(
        <Popover placementType={PlacementType.Bottom} ref={popoverRef} onAfterClose={handleClose}>
          <div className={contentClass}>{renderChildren()}</div>
        </Popover>,
        document.body
      )}
    </>
  );
}
