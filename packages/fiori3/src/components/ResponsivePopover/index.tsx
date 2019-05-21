import { Device, Event } from '@fiori-for-react/utils';
import { Dialog } from '../../lib/Dialog';
import { Popover } from '../../lib/Popover';
import React, { Component, CSSProperties } from 'react';
import { DialogPropTypes } from '../../webComponents/Dialog';
import { PopoverPropTypes } from '../../webComponents/Popover';

export interface ResponsivePopoverPropTypes extends PopoverPropTypes, DialogPropTypes {
  open?: boolean;
  openByStyle?: CSSProperties;
}

export class ResponsivePopover extends Component<ResponsivePopoverPropTypes> {
  state = {
    open: false
  };

  private popupRef = null;

  private handleOpenDialog = () => {
    this.setState({ open: true });
  };

  private onAfterClose = (event) => {
    const { onAfterClose } = this.props;
    this.setState({ open: false });
    if (onAfterClose) {
      onAfterClose(Event.of(this, event.getOriginalEvent(), event.getParameters()));
    }
  };

  private getDialogRef = (el) => {
    const { innerComponentRef } = this.props;
    this.popupRef = el;
    if (innerComponentRef) {
      innerComponentRef(el);
    }
  };

  render() {
    const { openBy, openByStyle, ...props } = this.props;

    let style = { display: 'inline-block' };
    if (openByStyle) {
      style = Object.assign(openByStyle, style);
    }

    if (Device.system.phone) {
      return (
        <>
          {openBy && (
            <div style={style} onClick={this.handleOpenDialog} data-ui5-slot={this.props['data-ui5-slot']}>
              {openBy}
            </div>
          )}
          <Dialog
            {...props}
            innerComponentRef={this.getDialogRef}
            open={this.state.open}
            onAfterClose={this.onAfterClose}
          />
        </>
      );
    } else {
      return <Popover {...this.props} />;
    }
  }
}
