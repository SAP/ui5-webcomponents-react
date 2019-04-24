import React, { Component, ReactNode, RefObject } from 'react';
import { PlacementType } from '@fiori-for-react/core/enums/PlacementType';
import { PopoverHorizontalAlign } from '@fiori-for-react/core/enums/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '@fiori-for-react/core/enums/PopoverVerticalAlign';
import UI5Popover from '@ui5/webcomponents/dist/Popover';
import { Event } from '@fiori-for-react/utils';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface PopoverPropTypes extends WithWebComponentPropTypes {
  initialFocus?: string; // @generated
  hideHeader?: boolean; // @generated
  headerText?: string; // @generated
  placementType?: PlacementType; // @generated
  horizontalAlign?: PopoverHorizontalAlign; // @generated
  verticalAlign?: PopoverVerticalAlign; // @generated
  modal?: boolean; // @generated
  hideArrow?: boolean; // @generated
  stayOpenOnScroll?: boolean; // @generated
  allowTargetOverlap?: boolean; // @generated
  onBeforeOpen?: (event: Event) => void; // @generated
  onAfterOpen?: (event: Event) => void; // @generated
  onBeforeClose?: (event: Event) => void; // @generated
  onAfterClose?: (event: Event) => void; // @generated
  header?: ReactNode; // @generated
  footer?: ReactNode; // @generated
  content?: ReactNode | ReactNode[];
  openBy?: ReactNode;
  open?: boolean;
}

const InternalPopover = withWebComponent<PopoverPropTypes>(UI5Popover);

class Popover extends Component<PopoverPropTypes> {
  private popoverRef: any;
  private openByRef: RefObject<HTMLDivElement> = React.createRef();

  static defaultProps = {
    initialFocus: null, // @generated
    headerText: '', // @generated
    placementType: PlacementType.Right, // @generated
    horizontalAlign: PopoverHorizontalAlign.Center, // @generated
    verticalAlign: PopoverVerticalAlign.Center // @generated
  };

  private handleOpenPopover = () => {
    return this.popoverRef.openBy ? this.popoverRef.openBy(this.openByRef.current) : null;
  };

  private closePopover = () => {
    return this.popoverRef.close ? this.popoverRef.close() : null;
  };

  getPopoverRef = (el: any) => {
    const { innerComponentRef } = this.props;
    this.popoverRef = el;
    if (innerComponentRef) {
      innerComponentRef(el);
    }
  };

  componentDidMount() {
    const { open } = this.props;
    if (!this.popoverRef) {
      return;
    }
    if (open) {
      this.handleOpenPopover();
    } else {
      this.closePopover();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        this.handleOpenPopover();
      } else {
        this.closePopover();
      }
    }
  }

  render() {
    const { openBy, ...props } = this.props;

    return (
      <>
        {openBy && (
          <div style={{ display: 'inline-block' }} onClick={this.handleOpenPopover} ref={this.openByRef}>
            {openBy}
          </div>
        )}
        <InternalPopover {...props} innerComponentRef={this.getPopoverRef} />
      </>
    );
  }
}

export { Popover };
