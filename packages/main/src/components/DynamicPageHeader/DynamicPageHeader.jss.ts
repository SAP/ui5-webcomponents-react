import { Device, ThemingParameters } from '@ui5/webcomponents-react-base';
import { DynamicPageCssVariables } from '../DynamicPage/DynamicPage.jss';

export const DynamicPageHeaderStyles = {
  header: {
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    zIndex: 1,
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: `var(${DynamicPageCssVariables.headerDisplay})`,
    overflow: Device.isIE() ? 'visible' : 'hidden'
  },
  iEClass: {
    position: 'fixed',
    // page width - padding - scrollbar
    width: 'calc(100% - 18px - 4rem)'
  }
};
