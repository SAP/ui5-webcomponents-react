import paletteIcon from '@ui5/webcomponents-icons/dist/palette.js';
import { Button } from '@ui5/webcomponents-react/Button';
import { CheckBox } from '@ui5/webcomponents-react/CheckBox';
import { Label } from '@ui5/webcomponents-react/Label';
import { List } from '@ui5/webcomponents-react/List';
import { ListItemStandard } from '@ui5/webcomponents-react/ListItemStandard';
import { Panel } from '@ui5/webcomponents-react/Panel';
import { Toast } from '@ui5/webcomponents-react/Toast';
import { UserSettingsItem } from '@ui5/webcomponents-react/UserSettingsItem';
import { UserSettingsView } from '@ui5/webcomponents-react/UserSettingsView';

export function AppearanceItem() {
  return (
    <UserSettingsItem icon={paletteIcon} text="Appearance" tooltip="Appearance" headerText="Appearance">
      <UserSettingsView text="Themes">
        <List separators="Inner" selectionMode="Single">
          <ListItemStandard icon={paletteIcon} selected>
            SAP Morning Horizon
          </ListItemStandard>
          <ListItemStandard icon={paletteIcon}>SAP Evening Horizon</ListItemStandard>
          <ListItemStandard icon={paletteIcon}>SAP High Contrast Black (SAP Horizon)</ListItemStandard>
          <ListItemStandard icon={paletteIcon}>SAP High Contrast White (SAP Horizon)</ListItemStandard>
        </List>
        <Button id="themeSave" className="save-btn" design="Emphasized">
          Save
        </Button>
        <Toast id="toastThemeSave">Changes applied.</Toast>
      </UserSettingsView>
      <UserSettingsView text="Display settings">
        <CheckBox checked text="Optimized for Touch Input" />
        <Panel fixed>
          <Label>
            Increases the size and spacing of controls to allow you to interact with them more easily using your
            fingertip. This is useful for hybrid devices that combine touch and mouse events.
          </Label>
        </Panel>
      </UserSettingsView>
    </UserSettingsItem>
  );
}

AppearanceItem.displayName = 'AppearanceItem';
