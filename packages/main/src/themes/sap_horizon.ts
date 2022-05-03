import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables';

export const sapHorizonParameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ObjectPageSectionTitleFontFamily]: ThemingParameters.sapFontBoldFamily
};
