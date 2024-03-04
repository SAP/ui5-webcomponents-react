import type { Meta, StoryObj } from '@storybook/react';
import React, { useId, useReducer, useRef, useState } from 'react';
import { FlexBoxDirection } from '../../enums/index.js';
import {
  ComboBox,
  ComboBoxItem,
  DatePicker,
  DateRangePicker,
  Input,
  Label,
  MultiComboBox,
  MultiComboBoxItem,
  MultiInput,
  Option,
  RatingIndicator,
  Select,
  StepInput,
  Switch,
  Title,
  Token
} from '../../webComponents/index.js';
import { DynamicPage } from '../DynamicPage/index.js';
import { DynamicPageHeader } from '../DynamicPageHeader/index.js';
import { DynamicPageTitle } from '../DynamicPageTitle/index.js';
import { FilterGroupItem } from '../FilterGroupItem/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { Text } from '../Text/index.js';
import { VariantManagement } from '../VariantManagement/index.js';
import { VariantItem } from '../VariantManagement/VariantItem.js';
import { FilterBar } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / FilterBar',
  component: FilterBar,
  args: {
    search: <Input />,
    header: <Title>Test</Title>,
    filterContainerWidth: '13.125rem'
  },
  argTypes: {
    activeFiltersCount: { control: 'number' },
    search: { control: { disable: true } },
    header: { control: { disable: true } },
    children: { control: { disable: true } },
    portalContainer: { control: { disable: true } },
    filterContainerWidth: { control: 'text' },
    as: { control: { disable: true } }
  }
} satisfies Meta<typeof FilterBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <FilterBar {...args}>
        <FilterGroupItem label="StepInput" required>
          <StepInput required />
        </FilterGroupItem>
        <FilterGroupItem label="RatingIndicator">
          <RatingIndicator />
        </FilterGroupItem>
        <FilterGroupItem label="MultiInput" active>
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
        </FilterGroupItem>
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Switch">
          <Switch />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/ initial selected" visibleInFilterBar={false}>
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/o initial selected">
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
        </FilterGroupItem>
        <FilterGroupItem label="MultBox w/ initial selected" groupName="Group 1">
          <MultiComboBox>
            <MultiComboBoxItem text="MultiComboBoxItem 1" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
            <MultiComboBoxItem text="MultiComboBoxItem 3" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="ComboBox w/o initial selected" groupName="Group 2">
          <ComboBox>
            <ComboBoxItem text="ComboBoxItem 1" />
            <ComboBoxItem text="ComboBoxItem 2" />
            <ComboBoxItem text="ComboBoxItem 3" />
            <ComboBoxItem text="ComboBoxItem 4" />
          </ComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Date Picker" groupName="Group 2">
          <DateRangePicker style={{ minWidth: 'auto' }} />
        </FilterGroupItem>
      </FilterBar>
    );
  }
};

const initialState = {
  age: 37,
  countries: {},
  currency: 'USD',
  date: '',
  dateRange: '',
  search: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'SET_COUNTRIES':
      return { ...state, countries: action.payload };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'SET_DATE_RANGE':
      return { ...state, dateRange: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'DIALOG_RESTORE':
      return action.payload;
    default:
      return state;
  }
}

