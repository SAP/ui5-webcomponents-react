import { spacing, ThemingParameters } from '@ui5/webcomponents-react-base';

const styles = {
  helpText: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapTextColor
  },
  cardHeader: {
    ...spacing.sapUiContentPadding,
    backgroundColor: ThemingParameters.sapTile_Background,
    fontFamily: ThemingParameters.sapFontHeaderFamily,
    '&:hover': {
      backgroundColor: ThemingParameters.sapTile_Hover_Background,
      boxShadow: ThemingParameters.sapContent_Shadow2
    },
    '&:active': {
      backgroundColor: ThemingParameters.sapTile_Active_Background
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
    fontFamily: ThemingParameters.sapFontHeaderFamily,
    fontWeight: `var(--sapFontHeaderWeight, bold)`,
    fontSize: ThemingParameters.sapFontHeader6Size,
    color: ThemingParameters.sapTile_TitleTextColor,
    overflow: 'hidden',
    WebkitLineClamp: '3' /* number of lines to show */,
    WebkitBoxOrient: 'vertical',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    textAlign: 'left',
    textOverflow: 'ellipsis'
  },
  subHeaderText: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapTile_TextColor,
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    marginTop: '0.5rem',
    width: '100%',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical'
  },
  counter: {
    fontSize: ThemingParameters.sapFontSmallSize,
    margin: '0.188rem 0  0 1rem',
    lineHeight: 'normal',
    textAlign: 'right'
  },
  currency: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapTile_TextColor,
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
    color: ThemingParameters.sapTile_TextColor,
    width: '100%',
    boxSizing: 'border-box'
  },
  valueAndUnit: {
    display: 'flex',
    alignItems: 'end',
    color: ThemingParameters.sapNeutralTextColor
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
    fontSize: ThemingParameters.sapFontSmallSize,
    color: ThemingParameters.sapTile_TextColor
  },
  targetAndDeviationColumn: {
    maxWidth: '45%',
    marginLeft: '1rem'
  },
  targetAndDeviationValue: {
    color: ThemingParameters.sapTile_TitleTextColor,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  description: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSmallSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapTile_TextColor,
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
    color: ThemingParameters.sapPositiveTextColor
  },
  error: {
    color: ThemingParameters.sapNegativeTextColor
  },
  critical: {
    color: ThemingParameters.sapCriticalTextColor
  },
  none: {
    color: ThemingParameters.sapNeutralTextColor
  }
};

export default styles;
