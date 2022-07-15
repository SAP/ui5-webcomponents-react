import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Option, Select } from '@ui5/webcomponents-react';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

const style = {
  select: {
    width: '100%'
  }
};

const themeOptions = [
  { value: 'sap_fiori_3', title: 'shell.button.user.settings.item.themeSwitch.option.default' },
  { value: 'sap_fiori_3_dark', title: 'shell.button.user.settings.item.themeSwitch.option.dark' },
  { value: 'sap_belize', title: 'shell.button.user.settings.item.themeSwitch.option.belize' },
  { value: 'sap_fiori_3_hcb', title: 'shell.button.user.settings.item.themeSwitch.option.highContrastBlack' },
  { value: 'sap_fiori_3_hcw', title: 'shell.button.user.settings.item.themeSwitch.option.highContrastWhite' }
];

const ThemeSwitch = () => {
  const { t } = useTranslation();

  const [themeInLocalStorage, setThemeLocalStorage] = useLocalStorageState('selected_theme', themeOptions[0].value);

  useEffect(() => {
    setTheme(themeInLocalStorage);
  }, [themeInLocalStorage]);

  const onChange = (event) => {
    setThemeLocalStorage(event.detail.selectedOption.dataset.value);
    setTheme(event.detail.selectedOption.dataset.value);
  };

  return (
    <Select onChange={onChange} style={style.select} data-testid="theme-switch-wrapper">
      {themeOptions &&
        themeOptions.map((option) => {
          return (
            <Option key={option.value} data-value={option.value} selected={option.value === themeInLocalStorage}>
              {t(option.title)}
            </Option>
          );
        })}
    </Select>
  );
};

export default ThemeSwitch;
