import { useLabelFormatter } from './useLabelFormatter.js';

// eslint-disable-next-line react/prop-types
function LabelFormatterComponent({ options }) {
  const val = useLabelFormatter(options);
  return <span>{val(100)}</span>;
}

describe('useLabelFormatter', () => {
  it('should return value when no formatter is present', () => {
    cy.mount(<LabelFormatterComponent options={{ accessor: 'test' }} />);
    cy.findByText('100').should('be.visible');
  });

  it('should not crash on invalid formatter', () => {
    cy.mount(<LabelFormatterComponent options={{ accessor: 'test', formatter: 'abc' }} />);
    cy.findByText('100').should('be.visible');
  });

  it('should format the value with a valid formatter', () => {
    cy.mount(<LabelFormatterComponent options={{ accessor: 'test', formatter: (val) => val / 10 }} />);
    cy.findByText('10').should('be.visible');
  });
});
