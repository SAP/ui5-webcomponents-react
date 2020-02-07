export const useColumnsDependencies = (hooks) => {
  hooks.columnsDeps.push((deps, { instance: { state, webComponentsReactProperties } }) => {
    return [state.tableClientWidth, state.hiddenColumns, webComponentsReactProperties.scaleWidthMode, webComponentsReactProperties.loading];
  });
};
