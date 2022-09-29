import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomThemingParameters } from '../../themes/CustomVariables';

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
  tableContainerWithScrollBar: {
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: ThemingParameters.sapGroup_ContentBackground,
    opacity: 0.8,
    '&:focus': {
      outlineOffset: `calc(-1 * ${ThemingParameters.sapContent_FocusWidth})`,
      outline: `${ThemingParameters.sapContent_FocusWidth} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusColor}`
    }
  },
  tableHeaderRow: {
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    '& div:first-child $th': {
      borderInlineStart: `1px solid ${ThemingParameters.sapList_BorderColor}`
    }
  },
  hasNavigationIndicator: {
    '& $tableHeaderRow :nth-last-child(2) $th': {
      borderInlineEnd: 'none'
    },
    '& $tr :nth-last-child(2)': {
      borderInlineEnd: 'none'
    }
  },
  tableHeaderBackgroundElement: {
    boxSizing: 'border-box',
    position: 'absolute',
    left: 0,
    right: 0,
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    backgroundColor: ThemingParameters.sapList_HeaderBackground,
    borderBlockStart: CustomThemingParameters.AnalyticalTableOuterBorderBlock,
    borderBlockEnd: `${CustomThemingParameters.AnalyticalTableHeaderBorderWidth} solid ${ThemingParameters.sapList_HeaderBorderColor}`
  },
  tableBodyBackgroundElement: {
    boxSizing: 'border-box',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderBlockEnd: `1px solid ${ThemingParameters.sapList_TableFooterBorder}`
  },
  th: {
    height: CssSizeVariables.sapWcrAnalyticalTableRowHeight,
    color: ThemingParameters.sapList_HeaderTextColor,
    backgroundColor: ThemingParameters.sapList_HeaderBackground,
    borderBlockStart: CustomThemingParameters.AnalyticalTableOuterBorderBlock,
    borderBlockEnd: `${CustomThemingParameters.AnalyticalTableHeaderBorderWidth} solid ${ThemingParameters.sapList_HeaderBorderColor}`,
    borderInlineEnd: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    paddingInline: ` 0.5rem`,
    textAlign: 'start',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: ThemingParameters.sapList_Hover_Background,
      color: CustomThemingParameters.AnalyticalTableHeaderActiveTextColor
    },
    '&:active': {
      backgroundColor: ThemingParameters.sapList_Active_Background,
      color: CustomThemingParameters.AnalyticalTableHeaderActiveTextColor
    },
    '&[data-column-id="__ui5wcr__internal_highlight_column"]': {
      borderInlineEnd: '1px solid transparent'
    },
    '&:last-child': {
      '& [data-resizer]': {
        transform: 'translateX(0px)'
      }
    },
    '&:focus': {
      '&[data-column-id="__ui5wcr__internal_selection_column"]': {
        borderInlineStart: '1px solid transparent'
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
    borderBlockEnd: `1px solid ${ThemingParameters.sapList_TableFooterBorder}`,
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
    borderBlockEnd: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    // needed for vertical virtualization
    marginBottom: '-1px',
    boxSizing: 'border-box',
    display: 'flex',
    '&:hover': {
      backgroundColor: ThemingParameters.sapList_Hover_Background
    },
    '&[data-is-selected]': {
      borderBlockEnd: `1px solid ${ThemingParameters.sapList_SelectionBorderColor}`,
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
        borderInlineEnd: `1px solid ${ThemingParameters.sapList_Active_Background}`,
        color: `${ThemingParameters.sapList_Active_TextColor}`,
        '--sapTextColor': ThemingParameters.sapList_Active_TextColor
      }
    }
  },
  tableGroupHeader: {
    '&$tr': {
      fontFamily: CustomThemingParameters.AnalyticalTableHeaderFontFamily,
      backgroundColor: `${ThemingParameters.sapList_TableGroupHeaderBackground}`,
      border: `1px solid ${ThemingParameters.sapList_TableGroupHeaderBorderColor}`,
      color: ThemingParameters.sapList_TextColor,
      '& $tableCell': {
        borderInlineEnd: 'none'
      }
    }
  },
  tableText: {
    display: 'inline-block',
    fontSize: ThemingParameters.sapFontSize,
    maxWidth: '100%',
    boxSizing: 'border-box',
    fontWeight: 'normal',
    overflow: 'hidden',
    wordWrap: 'normal',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  tableCell: {
    height: '100%',
    boxSizing: 'border-box',
    borderInlineEnd: `1px solid ${ThemingParameters.sapList_BorderColor}`,
    display: 'inline-flex',
    padding: '0 0.5rem',
    '&:first-child': {
      borderInlineStart: `1px solid ${ThemingParameters.sapList_BorderColor}`
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
    borderBlockEnd: `1px solid ${ThemingParameters.sapList_BorderColor}`
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
  },
  hiddenSmartColMeasure: {
    visibility: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    height: 0
  },
  hiddenA11yText: {
    display: 'none'
  }
};

export default styles;
