import { FlexBoxJustifyContent, FlexBoxAlignItems, FlexBoxDirection, FlexBoxWrap } from '../../enums';
import { camelToKebabCase, lowercaseFirstLetter } from '../../internal/utils';
import { FlexBox } from './index';
import { cypressPassThroughTestsFactory, mountWithCustomTagName } from '@/cypress/support/utils';

describe('FlexBox', () => {
  Object.values(FlexBoxJustifyContent).forEach((val) => {
    it(`JustifyContent: ${val}`, () => {
      cy.mount(
        <FlexBox justifyContent={val} data-testid="flexbox">
          <span>Test 1</span>
        </FlexBox>
      );
      let cssVal;
      switch (val) {
        case 'Start':
          cssVal = 'flex-start';
          break;
        case 'End':
          cssVal = 'flex-end';
          break;
        default:
          cssVal = camelToKebabCase(lowercaseFirstLetter(val));
      }
      cy.findByTestId('flexbox').should('have.css', 'justify-content', cssVal);
    });
  });

  Object.values(FlexBoxAlignItems).forEach((val) => {
    it(`AlignItems: ${val}`, () => {
      cy.mount(
        <FlexBox alignItems={val} data-testid="flexbox">
          <span>Test 1</span>
        </FlexBox>
      );
      let cssVal;
      switch (val) {
        case 'Start':
          cssVal = 'flex-start';
          break;
        case 'End':
          cssVal = 'flex-end';
          break;
        default:
          cssVal = camelToKebabCase(lowercaseFirstLetter(val));
      }
      cy.findByTestId('flexbox').should('have.css', 'align-items', cssVal);
    });
  });

  Object.values(FlexBoxDirection).forEach((val) => {
    it(`AlignItems: ${val}`, () => {
      cy.mount(
        <FlexBox direction={val} data-testid="flexbox">
          <span>Test 1</span>
        </FlexBox>
      );
      const cssVal = camelToKebabCase(lowercaseFirstLetter(val));
      cy.findByTestId('flexbox').should('have.css', 'flex-direction', cssVal);
    });
  });

  Object.values(FlexBoxWrap).forEach((val) => {
    it(`wrap: ${val}`, () => {
      cy.mount(
        <FlexBox wrap={val} data-testid="flexbox">
          <span>Test 1</span>
        </FlexBox>
      );
      const cssVal = camelToKebabCase(lowercaseFirstLetter(val));
      cy.findByTestId('flexbox').should('have.css', 'flex-wrap', cssVal === 'no-wrap' ? 'nowrap' : cssVal);
    });
  });

  it('displayInline & fitContainer', () => {
    cy.mount(
      <FlexBox data-testid="flexbox">
        <span>Test 1</span>
      </FlexBox>
    );
    cy.findByTestId('flexbox').should('have.css', 'display', 'flex');

    cy.mount(
      <div style={{ width: '200px', height: '200px' }}>
        <FlexBox data-testid="flexbox" fitContainer displayInline>
          <span>Test 1</span>
        </FlexBox>
      </div>
    );
    cy.findByTestId('flexbox')
      .should('have.css', 'display', 'inline-flex')
      .should('have.css', 'width', '200px')
      .should('have.css', 'height', '200px');
  });

  mountWithCustomTagName(FlexBox, { children: <span>Test 1</span> });
  cypressPassThroughTestsFactory(FlexBox);
});
