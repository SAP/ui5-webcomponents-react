export const useColumnsDependencies = (hooks) => {
  hooks.columnsDeps.push((deps, { instance: { state, webComponentsReactProperties } }) => {
    return [
      state.tableClientWidth,
      webComponentsReactProperties.scaleWidthMode,
      webComponentsReactProperties.loading,
      webComponentsReactProperties.selectionMode,
      webComponentsReactProperties.noSelectionColumn
    ];
  });
};
