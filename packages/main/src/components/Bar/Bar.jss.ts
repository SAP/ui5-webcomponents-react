import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

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
    background: ThemingParameters.sapPageHeader_Background,
    boxShadow: ThemingParameters.sapContent_HeaderShadow,
    '& $inner': {
      height: CssSizeVariables.sapWcrBarHeight
    }
  },
  subHeader: {
    height: CssSizeVariables.sapWcrSubHeaderBarHeight,
    background: ThemingParameters.sapPageHeader_Background,
    boxShadow: ThemingParameters.sapContent_HeaderShadow,
    paddingBottom: ' 0.25rem',
    '& $inner': {
      height: CssSizeVariables.sapWcrSubHeaderBarHeight
    }
  },
  footer: {
    height: CssSizeVariables.sapWcrBarHeight,
    background: ThemingParameters.sapPageFooter_Background,
    borderTop: `0.0625rem solid ${ThemingParameters.sapPageFooter_BorderColor}`,
    '& $inner': {
      height: CssSizeVariables.sapWcrBarHeight
    }
  },
  floatingFooter: {
    height: CssSizeVariables.sapWcrBarHeight,
    background: ThemingParameters.sapPageFooter_Background,
    // borderRadius: ThemingParameters.sapElement_BorderCornerRadius,
    boxShadow: ThemingParameters.sapContent_Shadow1,
    border: 'none',
    opacity: 1,
    '& $inner': {
      height: CssSizeVariables.sapWcrBarHeight
    }
  }
};

export default styles;
