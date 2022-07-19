const useGetResizerProps = (props) => {
  return {
    ...props,
    onMouseDown: (e) => {
      e.preventDefault();
      props.onMouseDown(e);
    }
  };
};

export const useResizeColumnsConfig = (hooks) => {
  hooks.getResizerProps.push(useGetResizerProps);
};

useResizeColumnsConfig.pluginName = 'useResizeColumnsConfig';
