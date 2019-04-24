import { JSSTheme } from '@fiori-for-react/core/types/JSSTheme';
import { fonts } from '@fiori-for-react/styles';

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
