import { fireEvent, render, renderWithDefine, screen, waitFor } from '@shared/tests';
import { createChangeTagNameTest } from '@shared/tests/utils';
import React, { createRef } from 'react';
import {
  Button,
  ButtonDesign,
  Input,
  PopoverDomRef,
  Text,
  ToggleButton,
  ToolbarDesign,
  ToolbarSeparator,
  ToolbarSpacer,
  ToolbarStyle
} from '../..';
import { Toolbar } from './index';
import '@ui5/webcomponents-icons/dist/menu2.js';

describe('Toolbar', () => {
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
    // @ts-expect-error: too much effort to type this
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());

    // @ts-expect-error: too much effort to type this
    HTMLElement.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        // @ts-expect-error: too much effort to type this
        width: parseFloat(getComputedStyle(this).width || 200),
        height: 10,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    });
    const { rerender, queryByTitle, getByText, getAllByLabelText } = render(
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
    expect(queryByTitle('Show more')).toBeNull();
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
    // @ts-expect-error: too much effort to type this
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());
    // @ts-expect-error: too much effort to type this
    HTMLElement.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        // @ts-expect-error: too much effort to type this
        width: parseFloat(getComputedStyle(this).width || 100),
        height: 10,
        top: 0,
        left: 200,
        bottom: 0,
        right: 0
      };
    });
    const onOverflowChange = jest.fn();
    const { getAllByText } = render(
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

  test('close on interaction', async () => {
    // @ts-expect-error: too much effort to type this
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());
    // @ts-expect-error: too much effort to type this
    HTMLElement.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        // @ts-expect-error: too much effort to type this
        width: parseFloat(getComputedStyle(this).width || 200),
        height: 10,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    });
    const overflowPopoverRef = createRef<PopoverDomRef>();
    const handlePopoverClose = () => {
      console.log('click');
      if (overflowPopoverRef.current.isOpen()) {
        overflowPopoverRef.current.close();
      }
    };
    const { getAllByText, getAllByPlaceholderText, container } = await renderWithDefine(
      <Toolbar overflowPopoverRef={overflowPopoverRef} style={{ width: '50px' }}>
        <Button onClick={handlePopoverClose}>Button One</Button>
        <Input placeholder="Input" onChange={handlePopoverClose} />
      </Toolbar>,
      ['ui5-popover']
    );
    expect(overflowPopoverRef.current.isOpen()).toBeFalsy();
    overflowPopoverRef.current.showAt(container.querySelector(`[tooltip="Show more"]`));
    expect(overflowPopoverRef.current.isOpen()).toBeTruthy();
    fireEvent.click(getAllByText('Button One')[1]);
    expect(overflowPopoverRef.current.isOpen()).toBeFalsy();
    fireEvent.click(container.querySelector(`[tooltip="Show more"]`));
    overflowPopoverRef.current.showAt(container.querySelector(`[tooltip="Show more"]`));
    fireEvent.change(getAllByPlaceholderText('Input')[1], { target: { value: ':)' } });
    expect(overflowPopoverRef.current.isOpen()).toBeFalsy();
  });

  test('a11y', async () => {
    // @ts-expect-error: too much effort to type this
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());
    // @ts-expect-error: too much effort to type this
    HTMLElement.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        // @ts-expect-error: too much effort to type this
        width: parseFloat(getComputedStyle(this).width || 200),
        height: 10,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    });
    const overflowPopoverRef = createRef<PopoverDomRef>();
    const { container } = await renderWithDefine(
      <Toolbar overflowPopoverRef={overflowPopoverRef} style={{ width: '50px' }}>
        <Button>Button One</Button>
        <Input />
      </Toolbar>,
      ['ui5-popover', 'ui5-button']
    );
    const overflowBtn = container.querySelector(`[tooltip="Show more"]`);
    await waitFor(() => overflowBtn.shadowRoot.querySelector('button'));
    const srOverflowBtn = overflowBtn.shadowRoot.querySelector('button');

    expect(srOverflowBtn).toHaveAttribute('aria-expanded', 'false');
    expect(srOverflowBtn).toHaveAttribute('aria-haspopup', 'menu');

    // todo: overflowPopoverRef.current.showAt never resolves
    // await overflowPopoverRef.current.showAt(container.querySelector(`[tooltip="Show more"]`));
    // expect(overflowPopoverRef.current.isOpen()).toBeTruthy();
    // expect(overflowBtn.shadowRoot.querySelector('button')).toHaveAttribute('aria-expanded', 'true');
  });

  test('custom overflow button', () => {
    // @ts-expect-error: too much effort to type this
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());

    // @ts-expect-error: too much effort to type this
    HTMLElement.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        // @ts-expect-error: too much effort to type this
        width: parseFloat(getComputedStyle(this).width || 200),
        height: 10,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      };
    });
    render(
      <Toolbar
        style={{ width: '50px' }}
        overflowButton={<ToggleButton data-testid="btn" icon="menu2" design={ButtonDesign.Transparent} />}
      >
        <Button>Button One</Button>
        <Input />
      </Toolbar>
    );
    expect(screen.getByTestId('btn')).toBeInTheDocument();
    // testing e.preventDefault is not possible as the shadow root is always empty and the click event is never called
  });

  createChangeTagNameTest(Toolbar);
});
