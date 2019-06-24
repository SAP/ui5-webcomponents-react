import { Event } from '@ui5-webcomponents-react/base';
import UI5Popover from '@ui5/webcomponents/dist/Popover';
import React, { Component, CSSProperties, ReactNode, RefObject } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { PlacementType } from '../../lib/PlacementType';
import { PopoverHorizontalAlign } from '../../lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '../../lib/PopoverVerticalAlign';

export interface PopoverPropTypes extends WithWebComponentPropTypes {
  initialFocus?: string; // @generated
  noHeader?: boolean; // @generated
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
    const { openBy, openByStyle, ...props } = this.props;
    let style = { display: 'inline-block' };
    if (openByStyle) {
      style = Object.assign(openByStyle, style);
    }
    return (
      <>
        {openBy && (
          <div style={style} onClick={this.handleOpenPopover} ref={this.openByRef}>
            {openBy}
          </div>
        )}
        <InternalPopover {...props} innerComponentRef={this.getPopoverRef} />
      </>
    );
  }
}

export { Popover };
