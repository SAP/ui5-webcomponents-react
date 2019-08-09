import { fonts, spacing } from '@ui5/webcomponents-react-base';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ theme, contentDensity, parameters }: JSSTheme) => ({
  card: {
    backgroundColor: parameters.sapUiTileBackground,
    border: `0.625rem solid ${parameters.sapUiTileBorderColor}`,
    boxShadow: parameters.sapUiShadowLevel0,
    borderRadius: '0.25rem',
    textAlign: 'start',
    overflow: 'hidden',
    position: 'relative',
    width: (props) => props.width,
    fontFamily: fonts.sapUiFontFamily,
    boxSizing: 'border-box'
  },
  content: spacing.sapUiContentPadding
});

export default styles;
