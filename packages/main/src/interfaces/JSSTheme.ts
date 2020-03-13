import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { ContentDensity } from '../enums/ContentDensity';
import { Themes } from '../enums/Themes';

export interface JSSTheme {
  theme: Themes;
  contentDensity: ContentDensity;
  parameters: typeof ThemingParameters;
}
