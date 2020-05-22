import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  objectStatus: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    position: 'relative',
    display: 'flex'
  },
  iconSuccess: {
    '& ui5-icon': {
      color: ThemingParameters.sapPositiveTextColor
    }
  },
  iconWarning: {
    '& ui5-icon': {
      color: ThemingParameters.sapCriticalTextColor
    }
  },
  iconError: {
    '& ui5-icon': {
      color: ThemingParameters.sapNegativeTextColor
    }
  },
  iconNone: {
    '& ui5-icon': {
      color: ThemingParameters.sapNeutralTextColor
    }
  },
  iconInformation: {
    color: ThemingParameters.sapInformativeElementColor
  },
  icon: {
    marginRight: '0.5rem',
    fontSize: '1rem',
    verticalAlign: 'bottom',
    lineHeight: 'inherit'
  },
  textSuccess: {
    color: ThemingParameters.sapPositiveTextColor
  },
  textError: {
    color: ThemingParameters.sapNegativeTextColor
  },
  textWarning: {
    color: ThemingParameters.sapCriticalTextColor
  },
  textInformation: {
    color: ThemingParameters.sapInformativeTextColor
  },
  textNone: {
    color: ThemingParameters.sapNeutralTextColor
  }
};

export default styles;
