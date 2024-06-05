'use client';

import type { Dispatch, MutableRefObject, RefObject } from 'react';
import { createRef, useCallback } from 'react';
import { getRandomId } from '../../internal/getRandomId.js';
import type { UpdateModalStateAction } from '../../internal/ModalsContext.js';
import { useModalsContext } from '../../internal/ModalsContext.js';
import type {
  DialogDomRef,
  DialogPropTypes,
  MenuDomRef,
  MenuPropTypes,
  PopoverDomRef,
  PopoverPropTypes,
  ResponsivePopoverDomRef,
  ResponsivePopoverPropTypes,
  ToastDomRef,
  ToastPropTypes
} from '../../webComponents/index.js';
import { Dialog, Menu, Popover, ResponsivePopover, Toast } from '../../webComponents/index.js';
import type { MessageBoxPropTypes } from '../MessageBox/index.js';
import { MessageBox } from '../MessageBox/index.js';

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
  setModal: Dispatch<UpdateModalStateAction<DialogPropTypes, DialogDomRef, ContainerElement>>,
  id: string,
  container?: ContainerElement
) {
  checkContext(setModal);
  const ref = createRef<DialogDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: Dialog,
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

function showPopover<ContainerElement>(
  props: PopoverPropTypes,
  setModal: Dispatch<UpdateModalStateAction<PopoverPropTypes, PopoverDomRef, ContainerElement>>,
  id: string,
  container?: ContainerElement
) {
  checkContext(setModal);
  const ref = createRef<PopoverDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: Popover,
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

function showResponsivePopover<ContainerElement>(
  props: ResponsivePopoverPropTypes,
  setModal: Dispatch<UpdateModalStateAction<ResponsivePopoverPropTypes, ResponsivePopoverDomRef, ContainerElement>>,
  id: string,
  container?: ContainerElement
) {
  checkContext(setModal);
  const ref = createRef<ResponsivePopoverDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: ResponsivePopover,
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

function showMenu<ContainerElement>(
  props: MenuPropTypes,
  setModal: Dispatch<UpdateModalStateAction<MenuPropTypes, MenuDomRef, ContainerElement>>,
  id: string,
  container?: ContainerElement
) {
  checkContext(setModal);
  const ref = createRef<MenuDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: Menu,
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

function showMessageBox<ContainerElement>(
  props: MessageBoxPropTypes,
  setModal: Dispatch<UpdateModalStateAction<MessageBoxPropTypes, DialogDomRef, ContainerElement>>,
  id: string,
  container?: ContainerElement
) {
  checkContext(setModal);
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
  setModal: Dispatch<UpdateModalStateAction<ToastPropTypes, ToastDomRef, ContainerElement>>,
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
        ...props,
        open: true
      },
      ref: (el: ToastDomRef & { open: boolean }) => {
        ref.current = el;
        if (el && !el.open) {
          setTimeout(() => {
            setModal({
              type: 'reset',
              payload: { id }
            });
          }, props.duration ?? 3000);
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
  const id = getRandomId();
  const { ref } = showDialog<ContainerElement>(props, setModal, id, container);

  return {
    ref,
    close: () => {
      setModal({
        type: 'reset',
        payload: { id }
      });
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
      const id = getRandomId();
      const { ref } = showDialog<ContainerElement>(props, setModal, id, container);

      return {
        ref,
        close: () => {
          setModal({
            type: 'reset',
            payload: { id }
          });
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
  const id = getRandomId();
  const { ref } = showPopover(props, setModal, id, container);

  return {
    ref,
    close: () => {
      setModal({
        type: 'reset',
        payload: { id }
      });
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
      const id = getRandomId();
      const { ref } = showPopover<ContainerElement>(props, setModal, id, container);

      return {
        ref,
        close: () => {
          setModal({
            type: 'reset',
            payload: { id }
          });
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
  const id = getRandomId();
  const { ref } = showResponsivePopover<ContainerElement>(props, setModal, id, container);

  return {
    ref,
    close: () => {
      setModal({
        type: 'reset',
        payload: { id }
      });
    }
  };
}

function useShowResponsivePopoverHook<ContainerElement>(): CloseableModalHookReturnType<
  ResponsivePopoverPropTypes,
  ResponsivePopoverDomRef,
  ContainerElement
> {
  const { setModal } = useModalsContext();
  return useCallback(
    (props, container) => {
      const id = getRandomId();
      const { ref } = showResponsivePopover<ContainerElement>(props, setModal, id, container);

      return {
        ref,
        close: () => {
          setModal({
            type: 'reset',
            payload: { id }
          });
        }
      };
    },
    [setModal]
  );
}

function showMenuFn<ContainerElement>(
  props: MenuPropTypes,
  container?: ContainerElement
): ClosableModalReturnType<MenuDomRef> {
  const setModal = window['@ui5/webcomponents-react']?.setModal;
  const id = getRandomId();
  const { ref } = showMenu<ContainerElement>(props, setModal, id, container);

  return {
    ref,
    close: () => {
      setModal({
        type: 'reset',
        payload: { id }
      });
    }
  };
}

function useShowMenuHook<ContainerElement>(): CloseableModalHookReturnType<
  MenuPropTypes,
  MenuDomRef,
  ContainerElement
> {
  const { setModal } = useModalsContext();
  return useCallback(
    (props, container) => {
      const id = getRandomId();
      const { ref } = showMenu<ContainerElement>(props, setModal, id, container);

      return {
        ref,
        close: () => {
          setModal({
            type: 'reset',
            payload: { id }
          });
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
  const id = getRandomId();
  const { ref } = showMessageBox<ContainerElement>(props, setModal, id, container);

  return {
    ref,
    close: () => {
      setModal({
        type: 'reset',
        payload: { id }
      });
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
      const id = getRandomId();
      const { ref } = showMessageBox<ContainerElement>(props, setModal, id, container);

      return {
        ref,
        close: () => {
          setModal({
            type: 'reset',
            payload: { id }
          });
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
  useShowResponsivePopover: useShowResponsivePopoverHook,
  /**
   * @since 1.8.0
   */
  showMenu: showMenuFn,
  /**
   * @since 1.8.0
   */
  useShowMenu: useShowMenuHook,
  showMessageBox: showMessageBoxFn,
  useShowMessageBox: useShowMessageBox,
  showToast: showToastFn,
  useShowToast: useShowToastHook
};
