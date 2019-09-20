import { JSSTheme } from '../../interfaces/JSSTheme';

export const sideNavigationListItemStyles = ({ parameters }: JSSTheme) => ({
  listItem: {
    '&:active': {
      '--sapUiBaseText': parameters.sapUiListActiveTextColor,
      '& $icon': {
        '--sapUiContentNonInteractiveIconColor': parameters.sapUiListActiveTextColor
      }
    }
  },

  noIcons: {
    '& $text': {
      paddingLeft: '1rem'
    },
    '&[data-is-child] $text': {
      paddingLeft: '2rem'
    },
    boxSizing: 'border-box'
  },

  icon: {
    '--sapUiContentNonInteractiveIconColor': parameters.sapUiContentIconColor,
    fontSize: '1.125rem',
    width: '2.75rem',
    height: '2.75rem'
  },

  text: {},

  expandArrow: {
    '--sapUiContentNonInteractiveIconColor': parameters.sapUiContentIconColor,
    fontSize: '0.875rem',
    width: '2.5rem',
    height: '2.5rem',
    marginLeft: 'auto'
  },

  expanded: {
    '--ui5-listitem-border-bottom': 'none'
  },

  compact: {
    '& $icon': {
      fontSize: '1rem',
      height: '2rem'
    },
    '& $expandArrow': {
      height: '2rem'
    }
  },

  condensedExpandTriangle: {
    width: '0',
    height: '0',
    borderStyle: 'solid',
    borderWidth: '0 0 6px 6px',
    borderColor: `transparent transparent ${parameters.sapUiContentIconColor} transparent`,
    position: 'absolute',
    right: '0.125rem',
    bottom: '0.1875rem'
  }
});
