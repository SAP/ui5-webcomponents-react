import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { SplitterLayout } from '@ui5/webcomponents-react/dist/SplitterLayout';
import React from 'react';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/dist/FlexBoxJustifyContent';
import { SplitterElement } from '@ui5/webcomponents-react/dist/SplitterElement';
import { Button } from '@ui5/webcomponents-react/dist/Button';

describe('SplitterLayout', () => {
  const verticalSplitterLayout = (props: {}) => (
    <SplitterLayout {...props}>
      <SplitterElement
        justifyContent={FlexBoxJustifyContent.Center}
        size={200}
        minSize={50}
        maxSize={500}
        resizable={true}
      >
        <Button style={{ width: '70%' }}>Content 1</Button>
      </SplitterElement>
      <SplitterElement justifyContent={FlexBoxJustifyContent.Center} size={200} minSize={50} resizable={false}>
        <Button style={{ width: '50%' }}>Content 2</Button>
      </SplitterElement>
      <SplitterElement size={100} minSize={50} resizable={true}>
        <Button style={{ width: '100%' }}>Content 3</Button>
      </SplitterElement>
    </SplitterLayout>
  );

  const horizontalSplitterLayout = (props: {}) => (
    <SplitterLayout>
      <SplitterElement size={100} minSize={50} maxSize={250} resizable={true}>
        <Button style={{ width: '100%' }}>Content 1</Button>
      </SplitterElement>
      <SplitterElement justifyContent={FlexBoxJustifyContent.Center} size={200} minSize={50} resizable={true}>
        <Button style={{ width: '50%' }}>Content 2</Button>
      </SplitterElement>
      <SplitterElement size={100} minSize={50} resizable={false}>
        <Button style={{ width: '100%' }}>Content 3</Button>
      </SplitterElement>
    </SplitterLayout>
  );

  it('renderVerticalSplitterLayout', () => {
    const { asFragment } = render(verticalSplitterLayout({ orientation: 'vertical', width: '100%', height: '50vh' }));
    expect(document.querySelectorAll('div.reflex-element').length).toBe(3);
    expect(document.querySelectorAll('div.reflex-splitter').length).toBe(0);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renderVerticalSplitterLayout', () => {
    const { asFragment } = render(horizontalSplitterLayout({ orientation: 'vertical', width: 200, height: 400 }));

    expect(document.querySelectorAll('div.reflex-element').length).toBe(3);
    expect(document.querySelectorAll('div.reflex-splitter').length).toBe(1);

    expect(asFragment()).toMatchSnapshot();
  });

  it('noChildren should not crash', () => {
    const { asFragment } = render(<SplitterLayout width={100} height={100} orientation={'vertical'}></SplitterLayout>);

    expect(document.querySelector('div.reflex-container')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('noProps should not crash', () => {
    const { asFragment } = render(<SplitterLayout></SplitterLayout>);

    expect(document.querySelector('div.reflex-container')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(SplitterLayout);
});
