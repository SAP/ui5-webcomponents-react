import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { CssSizeVariables } from '@ui5/webcomponents-react-base/lib/CssSizeVariables';
export const styles = {
  outerContainer: {
    width: '100%',
    height: CssSizeVariables.sapWcrToolbarHeight,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottom: `solid 0.0625rem ${ThemingParameters.sapGroup_TitleBorderColor}`
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
  activeInfo: {
    backgroundColor: ThemingParameters.sapInfobar_Active_Background,
    '&:active': {
      backgroundColor: `${ThemingParameters.sapInfobar_Active_Background}`
    },
    '&:hover': {
      backgroundColor: ThemingParameters.sapInfobar_Hover_Background
    }
  },
  info: {
    // This color is most similar to darken(@sapUiBaseColor, 10)
    backgroundColor: ThemingParameters.sapList_HeaderBorderColor
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
