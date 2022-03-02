import '@ui5/webcomponents-icons/dist/overflow.js';
import React, { FC, ReactElement, ReactNode, Ref, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ButtonDesign } from '../../enums/ButtonDesign';
import { PopoverPlacementType } from '../../enums/PopoverPlacementType';
import { stopPropagation } from '../../internal/stopPropagation';
import { Popover, PopoverDomRef } from '../../webComponents/Popover';
import { ToggleButton, ToggleButtonDomRef } from '../../webComponents/ToggleButton';
import { useSyncRef } from '@ui5/webcomponents-react-base';

interface OverflowPopoverProps {
  lastVisibleIndex: number;
  classes: any;
  children: ReactNode;
  portalContainer: Element;
  overflowContentRef: Ref<HTMLDivElement>;
  numberOfAlwaysVisibleItems?: number;
  showMoreText: string;
  overflowPopoverRef?: Ref<PopoverDomRef>;
}

export const OverflowPopover: FC<OverflowPopoverProps> = (props: OverflowPopoverProps) => {
  const {
    lastVisibleIndex,
    classes,
    children,
    portalContainer,
    overflowContentRef,
    numberOfAlwaysVisibleItems,
    showMoreText,
    overflowPopoverRef
  } = props;

  const [componentRef, popoverRef] = useSyncRef<PopoverDomRef>(overflowPopoverRef);
  const [pressed, setPressed] = useState(false);
  const toggleBtnRef = useRef<ToggleButtonDomRef>(null);

  const handleToggleButtonClick = useCallback(
    (e) => {
      e.stopPropagation();
      console.log(!pressed);
      toggleBtnRef.current.accessibilityAttributes.expanded = `${!pressed}`;
      if (popoverRef.current) {
        if (!pressed) {
          popoverRef.current.showAt(e.target);
          setPressed(true);
        } else {
          popoverRef.current.close();
        }
      }
    },
    [pressed]
  );

  useEffect(() => {
    return () => {
      if (popoverRef.current) {
        popoverRef.current.close();
      }
    };
  }, []);

  const handleClose = useCallback(
    (e) => {
      stopPropagation(e);
      setPressed(false);
    },
    [setPressed]
  );

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
    const waitForDefine = async () => {
      await customElements.whenDefined('ui5-toggle-button').then(() => {
        toggleBtnRef.current.accessibilityAttributes.expanded = `${pressed}`;
        toggleBtnRef.current.accessibilityAttributes.hasPopup = 'menu';
      });
    };
    waitForDefine();
  }, []);

  return (
    <>
      <ToggleButton
        ref={toggleBtnRef}
        design={ButtonDesign.Transparent}
        icon="overflow"
        onClick={handleToggleButtonClick}
        pressed={pressed}
        accessibleName={showMoreText}
      />
      {createPortal(
        <Popover
          className={classes.popover}
          placementType={PopoverPlacementType.Bottom}
          ref={componentRef}
          onAfterClose={handleClose}
          hideArrow
        >
          <div className={classes.popoverContent} ref={overflowContentRef}>
            {renderChildren()}
          </div>
        </Popover>,
        portalContainer
      )}
    </>
  );
};
