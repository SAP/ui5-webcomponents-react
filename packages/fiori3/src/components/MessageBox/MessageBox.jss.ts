import { fonts } from '@fiori-for-react/styles';
import { JSSTheme } from '../../interfaces/JSSTheme';
import { ZIndex } from '../../enums/ZIndex';
import { ContentDensity } from '../../lib/ContentDensity';

const style = ({ parameters, contentDensity }: JSSTheme) => ({
  overlay: {
    background: 'rgba(0,0,0,0.6)',
    position: 'fixed',
    zIndex: ZIndex.MessageBox,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    outline: '0 none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageBox: {
    maxWidth: '90%',
    minWidth: '20%',
    borderRadius: '0.25rem',
    boxSizing: 'content-box',
    background: parameters.sapUiGroupContentBackground,
    fontFamily: fonts.sapUiFontFamily,
    fontSize: '0.875rem'
  },
  header: {
    display: 'flex',
    height: ContentDensity.Compact === contentDensity ? '2.5rem' : '3rem',
    lineHeight: ContentDensity.Compact === contentDensity ? '2.5rem' : '3rem',
    textAlign: 'center',
    width: 'auto',
    alignItems: 'center',
    '& $icon': {
      '& >*': {
        verticalAlign: 'middle'
      }
    },
    // justifyContent: 'center',
    padding: '0.25rem 1rem',
    boxSizing: 'border-box',
    borderBottom: `0.125rem solid ${parameters.sapUiGroupContentBorderColor}`,
    color: parameters.sapUiContentLabelColor,
    fontSize: '1rem',
    '&[data-type="Error"]': {
      borderBottomColor: parameters.sapUiErrorBorder,
      '& $icon': {
        color: parameters.sapUiNegativeElement
      }
    },
    '&[data-type="Warning"]': {
      borderBottomColor: parameters.sapUiWarningBorder,
      '& $icon': {
        color: parameters.sapUiCriticalElement
      }
    },
    '&[data-type="Success"]': {
      borderBottomColor: parameters.sapUiSuccessBorder,
      '& $icon': {
        color: parameters.sapUiPositiveElement
      }
    },
    '&[data-type="Confirm"]': {
      borderBottomColor: parameters.sapUiNeutralBorder,
      '& $icon': {
        color: parameters.sapUiNeutralElement
      }
    },
    '&[data-type="Information"]': {
      borderBottomColor: parameters.sapUiNeutralBorder,
      '& $icon': {
        color: parameters.sapUiNeutralElement
      }
    },
    '&[data-type="Highlight"]': {
      // @ts-ignore
      borderBottomColor: parameters.sapUiInformationBorder,
      '& $icon': {
        color: parameters.sapUiInformativeElement
      }
    }
  },
  content: {
    padding: '1rem'
  },
  icon: {
    marginRight: '0.5rem',
    fontSize: '1rem',
    width: '1rem'
  },
  footer: {
    height: ContentDensity.Compact === contentDensity ? '2.5rem' : '3rem',
    lineHeight: ContentDensity.Compact === contentDensity ? '2.5rem' : '3rem',
    borderTop: `1px solid ${parameters.sapUiGroupContentBorderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 0.5rem',
    '& >*:not(:last-child)': {
      marginRight: '0.5rem'
    },
    '& > ui5-button': {
      display: 'flex'
    }
  }
});

export default style;
