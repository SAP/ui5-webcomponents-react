export const ResponsiveGridLayoutStyles = {
  container: {
    display: 'grid'
  },
  [`@media (max-width: 599px)`]: {
    container: {
      gridTemplateColumns: 'repeat(var(--_ui5wcr-rgl-columns-s), minmax(0, 1fr))',
      '& > *': {
        gridColumn: 'span var(--_ui5wcr-rgl-column-span-s)'
      }
    }
  },
  [`@media (min-width: 600px) and (max-width: 1023px)`]: {
    container: {
      gridTemplateColumns: 'repeat(var(--_ui5wcr-rgl-columns-m), minmax(0, 1fr))',
      '& > *': {
        gridColumn: 'span var(--_ui5wcr-rgl-column-span-m)'
      }
    }
  },
  [`@media (min-width: 1024px) and (max-width: 1439px)`]: {
    container: {
      gridTemplateColumns: 'repeat(var(--_ui5wcr-rgl-columns-l), minmax(0, 1fr))',
      '& > *': {
        gridColumn: 'span var(--_ui5wcr-rgl-column-span-l)'
      }
    }
  },
  [`@media (min-width: 1440px)`]: {
    container: {
      gridTemplateColumns: 'repeat(var(--_ui5wcr-rgl-columns-xl), minmax(0, 1fr))',
      '& > *': {
        gridColumn: 'span var(--_ui5wcr-rgl-column-span-xl)'
      }
    }
  }
};
