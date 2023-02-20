import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';
import { Avatar } from '../Avatar';
import { AvatarGroup } from './index';

describe('AvatarGroup', () => {
  it('Basic Test (generated)', () => {
    cy.mount(
      <AvatarGroup>
        <Avatar initials="UI5" />
      </AvatarGroup>
    );
    cy.get('[ui5-avatar-group]').should('exist');
  });

  cypressPassThroughTestsFactory(AvatarGroup, { children: <Avatar initials="UI5" /> });
});
