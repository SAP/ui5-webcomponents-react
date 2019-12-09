import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  tableContainer: {
    width: '100%',
    height: 'calc(100% - 2.75rem)',
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
    height: '2.75rem',
    zIndex: 1,
    position: 'relative'
  },
  th: {
    backgroundColor: parameters.sapUiListHeaderBackground,
    height: '2.75rem',
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
    overflowX: 'auto',
    backgroundColor: parameters.sapUiListBackground,
    '&$selectable $tr:hover': {
      backgroundColor: parameters.sapUiListHoverBackground
    },
    '& $selectedRow': {
      backgroundColor: parameters.sapUiListSelectionBackgroundColor
    },
    '& $selectedRow:hover': {
      backgroundColor: `${parameters.sapUiListSelectionHoverBackground} !important`
    },
    '&$selectable $tr:active:not($selectedRow):not($tableGroupHeader)': {
      backgroundColor: parameters.sapUiListActiveBackground,
      color: parameters.sapUiListActiveTextColor
    },
    '&$selectable $tr:active:not($selectedRow):not($tableGroupHeader) $tableCell': {
      borderRight: `1px solid ${parameters.sapUiListActiveBackground}`
    }
  },
  tr: {
    zIndex: 0,
    backgroundColor: parameters.sapUiListBackground,
    color: parameters.sapUiListTextColor
  },
  alternateRowColor: {
    backgroundColor: parameters.sapUiListHeaderBackground
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
  selectable: {},
  selectedRow: {},
  tableCell: {
    height: '2.75rem',
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
  compactSize: {
    '&$tableContainer': {
      height: 'calc(100% - 2rem)'
    },
    '& $tableHeaderRow': {
      height: '2rem'
    },
    '& $th': {
      height: '2rem'
    },
    '& $tableCell': {
      height: '2rem'
    }
  },

  modifiedRowHeight: {
    '& $tableCell': {
      height: (props) => `${props.rowHeight}px`
    }
  }
});

export default styles;
