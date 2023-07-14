import { ThemingParameters } from '@ui5/webcomponents-react-base';
import type { ValueState, IndicationColor } from '../../enums/index.js';
import { Icon } from '../../webComponents/index.js';
import { ObjectStatus } from './index.js';
import { cssVarToRgb, cypressPassThroughTestsFactory } from '@/cypress/support/utils';

const statesWithCSSVars: {
  state: ValueState | keyof typeof ValueState | IndicationColor | keyof typeof IndicationColor;
  color: string;
  iconColor: string;
  hasDefaultIcon?: true;
  inverted: { color: string; iconColor: string; backgroundColor: string };
}[] = [
  {
    state: 'Error',
    color: ThemingParameters.sapNegativeTextColor,
    iconColor: ThemingParameters.sapNegativeElementColor,
    hasDefaultIcon: true,
    inverted: {
      color: ThemingParameters.sapButton_Negative_TextColor,
      backgroundColor: ThemingParameters.sapButton_Negative_Background,
      iconColor: ThemingParameters.sapButton_Negative_TextColor
    }
  },
  {
    state: 'None',
    color: ThemingParameters.sapNeutralTextColor,
    iconColor: ThemingParameters.sapNeutralElementColor,
    inverted: {
      color: ThemingParameters.sapButton_Neutral_TextColor,
      backgroundColor: ThemingParameters.sapButton_Neutral_Background,
      iconColor: ThemingParameters.sapButton_Neutral_TextColor
    }
  },
  {
    state: 'Success',
    color: ThemingParameters.sapPositiveTextColor,
    iconColor: ThemingParameters.sapPositiveElementColor,
    hasDefaultIcon: true,
    inverted: {
      color: ThemingParameters.sapButton_Success_TextColor,
      backgroundColor: ThemingParameters.sapButton_Success_Background,
      iconColor: ThemingParameters.sapButton_Success_TextColor
    }
  },
  {
    state: 'Warning',
    color: ThemingParameters.sapCriticalTextColor,
    iconColor: ThemingParameters.sapCriticalElementColor,
    hasDefaultIcon: true,
    inverted: {
      color: ThemingParameters.sapButton_Critical_TextColor,
      backgroundColor: ThemingParameters.sapButton_Critical_Background,
      iconColor: ThemingParameters.sapButton_Critical_TextColor
    }
  },
  {
    state: 'Information',
    color: ThemingParameters.sapInformativeTextColor,
    iconColor: ThemingParameters.sapInformativeTextColor,
    hasDefaultIcon: true,
    inverted: {
      color: ThemingParameters.sapButton_Information_TextColor,
      backgroundColor: ThemingParameters.sapButton_Information_Background,
      iconColor: ThemingParameters.sapButton_Information_TextColor
    }
  },
  {
    state: 'Indication01',
    color: ThemingParameters.sapIndicationColor_1,
    iconColor: ThemingParameters.sapIndicationColor_1,
    inverted: {
      color: ThemingParameters.sapIndicationColor_1_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_1,
      iconColor: ThemingParameters.sapIndicationColor_1_TextColor
    }
  },
  {
    state: 'Indication02',
    color: ThemingParameters.sapIndicationColor_2,
    iconColor: ThemingParameters.sapIndicationColor_2,
    inverted: {
      color: ThemingParameters.sapIndicationColor_2_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_2,
      iconColor: ThemingParameters.sapIndicationColor_2_TextColor
    }
  },
  {
    state: 'Indication03',
    color: ThemingParameters.sapIndicationColor_3,
    iconColor: ThemingParameters.sapIndicationColor_3,
    inverted: {
      color: ThemingParameters.sapIndicationColor_3_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_3,
      iconColor: ThemingParameters.sapIndicationColor_3_TextColor
    }
  },
  {
    state: 'Indication04',
    color: ThemingParameters.sapIndicationColor_4,
    iconColor: ThemingParameters.sapIndicationColor_4,
    inverted: {
      color: ThemingParameters.sapIndicationColor_4_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_4,
      iconColor: ThemingParameters.sapIndicationColor_4_TextColor
    }
  },
  {
    state: 'Indication05',
    color: ThemingParameters.sapIndicationColor_5,
    iconColor: ThemingParameters.sapIndicationColor_5,
    inverted: {
      color: ThemingParameters.sapIndicationColor_5_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_5,
      iconColor: ThemingParameters.sapIndicationColor_5_TextColor
    }
  },
  {
    state: 'Indication06',
    color: ThemingParameters.sapIndicationColor_6,
    iconColor: ThemingParameters.sapIndicationColor_6,
    inverted: {
      color: ThemingParameters.sapIndicationColor_6_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_6,
      iconColor: ThemingParameters.sapIndicationColor_6_TextColor
    }
  },
  {
    state: 'Indication07',
    color: ThemingParameters.sapIndicationColor_7,
    iconColor: ThemingParameters.sapIndicationColor_7,
    inverted: {
      color: ThemingParameters.sapIndicationColor_7_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_7,
      iconColor: ThemingParameters.sapIndicationColor_7_TextColor
    }
  },
  {
    state: 'Indication08',
    color: ThemingParameters.sapIndicationColor_8,
    iconColor: ThemingParameters.sapIndicationColor_8,
    inverted: {
      color: ThemingParameters.sapIndicationColor_8_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_8,
      iconColor: ThemingParameters.sapIndicationColor_8_TextColor
    }
  }
];

