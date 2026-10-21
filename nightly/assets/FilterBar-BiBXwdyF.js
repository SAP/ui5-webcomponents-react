import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./FilterBar-DWLHZ_1Q.js";import{i,r as a}from"./react-fLZJfuRT.js";import{_ as o,d as s,o as c,r as l,u}from"./blocks-DjpmKyLQ.js";import{S as d,b as f,f as p,t as m,u as h}from"./components-R4kqCctk.js";import{n as g,t as _}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as v,c as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./FilterBar.stories-5Wqs_NF2.js";function O(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...i(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s,{of:S}),`
`,(0,A.jsx)(p,{of:S,subComponents:[`FilterGroupItem`,`FilterBarSearchIcon`]}),`
`,(0,A.jsx)(`br`,{}),`
`,(0,A.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,A.jsx)(l,{of:E}),`
`,(0,A.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,A.jsx)(f,{of:E}),`
`,(0,A.jsx)(`br`,{}),`
`,(0,A.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,A.jsx)(t.h2,{id:`filterbar-with-logic`,children:`FilterBar with logic`}),`
`,(0,A.jsx)(t.p,{children:`This is a basic example of how the FilterBar could be used inside an app.`}),`
`,(0,A.jsx)(l,{of:C}),`
`,(0,A.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,A.jsxs)(`details`,{children:[(0,A.jsx)(`summary`,{children:`Show Code`}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-tsx`,children:`const initialState = {
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

function FilterBarComponent(args) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [visibleFilters, setVisibleFilters] = useState(new Set(['age', 'countries']));
  const { age, countries, currency, date, dateRange, search } = state;
  const prevDialogOpenState = useRef(undefined);

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
    dispatch({
      type: 'SET_CURRENCY',
      payload: e.detail.selectedOption.textContent
    });
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

  const handleRestore: FilterBarPropTypes['onRestore'] = (payload) => {
    const prevDialogOpenVisibleFilters = payload.selectedFilterKeys;
    dispatch({ type: 'DIALOG_RESTORE', payload: prevDialogOpenState.current });
    setVisibleFilters(new Set(prevDialogOpenVisibleFilters));
  };

  const handleFiltersDialogSelectionChange: FilterBarPropTypes['onFiltersDialogSelectionChange'] = (payload) => {
    const visibleFilterKeys = payload.selectedFilterKeys;
    setVisibleFilters(new Set(visibleFilterKeys));
  };

  return (
    <>
      <FilterBar
        showResetButton
        search={<Input onInput={handleSearch} />}
        onRestore={handleRestore}
        onFiltersDialogOpen={handleFiltersDialogOpen}
        onFiltersDialogSelectionChange={handleFiltersDialogSelectionChange}
      >
        <FilterGroupItem filterKey="age" label="Age" active={!!age} required>
          <StepInput value={age} onChange={handleAgeChange} required />
        </FilterGroupItem>
        <FilterGroupItem
          filterKey="countries"
          label="Countries"
          active={Object.keys(countries).length > 0}
          hiddenInFilterBar={!visibleFilters.has('countries')}
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
        <FilterGroupItem
          filterKey="currency"
          label="Currency"
          active={!!currency}
          hiddenInFilterBar={!visibleFilters.has('currency')}
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
        <FilterGroupItem filterKey="date" label="Date" active={!!date} hiddenInFilterBar={!visibleFilters.has('date')}>
          <DatePicker value={date} onChange={handleDateChange} style={{ minWidth: 'auto' }} />
        </FilterGroupItem>
        <FilterGroupItem
          filterKey="date-range"
          label="Date Range"
          active={!!dateRange}
          hiddenInFilterBar={!visibleFilters.has('date-range')}
        >
          <DateRangePicker value={dateRange} onChange={handleDateRangeChange} style={{ minWidth: 'auto' }} />
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
        <hr style={{ width: '100%' }} />
        <FlexBox>
          <Label showColon>Visible Filters</Label>
          <Text>{Array.from(visibleFilters).join(', ')}</Text>
        </FlexBox>
      </FlexBox>
    </>
  );
}
`})})]}),`
`,(0,A.jsx)(t.h2,{id:`filterbar-with-reordering`,children:`FilterBar with Reordering`}),`
`,(0,A.jsxs)(t.p,{children:[`To enable the reordering feature set `,(0,A.jsx)(t.code,{children:`enableReordering`}),` to `,(0,A.jsx)(t.code,{children:`true`}),`.`]}),`
`,(0,A.jsx)(l,{of:T}),`
`,(0,A.jsx)(t.h3,{id:`code-1`,children:`Code`}),`
`,(0,A.jsxs)(`details`,{children:[(0,A.jsx)(`summary`,{children:`Show Code`}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-jsx`,children:`function FilterBarWithReordering(props) {
  const uniqueId = useId();
  const [visibleChildrenByKey, setVisibleChildrenByKey] = useState<
    Record<string, boolean>
  >({
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "5": true,
  });
  const [orderedFilterKeys, setOrderedFilterKeys] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);

  const toggleVisibility = (key) => {
    setVisibleChildrenByKey((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleFiltersDialogSave: FilterBarPropTypes["onFiltersDialogSave"] = (
    e,
  ) => {
    setOrderedFilterKeys(e.detail.reorderedFilterKeys);
    setVisibleChildrenByKey(
      e.detail.selectedFilterKeys.reduce((acc, cur) => {
        acc[cur] = true;
        return acc;
      }, {}),
    );
  };

  return (
    <FilterBar
      enableReordering
      showResetButton
      onFiltersDialogSave={handleFiltersDialogSave}
    >
      {orderedFilterKeys.map((filterKey) => {
        const isHidden = !visibleChildrenByKey[filterKey];
        switch (filterKey) {
          case "0":
            return (
              <FilterGroupItem
                filterKey="0"
                key={\`\${uniqueId}-0\`}
                label="StepInput"
                required
              >
                <StepInput required />
              </FilterGroupItem>
            );
          case "1":
            return (
              <FilterGroupItem
                filterKey="1"
                key={\`\${uniqueId}-1\`}
                label="RatingIndicator"
                hiddenInFilterBar={isHidden}
              >
                <RatingIndicator />
              </FilterGroupItem>
            );
          case "2":
            return (
              <FilterGroupItem
                filterKey="2"
                key={\`\${uniqueId}-2\`}
                label="MultiInput"
                active
                hiddenInFilterBar={isHidden}
              >
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
            );
          case "3":
            return (
              <FilterGroupItem
                filterKey="3"
                key={\`\${uniqueId}-3\`}
                label="Input"
                hiddenInFilterBar={isHidden}
              >
                <Input placeholder="Placeholder" />
              </FilterGroupItem>
            );
          case "4":
            return (
              <FilterGroupItem
                filterKey="4"
                key={\`\${uniqueId}-4\`}
                label="Switch"
                hiddenInFilterBar={isHidden}
              >
                <Switch />
              </FilterGroupItem>
            );
          case "5":
            return (
              <FilterGroupItem
                filterKey="5"
                key={\`\${uniqueId}-5\`}
                label="SELECT w/ initial selected"
                hiddenInFilterBar={isHidden}
              >
                <Select>
                  <Option>Option 1</Option>
                  <Option selected>Option 2</Option>
                  <Option>Option 3</Option>
                  <Option>Option 4</Option>
                </Select>
              </FilterGroupItem>
            );
          default:
            return null;
        }
      })}
    </FilterBar>
  );
}

`})})]}),`
`,(0,A.jsx)(t.h2,{id:`filterbar-in-a-dynamicpage`,children:`FilterBar in a DynamicPage`}),`
`,(0,A.jsxs)(t.p,{children:[`When a FilterBar is used inside e.g. a DynamicPage, `,(0,A.jsx)(t.code,{children:`hideToolbar`}),` should be set to `,(0,A.jsx)(t.code,{children:`true`}),`, since the `,(0,A.jsx)(t.code,{children:`VariantManagement`}),` of
the page is then responsible for the different views.`]}),`
`,(0,A.jsx)(l,{of:b}),`
`,(0,A.jsx)(t.h2,{id:`identify-the-origin-of-an-inputfilter-event`,children:`Identify the origin of an input/filter event`}),`
`,(0,A.jsxs)(t.p,{children:[`When filters in the FilterBar should only be updated directly within the FilterBar itself, or when a user presses 'OK' in the filters dialog,
it's essential to determine the origin of the corresponding event (e.g., `,(0,A.jsx)(t.code,{children:`onInput`}),`).
To do this, you can check the `,(0,A.jsx)(t.code,{children:`dataset`}),` of the `,(0,A.jsx)(t.code,{children:`parentElement`}),` of the `,(0,A.jsx)(t.code,{children:`currentTarget`}),`.
Depending on where the user interacts with the input component, the `,(0,A.jsx)(t.code,{children:`dataset`}),` of the parent will indicate either `,(0,A.jsx)(t.code,{children:`inFilterBar: "true"`}),` or `,(0,A.jsx)(t.code,{children:`inFiltersDialog: "true"`}),`.`]}),`
`,(0,A.jsx)(t.h3,{id:`example-1`,children:`Example:`}),`
`,(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-jsx`,children:`<FilterGroupItem filterKey="0" label="Input">
  <StepInput onInput={handleInput} />
</FilterGroupItem>
`})}),`
`,(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-js`,children:`const handleInput = (event) => {
  const firedInFilterBar = !!event.currentTarget.parentElement.dataset.inFilterBar;
  const firedInFiltersDialog = !!event.currentTarget.parentElement.dataset.inFiltersDialog;
};
`})}),`
`,(0,A.jsx)(l,{of:w,source:!0}),`
`,(0,A.jsx)(t.h2,{id:`trigger-the-search-via-the-search-icon`,children:`Trigger the search via the search icon`}),`
`,(0,A.jsxs)(t.p,{children:[`By default, the search icon of the `,(0,A.jsx)(t.code,{children:`search`}),` input is decorative. To let users trigger the search by activating the search icon (in addition to pressing `,(0,A.jsx)(`kbd`,{children:`Enter`}),` in the input), pass the `,(0,A.jsx)(t.code,{children:`FilterBarSearchIcon`}),` subcomponent to the `,(0,A.jsx)(t.code,{children:`icon`}),` prop of the search input and wire its `,(0,A.jsx)(t.code,{children:`onClick`}),` handler.`]}),`
`,(0,A.jsxs)(t.p,{children:[`This is recommended when the "Go" button is displayed (`,(0,A.jsx)(t.code,{children:`showGoOnFB`}),`). The `,(0,A.jsx)(t.code,{children:`FilterBarSearchIcon`}),` is pre-controlled — you decide what "trigger search" means in its `,(0,A.jsx)(t.code,{children:`onClick`}),` handler.`]}),`
`,(0,A.jsx)(l,{of:v}),`
`,(0,A.jsx)(u,{children:_}),`
`,(0,A.jsx)(t.h2,{id:`filtergroupitem`,children:`FilterGroupItem`}),`
`,(0,A.jsx)(c,{of:r}),`
`,(0,A.jsx)(d,{metaOf:S,of:r,exclude:[`data-index`]}),`
`,(0,A.jsx)(t.h2,{id:`filterbarsearchicon`,children:`FilterBarSearchIcon`}),`
`,(0,A.jsx)(c,{of:x}),`
`,(0,A.jsx)(d,{metaOf:S,of:x}),`
`,(0,A.jsx)(h,{})]})}function k(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),a(),m(),g(),o(),D(),n(),y()})))()}j();export{k as default};