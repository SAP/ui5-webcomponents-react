import { createPassThroughPropsTest } from '@shared/tests/utils';
import { cleanup, render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { ToolbarDesign } from '@ui5/webcomponents-react/lib/ToolbarDesign';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('Toolbar', () => {
  test('Renders with default Props', () => {
    expect(render(<Toolbar />).asFragment()).toMatchSnapshot();
  });

  test('Renders with children', () => {
    expect(
      render(
        <Toolbar>
          <Text>Item1</Text>
          <Text>Item2</Text>
          <Text>Item3</Text>
        </Toolbar>
      ).asFragment()
    ).toMatchSnapshot();
    expect(screen.getByText('Item1').textContent).toEqual('Item1');
  });

  // test('Renders overflowButton', async () => {
  //   let utils;
  //
  //   await act(async () => {
  //     utils = render(
  //       <Toolbar style={{ width: '50px' }}>
  //         <Text>Item1</Text>
  //         <Text>Item2</Text>
  //         <Text>Item3</Text>
  //       </Toolbar>
  //     );
  //   });
  //
  //   expect(utils.asFragment()).toMatchSnapshot();
  //
  //   await waitFor(() => expect(screen.getByTitle('Show More').className).toMatch(/overflowButtonContainer/));
  // });

  test('Design Style modes', () => {
    const { rerender } = render(
      <Toolbar tooltip={'toolbar'} toolbarStyle={ToolbarStyle.Clear}>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    expect(screen.getByTitle('toolbar').className).toMatch(/clear/);

    rerender(
      <Toolbar tooltip={'toolbar'} toolbarStyle={ToolbarStyle.Clear} design={ToolbarDesign.Transparent}>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    expect(screen.getByTitle('toolbar').className).toMatch(/transparent/);

    rerender(
      <Toolbar tooltip={'toolbar'} toolbarStyle={ToolbarStyle.Clear} design={ToolbarDesign.Solid}>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    expect(screen.getByTitle('toolbar').className).toMatch(/solid/);

    rerender(
      <Toolbar tooltip={'toolbar'} toolbarStyle={ToolbarStyle.Clear} design={ToolbarDesign.Info}>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    expect(screen.getByTitle('toolbar').className).toMatch(/info/);

    rerender(
      <Toolbar tooltip={'toolbar'} toolbarStyle={ToolbarStyle.Clear} active design={ToolbarDesign.Info}>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    expect(screen.getByTitle('toolbar').className).toMatch(/activeInfo/);

    rerender(
      <Toolbar tooltip={'toolbar'} toolbarStyle={ToolbarStyle.Clear} active>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    expect(screen.getByTitle('toolbar').className).toMatch(/active/);
  });

  createPassThroughPropsTest(Toolbar);
});
