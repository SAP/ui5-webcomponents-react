import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import Constants from '../../util/Constants';

const style = {
  select: {
    width: '100%',
  },
};

const themeOptions = [
  { value: 'sap_fiori_3', title: 'shell.button.user.settings.item.themeSwitch.option.default' },
  { value: 'sap_fiori_3_dark', title: 'shell.button.user.settings.item.themeSwitch.option.dark' },
  { value: 'sap_belize', title: 'shell.button.user.settings.item.themeSwitch.option.belize' },
  { value: 'sap_fiori_3_hcb', title: 'shell.button.user.settings.item.themeSwitch.option.highContrastBlack' },
  { value: 'sap_fiori_3_hcw', title: 'shell.button.user.settings.item.themeSwitch.option.highContrastWhite' },
];

const ThemeSwitch = ({ storedTheme = localStorage.getItem(Constants.SEED.SELECTED_THEME) }) => {
  const { t } = useTranslation();

  useEffect(() => {
    setTheme(storedTheme ? storedTheme : themeOptions[0].value);
  }, [storedTheme]);

  const onChange = (event) => {
    localStorage.setItem(Constants.SEED.SELECTED_THEME, event.detail.selectedOption.dataset.value);
    setTheme(event.detail.selectedOption.dataset.value);
  };

  return (
    <Select onChange={onChange} style={style.select} data-testid="theme-switch-wrapper">
      {themeOptions &&
        themeOptions.map((option) => {
          return (
            <Option key={option.value} data-value={option.value} selected={option.value === storedTheme}>
              {t(option.title)}
            </Option>
          );
        })}
    </Select>
  );
};

export default ThemeSwitch;
