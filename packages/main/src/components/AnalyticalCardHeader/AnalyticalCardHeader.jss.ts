import { fonts } from '@ui5/webcomponents-react-base';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  helpText: {
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiBaseText
  },
  cardHeader: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    outlineOffset: '-0.125rem',
    borderBottom: `0.0625rem solid ${parameters.sapUiTileBackgroundDarken20}`,
    backgroundColor: parameters.sapUiTileBackground,
    fontFamily: fonts.sapUiFontHeaderFamily,
    '&:hover': {
      backgroundColor: parameters.sapUiListHoverBackground // TODO sapUiTileHoverBackground '#fafafa'
    },
    '&:active': {
      backgroundColor: parameters.sapUiListHoverBackground // TODO sapUiTileHoverBackground '#fafafa'
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
    fontFamily: fonts.sapUiFontHeaderFamily,
    fontWeight: fonts.sapUiFontHeaderWeight,
    fontSize: fonts.sapMFontHeader5Size,
    color: parameters.sapUiTileTitleTextColor,
    overflow: 'hidden',
    display: '-webkit-box',
    lineHeight: '18px',
    maxHeight: '54px' /* height * number of lines */,
    WebkitLineClamp: '3' /* number of lines to show */,
    WebkitBoxOrient: 'vertical'
  },
  subHeaderText: {
    overflow: 'hidden',
    fontFamily: fonts.sapUiFontFamily,
    fontWeight: 'normal',
    fontSize: fonts.sapMFontMediumSize,
    color: parameters.sapUiTileTextColor,
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
    fontSize: fonts.sapMFontSmallSize,
    margin: '0.188rem 0  0 1rem',
    lineHeight: 'normal',
    textAlign: 'right'
  },
  currency: {
    fontFamily: parameters.sapUiFontFamily,
    fontSize: parameters.sapMFontMediumSize,
    fontWeight: 'normal',
    color: parameters.sapUiTileTextColor,
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
    color: parameters.sapUiTileTextColor,
    width: '100%',
    boxSizing: 'border-box'
  },
  valueAndUnit: {
    display: 'flex',
    alignItems: 'end',
    color: parameters.sapUiNeutralText
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
    fontSize: parameters.sapMFontSmallSize,
    color: parameters.sapUiTileTextColor
  },
  targetAndDeviationColumn: {
    maxWidth: '45%',
    marginLeft: '1rem'
  },
  targetAndDeviationValue: {
    color: parameters.sapUiTileTitleTextColor,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  description: {
    fontFamily: parameters.sapUiFontFamily,
    fontSize: parameters.sapMFontSmallSize,
    fontWeight: 'normal',
    color: parameters.sapUiTileTextColor,
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
    color: parameters.sapUiPositiveText
  },
  error: {
    color: parameters.sapUiNegativeText
  },
  critical: {
    color: parameters.sapUiCriticalText
  },
  none: {
    color: parameters.sapUiNeutralText
  }
});

export default styles;
