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
    CSSVarsPonyfill: {
      cssVars: (options: any) => void;
    };

    ['@ui5/webcomponents-react']: {
      I18nContext?: Context<any>;
      ModalsContext?: Context<any>;
      setModal?: Dispatch<UpdateModalStateAction>;
    };
  }
}

declare module '*.md' {
  const content: string;
  export default content;
}
