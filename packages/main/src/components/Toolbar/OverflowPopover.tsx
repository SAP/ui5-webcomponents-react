import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import PopupAccessibleRole from '@ui5/webcomponents/dist/types/PopupAccessibleRole.js';
import iconOverflow from '@ui5/webcomponents-icons/dist/overflow.js';
import { Device, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { Dispatch, FC, ReactElement, ReactNode, Ref, SetStateAction } from 'react';
import React, { cloneElement, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { PopoverPlacementType } from '../../enums/index.js';
import { getOverflowPopoverContext } from '../../internal/OverflowPopoverContext.js';
import { useCanRenderPortal } from '../../internal/ssr.js';
import { stopPropagation } from '../../internal/stopPropagation.js';
import { getUi5TagWithSuffix } from '../../internal/utils.js';
import type {
  ButtonPropTypes,
  PopoverDomRef,
  ToggleButtonDomRef,
  ToggleButtonPropTypes
} from '../../webComponents/index.js';
import { Popover, ToggleButton } from '../../webComponents/index.js';
import type { ToolbarPropTypes } from './index.js';

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
  setIsMounted: Dispatch<SetStateAction<boolean>>;
  a11yConfig?: ToolbarPropTypes['a11yConfig'];
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
    overflowButton,
    overflowPopoverRef,
    setIsMounted,
    a11yConfig
  } = props;
  const [pressed, setPressed] = useState(false);
  const toggleBtnRef = useRef<ToggleButtonDomRef>(null);
  const [componentRef, popoverRef] = useSyncRef(overflowPopoverRef);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

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
      toggleBtnRef.current.accessibilityAttributes = { expanded: true, hasPopup: 'Menu' };
    }
  };
  const handleAfterOpen = () => {
    setPressed(true);
  };

  const handleClose = (e) => {
    if (toggleBtnRef.current) {
      toggleBtnRef.current.accessibilityAttributes = { expanded: false, hasPopup: 'Menu' };
    }
    stopPropagation(e);
    setPressed(false);
  };

  useEffect(() => {
    const tagName = getUi5TagWithSuffix('ui5-toggle-button');
    customElements.whenDefined(tagName).then(() => {
      if (toggleBtnRef.current) {
        toggleBtnRef.current.accessibilityAttributes = { expanded: pressed, hasPopup: 'Menu' };
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

  const canRenderPortal = useCanRenderPortal();

  const accessibleRole = (() => {
    if (a11yConfig?.overflowPopover?.contentRole) {
      return PopupAccessibleRole.None;
    }
    return a11yConfig?.overflowPopover?.role;
  })();

  const OverflowPopoverContextProvider = getOverflowPopoverContext().Provider;

  return (
    <OverflowPopoverContextProvider value={{ inPopover: true }}>
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
      {canRenderPortal &&
        createPortal(
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
            accessibleRole={accessibleRole}
          >
            <div
              className={classes.popoverContent}
              ref={overflowContentRef}
              role={a11yConfig?.overflowPopover?.contentRole}
              data-component-name="ToolbarOverflowPopoverContent"
            >
              {children.map((item, index) => {
                if (index > lastVisibleIndex && index > numberOfAlwaysVisibleItems - 1) {
                  // @ts-expect-error: if props is not defined, it doesn't have an id (is not a ReactElement)
                  if (item?.props?.id) {
                    // @ts-expect-error: item is ReactElement
                    return cloneElement(item, { id: `${item.props.id}-overflow` });
                  }
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
              })}
            </div>
          </Popover>,
          portalContainer ?? document.body
        )}
    </OverflowPopoverContextProvider>
  );
};
