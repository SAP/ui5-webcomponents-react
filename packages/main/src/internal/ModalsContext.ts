import type { ComponentType, ContextType, Dispatch, RefCallback, RefObject } from 'react';
import { createContext, useContext } from 'react';

export interface UpdateModalStateAction<Props, DomRef, ContainerElement = HTMLElement> {
  type: 'set' | 'reset';
  payload?: ModalState<Props, DomRef, ContainerElement> | { id: string };
}

export interface ModalState<Props, DomRef, ContainerElement> {
  Component: ComponentType;
  props: Props;
  ref: RefObject<DomRef> | RefCallback<DomRef>;
  container: ContainerElement;
  id: string;
}

interface IModalsContext<Props, DomRef> {
  setModal?: Dispatch<UpdateModalStateAction<Props, DomRef>>;
}

const ModalsContext = createContext<IModalsContext<Record<string, any>, HTMLElement>>({
  setModal: null
});

export function getModalContext() {
  if (!globalThis['@ui5/webcomponents-react']?.ModalsContext) {
    globalThis['@ui5/webcomponents-react'] ??= {};
    globalThis['@ui5/webcomponents-react'].ModalsContext = ModalsContext;
  }

  return globalThis['@ui5/webcomponents-react'].ModalsContext;
}

export const useModalsContext = (): ContextType<typeof ModalsContext> => {
  return useContext(getModalContext());
};
