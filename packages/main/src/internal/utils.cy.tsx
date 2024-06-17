import { expect } from 'chai';
import { Fragment } from 'react';
import { flattenFragments } from './utils';

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
    //TODO: create test
  });
});
