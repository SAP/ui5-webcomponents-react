interface Window {
  CSSVarsPonyfill: {
    cssVars: (options: any) => void;
  };
}

declare module '*.md' {
  const content: string;
  export default content;
}
