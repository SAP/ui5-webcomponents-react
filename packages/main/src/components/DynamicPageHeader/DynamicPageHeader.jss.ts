import { sapUiResponsiveContentPadding } from '@ui5/webcomponents-react-base/dist/spacing';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { DynamicPageCssVariables } from '../DynamicPage/DynamicPage.jss';
import { isIE } from '@ui5/webcomponents-react-base/dist/Device';

const padding = isIE() ? { padding: '0 2rem' } : { ...sapUiResponsiveContentPadding };

export const DynamicPageHeaderStyles = {
  header: {
    //todo check dynamicPage
    // ...padding,
    // flexShrink: 0,
    //todo
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    zIndex: 1,
    paddingTop: '1rem !important',
    paddingBottom: '1rem !important',
    display: `var(${DynamicPageCssVariables.headerDisplay})`,
    maxHeight: '500px',
    overflow: isIE() ? 'visible' : 'hidden'
  },
  iEClass: {
    position: 'fixed',
    // page width - padding - scrollbar
    width: 'calc(100% - 18px - 4rem)'
  }
};
