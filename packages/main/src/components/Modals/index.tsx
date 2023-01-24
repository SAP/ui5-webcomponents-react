'use client';

import React, { createRef, MutableRefObject, RefObject, useCallback } from 'react';
import { getRandomId } from '../../internal/getRandomId';
import { UpdateModalStateAction, useModalsContext } from '../../internal/ModalsContext';
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

type ModalReturnType<DomRef> = {
  ref: RefObject<DomRef>;
};

type ClosableModalReturnType<DomRef> = ModalReturnType<DomRef> & {
  close: () => void;
};

type ModalHookReturnType<Props, DomRef, ContainerElement = HTMLElement> = (
  props: Props,
  container?: ContainerElement
) => ModalReturnType<DomRef>;
type CloseableModalHookReturnType<Props, DomRef, ContainerElement = HTMLElement> = (
  props: Props,
  container?: ContainerElement
) => ClosableModalReturnType<DomRef>;

const checkContext = (context: any): void => {
  if (!context) {
    // eslint-disable-next-line no-console
    console.error(`Please make sure that your application is wrapped in the '<ThemeProvider />' component.`);
  }
};

function showDialog<ContainerElement>(
  props: DialogPropTypes,
  setModal: React.Dispatch<UpdateModalStateAction<DialogPropTypes, DialogDomRef, ContainerElement>>,
  container?: ContainerElement
) {
  checkContext(setModal);
  const id = getRandomId();
  const ref = createRef<DialogDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: Dialog,
      props: {
        ...props,
        open: true,
        onAfterClose: (event) => {
          if (typeof props.onAfterClose === 'function') {
            props.onAfterClose(event);
          }
          setModal({
            type: 'reset',
            payload: { id }
          });
        }
      },
      ref,
      container,
      id
    }
  });
  return { ref };
}

function showPopover<ContainerElement>(
  props: PopoverPropTypes,
  setModal: React.Dispatch<UpdateModalStateAction<PopoverPropTypes, PopoverDomRef, ContainerElement>>,
  container?: ContainerElement
) {
  checkContext(setModal);
  const id = getRandomId();
  const ref = createRef<PopoverDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: Popover,
      props: {
        ...props,

        open: true,
        onAfterClose: (event) => {
          if (typeof props.onAfterClose === 'function') {
            props.onAfterClose(event);
          }
          setModal({
            type: 'reset',
            payload: { id }
          });
        }
      },
      ref,
      container,
      id
    }
  });
  return { ref };
}

function showResponsivePopover<ContainerElement>(
  props: ResponsivePopoverPropTypes,
  setModal: React.Dispatch<
    UpdateModalStateAction<ResponsivePopoverPropTypes, ResponsivePopoverDomRef, ContainerElement>
  >,
  container?: ContainerElement
) {
  checkContext(setModal);
  const id = getRandomId();
  const ref = createRef<ResponsivePopoverDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: ResponsivePopover,
      props: {
        ...props,
        open: true,
        onAfterClose: (event) => {
          if (typeof props.onAfterClose === 'function') {
            props.onAfterClose(event);
          }
          setModal({
            type: 'reset',
            payload: { id }
          });
        }
      },
      ref,
      container,
      id
    }
  });
  return { ref };
}

function showMessageBox<ContainerElement>(
  props: MessageBoxPropTypes,
  setModal: React.Dispatch<UpdateModalStateAction<MessageBoxPropTypes, DialogDomRef, ContainerElement>>,
  container?: ContainerElement
) {
  checkContext(setModal);
  const id = getRandomId();
  const ref = createRef<DialogDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      // @ts-expect-error: props type safety is covered by the `props` property
      Component: MessageBox,
      props: {
        ...props,
        open: true,
        onClose: (event) => {
          if (typeof props.onClose === 'function') {
            props.onClose(event);
          }
          setModal({
            type: 'reset',
            payload: { id }
          });
        }
      },
      ref,
      container,
      id
    }
  });
  return { ref };
}

function showToast<ContainerElement>(
  props: ToastPropTypes,
  setModal: React.Dispatch<UpdateModalStateAction<ToastPropTypes, ToastDomRef, ContainerElement>>,
  container?: ContainerElement
) {
  const ref = createRef<ToastDomRef>() as MutableRefObject<ToastDomRef>;
  checkContext(setModal);
  const id = getRandomId();
  setModal?.({
    type: 'set',
    payload: {
      Component: Toast,
      props: {
        ...props
      },
      ref: (el: ToastDomRef & { open: boolean }) => {
        ref.current = el;
        if (el && !el.open) {
          el.show();
          setTimeout(() => {
            setModal({
              type: 'reset',
              payload: { id }
            });
          }, props.duration ?? Toast.defaultProps.duration);
        }
      },
      container,
      id
    }
  });
  return { ref };
}

