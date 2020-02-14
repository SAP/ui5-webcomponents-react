import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

const styles = {
  // outer container, controlling height and width
  bar: {
    width: '100%',
    display: 'block',
    position: 'relative',
    height: CssSizeVariables.sapWcrBarHeight
  },
  // left container
  left: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: '100%',
    paddingLeft: '0.5rem',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center'
  },
  // center container
  center: {
    textAlign: 'center',
    width: '100%',
    height: '0',
    top: '0',
    left: '0'
  },
  // inner container around left, center, and right
  inner: {
    display: 'inline-flex',
    padding: '0 0.5rem 0 0.5rem',
    alignItems: 'center'
  },
  // right container
  right: {
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100%',
    paddingRight: '0.5rem',
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center'
  },
  auto: {
    height: CssSizeVariables.sapWcrBarHeight,
    background: ThemingParameters.sapUiPageHeaderBackground,
    boxShadow: ThemingParameters.sapUiShadowHeader,
    '& $inner': {
      height: CssSizeVariables.sapWcrBarHeight
    }
  },
  subHeader: {
    height: CssSizeVariables.sapWcrSubHeaderBarHeight,
    background: ThemingParameters.sapUiPageHeaderBackground,
    boxShadow: ThemingParameters.sapUiShadowHeader,
    paddingBottom: ' 0.25rem',
    '& $inner': {
      height: CssSizeVariables.sapWcrSubHeaderBarHeight
    }
  },
  footer: {
    height: CssSizeVariables.sapWcrBarHeight,
    background: ThemingParameters.sapUiPageFooterBackground,
    borderTop: `0.0625rem solid ${ThemingParameters.sapUiPageFooterBorderColor}`,
    '& $inner': {
      height: CssSizeVariables.sapWcrBarHeight
    }
  },
  floatingFooter: {
    height: CssSizeVariables.sapWcrBarHeight,
    background: ThemingParameters.sapUiPageFooterBackground,
    // borderRadius: ThemingParameters.sapUiElementBorderCornerRadius,
    boxShadow: ThemingParameters.sapUiShadowLevel1,
    border: 'none',
    opacity: 1,
    '& $inner': {
      height: CssSizeVariables.sapWcrBarHeight
    }
  }
};

export default styles;
