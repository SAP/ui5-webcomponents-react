import { usePrepareDimensionsAndMeasures } from './usePrepareDimensionsAndMeasures.js';

const dimensions = [
  {
    accessor: 'a'
  }
];

const measures = [
  {
    accessor: 'b'
  }
];

// eslint-disable-next-line react/prop-types
function TestComponent({ onHookResult, dimensionOptions = undefined, measureOptions = undefined }) {
  const result = usePrepareDimensionsAndMeasures(dimensions, measures, dimensionOptions, measureOptions);
  onHookResult(result);
  return null;
}

describe('useLabelFormatter', () => {
  it('should not throw an error when no defaults are passed', () => {
    const result = cy.spy().as('result');
    cy.mount(<TestComponent onHookResult={result} />);

    cy.get('@result').should('have.been.calledWith', {
      dimensions: [
        {
          accessor: 'a'
        }
      ],
      measures: [
        {
          accessor: 'b'
        }
      ]
    });
  });

  it('should merge defaults', () => {
    const result = cy.spy().as('result');
    cy.mount(
      <TestComponent
        onHookResult={result}
        dimensionOptions={{ dimensionDefault: true }}
        measureOptions={{ measureDefault: true }}
      />
    );

    cy.get('@result').should('have.been.calledWith', {
      dimensions: [
        {
          accessor: 'a',
          dimensionDefault: true
        }
      ],
      measures: [
        {
          accessor: 'b',
          measureDefault: true
        }
      ]
    });
  });

  it('should merge defaults but not overwrite existing properties', () => {
    const result = cy.spy().as('result');
    cy.mount(
      <TestComponent
        onHookResult={result}
        dimensionOptions={{
          dimensionDefault: true,
          accessor: 'I should not be in the result'
        }}
        measureOptions={{ measureDefault: true, accessor: 'I should not be in the result' }}
      />
    );

    cy.get('@result').should('have.been.calledWith', {
      dimensions: [
        {
          accessor: 'a',
          dimensionDefault: true
        }
      ],
      measures: [
        {
          accessor: 'b',
          measureDefault: true
        }
      ]
    });
  });
});
