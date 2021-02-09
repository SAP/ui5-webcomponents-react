import React from 'react';

import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme.js';
import { render, screen } from '../../util/TestSetup';

import ThemeSwitch from './ThemeSwitch';

describe('ThemeSwitch.js Test Suite', () => {
  test('Should render', () => {
    render(<ThemeSwitch />);
    const theme = screen.getByTestId('theme-switch-wrapper');
    expect(theme).toBeInTheDocument();
  });

  test('Should load sap_fiori_3 as default theme', () => {
    render(<ThemeSwitch />);
    const currentTheme = getTheme();
    expect(currentTheme).toBe('sap_fiori_3');
  });
});
