import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  outerContainer: {
    paddingTop: '0.5rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingBottom: '1px',
    background: ThemingParameters.sapObjectHeader_Background,
    boxShadow: ThemingParameters.sapContent_HeaderShadow
  },
  filterItemExpand: {
    '--_ui5_input_width': '100%'
  },
  filterBarHeader: {
    alignItems: 'center',
    display: 'flex',
    background: ThemingParameters.sapObjectHeader_Background,
    minHeight: '3rem',
    paddingBottom: '0.5rem',
    boxShadow: 'none',
    flexWrap: 'wrap'
  },
  filterArea: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    background: ThemingParameters.sapObjectHeader_Background,
    transition: 'max-height 0.2s ease-out, opacity 0.2s ease-in'
  },
  filterAreaClosed: {
    maxHeight: '0',
    opacity: 0,
    padding: 0,
    overflowY: 'auto'
  },
  filterAreaOpen: {
    maxHeight: '500px',
    opacity: 1,
    overflowY: 'auto'
  },
  headerRowRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
    '& ui5-button': {
      marginLeft: '0.5rem'
    }
  },
  showFiltersBtn: { minWidth: '108px' },
  loadingContainer: {
    marginBottom: '0.5rem',
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }
};

export default styles;
