import { ContentDensity } from '../enums/ContentDensity';
import { Themes } from '../enums/Themes';
import { sap_fiori3_light } from '@fiori-for-react/styles';

export interface JSSTheme {
  theme: Themes;
  contentDensity: ContentDensity;
  parameters: typeof sap_fiori3_light;
}
