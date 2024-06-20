import ValueState from '@ui5/webcomponents-base/dist/types/ValueState';
import { expect } from 'chai';
import { Fragment, useRef } from 'react';
import {
  Bar,
  Button,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  FlexBoxDirection,
  FlexBoxWrap,
  Label,
  ObjectStatus,
  Title
} from '../index.js';
import { useGetHeaderHeight } from '../webComponents/DynamicPage/helpers.js';
import { flattenFragments } from './utils';
import type { DynamicPageDomRef } from '@/packages/main/src';
import './DynamicPageStickyHeader.css';

describe('utils', function () {
  it('flattenFragments - no fragment', () => {
    const result = flattenFragments(<span>Hello World!</span>);
    expect(result).to.have.length(1);
    expect(result[0]).to.have.property('type', 'span');
  });

  it('flattenFragments - top level fragment', () => {
    const result = flattenFragments(
      <>
        <span>Hello World!</span>
        <span>Hello World 2</span>
      </>
    );
    expect(result).to.have.length(2);
    expect(result[0]).to.property('type', 'span');
    expect(result[1]).to.property('type', 'span');
  });

  it('flattenFragments - nested fragments with depth 1', () => {
    const result = flattenFragments(
      <>
        <span>Hello World!</span>
        <>
          <span>Hello World 2</span>
          <span>Hello World 2.1</span>
          <>
            <span>Hello World 3</span>
            <>
              <span>Hello World 4</span>
              <span>Hello World 4.1</span>
            </>
          </>
        </>
      </>,
      1
    );

    expect(result).to.have.length(4);
    expect(result[0]).to.property('type', 'span');
    expect(result[0]).to.have.nested.property('props.children', 'Hello World!');
    expect(result[1]).to.property('type', 'span');
    expect(result[1]).to.have.nested.property('props.children', 'Hello World 2');
    expect(result[2]).to.property('type', 'span');
    expect(result[2]).to.have.nested.property('props.children', 'Hello World 2.1');
    expect(result[3]).to.have.property('type', Fragment);
  });
  //
  it('flattenFragments - nested fragments with depth Infinity', () => {
    const result = flattenFragments(
      [
        <>
          <span>Hello World!</span>
          <>
            <span>Hello World 2</span>
            <span>Hello World 2.1</span>
            <>
              <span>Hello World 3</span>
              <>
                <span>Hello World 4</span>
                <span>Hello World 4.1</span>
              </>
            </>
          </>
        </>,
        <>
          <span>Hello World!</span>
          <>
            <span>Hello World 2</span>
            <span>Hello World 2.1</span>
            <>
              <span>Hello World 3</span>
              <>
                <span>Hello World 4</span>
                <span>Hello World 4.1</span>
              </>
            </>
          </>
        </>
      ],
      Infinity
    );
    expect(result).to.have.length(12);
    result.forEach((r) => {
      expect(r).not.have.property('type', Fragment);
      expect(r).have.property('type', 'span');
    });
  });

  it('DynamicPage: sticky content hook', () => {
    cy.mount(<DynamicPageWithStickyContentHeaders />);
    // be.visible & not.be.visible returns wrong results
    cy.findByText('Sticky Header')
      .as('sticky1')
      .should(($el) => {
        expect($el[0].getBoundingClientRect().top).to.approximately(216, 1);
      });
    cy.findByText('Content1')
      .as('content1')
      .should(($el) => {
        expect($el[0].getBoundingClientRect().top).to.approximately(280, 1);
      });
    cy.findByText('Sticky Header 2')
      .as('sticky2')
      .should(($el) => {
        expect($el[0].getBoundingClientRect().top).to.approximately(520, 1);
      });
    cy.findByText('End Content')
      .as('endContent')
      .should(($el) => {
        expect($el[0].getBoundingClientRect().top).to.approximately(2648, 1);
      });

    cy.get('.ui5-dynamic-page-scroll-container').scrollTo('bottom');
    cy.wait(50);
    cy.get('.ui5-dynamic-page-scroll-container').scrollTo('bottom');

    cy.get('@sticky1').should(($el) => {
      expect($el[0].getBoundingClientRect().top).to.approximately(88, 1);
    });
    cy.get('@content1').should(($el) => {
      expect($el[0].getBoundingClientRect().top).to.approximately(-1842.5, 1);
    });
    cy.get('@sticky2').should(($el) => {
      expect($el[0].getBoundingClientRect().top).to.approximately(152, 1);
    });
    cy.get('@endContent').should(($el) => {
      expect($el[0].getBoundingClientRect().top).to.approximately(525.5, 1);
    });
  });
});

function DynamicPageWithStickyContentHeaders() {
  const dynamicPageRef = useRef<DynamicPageDomRef & { shadowRoot: ShadowRoot }>(null);
  const headerHeight = useGetHeaderHeight(dynamicPageRef);

  return (
    <DynamicPage
      style={{ height: '600px' }}
      titleArea={
        <DynamicPageTitle
          heading={<Title style={{ fontSize: 'var(--sapObjectHeader_Title_FontSize)' }}>Header Title</Title>}
          snappedHeading={
            <Title style={{ fontSize: 'var(--sapObjectHeader_Title_SnappedFontSize)' }}>Snapped Header Title</Title>
          }
        />
      }
      headerArea={
        <DynamicPageHeader>
          <FlexBox wrap={FlexBoxWrap.Wrap}>
            <FlexBox direction={FlexBoxDirection.Column}>
              <Label>Location: Warehouse A</Label>
              <Label>Halway: 23L</Label>
              <Label>Rack: 34</Label>
            </FlexBox>
            <span style={{ width: '1rem' }} />
            <FlexBox direction={FlexBoxDirection.Column}>
              <Label>Availability:</Label>
              <ObjectStatus state={ValueState.Positive}>In Stock</ObjectStatus>
            </FlexBox>
          </FlexBox>
        </DynamicPageHeader>
      }
      footerArea={
        <Bar
          design="FloatingFooter"
          endContent={
            <>
              <Button>Button</Button>
            </>
          }
        />
      }
      showFooter
      ref={dynamicPageRef}
      className="dynamicPageStickyContent"
    >
      <>
        <div
          style={{
            position: 'sticky',
            width: '100%',
            height: '4rem',
            background: 'lightgreen',
            insetBlockStart: `${headerHeight}px`
          }}
        >
          Sticky Header
        </div>
        <div style={{ width: '100%', background: 'orange', height: '15rem' }}>Content1</div>
        <div
          style={{
            position: 'sticky',
            width: '100%',
            height: '8rem',
            background: 'lightgreen',
            insetBlockStart: `calc(${headerHeight}px + 4rem)`
          }}
        >
          Sticky Header 2
        </div>
        <div
          style={{
            background: 'lightblue',
            height: '2000px',
            width: '100%'
          }}
        >
          Content 2
        </div>
        <div>End Content</div>
      </>
    </DynamicPage>
  );
}
