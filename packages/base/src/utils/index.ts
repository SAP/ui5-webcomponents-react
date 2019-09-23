export const deprecationNotice = (component: string, message: string) => {
  const value = `* ui5-webcomponents-react Deprecation Notice - ${component}`;
  const dots = '*'.padStart(value.length, '*');
  // eslint-disable-next-line no-console
  console.warn(`${dots}${value}${dots}${message}`);
};
