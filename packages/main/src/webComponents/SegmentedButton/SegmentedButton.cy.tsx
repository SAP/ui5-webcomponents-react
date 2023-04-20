import { SegmentedButtonItem } from '../SegmentedButtonItem';
import { SegmentedButton } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

describe('SegmentedButton', () => {
  it('Basic Test (generated)', () => {
    cy.mount(
      <SegmentedButton>
        <SegmentedButtonItem>Segment 1</SegmentedButtonItem>
        <SegmentedButtonItem>Segment 2</SegmentedButtonItem>
        <SegmentedButtonItem>Segment 3</SegmentedButtonItem>
      </SegmentedButton>
    );
    cy.get('[ui5-segmented-button]').should('exist');
  });

  cypressPassThroughTestsFactory(SegmentedButton);
});
