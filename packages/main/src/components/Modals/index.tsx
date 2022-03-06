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

const render = (Element: ElementType, props: any, container: HTMLElement): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      ReactDOM.render(
        <ThemeProvider>
          <Element {...props} />
        </ThemeProvider>,
        container
      );
      resolve();
    }, 0);
  });
};

/**
 * Utility class for opening modals in an imperative way.
 *
 * These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
 * network calls.
 *
 * @since 0.22.2
 */
export class Modals {
  public static showDialog(props: DialogPropTypes, container?: HTMLElement): ClosableModalReturnType<DialogDomRef> {
    const ref = createRef<DialogDomRef>();
    const domContainer = getContainer(container);
    render(
      Dialog,
      {
        ...props,
        ref,
        open: true,
        onAfterClose: popupOnAfterCloseFactory(props, domContainer)
      },
      domContainer
    );

    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  }

  public static showPopover(props: PopoverPropTypes, container?: HTMLElement): ClosableModalReturnType<PopoverDomRef> {
    const ref = createRef<PopoverDomRef>();
    const domContainer = getContainer(container);
    render(
      Popover,
      {
        ...props,
        ref,
        open: true,
        onAfterClose: popupOnAfterCloseFactory(props, domContainer)
      },
      domContainer
    );
    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  }

  public static showResponsivePopover(
    props: ResponsivePopoverPropTypes,
    container?: HTMLElement
  ): ClosableModalReturnType<ResponsivePopoverDomRef> {
    const ref = createRef<ResponsivePopoverDomRef>();
    const domContainer = getContainer(container);
    render(
      ResponsivePopover,
      {
        ...props,
        ref,
        open: true,
        onAfterClose: popupOnAfterCloseFactory(props, domContainer)
      },
      domContainer
    );
    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  }

  public static showMessageBox(
    props: MessageBoxPropTypes,
    container?: HTMLElement
  ): ClosableModalReturnType<DialogDomRef> {
    const ref = createRef<DialogDomRef>();
    const domContainer = getContainer(container);
    render(
      MessageBox,
      {
        ...props,
        ref,
        open: true,
        onClose: (event) => {
          if (typeof props.onClose === 'function') {
            props.onClose(event);
          }
          unmountComponent(domContainer);
        }
      },
      domContainer
    );

    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  }

  public static showToast(props: ToastPropTypes, container?: HTMLElement): ModalReturnType<ToastDomRef> {
    const ref = createRef<ToastDomRef>();
    const domContainer = getContainer(container);
    render(Toast, { ...props, ref }, domContainer).then(() => {
      ref.current.show();
      setTimeout(() => {
        unmountComponent(domContainer);
      }, props.duration ?? Toast.defaultProps.duration);
    });

    return {
      ref
    };
  }
}
