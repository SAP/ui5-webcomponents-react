import type { TooltipLabelFormatter } from '../interfaces/index.js';
import { useLabelFormatter } from './useLabelFormatter.js';

function LabelFormatterComponent({ formatter }: { formatter?: TooltipLabelFormatter | string }) {
  const val = useLabelFormatter(formatter as any);
  return <span>{val(100, undefined)}</span>;
}

describe('useLabelFormatter', () => {
  it('should return value when no formatter is present', () => {
    cy.mount(<LabelFormatterComponent formatter={null} />);
    cy.findByText('100').should('be.visible');
  });

  it('should not crash on invalid formatter', () => {
    cy.mount(<LabelFormatterComponent formatter={'abc'} />);
    cy.findByText('100').should('be.visible');
  });

  it('should format the value with a valid formatter', () => {
    cy.mount(<LabelFormatterComponent formatter={(val) => val / 10} />);
    cy.findByText('10').should('be.visible');
  });
});
