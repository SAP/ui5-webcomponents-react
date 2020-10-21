import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../util/TestSetup';
import InformationDialog, { Type } from './InformationDialog';

describe('InformationDialog.js Test Suite', () => {
  test('should render', () => {
    const dialog = <InformationDialog avoidEscapeClose type={Type.Warning} headerText={'Header text'} closeButtonText={'Close'} innerText={'Inner text'} />;
    render(dialog);
    const infoDialog = screen.getByTestId('information-dialog');
    expect(infoDialog).toBeInTheDocument();
  });

  test('should render child when not inner text is passed', () => {
    const dialog = (
      <InformationDialog avoidEscapeClose type={Type.Warning} headerText={'Header text'} closeButtonText={'Close'}>
        <div data-testid="information-dialog-child"></div>
      </InformationDialog>
    );
    render(dialog);
    const child = screen.getByTestId('information-dialog-child');
    expect(child).toBeInTheDocument();
  });
});
