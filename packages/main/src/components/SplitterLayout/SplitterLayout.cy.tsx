import { useState } from 'react';
import type { SplitterLayoutPropTypes } from '../..';
import { FlexBox, Text, Button, Label, SplitterElement, SplitterLayout } from '../..';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

function TestComp({ vertical, dir }: { vertical: SplitterLayoutPropTypes['vertical']; dir: string }) {
  const [mount, setMount] = useState(false);
  const [dep, setDep] = useState(false);
  return (
    <SplitterLayout
      dir={dir}
      vertical={vertical}
      style={{
        width: '100vw',
        height: '100vh',
      }}
      options={{ resetOnSizeChange: true, resetOnChildrenChange: true, resetOnCustomDepsChange: [dep] }}
    >
      <SplitterElement size="70%" data-testid="se1">
        <Label>Left</Label>
        <Button onClick={() => setMount(true)}>Add child</Button>
        <Button onClick={() => setDep(true)}>Trigger dep</Button>
      </SplitterElement>
      <SplitterElement size={mount ? '25%' : '30%'} data-testid="se2">
        <Label>Right</Label>
      </SplitterElement>
      {mount && (
        <SplitterElement size="5%" data-testid="se3">
          Additional Child
        </SplitterElement>
      )}
    </SplitterLayout>
  );
}

function moveSpacer(dir: string, vertical: boolean) {
  cy.findAllByRole('separator').eq(0).click();
  cy.wait(50);
  const rtlSafeLeft = `Arrow${dir === 'rtl' && !vertical ? 'Right' : 'Left'}`;
  const rtlSafeUp = `Arrow${dir === 'rtl' && !vertical ? 'Down' : 'Up'}`;
  for (let i = 0; i < 5; i++) {
    cy.findAllByRole('separator').eq(0).trigger('keydown', { code: rtlSafeLeft, force: true });
    cy.findAllByRole('separator').eq(0).trigger('keyup', { code: rtlSafeLeft, force: true });
    cy.wait(50);
    cy.findAllByRole('separator').eq(0).trigger('keydown', { code: rtlSafeUp, force: true });
    cy.findAllByRole('separator').eq(0).trigger('keyup', { code: rtlSafeUp, force: true });
    cy.wait(50);
  }
}

