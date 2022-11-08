import React from 'react';
import { VariantManagement } from './index';
import { VariantItem } from './VariantItem';

const TwoVariantItems = [
  <VariantItem key="0">VariantItem 1</VariantItem>,
  <VariantItem selected key="1">
    VariantItem 2
  </VariantItem>
];

describe('VariantManagement', () => {
  it('render btn with tooltip', () => {
    cy.mount(<VariantManagement />);
    cy.get('[ui5-button]').shadow().findByTitle('Select view').should('be.visible');
  });

  it('two children', () => {
    cy.mount(<VariantManagement>{TwoVariantItems}</VariantManagement>);
    cy.get('[tooltip="Select view"]').click();

    cy.findByText('VariantItem 1').should('be.visible');
    cy.findAllByText('VariantItem 2').should('have.length', 2);
  });
});
