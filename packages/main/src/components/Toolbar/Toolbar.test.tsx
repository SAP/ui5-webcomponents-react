import { render, screen, fireEvent } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { ToolbarDesign } from '@ui5/webcomponents-react/lib/ToolbarDesign';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import React from 'react';

describe('Toolbar', () => {
  test('Renders with default Props', () => {
    expect(render(<Toolbar />).asFragment()).toMatchSnapshot();
  });

  test('Renders with children', () => {
    expect(
      render(
        <Toolbar active data-testid="toolbar">
          <Text>Item1</Text>
          <Text>Item2</Text>
          <Text>Item3</Text>
        </Toolbar>
      ).asFragment()
    ).toMatchSnapshot();
    expect(screen.getByText('Item1').textContent).toEqual('Item1');
    expect(screen.getByTestId('toolbar')).toHaveClass('Toolbar-active');
  });

  test('Renders with children as react fragments', () => {
    expect(
      render(
        <Toolbar active data-testid="toolbar">
          <>
            <Text>Item1</Text>
            <Text>Item2</Text>
            <Text>Item3</Text>
          </>
        </Toolbar>
      ).asFragment()
    ).toMatchSnapshot();
    expect(screen.getByText('Item1').textContent).toEqual('Item1');
    expect(screen.getByTestId('toolbar')).toHaveClass('Toolbar-active');
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

  test('active', () => {
    const onClick = jest.fn();
    const { rerender } = render(
      <Toolbar data-testid="toolbar" onToolbarClick={onClick}>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );

    fireEvent.click(screen.getByTestId('toolbar'));

    expect(onClick).not.toHaveBeenCalled();

    rerender(
      <Toolbar data-testid="toolbar" onToolbarClick={onClick} active>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );

    fireEvent.click(screen.getByTestId('toolbar'));

    expect(onClick).toHaveBeenCalled();
  });

  test('style', () => {
    const { rerender } = render(
      <Toolbar data-testid="toolbar">
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    expect(screen.getByTestId('toolbar')).not.toHaveClass('Toolbar-clear');

    rerender(
      <Toolbar data-testid="toolbar" toolbarStyle={ToolbarStyle.Clear}>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    expect(screen.getByTestId('toolbar')).toHaveClass('Toolbar-clear');
  });

  test.each([
    [ToolbarDesign.Info, 'Toolbar-info'],
    [ToolbarDesign.Solid, 'Toolbar-solid'],
    [ToolbarDesign.Transparent, 'Toolbar-transparent']
  ])('design: %s', (design, expected) => {
    render(
      <Toolbar data-testid={'toolbar'} design={design}>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );

    expect(screen.getByTestId('toolbar')).toHaveClass(expected);
  });

  createPassThroughPropsTest(Toolbar);
});
