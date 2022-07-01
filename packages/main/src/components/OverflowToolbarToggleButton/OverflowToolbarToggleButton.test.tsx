import { renderWithDefine } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React from 'react';
import { ToggleButton } from '../../ToggleButton';
import { Toolbar } from '../Toolbar';
import { OverflowToolbarToggleButton } from './index';

describe('OverflowToolbarToggleButton', () => {
  test('Show only icon when not in overflow', async () => {
    const { queryByText, queryByTestId } = await renderWithDefine(
      <Toolbar>
        <ToggleButton icon="edit">Edit1</ToggleButton>
        <OverflowToolbarToggleButton icon="edit" data-testid="overflow-button">
          Edit2
        </OverflowToolbarToggleButton>
      </Toolbar>,
      ['ui5-button']
    );
    expect(queryByText('Edit1')).toBeTruthy();
    expect(queryByText('Edit2')).toBeFalsy();

    expect(queryByText('Edit1').hasAttribute('icon-only')).toBeFalsy();
    expect(queryByTestId('overflow-button').hasAttribute('icon-only')).toBeTruthy();
    expect(queryByText('Edit1').hasAttribute('has-icon')).toBeTruthy();
    expect(queryByTestId('overflow-button').hasAttribute('has-icon')).toBeTruthy();
  });

  test('Show text and icon when in overflow', async () => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());

    HTMLElement.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        width: parseFloat(getComputedStyle(this).width || 200),
        height: 10,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    });
    const { queryByText, queryAllByText } = await renderWithDefine(
      <Toolbar style={{ width: '50px' }}>
        <ToggleButton icon="edit">Edit1</ToggleButton>
        <OverflowToolbarToggleButton icon="edit">Edit2</OverflowToolbarToggleButton>
      </Toolbar>,
      ['ui5-button']
    );
    expect(queryAllByText('Edit1')[1]).toBeTruthy();
    //Edit2 only appears once in the popover
    expect(queryByText('Edit2')).toBeTruthy();

    expect(queryAllByText('Edit1')[1].hasAttribute('icon-only')).toBeFalsy();
    expect(queryByText('Edit2').hasAttribute('icon-only')).toBeFalsy();
    expect(queryAllByText('Edit1')[1].hasAttribute('has-icon')).toBeTruthy();
    expect(queryByText('Edit2').hasAttribute('has-icon')).toBeTruthy();
  });

  createCustomPropsTest(OverflowToolbarToggleButton);
});
