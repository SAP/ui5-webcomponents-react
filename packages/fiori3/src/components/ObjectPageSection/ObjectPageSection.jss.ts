import { JSSTheme } from '../../interfaces/JSSTheme';
import { fonts, HSLColor } from '@ui5-webcomponents-react/styles';

const styles = ({ theme, parameters }: JSSTheme) => ({
  header: {
    padding: '0 3rem 0 2.5rem',
    borderBottom: `0.125rem solid ${HSLColor.of(parameters.sapUiListBorderColor).lighten(5).hsl}`,
    boxSizing: 'border-box',
    height: '2.5rem',
    lineHeight: '2rem'
  },
  title: {
    height: '2.5rem',
    lineHeight: '2rem',
    paddingBottom: '0.5rem',
    color: parameters.sapUiBaseText,
    fontSize: '1.375rem',
    borderBottom: `0.125rem solid ${HSLColor.of(parameters.sapUiListBorderColor).darken(30).hsl}`,
    boxSizing: 'border-box',
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
