import { render } from '@shared/tests';
import { fireEvent, screen } from '@shared/tests/index';
import { SplitterLayout } from '@ui5/webcomponents-react/dist/SplitterLayout';
import { SplitterElement } from '@ui5/webcomponents-react/dist/SplitterElement';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { createCustomPropsTest } from '@shared/tests/utils';
import React from 'react';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';

describe('SplitterLayout', () => {
  test('Render Vertical SplitterLayout with multiple SplitterElements', () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <SplitterLayout vertical={true} style={{ width: '800px', height: '400px' }} data-testid={'SplitterLayout'}>
        <SplitterElement size={'200px'} data-testid={'SplitterElement1'}>
          <Button data-testid={'Button'} onClick={onClick}>
            Button 1
          </Button>
        </SplitterElement>
        <SplitterElement minSize={300} size={'400px'} data-testid={'SplitterElement2'}>
          <Button>Button 2</Button>
        </SplitterElement>
        <SplitterElement resizable={false} data-testid={'SplitterElement3'}>
          <Button>Button 3</Button>
        </SplitterElement>
      </SplitterLayout>
    );
    const AllSplitter = document.querySelectorAll('[role="separator"]');

    fireEvent.click(screen.getByTestId('Button'));
    fireEvent.click(AllSplitter[0]);

    expect(AllSplitter.length).toBe(1);
    expect(AllSplitter[0]).toHaveStyle(`border: 1px dotted ${ThemingParameters.sapHighlightColor}`);

    expect(screen.getByTestId('SplitterLayout')).toHaveStyle('width: 800px; height: 400px');
    expect(screen.getByTestId('SplitterElement1')).toHaveStyle('flex: 0 0 auto');
    expect(screen.getByTestId('SplitterElement2')).toHaveStyle('flex: 0 0 auto; min-width: 300px');
    expect(screen.getByTestId('SplitterElement3')).toHaveStyle('flex: 1 0 auto');
    expect(onClick).toHaveBeenCalled();

    expect(asFragment()).toMatchSnapshot();
  });

  test('Render Vertical SplitterLayout with only one SplitterElements', () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <SplitterLayout vertical={true} style={{ width: '700px', height: '400px' }} data-testid={'SplitterLayout'}>
        <SplitterElement size={'200px'} data-testid={'SplitterElement'}>
          <Button data-testid={'Button'} onClick={onClick}>
            Button 1
          </Button>
        </SplitterElement>
      </SplitterLayout>
    );
    const AllSplitter = document.querySelectorAll('[role="separator"]');

    fireEvent.click(screen.getByTestId('Button'));

    expect(AllSplitter.length).toBe(0);
    expect(screen.getByTestId('SplitterLayout')).toHaveStyle('width: 700px; height: 400px');
    expect(screen.getByTestId('SplitterElement')).toHaveStyle('flex: 0 0 auto');
    expect(onClick).toHaveBeenCalled();

    expect(asFragment()).toMatchSnapshot();
  });

  test('Render Horizontal SplitterLayout with multiple SplitterElements', () => {
    const { asFragment } = render(
      <SplitterLayout data-testid={'Layout'} vertical={false} style={{ width: '80vw', height: '600px' }}>
        <SplitterElement>
          <Button>Button 1</Button>
        </SplitterElement>
        <SplitterElement data-testid={'Element'} minSize={50} size={'100px'}>
          <Button>Button 2</Button>
        </SplitterElement>
        <SplitterElement>
          <Button>Button 3</Button>
        </SplitterElement>
      </SplitterLayout>
    );

    const AllSplitter = document.querySelectorAll('[role="separator"]');

    expect(AllSplitter.length).toBe(2);
    expect(screen.getByTestId('Layout')).toHaveStyle('width: 80vw; height: 600px');
    expect(screen.getByTestId('Element')).toHaveStyle('flex: 0 0 auto; min-height: 50px');

    expect(asFragment()).toMatchSnapshot();
  });

  test('Render SplitterLayout without props and children', () => {
    const { asFragment } = render(<SplitterLayout></SplitterLayout>);

    expect(asFragment()).toMatchSnapshot();
  });

  // todo do same with horizontal orientation - you can probably reuse most of the test below and just change the orientation
  test('Splitter click, move, focus - vertical', () => {
    const { getByTestId } = render(
      <SplitterLayout vertical style={{ width: '800px', height: '800px' }} data-testid={'SplitterLayout'}>
        <SplitterElement data-testid={'SplitterElement1'}>Content 1</SplitterElement>
        <SplitterElement data-testid={'SplitterElement2'}>Content 2</SplitterElement>
        <SplitterElement data-testid={'SplitterElement3'}>Content 3</SplitterElement>
        <SplitterElement data-testid={'SplitterElement4'} size={'200px'}>
          Content 4
        </SplitterElement>
      </SplitterLayout>
    );
    const AllSplitter = document.querySelectorAll('[role="separator"]');

    // click focuses the corresponding splitter
    fireEvent.click(AllSplitter[2]);
    expect(document.activeElement).toBe(AllSplitter[2]);
    console.log(getByTestId('SplitterElement4').style.flex);

    // todo mock corresponding size values (probably sufficient to mock getBoundingClientRect of element)
    fireEvent.keyDown(document.activeElement, { code: 'ArrowRight' });

    console.log(getByTestId('SplitterElement4').style.flex);
  });

  createCustomPropsTest(SplitterLayout);
});
