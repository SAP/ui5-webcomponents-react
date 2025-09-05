import type { UserSettingsItemPropTypes } from '@ui5/webcomponents-react/UserSettingsItem';
import { ComboBox } from '@ui5/webcomponents-react/ComboBox';
import { ComboBoxItem } from '@ui5/webcomponents-react/ComboBoxItem';
import { Label } from '@ui5/webcomponents-react/Label';
import { Panel } from '@ui5/webcomponents-react/Panel';
import { RadioButton } from '@ui5/webcomponents-react/RadioButton';
import { Text } from '@ui5/webcomponents-react/Text';
import { UserSettingsItem } from '@ui5/webcomponents-react/UserSettingsItem';
import { UserSettingsView } from '@ui5/webcomponents-react/UserSettingsView';

export function LanguageRegionItem({ loading }: Pick<UserSettingsItemPropTypes, 'loading'>) {
  return (
    <UserSettingsItem
      text="Language & Region"
      tooltip="Language & Region"
      headerText="Language & Region"
      loading={loading}
      loadingReason="Language & Region loading data..."
      pages={
        <UserSettingsView>
          <div className="container">
            <div className="lr-item">
              <Label>Language and Region:</Label>
              <ComboBox placeholder="Language" value="Browse Language">
                <ComboBoxItem text="Browse Language" />
                <ComboBoxItem text="English" />
                <ComboBoxItem text="European Spanish" />
                <ComboBoxItem text="French (France)" />
                <ComboBoxItem text="Germany" />
              </ComboBox>
            </div>
            <div className="lr-item">
              <Label for="format">Date Format:</Label>
              <Text id="format">MMM d, y</Text>
            </div>
          </div>
          <Panel fixed>
            <Label>
              The time zone will not be applied in UI5 apps. If you don’t know the type of an app, you can check it the
              “About” dialog in the “ID of the Application Framework” field.
            </Label>
          </Panel>
          <br />
          <div className="lt-time-format">
            <Label for="timeFormat">Time Format:</Label>
            <RadioButton name="timeFormat" text="12h" />
            <RadioButton checked name="timeFormat" text="24h" />
          </div>
          <Panel fixed>
            <Label>After you save your settings, the browser will refresh for the new settings to take effect.</Label>
          </Panel>
        </UserSettingsView>
      }
    ></UserSettingsItem>
  );
}

LanguageRegionItem.displayName = 'LanguageRegionItem';
