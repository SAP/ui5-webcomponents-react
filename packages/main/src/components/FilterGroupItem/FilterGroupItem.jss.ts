const styles = {
  filterItem: {
    width: '12rem',
    height: 'fit-content',
    marginRight: '1rem',
    marginBottom: '1rem'
  },
  filterItemDialog: {
    flexGrow: 1
  },
  innerFilterItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
  },
  innerFilterItemContainerDialog: {
    display: 'grid',
    gridTemplateColumns: '20% auto',
    '@media(max-width:700px)': {
      gridTemplateColumns: '100%'
    },
    gridTemplateRows: 'auto',
    gridRowGap: '0px',
    gridColumnGap: '1rem',
    '& :first-child': {
      placeSelf: 'center end',
      '@media(max-width:700px)': {
        placeSelf: 'center start'
      }
    },
    '& :last-child': {
      placeSelf: 'center auto',
      flexGrow: 1
    }
  },
  loadingContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
};

export default styles;
