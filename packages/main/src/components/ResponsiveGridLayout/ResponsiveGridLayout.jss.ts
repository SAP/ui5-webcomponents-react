export const ResponsiveGridLayoutStyles = {
  container: {
    display: 'grid'
  },
  [`@media (max-width: 599px)`]: {
    container: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      '& > *': {
        gridColumn: 'span 4'
      }
    }
  },
  [`@media (min-width: 600px) and (max-width: 1023px)`]: {
    container: {
      gridTemplateColumns: 'repeat(8, 1fr)',
      '& > *': {
        gridColumn: 'span 4'
      }
    }
  },
  [`@media (min-width: 1024px) and (max-width: 1439px)`]: {
    container: {
      gridTemplateColumns: 'repeat(12, 1fr)',
      '& > *': {
        gridColumn: 'span 3'
      }
    }
  },
  [`@media (min-width: 1440px)`]: {
    container: {
      gridTemplateColumns: 'repeat(16, 1fr)',
      '& > *': {
        gridColumn: 'span 2'
      }
    }
  }
};