describe('ObjectStatus', () => {
  statesWithCSSVars.forEach((stateObj) => {
    it(`${stateObj.state} + inverted + icon`, () => {
      const rgbValColorString = cssVarToRgb(stateObj.color);
      const rgbValColorIconString = cssVarToRgb(stateObj.iconColor);
      const invertedRgbValColorString = cssVarToRgb(stateObj.inverted.color);
      const invertedRgbValColorIconString = cssVarToRgb(stateObj.inverted.iconColor);
      const invertedRgbValBackgroundString = cssVarToRgb(stateObj.inverted.backgroundColor);
      [{ inverted: false }, { inverted: true }].forEach((item) => {
        if (stateObj.hasDefaultIcon) {
          cy.mount(
            <ObjectStatus data-testid="os" state={stateObj.state} showDefaultIcon inverted={item.inverted}>
              Content
            </ObjectStatus>
          );
          if (!item.inverted) {
            cy.findByText('Content').should('have.css', 'color', rgbValColorString);
            cy.findByTestId('os')
              .find('[data-component-name="ObjectStatusDefaultIcon"]')
              .should('have.css', 'color', rgbValColorIconString);
          } else {
            cy.findByText('Content').should('have.css', 'color', invertedRgbValColorString);
            cy.findByTestId('os').should('have.css', 'background-color', invertedRgbValBackgroundString);
            cy.findByTestId('os')
              .find('[data-component-name="ObjectStatusDefaultIcon"]')
              .should('have.css', 'color', invertedRgbValColorIconString);
          }
        }
        cy.mount(
          <ObjectStatus
            data-testid="os"
            state={stateObj.state}
            showDefaultIcon
            // should overwrite default icon
            icon={<Icon name="employee" data-testid="icon" />}
            inverted={item.inverted}
          >
            Content
          </ObjectStatus>
        );
        if (!item.inverted) {
          cy.findByText('Content').should('have.css', 'color', rgbValColorString);
          cy.findByTestId('icon').should('have.css', 'color', rgbValColorIconString);
        } else {
          cy.findByText('Content').should('have.css', 'color', invertedRgbValColorString);
          cy.findByTestId('os').should('have.css', 'background-color', invertedRgbValBackgroundString);
          cy.findByTestId('icon').should('have.css', 'color', invertedRgbValColorIconString);
        }
      });
    });
  });

  it('active', () => {
    const click = cy.spy().as('clickSpy');
    cy.mount(<ObjectStatus onClick={click}>Content</ObjectStatus>);
    cy.findByText('Content').click();
    cy.get('@clickSpy').should('not.be.called');

    cy.mount(
      <ObjectStatus onClick={click} active>
        Content
      </ObjectStatus>
    );
    cy.findByText('Content').click();
    cy.get('@clickSpy').should('have.been.calledOnce');
  });

  cypressPassThroughTestsFactory(ObjectStatus);
});
