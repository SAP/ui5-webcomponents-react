import { ContentDensity } from '../enums/ContentDensity';
import { Themes } from '../enums/Themes';
import { sap_belize } from '@fiori-for-react/styles';

export interface JSSTheme {
  theme: Themes;
  contentDensity: ContentDensity;
  parameters: typeof sap_belize;
}
