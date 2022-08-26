import React from 'react';
import { flattenFragments } from './utils';

describe('utils', function () {
  test('flattenFragments - no fragment', () => {
    expect(flattenFragments(<span>Hello World!</span>)).toMatchInlineSnapshot(`
      [
        <span>
          Hello World!
        </span>,
      ]
    `);
  });

  test('flattenFragments - top level fragment', () => {
    expect(
      flattenFragments(
        <>
          <span>Hello World!</span>
          <span>Hello World 2</span>
        </>
      )
    ).toMatchInlineSnapshot(`
      [
        <span>
          Hello World!
        </span>,
        <span>
          Hello World 2
        </span>,
      ]
    `);
  });

  test('flattenFragments - nested fragments with depth 1', () => {
    expect(
      flattenFragments(
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
      )
    ).toMatchInlineSnapshot(`
      [
        <span>
          Hello World!
        </span>,
        <span>
          Hello World 2
        </span>,
        <span>
          Hello World 2.1
        </span>,
        <React.Fragment>
          <span>
            Hello World 3
          </span>
          <React.Fragment>
            <span>
              Hello World 4
            </span>
            <span>
              Hello World 4.1
            </span>
          </React.Fragment>
        </React.Fragment>,
      ]
    `);
  });

  test('flattenFragments - nested fragments with depth Infinity', () => {
    expect(
      flattenFragments(
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
        Infinity
      )
    ).toMatchInlineSnapshot(`
      [
        <span>
          Hello World!
        </span>,
        <span>
          Hello World 2
        </span>,
        <span>
          Hello World 2.1
        </span>,
        <span>
          Hello World 3
        </span>,
        <span>
          Hello World 4
        </span>,
        <span>
          Hello World 4.1
        </span>,
      ]
    `);
  });
});
