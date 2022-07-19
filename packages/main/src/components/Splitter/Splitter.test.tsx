import { fireEvent, render, screen } from '@shared/tests';
import React from 'react';
import { SplitterLayout } from '../SplitterLayout';
import { Splitter } from './index';

describe('SplitterLayout', () => {
  test('Render single Splitter', () => {
    const { asFragment } = render(
      <Splitter data-testid={'Splitter1'} height={'800px'} width={'20px'} vertical={false} />
    );

    const SplitterElement = document.querySelector('[role="separator"]');
    expect(document.activeElement).not.toBe(SplitterElement);

    fireEvent.click(SplitterElement);

    expect(document.activeElement).toBe(SplitterElement);

    expect(asFragment()).toMatchSnapshot();
  });

  test('Render multiple Splitter in div', () => {
    const { asFragment } = render(
      <div data-testid={'Container'}>
        <Splitter data-testid={'Splitter1'} height={'800px'} width={'20px'} vertical={false} />
        <Splitter data-testid={'Splitter2'} height={'800px'} width={'20px'} vertical={false} />
        <Splitter data-testid={'Splitter3'} height={'800px'} width={'20px'} vertical={true} />
        <Splitter data-testid={'Splitter4'} height={'800px'} width={'20px'} vertical={true} />
        <Splitter data-testid={'Splitter5'} height={'800px'} width={'20px'} vertical={false} />
      </div>
    );
    const allSplitter = [];
    screen.getByTestId('Container').childNodes.forEach((child) => allSplitter.push(child));

    allSplitter.forEach((splitter, index) => {
      fireEvent.click(splitter);
      expect(document.activeElement).toBe(splitter as HTMLElement);
      if (index > 0) {
        expect(document.activeElement).not.toBe(allSplitter[index - 1]);
      }
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test('Render single Splitter without required props', () => {
    const { asFragment } = render(<Splitter />);

    expect(asFragment()).toMatchSnapshot();
  });
});
