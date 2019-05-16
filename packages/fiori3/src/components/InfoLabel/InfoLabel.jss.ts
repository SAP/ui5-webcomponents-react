import { fonts, HSLColor } from '@fiori-for-react/styles';
import { JSSTheme } from '../../interfaces/JSSTheme';

const lighten = (color, amount) => HSLColor.lighten(color, amount).hsl;

const backgroundColorFactory = (sap_fiori_3: JSSTheme['parameters']) => ({
  1: lighten(sap_fiori_3.sapAccentColor1, 50),
  2: lighten(sap_fiori_3.sapAccentColor2, 40),
  3: lighten(sap_fiori_3.sapAccentColor3, 46),
  4: lighten(sap_fiori_3.sapAccentColor4, 46),
  5: lighten(sap_fiori_3.sapAccentColor5, 32),
  6: lighten(sap_fiori_3.sapAccentColor6, 52),
  7: lighten(sap_fiori_3.sapAccentColor7, 64),
  8: lighten(sap_fiori_3.sapAccentColor8, 61),
  9: lighten(sap_fiori_3.sapAccentColor9, 37),
  10: lighten(sap_fiori_3.sapAccentColor10, 49)
});

const borderColorsFactory = (sap_fiori_3: JSSTheme['parameters']) => ({
  1: sap_fiori_3.sapAccentColor1,
  2: sap_fiori_3.sapAccentColor2,
  3: sap_fiori_3.sapAccentColor3,
  4: sap_fiori_3.sapAccentColor4,
  5: sap_fiori_3.sapAccentColor5,
  6: sap_fiori_3.sapAccentColor6,
  7: sap_fiori_3.sapAccentColor7,
  8: sap_fiori_3.sapAccentColor8,
  9: sap_fiori_3.sapAccentColor9,
  10: sap_fiori_3.sapAccentColor10
});

const flavors = Array.from(Array(11).keys()).slice(1);

const styles = ({ parameters }: JSSTheme) => {
  const backgroundColors = backgroundColorFactory(parameters);
  const borderColors = borderColorsFactory(parameters);

  const flavorClasses = flavors.reduce(
    (acc, val) => ({
      ...acc,
      [`flavour${val}`]: {
        border: `1px solid ${borderColors[val]}`,
        backgroundColor: backgroundColors[val]
      }
    }),
    {}
  );
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
      height: '1.125rem',
      '&$numeric': {
        padding: '0 0.3125rem'
      },
      '&$text': {
        padding: '0 0.625rem'
      },
      '&$displayOnly': {
        height: '1rem',
        lineHeight: '1rem',
        margin: 0,
        '& $label': {
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
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      color: parameters.sapUiBaseText,
      verticalAlign: 'top'
    },
    // specific padding needed for purely numeric input
    numeric: {},
    // specific padding needed for text input
    text: {},
    // displayOnly mode
    displayOnly: {},
    ...flavorClasses
  };
};

export default styles;
