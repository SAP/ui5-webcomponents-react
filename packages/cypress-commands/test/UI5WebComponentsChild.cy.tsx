import {
  CheckBox,
  CustomListItem,
  Input,
  List,
  RadioButton,
  StandardListItem,
  Switch,
  Tab,
  TabContainer,
  TextArea
} from '@ui5/webcomponents-react';

describe('UI5 Web Components - Child Commands', () => {
  it('clickUi5Tab', () => {
    cy.mount(
      <TabContainer data-testId={'tabContainer'}>
        <Tab data-testId="tab1" text={'Tab 1'} selected>
          Tab 2
        </Tab>
        <Tab data-testId="tab2" text={'Tab 2'}>
          <div>Tab 2</div>
        </Tab>
      </TabContainer>
    );

    cy.findByTestId('tabContainer').findUi5TabByText('Tab 2').click();
    cy.findByTestId('tab1').should('not.have.attr', 'selected');
    cy.findByTestId('tab2').should('have.attr', 'selected');
  });

  it('openUi5TabPopoverByClick', () => {
    cy.mount(
      <TabContainer data-testId={'tabContainer'}>
        <Tab data-testId="tab1" text={'Tab 1'} />
        <Tab
          data-testId="tab2"
          text={'Tab 2'}
          subTabs={
            <>
              <Tab data-testId="tab2.1" text={'Tab 2.1'}>
                Tab 2.1
              </Tab>
              <Tab data-testId="tab2.2" text={'Tab 2.2'}>
                <div>Tab 2.2</div>
              </Tab>
            </>
          }
        >
          Tab 2
        </Tab>
      </TabContainer>
    );
    cy.findByTestId('tabContainer').findUi5TabOpenPopoverButtonByText('Tab 2').click();
    cy.get('[ui5-static-area-item]').shadow().get('[ui5-list]').findByText('Tab 2.2').should('be.visible');
  });

  it('typeIntoUi5Input', () => {
    cy.mount(<Input data-testId={'input'} />);
    cy.findByTestId('input').typeIntoUi5Input('Hello World!');
    cy.findByTestId('input').should('have.attr', 'value', 'Hello World!');
  });

  it('typeIntoUi5TextArea', () => {
    cy.mount(<TextArea data-testId="textArea" />);

    cy.findByTestId('textArea').typeIntoUi5TextArea('Hello World!');
    cy.findByTestId('textArea').should('have.attr', 'value', 'Hello World!');
  });

  it('toggleUi5Checkbox', () => {
    cy.mount(
      <>
        <div data-testid="div" />
        <CheckBox data-testId="checkbox" />
      </>
    );

    cy.findByTestId('checkbox').toggleUi5Checkbox();
    cy.findByTestId('checkbox').should('have.attr', 'checked');
  });

  it('toggleUi5Switch', () => {
    cy.mount(<Switch data-testId="switch" />);

    cy.findByTestId('switch').toggleUi5Switch();
    cy.findByTestId('switch').should('have.attr', 'checked');

    cy.findByTestId('switch').toggleUi5Switch();
    cy.findByTestId('switch').should('not.have.attr', 'checked');
  });

  it('clickUi5RadioButton', () => {
    cy.mount(
      <>
        <RadioButton data-testId="a" text="A" name="Group1" /> <RadioButton text="B" name="Group1" />{' '}
        <RadioButton data-testId="c" text="C" name="Group1" />
      </>
    );

    cy.findByTestId('a').clickUi5RadioButton();
    cy.findByTestId('a').should('have.attr', 'checked');

    cy.findByTestId('c').clickUi5RadioButton();
    cy.findByTestId('a').should('not.have.attr', 'checked');
    cy.findByTestId('c').should('have.attr', 'checked');
  });

  it('click list item', () => {
    cy.mount(
      <List mode="MultiSelect">
        <StandardListItem data-testid="s">StandardListItem</StandardListItem>
        <CustomListItem data-testid="c">CustomListItem</CustomListItem>
      </List>
    );
    cy.findByText('StandardListItem').click();
    cy.findByTestId('c').click();
  });
});
