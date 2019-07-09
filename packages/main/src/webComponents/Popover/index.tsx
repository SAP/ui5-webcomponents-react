import { Event } from '@ui5/webcomponents-react-base';
import UI5Popover from '@ui5/webcomponents/dist/Popover';
import React, { CSSProperties, ReactNode, RefObject, useCallback, useEffect, useRef } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { PlacementType } from '../../lib/PlacementType';
import { PopoverHorizontalAlign } from '../../lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '../../lib/PopoverVerticalAlign';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';

export interface PopoverPropTypes extends WithWebComponentPropTypes {
  initialFocus?: string; // @generated
  headerText?: string; // @generated
  placementType?: PlacementType; // @generated
  horizontalAlign?: PopoverHorizontalAlign; // @generated
  verticalAlign?: PopoverVerticalAlign; // @generated
  modal?: boolean; // @generated
  noArrow?: boolean; // @generated
  stayOpenOnScroll?: boolean; // @generated
  allowTargetOverlap?: boolean; // @generated
  onBeforeOpen?: (event: Event) => void; // @generated
  onAfterOpen?: (event: Event) => void; // @generated
  onBeforeClose?: (event: Event) => void; // @generated
  onAfterClose?: (event: Event) => void; // @generated
  header?: ReactNode; // @generated
  footer?: ReactNode; // @generated
  content?: ReactNode | ReactNode[];
  openByStyle?: CSSProperties;
  openBy?: ReactNode;
  open?: boolean;
}

const InternalPopover = withWebComponent<PopoverPropTypes>(UI5Popover);

export const Popover = React.forwardRef((props: PopoverPropTypes, popoverRef: RefObject<Ui5PopoverDomRef>) => {
  const { openBy, openByStyle, open, ...rest } = props;

  const localPopoverRef: RefObject<Ui5PopoverDomRef> = useRef(null);
  const openByRef: RefObject<HTMLDivElement> = useRef(null);

  const handleOpenPopover = useCallback(() => {
    localPopoverRef.current.openBy && localPopoverRef.current.openBy(openByRef.current);
  }, [localPopoverRef, openByRef]);

  const closePopover = useCallback(() => {
    localPopoverRef.current.close && localPopoverRef.current.close();
  }, [localPopoverRef]);

  useEffect(() => {
    if (open) {
      handleOpenPopover();
    } else {
      closePopover();
    }
  }, [open]);

  useEffect(() => {
    if (popoverRef) {
      if (typeof popoverRef === 'function') {
        // @ts-ignore
        popoverRef(localPopoverRef.current);
      } else if (popoverRef.hasOwnProperty('current')) {
        // @ts-ignore
        popoverRef.current = localPopoverRef.current;
      }
    }
  }, [popoverRef, localPopoverRef.current]);

  let style = { display: 'inline-block' };
  if (openByStyle) {
    style = Object.assign(openByStyle, style);
  }

  return (
    <>
      {openBy && (
        <div style={style} onClick={handleOpenPopover} ref={openByRef}>
          {openBy}
        </div>
      )}
      <InternalPopover {...rest} ref={localPopoverRef} />
    </>
  );
});

Popover.defaultProps = {
  initialFocus: null, // @generated
  headerText: '', // @generated
  placementType: PlacementType.Right, // @generated
  horizontalAlign: PopoverHorizontalAlign.Center, // @generated
  verticalAlign: PopoverVerticalAlign.Center // @generated
};
Popover.displayName = 'Popover';
