import { fonts } from '@ui5-webcomponents-react/base';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ theme, contentDensity, parameters }: JSSTheme) => ({
  card: {
    backgroundColor: parameters.sapUiTileBackground,
    border: `1px solid ${parameters.sapUiTileBorderColor}`,
    boxShadow: '0 0 0 1px rgba(0,0,0,0.15)',
    borderRadius: '0.25rem',
    textAlign: 'start',
    overflow: 'hidden',
    position: 'relative',
    width: '20rem',
    fontFamily: fonts.sapUiFontFamily
  }
});

export default styles;
