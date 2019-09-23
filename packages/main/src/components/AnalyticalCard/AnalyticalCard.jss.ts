import * as spacing from '@ui5/webcomponents-react-base/lib/spacing';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  card: {
    backgroundColor: parameters.sapUiTileBackground,
    // TODO There is a border mentioned in the specs, but this one looks weird.
    // border: `0.625rem solid ${parameters.sapUiTileBorderColor}`,
    boxShadow: parameters.sapUiShadowLevel0,
    borderRadius: '0.25rem',
    textAlign: 'start',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: parameters.sapUiFontFamily,
    boxSizing: 'border-box'
  },
  content: spacing.sapUiContentPadding
});

export default styles;
