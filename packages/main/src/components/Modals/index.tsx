import React, { createRef, MutableRefObject, Ref, RefObject, useCallback, useRef } from 'react';
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

const showDialog = (
  props: any,
  ref: Ref<any>,
  setModal: React.Dispatch<UpdateModalStateAction>,
  container?: HTMLElement
) => {
  checkContext(setModal);
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
            type: 'reset'
          });
        }
      },
      container
    }
  });
};

const showPopover = (
  props: any,
  ref: Ref<any>,
  setModal: React.Dispatch<UpdateModalStateAction>,
  container?: HTMLElement
) => {
  checkContext(setModal);
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
            type: 'reset'
          });
        }
      },
      container
    }
  });
};

const showResponsivePopover = (
  props: any,
  ref: Ref<any>,
  setModal: React.Dispatch<UpdateModalStateAction>,
  container?: HTMLElement
) => {
  checkContext(setModal);
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
            type: 'reset'
          });
        }
      },
      container
    }
  });
};

const showMessageBox = (
  props: any,
  ref: Ref<any>,
  setModal: React.Dispatch<UpdateModalStateAction>,
  container?: HTMLElement
) => {
  checkContext(setModal);
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
            type: 'reset'
          });
        }
      },
      container
    }
  });
};

const showToast = (
  props: any,
  ref: MutableRefObject<any>,
  setModal: React.Dispatch<UpdateModalStateAction>,
  container?: HTMLElement
) => {
  let isOpen = false;
  checkContext(setModal);
  setModal?.({
    type: 'set',
    payload: {
      Component: Toast,
      props: {
        ...props,
        ref: (el: ToastDomRef) => {
          ref.current = el;
          if (el && !isOpen) {
            el.show();
            setTimeout(() => {
              setModal({
                type: 'reset'
              });
            }, props.duration ?? Toast.defaultProps.duration);
            isOpen = true;
          }
        }
      },
      container
    }
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
export const Modals = {
  showDialog: (props: DialogPropTypes, container?: HTMLElement): ClosableModalReturnType<DialogDomRef> => {
    const ref = createRef<DialogDomRef>();
    const setModal = window['@ui5/webcomponents-react']?.setModal;
    showDialog(props, ref, setModal, container);

    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  },

  useShowDialog: (): CloseableModalHookReturnType<DialogPropTypes, DialogDomRef> => {
    const ref = useRef<DialogDomRef>(null);
    const { setModal } = useModalsContext();

    return useCallback(
      (props, container) => {
        showDialog(props, ref, setModal, container);

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
    const ref = createRef<PopoverDomRef>();
    const setModal = window['@ui5/webcomponents-react']?.setModal;
    showPopover(props, ref, setModal, container);

    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  },

  useShowPopover: (): CloseableModalHookReturnType<PopoverPropTypes, PopoverDomRef> => {
    const ref = useRef<PopoverDomRef>();
    const { setModal } = useModalsContext();
    return useCallback(
      (props, container) => {
        showPopover(props, ref, setModal, container);

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
    const ref = createRef<ResponsivePopoverDomRef>();
    const setModal = window['@ui5/webcomponents-react']?.setModal;
    showResponsivePopover(props, ref, setModal, container);

    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  },

  useShowResponsivePopover: (): CloseableModalHookReturnType<ResponsivePopoverPropTypes, ResponsivePopoverDomRef> => {
    const ref = useRef<ResponsivePopoverDomRef>();
    const { setModal } = useModalsContext();
    return useCallback(
      (props, container) => {
        showResponsivePopover(props, ref, setModal, container);

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
    const ref = createRef<DialogDomRef>();
    const setModal = window['@ui5/webcomponents-react']?.setModal;
    showMessageBox(props, ref, setModal, container);

    return {
      ref,
      close: () => {
        ref.current?.close();
      }
    };
  },

  useShowMessageBox: (): CloseableModalHookReturnType<MessageBoxPropTypes, DialogDomRef> => {
    const ref = useRef<DialogDomRef>();
    const { setModal } = useModalsContext();
    return useCallback(
      (props, container) => {
        showMessageBox(props, ref, setModal, container);

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
    const ref = createRef<ToastDomRef>() as MutableRefObject<ToastDomRef>;
    const setModal = window['@ui5/webcomponents-react']?.setModal;
    showToast(props, ref, setModal, container);

    return {
      ref
    };
  },
  useShowToast: (): ModalHookReturnType<ToastPropTypes, ToastDomRef> => {
    const ref = useRef<ToastDomRef>();
    const { setModal } = useModalsContext();

    return useCallback(
      (props: ToastPropTypes, container?: HTMLElement) => {
        showToast(props, ref, setModal, container);
        return {
          ref
        };
      },
      [setModal]
    );
  }
};
