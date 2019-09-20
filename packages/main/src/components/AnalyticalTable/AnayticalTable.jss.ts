import { fonts } from '@ui5/webcomponents-react-base';
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
    display: 'grid'
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
    display: 'grid',

    '&$selectable $tr:hover $tableCell': {
      backgroundColor: parameters.sapUiListHoverBackground
    },

    '& $selectedRow $tableCell': {
      backgroundColor: parameters.sapUiListSelectionBackgroundColor
    },

    '& $selectedRow:hover $tableCell': {
      backgroundColor: `${parameters.sapUiListSelectionHoverBackground} !important`
    },
    '&$selectable $tr:active:not($selectedRow) $tableCell': {
      backgroundColor: parameters.sapUiListActiveBackground,
      color: parameters.sapUiListActiveTextColor,
      borderRight: `1px solid ${parameters.sapUiListActiveBackground}`
    }
  },

  tr: {
    display: 'contents'
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

  tableGroupExpandCollapseIcon: {
    color: parameters.sapUiContentIconColor,
    height: '2rem',
    width: '2rem',
    fontSize: '0.75rem'
  },

  selectable: {},
  selectedRow: {},
  tableCell: {
    backgroundColor: parameters.sapUiListBackground,
    height: '2.75rem',
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiListTextColor,
    borderBottom: `1px solid ${parameters.sapUiListBorderColor}`,
    borderRight: `1px solid ${parameters.sapUiListVerticalBorderColor}`,
    display: 'flex',
    padding: '0 0.5rem',
    '&:first-child': {
      borderLeft: `1px solid ${parameters.sapUiListVerticalBorderColor}`
    }
  },
  tableCellContent: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  noDataContainer: {
    textAlign: 'center',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    backgroundColor: parameters.sapUiListBackground,
    width: '100%',
    boxSizing: 'border-box',
    color: parameters.sapUiListTextColor,
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal'
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
  }
});

export default styles;
