import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  table: {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    overflowY: 'hidden',
    overflowX: 'auto',
    height: '100%',
    minHeight: '3rem',
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    backgroundColor: ThemingParameters.sapList_Background
  },
  tableHeaderRow: {
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    display: 'inline-flex'
  },
  tableHeaderBackgroundElement: {
    boxSizing: 'border-box',
    position: 'absolute',
    left: 0,
    right: 0,
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    backgroundColor: ThemingParameters.sapList_HeaderBackground,
    borderTop: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`
  },
  th: {
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    color: ThemingParameters.sapList_HeaderTextColor,
    backgroundColor: ThemingParameters.sapList_HeaderBackground,
    borderTop: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    borderRight: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    padding: `0 0.5rem`,
    textAlign: 'start',
    boxSizing: 'border-box',
    '&:first-child': {
      borderLeft: `1px solid ${ThemingParameters.sapList_BorderColor}`
    },
    '&:last-child': {
      '& [data-resizer]': {
        transform: 'translateX(0px)'
      }
    }
  },
  tbody: {
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBarWidth: 'none !important',
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0
    }
  },
  alternateRowColor: {
    backgroundColor: ThemingParameters.sapList_AlternatingBackground
  },
  tr: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    color: ThemingParameters.sapList_TextColor,
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    boxSizing: 'border-box',
    display: 'flex',
    willChange: 'transform',
    '&:hover': {
      backgroundColor: ThemingParameters.sapList_Hover_Background
    },
    '&[data-is-selected]': {
      borderBottom: `1px solid ${ThemingParameters.sapList_SelectionBorderColor}`,
      backgroundColor: ThemingParameters.sapList_SelectionBackgroundColor
    },
    '&[data-is-selected]:hover': {
      backgroundColor: ThemingParameters.sapList_Hover_SelectionBackground
    }
  },
  trActive: {
    '&:hover': {
      cursor: 'pointer'
    },
    '&:active': {
      backgroundColor: ThemingParameters.sapList_Active_Background,
      '& $tableCell': {
        borderRight: `1px solid ${ThemingParameters.sapList_Active_Background}`,
        color: `${ThemingParameters.sapList_Active_TextColor}`,
        '--sapTextColor': ThemingParameters.sapList_Active_TextColor
      }
    }
  },
  tableGroupHeader: {
    '&$tr': {
      backgroundColor: `${ThemingParameters.sapList_TableGroupHeaderBackground}`,
      border: `1px solid ${ThemingParameters.sapList_TableGroupHeaderBorderColor}`,
      color: ThemingParameters.sapList_TextColor,
      '& $tableCell': {
        borderRight: 'none'
      }
    }
  },
  tableCell: {
    height: '100%',
    boxSizing: 'border-box',
    borderRight: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    display: 'inline-flex',
    padding: '0 0.5rem',
    '&:first-child': {
      borderLeft: `1px solid ${ThemingParameters.sapList_BorderColor}`
    },
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    position: 'relative',
    '&:focus': {
      outlineOffset: '-2px',
      outline: `1px dotted ${ThemingParameters.sapContent_FocusColor}`
    }
  },
  noDataContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: ThemingParameters.sapList_Background,
    width: '100%',
    boxSizing: 'border-box',
    color: ThemingParameters.sapList_TextColor,
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    borderBottom: `1px solid ${ThemingParameters.sapList_BorderColor}`
  }
};

export default styles;
