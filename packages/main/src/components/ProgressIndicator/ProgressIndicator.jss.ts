import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

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
    background: ThemingParameters.sapField_Background,
    width: '100%',
    height: CssSizeVariables.sapWcrProgressIndicatorHeight,
    minWidth: '4rem',
    minHeight: '1rem',
    padding: '0',
    margin: CssSizeVariables.sapWcrProgressIndicatorMargin,
    border: `1px solid ${ThemingParameters.sapField_BorderColor}`,
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
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSmallSize,
    fontWeight: 'normal'
  },
  progressBarTextColorLow: {
    color: ThemingParameters.sapTextColor
  },
  progressBarTextColorHigh: {
    color: ThemingParameters.sapContent_ContrastTextColor
  },
  stateNone: {
    backgroundColor: ThemingParameters.sapNeutralElementColor
  },
  stateSuccess: {
    backgroundColor: ThemingParameters.sapPositiveElementColor
  },
  stateWarning: {
    backgroundColor: ThemingParameters.sapCriticalElementColor
  },
  stateError: {
    backgroundColor: ThemingParameters.sapNegativeElementColor
  },
  stateInformation: {
    backgroundColor: ThemingParameters.sapInformativeElementColor
  }
};

export default styles;
