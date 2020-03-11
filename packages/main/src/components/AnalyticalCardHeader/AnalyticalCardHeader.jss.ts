import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

const styles = {
  helpText: {
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontMediumSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapUiBaseText
  },
  cardHeader: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    outlineOffset: '-0.125rem',
    borderBottom: `0.0625rem solid ${ThemingParameters.sapUiTileBackgroundDarken20}`,
    backgroundColor: ThemingParameters.sapUiTileBackground,
    fontFamily: ThemingParameters.sapUiFontHeaderFamily,
    '&:hover': {
      backgroundColor: ThemingParameters.sapUiListHoverBackground // TODO sapUiTileHoverBackground '#fafafa'
    },
    '&:active': {
      backgroundColor: ThemingParameters.sapUiListHoverBackground // TODO sapUiTileHoverBackground '#fafafa'
    }
  },
  arrowIndicatorShape: {
    width: 0,
    height: 0
  },
  arrowUp: {
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '8px solid'
  },
  arrowDown: {
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid'
  },
  arrowRight: {
    borderLeft: `8px solid `,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent'
  },
  cardHeaderClickable: {
    cursor: 'pointer'
  },
  headerContent: {
    marginLeft: '1rem',
    marginRight: '1rem',
    position: 'relative'
  },
  headerTitles: {
    overflow: 'hidden',
    textAlign: 'left',
    whiteSpace: 'normal',
    wordWrap: 'break-word'
  },
  headerText: {
    fontFamily: ThemingParameters.sapUiFontHeaderFamily,
    fontWeight: ThemingParameters.sapUiFontHeaderWeight,
    fontSize: ThemingParameters.sapMFontHeader5Size,
    color: ThemingParameters.sapUiTileTitleTextColor,
    overflow: 'hidden',
    display: '-webkit-box',
    lineHeight: '18px',
    maxHeight: '54px' /* height * number of lines */,
    WebkitLineClamp: '3' /* number of lines to show */,
    WebkitBoxOrient: 'vertical'
  },
  subHeaderText: {
    overflow: 'hidden',
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontWeight: 'normal',
    fontSize: ThemingParameters.sapMFontMediumSize,
    color: ThemingParameters.sapUiTileTextColor,
    textAlign: 'left',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    textOverflow: 'ellipsis',
    marginTop: '0.5rem',
    width: '100%',
    display: '-webkit-box',
    lineHeight: '16px',
    maxHeight: '32px',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical'
  },
  counter: {
    fontSize: ThemingParameters.sapMFontSmallSize,
    margin: '0.188rem 0  0 1rem',
    lineHeight: 'normal',
    textAlign: 'right'
  },
  currency: {
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontMediumSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapUiTileTextColor,
    overflow: 'hidden',
    marginLeft: '0.25rem',
    textAlign: 'right'
  },
  helpIcon: {
    position: 'absolute',
    right: '0',
    top: '0'
  },
  kpiContent: {
    fontWeight: 'normal',
    marginTop: '0.5rem',
    color: ThemingParameters.sapUiTileTextColor,
    width: '100%',
    boxSizing: 'border-box'
  },
  valueAndUnit: {
    display: 'flex',
    alignItems: 'end',
    color: ThemingParameters.sapUiNeutralText
  },
  value: {
    fontSize: '2rem',
    maxWidth: '135px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block'
  },
  unit: {
    marginLeft: '0.25rem',
    fontSize: '1rem'
  },
  indicatorAndUnit: {
    display: 'flex',
    height: '2rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  targetAndDeviation: {
    width: '60%',
    paddingBottom: '0.25rem',
    textAlign: 'right',
    fontSize: ThemingParameters.sapMFontSmallSize,
    color: ThemingParameters.sapUiTileTextColor
  },
  targetAndDeviationColumn: {
    maxWidth: '45%',
    marginLeft: '1rem'
  },
  targetAndDeviationValue: {
    color: ThemingParameters.sapUiTileTitleTextColor,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  description: {
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontSmallSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapUiTileTextColor,
    whiteSpace: 'normal',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    marginTop: '0.25rem',
    width: '100%',
    display: '-webkit-box',
    lineHeight: '14px',
    maxHeight: '14px' /* height * number of lines */,
    WebkitLineClamp: '1' /* number of lines to show */,
    WebkitBoxOrient: 'vertical'
  },
  good: {
    color: ThemingParameters.sapUiPositiveText
  },
  error: {
    color: ThemingParameters.sapUiNegativeText
  },
  critical: {
    color: ThemingParameters.sapUiCriticalText
  },
  none: {
    color: ThemingParameters.sapUiNeutralText
  }
};

export default styles;
