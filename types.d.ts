import { Context } from 'react';

declare global {
  interface Window {
    CSSVarsPonyfill: {
      cssVars: (options: any) => void;
    };

    ['@ui5/webcomponents-react']: {
      I18nContext?: Context<any>;
    };
  }
}

declare module '*.md' {
  const content: string;
  export default content;
}
