import { ThemingParameters } from '@ui5/webcomponents-react-base';

const styles = {
  filterItem: {
    marginBlockEnd: '1rem',
    marginInlineEnd: '1rem',
    flexBasis: 'var(--_ui5wcr_filter_group_item_flex_basis)',
    maxWidth: 'calc(var(--_ui5wcr_filter_group_item_flex_basis))',
    flexGrow: 1,
    flexShrink: 0,
    '&[data-with-toolbar=false]': {
      maxWidth: 'calc(var(--_ui5wcr_filter_group_item_flex_basis) * 2)'
    }
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
  },
  dialogCellLabel: { marginBottom: '0.25rem', color: ThemingParameters.sapTextColor },
  dialogActiveCell: { width: '25%', textAlign: 'center' },
  dialogActiveIcon: {
    flexGrow: 1,
    color: ThemingParameters.sapNeutralColor,
    transform: 'scale(-50%)'
  }
};

export default styles;
