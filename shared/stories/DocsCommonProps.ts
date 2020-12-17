export const DocsCommonProps = {
  style: {
    table: { category: 'Common props' },
    type: 'CSSProperties',
    description:
      'Element style which will be appended to the most outer element of a component. Use this prop carefully, some css properties might break the component.'
  },
  className: {
    table: { category: 'Common props' },
    type: 'string',
    description:
      'CSS Class Name which will be appended to the most outer element of a component. Use this prop carefully, overwriting CSS rules might break the component.'
  },
  tooltip: {
    table: { category: 'Common props' },
    type: 'string',
    description: 'A tooltip which will be shown on hover'
  },
  slot: {
    table: { disable: true }
  },
  ref: {
    table: { disable: true }
  }
};
