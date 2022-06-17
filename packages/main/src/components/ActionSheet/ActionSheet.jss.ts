import { ThemingParameters, CssSizeVariables } from '@ui5/webcomponents-react-base';

const styles = {
  /*
   *  is being applied to the encapsulating ul element
   */
  actionSheet: {
    '&::part(content)': {
      padding: '0.1875rem 0.375rem'
    },
    '& [ui5-button]': {
      margin: CssSizeVariables.sapWcrButtonTopBottomPadding,
      display: 'block'
    },
    '& [ui5-button]:not([data-cancel-btn])::part(button)': {
      justifyContent: 'start'
    },
    '&::part(header)': {
      background: 'transparent',
      boxShadow: 'none'
    }
  },
  actionSheetMobile: {
    '&::part(content)': {
      padding: '0.1875rem 0.375rem 0 0.375rem'
    }
  },
  contentMobile: {
    backgroundColor: ThemingParameters.sapGroup_ContentBackground,
    padding: '0.25rem 0.5rem',
    boxSizing: 'border-box',
    overflow: 'auto',
    maxHeight: '82vh',
    borderTopLeftRadius: ThemingParameters.sapElement_BorderCornerRadius,
    borderTopRightRadius: ThemingParameters.sapElement_BorderCornerRadius,
    boxShadow: ThemingParameters.sapContent_Shadow2,
    '& > *': {
      margin: '0.25rem 0'
    }
  }
};

export default styles;