function showDialogFn<ContainerElement = HTMLElement>(
  props: DialogPropTypes,
  container?: ContainerElement
): ClosableModalReturnType<DialogDomRef> {
  const setModal = window['@ui5/webcomponents-react']?.setModal;

  const { ref } = showDialog<ContainerElement>(props, setModal, container);

  return {
    ref,
    close: () => {
      ref.current?.close();
    }
  };
}

function useShowDialogHook<ContainerElement>(): CloseableModalHookReturnType<
  DialogPropTypes,
  DialogDomRef,
  ContainerElement
> {
  const { setModal } = useModalsContext();

  return useCallback(
    (props, container) => {
      const { ref } = showDialog<ContainerElement>(props, setModal, container);

      return {
        ref,
        close: () => {
          ref.current?.close();
        }
      };
    },
    [setModal]
  );
}

function showPopoverFn<ContainerElement>(
  props: PopoverPropTypes,
  container?: ContainerElement
): ClosableModalReturnType<PopoverDomRef> {
  const setModal = window['@ui5/webcomponents-react']?.setModal;
  const { ref } = showPopover(props, setModal, container);

  return {
    ref,
    close: () => {
      ref.current?.close();
    }
  };
}

function useShowPopoverHook<ContainerElement>(): CloseableModalHookReturnType<
  PopoverPropTypes,
  PopoverDomRef,
  ContainerElement
> {
  const { setModal } = useModalsContext();
  return useCallback(
    (props, container) => {
      const { ref } = showPopover<ContainerElement>(props, setModal, container);

      return {
        ref,
        close: () => {
          ref.current?.close();
        }
      };
    },
    [setModal]
  );
}

function showResponsivePopoverFn<ContainerElement>(
  props: ResponsivePopoverPropTypes,
  container?: ContainerElement
): ClosableModalReturnType<ResponsivePopoverDomRef> {
  const setModal = window['@ui5/webcomponents-react']?.setModal;
  const { ref } = showResponsivePopover<ContainerElement>(props, setModal, container);

  return {
    ref,
    close: () => {
      ref.current?.close();
    }
  };
}

function useResponsivePopoverHook<ContainerElement>(): CloseableModalHookReturnType<
  ResponsivePopoverPropTypes,
  ResponsivePopoverDomRef,
  ContainerElement
> {
  const { setModal } = useModalsContext();
  return useCallback(
    (props, container) => {
      const { ref } = showResponsivePopover<ContainerElement>(props, setModal, container);

      return {
        ref,
        close: () => {
          ref.current?.close();
        }
      };
    },
    [setModal]
  );
}

function showMessageBoxFn<ContainerElement>(
  props: MessageBoxPropTypes,
  container?: ContainerElement
): ClosableModalReturnType<DialogDomRef> {
  const setModal = window['@ui5/webcomponents-react']?.setModal;
  const { ref } = showMessageBox<ContainerElement>(props, setModal, container);

  return {
    ref,
    close: () => {
      ref.current?.close();
    }
  };
}
function useShowMessageBox<ContainerElement>(): CloseableModalHookReturnType<
  MessageBoxPropTypes,
  DialogDomRef,
  ContainerElement
> {
  const { setModal } = useModalsContext();
  return useCallback(
    (props, container) => {
      const { ref } = showMessageBox<ContainerElement>(props, setModal, container);

      return {
        ref,
        close: () => {
          ref.current?.close();
        }
      };
    },
    [setModal]
  );
}

function showToastFn<ContainerElement>(
  props: ToastPropTypes,
  container?: ContainerElement
): ModalReturnType<ToastDomRef> {
  const setModal = window['@ui5/webcomponents-react']?.setModal;
  const { ref } = showToast<ContainerElement>(props, setModal, container);

  return {
    ref
  };
}

function useShowToastHook<ContainerElement>(): ModalHookReturnType<ToastPropTypes, ToastDomRef, ContainerElement> {
  const { setModal } = useModalsContext();

  return useCallback(
    (props: ToastPropTypes, container?) => {
      const { ref } = showToast<ContainerElement>(props, setModal, container);
      return {
        ref
      };
    },
    [setModal]
  );
}

/**
 * Utility class for opening modals in an imperative way.
 *
 * These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
 * network calls.
 *
 * @since 0.22.2
 */
export const Modals = {
  showDialog: showDialogFn,
  useShowDialog: useShowDialogHook,
  showPopover: showPopoverFn,
  useShowPopover: useShowPopoverHook,
  showResponsivePopover: showResponsivePopoverFn,
  useShowResponsivePopover: useResponsivePopoverHook,
  showMessageBox: showMessageBoxFn,
  useShowMessageBox: useShowMessageBox,
  showToast: showToastFn,
  useShowToast: useShowToastHook
};
