import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

const styles = {
  progressBarRemaining: {
    height: '100%',
    flexGrow: '1',
    minWidth: '0',
    display: 'flex',
    alignItems: 'center'
  },
  progressBarTextRight: {
    marginLeft: '0.375rem'
  },
  progressBarTextLeft: {
    marginRight: '0.375rem'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    WebkitFlexDirection: 'row',
    boxSizing: 'border-box',
    outline: 'none',
    background: ThemingParameters.sapUiFieldBackground,
    width: '100%',
    height: CssSizeVariables.sapWcrProgressIndicatorHeight,
    minWidth: '4rem',
    minHeight: '1rem',
    padding: '0',
    margin: CssSizeVariables.sapWcrProgressIndicatorMargin,
    border: `1px solid ${ThemingParameters.sapUiFieldBorderColor}`,
    borderRadius: '0.5rem',
    overflow: 'hidden'
  },
  progressbar: {
    transition: 'flex-basis 1s',
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center'
  },
  progressBarText: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontSmallSize,
    fontWeight: 'normal'
  },
  progressBarTextColorLow: {
    color: ThemingParameters.sapUiBaseText
  },
  progressBarTextColorHigh: {
    color: ThemingParameters.sapUiContentContrastTextColor
  },
  stateNone: {
    backgroundColor: ThemingParameters.sapUiNeutralElement
  },
  stateSuccess: {
    backgroundColor: ThemingParameters.sapUiPositiveElement
  },
  stateWarning: {
    backgroundColor: ThemingParameters.sapUiCriticalElement
  },
  stateError: {
    backgroundColor: ThemingParameters.sapUiNegativeElement
  },
  stateInformation: {
    backgroundColor: ThemingParameters.sapUiInformativeElement
  }
};

export default styles;
