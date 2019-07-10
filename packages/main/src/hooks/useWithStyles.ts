// @ts-ignore
import { createUseStyles } from 'react-jss';

export const useWithStyles = (styles, props = {}) => {
  const useStylesHook = createUseStyles(styles);
  return useStylesHook(props);
};
