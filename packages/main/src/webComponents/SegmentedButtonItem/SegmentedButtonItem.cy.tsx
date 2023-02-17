import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { SegmentedButtonItem } from './index';

describe('SegmentedButtonItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<SegmentedButtonItem />);
    cy.get('[ui5-segmented-button-item]').should('exist');
  });

  cypressPassThroughTestsFactory(SegmentedButtonItem);
});
