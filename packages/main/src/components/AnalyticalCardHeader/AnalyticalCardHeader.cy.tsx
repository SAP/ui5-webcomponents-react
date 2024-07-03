import { getRGBColor } from '@ui5/webcomponents-base/dist/util/ColorConversion';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { DeviationIndicator, ValueColor } from '../../enums';
import type { CardPropTypes } from '../../webComponents/Card/index.js';
import { Card } from '../../webComponents/Card/index.js';
import { Text } from '../../webComponents/Text/index.js';
import { NumericSideIndicator } from '../NumericSideIndicator';
import type { AnalyticalCardHeaderPropTypes } from './index';
import { AnalyticalCardHeader } from './index';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils.js';

const TestComp = (props: Omit<CardPropTypes, 'children'>) => {
  return (
    <Card {...props}>
      <Text>Content</Text>
    </Card>
  );
};

describe('AnalyticalCardHeader', () => {
  it('Render with default AnalyticalCardHeader', () => {
    cy.mount(<TestComp header={<AnalyticalCardHeader titleText="Header Title" />} />);
    cy.findByText('Content').should('be.visible');
    cy.findByText('Header Title').should('be.visible');
  });

  it('Render with custom header', () => {
    cy.mount(<TestComp header={<div>Header Title</div>} />);
    cy.findByText('Content').should('be.visible');
    cy.findByText('Header Title').should('be.visible');
  });

  [
    [ValueColor.Error, ThemingParameters.sapNegativeTextColor],
    [ValueColor.Critical, ThemingParameters.sapCriticalTextColor],
    [ValueColor.Good, ThemingParameters.sapPositiveTextColor],
    [ValueColor.Neutral, ThemingParameters.sapNeutralTextColor]
  ].forEach(([color, cssVar]: [AnalyticalCardHeaderPropTypes['state'], string]) => {
    it(`Header: ValueColor: ${color}`, () => {
      const cssVarValue = getComputedStyle(document.documentElement).getPropertyValue(cssVar.match(/(--)[^)]+/)[0]);
      cy.mount(
        <TestComp header={<AnalyticalCardHeader trend={DeviationIndicator.Down} value="123" state={color} />} />
      );
      const rgbVal = getRGBColor(cssVarValue);
      const rgbValString = `rgb(${rgbVal.r}, ${rgbVal.g}, ${rgbVal.b})`;
      cy.findByText('123').parent().should('have.css', 'color', rgbValString);
    });
  });

  it('Header: all string props', () => {
    cy.mount(
      <TestComp
        header={
          <AnalyticalCardHeader
            titleText="Title"
            subtitleText="Subtitle"
            value="Value"
            unitOfMeasurement="Unit"
            description="Description"
          >
            <NumericSideIndicator titleText="Target" number={100} />
            <NumericSideIndicator titleText="Deviation" number={50} state={ValueColor.Error} />
          </AnalyticalCardHeader>
        }
      />
    );
    cy.findByText('Title').should('be.visible');
    cy.findByText('Subtitle').should('be.visible');
    cy.findByText('Value').should('be.visible');
    cy.findByText('Unit').should('be.visible');
    cy.findByText('Target').should('be.visible');
    cy.findByText('Deviation').should('be.visible');
  });

  it('Header: with arrow indicator', () => {
    cy.mount(<TestComp header={<AnalyticalCardHeader scale="EUR" trend={DeviationIndicator.Down} />} />);
    cy.get('[ui5-icon]').should('have.attr', 'name', 'down');
    cy.mount(<TestComp header={<AnalyticalCardHeader scale="EUR" trend={DeviationIndicator.Up} />} />);
    cy.get('[ui5-icon]').should('have.attr', 'name', 'up');
  });

  cypressPassThroughTestsFactory(AnalyticalCardHeader);
});
