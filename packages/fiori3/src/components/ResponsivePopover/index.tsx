import { Device, Event } from '@ui5-webcomponents-react/utils';
import React, { Component } from 'react';
import { Dialog } from '../../lib/Dialog';
import { Popover } from '../../lib/Popover';
import { DialogPropTypes } from '../../webComponents/Dialog';
import { PopoverPropTypes } from '../../webComponents/Popover';

export interface ResponsivePopoverPropTypes extends PopoverPropTypes, DialogPropTypes {
  open?: boolean;
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
    const { openBy, ...props } = this.props;

    if (Device.system.phone) {
      return (
        <>
          {openBy && (
            <div
              style={{ display: 'inline-block' }}
              onClick={this.handleOpenDialog}
              data-ui5-slot={this.props['data-ui5-slot']}
            >
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
