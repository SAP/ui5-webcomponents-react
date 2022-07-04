import { ThemingParameters } from '@ui5/webcomponents-react-base';

export const NumericSideIndicatorStyles = {
  numericSideIndicator: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    minWidth: 0,
    position: 'relative'
  },
  title: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSmallSize,
    color: ThemingParameters.sapTile_TextColor,
    textAlign: 'end',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    paddingBottom: '0.25rem',
    maxWidth: '100%'
  },
  valueContainer: {
    position: 'relative'
  },
  number: {
    fontSize: ThemingParameters.sapFontSmallSize,
    color: ThemingParameters.sapTile_TitleTextColor,
    whiteSpace: 'pre-line',
    wordWrap: 'break-word',
    wordBreak: 'break-word'
  },
  unit: {
    fontSize: ThemingParameters.sapFontSmallSize,
    color: ThemingParameters.sapTile_TitleTextColor,
    whiteSpace: 'pre-line',
    wordWrap: 'break-word',
    wordBreak: 'break-word'
  },
  stateGood: {
    color: ThemingParameters.sapPositiveTextColor,
    '& $number, $unit': {
      color: ThemingParameters.sapPositiveTextColor
    }
  },
  stateError: {
    color: ThemingParameters.sapNegativeTextColor,
    '& $number, $unit': {
      color: ThemingParameters.sapNegativeTextColor
    }
  },
  stateCritical: {
    color: ThemingParameters.sapCriticalTextColor,
    '& $number, $unit': {
      color: ThemingParameters.sapCriticalTextColor
    }
  },
  stateNeutral: {
    color: ThemingParameters.sapNeutralTextColor,
    '& $number, $unit': {
      color: ThemingParameters.sapNeutralTextColor
    }
  }
};
