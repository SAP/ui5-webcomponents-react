const styles = {
  filterItem: {
    width: 'var(--_ui5_input_width)',
    marginRight: '1rem',
    marginBottom: '1rem'
  },
  filterItemDialog: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  innerFilterItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
  },
  innerFilterItemContainerDialog: {
    display: 'grid',
    gridTemplateColumns: '20% calc(80% - 1rem)',
    '@media(max-width:700px)': {
      gridTemplateColumns: '100%'
    },
    gridTemplateRows: 'auto',
    gridRowGap: '0px',
    gridColumnGap: '1rem',
    '& :first-child': {
      maxWidth: '100%',
      placeSelf: 'center end',
      '@media(max-width:700px)': {
        placeSelf: 'center start'
      }
    },
    '& :last-child': {
      placeSelf: 'center auto',
      width: '100%'
    }
  },
  loadingContainer: {
    display: 'flex',
    width: '100%',
    height: '1.625rem',
    justifyContent: 'center'
  }
};

export default styles;
