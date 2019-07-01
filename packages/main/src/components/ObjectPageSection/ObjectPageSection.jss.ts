import { fonts } from '@ui5/webcomponents-react-base';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ theme, parameters }: JSSTheme) => ({
  header: {
    padding: '0 3rem 0 2.5rem',
    borderBottom: `1px solid ${parameters.sapUiGroupTitleBorderColor}`,
    boxSizing: 'border-box',
    height: '2.75rem'
  },
  title: {
    height: '2.75rem',
    color: parameters.sapUiBaseText,
    fontSize: parameters.sapMFontHeader4Size,
    borderBottom: `1px solid ${parameters.sapUiActive}`,
    display: 'inline-block',
    maxWidth: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: fonts.sapUiFontFamily
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  sectionContent: {
    whiteSpace: 'normal'
  },
  sectionContentInner: {
    padding: '1rem 2rem 2rem 2.5rem',
    fontFamily: fonts.sapUiFontFamily
  }
});

export default styles;
