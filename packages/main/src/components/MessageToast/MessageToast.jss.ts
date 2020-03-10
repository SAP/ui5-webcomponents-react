import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

export default {
  messageToast: {
    padding: '0 !important',
    borderRadius: '0.25rem !important',
    textAlign: 'center !important',
    boxShadow: ThemingParameters.sapUiShadowLevel2,
    cursor: 'text',
    minHeight: 'auto !important',
    background: `${ThemingParameters.sapUiListBackground} !important`
  },
  messageToastContainer: {
    maxWidth: '15rem !important'
  },
  messageToastBody: {
    fontFamily: ThemingParameters.sapUiFontFamily,
    fontSize: ThemingParameters.sapMFontMediumSize,
    fontWeight: 'normal',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre-line',
    wordWrap: 'break-word',
    padding: '1rem !important',
    color: `${ThemingParameters.sapUiListTextColor} !important`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
