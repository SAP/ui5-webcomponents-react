import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  header: {
    padding: '0 3rem 0 2.5rem',
    borderBottom: `1px solid ${ThemingParameters.sapGroup_TitleBorderColor}`,
    boxSizing: 'border-box',
    height: '2.75rem'
  },
  title: {
    height: '2.75rem',
    color: ThemingParameters.sapTextColor,
    fontSize: ThemingParameters.sapFontHeader4Size,
    borderBottom: `1px solid ${ThemingParameters.sapActiveColor}`,
    display: 'inline-block',
    maxWidth: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: ThemingParameters.sapFontFamily
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  sectionContent: {
    whiteSpace: 'normal'
  },
  sectionContentInner: {
    padding: '1rem 2rem 2rem 2.5rem',
    fontFamily: ThemingParameters.sapFontFamily
  }
};

export default styles;
