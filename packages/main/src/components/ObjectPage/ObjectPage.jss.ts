import { fonts, HSLColor } from '@ui5/webcomponents-react-base';
import { ZIndex } from '../../enums/ZIndex';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ theme, contentDensity, parameters }: JSSTheme) => ({
  objectPage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    isolation: 'isolate',
    whiteSpace: 'normal',
    fontFamily: fonts.sapUiFontFamily
  },
  header: {
    flexShrink: 0,
    backgroundColor: parameters.sapUiObjectHeaderBackground,
    '& $titleBar': {
      paddingLeft: '2rem',
      display: 'block',
      '& $image': {
        height: '0',
        width: '0',
        opacity: '0',
        display: 'inline-block',
        verticalAlign: 'middle'
      },
      '& $container': {
        display: 'inline-block',
        lineHeight: 'normal',
        verticalAlign: 'middle',
        width: '70%',
        boxSizing: 'border-box',
        paddingTop: '1.5rem',
        '& $title': {
          fontSize: '1.375rem',
          paddingRight: '1rem',
          verticalAlign: 'baseline',
          lineHeight: 'normal',
          display: 'inline-block',
          margin: '0',
          fontWeight: 'normal',
          color: parameters.sapUiBaseText
        },
        '& $subTitle': {
          display: 'inline-block',
          wordBreak: 'break-word',
          verticalAlign: 'baseline',
          paddingTop: '0.5rem',
          fontSize: '0.875rem',
          color: parameters.sapUiContentLabelColor
        }
      },
      '& $actions': {
        position: 'absolute',
        top: '0',
        paddingTop: '0.75rem',
        right: '1.25rem',
        display: 'inline-block',
        float: 'right',
        verticalAlign: 'top',
        '& > *': {
          marginLeft: '0.5rem',
          padding: 0
        }
      }
    },
    '&$stickied': {
      '& $image': {
        opacity: '1',
        height: '3rem',
        width: '3rem',
        margin: '0.25rem 1rem 0.25rem 0'
      }
    },
    '& $headerContent': {
      paddingTop: '1.5rem',
      paddingBottom: '0.25rem',
      transition: 'max-height 0.5s',
      maxHeight: '500px',
      overflow: 'hidden',

      paddingLeft: '2rem',
      position: 'relative',
      '& $headerImage': {
        maxWidth: '5rem',
        maxHeight: '5rem',
        display: 'inline-block',
        marginRight: '2rem',
        marginBottom: '1rem'
      },
      '& $headerCustomContent': {
        display: 'inline-block',
        verticalAlign: 'top',
        '& > *': {
          marginRight: '2rem',
          marginBottom: '1rem',
          lineHeight: '1.5rem'
        }
      }
    }
  },
  hideHeaderContent: {
    paddingTop: '0.5rem',
    marginBottom: '0.5rem',
    boxShadow: `inset 0 -1px 0 0 ${parameters.sapUiShellBorderColor}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  anchorBar: {
    paddingLeft: '2rem',
    backgroundColor: parameters.sapUiObjectHeaderBackground,
    boxShadow: `inset 0 0.125rem ${parameters.sapUiObjectHeaderBackground}`,
    '& $anchorButtonContainer': {
      display: 'inline-flex',
      '& $anchorButton': {
        textTransform: 'uppercase',
        '& > span:hover, & > span:active': {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: parameters.sapUiButtonLiteTextColor,
          '& span[data-icon-content]': {
            color: parameters.sapUiButtonLiteTextColor
          }
        }
      },
      '&:not(:first-child)': {
        marginLeft: '2rem'
      }
    },
    '& $active': {
      color: HSLColor.of(parameters.sapUiGroupTitleTextColor).lighten(20).hsl,
      borderBottom: `0.125rem solid ${parameters.sapUiSelected}`
    },
    '& $active + div': {
      color: HSLColor.of(parameters.sapUiGroupTitleTextColor).lighten(20).hsl,
      borderBottom: `0.125rem solid ${parameters.sapUiSelected}`
    }
  },
  anchorButtonModal: {
    position: 'absolute',
    minWidth: '6.25rem',
    boxSizing: 'border-box',
    outline: 'none',
    maxWidth: '100%',
    maxHeight: '100%',
    border: 'none',
    boxShadow: '0 0.625rem 1.875rem 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15)',
    borderRadius: '0.25rem',
    minHeight: '2rem',
    margin: '0',
    zIndex: ZIndex.InputModal
  },
  iconTabModeSelected: {
    color: HSLColor.of(parameters.sapUiGroupTitleTextColor).lighten(20).hsl,
    borderBottom: `0.125rem solid ${parameters.sapUiSelected}`
  },
  titleBar: {},
  image: {},
  container: {},
  title: {},
  subTitle: {},
  actions: {},
  stickied: {},
  headerContent: {},
  headerImage: {},
  headerCustomContent: {},
  anchorButtonContainer: {},
  anchorButton: {},
  active: {},
  hiddenHeader: {}
});

export default styles;