export const WithLogic: Story = {
  render: (args) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { age, countries, currency, date, dateRange, search } = state;
    const prevDialogOpenState = useRef();

    const handleSearch = (e) => {
      dispatch({ type: 'SET_SEARCH', payload: e.target.value });
    };

    const handleAgeChange = (e) => {
      dispatch({ type: 'SET_AGE', payload: e.target.value });
    };

    const handleCountriesChange = (e) => {
      const newCountries = e.detail.items.reduce((acc, cur) => {
        return { ...acc, [cur.getAttribute('text').toLowerCase()]: true };
      }, {});
      dispatch({ type: 'SET_COUNTRIES', payload: newCountries });
    };

    const handleCurrencyChange = (e) => {
      dispatch({ type: 'SET_CURRENCY', payload: e.detail.selectedOption.textContent });
    };

    const handleDateChange = (e) => {
      if (e.detail.valid) {
        dispatch({ type: 'SET_DATE', payload: e.detail.value });
      }
    };

    const handleDateRangeChange = (e) => {
      if (e.detail.valid) {
        dispatch({ type: 'SET_DATE_RANGE', payload: e.detail.value });
      }
    };

    const handleFiltersDialogOpen = () => {
      prevDialogOpenState.current = state;
    };

    const handleRestore = () => {
      dispatch({ type: 'DIALOG_RESTORE', payload: prevDialogOpenState.current });
    };

    return (
      <>
        <FilterBar
          showResetButton
          search={<Input onInput={handleSearch} />}
          onRestore={handleRestore}
          onFiltersDialogOpen={handleFiltersDialogOpen}
        >
          <FilterGroupItem label="Age" active={!!age} required>
            <StepInput value={age} onChange={handleAgeChange} required />
          </FilterGroupItem>
          <FilterGroupItem label="Countries" active={Object.keys(countries).length > 0}>
            <MultiComboBox onSelectionChange={handleCountriesChange}>
              <MultiComboBoxItem text="Argentina" selected={countries.argentina} />
              <MultiComboBoxItem text="Bulgaria" selected={countries.bulgaria} />
              <MultiComboBoxItem text="Finland" selected={countries.finland} />
              <MultiComboBoxItem text="Germany" selected={countries.germany} />
              <MultiComboBoxItem text="Ireland" selected={countries.ireland} />
              <MultiComboBoxItem text="Ukraine" selected={countries.ukraine} />
              <MultiComboBoxItem text="USA" selected={countries.usa} />
            </MultiComboBox>
          </FilterGroupItem>
          <FilterGroupItem label="Currency" active={!!currency}>
            <Select onChange={handleCurrencyChange}>
              <Option additionalText="€" selected={currency === 'EUR'}>
                EUR
              </Option>
              <Option additionalText="$" selected={currency === 'USD'}>
                USD
              </Option>
              <Option additionalText="£" selected={currency === 'GBP'}>
                GBP
              </Option>
              <Option additionalText="₺" selected={currency === 'TRY'}>
                TRY
              </Option>
              <Option additionalText="¥" selected={currency === 'JPY'}>
                JPY
              </Option>
            </Select>
          </FilterGroupItem>
          <FilterGroupItem label="Date" active={!!date}>
            <DatePicker value={date} onChange={handleDateChange} style={{ minWidth: 'auto' }} on />
          </FilterGroupItem>
          <FilterGroupItem label="Date Range" active={!!dateRange} visibleInFilterBar={false}>
            <DateRangePicker value={dateRange} onChange={handleDateRangeChange} style={{ minWidth: 'auto' }} on />
          </FilterGroupItem>
        </FilterBar>
        <FlexBox direction={FlexBoxDirection.Column}>
          <FlexBox>
            <Label showColon>Search</Label>
            <Text>{search}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Age</Label>
            <Text>{age}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Countries</Label>
            <Text>{JSON.stringify(countries)}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Currency</Label>
            <Text>{currency}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Date</Label>
            <Text>{date}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Date Range</Label>
            <Text>{dateRange}</Text>
          </FlexBox>
        </FlexBox>
      </>
    );
  }
};

