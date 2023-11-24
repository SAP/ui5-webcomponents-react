import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';

const styles = {
  outerContainer: {
    background: ThemingParameters.sapObjectHeader_Background
  },
  outerContainerWithToolbar: {
    paddingBlock: '0.5rem 1px',
    paddingInline: '2rem',
    boxShadow: ThemingParameters.sapContent_HeaderShadow
  },
  filterBarHeader: {
    alignItems: 'center',
    display: 'flex',
    background: ThemingParameters.sapObjectHeader_Background,
    minHeight: '3rem',
    paddingBlockEnd: '0.5rem',
    boxShadow: 'none',
    flexWrap: 'wrap',
    '& [data-component-name="ToolbarContent"] > *:first-child': {
      marginInlineStart: 0
    }
  },
  filterArea: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBlockStart: '1rem',
    marginBlockEnd: '1rem',
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
    marginBlockEnd: '0.5rem',
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },
  filterBarButtons: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    insetInline: 'auto 0',
    marginInlineEnd: '1rem',
    marginBlockEnd: '1rem',
    '& > *:not(:first-child)': {
      marginInlineStart: '0.25rem'
    },
    '& > *:not(:last-child)': {
      marginInlineEnd: '0.25rem'
    }
  },
  searchContainer: {
    '& > [ui5-input]': { width: '100%' }
  },
  spacer: {
    height: 0,
    marginBlockStart: 0,
    marginInlineEnd: '1rem',
    flexGrow: 1,
    flexShrink: 0,
    maxWidth: 'calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)',
    flexBasis: 'calc(var(--_ui5wcr_filter_group_item_flex_basis))'
  },
  lastSpacer: {
    height: CssSizeVariables.ui5WcrElementHeight,
    flexGrow: 1,
    flexShrink: 0,
    maxWidth: 'calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)',
    flexBasis: 'calc(var(--_ui5wcr_filter_group_item_flex_basis))',
    marginInlineEnd: '1rem'
  }
};

export default styles;
