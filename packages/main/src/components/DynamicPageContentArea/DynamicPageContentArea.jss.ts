import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    padding: '0 3rem 0 2.5rem',
    fontFamily: ThemingParameters.sapFontFamily,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    solid: ThemingParameters.sapBackgroundColor,
    list: ThemingParameters.sapGroup_ContentBackground,
    transparent: 'transparent',
    zIndex: 0
  },
  content: {
    padding: 0,
    paddingTop: '1rem'
  }
};

export default styles;
