import { Event } from '@ui5/webcomponents-react-base';
import UI5Popover from '@ui5/webcomponents/dist/Popover';
import React, { CSSProperties, ReactNode, RefObject, useCallback, useEffect, useMemo, useRef } from 'react';
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

export const Popover = React.forwardRef((props: PopoverPropTypes, givenRef: RefObject<Ui5PopoverDomRef>) => {
  const { openBy, openByStyle, open, ...rest } = props;

  const openByRef: RefObject<HTMLDivElement> = useRef(null);

  const useConsolidatedRef = (ref) => {
    const localPopoverRef: RefObject<Ui5PopoverDomRef> = useRef(null);

    const popRef = useMemo(() => {
      if (!givenRef || typeof givenRef === 'function') {
        return localPopoverRef;
      }
      return givenRef;
    }, [ref]);

    useEffect(() => {
      if (typeof givenRef === 'function') {
        // @ts-ignore
        givenRef(popRef.current);
      }
    }, [popRef.current]);

    return popRef;
  };

  const internalPopoverRef = useConsolidatedRef(givenRef);

  const handleOpenPopover = useCallback(() => {
    internalPopoverRef.current.openBy && internalPopoverRef.current.openBy(openByRef.current);
  }, [internalPopoverRef, openByRef]);

  const closePopover = useCallback(() => {
    internalPopoverRef.current.close && internalPopoverRef.current.close();
  }, [internalPopoverRef]);

  useEffect(() => {
    if (open) {
      handleOpenPopover();
    } else {
      closePopover();
    }
  }, [open]);

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
      <InternalPopover {...rest} ref={internalPopoverRef} />
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
