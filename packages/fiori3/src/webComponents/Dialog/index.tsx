import React, { Component, ReactNode } from 'react';
import UI5Dialog from '@ui5/webcomponents/dist/Dialog';
import { Event } from '@ui5-webcomponents-react/utils';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface DialogPropTypes extends WithWebComponentPropTypes {
  initialFocus?: string; // @generated
  hideHeader?: boolean; // @generated
  headerText?: string; // @generated
  stretch?: boolean; // @generated
  onBeforeOpen?: (event: Event) => void; // @generated
  onAfterOpen?: (event: Event) => void; // @generated
  onBeforeClose?: (event: Event) => void; // @generated
  onAfterClose?: (event: Event) => void; // @generated
  header?: ReactNode; // @generated
  footer?: ReactNode; // @generated
  content?: ReactNode | ReactNode[];
  open?: boolean;
}

const InnerDialog = withWebComponent<DialogPropTypes>(UI5Dialog);

export class Dialog extends Component<DialogPropTypes> {
  static defaultProps = {
    initialFocus: null, // @generated
    headerText: '' // @generated
  };

  private dialogRef;

  private handleDialogRef = (el) => {
    const { innerComponentRef } = this.props;
    this.dialogRef = el;
    if (innerComponentRef) {
      innerComponentRef(el);
    }
  };

  private setDialogOpen(open) {
    if (!this.dialogRef || !this.dialogRef.open) {
      return;
    }
    return open ? this.dialogRef.open() : this.dialogRef.close();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      this.setDialogOpen(this.props.open);
    }
  }

  componentDidMount() {
    if (this.props.open) {
      this.setDialogOpen(true);
    }
  }

  render() {
    return <InnerDialog {...this.props} innerComponentRef={this.handleDialogRef} />;
  }
}
