import { spacing } from '@ui5/webcomponents-react-base';

//todo different parameter
const styles = {
  dialog: {
    ...spacing.sapUiContentPadding,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '960px',
    width: '80vw',
    maxHeight: '70vh'
  },
  header: {
    padding: '0.25rem 1rem 0 1rem',
    '& *': {
      margin: '0.25rem 0 0.25rem 0'
    }
  },
  footer: {
    padding: '0.5rem 0.5rem',
    '& :not(:last-child)': {
      marginRight: '0.25rem'
    }
  },
  groupContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  groupTitle: {
    maxWidth: '85%',
    marginRight: '0.5rem'
  },
  filters: {
    padding: '1rem 0 2rem 0'
  },
  singleFilter: {
    display: 'grid',
    gridTemplateColumns: 'auto minmax(32px,7%)',
    gridTemplateRows: 'auto',
    gridColumnGap: '0.5rem',
    '@media(max-width:700px)': {
      marginTop: '0.5rem'
    },
    '& ui5-checkbox': {
      minWidth: '32px',
      placeSelf: 'center start',
      '@media(max-width:700px)': {
        marginTop: '0.8rem',
        placeSelf: 'end start'
      }
    }
  },

  fbSearch: {
    '@media(min-width:700px)': {
      display: 'grid',
      gridTemplateColumns: '20% auto 7%',
      gridTemplateRows: 'auto',
      gridRowGap: '0.5rem',
      gridColumnGap: '0.5rem'
    },
    paddingBottom: '2rem',
    width: '100%'
  }
};

export default styles;

//todo wrap 700px
