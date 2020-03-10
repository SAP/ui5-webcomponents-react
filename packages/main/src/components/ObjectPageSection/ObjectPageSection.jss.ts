import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

const styles = {
  header: {
    padding: '0 3rem 0 2.5rem',
    borderBottom: `1px solid ${ThemingParameters.sapUiGroupTitleBorderColor}`,
    boxSizing: 'border-box',
    height: '2.75rem'
  },
  title: {
    height: '2.75rem',
    color: ThemingParameters.sapUiBaseText,
    fontSize: ThemingParameters.sapMFontHeader4Size,
    borderBottom: `1px solid ${ThemingParameters.sapUiActive}`,
    display: 'inline-block',
    maxWidth: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily: ThemingParameters.sapUiFontFamily
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  sectionContent: {
    whiteSpace: 'normal'
  },
  sectionContentInner: {
    padding: '1rem 2rem 2rem 2.5rem',
    fontFamily: ThemingParameters.sapUiFontFamily
  }
};

export default styles;
