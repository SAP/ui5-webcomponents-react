export const ResponsiveGridLayoutStyles = {
  container: {
    display: 'grid'
  },
  [`@media (max-width: 599px)`]: {
    container: {
      gridTemplateColumns: 'repeat(var(--_ui5wcr-rgl-columns-s), 1fr)',
      '& > *': {
        gridColumn: 'span var(--_ui5wcr-rgl-column-span-s)'
      }
    }
  },
  [`@media (min-width: 600px) and (max-width: 1023px)`]: {
    container: {
      gridTemplateColumns: 'repeat(var(--_ui5wcr-rgl-columns-m), 1fr)',
      '& > *': {
        gridColumn: 'span var(--_ui5wcr-rgl-column-span-m)'
      }
    }
  },
  [`@media (min-width: 1024px) and (max-width: 1439px)`]: {
    container: {
      gridTemplateColumns: 'repeat(var(--_ui5wcr-rgl-columns-l), 1fr)',
      '& > *': {
        gridColumn: 'span var(--_ui5wcr-rgl-column-span-l)',
        '-ms-grid-column-span': 3
      }
    }
  },
  [`@media (min-width: 1440px)`]: {
    container: {
      gridTemplateColumns: 'repeat(var(--_ui5wcr-rgl-columns-xl), 1fr)',
      '& > *': {
        gridColumn: 'span var(--_ui5wcr-rgl-column-span-xl)'
      }
    }
  }
};
