import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';

const styles = {
  /*
   *  is being applied to the encapsulating ul element
   */
  actionSheet: {
    margin: 0,
    padding: '0.1875rem 0.375rem',
    '& ui5-button': {
      display: 'block'
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
