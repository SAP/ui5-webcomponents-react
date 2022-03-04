import React, { createRef, ElementType, RefObject } from 'react';
import ReactDOM from 'react-dom';
import {
  Dialog,
  DialogDomRef,
  DialogPropTypes,
  Popover,
  PopoverDomRef,
  PopoverPropTypes,
  ResponsivePopover,
  ResponsivePopoverDomRef,
  ResponsivePopoverPropTypes,
  Toast,
  ToastDomRef,
  ToastPropTypes
} from '../../webComponents';
import { MessageBox, MessageBoxPropTypes } from '../MessageBox';
import { ThemeProvider } from '../ThemeProvider';

type ModalReturnType<DomRef> = {
  ref: RefObject<DomRef>;
};

type ClosableModalReturnType<DomRef> = ModalReturnType<DomRef> & {
  close: () => void;
};

const getContainer = (givenContainer: HTMLElement) => {
  if (givenContainer) {
    return givenContainer;
  }
  const container = document.createElement('div');
  document.body.appendChild(container);
  return container;
};

const unmountComponent = (container: DocumentFragment | HTMLElement) => {
  ReactDOM.unmountComponentAtNode(container);
  container.parentElement.removeChild(container);
};

const popupOnAfterCloseFactory = (props, container) => (event) => {
  if (typeof props.onAfterClose === 'function') {
    props.onAfterClose(event);
  }
  unmountComponent(container);
};

const render = (Element: ElementType, props: any, ref: RefObject<any>, container: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      ReactDOM.render(
        <ThemeProvider>
          <Element {...props} ref={ref} />
        </ThemeProvider>,
        container
      );
      resolve();
    }, 0);
  });
};

export function showDialog(props: DialogPropTypes, container?: HTMLElement): ClosableModalReturnType<DialogDomRef> {
  const ref = createRef<DialogDomRef>();
  const domContainer = getContainer(container);
  render(
    Dialog,
    {
      ...props,
      open: true,
      onAfterClose: popupOnAfterCloseFactory(props, domContainer)
    },
    ref,
    domContainer
  );

  return {
    ref,
    close: () => {
      ref.current?.close();
    }
  };
}

export function showPopover(props: PopoverPropTypes, container?: HTMLElement): ClosableModalReturnType<PopoverDomRef> {
  const ref = createRef<PopoverDomRef>();
  const domContainer = getContainer(container);
  render(
    Popover,
    {
      ...props,
      open: true,
      onAfterClose: popupOnAfterCloseFactory(props, domContainer)
    },
    ref,
    domContainer
  );
  return {
    ref,
    close: () => {
      ref.current?.close();
    }
  };
}

export function showResponsivePopover(
  props: ResponsivePopoverPropTypes,
  container?: HTMLElement
): ClosableModalReturnType<ResponsivePopoverDomRef> {
  const ref = createRef<ResponsivePopoverDomRef>();
  const domContainer = getContainer(container);
  render(
    ResponsivePopover,
    {
      ...props,
      open: true,
      onAfterClose: popupOnAfterCloseFactory(props, domContainer)
    },
    ref,
    domContainer
  );
  return {
    ref,
    close: () => {
      ref.current?.close();
    }
  };
}

export function showMessageBox(
  props: MessageBoxPropTypes,
  container?: HTMLElement
): ClosableModalReturnType<DialogDomRef> {
  const ref = createRef<DialogDomRef>();
  const domContainer = getContainer(container);
  render(
    MessageBox,
    {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        unmountComponent(domContainer);
      }
    },
    ref,
    domContainer
  );

  return {
    ref,
    close: () => {
      ref.current?.close();
    }
  };
}

export function showToast(props: ToastPropTypes, container?: HTMLElement): ModalReturnType<ToastDomRef> {
  const ref = createRef<ToastDomRef>();
  const domContainer = getContainer(container);
  render(Toast, props, ref, domContainer).then(() => {
    ref.current.show();
    setTimeout(() => {
      unmountComponent(domContainer);
    }, props.duration ?? Toast.defaultProps.duration);
  });

  return {
    ref
  };
}
