import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { TimelineItem } from './index';

describe('TimelineItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TimelineItem />);
    cy.get('[ui5-timeline-item]').should('exist');
  });

  cypressPassThroughTestsFactory(TimelineItem);
});
