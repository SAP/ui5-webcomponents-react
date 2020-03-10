import { createUseStyles } from 'react-jss';

declare global {
  interface Window {
    CSSVarsPonyfill: {
      cssVars: (options: any) => void;
    };
  }
}

const ponyfillNeeded = () => !!window.CSSVarsPonyfill;
let ponyfillTimer;

const runPonyfill = () => {
  ponyfillTimer = undefined;

  window.CSSVarsPonyfill.cssVars({
    rootElement: document.head,
    include: 'style[data-jss]',
    silent: true
  });
};

const schedulePonyfill = () => {
  if (ponyfillTimer) {
    window.clearTimeout(ponyfillTimer);
    ponyfillTimer = null;
  }
  ponyfillTimer = window.setTimeout(runPonyfill, 0);
};

export const createComponentStyles: typeof createUseStyles = (styles, options) => {
  const useStyles = createUseStyles(styles, options);

  // if (ponyfillNeeded()) {
  //   schedulePonyfill();
  // }
  return useStyles;
};
