import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import {
  Dialog,
  DialogPropTypes,
  PopoverPropTypes,
  ResponsivePopoverPropTypes,
  Toast,
  ToastDomRef,
  ToastPropTypes
} from '../../webComponents';
import { MessageBoxPropTypes } from '../MessageBox';

const unmountComponent = (container: DocumentFragment | HTMLElement) => {
  ReactDOM.unmountComponentAtNode(container);
  container.parentElement.removeChild(container);
};

export function showDialog(props: DialogPropTypes) {
  setTimeout(() => {
    const container = document.createDocumentFragment();
    ReactDOM.render(
      <Dialog
        {...props}
        open
        onAfterClose={(event) => {
          if (typeof props.onAfterClose === 'function') {
            props.onAfterClose(event);
          }
          unmountComponent(container);
        }}
      />,
      container
    );
  }, 0);
}

export function showPopover(props: PopoverPropTypes) {}

export function showResponsivePopover(props: ResponsivePopoverPropTypes) {}

export function showMessageBox(props: MessageBoxPropTypes) {}

export function showToast(props: ToastPropTypes): void {
  const ref = createRef<ToastDomRef>();
  setTimeout(() => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Toast {...props} ref={ref} />, container);
    ref.current?.show();
    setTimeout(() => {
      unmountComponent(container);
    }, props.duration ?? Toast.defaultProps.duration);
  }, 0);
}
