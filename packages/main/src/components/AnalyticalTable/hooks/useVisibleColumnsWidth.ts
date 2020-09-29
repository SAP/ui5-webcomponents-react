const getVisibleColumnsWidth = (instance) => {
  const visibleColumnsWidth = instance.visibleColumns.map((item) => item.totalWidth);
  Object.assign(instance, { visibleColumnsWidth });
};

export const useVisibleColumnsWidth = (hooks) => {
  hooks.useInstance.push(getVisibleColumnsWidth);
};
useVisibleColumnsWidth.pluginName = 'useVisibleColumnsWidth';
