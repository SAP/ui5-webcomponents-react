import { CssSizeVariables } from '@ui5/webcomponents-react-base/dist/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';

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
    display: 'inline-flex',
    '& div:first-child $th': {
      borderLeft: `1px solid ${ThemingParameters.sapList_BorderColor}`
    }
  },
  hasNavigationIndicator: {
    '& $tableHeaderRow :nth-last-child(2) $th': {
      borderRight: 'none'
    },
    '& $tr :nth-last-child(2)': {
      borderRight: 'none'
    }
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
    '&[data-column-id="__ui5wcr__internal_highlight_column"]': {
      borderRight: '1px solid transparent'
    },
    '&:last-child': {
      '& [data-resizer]': {
        transform: 'translateX(0px)'
      }
    },
    '&:focus': {
      '&[data-column-id="__ui5wcr__internal_selection_column"]': {
        borderLeft: '1px solid transparent'
      },
      outlineOffset: `calc(-1 * ${ThemingParameters.sapContent_FocusWidth})`,
      outline: `${ThemingParameters.sapContent_FocusWidth} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusColor}`
    }
  },
  tbody: {
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBarWidth: 'none !important',
    '-ms-overflow-style': 'none',
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
      outlineOffset: `calc(-1 * ${ThemingParameters.sapContent_FocusWidth})`,
      outline: `${ThemingParameters.sapContent_FocusWidth} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusColor}`
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
  },
  valueStateSuccess: {
    backgroundColor: ThemingParameters.sapSuccessColor
  },
  valueStateError: {
    backgroundColor: ThemingParameters.sapErrorColor
  },
  valueStateWarning: {
    backgroundColor: ThemingParameters.sapWarningColor
  },
  valueStateInformation: {
    backgroundColor: ThemingParameters.sapInformationColor
  }
};

export default styles;
