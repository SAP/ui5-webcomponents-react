import { ComponentType, Context, Dispatch } from 'react';

interface UpdateModalStateAction {
  type: 'set' | 'reset';
  payload?: ModalState | { id: string };
}

interface ModalState {
  Component: ComponentType;
  props: Record<string, any>;
  container: HTMLElement;
  id: string;
}

declare global {
  interface Window {
    ['@ui5/webcomponents-react']: {
      ModalsContext?: Context<any>;
      setModal?: Dispatch<UpdateModalStateAction>;
    };
  }
}

declare module '*.md' {
  const content: string;
  export default content;
}
