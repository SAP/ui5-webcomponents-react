import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomThemingParameters } from '../../themes/CustomVariables';

const styles = {
  header: {
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
    fontFamily: CustomThemingParameters.ObjectPageSectionTitleFontFamily
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
