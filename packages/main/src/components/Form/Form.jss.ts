import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  formTitle: {
    borderBottom: `1px solid ${parameters.sapUiGroupTitleBorderColor}`
  },
  formTitlePaddingBottom: {
    paddingBottom: '2em'
  },
  formPaddingBottom: {
    paddingBottom: '1em'
  },
  formGroupStyle: {
    width: '100%',
    paddingTop: '0.25em'
  },
  formItemTopDiv: {
    alignItems: 'center'
  },
  formLabel: {
    paddingRight: '0.5em'
  },
  formElement: {
    display: 'block'
  }
});

export { styles };
