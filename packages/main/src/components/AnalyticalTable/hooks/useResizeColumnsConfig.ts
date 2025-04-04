import type { MouseEvent } from 'react';
import type { ReactTableHooks } from '../types/index.js';

const useGetResizerProps = (props) => {
  return {
    ...props,
    'aria-hidden': 'true',
    onMouseDown: (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      props.onMouseDown(e);
    }
  };
};

export const useResizeColumnsConfig = (hooks: ReactTableHooks) => {
  hooks.getResizerProps.push(useGetResizerProps);
};

useResizeColumnsConfig.pluginName = 'useResizeColumnsConfig';
