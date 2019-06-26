import { fonts } from '@ui5/webcomponents-react-base';
import { JSSTheme } from '../../interfaces/JSSTheme';

const size = (s) => ({
  height: s,
  width: s,
  minWidth: s,
  maxWidth: s,
  lineHeight: s,
  textAlign: 'center'
});

const styles = ({ theme, parameters }: JSSTheme) => ({
  // outer flexbox
  avatar: {
    backgroundColor: parameters.sapAccentColor7,
    color: parameters.sapUiContentContrastTextColor,
    fontFamily: fonts.sapUiFontFamily,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '0.25rem'
  },
  // borderRadius 100%
  circle: {
    borderRadius: '100%'
  },
  // biggest avatar; 7rem
  sizeXL: {
    ...size('7rem'),
    fontSize: '2.75rem'
  },
  // 5rem
  sizeL: {
    ...size('5rem'),
    fontSize: '2rem'
  },
  // 4rem
  sizeM: {
    ...size('4rem'),
    fontSize: '1.75rem'
  },
  // 3rem
  sizeS: {
    ...size('3rem'),
    fontSize: '1.125rem'
  },
  // 2rem
  sizeXS: {
    ...size('2rem'),
    fontSize: '0.75rem'
  }
});

export default styles;
