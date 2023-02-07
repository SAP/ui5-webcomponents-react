import iconOverflow from '@ui5/webcomponents-icons/dist/overflow.js';
import { Device, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, { cloneElement, FC, ReactElement, ReactNode, Ref, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ButtonDesign, PopoverPlacementType } from '../../enums';
import { OverflowPopoverContext } from '../../internal/OverflowPopoverContext';
import { stopPropagation } from '../../internal/stopPropagation';
import { getUi5TagWithSuffix } from '../../internal/utils';
import {
  ButtonPropTypes,
  Popover,
  PopoverDomRef,
  ToggleButton,
  ToggleButtonDomRef,
  ToggleButtonPropTypes
} from '../../webComponents';

interface OverflowPopoverProps {
  lastVisibleIndex: number;
  classes: Record<string, string>;
  children: ReactNode[];
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
  const [pressed, setPressed] = useState(false);
  const toggleBtnRef = useRef<ToggleButtonDomRef>(null);
  const [componentRef, popoverRef] = useSyncRef(overflowPopoverRef);

  const handleToggleButtonClick = (e) => {
    e.stopPropagation();
    setPressed((prev) => {
      if (!prev) {
        if (popoverRef.current) {
          popoverRef.current.opener = e.target;
        }
        return true;
      }
      return false;
    });
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

  const renderChildren = useCallback((): ReactNode[] => {
    return children.map((item, index) => {
      if (index > lastVisibleIndex && index > numberOfAlwaysVisibleItems - 1) {
        // @ts-expect-error: if type is not defined, it's not a spacer
        if (item.type?.displayName === 'ToolbarSeparator') {
          return cloneElement(item as ReactElement, {
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
    const tagName = getUi5TagWithSuffix('ui5-toggle-button');
    customElements.whenDefined(tagName).then(() => {
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
        cloneElement(overflowButton, { onClick: clonedOverflowButtonClick })
      ) : (
        <ToggleButton
          ref={toggleBtnRef}
          design={ButtonDesign.Transparent}
          icon={iconOverflow}
          onClick={handleToggleButtonClick}
          pressed={pressed}
          accessibleName={showMoreText}
          tooltip={showMoreText}
          data-component-name="ToolbarOverflowButton"
        />
      )}
      {createPortal(
        <Popover
          data-component-name="ToolbarOverflowPopover"
          className={clsx(classes.popover, isPhone && classes.popoverPhone)}
          placementType={PopoverPlacementType.Bottom}
          ref={componentRef}
          open={pressed}
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
