import { ThemingParameters } from '@ui5/webcomponents-react-base';

const ReorderBtnsDisplayVariable = '--_ui5wcr-ReorderBtnsDisplay';
const ActiveIconDisplayVariable = '--_ui5wcr-ActiveIconDisplayVariable';

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
    justifyContent: 'start',
    '& > :last-child': {
      width: '100%'
    }
  },
  loadingContainer: {
    display: 'flex',
    width: '100%',
    height: '1.625rem',
    justifyContent: 'center'
  },
  dialogTableRow: {
    '& *': { cursor: 'pointer' },
    [ActiveIconDisplayVariable]: 'inline-block'
  },
  dialogCellLabel: { marginBottom: '0.25rem', color: ThemingParameters.sapTextColor },
  dialogActiveCell: { width: '25%', textAlign: 'center' },
  dialogActiveIcon: {
    display: `var(${ActiveIconDisplayVariable})`,
    flexGrow: 1,
    color: ThemingParameters.sapNeutralColor,
    transform: 'scale(-50%)'
  },
  labelContainer: {
    '& :not(:first-child)': {
      width: '100%'
    }
  },
  withReorderBtns: {
    [ReorderBtnsDisplayVariable]: 'none',
    '&[selected="true"]::part(row):focus, &[selected="true"]::part(row):active': {
      [ActiveIconDisplayVariable]: 'none',
      [ReorderBtnsDisplayVariable]: 'flex',
      // todo in sapui5 the bg and border color changes on click - clarify if we should do it like sapui5
      backgroundColor: `${ThemingParameters.sapList_SelectionBackgroundColor}`,
      borderBottom: `1px solid ${ThemingParameters.sapList_SelectionBorderColor})`
    }
  },
  withReorderHoverBtns: {
    '&[selected="true"]:hover': {
      [ReorderBtnsDisplayVariable]: 'flex',
      [ActiveIconDisplayVariable]: 'none'
    }
  },
  reorderBtnsContainer: {
    display: `var(${ReorderBtnsDisplayVariable})`
  }
};

export default styles;
