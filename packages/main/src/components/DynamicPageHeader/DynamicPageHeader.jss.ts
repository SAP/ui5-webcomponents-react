import { sapUiResponsiveContentPadding } from '@ui5/webcomponents-react-base/lib/spacing';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { DynamicPageCssVariables } from '../DynamicPage/DynamicPage.jss';

export const DynamicPageHeaderStyles = {
  header: {
    ...sapUiResponsiveContentPadding,
    flexShrink: 0,
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    zIndex: 1,
    translucent: ThemingParameters.sapObjectHeader_Background,
    transparent: 'transparent',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: `var(${DynamicPageCssVariables.headerDisplay})`
  },
  contentHeader: {
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    maxHeight: '500px',
    overflow: 'hidden'
  }
};
