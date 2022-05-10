import React, { ReactNode, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalsContext, ModalState, UpdateModalStateAction } from '../../internal/ModalsContext';

export interface ModalsProviderPropTypes {
  children: ReactNode;
}

const modalStateReducer = (state: Partial<ModalState>, action: UpdateModalStateAction) => {
  switch (action.type) {
    case 'set':
      return action.payload;
    case 'reset':
      return {};
    default:
      return state;
  }
};

export function ModalsProvider({ children }: ModalsProviderPropTypes) {
  const [modal, setModal] = useReducer(modalStateReducer, {});

  const isSyncedWithWindow = useRef(false);

  if (!isSyncedWithWindow.current && typeof window !== 'undefined') {
    window['@ui5/webcomponents-react'] ??= {};
    window['@ui5/webcomponents-react'].ModalsContext = ModalsContext;
    window['@ui5/webcomponents-react'].setModal = setModal;
    isSyncedWithWindow.current = true;
  }

  return (
    <ModalsContext.Provider value={{ setModal }}>
      {modal.Component ? createPortal(<modal.Component {...modal.props} />, modal.container ?? document.body) : null}
      {children}
    </ModalsContext.Provider>
  );
}
