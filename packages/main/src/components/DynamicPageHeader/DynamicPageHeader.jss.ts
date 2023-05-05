import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { DynamicPageCssVariables } from '../DynamicPage/DynamicPage.jss.js';

export const DynamicPageHeaderStyles = {
  header: {
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    position: 'sticky',
    zIndex: 1,
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: `var(${DynamicPageCssVariables.headerDisplay})`,
    overflow: 'hidden'
  }
};
