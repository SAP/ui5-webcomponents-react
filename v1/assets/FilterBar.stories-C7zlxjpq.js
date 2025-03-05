import{j as e}from"./useIsomorphicLayoutEffect-CRjHBNH3.js";import{r as G}from"./index-BP8_t0zE.js";import{D as ae}from"./index-RV3J8Y9K.js";import{D as se,a as de}from"./index-CeJlZMou.js";import{a as T,F as t}from"./index-7IUjgWpW.js";import{F as x,a as ce}from"./index-DBtBcav3.js";import{T as p}from"./index-Cyo93O8-.js";import{V as ue,a as L}from"./VariantItem-_ltGoadt.js";import{S as E}from"./index-B2yRoTlL.js";import{R as z}from"./index-DXhMzo1Q.js";import{M as R}from"./index-WlGTx4GS.js";import{T as s}from"./index-Bi6onl6L.js";import{S as v}from"./index-CaZMoghP.js";import{C as K,a as u}from"./index-B4QJe5_m.js";import{D as k}from"./index-BBM_6EXB.js";import{I as S}from"./index-BceECuin.js";import{T as xe}from"./index-CzJetkJS.js";import{S as I}from"./index-DebPw_QY.js";import{O as r}from"./index-DLpybAHv.js";import{M as f,a}from"./index-BsGg_J7Z.js";import{D as pe}from"./index-BMp5nBEo.js";import{L as h}from"./index-Cj1pZIKL.js";const me={title:"Layouts & Floorplans / FilterBar",component:T,args:{search:e.jsx(S,{}),header:e.jsx(xe,{children:"Test"}),filterContainerWidth:"13.125rem"},argTypes:{activeFiltersCount:{control:"number"},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},portalContainer:{control:{disable:!0}},filterContainerWidth:{control:"text"},as:{control:{disable:!0}}}},j={render:l=>e.jsxs(T,{...l,children:[e.jsx(t,{label:"StepInput",required:!0,children:e.jsx(E,{required:!0})}),e.jsx(t,{label:"RatingIndicator",children:e.jsx(z,{})}),e.jsx(t,{label:"MultiInput",active:!0,children:e.jsx(R,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(s,{text:"Argentina",selected:!0}),e.jsx(s,{text:"Bulgaria"}),e.jsx(s,{text:"England"}),e.jsx(s,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(S,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",children:e.jsx(v,{})}),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(I,{children:[e.jsx(r,{children:"Option 1"}),e.jsx(r,{selected:!0,children:"Option 2"}),e.jsx(r,{children:"Option 3"}),e.jsx(r,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",children:e.jsxs(I,{children:[e.jsx(r,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(r,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(r,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(r,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(r,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",children:e.jsxs(f,{children:[e.jsx(a,{text:"MultiComboBoxItem 1"}),e.jsx(a,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(a,{text:"MultiComboBoxItem 3"}),e.jsx(a,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",children:e.jsxs(K,{children:[e.jsx(u,{text:"ComboBoxItem 1"}),e.jsx(u,{text:"ComboBoxItem 2"}),e.jsx(u,{text:"ComboBoxItem 3"}),e.jsx(u,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(k,{style:{minWidth:"auto"}})})]})},he={age:37,countries:{},currency:"USD",date:"",dateRange:"",search:"",selectedFiltersByLabel:["Age","Countries","Currency","Date"]};function Ie(l,n){switch(n.type){case"SET_AGE":return{...l,age:n.payload};case"SET_COUNTRIES":return{...l,countries:n.payload};case"SET_CURRENCY":return{...l,currency:n.payload};case"SET_DATE":return{...l,date:n.payload};case"SET_DATE_RANGE":return{...l,dateRange:n.payload};case"SET_SEARCH":return{...l,search:n.payload};case"SHOW_FILTER":{const o=new Set(l.selectedFiltersByLabel);return o.add(n.payload),{...l,selectedFiltersByLabel:Array.from(o)}}case"HIDE_FILTER":{const o=new Set(l.selectedFiltersByLabel);return o.delete(n.payload),{...l,selectedFiltersByLabel:Array.from(o)}}case"DIALOG_RESTORE":return n.payload;default:return l}}const F={render:l=>{const[n,o]=G.useReducer(Ie,he),{age:b,countries:d,currency:c,date:g,dateRange:C,search:M,selectedFiltersByLabel:m}=n,w=G.useRef(),Q=i=>{o({type:"SET_SEARCH",payload:i.target.value})},X=i=>{o({type:"SET_AGE",payload:i.target.value})},Z=i=>{const D=i.detail.items.reduce((O,ie)=>({...O,[ie.getAttribute("text").toLowerCase()]:!0}),{});o({type:"SET_COUNTRIES",payload:D})},ee=i=>{o({type:"SET_CURRENCY",payload:i.detail.selectedOption.textContent})},te=i=>{i.detail.valid&&o({type:"SET_DATE",payload:i.detail.value})},ne=i=>{i.detail.valid&&o({type:"SET_DATE_RANGE",payload:i.detail.value})},re=()=>{w.current=n},le=()=>{o({type:"DIALOG_RESTORE",payload:w.current})},oe=i=>{const{checked:D,element:O}=i.detail;o(D?{type:"SHOW_FILTER",payload:O.dataset.text}:{type:"HIDE_FILTER",payload:O.dataset.text})};return e.jsxs(e.Fragment,{children:[e.jsxs(T,{showResetButton:!0,search:e.jsx(S,{onInput:Q}),onRestore:le,onFiltersDialogOpen:re,onFiltersDialogSelectionChange:oe,children:[e.jsx(t,{label:"Age",active:!!b,required:!0,children:e.jsx(E,{value:b,onChange:X,required:!0})}),e.jsx(t,{label:"Countries",active:Object.keys(d).length>0,visibleInFilterBar:m.includes("Countries"),children:e.jsxs(f,{onSelectionChange:Z,children:[e.jsx(a,{text:"Argentina",selected:d.argentina}),e.jsx(a,{text:"Bulgaria",selected:d.bulgaria}),e.jsx(a,{text:"Finland",selected:d.finland}),e.jsx(a,{text:"Germany",selected:d.germany}),e.jsx(a,{text:"Ireland",selected:d.ireland}),e.jsx(a,{text:"Ukraine",selected:d.ukraine}),e.jsx(a,{text:"USA",selected:d.usa})]})}),e.jsx(t,{label:"Currency",active:!!c,visibleInFilterBar:m.includes("Currency"),children:e.jsxs(I,{onChange:ee,children:[e.jsx(r,{additionalText:"€",selected:c==="EUR",children:"EUR"}),e.jsx(r,{additionalText:"$",selected:c==="USD",children:"USD"}),e.jsx(r,{additionalText:"£",selected:c==="GBP",children:"GBP"}),e.jsx(r,{additionalText:"₺",selected:c==="TRY",children:"TRY"}),e.jsx(r,{additionalText:"¥",selected:c==="JPY",children:"JPY"})]})}),e.jsx(t,{label:"Date",active:!!g,visibleInFilterBar:m.includes("Date"),children:e.jsx(pe,{value:g,onChange:te,style:{minWidth:"auto"}})}),e.jsx(t,{label:"Date Range",active:!!C,visibleInFilterBar:m.includes("Date Range"),children:e.jsx(k,{value:C,onChange:ne,style:{minWidth:"auto"}})})]}),e.jsxs(x,{direction:ce.Column,children:[e.jsxs(x,{children:[e.jsx(h,{showColon:!0,children:"Search"}),e.jsx(p,{children:M})]}),e.jsxs(x,{children:[e.jsx(h,{showColon:!0,children:"Age"}),e.jsx(p,{children:b})]}),e.jsxs(x,{children:[e.jsx(h,{showColon:!0,children:"Countries"}),e.jsx(p,{children:JSON.stringify(d)})]}),e.jsxs(x,{children:[e.jsx(h,{showColon:!0,children:"Currency"}),e.jsx(p,{children:c})]}),e.jsxs(x,{children:[e.jsx(h,{showColon:!0,children:"Date"}),e.jsx(p,{children:g})]}),e.jsxs(x,{children:[e.jsx(h,{showColon:!0,children:"Date Range"}),e.jsx(p,{children:C})]})]})]})}},B={name:"In DynamicPage",render:l=>e.jsx(ae,{headerTitle:e.jsx(se,{header:e.jsxs(ue,{onClick:n=>{n.stopPropagation()},children:[e.jsx(L,{children:"Variant 1"}),e.jsx(L,{selected:!0,children:"Variant 2"})]})}),headerContent:e.jsx(de,{children:e.jsxs(T,{...l,hideToolbar:!0,children:[e.jsx(t,{label:"StepInput",children:e.jsx(E,{})}),e.jsx(t,{label:"MultiInput",active:!0,required:!0,children:e.jsx(R,{required:!0,tokens:e.jsxs(e.Fragment,{children:[e.jsx(s,{text:"Argentina",selected:!0}),e.jsx(s,{text:"Bulgaria"}),e.jsx(s,{text:"England"}),e.jsx(s,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(S,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",visibleInFilterBar:!1,children:e.jsx(v,{})}),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(I,{children:[e.jsx(r,{children:"Option 1"}),e.jsx(r,{selected:!0,children:"Option 2"}),e.jsx(r,{children:"Option 3"}),e.jsx(r,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",visibleInFilterBar:!1,children:e.jsxs(I,{children:[e.jsx(r,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(r,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(r,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(r,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(r,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",visibleInFilterBar:!1,children:e.jsxs(f,{children:[e.jsx(a,{text:"MultiComboBoxItem 1"}),e.jsx(a,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(a,{text:"MultiComboBoxItem 3"}),e.jsx(a,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",visibleInFilterBar:!1,children:e.jsxs(K,{children:[e.jsx(u,{text:"ComboBoxItem 1"}),e.jsx(u,{text:"ComboBoxItem 2"}),e.jsx(u,{text:"ComboBoxItem 3"}),e.jsx(u,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(k,{style:{minWidth:"auto"}})})]})}),children:e.jsx("div",{style:{background:"cadetblue",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(p,{style:{color:"white"},children:"Content"})})})},y={render(l){const n=G.useId(),[o,b]=G.useState([e.jsx(t,{label:"StepInput",required:!0,orderId:`${n}-0`,children:e.jsx(E,{required:!0})},`${n}-0`),e.jsx(t,{label:"RatingIndicator",orderId:`${n}-1`,children:e.jsx(z,{})},`${n}-1`),e.jsx(t,{label:"MultiInput",active:!0,orderId:`${n}-2`,children:e.jsx(R,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(s,{text:"Argentina",selected:!0}),e.jsx(s,{text:"Bulgaria"}),e.jsx(s,{text:"England"}),e.jsx(s,{text:"Finland"})]})})},`${n}-2`),e.jsx(t,{label:"Input",orderId:`${n}-3`,children:e.jsx(S,{placeholder:"Placeholder"})},`${n}-3`),e.jsx(t,{label:"Switch",orderId:`${n}-4`,children:e.jsx(v,{})},`${n}-4`),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,orderId:`${n}-5`,children:e.jsxs(I,{children:[e.jsx(r,{children:"Option 1"}),e.jsx(r,{selected:!0,children:"Option 2"}),e.jsx(r,{children:"Option 3"}),e.jsx(r,{children:"Option 4"})]})},`${n}-5`)]),d=c=>{b(g=>c.detail.orderIds.map(C=>({...g.find(m=>m.props.orderId===C)})))};return e.jsx(T,{...l,onFiltersDialogSave:d,enableReordering:!0,showResetButton:!0,children:o})}};var A,P,_;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    return <FilterBar {...args}>
        <FilterGroupItem label="StepInput" required>
          <StepInput required />
        </FilterGroupItem>
        <FilterGroupItem label="RatingIndicator">
          <RatingIndicator />
        </FilterGroupItem>
        <FilterGroupItem label="MultiInput" active>
          <MultiInput tokens={<>
                <Token text="Argentina" selected />
                <Token text="Bulgaria" />
                <Token text="England" />
                <Token text="Finland" />
              </>} />
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
          <DateRangePicker style={{
          minWidth: 'auto'
        }} />
        </FilterGroupItem>
      </FilterBar>;
  }
}`,...(_=(P=j.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,$,N;F.parameters={...F.parameters,docs:{...(q=F.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
      age,
      countries,
      currency,
      date,
      dateRange,
      search,
      selectedFiltersByLabel
    } = state;
    const prevDialogOpenState = useRef();
    const handleSearch = e => {
      dispatch({
        type: 'SET_SEARCH',
        payload: e.target.value
      });
    };
    const handleAgeChange = e => {
      dispatch({
        type: 'SET_AGE',
        payload: e.target.value
      });
    };
    const handleCountriesChange = e => {
      const newCountries = e.detail.items.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.getAttribute('text').toLowerCase()]: true
        };
      }, {});
      dispatch({
        type: 'SET_COUNTRIES',
        payload: newCountries
      });
    };
    const handleCurrencyChange = e => {
      dispatch({
        type: 'SET_CURRENCY',
        payload: e.detail.selectedOption.textContent
      });
    };
    const handleDateChange = e => {
      if (e.detail.valid) {
        dispatch({
          type: 'SET_DATE',
          payload: e.detail.value
        });
      }
    };
    const handleDateRangeChange = e => {
      if (e.detail.valid) {
        dispatch({
          type: 'SET_DATE_RANGE',
          payload: e.detail.value
        });
      }
    };
    const handleFiltersDialogOpen = () => {
      prevDialogOpenState.current = state;
    };
    const handleRestore = () => {
      dispatch({
        type: 'DIALOG_RESTORE',
        payload: prevDialogOpenState.current
      });
    };
    const handleFilterSelectionChange: FilterBarPropTypes['onFiltersDialogSelectionChange'] = e => {
      const {
        checked,
        element
      } = e.detail;
      if (checked) {
        dispatch({
          type: 'SHOW_FILTER',
          payload: element.dataset.text
        });
      } else {
        dispatch({
          type: 'HIDE_FILTER',
          payload: element.dataset.text
        });
      }
    };
    return <>
        <FilterBar showResetButton search={<Input onInput={handleSearch} />} onRestore={handleRestore} onFiltersDialogOpen={handleFiltersDialogOpen} onFiltersDialogSelectionChange={handleFilterSelectionChange}>
          <FilterGroupItem label="Age" active={!!age} required>
            <StepInput value={age} onChange={handleAgeChange} required />
          </FilterGroupItem>
          <FilterGroupItem label="Countries" active={Object.keys(countries).length > 0} visibleInFilterBar={selectedFiltersByLabel.includes('Countries')}>
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
          <FilterGroupItem label="Currency" active={!!currency} visibleInFilterBar={selectedFiltersByLabel.includes('Currency')}>
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
          <FilterGroupItem label="Date" active={!!date} visibleInFilterBar={selectedFiltersByLabel.includes('Date')}>
            <DatePicker value={date} onChange={handleDateChange} style={{
            minWidth: 'auto'
          }} />
          </FilterGroupItem>
          <FilterGroupItem label="Date Range" active={!!dateRange} visibleInFilterBar={selectedFiltersByLabel.includes('Date Range')}>
            <DateRangePicker value={dateRange} onChange={handleDateRangeChange} style={{
            minWidth: 'auto'
          }} />
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
      </>;
  }
}`,...(N=($=F.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var U,W,V;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'In DynamicPage',
  render: args => {
    return <DynamicPage headerTitle={<DynamicPageTitle header={<VariantManagement onClick={e => {
      e.stopPropagation();
    }}>
                <VariantItem>Variant 1</VariantItem>
                <VariantItem selected>Variant 2</VariantItem>
              </VariantManagement>} />} headerContent={<DynamicPageHeader>
            <FilterBar {...args} hideToolbar>
              <FilterGroupItem label="StepInput">
                <StepInput />
              </FilterGroupItem>
              <FilterGroupItem label="MultiInput" active required>
                <MultiInput required tokens={<>
                      <Token text="Argentina" selected />
                      <Token text="Bulgaria" />
                      <Token text="England" />
                      <Token text="Finland" />
                    </>} />
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
                <DateRangePicker style={{
            minWidth: 'auto'
          }} />
              </FilterGroupItem>
            </FilterBar>
          </DynamicPageHeader>}>
        <div style={{
        background: 'cadetblue',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Text style={{
          color: 'white'
        }}>Content</Text>
        </div>
      </DynamicPage>;
  }
}`,...(V=(W=B.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var H,Y,J;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render(args) {
    const uniqueId = useId();
    const [orderedChildren, setOrderedChildren] = useState([<FilterGroupItem key={\`\${uniqueId}-0\`} label="StepInput" required orderId={\`\${uniqueId}-0\`}>
        <StepInput required />
      </FilterGroupItem>, <FilterGroupItem key={\`\${uniqueId}-1\`} label="RatingIndicator" orderId={\`\${uniqueId}-1\`}>
        <RatingIndicator />
      </FilterGroupItem>, <FilterGroupItem key={\`\${uniqueId}-2\`} label="MultiInput" active orderId={\`\${uniqueId}-2\`}>
        <MultiInput tokens={<>
              <Token text="Argentina" selected />
              <Token text="Bulgaria" />
              <Token text="England" />
              <Token text="Finland" />
            </>} />
      </FilterGroupItem>, <FilterGroupItem key={\`\${uniqueId}-3\`} label="Input" orderId={\`\${uniqueId}-3\`}>
        <Input placeholder="Placeholder" />
      </FilterGroupItem>, <FilterGroupItem key={\`\${uniqueId}-4\`} label="Switch" orderId={\`\${uniqueId}-4\`}>
        <Switch />
      </FilterGroupItem>, <FilterGroupItem key={\`\${uniqueId}-5\`} label="SELECT w/ initial selected" visibleInFilterBar={false} orderId={\`\${uniqueId}-5\`}>
        <Select>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </Select>
      </FilterGroupItem>]);
    const handleFiltersDialogSave = e => {
      setOrderedChildren(prev => {
        return e.detail.orderIds.map(orderId => {
          const obj = prev.find(item => item.props.orderId === orderId);
          return {
            ...obj
          };
        });
      });
    };
    return <FilterBar {...args} onFiltersDialogSave={handleFiltersDialogSave} enableReordering showResetButton>
        {orderedChildren}
      </FilterBar>;
  }
}`,...(J=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const be=["Default","WithLogic","InDynamicPage","WithReordering"],qe=Object.freeze(Object.defineProperty({__proto__:null,Default:j,InDynamicPage:B,WithLogic:F,WithReordering:y,__namedExportsOrder:be,default:me},Symbol.toStringTag,{value:"Module"}));export{qe as C,j as D,B as I,F as W,y as a};
