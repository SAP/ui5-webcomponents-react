import { ContentDensity } from '../enums/ContentDensity';
import { Themes } from '../enums/Themes';
import { sap_fiori_3 } from '@ui5-webcomponents-react/styles';

export interface JSSTheme {
  theme: Themes;
  contentDensity: ContentDensity;
  parameters: typeof sap_fiori_3;
}
