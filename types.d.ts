import { ComponentType, Context, Dispatch, Ref } from 'react';
import { UpdateModalStateAction } from './packages/main/src/internal/ModalsContext';

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
