export const getCssVariableValue = (cssVariable: string, fallback = '') => {
  const propertyValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable);
  return propertyValue || fallback;
};
