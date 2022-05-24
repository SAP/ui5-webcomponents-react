import { ComponentType, ContextType, createContext, Dispatch, useContext } from 'react';

export interface UpdateModalStateAction {
  type: 'set' | 'reset';
  payload?: ModalState | { id: string };
}

export interface ModalState {
  Component: ComponentType;
  props: Record<string, any>;
  container: HTMLElement;
  id: string;
}

interface IModalsContext {
  setModal?: Dispatch<UpdateModalStateAction>;
}

export const ModalsContext = createContext<IModalsContext>({
  setModal: null
});

export const useModalsContext = (): ContextType<typeof ModalsContext> => {
  let context = ModalsContext;
  if (typeof window !== 'undefined' && window['@ui5/webcomponents-react']?.ModalsContext) {
    context = window['@ui5/webcomponents-react'].ModalsContext;
  }
  return useContext(context);
};
