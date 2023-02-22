const generateGridSpans = () => {
  const gridSpan = {};
  for (let i = 1; i <= 12; i++) {
    gridSpan[`gridSpan${i}`] = { gridColumn: `span ${i}` };
  }
  return gridSpan;
};

export const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(12, 1fr)`
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
