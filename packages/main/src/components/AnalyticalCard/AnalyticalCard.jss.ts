import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import * as spacing from '@ui5/webcomponents-react-base/lib/spacing';

const styles = {
  card: {
    backgroundColor: ThemingParameters.sapUiTileBackground,
    // TODO There is a border mentioned in the specs, but this one looks weird.
    // border: `0.625rem solid ${ThemingParameters.sapUiTileBorderColor}`,
    boxShadow: ThemingParameters.sapUiShadowLevel0,
    borderRadius: '0.25rem',
    textAlign: 'start',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: ThemingParameters.sapUiFontFamily,
    boxSizing: 'border-box'
  },
  content: spacing.sapUiContentPadding
};

export default styles;
