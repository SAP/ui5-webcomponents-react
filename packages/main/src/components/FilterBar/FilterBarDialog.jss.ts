import { CssSizeVariables, spacing } from '@ui5/webcomponents-react-base';

const styles = {
  tHactive: {
    '&::part(column)': {
      textAlign: 'center'
    }
  },
  table: {
    '--_ui5_input_width': '100%'
  },
  groupPanel: {
    '&::part(content)': {
      padding: 0
    }
  },

  // todo check old
  dialogComponent: {
    '&::part(content), &::part(footer), &::part(header)': {
      padding: 0
    }
  },
  dialog: {
    ...spacing.sapUiContentPadding,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '960px',
    width: '80vw',
    maxHeight: '70vh',
    '--_ui5_input_width': '100%'
  },
  header: {
    width: '100%',
    padding: '0.25rem 1rem 0 1rem',
    '& *': {
      margin: '0.25rem 0 0.25rem 0'
    },
    '& ui5-input': {
      width: '100%'
    }
  },
  subheader: {
    '& [data-component-name="ToolbarContent"] >:last-child': {
      margin: 0
    }
  },
  footer: {
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
    gridTemplateColumns: `auto minmax(${CssSizeVariables.sapWcrCheckBoxWidthHeight},7%)`,
    gridTemplateRows: 'auto',
    gridColumnGap: '0.5rem',
    alignItems: 'center',
    '@media(max-width:700px)': {
      marginTop: '0.5rem'
    },
    '& ui5-checkbox': {
      placeSelf: 'center start',
      '@media(max-width:700px)': {
        marginTop: '0.8rem',
        paddingLeft: 0,
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
    width: '100%',
    '& ui5-input': {
      width: '100%'
    }
  }
};

export default styles;
