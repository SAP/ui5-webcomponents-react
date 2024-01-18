import {
  VALUE_STATE_ERROR,
  VALUE_STATE_INFORMATION,
  VALUE_STATE_SUCCESS,
  VALUE_STATE_WARNING
} from '@ui5/webcomponents/dist/generated/i18n/i18n-defaults.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import type { IndicationColor } from '../../enums/index.js';
import { ValueState } from '../../enums/index.js';
import { INDICATION_COLOR } from '../../i18n/i18n-defaults.js';
import { Icon } from '../../webComponents/index.js';
import { ObjectStatus } from './index.js';
import { cssVarToRgb, cypressPassThroughTestsFactory } from '@/cypress/support/utils';

const statesWithCSSVars: {
  state: ValueState | keyof typeof ValueState | IndicationColor | keyof typeof IndicationColor;
  color: string;
  iconColor: string;
  hasDefaultIcon?: true;
  inverted: { color: string; iconColor: string; backgroundColor: string };
  hiddenText: undefined | string;
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
    },
    hiddenText: VALUE_STATE_ERROR.defaultText
  },
  {
    state: 'None',
    color: ThemingParameters.sapNeutralTextColor,
    iconColor: ThemingParameters.sapNeutralElementColor,
    inverted: {
      color: ThemingParameters.sapTextColor,
      backgroundColor: ThemingParameters.sapNeutralBackground,
      iconColor: ThemingParameters.sapButton_Neutral_TextColor
    },
    hiddenText: undefined
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
    },
    hiddenText: VALUE_STATE_SUCCESS.defaultText
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
    },
    hiddenText: VALUE_STATE_WARNING.defaultText
  },
  {
    state: 'Information',
    color: ThemingParameters.sapInformativeTextColor,
    iconColor: ThemingParameters.sapInformativeElementColor,
    hasDefaultIcon: true,
    inverted: {
      color: ThemingParameters.sapButton_Information_TextColor,
      backgroundColor: ThemingParameters.sapButton_Information_Background,
      iconColor: ThemingParameters.sapButton_Information_TextColor
    },
    hiddenText: VALUE_STATE_INFORMATION.defaultText
  },
  {
    state: 'Indication01',
    color: ThemingParameters.sapIndicationColor_1,
    iconColor: ThemingParameters.sapIndicationColor_1,
    inverted: {
      color: ThemingParameters.sapIndicationColor_1_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_1_Background,
      iconColor: ThemingParameters.sapIndicationColor_1_TextColor
    },
    hiddenText: `${INDICATION_COLOR.defaultText} 1`
  },
  {
    state: 'Indication02',
    color: ThemingParameters.sapIndicationColor_2,
    iconColor: ThemingParameters.sapIndicationColor_2,
    inverted: {
      color: ThemingParameters.sapIndicationColor_2_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_2_Background,
      iconColor: ThemingParameters.sapIndicationColor_2_TextColor
    },
    hiddenText: `${INDICATION_COLOR.defaultText} 2`
  },
  {
    state: 'Indication03',
    color: ThemingParameters.sapIndicationColor_3,
    iconColor: ThemingParameters.sapIndicationColor_3,
    inverted: {
      color: ThemingParameters.sapIndicationColor_3_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_3_Background,
      iconColor: ThemingParameters.sapIndicationColor_3_TextColor
    },
    hiddenText: `${INDICATION_COLOR.defaultText} 3`
  },
  {
    state: 'Indication04',
    color: ThemingParameters.sapIndicationColor_4,
    iconColor: ThemingParameters.sapIndicationColor_4,
    inverted: {
      color: ThemingParameters.sapIndicationColor_4_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_4_Background,
      iconColor: ThemingParameters.sapIndicationColor_4_TextColor
    },
    hiddenText: `${INDICATION_COLOR.defaultText} 4`
  },
  {
    state: 'Indication05',
    color: ThemingParameters.sapIndicationColor_5,
    iconColor: ThemingParameters.sapIndicationColor_5,
    inverted: {
      color: ThemingParameters.sapIndicationColor_5_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_5_Background,
      iconColor: ThemingParameters.sapIndicationColor_5_TextColor
    },
    hiddenText: `${INDICATION_COLOR.defaultText} 5`
  },
  {
    state: 'Indication06',
    color: ThemingParameters.sapIndicationColor_6,
    iconColor: ThemingParameters.sapIndicationColor_6,
    inverted: {
      color: ThemingParameters.sapIndicationColor_6_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_6_Background,
      iconColor: ThemingParameters.sapIndicationColor_6_TextColor
    },
    hiddenText: `${INDICATION_COLOR.defaultText} 6`
  },
  {
    state: 'Indication07',
    color: ThemingParameters.sapIndicationColor_7,
    iconColor: ThemingParameters.sapIndicationColor_7,
    inverted: {
      color: ThemingParameters.sapIndicationColor_7_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_7_Background,
      iconColor: ThemingParameters.sapIndicationColor_7_TextColor
    },
    hiddenText: `${INDICATION_COLOR.defaultText} 7`
  },
  {
    state: 'Indication08',
    color: ThemingParameters.sapIndicationColor_8,
    iconColor: ThemingParameters.sapIndicationColor_8,
    inverted: {
      color: ThemingParameters.sapIndicationColor_8_TextColor,
      backgroundColor: ThemingParameters.sapIndicationColor_8_Background,
      iconColor: ThemingParameters.sapIndicationColor_8_TextColor
    },
    hiddenText: `${INDICATION_COLOR.defaultText} 8`
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
        if (stateObj.hiddenText) {
          cy.findByText(stateObj.hiddenText).should('exist').and('not.be.visible');
        }
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
    cy.mount(
      <ObjectStatus onClick={click} data-testid="os">
        Content
      </ObjectStatus>
    );
    cy.get('button').should('not.exist');
    cy.findByText('Content').click();
    cy.get('@clickSpy').should('not.be.called');
    cy.findByRole('button').should('not.exist');
    cy.findByText('Object Status').should('exist').and('not.be.visible');

    cy.mount(
      <ObjectStatus onClick={click} active>
        Content
      </ObjectStatus>
    );
    cy.get('button').should('be.visible');
    cy.findByText('Content').click();
    cy.get('@clickSpy').should('have.been.calledOnce');
    cy.findByText('Content').realPress('Enter');
    cy.get('@clickSpy').should('have.been.calledTwice');
    cy.findByText('Content').realPress('Space');
    cy.get('@clickSpy').should('have.been.calledThrice');
    cy.findByText('Object Status Button').should('exist').and('not.be.visible');
  });

  it('emptyIndicator', () => {
    cy.mount(<ObjectStatus data-testid="os" />);
    cy.findByTestId('os').children().should('have.length', 1);
    cy.mount(<ObjectStatus data-testid="os" emptyIndicator />);
    cy.findByTestId('os').children().should('have.length', 2);
    cy.findByText('–').should('be.visible');
  });

  it('stateAnnouncementText', () => {
    cy.mount(
      <ObjectStatus data-testid="os" state={ValueState.Error} stateAnnouncementText="Custom Text">
        Content
      </ObjectStatus>
    );
    cy.findByText(VALUE_STATE_ERROR.defaultText).should('not.exist');
    cy.findByText('Custom Text').should('exist').and('not.be.visible');
  });

  it('large', () => {
    cy.mount(
      <ObjectStatus large data-testid="os" state={ValueState.Error} showDefaultIcon>
        Content
      </ObjectStatus>
    );
    cy.findByTestId('os').should('have.css', 'font-size', '24px');
    cy.get('[ui5-icon]').should('have.css', 'height', '24px');
    cy.mount(
      <ObjectStatus large data-testid="os" state={ValueState.Error} showDefaultIcon inverted>
        Content
      </ObjectStatus>
    );
    cy.findByTestId('os').should('have.css', 'font-size', '20px');
    cy.get('[ui5-icon]').should('have.css', 'height', '20px');
    cy.mount(<ObjectStatus large data-testid="os" state={ValueState.Error} showDefaultIcon inverted />);
    cy.findByTestId('os').should('have.css', 'font-size', '20px');
    cy.get('[ui5-icon]').should('have.css', 'height', '24px');
  });

  cypressPassThroughTestsFactory(ObjectStatus);
});
