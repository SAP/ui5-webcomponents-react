import { ThemingParameters } from '@ui5/webcomponents-react-base';

const createInvertedValueStateStyles = (baseColor: string, lightColor = false) => ({
  textShadow: lightColor ? ThemingParameters.sapContent_TextShadow : ThemingParameters.sapContent_ContrastTextShadow,
  background: ThemingParameters[`${baseColor}_Background`],
  color: ThemingParameters[`${baseColor}_TextColor`],
  border: `0.0625rem solid ${ThemingParameters[`${baseColor}_BorderColor`]}`,
  '& [ui5-icon]': {
    color: ThemingParameters[`${baseColor}_TextColor`]
  },
  '&$active:hover': {
    background: ThemingParameters[`${baseColor}_Hover_Background`],
    color: ThemingParameters[`${baseColor}_Hover_TextColor`],
    border: `0.0625rem solid ${ThemingParameters[`${baseColor}_Hover_BorderColor`]}`,
    '& [ui5-icon]': {
      color: ThemingParameters[`${baseColor}_Hover_TextColor`]
    }
  },
  '&$active:active': {
    textShadow: ThemingParameters.sapContent_TextShadow,
    background: ThemingParameters[`${baseColor}_Active_Background`],
    border: `0.0625rem solid ${ThemingParameters[`${baseColor}_Active_BorderColor`]}`
  }
});

const createInvertedIndicationStyles = (baseColor: string) => ({
  textShadow: ThemingParameters.sapContent_ContrastTextShadow,
  color: ThemingParameters[`${baseColor}_TextColor`],
  backgroundColor: ThemingParameters[`${baseColor}_Background`],
  border: `0.0625rem solid ${ThemingParameters[`${baseColor}_BorderColor`]}`,
  '& [ui5-icon]': {
    color: ThemingParameters[`${baseColor}_TextColor`]
  },
  '&$active:hover': {
    background: ThemingParameters[`${baseColor}_Hover_Background`]
  },
  '&$active:active': {
    textShadow: ThemingParameters.sapContent_TextShadow,
    background: ThemingParameters[`${baseColor}_Active_Background`],
    border: `0.0625rem solid ${ThemingParameters[`${baseColor}_Active_BorderColor`]}`,
    color: ThemingParameters[`${baseColor}_Active_TextColor`],
    '& [ui5-icon]': {
      color: ThemingParameters[`${baseColor}_Active_TextColor`]
    }
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
    '&[data-icon-only="true"]': {
      paddingInlineEnd: 0
    },
    textShadow: ThemingParameters.sapContent_TextShadow
  },

  text: {
    lineHeight: '1rem',
    display: 'inline-block',
    height: 'inherit',
    verticalAlign: 'top'
  },

  emptyIndicator: {
    lineHeight: 'normal',
    color: ThemingParameters.sapTextColor
  },

  pseudoInvisibleText: {
    fontSize: 0,
    position: 'absolute',
    userSelect: 'none',
    left: 0,
    top: 0
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
    '& $icon': {
      verticalAlign: 'text-bottom'
    },
    '& [ui5-icon], $icon:not([data-icon-only="true"])': {
      width: ThemingParameters.sapFontSmallSize,
      height: ThemingParameters.sapFontSmallSize
    },
    '&[data-icon-only="true"]': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.1875rem 0.313rem',
      width: '1rem',
      height: '1rem',
      '& [ui5-icon]': {
        width: '1rem',
        height: '1rem'
      }
    },
    '$active&:focus': {
      outline: `${ThemingParameters.sapContent_FocusColor} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusWidth}`
    },
    '&$error': {
      ...createInvertedValueStateStyles('sapButton_Negative'),
      '&$active:active': {
        ...createInvertedValueStateStyles('sapButton_Negative', true)['&$active:active'],
        color: ThemingParameters.sapButton_Reject_Selected_TextColor,
        '& [ui5-icon]': {
          color: ThemingParameters.sapButton_Reject_Selected_TextColor
        }
      }
    },
    '&$warning': {
      ...createInvertedValueStateStyles('sapButton_Critical'),
      '&$active:active': {
        ...createInvertedValueStateStyles('sapButton_Critical', true)['&$active:active'],
        color: ThemingParameters.sapButton_Attention_Selected_TextColor,
        '& [ui5-icon]': {
          color: ThemingParameters.sapButton_Attention_Selected_TextColor
        }
      }
    },
    '&$success': {
      ...createInvertedValueStateStyles('sapButton_Success'),
      '&$active:active': {
        ...createInvertedValueStateStyles('sapButton_Success', true)['&$active:active'],
        color: ThemingParameters.sapButton_Accept_Selected_TextColor,
        '& [ui5-icon]': {
          color: ThemingParameters.sapButton_Accept_Selected_TextColor
        }
      }
    },
    '&$information': {
      ...createInvertedValueStateStyles('sapButton_Information', true),
      '&$active:active': {
        ...createInvertedValueStateStyles('sapButton_Information', true)['&$active:active'],
        color: ThemingParameters.sapButton_Selected_TextColor,
        '& [ui5-icon]': {
          color: ThemingParameters.sapButton_Selected_TextColor
        }
      }
    },
    '&$none': {
      ...createInvertedValueStateStyles('sapButton_Neutral', true),
      background: ThemingParameters.sapNeutralBackground,
      color: ThemingParameters.sapTextColor,
      border: ThemingParameters.sapNeutralBorderColor,
      '&$active:active': {
        ...createInvertedValueStateStyles('sapButton_Neutral', true)['&$active:active'],
        color: ThemingParameters.sapButton_Active_TextColor,
        '& [ui5-icon]': {
          color: ThemingParameters.sapButton_Active_TextColor
        }
      }
    },
    '&$indication01': createInvertedIndicationStyles('sapIndicationColor_1'),
    '&$indication02': createInvertedIndicationStyles('sapIndicationColor_2'),
    '&$indication03': createInvertedIndicationStyles('sapIndicationColor_3'),
    '&$indication04': createInvertedIndicationStyles('sapIndicationColor_4'),
    '&$indication05': createInvertedIndicationStyles('sapIndicationColor_5'),
    '&$indication06': createInvertedIndicationStyles('sapIndicationColor_6'),
    '&$indication07': createInvertedIndicationStyles('sapIndicationColor_7'),
    '&$indication08': createInvertedIndicationStyles('sapIndicationColor_8')
  },
  large: {
    fontSize: '1.5rem',
    fontFamily: ThemingParameters.sapFontLightFamily,
    '& [ui5-icon], $icon': {
      height: '1.5rem',
      width: '1.5rem'
    },
    '& $icon': {
      verticalAlign: 'middle'
    },
    '& $text': {
      lineHeight: 'normal',
      verticalAlign: 'middle'
    },
    '&$inverted': {
      fontSize: '1.25rem',
      fontFamily: ThemingParameters.sapFontSemiboldDuplexFamily,
      padding: '0.125rem 0.25rem',
      '& [ui5-icon], $icon': {
        height: '1.25rem',
        width: '1.25rem'
      },
      '&[data-icon-only="true"]': {
        padding: '0 0.25rem',
        minWidth: '1.75rem',
        height: 'auto'
      },
      '& [data-icon-only="true"]': {
        height: '1.5rem',
        width: '1.5rem',
        '& [ui5-icon]': {
          height: '1.5rem',
          width: '1.5rem'
        }
      }
    }
  }
};

export default styles;