export const InDynamicPage: Story = {
  name: 'In DynamicPage',
  render: (args) => {
    return (
      <DynamicPage
        headerTitle={
          <DynamicPageTitle
            header={
              <VariantManagement
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <VariantItem>Variant 1</VariantItem>
                <VariantItem selected>Variant 2</VariantItem>
              </VariantManagement>
            }
          />
        }
        headerContent={
          <DynamicPageHeader>
            <FilterBar {...args} hideToolbar>
              <FilterGroupItem label="StepInput">
                <StepInput />
              </FilterGroupItem>
              <FilterGroupItem label="MultiInput" active required>
                <MultiInput
                  required
                  tokens={
                    <>
                      <Token text="Argentina" selected />
                      <Token text="Bulgaria" />
                      <Token text="England" />
                      <Token text="Finland" />
                    </>
                  }
                />
              </FilterGroupItem>
              <FilterGroupItem label="Input">
                <Input placeholder="Placeholder" />
              </FilterGroupItem>
              <FilterGroupItem label="Switch" visibleInFilterBar={false}>
                <Switch />
              </FilterGroupItem>
              <FilterGroupItem label="SELECT w/ initial selected" visibleInFilterBar={false}>
                <Select>
                  <Option>Option 1</Option>
                  <Option selected>Option 2</Option>
                  <Option>Option 3</Option>
                  <Option>Option 4</Option>
                </Select>
              </FilterGroupItem>
              <FilterGroupItem label="SELECT w/o initial selected" visibleInFilterBar={false}>
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
              </FilterGroupItem>
              <FilterGroupItem label="MultBox w/ initial selected" groupName="Group 1" visibleInFilterBar={false}>
                <MultiComboBox>
                  <MultiComboBoxItem text="MultiComboBoxItem 1" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
                  <MultiComboBoxItem text="MultiComboBoxItem 3" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
                </MultiComboBox>
              </FilterGroupItem>
              <FilterGroupItem label="ComboBox w/o initial selected" groupName="Group 2" visibleInFilterBar={false}>
                <ComboBox>
                  <ComboBoxItem text="ComboBoxItem 1" />
                  <ComboBoxItem text="ComboBoxItem 2" />
                  <ComboBoxItem text="ComboBoxItem 3" />
                  <ComboBoxItem text="ComboBoxItem 4" />
                </ComboBox>
              </FilterGroupItem>
              <FilterGroupItem label="Date Picker" groupName="Group 2">
                <DateRangePicker style={{ minWidth: 'auto' }} />
              </FilterGroupItem>
            </FilterBar>
          </DynamicPageHeader>
        }
      >
        <div
          style={{
            background: 'cadetblue',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white' }}>Content</Text>
        </div>
      </DynamicPage>
    );
  }
};

export const WithReordering: Story = {
  render(args) {
    const uniqueId = useId();
    const [orderedChildren, setOrderedChildren] = useState([
      <FilterGroupItem key={`${uniqueId}-0`} label="StepInput" required orderId={`${uniqueId}-0`}>
        <StepInput required />
      </FilterGroupItem>,
      <FilterGroupItem key={`${uniqueId}-1`} label="RatingIndicator" orderId={`${uniqueId}-1`}>
        <RatingIndicator />
      </FilterGroupItem>,
      <FilterGroupItem key={`${uniqueId}-2`} label="MultiInput" active orderId={`${uniqueId}-2`}>
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
      <FilterGroupItem key={`${uniqueId}-3`} label="Input" orderId={`${uniqueId}-3`}>
        <Input placeholder="Placeholder" />
      </FilterGroupItem>,
      <FilterGroupItem key={`${uniqueId}-4`} label="Switch" orderId={`${uniqueId}-4`}>
        <Switch />
      </FilterGroupItem>,
      <FilterGroupItem
        key={`${uniqueId}-5`}
        label="SELECT w/ initial selected"
        visibleInFilterBar={false}
        orderId={`${uniqueId}-5`}
      >
        <Select>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </Select>
      </FilterGroupItem>
    ]);

    const handleFiltersDialogSave = (e) => {
      setOrderedChildren((prev) => {
        return e.detail.orderIds.map((orderId) => {
          const obj = prev.find((item) => item.props.orderId === orderId);
          return { ...obj };
        });
      });
    };
    return (
      <FilterBar {...args} onFiltersDialogSave={handleFiltersDialogSave} enableReordering>
        {orderedChildren}
      </FilterBar>
    );
  }
};
