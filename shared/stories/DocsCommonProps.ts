export const DocsCommonProps = {
  slot: { control: { disable: true } },
  ref: { control: { disable: true } },
  style: {
    type: 'CSSProperties',
    description:
      'Element style which will be appended to the most outer element of a component. Use this prop carefully, some css properties might break the component.'
  },
  className: {
    type: 'string',
    description:
      'CSS Class Name which will be appended to the most outer element of a component. Use this prop carefully, overwriting CSS rules might break the component.'
  },
  tooltip: { type: 'string', description: 'A tooltip which will be shown on hover' }
};
