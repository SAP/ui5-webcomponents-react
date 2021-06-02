import { isIE } from '@ui5/webcomponents-base/dist/Device';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';

const styles = {
  outerContainer: {
    paddingTop: '0.5rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingBottom: '1px',
    background: ThemingParameters.sapObjectHeader_Background,
    boxShadow: ThemingParameters.sapContent_HeaderShadow,
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
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '1rem',
    marginBottom: '1rem',
    background: ThemingParameters.sapObjectHeader_Background,
    transition: 'max-height 0.2s ease-out, opacity 0.2s ease-in'
  },
  filterAreaClosed: {
    maxHeight: '0',
    opacity: 0,
    padding: 0,
    margin: 0,
    overflowY: 'auto'
  },
  filterAreaOpen: {
    opacity: 1
  },
  showFiltersBtn: { minWidth: '108px' },
  loadingContainer: {
    marginBottom: '0.5rem',
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },
  filterBarButtons: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    marginBottom: '1rem',
    '&:not(:first-child)': {
      marginLeft: '0.25rem'
    },
    '&:not(:last-child)': {
      marginRight: '0.25rem'
    }
  },
  spacer: {
    height: 0,
    marginTop: 0,
    flexGrow: 1,
    flexShrink: 0,
    maxWidth: isIE() ? '26.25rem' : 'calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)',
    flexBasis: isIE() ? '13.125rem' : 'calc(var(--_ui5wcr_filter_group_item_flex_basis))'
  },
  lastSpacer: {
    height: 'var(--_ui5_input_height)',
    flexGrow: 1,
    flexShrink: 0,
    maxWidth: isIE() ? '26.25rem' : 'calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)',
    flexBasis: isIE() ? '13.125rem' : 'calc(var(--_ui5wcr_filter_group_item_flex_basis))'
  }
};

export default styles;
