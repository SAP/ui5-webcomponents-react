const generateGridSpans = () => {
  const gridSpan = {};
  for (let i = 1; i <= 12; i++) {
    gridSpan[`gridSpan${i}`] = { gridColumn: `span ${i}`, ['-ms-grid-column-span']: i };
  }
  return gridSpan;
};

export const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(12, 1fr)`,
    '-ms-grid-columns': '(1fr)[12]'
  },
  ...generateGridSpans(),
  positionCenter: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  positionRight: {
    marginLeft: 'auto',
    marginRight: 0
  }
};
