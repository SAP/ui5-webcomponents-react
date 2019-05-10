import { fonts, HSLColor, sap_fiori_3 } from '@fiori-for-react/styles';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { UnknownFlavourException } from '../../exceptions/UnknownFlavourException';

const darken = (amount, color) => HSLColor.of(color).darken(amount * 100).hsl;
const lighten = (amount, color) => HSLColor.of(color).lighten(amount * 100).hsl;

const colorFlavors = {
  1: lighten(0.4, sap_fiori_3.sapUiAccent1),
  2: lighten(0.24, sap_fiori_3.sapUiAccent2),
  3: lighten(0.4, sap_fiori_3.sapUiAccent3),
  4: lighten(0.39, sap_fiori_3.sapUiAccent4),
  5: lighten(0.29, sap_fiori_3.sapUiAccent5),
  6: lighten(0.31, sap_fiori_3.sapUiAccent6),
  7: lighten(0.5, sap_fiori_3.sapUiAccent7),
  8: lighten(0.52, sap_fiori_3.sapUiAccent8),
  9: lighten(0.35, sap_fiori_3.sapUiContentForegroundBorderColor)
};

const borderColors = {
  1: sap_fiori_3.sapUiAccent1,
  2: darken(0.08, sap_fiori_3.sapUiAccent2),
  3: sap_fiori_3.sapUiAccent3,
  4: sap_fiori_3.sapUiAccent4,
  5: sap_fiori_3.sapUiAccent5,
  6: darken(0.07, sap_fiori_3.sapUiAccent6),
  7: darken(0.04, sap_fiori_3.sapUiAccent7),
  8: darken(0.03, sap_fiori_3.sapUiAccent8),
  9: darken(0.04, sap_fiori_3.sapUiContentForegroundBorderColor)
};

const getBackgroundColor = (props) => {
  if (!(props.flavour >= 1 && props.flavour <= 9)) {
    throw new UnknownFlavourException('Unknown Flavour prop passed to InfoLabel');
  }

  return colorFlavors[props.flavour];
};

const styles = ({ theme, contentDensity, parameters }: JSSTheme) => {
  const border = (props) => `1px solid ${borderColors[props.flavour]}`;

  return {
    /**
     * outer container
     */
    infoLabelContainer: {
      boxSizing: 'border-box',
      borderRadius: '1.125rem',
      display: 'inline-block',
      maxWidth: '100%',
      textAlign: 'center',
      background: getBackgroundColor,
      border,
      height: '1.125rem',
      '&$numeric': {
        padding: '0 0.3125rem'
      },
      '&$text': {
        padding: '0 0.625rem'
      },
      '&$displayOnly': {
        height: '1rem',
        margin: 0,
        '& $label': {
          fontSize: '0.6875rem',
          lineHeight: '1rem'
        }
      }
    },
    // is being applied to the span which represents the InfoLabel Text
    label: {
      fontSize: fonts.sapMFontSmallSize,
      fontFamily: fonts.sapUiFontFamily,
      lineHeight: '1.125rem',
      fontWeight: 600,
      letterSpacing: '0.0125rem',
      textTransform: 'uppercase',
      textAlign: 'center',
      verticalAlign: 'top',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      color: parameters.sapUiBaseText
    },
    // specific padding needed for purely numeric input
    numeric: {},
    // specific padding needed for text input
    text: {},
    // displayOnly mode
    displayOnly: {}
  };
};

export default styles;
