import { fireEvent, render, renderRtl } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React from 'react';
import { SplitterElement } from '../SplitterElement';
import { SplitterLayout } from './index';

const keyDownOptions = (direction) => ({ code: `Arrow${direction}`, key: `Arrow${direction}` });

describe('SplitterLayout', () => {
  beforeEach(() => {
    // @ts-expect-error: too much effort to type this
    window.HTMLElement.prototype.getBoundingClientRect = () => {
      return {
        width: 200,
        height: 800,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
      };
    };
  });

  test('Splitter click, move, focus - vertical', () => {
    const { getByTestId } = render(
      <SplitterLayout vertical style={{ width: '800px', height: '800px' }} data-testid={'SplitterLayout'}>
        <SplitterElement data-testid={'SplitterElement1'}>Content 1</SplitterElement>
        <SplitterElement data-testid={'SplitterElement2'}>Content 2</SplitterElement>
        <SplitterElement data-testid={'SplitterElement3'} size={'200px'}>
          Content 3
        </SplitterElement>
        <SplitterElement data-testid={'SplitterElement4'} size={'200px'}>
          Content 4
        </SplitterElement>
      </SplitterLayout>
    );
    const AllSplitter = document.querySelectorAll('[role="separator"]');

    // click focuses the corresponding splitter
    fireEvent.click(AllSplitter[2]);
    expect(document.activeElement).toBe(AllSplitter[2]);

    fireEvent.keyDown(document.activeElement, keyDownOptions('Left'));

    expect(getByTestId('SplitterElement3').style.flexBasis).toBe('780px');
    expect(getByTestId('SplitterElement4').style.flexBasis).toBe('820px');

    fireEvent.keyDown(document.activeElement, keyDownOptions('Right'));
    fireEvent.keyDown(document.activeElement, keyDownOptions('Right'));

    expect(getByTestId('SplitterElement3').style.flexBasis).toBe('820px');
    expect(getByTestId('SplitterElement4').style.flexBasis).toBe('780px');
  });

  test('Splitter click, move, focus - horizontal', () => {
    const { getByTestId } = render(
      <SplitterLayout style={{ width: '800px', height: '800px' }} data-testid={'SplitterLayout'}>
        <SplitterElement data-testid={'SplitterElement1'}>Content 1</SplitterElement>
        <SplitterElement data-testid={'SplitterElement2'}>Content 2</SplitterElement>
        <SplitterElement data-testid={'SplitterElement3'} size={'800px'}>
          Content 3
        </SplitterElement>
        <SplitterElement data-testid={'SplitterElement4'} size={'800px'}>
          Content 4
        </SplitterElement>
      </SplitterLayout>
    );
    const AllSplitter = document.querySelectorAll('[role="separator"]');

    // click focuses the corresponding splitter
    fireEvent.click(AllSplitter[2]);
    expect(document.activeElement).toBe(AllSplitter[2]);

    fireEvent.keyDown(document.activeElement, keyDownOptions('Up'));

    expect(getByTestId('SplitterElement3').style.flex).toBe('0 0 180px');
    expect(getByTestId('SplitterElement4').style.flex).toBe('0 0 220px');

    fireEvent.keyDown(document.activeElement, keyDownOptions('Down'));
    fireEvent.keyDown(document.activeElement, keyDownOptions('Down'));

    expect(getByTestId('SplitterElement3').style.flex).toBe('0 0 220px');
    expect(getByTestId('SplitterElement4').style.flex).toBe('0 0 180px');
  });

  test('Splitter click, move, focus - vertical - RTL', () => {
    const { getByTestId } = renderRtl(
      <SplitterLayout style={{ width: '800px', height: '800px' }} data-testid={'SplitterLayout'}>
        <SplitterElement data-testid={'SplitterElement1'}>Content 1</SplitterElement>
        <SplitterElement data-testid={'SplitterElement2'}>Content 2</SplitterElement>
        <SplitterElement data-testid={'SplitterElement3'} size={'200px'}>
          Content 3
        </SplitterElement>
        <SplitterElement data-testid={'SplitterElement4'} size={'200px'}>
          Content 4
        </SplitterElement>
      </SplitterLayout>
    );
    const AllSplitter = document.querySelectorAll('[role="separator"]');

    // click focuses the corresponding splitter
    fireEvent.click(AllSplitter[2]);
    expect(document.activeElement).toBe(AllSplitter[2]);

    fireEvent.keyDown(document.activeElement, keyDownOptions('Left'));

    expect(getByTestId('SplitterElement3').style.flexBasis).toBe('220px');
    expect(getByTestId('SplitterElement4').style.flexBasis).toBe('180px');

    fireEvent.keyDown(document.activeElement, keyDownOptions('Right'));
    fireEvent.keyDown(document.activeElement, keyDownOptions('Right'));

    expect(getByTestId('SplitterElement3').style.flexBasis).toBe('180px');
    expect(getByTestId('SplitterElement4').style.flexBasis).toBe('220px');
  });

  createCustomPropsTest(SplitterLayout);
});
