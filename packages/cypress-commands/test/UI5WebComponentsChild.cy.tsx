import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import {
  CheckBox,
  ComboBox,
  ComboBoxItem,
  CustomListItem,
  Input,
  List,
  MultiComboBox,
  MultiComboBoxItem,
  Option,
  RadioButton,
  Select,
  StandardListItem,
  SuggestionItem,
  Switch,
  Tab,
  TabContainer,
  TextArea
} from '@ui5/webcomponents-react';

describe('UI5 Web Components - Child Commands', () => {
  it('clickUi5Tab', () => {
    cy.mount(
      <TabContainer>
        <Tab data-testId="tab1" text={'Tab 1'} selected>
          Tab 2
        </Tab>
        <Tab data-testId="tab2" text={'Tab 2'}>
          <div>Tab 2</div>
        </Tab>
      </TabContainer>
    );

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Tab 2').click();
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

  it('clearUi5Input', () => {
    cy.mount(<Input data-testId={'input'} value="Hello World" />);
    cy.findByTestId('input').clearUi5Input();
    cy.findByTestId('input').should('have.attr', 'value', '');
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

  // TODO figure out how to re-enable this test. Currently the popover directly closes after any interaction with the component.
  it.skip('show suggestions of ComboBox', () => {
    cy.mount(
      <ComboBox data-testid="CB">
        <ComboBoxItem text="Item 1" />
        <ComboBoxItem text="Item 2" />
        <ComboBoxItem text="Other item 1" />
      </ComboBox>
    );
    cy.get(`[data-testid="CB"]`).typeIntoUi5InputWithDelay('i');
    cy.get('ui5-responsive-popover').should('have.attr', 'open');
  });

  it('show suggestions of MultiComboBox', () => {
    cy.mount(
      <MultiComboBox data-testid="MCB" key={1}>
        <MultiComboBoxItem text="Item 1"></MultiComboBoxItem>
        <MultiComboBoxItem text="Item 2"></MultiComboBoxItem>
      </MultiComboBox>
    );
    cy.get(`[data-testid="MCB"]`).typeIntoUi5InputWithDelay('i');
    cy.get('ui5-responsive-popover').should('have.attr', 'open');
  });

  it('show suggestions of Input', () => {
    cy.mount(
      <Input showSuggestions data-testid="Input" key={2}>
        <SuggestionItem text="Item 1" />
        <SuggestionItem text="Item 2" />
      </Input>
    );
    cy.get(`[data-testid="Input"]`).typeIntoUi5InputWithDelay('i');
    cy.get('ui5-responsive-popover').should('have.attr', 'open');
  });

  it('click Option of Select', () => {
    const select = cy.spy().as('select');
    cy.mount(
      <Select onChange={select}>
        <Option>Test1</Option>
        <Option>Test2</Option>
        <Option>Test3</Option>
        <Option data-testid="4">Test4</Option>
        <Option data-testid="5">Test5</Option>
      </Select>
    );
    cy.get('[ui5-select]').click();
    cy.get('[ui5-select]').clickUi5SelectOptionByText('Test2');
    cy.get('@select').should('have.been.calledOnce');
    cy.get('[ui5-select]').clickUi5SelectOptionByText('Test3', { force: true });
    // the web component doesn't fire the event if the popover is not opened
    cy.get('@select').should('have.been.calledOnce');

    cy.get('[ui5-select]').click();
    cy.findByTestId('5').clickUi5SelectOption();
    cy.get('@select').should('have.been.calledTwice');
    cy.findByTestId('4').clickUi5SelectOption({ force: true });
    // the web component doesn't fire the event if the popover is not opened
    cy.get('@select').should('have.been.calledTwice');
  });

  it('clickDropdownMenuItemByText', () => {
    const selectItemText =
      'This very long item should be selected by first focusing it and then pressing it. A focus is applied first, because otherwise it wouldnt be visible. Strangely, longer items tend to result in occasional test failures compared to smaller ones, which is why this item has this text.';
    const changeSpy = cy.spy().as('change');
    let callCounter = 1;
    const components = [
      <ComboBox key="ui5-combobox" onSelectionChange={changeSpy}>
        {...new Array(30).fill(<ComboBoxItem text="Item" />)}
        <ComboBoxItem text={selectItemText} />
      </ComboBox>,
      <MultiComboBox key="ui5-multi-combobox" onSelectionChange={changeSpy}>
        {...new Array(30).fill(<MultiComboBoxItem text="Item" />)}
        <MultiComboBoxItem text={selectItemText} />
      </MultiComboBox>,
      <Select key="ui5-select" onChange={changeSpy}>
        {...new Array(30).fill(<Option>Item</Option>)}
        <Option>{selectItemText}</Option>
      </Select>
    ];

    components.forEach((component) => {
      cy.mount(component);
      cy.get(`[${component.key}]`).openDropDownByClick();
      cy.get(`[${component.key}]`).clickDropdownMenuItemByText(selectItemText);

      switch (component.key) {
        case 'ui5-combobox':
          cy.get(`[${component.key}]`).should('have.value', selectItemText);
          break;
        case 'ui5-multi-combobox':
          cy.get(`[${component.key}]`).find('[ui5-token]').contains(selectItemText);
          break;
        case 'ui5-select':
          cy.get(`[${component.key}]`).should('have.value', selectItemText);
          break;
      }

      cy.get('@change').should('have.callCount', callCounter);
      callCounter++;
      cy.wait(200);
    });
  });

  it('clickDropDownMenuItem', () => {
    const selectItemText = 'Select me';
    const changeSpy = cy.spy().as('change');
    let callCounter = 1;
    const components = [
      <ComboBox key="ui5-combobox" onSelectionChange={changeSpy}>
        {...new Array(5).fill(<ComboBoxItem text="Item" />)}
        <ComboBoxItem text={selectItemText} data-testid="selectItem" />
      </ComboBox>,
      <MultiComboBox key="ui5-multi-combobox" onSelectionChange={changeSpy}>
        {...new Array(5).fill(<MultiComboBoxItem text="Item" />)}
        <MultiComboBoxItem text={selectItemText} data-testid="selectItem" />
      </MultiComboBox>,
      <Select key="ui5-select" onChange={changeSpy}>
        {...new Array(5).fill(<Option>Item</Option>)}
        <Option data-testid="selectItem">{selectItemText}</Option>
      </Select>
    ];

    components.forEach((component) => {
      cy.mount(component);
      cy.get(`[${component.key}]`).openDropDownByClick();
      cy.get('[ui5-responsive-popover][open]').should('be.visible');
      cy.get(`[data-testid="selectItem"]`).clickDropdownMenuItem();

      switch (component.key) {
        case 'ui5-combobox':
          cy.get(`[${component.key}]`).should('have.value', selectItemText);
          break;
        case 'ui5-multi-combobox':
          cy.get(`[${component.key}]`).find('[ui5-token]').contains(selectItemText);
          break;
        case 'ui5-select':
          cy.get(`[${component.key}]`).should('have.value', selectItemText);
          break;
      }

      cy.get('@change').should('have.callCount', callCounter);
      callCounter++;
      cy.wait(200);
    });
  });
});
