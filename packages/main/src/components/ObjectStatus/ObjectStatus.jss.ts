import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  objectStatus: {
    fontFamily: parameters.sapUiFontFamily,
    fontSize: parameters.sapMFontMediumSize,
    fontWeight: 'normal',
    position: 'relative',
    display: 'flex'
  },
  iconSuccess: {
    '& ui5-icon': {
      color: parameters.sapUiPositiveText
    }
  },
  iconWarning: {
    '& ui5-icon': {
      color: parameters.sapUiCriticalText
    }
  },
  iconError: {
    '& ui5-icon': {
      color: parameters.sapUiNegativeText
    }
  },
  iconNone: {
    '& ui5-icon': {
      color: parameters.sapUiNeutralText
    }
  },
  iconInformation: {
    color: parameters.sapUiInformativeElement
  },
  icon: {
    marginRight: '0.5rem',
    fontSize: '1rem',
    verticalAlign: 'bottom',
    lineHeight: 'inherit'
  },
  textSuccess: {
    color: parameters.sapUiPositiveText
  },
  textError: {
    color: parameters.sapUiNegativeText
  },
  textWarning: {
    color: parameters.sapUiCriticalText
  },
  textInformation: {
    color: parameters.sapUiInformativeText
  },
  textNone: {
    color: parameters.sapUiNeutralText
  }
});

export default styles;
