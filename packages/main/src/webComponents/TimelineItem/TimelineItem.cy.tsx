import { TimelineItem } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('TimelineItem', () => {
  it('Basic Test (generated)', () => {
    cy.mount(<TimelineItem />);
    cy.get('[ui5-timeline-item]').should('exist');
  });

  cypressPassThroughTestsFactory(TimelineItem);
});
