import { fonts } from '@ui5/webcomponents-react-base';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ContentDensity } from '@ui5/webcomponents-react/lib/ContentDensity';

const styles = ({ parameters, contentDensity }: JSSTheme) => ({
  tHead: {
    boxShadow: 'none !important',
    height: `${contentDensity === ContentDensity.Compact ? '2rem' : '2.75rem'}`
  },

  th: {
    backgroundColor: parameters.sapUiListHeaderBackground,
    height: `${contentDensity === ContentDensity.Compact ? '2rem' : '2.75rem'}`,
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
  tableHeaderRow: {},
  tableGroupHeader: {
    '&$tr': {
      backgroundColor: `${parameters.sapUiListTableGroupHeaderBackground} !important`,
      border: `1px solid ${parameters.sapUiListTableGroupHeaderBorderColor}`,
      color: parameters.sapUiListTextColor,
      '& $td': {
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

  tbody: {
    position: 'relative',
    '&$selectable $tr': {
      '&:hover': {
        backgroundColor: parameters.sapUiListHoverBackground
      },
      '&:active:not($selectedRow)': {
        backgroundColor: parameters.sapUiListActiveBackground,
        '& $td': {
          color: parameters.sapUiListActiveTextColor,
          borderRight: `1px solid ${parameters.sapUiListActiveBackground}`
        }
      },
      '&$selectedRow': {
        backgroundColor: parameters.sapUiListSelectionBackgroundColor,
        color: parameters.sapUiListActiveTextColor,
        '&:hover': {
          backgroundColor: parameters.sapUiListSelectionHoverBackground
        }
      }
    },
    '& $tr': {
      backgroundColor: parameters.sapUiListBackground
    }
  },
  tr: {},
  selectable: {},
  selectedRow: {},
  td: {
    height: `${contentDensity === ContentDensity.Compact ? '2rem' : '2.75rem'}`,
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiListTextColor,
    borderBottom: `1px solid ${parameters.sapUiListBorderColor}`,
    borderRight: `1px solid ${parameters.sapUiListVerticalBorderColor}`,
    display: 'table-cell',
    padding: '0 0.5rem',
    '&:first-child': {
      borderLeft: `1px solid ${parameters.sapUiListVerticalBorderColor}`
    }
  },
  tBody: {
    boxShadow: 'none !important'
  },
  tableContainer: {
    width: '100%',
    height: `${contentDensity === ContentDensity.Compact ? 'calc(100% - 2rem)' : 'calc(100% - 2.75rem)'}`,
    minHeight: '3rem'
  },
  table: {
    borderSpacing: 0,
    position: 'relative'
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
  }
});

export default styles;
