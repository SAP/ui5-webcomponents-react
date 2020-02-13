import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';

const styles = ({ parameters }) => ({
  bar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  left: {
    paddingLeft: '0.5rem',
    alignItems: 'center'
  },
  center: {
    alignItems: 'center',
    padding: '0 0.5rem'
  },
  right: {
    alignItems: 'center',
    paddingRight: '0.5rem'
  },
  auto: {
    height: CssSizeVariables.sapWcrBarHeight,
    background: parameters.sapUiPageHeaderBackground,
    boxShadow: parameters.sapUiShadowHeader
  },
  subHeader: {
    height: CssSizeVariables.sapWcrSubHeaderBarHeight,
    background: parameters.sapUiPageHeaderBackground,
    boxShadow: parameters.sapUiShadowHeader,
    paddingBottom: ' 0.25rem'
  },
  footer: {
    height: CssSizeVariables.sapWcrBarHeight,
    background: parameters.sapUiPageFooterBackground,
    borderTop: `0.0625rem solid ${parameters.sapUiPageFooterBorderColor}`
  },
  floatingFooter: {
    height: CssSizeVariables.sapWcrBarHeight,
    background: parameters.sapUiPageFooterBackground,
    borderRadius: parameters.sapUiElementBorderCornerRadius,
    boxShadow: parameters.sapUiShadowLevel1,
    border: 'none',
    opacity: 1
  }
});

export default styles;
