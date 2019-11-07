import * as sap_fiori_3 from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { ContentDensity } from '../enums/ContentDensity';
import { Themes } from '../enums/Themes';

export interface JSSTheme {
  theme: Themes;
  contentDensity: ContentDensity;
  parameters: typeof sap_fiori_3;
}
