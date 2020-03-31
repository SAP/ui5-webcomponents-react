export const useColumnsDependencies = (hooks) => {
  hooks.columnsDeps.push((deps, { instance: { state, webComponentsReactProperties } }) => {
    return [
      ...deps,
      state.tableClientWidth,
      webComponentsReactProperties.scaleWidthMode,
      webComponentsReactProperties.loading
    ];
  });
};
