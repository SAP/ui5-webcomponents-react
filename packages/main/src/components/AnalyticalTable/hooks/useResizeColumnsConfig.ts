import type { ReactTableHooks } from '../types/index.js';

const useGetResizerProps = (props) => {
  return {
    ...props,
    onMouseDown: (e) => {
      e.preventDefault();
      props.onMouseDown(e);
    }
  };
};

export const useResizeColumnsConfig = (hooks: ReactTableHooks) => {
  hooks.getResizerProps.push(useGetResizerProps);
};

useResizeColumnsConfig.pluginName = 'useResizeColumnsConfig';
