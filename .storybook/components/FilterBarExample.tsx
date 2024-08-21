import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import { useReducer, useRef, useState } from 'react';
import {
  DatePicker,
  FilterBar,
  FilterBarPropTypes,
  FilterGroupItem,
  FlexBox,
  FlexBoxDirection,
  Input,
  Label,
  MultiComboBox,
  MultiComboBoxItem,
  Option,
  Select,
  StepInput,
  Text,
  ThemeProvider,
  Title
} from '@ui5/webcomponents-react';
import classes from './FilterBarExample.module.css';

const initialState = {
  age: 37,
  countries: {},
  currency: 'USD',
  date: '',
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
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_STATE':
      return { ...state, ...action.payload };
    case 'DIALOG_RESTORE':
      return action.payload;
    default:
      return state;
  }
}

export function FilterBarExample() {
  const [filterState, dispatch] = useReducer(reducer, initialState);
  const { age, countries, currency, date, search } = filterState;
  const dialogStateRef = useRef({});
  const [visibleChildrenByKey, setVisibleChildrenByKey] = useState<Record<string, boolean>>({
    '0': true,
    '1': true,
    '2': true
  });
  const [orderedFilterKeys, setOrderedFilterKeys] = useState(['0', '1', '2', '3']);

  const handleSearch = (e) => {
    dispatch({ type: 'SET_SEARCH', payload: e.target.value });
  };
  const handleAgeChange = (e) => {
    const { value } = e.target;
    if (e.currentTarget.parentElement.dataset.inFiltersDialog) {
      dialogStateRef.current.age = value;
    } else {
      dispatch({ type: 'SET_AGE', payload: value });
    }
  };

  const handleCountriesChange = (e) => {
    const newCountries = e.detail.items.reduce((acc, cur) => {
      return { ...acc, [cur.getAttribute('text').toLowerCase()]: true };
    }, {});
    if (e.currentTarget.parentElement.dataset.inFiltersDialog) {
      dialogStateRef.current.countries = newCountries;
    } else {
      dispatch({ type: 'SET_COUNTRIES', payload: newCountries });
    }
  };

  const handleCurrencyChange = (e) => {
    const currency = e.detail.selectedOption.textContent;
    if (e.currentTarget.parentElement.dataset.inFiltersDialog) {
      dialogStateRef.current.currency = currency;
    } else {
      dispatch({ type: 'SET_CURRENCY', payload: currency });
    }
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    if (e.currentTarget.parentElement.dataset.inFiltersDialog) {
      dialogStateRef.current.date = value;
    } else if (e.detail.valid) {
      dispatch({ type: 'SET_DATE', payload: value });
    }
  };

  const handleFiltersDialogSave: FilterBarPropTypes['onFiltersDialogSave'] = (e) => {
    setOrderedFilterKeys(e.detail.reorderedFilterKeys);
    setVisibleChildrenByKey(
      e.detail.selectedFilterKeys.reduce((acc, cur) => {
        acc[cur] = true;
        return acc;
      }, {})
    );
    dispatch({ type: 'SET_STATE', payload: dialogStateRef.current });
  };

  return (
    <ThemeProvider>
      <div className={classes.filterBarDemo}>
        <Text>
          The FilterBar applies filter changes inside the FilterBar immediately and inside the dialog only after 'OK'
          has been pressed.
        </Text>
        <FilterBar
          header={
            <Title level={TitleLevel.H2} size={TitleLevel.H4}>
              Apply changes after dialog save
            </Title>
          }
          enableReordering
          onFiltersDialogSave={handleFiltersDialogSave}
          search={<Input onInput={handleSearch} />}
        >
          {orderedFilterKeys.map((filterKey) => {
            const isHidden = !visibleChildrenByKey[filterKey];
            switch (filterKey) {
              case '0':
                return (
                  <FilterGroupItem key={0} filterKey="0" label="Age" required>
                    <StepInput value={age} onChange={handleAgeChange} required />
                  </FilterGroupItem>
                );
              case '1':
                return (
                  <FilterGroupItem
                    key={1}
                    filterKey="1"
                    label="Countries"
                    active={Object.keys(countries).length > 0}
                    hiddenInFilterBar={isHidden}
                  >
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
                );
              case '2':
                return (
                  <FilterGroupItem
                    key={2}
                    filterKey="2"
                    label="Currency"
                    active={!!currency}
                    hiddenInFilterBar={isHidden}
                  >
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
                );
              case '3':
                return (
                  <FilterGroupItem key={3} filterKey="3" label="Date" active={!!date} hiddenInFilterBar={isHidden}>
                    <DatePicker value={date} onChange={handleDateChange} style={{ minWidth: 'auto' }} />
                  </FilterGroupItem>
                );
              default:
                return null;
            }
          })}
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
          <hr style={{ width: '100%' }} />
          <FlexBox>
            <Label showColon>Visible Filters</Label>
            <Text>{Object.keys(visibleChildrenByKey).join(', ')}</Text>
          </FlexBox>
          <FlexBox>
            <Label showColon>Filters Order</Label>
            <Text>{orderedFilterKeys.join(', ')}</Text>
          </FlexBox>
        </FlexBox>
      </div>
    </ThemeProvider>
  );
}
