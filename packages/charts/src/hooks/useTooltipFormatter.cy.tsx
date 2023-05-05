import { useTooltipFormatter } from './useTooltipFormatter.js';

// eslint-disable-next-line react/prop-types
function TooltipFormatterComponent({ measure, value, name, options }) {
  const val = useTooltipFormatter([measure]);
  return <span>{val(value, name, options)}</span>;
}

describe('useTooltipFormatter', () => {
  it('should return value when no formatter is present', () => {
    cy.mount(
      <TooltipFormatterComponent
        measure={{ accessor: 'test' }}
        value={100}
        name={'value'}
        options={{ dataKey: 'test' }}
      />
    );
    cy.findByText('100').should('be.visible');
  });

  it('should not crash on invalid formatter', () => {
    cy.mount(
      <TooltipFormatterComponent
        measure={{ accessor: 'test', formatter: 'abc' }}
        value={100}
        name={'value'}
        options={{ dataKey: 'test' }}
      />
    );
    cy.findByText('100').should('be.visible');
  });

  it('should format the value with a valid formatter', () => {
    cy.mount(
      <TooltipFormatterComponent
        measure={{ accessor: 'test', formatter: (val) => val / 10 }}
        value={100}
        name={'value'}
        options={{ dataKey: 'test' }}
      />
    );
    cy.findByText('10').should('be.visible');
  });
});
