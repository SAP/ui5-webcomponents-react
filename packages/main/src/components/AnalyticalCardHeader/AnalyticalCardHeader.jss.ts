import { spacing, ThemingParameters } from '@ui5/webcomponents-react-base';
import { cssVarVersionInfoPrefix } from '../../internal/utils.js';

const _cardHeaderFocusOffset = `var(${cssVarVersionInfoPrefix}card_header_focus_offset)`;
const _cardHeaderFocusBorder = `var(${cssVarVersionInfoPrefix}card_header_focus_border)`;
const _cardHeaderFocusRadius = `var(${cssVarVersionInfoPrefix}card_header_focus_radius)`;
const _cardHeaderFocusBottomRadius = `var(${cssVarVersionInfoPrefix}card_header_focus_bottom_radius)`;

const styles = {
  helpText: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapTextColor
  },
  cardHeader: {
    ...spacing.sapUiContentPadding,
    position: 'relative',
    backgroundColor: ThemingParameters.sapTile_Background,
    '&:focus:before': {
      outline: 'none',
      content: '""',
      position: 'absolute',
      border: _cardHeaderFocusBorder,
      pointerEvents: 'none',
      top: _cardHeaderFocusOffset,
      left: _cardHeaderFocusOffset,
      right: _cardHeaderFocusOffset,
      bottom: _cardHeaderFocusOffset,
      borderTopLeftRadius: _cardHeaderFocusRadius,
      borderTopRightRadius: _cardHeaderFocusRadius,
      borderBottomLeftRadius: _cardHeaderFocusBottomRadius,
      borderBottomRightRadius: _cardHeaderFocusBottomRadius
    },
    '&:focus-visible': {
      outline: 'none'
    }
  },
  cardHeaderClickable: {
    cursor: 'pointer'
  },
  headerTitles: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: '0',
    width: '100%'
  },
  headerFirstLine: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  headerSecondLine: {
    position: 'relative',
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    color: ThemingParameters.sapTile_TextColor,
    minHeight: '1rem',
    flexGrow: '1',
    margin: '0.25rem 0 0 0',
    display: 'flex',
    alignItems: 'flex-end',
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
  headerText: {
    fontFamily: ThemingParameters.sapFontHeaderFamily,
    fontWeight: `var(--sapFontHeaderWeight)`,
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
  status: {
    fontSize: ThemingParameters.sapFontSmallSize,
    color: ThemingParameters.sapTile_TextColor,
    lineHeight: 'normal',
    textAlign: 'right',
    marginInlineStart: '1rem',
    marginBlockStart: '0.125rem'
  },
  unitOfMeasurement: {
    marginInlineStart: '0.25rem',
    paddingInlineStart: '0.25rem',
    borderInlineStart: `1px solid ${ThemingParameters.sapTile_TextColor}`
  },
  helpIcon: {
    position: 'absolute',
    right: '0',
    top: '0'
  },
  kpiContent: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '0.25rem'
  },
  // KPI BLOCK
  mainIndicator: {
    color: ThemingParameters.sapNeutralTextColor,
    display: 'inline-flex',
    justifyContent: 'flex-start',
    position: 'relative',
    whiteSpace: 'nowrap',
    textAlign: 'right',
    textOverflow: 'ellipsis',
    fontSize: '2.25rem',
    fontFamily: ThemingParameters.sapFontFamily,
    fontWeight: 'normal'
  },
  value: {
    paddingBlockStart: '0.125rem',
    height: '2.875rem',
    fontFamily: ThemingParameters.sapFontLightFamily
  },
  indicatorAndUnit: {
    display: 'grid',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    height: '2.125rem',
    paddingInlineStart: '0.375rem',
    paddingBlock: '0.5rem 0.375rem'
  },
  indicator: {
    gridColumn: 1,
    gridRow: 1,
    width: ThemingParameters.sapFontSmallSize,
    height: ThemingParameters.sapFontSmallSize,
    color: 'currentColor'
  },
  unit: {
    gridColumn: 1,
    gridRow: 1,
    marginTop: '0.9375rem',
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSmallSize
  },
  indicatorGap: {
    flex: '1 0 1rem',
    maxWidth: '3rem'
  },
  sideIndicators: {
    display: 'flex',
    padding: '0.5rem 0',
    minWidth: 0,
    '& > *': {
      marginInlineEnd: '1rem'
    },
    '&:last-child': {
      marginInlineEnd: 0
    }
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
  neutral: {
    color: ThemingParameters.sapNeutralTextColor
  }
};

export default styles;