describe('SplitterLayout', () => {
  ['ltr', 'rtl'].forEach((dir) => {
    [false, true].forEach((vertical) => {
      it(`Splitter Move & Reset - ${dir} - vertical: ${vertical}`, () => {
        cy.viewport(2000, 2000);
        cy.mount(<TestComp vertical={vertical} dir={dir} />);

        cy.findByTestId('se1').should('have.css', 'flex', '0 1 calc(70% - 16px)');
        cy.findByTestId('se2').should('have.css', 'flex', '0 1 30%');

        moveSpacer(dir, vertical);
        cy.findByTestId('se1').should('have.css', 'flex', '0 0 1184px');
        cy.findByTestId('se2').should('have.css', 'flex', '0 0 800px');

        cy.findByText('Trigger dep').click({ force: true });

        cy.findByTestId('se1').should('have.css', 'flex', '0 1 calc(70% - 16px)');
        cy.findByTestId('se2').should('have.css', 'flex', '0 1 30%');

        moveSpacer(dir, vertical);
        cy.findByTestId('se1').should('have.css', 'flex', '0 0 1184px');
        cy.findByTestId('se2').should('have.css', 'flex', '0 0 800px');

        cy.findByText('Add child').click({ force: true });
        cy.findByTestId('se1').should('have.css', 'flex', '0 1 calc(70% - 16px)');
        cy.findByTestId('se2').should('have.css', 'flex', '0 1 calc(25% - 16px)');
        cy.findByTestId('se3').should('have.css', 'flex', '0 1 5%');

        moveSpacer(dir, vertical);

        cy.viewport(1000, 1000);

        cy.findByTestId('se1').should('have.css', 'flex', '0 1 calc(70% - 16px)');
        cy.findByTestId('se2').should('have.css', 'flex', '0 1 calc(25% - 16px)');
        cy.findByTestId('se3').should('have.css', 'flex', '0 1 5%');
      });
    });
  });

  it('SplitterLayout w/ multiple SplitterElements', () => {
    const click = cy.spy().as('click');
    [true, false].forEach((vertical) => {
      cy.mount(
        <SplitterLayout vertical={vertical} style={{ width: '800px', height: '800px' }} data-testid={'sl'}>
          <SplitterElement size={'200px'} data-testid={'se1'}>
            <Button data-testid={'btn'} onClick={click}>
              Button 1
            </Button>
          </SplitterElement>
          <SplitterElement minSize={300} size={400} data-testid={'se2'}>
            <Button>Button 2</Button>
          </SplitterElement>
          <SplitterElement resizable={false} data-testid={'se3'}>
            <Button>Button 3</Button>
          </SplitterElement>
        </SplitterLayout>,
      );
      cy.findByTestId('btn').click();
      cy.get('[role="separator"]').first().click();
      // fallback click to prevent flakyness
      cy.get('[role="separator"]')
        .first()
        .click()
        .should('have.length', 1)
        .should('have.css', 'border', '2px solid rgb(0, 50, 165)');
      cy.findByTestId('sl').should('have.css', 'width', '800px').should('have.css', 'height', '800px');
      cy.findByTestId('se2')
        .should('have.css', 'flex', '0 1 400px')
        .should('have.css', vertical ? 'min-height' : 'min-width', '300px');
      cy.findByTestId('se3')
        .should('have.css', 'flex', '0 0 200px')
        .should('have.css', vertical ? 'min-height' : 'min-width', '0px');
    });
    cy.get('@click').should('have.been.calledTwice');
  });

  it('empty content', () => {
    cy.mount(<SplitterLayout data-testid="sl" />);
    cy.findByTestId('sl').should('not.be.visible').should('exist');
  });

  [true, false].forEach((vertical) => {
    it(`controlled width (${vertical ? 'vertical' : 'horizontal'})`, () => {
      function getMouseMoveArgs(amount: number): [number, number] {
        return vertical ? [0, amount] : [amount, 0];
      }
      const resize = cy.spy().as('resize');
      const TestComp = () => {
        const [size0, setSize0] = useState('200px');
        const [size1, setSize1] = useState(200);
        const [size2, setSize2] = useState('auto');
        const [size3, setSize3] = useState('200px');
        const setter = [setSize0, setSize1, setSize2, setSize3];
        return (
          <>
            <SplitterLayout
              vertical={vertical}
              style={{ height: '900px', width: '900px', backgroundColor: 'black' }}
              onResize={(e) => {
                resize(e);
                e.areas.forEach((item) => {
                  if (item.area.dataset.index === '1') {
                    setter[Number(item.area.dataset.index)](item.size);
                  } else {
                    //@ts-expect-error: supported
                    setter[Number(item.area.dataset.index)](item.size + 'px');
                  }
                });
              }}
            >
              <SplitterElement size={size0} data-index={0} style={{ backgroundColor: 'lightcoral' }}>
                <FlexBox style={{ height: '100%', width: '100%' }} alignItems="Center" justifyContent="Center">
                  <Text>Content 1</Text>
                </FlexBox>
              </SplitterElement>
              <SplitterElement size={size1} data-index={1} style={{ backgroundColor: 'lightblue' }}>
                <FlexBox style={{ height: '100%', width: '100%' }} alignItems="Center" justifyContent="Center">
                  <Text style={{ whiteSpace: 'pre-line' }}>{`Content 2 
                  with
                  multi
                  lines`}</Text>
                </FlexBox>
              </SplitterElement>
              <SplitterElement size={'auto'} data-index={2} style={{ backgroundColor: 'lightgreen' }}>
                <FlexBox style={{ height: '100%', width: '100%' }} alignItems="Center" justifyContent="Center">
                  <Text>
                    Content 3 with long text: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet.
                  </Text>
                </FlexBox>
              </SplitterElement>
              <SplitterElement size={size3} data-index={3} style={{ backgroundColor: 'lightgoldenrodyellow' }}>
                <FlexBox style={{ height: '100%', width: '100%' }} alignItems="Center" justifyContent="Center">
                  <Text>Content 4</Text>
                </FlexBox>
              </SplitterElement>
            </SplitterLayout>
            <span data-testid="0">{size0}</span>
            <br />
            <span data-testid="1">{size1}</span>
            <br />
            <span data-testid="2">{size2}</span>
            <br />
            <span data-testid="3">{size3}</span>
          </>
        );
      };

      cy.mount(<TestComp />);

      cy.get('@resize').should('not.have.been.called');
      cy.findAllByRole('separator')
        .eq(0)
        .realMouseDown({ position: 'center' })
        .realMouseMove(...getMouseMoveArgs(-100), {
          position: 'center',
          scrollBehavior: false,
        })
        .realMouseUp({ position: 'center' });

      cy.findByTestId('0')
        .invoke('text')
        .then((txt) => parseInt(txt, 10))
        .should('be.within', 99, 101);
      cy.findByTestId('1')
        .invoke('text')
        .then((txt) => parseInt(txt, 10))
        .should('be.within', 299, 301);
      cy.findByTestId('2').should('have.text', 'auto');
      cy.findByTestId('3').invoke('text').should('equal', '200px');

      cy.findAllByRole('separator').eq(0).realMouseDown({ position: 'center' });
      // drag across bounding box
      cy.get('body')
        .realMouseMove(...getMouseMoveArgs(300), {
          position: 'center',
          scrollBehavior: false,
        })
        .realMouseUp({ position: 'center' });

      cy.wait(50);
      cy.findByTestId('0')
        .invoke('text')
        .then((txt) => parseInt(txt, 10))
        .should('be.within', 383, 385);
      cy.findByTestId('1')
        .invoke('text')
        .then((txt) => parseInt(txt, 10))
        .should('be.within', 15, 17);
      cy.findByTestId('2').should('have.text', 'auto');
      cy.findByTestId('3').invoke('text').should('equal', '200px');

      cy.findAllByRole('separator').eq(2).click().realPress('ArrowDown').realPress('ArrowDown').realPress('ArrowDown');

      cy.findByTestId('0')
        .invoke('text')
        .then((txt) => parseInt(txt, 10))
        .should('be.within', 383, 385);
      cy.findByTestId('1')
        .invoke('text')
        .then((txt) => parseInt(txt, 10))
        .should('be.within', 15, 17);
      cy.findByTestId('2').should('have.text', '360px');
      cy.findByTestId('3').should('have.text', '140px');
    });
  });

  cypressPassThroughTestsFactory(SplitterLayout, { children: <SplitterElement>Content</SplitterElement> });
});
