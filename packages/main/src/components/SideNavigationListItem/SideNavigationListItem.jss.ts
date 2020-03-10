import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

export const sideNavigationListItemStyles = {
  listItem: {
    '&:active': {
      '--sapUiBaseText': ThemingParameters.sapUiListActiveTextColor,
      '& $icon, & $expandArrow': {
        '--sapUiContentNonInteractiveIconColor': ThemingParameters.sapUiListActiveTextColor
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
    '--sapUiContentNonInteractiveIconColor': ThemingParameters.sapUiContentIconColor,
    width: CssSizeVariables.sapWcrSideNavigationItemIconSize,
    height: CssSizeVariables.sapWcrSideNavigationItemIconSize,
    padding: CssSizeVariables.sapWcrSideNavigationItemIconPadding,
    pointerEvents: 'none'
  },

  text: {},

  expandArrow: {
    '--sapUiContentNonInteractiveIconColor': ThemingParameters.sapUiContentIconColor,
    width: '0.875rem',
    height: '0.875rem',
    padding: CssSizeVariables.sapWcrSideNavigationItemExpandedArrowPadding,
    marginLeft: 'auto'
  },

  expanded: {
    '--ui5-listitem-border-bottom': 'none'
  },

  condensedExpandTriangle: {
    width: '0',
    height: '0',
    borderStyle: 'solid',
    borderWidth: '0 0 6px 6px',
    borderColor: `transparent transparent ${ThemingParameters.sapUiContentIconColor} transparent`,
    position: 'absolute',
    right: '0.125rem',
    bottom: '0.1875rem'
  }
};
