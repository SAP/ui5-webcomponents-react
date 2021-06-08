import { sapUiResponsiveContentPadding } from '@ui5/webcomponents-react-base/lib/spacing';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  header: {
    ...sapUiResponsiveContentPadding,
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
    ...sapUiResponsiveContentPadding,
    paddingTop: '1rem',
    paddingBottom: '2rem',
    fontFamily: ThemingParameters.sapFontFamily
  }
};

export default styles;
