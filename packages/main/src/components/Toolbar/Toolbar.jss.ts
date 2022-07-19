import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';

export const styles = {
  outerContainer: {
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: CssSizeVariables.sapWcrToolbarHeight,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `solid 0.0625rem ${ThemingParameters.sapGroup_TitleBorderColor}`
  },
  hasOverflow: {
    '& $toolbar': {
      maxWidth: 'calc(100% - 44px)'
    }
  },
  clear: {
    borderBottom: 'none'
  },
  active: {
    cursor: 'pointer',
    '&:active': {
      backgroundColor: ThemingParameters.sapActiveColor
    },
    '&:hover': {
      backgroundColor: ThemingParameters.sapList_Hover_Background
    }
  },
  info: {
    height: '2rem', // always 2 rem both in Compact and Cozy
    backgroundColor: ThemingParameters.sapList_HeaderBorderColor,
    '&$active': {
      backgroundColor: ThemingParameters.sapInfobar_Active_Background,
      '&:active': {
        backgroundColor: `${ThemingParameters.sapInfobar_Active_Background}`
      },
      '&:hover': {
        backgroundColor: ThemingParameters.sapInfobar_Hover_Background
      }
    }
  },
  solid: {
    backgroundColor: ThemingParameters.sapBackgroundColor
  },
  transparent: {
    backgroundColor: ThemingParameters.sapToolbar_Background
  },
  toolbar: {
    width: '100%',
    '& >:first-child:not(.spacer)': {
      marginInline: '0.5rem 0.25rem'
    },
    '& >:last-child:not(.spacer)': {
      marginInline: '0.25rem 0.5rem'
    },
    '& > *:not(first-child):not(last-child):not(.spacer)': {
      marginInline: '0.25rem'
    },
    display: 'flex',
    alignItems: 'center',
    maxWidth: '100%'
  },
  overflowButtonContainer: {
    display: 'flex',
    marginInline: '0 0.5rem'
  },
  popover: {
    '&[ui5-popover]::part(content)': {
      padding: 0
    }
  },
  popoverPhone: {
    width: 'calc(100% - 10px)',
    maxWidth: 'calc(100% - 10px)',
    left: '5px !important'
  },
  popoverContent: {
    padding: CssSizeVariables.sapWcrToolbarPopoverContentPadding,
    display: 'flex',
    flexDirection: 'column',
    '& [ui5-button]': {
      marginBottom: '0.25rem'
    },
    '& [ui5-button]::part(button)': {
      justifyContent: 'flex-start'
    },
    '& [ui5-button][icon-only]::part(button)': {
      padding: 'revert'
    },
    '& [ui5-toggle-button]': {
      marginBottom: '0.25rem'
    },
    '& [ui5-toggle-button]::part(button)': {
      justifyContent: 'flex-start'
    },
    '& [ui5-toggle-button][icon-only]::part(button)': {
      padding: 'revert'
    },
    '& :last-child': {
      marginBottom: 0
    }
  },
  childContainer: { display: 'flex' }
};
