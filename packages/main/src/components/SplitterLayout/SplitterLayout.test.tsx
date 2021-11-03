import { fireEvent, screen, render } from '@shared/tests';
import { SplitterLayout } from '@ui5/webcomponents-react/dist/SplitterLayout';
import { SplitterElement } from '@ui5/webcomponents-react/dist/SplitterElement';
import { Button } from '@ui5/webcomponents-react/dist/Button';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import React from 'react';

describe('SplitterLayout', () => {
  test('Render Vertical SplitterLayout with multiple SplitterElements', () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <SplitterLayout orientation={'vertical'} width={'800px'} height={'400px'} data-testid={'SplitterLayout'}>
        <SplitterElement size={'200px'} data-testid={'SplitterElement1'}>
          <Button data-testid={'Button'} onClick={onClick}>
            Button 1
          </Button>
        </SplitterElement>
        <SplitterElement minSize={'300px'} size={'400px'} maxSize={'500px'} data-testid={'SplitterElement2'}>
          <Button>Button 2</Button>
        </SplitterElement>
        <SplitterElement resizable={false} data-testid={'SplitterElement3'}>
          <Button>Button 3</Button>
        </SplitterElement>
      </SplitterLayout>
    );
    const AllSplitter = document.querySelectorAll('[role="separator"]');

    fireEvent.click(screen.getByTestId('Button'));

    expect(AllSplitter.length).toBe(1);
    expect(screen.getByTestId('SplitterLayout')).toHaveStyle('width: 800px; height: 400px; flex: 0 0 800px');
    expect(screen.getByTestId('SplitterElement1')).toHaveStyle('flex: 0 0 200px');
    expect(screen.getByTestId('SplitterElement2')).toHaveStyle('flex: 0 0 400px; min-width: 300px; max-width: 500px');
    expect(screen.getByTestId('SplitterElement3')).toHaveStyle('flex: 1 0 auto; min-width: 0; height: 400px');
    expect(onClick).toHaveBeenCalled();

    expect(asFragment()).toMatchSnapshot();
  });

  test('Render Horizontal SplitterLayout with multiple SplitterElements', () => {
    const { asFragment } = render(
      <SplitterLayout data-testid={'Layout'} orientation={'horizontal'} width={'80vw'} height={'600px'}>
        <SplitterElement>
          <Button>Button 1</Button>
        </SplitterElement>
        <SplitterElement data-testid={'Element'} minSize={'50px'} size={'100px'} maxSize={'200px'}>
          <Button>Button 2</Button>
        </SplitterElement>
        <SplitterElement>
          <Button>Button 3</Button>
        </SplitterElement>
      </SplitterLayout>
    );

    const AllSplitter = document.querySelectorAll('[role="separator"]');
    fireEvent.mouseDown(AllSplitter[0]);

    expect(AllSplitter.length).toBe(2);
    expect(screen.getByTestId('Layout')).toHaveStyle('width: 80vw; height: 600px; flex: 0 0 600px');
    expect(screen.getByTestId('Element')).toHaveStyle('flex: 0 0 100px; min-height: 50px; max-height: 200px');

    expect(asFragment()).toMatchSnapshot();
  });

  test('Render SplitterLayout without props and children', () => {
    const { asFragment } = render(<SplitterLayout></SplitterLayout>);

    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(SplitterLayout);
});
