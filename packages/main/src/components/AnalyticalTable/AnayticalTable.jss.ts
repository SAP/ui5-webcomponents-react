import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

const styles = {
  tableContainer: {
    width: '100%',
    height: `calc(100% - ${CssSizeVariables.sapWcrAnalyticalTableRowHeight})`,
    minHeight: '3rem'
  },
  table: {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    overflowX: 'auto'
  },
  tableHeaderRow: {
    boxShadow: 'none !important',
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    zIndex: 1,
    position: 'relative'
  },
  th: {
    backgroundColor: ThemingParameters.sapUiListHeaderBackground,
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontMediumSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapUiListHeaderTextColor,
    borderTop: `1px solid ${ThemingParameters.sapUiListBorderColor}`,
    borderBottom: `1px solid ${ThemingParameters.sapUiListBorderColor}`,
    borderRight: `1px solid ${ThemingParameters.sapUiListVerticalBorderColor}`,
    textAlign: 'start',
    boxSizing: 'border-box',
    '&:first-child': {
      borderLeft: `1px solid ${ThemingParameters.sapUiListVerticalBorderColor}`
    }
  },
  tbody: {
    position: 'relative',
    zIndex: 0,
    backgroundColor: ThemingParameters.sapUiListBackground,
    overflowX: 'hidden !important',
    overflowY: 'auto !important'
  },
  alternateRowColor: {
    backgroundColor: ThemingParameters.sapUiListHeaderBackground
  },
  emptyRow: {},
  tr: {
    zIndex: 0,
    color: ThemingParameters.sapUiListTextColor,
    '&[data-is-selected]': {
      backgroundColor: `${ThemingParameters.sapUiListSelectionBackgroundColor} !important`
    },
    '&[data-is-selected]:hover': {
      backgroundColor: `${ThemingParameters.sapUiListSelectionHoverBackground} !important`
    }
  },
  tableGroupHeader: {
    '&$tr': {
      backgroundColor: `${ThemingParameters.sapUiListTableGroupHeaderBackground} !important`,
      border: `1px solid ${ThemingParameters.sapUiListTableGroupHeaderBorderColor}`,
      color: ThemingParameters.sapUiListTextColor,
      '& $tableCell': {
        borderRight: 'none'
      }
    }
  },
  selectable: {
    '& $tr:hover:not($emptyRow)': {
      backgroundColor: ThemingParameters.sapUiListHoverBackground,
      cursor: 'pointer'
    },
    '& $tr:active:not([data-is-selected]):not($tableGroupHeader):not($emptyRow)': {
      backgroundColor: ThemingParameters.sapUiListActiveBackground,
      '& $tableCell': {
        borderRight: `1px solid ${ThemingParameters.sapUiListActiveBackground}`,
        color: `${ThemingParameters.sapUiListActiveTextColor}`,
        '--sapUiBaseText': ThemingParameters.sapUiListActiveTextColor
      }
    }
  },
  tableCell: {
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontMediumSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${ThemingParameters.sapUiListBorderColor}`,
    boxSizing: 'border-box',
    borderRight: `1px solid ${ThemingParameters.sapUiListVerticalBorderColor}`,
    display: 'flex',
    padding: '0 0.5rem',
    '&:first-child': {
      borderLeft: `1px solid ${ThemingParameters.sapUiListVerticalBorderColor}`
    },
    overflow: 'hidden',
    position: 'relative',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignItems: 'center'
  },
  noDataContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: ThemingParameters.sapUiListBackground,
    width: '100%',
    boxSizing: 'border-box',
    color: ThemingParameters.sapUiListTextColor,
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontMediumSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${ThemingParameters.sapUiListBorderColor}`
  },
  modifiedRowHeight: {
    '& $tableCell': {
      height: (props) => `${props.rowHeight}px`
    }
  }
};

export default styles;
