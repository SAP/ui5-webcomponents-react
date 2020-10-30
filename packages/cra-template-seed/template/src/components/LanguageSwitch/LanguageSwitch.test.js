import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../util/TestSetup';

import LanguageSwitch from './LanguageSwitch';
import i18n from '../../util/i18n';

describe('LanguageSwitch.js Test Suite', () => {
  beforeEach(() => {
    render(<LanguageSwitch />);
  });

  test('Should render', () => {
    const language = screen.getByTestId('language-switch-wrapper');
    expect(language).toBeInTheDocument();
  });

  test('Should load "en" as default language', () => {
    const language = screen.getByTestId('language-switch-wrapper');
    const languageOptions = screen.getAllByTestId('language-switch-option-wrapper');

    i18n.changeLanguage('en-US');

    expect(i18n.language).toBe('en-US');
    expect(language).toBeInTheDocument();
    expect(languageOptions[0].selected).toBeTruthy();
    expect(languageOptions[1].selected).toBeFalsy();
  });

  test('Should change to portugues when selected', () => {
    const language = screen.getByTestId('language-switch-wrapper');
    const languageOptions = screen.getAllByTestId('language-switch-option-wrapper');

    i18n.changeLanguage('pt');

    expect(i18n.language).toBe('pt');
    expect(language).toBeInTheDocument();
    expect(languageOptions[0].selected).toBeFalsy();
    expect(languageOptions[1].selected).toBeTruthy();
  });
});
