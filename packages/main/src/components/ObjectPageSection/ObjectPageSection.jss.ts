import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomThemingParameters } from '../../themes/CustomVariables';

const styles = {
  header: {
    borderTop: CustomThemingParameters.ObjectPageSectionBorderTop,
    boxSizing: 'border-box',
    height: '2.25rem'
  },
  title: {
    height: '2.25rem',
    lineHeight: '2.25rem',
    color: ThemingParameters.sapGroup_TitleTextColor,
    fontSize: ThemingParameters.sapFontHeader4Size,
    display: 'inline-block',
    maxWidth: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: CustomThemingParameters.ObjectPageSectionTitleFontFamily,
    textDecoration: CustomThemingParameters.ObjectPageSectionTitleTextDecoration
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  sectionContent: {
    whiteSpace: 'normal'
  },
  sectionContentInner: {
    paddingTop: '1rem',
    paddingBottom: '2rem',
    fontFamily: ThemingParameters.sapFontFamily
  }
};

export default styles;
