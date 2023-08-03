import { ThemingParameters } from '@ui5/webcomponents-react-base';

const createInvertedValueStateStyles = (baseColor: string) => ({
  textShadow: ThemingParameters.sapContent_ContrastTextShadow,
  background: ThemingParameters[`${baseColor}_Background`],
  color: ThemingParameters[`${baseColor}_TextColor`],
  '& [ui5-icon]': {
    color: ThemingParameters[`${baseColor}_TextColor`]
  },
  '&$active:hover': {
    background: ThemingParameters[`${baseColor}_Hover_Background`],
    color: ThemingParameters[`${baseColor}_Hover_TextColor`],
    '& [ui5-icon]': {
      color: ThemingParameters[`${baseColor}_Hover_TextColor`]
    }
  },
  '&$active:active': {
    background: ThemingParameters[`${baseColor}_Active_Background`],
    color: ThemingParameters[`${baseColor}_Active_TextColor`],
    '& [ui5-icon]': {
      color: ThemingParameters[`${baseColor}_Active_TextColor`]
    }
  }
});

const createInvertedIndicationStyles = (baseColor: string) => ({
  textShadow: ThemingParameters.sapContent_ContrastTextShadow,
  color: ThemingParameters[`${baseColor}_TextColor`],
  backgroundColor: ThemingParameters[`${baseColor}`],
  '& [ui5-icon]': {
    color: ThemingParameters[`${baseColor}_TextColor`]
  },
  '&$active:hover': {
    background: ThemingParameters[`${baseColor}_Hover_Background`]
  },
  '&$active:active': {
    background: ThemingParameters[`${baseColor}_Active_Background`]
  }
});

const styles = {
  objectStatus: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    width: 'fit-content',
    textShadow: ThemingParameters.sapContent_TextShadow
  },

  active: {
    cursor: 'pointer',
    '&:not($inverted)': {
      '& $text': {
        textDecoration: 'underline'
      },
      '&:hover, &:active': {
        '& $text': {
          textDecoration: 'none'
        }
      },
      '&:focus': {
        textShadow: 'none',
        background: ThemingParameters.sapContent_FocusColor,
        color: ThemingParameters.sapContent_ContrastTextColor,
        borderRadius: '0.125rem',
        outline: `0.125rem ${ThemingParameters.sapContent_FocusColor}`,
        '& [ui5-icon]': {
          color: ThemingParameters.sapContent_ContrastTextColor
        }
      }
    }
  },

  icon: {
    width: '1rem',
    textAlign: 'center',
    display: 'inline-block',
    height: '1rem',
    lineHeight: '1rem',
    verticalAlign: 'top',
    paddingInlineEnd: '0.25rem',

    '&:only-child': {
      paddingInlineEnd: 0
    }
  },

  text: {
    lineHeight: '1rem',
    display: 'inline-block',
    height: 'inherit',
    verticalAlign: 'top'
  },

  success: {
    color: ThemingParameters.sapPositiveTextColor,
    '& [ui5-icon]': {
      color: ThemingParameters.sapPositiveElementColor
    }
  },
  warning: {
    color: ThemingParameters.sapCriticalTextColor,
    '& [ui5-icon]': {
      color: ThemingParameters.sapCriticalElementColor
    }
  },
  error: {
    color: ThemingParameters.sapNegativeTextColor,
    '& [ui5-icon]': {
      color: ThemingParameters.sapNegativeElementColor
    }
  },
  information: {
    color: ThemingParameters.sapInformativeTextColor,
    '& [ui5-icon]': {
      color: ThemingParameters.sapInformativeElementColor
    }
  },
  none: {
    color: ThemingParameters.sapNeutralTextColor,
    '& [ui5-icon]': {
      color: ThemingParameters.sapNeutralElementColor
    }
  },
  indication01: {
    color: ThemingParameters.sapIndicationColor_1,
    '& [ui5-icon]': {
      color: ThemingParameters.sapIndicationColor_1
    }
  },
  indication02: {
    color: ThemingParameters.sapIndicationColor_2,
    '& [ui5-icon]': {
      color: ThemingParameters.sapIndicationColor_2
    }
  },
  indication03: {
    color: ThemingParameters.sapIndicationColor_3,
    '& [ui5-icon]': {
      color: ThemingParameters.sapIndicationColor_3
    }
  },
  indication04: {
    color: ThemingParameters.sapIndicationColor_4,
    '& [ui5-icon]': {
      color: ThemingParameters.sapIndicationColor_4
    }
  },
  indication05: {
    color: ThemingParameters.sapIndicationColor_5,
    '& [ui5-icon]': {
      color: ThemingParameters.sapIndicationColor_5
    }
  },
  indication06: {
    color: ThemingParameters.sapIndicationColor_6,
    '& [ui5-icon]': {
      color: ThemingParameters.sapIndicationColor_6
    }
  },
  indication07: {
    color: ThemingParameters.sapIndicationColor_7,
    '& [ui5-icon]': {
      color: ThemingParameters.sapIndicationColor_7
    }
  },
  indication08: {
    color: ThemingParameters.sapIndicationColor_8,
    '& [ui5-icon]': {
      color: ThemingParameters.sapIndicationColor_8
    }
  },

  inverted: {
    height: 'auto',
    minHeight: '1rem',
    minWidth: '1.375rem',
    padding: '0.1875rem 0.25rem',
    borderRadius: ThemingParameters.sapButton_BorderCornerRadius,
    fontFamily: ThemingParameters.sapFontBoldFamily,
    fontSize: ThemingParameters.sapFontSmallSize,
    '& [ui5-icon]': {
      paddingBlockStart: '0.125rem',
      width: ThemingParameters.sapFontSmallSize,
      height: ThemingParameters.sapFontSmallSize
    },
    '&[data-icon-only="true"]': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.1875rem 0.313rem'
    },
    '$active&:focus': {
      outline: `${ThemingParameters.sapContent_FocusColor} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusWidth}`
    },
    '&$error': createInvertedValueStateStyles('sapButton_Negative'),
    '&$warning': createInvertedValueStateStyles('sapButton_Critical'),
    '&$success': createInvertedValueStateStyles('sapButton_Success'),
    '&$information': createInvertedValueStateStyles('sapButton_Information'),
    '&$none': createInvertedValueStateStyles('sapButton_Neutral'),
    '&$indication01': createInvertedIndicationStyles('sapIndicationColor_1'),
    '&$indication02': createInvertedIndicationStyles('sapIndicationColor_2'),
    '&$indication03': createInvertedIndicationStyles('sapIndicationColor_3'),
    '&$indication04': createInvertedIndicationStyles('sapIndicationColor_4'),
    '&$indication05': createInvertedIndicationStyles('sapIndicationColor_5'),
    '&$indication06': createInvertedIndicationStyles('sapIndicationColor_6'),
    '&$indication07': createInvertedIndicationStyles('sapIndicationColor_7'),
    '&$indication08': createInvertedIndicationStyles('sapIndicationColor_8')
  }
};

export default styles;
