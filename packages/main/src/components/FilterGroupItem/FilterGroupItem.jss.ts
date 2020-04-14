import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  filterItem: {
    width: '13rem',
    height: 'fit-content',
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
  mandatory: {
    fontSize: ThemingParameters.sapFontSize,
    color: ThemingParameters.sapField_RequiredColor,
    height: '1rem'
  },
  loadingContainer: {
    display: 'flex',
    width: '100%',
    height: '1.625rem',
    justifyContent: 'center'
  }
};

export default styles;
