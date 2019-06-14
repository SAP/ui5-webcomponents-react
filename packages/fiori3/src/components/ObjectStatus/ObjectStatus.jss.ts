import { fonts } from '@ui5-webcomponents-react/styles';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ theme, contentDensity, parameters }: JSSTheme) => ({
  objectStatus: {
    fontFamily: fonts.sapUiFontFamily,
    fontSize: fonts.sapMFontMediumSize,
    fontWeight: 'normal',
    position: 'relative',
    display: 'flex'
  },
  iconSuccess: {
    color: parameters.sapUiPositiveText
  },
  iconWarning: {
    color: parameters.sapUiCriticalText
  },
  iconError: {
    color: parameters.sapUiNegativeText
  },
  iconNone: {
    color: parameters.sapUiNeutralText
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
    // @ts-ignore
    color: parameters.sapUiInformativeText
  },
  textNone: {
    color: parameters.sapUiNeutralText
  }
});

export default styles;
