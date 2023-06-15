import { CssSizeVariables, ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomThemingParameters } from './../../themes/CustomVariables.js';

const styles = {
  /*
   *  is being applied to the encapsulating ul element
   */
  actionSheet: {
    '&::part(content)': {
      padding: '0.1875rem 0.375rem'
    },
    '& [ui5-button]': {
      margin: CssSizeVariables.ui5WcrButtonTopBottomPadding,
      display: 'block'
    },
    '& [ui5-button]:not([data-cancel-btn])::part(button)': {
      justifyContent: 'start'
    },
    '&::part(header)': {
      background: 'transparent',
      boxShadow: CustomThemingParameters.ActionSheetHeaderBoxShadow
    }
  },
  actionSheetMobile: {
    '&::part(content)': {
      padding: '0 !important'
    }
  },
  contentMobile: {
    backgroundColor: ThemingParameters.sapGroup_ContentBackground,
    padding: '0.25rem 0.5rem',
    boxSizing: 'border-box',
    overflow: 'auto',
    maxHeight: '82vh',
    borderTopLeftRadius: CustomThemingParameters.ActionSheetTopBorderRadius,
    borderTopRightRadius: CustomThemingParameters.ActionSheetTopBorderRadius,
    boxShadow: CustomThemingParameters.ActionSheetBoxShadow,
    '& > *': {
      margin: '0.25rem 0'
    }
  }
};

export default styles;
