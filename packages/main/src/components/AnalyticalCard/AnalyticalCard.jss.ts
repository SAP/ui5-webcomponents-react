import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import * as spacing from '@ui5/webcomponents-react-base/lib/spacing';

const styles = {
  card: {
    backgroundColor: ThemingParameters.sapTile_Background,
    border: `0.0625rem solid ${ThemingParameters.sapTile_BorderColor}`,
    boxShadow: ThemingParameters.sapContent_Shadow0,
    borderRadius: ThemingParameters.sapElement_BorderCornerRadius,
    textAlign: 'start',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: ThemingParameters.sapFontFamily,
    boxSizing: 'border-box',
    width: '20rem'
  },
  content: spacing.sapUiContentPadding
};

export default styles;
