/**
 * Style Class Generator Function
 *
 * @param {Object} themeContext - Current Theme Context by JSS Provider.
 * @param {string} obj.theme - Current Theme (sap_belize, sap_belize_plus, etc.)
 * @param {string} obj.contentDensity - Current Content Density (Cozy, Compact)
 * @param {object} obj.parameters - Theming parameters (e.g. LabelColor)
 */
import { ContentDensity } from '@fiori-for-react/core/enums/ContentDensity';
import { JSSTheme } from '@fiori-for-react/core/types/JSSTheme';
import { fonts } from '@fiori-for-react/styles';

const styles = ({ theme, contentDensity, parameters }: JSSTheme) => ({
  tokenizer: {
    paddingLeft: '6px',
    position: 'relative',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    flex: '0 1 auto',
    overflow: 'hidden',
    fontFamily: fonts.sapUiFontFamily,
    '&:focus': {
      outline: `1px dotted ${parameters.sapUIContentFocusColor}`,
      outlineOffset: '-3px'
    },
    lineHeight: ContentDensity.Cozy === contentDensity ? '1rem' : '0.5rem'
  },
  tokenizerScrollContainer: {
    width: '100%',
    display: 'inline-block',
    userSelect: 'none',
    lineHeight: ContentDensity.Cozy === contentDensity ? '1rem' : '0.5rem'
  }
});

export default styles;
