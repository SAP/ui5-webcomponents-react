import { ContentDensity } from '../../lib/ContentDensity';
import { JSSTheme } from '../../interfaces/JSSTheme';
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
