import { CSSProperties } from 'react';
import { JSSTheme } from '../../interfaces/JSSTheme';

const size = (s): CSSProperties => ({
  height: s,
  width: s,
  minWidth: s,
  maxWidth: s,
  lineHeight: s,
  textAlign: 'center'
});

const styles = ({ parameters }: JSSTheme) => ({
  // outer flexbox
  avatar: {
    backgroundColor: parameters.sapAccentColor7,
    color: parameters.sapUiContentContrastTextColor,
    fontFamily: parameters.sapUiFontFamily,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '0.25rem',
    '--sapUiContentNonInteractiveIconColor': parameters.sapContent_ContrastIconColor
  },
  // borderRadius 100%
  circle: {
    borderRadius: '100%'
  },
  // biggest avatar; 7rem
  sizeXL: {
    ...size('7rem'),
    fontSize: '3rem',
    '& ui5-icon': {
      width: '3rem',
      height: '3rem'
    }
  },
  // 5rem
  sizeL: {
    ...size('5rem'),
    fontSize: '2.25rem',
    '& ui5-icon': {
      width: '2.25rem',
      height: '2.25rem'
    }
  },
  // 4rem
  sizeM: {
    ...size('4rem'),
    fontSize: '1.5rem',
    '& ui5-icon': {
      width: '1.5rem',
      height: '1.5rem'
    }
  },
  // 3rem
  sizeS: {
    ...size('3rem'),
    fontSize: '1.125rem',
    '& ui5-icon': {
      width: '1.125rem',
      height: '1.125rem'
    }
  },
  // 2rem
  sizeXS: {
    ...size('2rem'),
    fontSize: '1rem',
    '& ui5-icon': {
      width: '1rem',
      height: '1rem'
    }
  },
  sizeCustom: ({ customFontSize, customDisplaySize }) => ({
    ...size(customDisplaySize),
    fontSize: customFontSize,
    '& ui5-icon': {
      width: customFontSize,
      height: customFontSize
    }
  })
});

export default styles;
