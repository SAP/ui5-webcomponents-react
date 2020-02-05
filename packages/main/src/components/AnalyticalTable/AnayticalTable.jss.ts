import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
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
    backgroundColor: parameters.sapUiListHeaderBackground,
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    fontFamily: parameters.sapUiFontFamily,
    fontSize: parameters.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiListHeaderTextColor,
    borderTop: `1px solid ${parameters.sapUiListBorderColor}`,
    borderBottom: `1px solid ${parameters.sapUiListBorderColor}`,
    borderRight: `1px solid ${parameters.sapUiListVerticalBorderColor}`,
    textAlign: 'start',
    boxSizing: 'border-box',
    '&:first-child': {
      borderLeft: `1px solid ${parameters.sapUiListVerticalBorderColor}`
    }
  },
  tbody: {
    position: 'relative',
    zIndex: 0,
    backgroundColor: parameters.sapUiListBackground
  },
  alternateRowColor: {
    backgroundColor: parameters.sapUiListHeaderBackground
  },
  emptyRow: {},
  tr: {
    zIndex: 0,
    color: parameters.sapUiListTextColor,
    '&[data-is-selected]': {
      backgroundColor: `${parameters.sapUiListSelectionBackgroundColor} !important`
    },
    '&[data-is-selected]:hover': {
      backgroundColor: `${parameters.sapUiListSelectionHoverBackground} !important`
    }
  },
  tableGroupHeader: {
    '&$tr': {
      backgroundColor: `${parameters.sapUiListTableGroupHeaderBackground} !important`,
      border: `1px solid ${parameters.sapUiListTableGroupHeaderBorderColor}`,
      color: parameters.sapUiListTextColor,
      '& $tableCell': {
        borderRight: 'none'
      }
    }
  },
  selectable: {
    '& $tr:hover:not($emptyRow)': {
      backgroundColor: parameters.sapUiListHoverBackground,
      cursor: 'pointer'
    },
    '& $tr:active:not([data-is-selected]):not($tableGroupHeader):not($emptyRow)': {
      backgroundColor: parameters.sapUiListActiveBackground,
      '& $tableCell': {
        borderRight: `1px solid ${parameters.sapUiListActiveBackground}`,
        color: `${parameters.sapUiListActiveTextColor}`,
        '--sapUiBaseText': parameters.sapUiListActiveTextColor
      }
    }
  },
  tableCell: {
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    fontFamily: parameters.sapUiFontFamily,
    fontSize: parameters.sapMFontMediumSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${parameters.sapUiListBorderColor}`,
    boxSizing: 'border-box',
    borderRight: `1px solid ${parameters.sapUiListVerticalBorderColor}`,
    display: 'flex',
    padding: '0 0.5rem',
    '&:first-child': {
      borderLeft: `1px solid ${parameters.sapUiListVerticalBorderColor}`
    },
    overflow: 'hidden',
    position: 'relative',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignItems: 'center'
  },
  virtualTableBody: {
    overflowX: 'hidden !important',
    overflowY: 'auto !important'
  },
  noDataContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: parameters.sapUiListBackground,
    width: '100%',
    boxSizing: 'border-box',
    color: parameters.sapUiListTextColor,
    fontFamily: parameters.sapUiFontFamily,
    fontSize: parameters.sapMFontMediumSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${parameters.sapUiListBorderColor}`
  },
  modifiedRowHeight: {
    '& $tableCell': {
      height: (props) => `${props.rowHeight}px`
    }
  }
});

export default styles;
