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
    paddingTop: '1rem !important',
    paddingBottom: '1rem !important',
    display: `var(${DynamicPageCssVariables.headerDisplay})`,
    maxHeight: '500px',
    overflow: 'hidden'
  }
};
