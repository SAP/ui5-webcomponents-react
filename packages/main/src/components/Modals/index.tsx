import React, { createRef, MutableRefObject, Ref, RefObject, useCallback, useRef } from 'react';
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

type ModalHookReturnType<Props, DomRef> = (props: Props, container?: HTMLElement) => ModalReturnType<DomRef>;
type CloseableModalHookReturnType<Props, DomRef> = (
  props: Props,
  container?: HTMLElement
) => ClosableModalReturnType<DomRef>;

const checkContext = (context: any): void => {
  if (!context) {
    // eslint-disable-next-line no-console
    console.error(`Please make sure that your application is wrapped in the '<ThemeProvider />' component.`);
  }
};

const showDialog = (props: any, setModal: React.Dispatch<UpdateModalStateAction>, container?: HTMLElement) => {
  checkContext(setModal);
  const id = getRandomId();
  const ref = createRef<DialogDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: Dialog,
      props: {
        ...props,
        ref,
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
      container,
      id
    }
  });
  return { ref };
};

const showPopover = (props: any, setModal: React.Dispatch<UpdateModalStateAction>, container?: HTMLElement) => {
  checkContext(setModal);
  const id = getRandomId();
  const ref = createRef<PopoverDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: Popover,
      props: {
        ...props,
        ref,
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
      container,
      id
    }
  });
  return { ref };
};

const showResponsivePopover = (
  props: any,
  setModal: React.Dispatch<UpdateModalStateAction>,
  container?: HTMLElement
) => {
  checkContext(setModal);
  const id = getRandomId();
  const ref = createRef<ResponsivePopoverDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: ResponsivePopover,
      props: {
        ...props,
        ref,
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
      container,
      id
    }
  });
  return { ref };
};

const showMessageBox = (props: any, setModal: React.Dispatch<UpdateModalStateAction>, container?: HTMLElement) => {
  checkContext(setModal);
  const id = getRandomId();
  const ref = createRef<DialogDomRef>();
  setModal?.({
    type: 'set',
    payload: {
      Component: MessageBox,
      props: {
        ...props,
        ref,
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
      container,
      id
    }
  });
  return { ref };
};

const showToast = (props: any, setModal: React.Dispatch<UpdateModalStateAction>, container?: HTMLElement) => {
  const ref = createRef<ToastDomRef>() as MutableRefObject<ToastDomRef>;
  checkContext(setModal);
  const id = getRandomId();
  setModal?.({
    type: 'set',
    payload: {
      Component: Toast,
      props: {
        ...props,
        ref: (el: ToastDomRef) => {
          ref.current = el;
          if (el && !(el as any).open) {
            el.show();
            setTimeout(() => {
              setModal({
                type: 'reset',
                payload: { id }
              });
            }, props.duration ?? Toast.defaultProps.duration);
          }
        }
      },
      container,
      id
    }
  });
  return { ref };
};

/**
 * Utility class for opening modals in an imperative way.
 *
 * These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
 * network calls.
 *
 * @since 0.22.2
 */
export const Modals = {
  showDialog: (props: DialogPropTypes, container?: HTMLElement): ClosableModalReturnType<DialogDomRef> => {
    const setModal = window['@ui5/webcomponents-react']?.setModal;
    const { ref } = showDialog(props, setModal, container);

    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  },

  useShowDialog: (): CloseableModalHookReturnType<DialogPropTypes, DialogDomRef> => {
    const { setModal } = useModalsContext();

    return useCallback(
      (props, container) => {
        const { ref } = showDialog(props, setModal, container);

        return {
          ref,
          close: () => {
            ref.current?.close();
          }
        };
      },
      [setModal]
    );
  },

  showPopover: (props: PopoverPropTypes, container?: HTMLElement): ClosableModalReturnType<PopoverDomRef> => {
    const setModal = window['@ui5/webcomponents-react']?.setModal;
    const { ref } = showPopover(props, setModal, container);

    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  },

  useShowPopover: (): CloseableModalHookReturnType<PopoverPropTypes, PopoverDomRef> => {
    const { setModal } = useModalsContext();
    return useCallback(
      (props, container) => {
        const { ref } = showPopover(props, setModal, container);

        return {
          ref,
          close: () => {
            ref.current?.close();
          }
        };
      },
      [setModal]
    );
  },

  showResponsivePopover: (
    props: ResponsivePopoverPropTypes,
    container?: HTMLElement
  ): ClosableModalReturnType<ResponsivePopoverDomRef> => {
    const setModal = window['@ui5/webcomponents-react']?.setModal;
    const { ref } = showResponsivePopover(props, setModal, container);

    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  },

  useShowResponsivePopover: (): CloseableModalHookReturnType<ResponsivePopoverPropTypes, ResponsivePopoverDomRef> => {
    const { setModal } = useModalsContext();
    return useCallback(
      (props, container) => {
        const { ref } = showResponsivePopover(props, setModal, container);

        return {
          ref,
          close: () => {
            ref.current?.close();
          }
        };
      },
      [setModal]
    );
  },

  showMessageBox: (props: MessageBoxPropTypes, container?: HTMLElement): ClosableModalReturnType<DialogDomRef> => {
    const setModal = window['@ui5/webcomponents-react']?.setModal;
    const { ref } = showMessageBox(props, setModal, container);

    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  },

  useShowMessageBox: (): CloseableModalHookReturnType<MessageBoxPropTypes, DialogDomRef> => {
    const { setModal } = useModalsContext();
    return useCallback(
      (props, container) => {
        const { ref } = showMessageBox(props, setModal, container);

        return {
          ref,
          close: () => {
            ref.current?.close();
          }
        };
      },
      [setModal]
    );
  },

  showToast: (props: ToastPropTypes, container?: HTMLElement): ModalReturnType<ToastDomRef> => {
    const setModal = window['@ui5/webcomponents-react']?.setModal;
    const { ref } = showToast(props, setModal, container);

    return {
      ref
    };
  },
  useShowToast: (): ModalHookReturnType<ToastPropTypes, ToastDomRef> => {
    const { setModal } = useModalsContext();

    return useCallback(
      (props: ToastPropTypes, container?: HTMLElement) => {
        const { ref } = showToast(props, setModal, container);
        return {
          ref
        };
      },
      [setModal]
    );
  }
};
