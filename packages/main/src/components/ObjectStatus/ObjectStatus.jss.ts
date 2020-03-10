import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

const styles = {
  objectStatus: {
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontMediumSize,
    fontWeight: 'normal',
    position: 'relative',
    display: 'flex'
  },
  iconSuccess: {
    '& ui5-icon': {
      color: ThemingParameters.sapUiPositiveText
    }
  },
  iconWarning: {
    '& ui5-icon': {
      color: ThemingParameters.sapUiCriticalText
    }
  },
  iconError: {
    '& ui5-icon': {
      color: ThemingParameters.sapUiNegativeText
    }
  },
  iconNone: {
    '& ui5-icon': {
      color: ThemingParameters.sapUiNeutralText
    }
  },
  iconInformation: {
    color: ThemingParameters.sapUiInformativeElement
  },
  icon: {
    marginRight: '0.5rem',
    fontSize: '1rem',
    verticalAlign: 'bottom',
    lineHeight: 'inherit'
  },
  textSuccess: {
    color: ThemingParameters.sapUiPositiveText
  },
  textError: {
    color: ThemingParameters.sapUiNegativeText
  },
  textWarning: {
    color: ThemingParameters.sapUiCriticalText
  },
  textInformation: {
    color: ThemingParameters.sapUiInformativeText
  },
  textNone: {
    color: ThemingParameters.sapUiNeutralText
  }
};

export default styles;
