import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

export default {
  messageToast: {
    padding: '0 !important',
    borderRadius: '0.25rem !important',
    textAlign: 'center !important',
    boxShadow: ThemingParameters.sapContent_Shadow2,
    cursor: 'text',
    minHeight: 'auto !important',
    background: `${ThemingParameters.sapList_Background} !important`
  },
  messageToastContainer: {
    maxWidth: '15rem !important'
  },
  messageToastBody: {
    fontFamily: ThemingParameters.sapFontFamily,
    fontSize: ThemingParameters.sapFontSize,
    fontWeight: 'normal',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre-line',
    wordWrap: 'break-word',
    padding: '1rem !important',
    color: `${ThemingParameters.sapList_TextColor} !important`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
