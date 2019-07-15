import { fonts } from '@ui5/webcomponents-react-base';
import { JSSTheme } from '../../interfaces/JSSTheme';

const styles = ({ parameters }: JSSTheme) => ({
  objectPage: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    isolation: 'isolate',
    whiteSpace: 'normal',
    fontFamily: fonts.sapUiFontFamily
  },
  anchorBar: {
    paddingLeft: '2rem',
    backgroundColor: parameters.sapUiObjectHeaderBackground,
    boxShadow: `inset 0 -0.0625rem ${parameters.sapUiObjectHeaderBorderColor}, inset 0 0.0625rem ${parameters.sapUiObjectHeaderBorderColor}`,
    display: 'flex',
    height: '2.75rem',
    minHeight: '2.75rem'
  }
});

export default styles;
