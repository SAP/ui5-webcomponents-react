export const getCssVariableValue = (cssVariable: string, fallback: string = '') => {
  const propertyValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable);
  return propertyValue || fallback;
};
