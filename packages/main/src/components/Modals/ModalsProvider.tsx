import type { ReactNode } from 'react';
import React, { useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { ModalState, UpdateModalStateAction } from '../../internal/ModalsContext.js';
import { ModalsContext } from '../../internal/ModalsContext.js';

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

  const isSyncedWithWindow = useRef(false);

  if (!isSyncedWithWindow.current && typeof window !== 'undefined') {
    window['@ui5/webcomponents-react'] ??= {};
    window['@ui5/webcomponents-react'].ModalsContext = ModalsContext;
    window['@ui5/webcomponents-react'].setModal = setModal;
    isSyncedWithWindow.current = true;
  }

  return (
    <ModalsContext.Provider value={{ setModal }}>
      {modals.map((modal) => {
        if (modal?.Component) {
          return createPortal(
            <modal.Component {...modal.props} ref={modal.ref} key={modal.id} data-id={modal.id} />,
            modal.container ?? document.body
          );
        }
      })}
      {children}
    </ModalsContext.Provider>
  );
}
