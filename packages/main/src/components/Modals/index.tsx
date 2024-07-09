'use client';

import type { RefObject } from 'react';
import { createRef } from 'react';
import { createPortal } from 'react-dom';
import { useSyncExternalStore } from 'use-sync-external-store/shim/index.js';
import { getRandomId } from '../../internal/getRandomId.js';
import { ModalStore } from '../../internal/ModalStore.js';
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

function showDialogFn(
  props: DialogPropTypes,
  container?: Element | DocumentFragment
): ClosableModalReturnType<DialogDomRef> {
  const id = getRandomId();
  const ref = createRef<DialogDomRef>();
  ModalStore.addModal({
    Component: Dialog,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    },
    ref,
    container,
    id
  });

  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    }
  };
}

function showPopoverFn(
  props: PopoverPropTypes,
  container?: Element | DocumentFragment
): ClosableModalReturnType<PopoverDomRef> {
  const id = getRandomId();
  const ref = createRef<PopoverDomRef>();
  ModalStore.addModal({
    Component: Popover,
    props: {
      ...props,

      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    },
    ref,
    container,
    id
  });

  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    }
  };
}

function showResponsivePopoverFn(
  props: ResponsivePopoverPropTypes,
  container?: Element | DocumentFragment
): ClosableModalReturnType<ResponsivePopoverDomRef> {
  const id = getRandomId();
  const ref = createRef<ResponsivePopoverDomRef>();
  ModalStore.addModal({
    Component: ResponsivePopover,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    },
    ref,
    container,
    id
  });

  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    }
  };
}

function showMenuFn(props: MenuPropTypes, container?: Element | DocumentFragment): ClosableModalReturnType<MenuDomRef> {
  const id = getRandomId();
  const ref = createRef<MenuDomRef>();
  ModalStore.addModal({
    Component: Menu,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    },
    ref,
    container,
    id
  });

  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    }
  };
}

function showMessageBoxFn(
  props: MessageBoxPropTypes,
  container?: Element | DocumentFragment
): ClosableModalReturnType<DialogDomRef> {
  const id = getRandomId();
  const ref = createRef<DialogDomRef>();
  ModalStore.addModal({
    // @ts-expect-error: props type safety is covered by the `props` property
    Component: MessageBox,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    },
    ref,
    container,
    id
  });

  return {
    ref,
    close: () => {
      if (ref.current) {
        ref.current.open = false;
      }
    }
  };
}

function showToastFn(props: ToastPropTypes, container?: Element | DocumentFragment): ModalReturnType<ToastDomRef> {
  const ref = createRef<ToastDomRef>();
  const id = getRandomId();
  ModalStore.addModal({
    Component: Toast,
    props: {
      ...props,
      open: true,
      onClose: (event) => {
        if (typeof props.onClose === 'function') {
          props.onClose(event);
        }
        ModalStore.removeModal(id);
      }
    },
    ref,
    container,
    id
  });

  return {
    ref
  };
}

/**
 * Utility class for opening modals in an imperative way.
 *
 * These static helper methods might be useful for showing e.g. Toasts or MessageBoxes after successful or failed
 * network calls.
 *
 * **In order to use these helpers, please make sure to render the `Modals` component somewhere in your application tree.**
 *
 * @since 0.22.2
 */
export function Modals() {
  const modals = useSyncExternalStore(ModalStore.subscribe, ModalStore.getSnapshot, ModalStore.getServerSnapshot);

  return (
    <>
      {modals.map((modal) => {
        if (modal?.Component) {
          return createPortal(
            // @ts-expect-error: ref is supported by all supported modals
            <modal.Component {...modal.props} ref={modal.ref} key={modal.id} data-id={modal.id} />,
            modal.container ?? document.body
          );
        }
      })}
    </>
  );
}

Modals.displayName = 'Modals';

Modals.showDialog = showDialogFn;
Modals.showPopover = showPopoverFn;
Modals.showResponsivePopover = showResponsivePopoverFn;
Modals.showMenu = showMenuFn;
Modals.showMessageBox = showMessageBoxFn;
Modals.showToast = showToastFn;
