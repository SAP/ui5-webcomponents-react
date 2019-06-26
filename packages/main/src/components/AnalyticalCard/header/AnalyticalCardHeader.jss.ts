import { fonts, HSLColor } from '@ui5/webcomponents-react-base';
import { JSSTheme } from '../../../interfaces/JSSTheme';

const styles = ({ theme, contentDensity, parameters }: JSSTheme) => ({
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
    boxSizing: 'border-box',
    borderBottom: `1px solid ${parameters.sapUiListBorderColor}`,
    backgroundColor: parameters.sapUiTileBackground,
    fontFamily: fonts.sapUiFontHeaderFamily,
    '&:hover': {
      backgroundColor: HSLColor.darken(parameters.sapUiTileBackground, 2).toString()
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
  headerText: {
    overflow: 'hidden',
    fontFamily: fonts.sapUiFontHeaderFamily,
    fontWeight: fonts.sapUiFontHeaderWeight,
    fontSize: fonts.sapMFontHeader5Size,
    color: parameters.sapUiTileTitleTextColor,
    textAlign: 'left',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    textOverflow: 'ellipsis'
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
    width: '100%'
  },
  helpIcon: {
    position: 'absolute',
    right: '0',
    top: '0'
  },
  kpiContent: {
    fontWeight: 'normal',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: '10px',
    color: parameters.sapUiTileTextColor
  },
  leftContent: {
    display: 'flex',
    alignItems: 'baseline'
  },
  valueAndUnit: {
    display: 'flex',
    alignItems: 'end',
    marginLeft: '0.25rem',
    color: parameters.sapUiNeutralText
  },
  value: {
    display: 'flex',
    alignItems: 'flex-end',
    fontSize: '2rem'
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
    textAlign: 'right',
    fontSize: fonts.sapMFontSmallSize,
    display: 'flex'
  },
  deviation: {
    marginLeft: '0.5rem'
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
