import { sapUiResponsiveContentPadding } from '@ui5/webcomponents-react-base/dist/spacing';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { DynamicPageCssVariables } from '../DynamicPage/DynamicPage.jss';
import { isIE } from '@ui5/webcomponents-react-base/dist/Device';

const padding = isIE() ? { padding: '0 2rem' } : { ...sapUiResponsiveContentPadding };

export const DynamicPageHeaderStyles = {
  header: {
    //todo padding not only on this component, but whole page
    ...padding,
    // flexShrink: 0,
    //todo
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    zIndex: 1,
    //todo
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: `var(${DynamicPageCssVariables.headerDisplay})`,
    overflow: isIE() ? 'visible' : 'hidden'
  },
  iEClass: {
    position: 'fixed',
    // page width - padding - scrollbar
    width: 'calc(100% - 18px - 4rem)'
  }
};
