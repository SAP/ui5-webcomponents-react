import '@ui5/webcomponents-icons/dist/overflow.js';
import { ButtonDesign } from '@ui5/webcomponents-react/dist/ButtonDesign';
import { PopoverPlacementType } from '@ui5/webcomponents-react/dist/PopoverPlacementType';
import { Popover, PopoverDomRef } from '@ui5/webcomponents-react/dist/Popover';
import { ToggleButton } from '@ui5/webcomponents-react/dist/ToggleButton';
import React, { FC, ReactElement, ReactNode, Ref, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { stopPropagation } from '../../internal/stopPropagation';

interface OverflowPopoverProps {
  lastVisibleIndex: number;
  contentClass: string;
  children: ReactNode;
  portalContainer: Element;
  overflowContentRef: Ref<HTMLDivElement>;
}

export const OverflowPopover: FC<OverflowPopoverProps> = (props: OverflowPopoverProps) => {
  const { lastVisibleIndex, contentClass, children, portalContainer, overflowContentRef } = props;
  const popoverRef = useRef<PopoverDomRef>();
  const [pressed, setPressed] = useState(false);

  const handleToggleButtonClick = useCallback(
    (e) => {
      e.stopPropagation();
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
      if (index > lastVisibleIndex) {
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

  return (
    <>
      <ToggleButton
        design={ButtonDesign.Transparent}
        icon="overflow"
        onClick={handleToggleButtonClick}
        pressed={pressed}
      />
      {createPortal(
        <Popover placementType={PopoverPlacementType.Bottom} ref={popoverRef} onAfterClose={handleClose} hideArrow>
          <div className={contentClass} ref={overflowContentRef}>
            {renderChildren()}
          </div>
        </Popover>,
        portalContainer
      )}
    </>
  );
};
