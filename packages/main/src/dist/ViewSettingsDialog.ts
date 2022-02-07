import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { ViewSettingsDialogDomRef, ViewSettingsDialogPropTypes } from '../webComponents/ViewSettingsDialog';
import { ViewSettingsDialog } from '../webComponents/ViewSettingsDialog';

deprecationNotice(
  'ViewSettingsDialog',
  `importing from '@ui5/webcomponents-react/dist/ViewSettingsDialog' is deprecated. Please use "import { ViewSettingsDialog } from '@ui5/webcomponents-react';" instead.`
);

export { ViewSettingsDialog };

export type { ViewSettingsDialogPropTypes, ViewSettingsDialogDomRef };
