import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
export const styles = {
  outerContainer: {
    width: '100%',
    //todo
    // minWidth: '50px',
    height: CssSizeVariables.sapWcrToolbarHeight,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottom: `solid 0.0625rem ${ThemingParameters.sapGroup_TitleBorderColor}`
  },
  //todo do this in index.tsx
  active: {
    '&:active': {
      background: `${ThemingParameters.sapActiveColor}`
    }
  },
  activeInfo: {
    '&:active': {
      background: `${ThemingParameters.sapInfobar_Active_Background}`
    }
  },
  clear: {
    borderBottom: 'none'
  },
  info: {
    //todo not active background color: darken(@sapUiBaseColor, 10);
    background: ThemingParameters.sapInfobar_Background,
    '&:hover': {
      background: ThemingParameters.sapInfobar_Hover_Background
    }
  },
  solid: {
    background: ThemingParameters.sapBackgroundColor,
    '&:hover': {
      //todo hover color contrast(@sapUiBaseBG, darken(@sapUiBaseBG, 3), lighten(@sapUiBaseBG, 3));
      background: 'lightblue'
    }
  },
  transparent: {
    background: ThemingParameters.sapToolbar_Background,
    '&:hover': {
      //todo hover color contrast(@sapUiToolbarBackground, darken(@sapUiToolbarBackground, 3), lighten(@sapUiToolbarBackground, 3));
      background: 'lightgrey'
    },
    '&:active': {
      background: ThemingParameters.sapActiveColor
    }
  },
  toolbar: {
    width: '100%',
    '& >:first-child:not(.spacer)': {
      margin: '0 0.25rem 0 0'
    },
    '& >:last-child:not(.spacer)': {
      margin: '0 0.5rem 0 0.25rem'
    },
    '& > *:not(first-child):not(last-child):not(.spacer)': {
      margin: '0 0.25rem'
    },
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  },
  overflowButtonContainer: {
    marginRight: '0.5rem'
  },
  popoverContent: {
    maxWidth: '20rem',
    padding: CssSizeVariables.sapWcrToolbarPopoverContentPadding,
    display: 'flex',
    flexDirection: 'column'
  }
};
