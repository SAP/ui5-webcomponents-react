import { useState, cloneElement } from 'react';
import {
  FilterGroupItem,
  Input,
  MultiInput,
  RatingIndicator,
  Select,
  StepInput,
  Switch,
  Token,
  Option,
  MultiComboBox,
  MultiComboBoxItem,
  ComboBox,
  ComboBoxItem,
  DateRangePicker,
  FilterBar
} from '../..';

const generateFilterKey = (label, uniqueId) => `${label.replace(/\s+/g, '').toLowerCase()}-${uniqueId}`;

const TestComp = (args) => {
  const initialChildren = [
    <FilterGroupItem key="1" label="StepInput" required filterKey={generateFilterKey('StepInput', 1)} orderId={1}>
      <StepInput required />
    </FilterGroupItem>,
    <FilterGroupItem
      required
      key="2"
      label="RatingIndicator"
      filterKey={generateFilterKey('RatingIndicator', 2)}
      orderId={2}
    >
      <RatingIndicator />
    </FilterGroupItem>,
    <FilterGroupItem key="3" label="MultiInput" active filterKey={generateFilterKey('MultiInput', 3)} orderId={3}>
      <MultiInput
        tokens={
          <>
            <Token text="Argentina" selected />
            <Token text="Bulgaria" />
            <Token text="England" />
            <Token text="Finland" />
          </>
        }
      />
    </FilterGroupItem>,
    <FilterGroupItem key="4" label="Input" hiddenInFilterBar filterKey={generateFilterKey('Input', 4)} orderId={4}>
      <Input placeholder="Placeholder" />
    </FilterGroupItem>,
    <FilterGroupItem key="5" label="Switch" filterKey={generateFilterKey('Switch', 5)} orderId={5}>
      <Switch />
    </FilterGroupItem>,
    <FilterGroupItem
      key="6"
      label="SELECT w/ initial selected"
      hiddenInFilterBar
      filterKey={generateFilterKey('SELECTwInitialSelected', 6)}
      orderId={6}
    >
      <Select>
        <Option>Option 1</Option>
        <Option selected>Option 2</Option>
        <Option>Option 3</Option>
        <Option>Option 4</Option>
      </Select>
    </FilterGroupItem>,
    <FilterGroupItem
      key="7"
      label="SELECT w/o initial selected"
      filterKey={generateFilterKey('SELECTwoInitialSelected', 7)}
      orderId={7}
    >
      <Select>
        <Option data-key="Test 1" selected icon="add">
          Test 1
        </Option>
        <Option data-key="Test 2" icon="add">
          Test 2
        </Option>
        <Option data-key="Test 3" icon="add">
          Test 3
        </Option>
        <Option data-key="Test 4" icon="add">
          Test 4
        </Option>
        <Option data-key="Test 5" icon="add">
          Test 5
        </Option>
      </Select>
    </FilterGroupItem>,
    <FilterGroupItem
      key="8"
      label="MultBox w/ initial selected"
      groupName="Group 1"
      filterKey={generateFilterKey('MultBoxwInitialSelected', 8)}
      orderId={8}
    >
      <MultiComboBox>
        <MultiComboBoxItem text="MultiComboBoxItem 1" />
        <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
        <MultiComboBoxItem text="MultiComboBoxItem 3" />
        <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
      </MultiComboBox>
    </FilterGroupItem>,
    <FilterGroupItem
      key="9"
      label="ComboBox w/o initial selected"
      groupName="Group 2"
      filterKey={generateFilterKey('ComboBoxwoInitialSelected', 9)}
      orderId={9}
    >
      <ComboBox>
        <ComboBoxItem text="ComboBoxItem 1" />
        <ComboBoxItem text="ComboBoxItem 2" />
        <ComboBoxItem text="ComboBoxItem 3" />
        <ComboBoxItem text="ComboBoxItem 4" />
      </ComboBox>
    </FilterGroupItem>,
    <FilterGroupItem
      key="10"
      label="Date Picker"
      groupName="Group 2"
      filterKey={generateFilterKey('DatePicker', 10)}
      orderId={10}
    >
      <DateRangePicker style={{ minWidth: 'auto' }} />
    </FilterGroupItem>
  ];

  const [children, setChildren] = useState(initialChildren.slice(0, 123123));

  const shuffleChildren = () => {
    setChildren((prevChildren) => {
      return [...prevChildren]
        .sort(() => Math.random() - 0.5)
        .map((child, index) => cloneElement(child, { orderId: index + 1 }));
    });
  };

  const addRandomChild = () => {
    const newChild = initialChildren[Math.floor(Math.random() * initialChildren.length)];
    const newKey = Math.random().toString(36).substr(2, 9); // Generates a random unique key
    const newFilterKey = generateFilterKey(newChild.props.label, newKey);
    const newOrderId = children.length + 1;
    setChildren((prevChildren) => [
      ...prevChildren,
      cloneElement(newChild, { key: newKey, filterKey: newFilterKey, orderId: newOrderId })
    ]);
  };

  const removeRandomChild = () => {
    if (children.length > 0) {
      const randomIndex = Math.floor(Math.random() * children.length);
      setChildren((prevChildren) =>
        prevChildren
          .filter((_, index) => index !== randomIndex)
          .map((child, index) => cloneElement(child, { orderId: index + 1 }))
      );
    }
  };

  const toggleSecondItemVisibility = () => {
    setChildren((prevChildren) =>
      prevChildren.map((child, index) => {
        if (index === 1) {
          return cloneElement(child, { hiddenInFilterBar: !child.props.hiddenInFilterBar });
        }
        return child;
      })
    );
  };

  const toggleThirdItemVisibility = () => {
    setChildren((prevChildren) =>
      prevChildren.map((child, index) => {
        if (index === 2) {
          return cloneElement(child, { hiddenInFilterBar: !child.props.hiddenInFilterBar });
        }
        return child;
      })
    );
  };

  return (
    <div>
      <div>
        <button onClick={shuffleChildren}>Shuffle Children</button>
        <button onClick={addRandomChild}>Add Random Child</button>
        <button onClick={removeRandomChild}>Remove Random Child</button>
        <button onClick={toggleSecondItemVisibility}>Toggle Second Item Visibility</button>
        <button onClick={toggleThirdItemVisibility}>Toggle Third Item Visibility</button>
      </div>
      <FilterBar
        {...args}
        enableReordering
        showResetButton
        onFiltersDialogSelectionChange={console.log}
        onFiltersDialogSave={(e) => console.log(e.detail)}
        onRestore={console.log}
      >
        {children}
      </FilterBar>
    </div>
  );
};

export default TestComp;
