import type { ReactNode } from 'react';
import { useMemo, useReducer } from 'react';
import { createPortal } from 'react-dom';
import type { ModalState, UpdateModalStateAction } from '../../internal/ModalsContext.js';
import { getModalContext } from '../../internal/ModalsContext.js';

export interface ModalsProviderPropTypes {
  children: ReactNode;
}

//@ts-expect-error: can't assume state generics at this point
const modalStateReducer = (state: ModalState[], action: UpdateModalStateAction) => {
  switch (action.type) {
    case 'set':
      return [...state, action.payload];
    case 'reset':
      return state.filter((modal) => modal.id !== action.payload.id);
    default:
      return state;
  }
};

export function ModalsProvider({ children }: ModalsProviderPropTypes) {
  const [modals, setModal] = useReducer(modalStateReducer, []);

  // necessary for static method
  globalThis['@ui5/webcomponents-react'] ??= {};
  globalThis['@ui5/webcomponents-react'].setModal = setModal;

  const GlobalModalsContext = getModalContext();
  const memoizedVal = useMemo(
    () => ({
      setModal: globalThis['@ui5/webcomponents-react'].setModal
    }),
    []
  );

  return (
    <GlobalModalsContext.Provider value={memoizedVal}>
      {modals.map((modal) => {
        if (modal?.Component) {
          return createPortal(
            <modal.Component {...modal.props} ref={modal.ref} key={modal.id} data-id={modal.id} />,
            modal.container ?? document.body
          );
        }
      })}
      {children}
    </GlobalModalsContext.Provider>
  );
}
