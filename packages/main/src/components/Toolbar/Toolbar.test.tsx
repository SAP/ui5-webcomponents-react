import { fireEvent, render, screen } from '@shared/tests';
import { createChangeTagNameTest } from '@shared/tests/utils';
import { Text } from '@ui5/webcomponents-react/dist/Text';
import { Toolbar } from '@ui5/webcomponents-react/dist/Toolbar';
import { ToolbarDesign } from '@ui5/webcomponents-react/dist/ToolbarDesign';
import { ToolbarSeparator } from '@ui5/webcomponents-react/dist/ToolbarSeparator';
import { ToolbarSpacer } from '@ui5/webcomponents-react/dist/ToolbarSpacer';
import { ToolbarStyle } from '@ui5/webcomponents-react/dist/ToolbarStyle';
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

  test('ToolbarSpacer', () => {
    const { getByTestId, asFragment } = render(
      <Toolbar data-testid="toolbar">
        <Text>Item1</Text>
        <ToolbarSpacer />
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );
    const toolbarSpacer = getByTestId('toolbar').children[0].children[1];
    expect(toolbarSpacer).toHaveClass('spacer');
    expect(toolbarSpacer).toHaveStyle('flex-grow: 1');

    expect(asFragment()).toMatchSnapshot();
  });

  test('ToolbarSeparator', () => {
    const { getByLabelText, asFragment } = render(
      <Toolbar data-testid="toolbar">
        <Text>Item1</Text>
        <ToolbarSeparator />
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );

    expect(getByLabelText('Separator')).toHaveClass('ToolbarSeparator-separator');

    expect(asFragment()).toMatchSnapshot();
  });

  test('overflow menu', () => {
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
    const onOverflowChange = jest.fn();
    const { getByTitle, getAllByTestId, getAllByText, rerender, queryByTitle, getByText, getAllByLabelText } = render(
      <Toolbar data-testid="toolbar" style={{ width: '300px' }} onOverflowChange={onOverflowChange}>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item1
        </Text>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item2
        </Text>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item3
        </Text>
      </Toolbar>
    );
    expect(getByTitle('Show More')).toBeInTheDocument();
    expect(getAllByTestId('toolbar-item')).toHaveLength(5);
    expect(onOverflowChange).toHaveBeenCalledTimes(1);

    const item1 = getAllByText('Item1');
    const item2 = getAllByText('Item2');
    const item3 = getAllByText('Item3');
    expect(item1).toHaveLength(1);
    expect(item2).toHaveLength(2);
    expect(item3).toHaveLength(2);
    expect(item1[0]).not.toHaveStyle(`visibility: hidden`);
    expect(item2[0]).toHaveStyle(`visibility: hidden`);
    expect(item3[0]).toHaveStyle(`visibility: hidden`);

    expect(document.body).toMatchSnapshot();

    rerender(
      <Toolbar data-testid="toolbar" style={{ width: '1000px' }} onOverflowChange={onOverflowChange}>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item1
        </Text>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item2
        </Text>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item3
        </Text>
      </Toolbar>
    );
    const updatedItem1 = getByText('Item1');
    const updatedItem2 = getByText('Item2');
    const updatedItem3 = getByText('Item3');
    expect(queryByTitle('Show More')).toBeNull();
    expect(updatedItem1).toBeInTheDocument();
    expect(updatedItem2).toBeInTheDocument();
    expect(updatedItem3).toBeInTheDocument();
    expect(updatedItem1).not.toHaveStyle(`visibility: hidden`);
    expect(updatedItem2).not.toHaveStyle(`visibility: hidden`);
    expect(updatedItem3).not.toHaveStyle(`visibility: hidden`);
    expect(onOverflowChange).toHaveBeenCalledTimes(2);

    //with fragments
    rerender(
      <Toolbar data-testid="toolbar" style={{ width: '300px' }}>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item1
        </Text>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item2
        </Text>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item3
        </Text>
      </Toolbar>
    );
    expect(getByTitle('Show More')).toBeInTheDocument();
    expect(getAllByTestId('toolbar-item')).toHaveLength(5);

    const item1frag = getAllByText('Item1');
    const item2frag = getAllByText('Item2');
    const item3frag = getAllByText('Item3');
    expect(item1frag).toHaveLength(1);
    expect(item2frag).toHaveLength(2);
    expect(item3frag).toHaveLength(2);
    expect(item1frag[0]).not.toHaveStyle(`visibility: hidden`);
    expect(item2frag[0]).toHaveStyle(`visibility: hidden`);
    expect(item3frag[0]).toHaveStyle(`visibility: hidden`);

    expect(document.body).toMatchSnapshot();

    rerender(
      <Toolbar data-testid="toolbar" style={{ width: '1000px' }}>
        <>
          <Text data-testid="toolbar-item" style={{ width: '200px' }}>
            Item1
          </Text>
          <Text data-testid="toolbar-item" style={{ width: '200px' }}>
            Item2
          </Text>
          <Text data-testid="toolbar-item" style={{ width: '200px' }}>
            Item3
          </Text>
        </>
      </Toolbar>
    );

    const updatedItem1frag = getByText('Item1');
    const updatedItem2frag = getByText('Item2');
    const updatedItem3frag = getByText('Item3');
    expect(queryByTitle('Show More')).toBeNull();
    expect(updatedItem1frag).toBeInTheDocument();
    expect(updatedItem2frag).toBeInTheDocument();
    expect(updatedItem3frag).toBeInTheDocument();
    expect(updatedItem1frag).not.toHaveStyle(`visibility: hidden`);
    expect(updatedItem2frag).not.toHaveStyle(`visibility: hidden`);
    expect(updatedItem3frag).not.toHaveStyle(`visibility: hidden`);

    //with separator
    rerender(
      <Toolbar data-testid="toolbar" style={{ width: '300px' }}>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item1
        </Text>
        <ToolbarSeparator />
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item2
        </Text>
        <Text data-testid="toolbar-item" style={{ width: '200px' }}>
          Item3
        </Text>
      </Toolbar>
    );

    const popoverSeparator = getAllByLabelText('Separator')[1];

    expect(popoverSeparator).toHaveClass('ToolbarSeparator-separator');
    expect(popoverSeparator).toHaveStyle('height: 0.0625rem; margin: 0.375rem 0.1875rem; width: 100%;');

    expect(document.body).toMatchSnapshot();
  });

  test('active', () => {
    const onClick = jest.fn();
    const { rerender } = render(
      <Toolbar data-testid="toolbar" onClick={onClick}>
        <Text>Item1</Text>
        <Text>Item2</Text>
        <Text>Item3</Text>
      </Toolbar>
    );

    fireEvent.click(screen.getByTestId('toolbar'));

    expect(onClick).not.toHaveBeenCalled();

    rerender(
      <Toolbar data-testid="toolbar" onClick={onClick} active>
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

  test('always visible items', () => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());

    HTMLElement.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        width: parseFloat(getComputedStyle(this).width || 100),
        height: 10,
        top: 0,
        left: 200,
        bottom: 0,
        right: 0
      };
    });
    const onOverflowChange = jest.fn();
    const { getByTitle, getAllByTestId, getAllByText, rerender, queryByTitle, getByText, getAllByLabelText } = render(
      <Toolbar
        data-testid="toolbar"
        style={{ width: '50px' }}
        onOverflowChange={onOverflowChange}
        numberOfAlwaysVisibleItems={2}
      >
        <Text data-testid="toolbar-item" style={{ width: '100px' }}>
          Item1
        </Text>
        <Text data-testid="toolbar-item" style={{ width: '100px' }}>
          Item2
        </Text>
        <Text data-testid="toolbar-item" style={{ width: '100px' }}>
          Item3
        </Text>
      </Toolbar>
    );

    expect(getAllByText('Item1')).toHaveLength(1);
    expect(getAllByText('Item2')).toHaveLength(1);
    expect(getAllByText('Item3')).toHaveLength(2);
    expect(getAllByText('Item1')[0]).not.toHaveStyle(`visibility: hidden`);
    expect(getAllByText('Item2')[0]).not.toHaveStyle(`visibility: hidden`);
    expect(getAllByText('Item3')[0]).toHaveStyle(`visibility: hidden`);
  });

  createChangeTagNameTest(Toolbar);
});
