import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomThemingParameters } from '../../themes/CustomVariables.js';

const styles = {
  section: {
    '& [data-component-name="ObjectPageSubSection"]:not(:first-child)': {
      paddingBlockStart: '0.5rem'
    }
  },
  headerContainer: {
    paddingBlock: '0.5rem',
    color: ThemingParameters.sapGroup_TitleTextColor,
    fontFamily: ThemingParameters.sapFontFamily
  },
  titleContainer: {
    borderTop: CustomThemingParameters.ObjectPageSectionBorderTop,
    boxSizing: 'border-box',
    height: '2.25rem'
  },
  title: {
    height: CustomThemingParameters.ObjectPageSectionTitleHeight,
    lineHeight: CustomThemingParameters.ObjectPageSectionTitleLineHeight,
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
  wrap: {
    '& $titleContainer': {
      height: 'unset'
    },
    '& $title': {
      whiteSpace: 'normal',
      height: 'unset',
      lineHeight: 'normal'
    }
  },
  sectionContent: {
    whiteSpace: 'normal',
    height: '100%'
  },
  sectionContentInner: {
    paddingBlock: '0.5rem',
    fontFamily: ThemingParameters.sapFontFamily,
    height: '100%',
    boxSizing: 'border-box'
  }
};

export default styles;
