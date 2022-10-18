import '@ui5/webcomponents-icons/dist/overflow.js';
import { Device, useIsomorphicId } from '@ui5/webcomponents-react-base';
import clsx from 'clsx';
import React, { cloneElement, FC, ReactElement, ReactNode, Ref, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { PopoverPlacementType } from '../../enums/PopoverPlacementType';
import { OverflowPopoverContext } from '../../internal/OverflowPopoverContext';
import { stopPropagation } from '../../internal/stopPropagation';
import { ButtonPropTypes } from '../../webComponents';
import { Popover, PopoverDomRef } from '../../webComponents/Popover';
import { ToggleButton, ToggleButtonDomRef, ToggleButtonPropTypes } from '../../webComponents/ToggleButton';

interface OverflowPopoverProps {
  lastVisibleIndex: number;
  classes: any;
  children: ReactNode;
  portalContainer: Element;
  overflowContentRef: Ref<HTMLDivElement>;
  numberOfAlwaysVisibleItems?: number;
  showMoreText: string;
  overflowPopoverRef?: Ref<PopoverDomRef>;
  overflowButton?: ReactElement<ToggleButtonPropTypes> | ReactElement<ButtonPropTypes>;
}

const isPhone = Device.isPhone();

export const OverflowPopover: FC<OverflowPopoverProps> = (props: OverflowPopoverProps) => {
  const {
    lastVisibleIndex,
    classes,
    children,
    portalContainer,
    overflowContentRef,
    numberOfAlwaysVisibleItems,
    showMoreText,
    overflowPopoverRef,
    overflowButton
  } = props;
  const uniqueId = useIsomorphicId();
  const [pressed, setPressed] = useState(false);
  const toggleBtnRef = useRef<ToggleButtonDomRef>(null);

  const handleToggleButtonClick = (e) => {
    e.stopPropagation();
    if (!pressed) {
      setPressed(true);
    } else {
      setPressed(false);
    }
  };

  const handleBeforeOpen = () => {
    if (toggleBtnRef.current) {
      toggleBtnRef.current.accessibilityAttributes = { expanded: true, hasPopup: 'menu' };
    }
  };
  const handleAfterOpen = () => {
    setPressed(true);
  };

  const handleClose = (e) => {
    if (toggleBtnRef.current) {
      toggleBtnRef.current.accessibilityAttributes = { expanded: false, hasPopup: 'menu' };
    }
    stopPropagation(e);
    setPressed(false);
  };

  const renderChildren = useCallback(() => {
    return React.Children.toArray(
      (children as ReactElement)?.type === React.Fragment ? (children as ReactElement).props.children : children
    ).map((item: ReactElement<any>, index) => {
      if (index > lastVisibleIndex && index > numberOfAlwaysVisibleItems - 1) {
        if ((item.type as any).displayName === 'ToolbarSeparator') {
          return React.cloneElement(item, {
            style: {
              height: '0.0625rem',
              margin: '0.375rem 0.1875rem',
              width: '100%'
            }
          });
        }
        return item;
      }
      return null;
    });
  }, [children, lastVisibleIndex]);

  useEffect(() => {
    customElements.whenDefined('ui5-toggle-button').then(() => {
      if (toggleBtnRef.current) {
        toggleBtnRef.current.accessibilityAttributes = { expanded: pressed, hasPopup: 'menu' };
      }
    });
  }, []);

  const clonedOverflowButtonClick = (e) => {
    if (typeof overflowButton?.props?.onClick === 'function') {
      overflowButton.props.onClick(e);
    }
    if (!e.defaultPrevented) {
      handleToggleButtonClick(e);
    }
  };

  return (
    <OverflowPopoverContext.Provider value={{ inPopover: true }}>
      {overflowButton ? (
        cloneElement(overflowButton, { onClick: clonedOverflowButtonClick, id: overflowButton?.props?.id ?? uniqueId })
      ) : (
        <ToggleButton
          ref={toggleBtnRef}
          design={ButtonDesign.Transparent}
          icon="overflow"
          onClick={handleToggleButtonClick}
          pressed={pressed}
          accessibleName={showMoreText}
          tooltip={showMoreText}
          id={uniqueId}
        />
      )}
      {createPortal(
        <Popover
          className={clsx(classes.popover, isPhone && classes.popoverPhone)}
          placementType={PopoverPlacementType.Bottom}
          ref={overflowPopoverRef}
          open={pressed}
          opener={overflowButton?.props?.id ?? uniqueId}
          onAfterClose={handleClose}
          onBeforeOpen={handleBeforeOpen}
          onAfterOpen={handleAfterOpen}
          hideArrow
        >
          <div className={classes.popoverContent} ref={overflowContentRef}>
            {renderChildren()}
          </div>
        </Popover>,
        portalContainer
      )}
    </OverflowPopoverContext.Provider>
  );
};
