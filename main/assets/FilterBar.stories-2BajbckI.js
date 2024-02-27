import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as E}from"./index-OjgoNOWw.js";import{D as ee}from"./index-QatJ6Vvn.js";import{D as te,a as ne}from"./index-72OocfT2.js";import{a as g,F as t}from"./index-FR8o5Uk4.js";import{F as u,b as oe}from"./index-6f3-3TZK.js";import{T as m}from"./index-lwweRvrD.js";import{V as ae,a as D}from"./VariantItem-oBk2m27k.js";import{S as F}from"./index-dNdgVKC4.js";import{R as re}from"./index-JIo2lya6.js";import{M as _}from"./index-TZb8qnpe.js";import{T as s}from"./index-zBfTUru7.js";import{S as N}from"./index-75GZSLpX.js";import{C as U,a as d}from"./index-xKaHzJ7s.js";import{D as S}from"./index-_4ICaR8y.js";import{I as j}from"./index-bTLT3jlC.js";import{T as le}from"./index-oXNaOOJ_.js";import{S as C}from"./index-WsZ_L-Vb.js";import{O as n}from"./index-vRZMDmWj.js";import{M as O,a as o}from"./index-GPwhk_yu.js";import{D as ie}from"./index-g-PmedNf.js";import{L as p}from"./index-ZtQSQgQr.js";const se={title:"Layouts & Floorplans / FilterBar",component:g,args:{search:e.jsx(j,{}),header:e.jsx(le,{children:"Test"}),filterContainerWidth:"13.125rem"},argTypes:{activeFiltersCount:{control:"number"},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},portalContainer:{control:{disable:!0}},filterContainerWidth:{control:"text"},as:{control:{disable:!0}}}},h={render:l=>e.jsxs(g,{...l,children:[e.jsx(t,{label:"StepInput",required:!0,children:e.jsx(F,{required:!0})}),e.jsx(t,{label:"RatingIndicator",children:e.jsx(re,{})}),e.jsx(t,{label:"MultiInput",active:!0,children:e.jsx(_,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(s,{text:"Argentina",selected:!0}),e.jsx(s,{text:"Bulgaria"}),e.jsx(s,{text:"England"}),e.jsx(s,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(j,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",children:e.jsx(N,{})}),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(C,{children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{selected:!0,children:"Option 2"}),e.jsx(n,{children:"Option 3"}),e.jsx(n,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",children:e.jsxs(C,{children:[e.jsx(n,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(n,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(n,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(n,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(n,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",children:e.jsxs(O,{children:[e.jsx(o,{text:"MultiComboBoxItem 1"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(o,{text:"MultiComboBoxItem 3"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",children:e.jsxs(U,{children:[e.jsx(d,{text:"ComboBoxItem 1"}),e.jsx(d,{text:"ComboBoxItem 2"}),e.jsx(d,{text:"ComboBoxItem 3"}),e.jsx(d,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(S,{style:{minWidth:"auto"}})})]})},de={age:37,countries:{},currency:"USD",date:"",dateRange:"",search:""};function ce(l,a){switch(a.type){case"SET_AGE":return{...l,age:a.payload};case"SET_COUNTRIES":return{...l,countries:a.payload};case"SET_CURRENCY":return{...l,currency:a.payload};case"SET_DATE":return{...l,date:a.payload};case"SET_DATE_RANGE":return{...l,dateRange:a.payload};case"SET_SEARCH":return{...l,search:a.payload};case"DIALOG_RESTORE":return a.payload;default:return l}}const b={render:l=>{const[a,c]=E.useReducer(ce,de),{age:B,countries:i,currency:x,date:T,dateRange:y,search:V}=a,G=E.useRef(),W=r=>{c({type:"SET_SEARCH",payload:r.target.value})},q=r=>{c({type:"SET_AGE",payload:r.target.value})},Y=r=>{const Q=r.detail.items.reduce((X,Z)=>({...X,[Z.getAttribute("text").toLowerCase()]:!0}),{});c({type:"SET_COUNTRIES",payload:Q})},H=r=>{c({type:"SET_CURRENCY",payload:r.detail.selectedOption.textContent})},J=r=>{r.detail.valid&&c({type:"SET_DATE",payload:r.detail.value})},$=r=>{r.detail.valid&&c({type:"SET_DATE_RANGE",payload:r.detail.value})},z=()=>{G.current=a},K=()=>{c({type:"DIALOG_RESTORE",payload:G.current})};return e.jsxs(e.Fragment,{children:[e.jsxs(g,{showResetButton:!0,search:e.jsx(j,{onInput:W}),onRestore:K,onFiltersDialogOpen:z,children:[e.jsx(t,{label:"Age",active:!!B,required:!0,children:e.jsx(F,{value:B,onChange:q,required:!0})}),e.jsx(t,{label:"Countries",active:Object.keys(i).length>0,children:e.jsxs(O,{onSelectionChange:Y,children:[e.jsx(o,{text:"Argentina",selected:i.argentina}),e.jsx(o,{text:"Bulgaria",selected:i.bulgaria}),e.jsx(o,{text:"Finland",selected:i.finland}),e.jsx(o,{text:"Germany",selected:i.germany}),e.jsx(o,{text:"Ireland",selected:i.ireland}),e.jsx(o,{text:"Ukraine",selected:i.ukraine}),e.jsx(o,{text:"USA",selected:i.usa})]})}),e.jsx(t,{label:"Currency",active:!!x,children:e.jsxs(C,{onChange:H,children:[e.jsx(n,{additionalText:"€",selected:x==="EUR",children:"EUR"}),e.jsx(n,{additionalText:"$",selected:x==="USD",children:"USD"}),e.jsx(n,{additionalText:"£",selected:x==="GBP",children:"GBP"}),e.jsx(n,{additionalText:"₺",selected:x==="TRY",children:"TRY"}),e.jsx(n,{additionalText:"¥",selected:x==="JPY",children:"JPY"})]})}),e.jsx(t,{label:"Date",active:!!T,children:e.jsx(ie,{value:T,onChange:J,style:{minWidth:"auto"},on:!0})}),e.jsx(t,{label:"Date Range",active:!!y,visibleInFilterBar:!1,children:e.jsx(S,{value:y,onChange:$,style:{minWidth:"auto"},on:!0})})]}),e.jsxs(u,{direction:oe.Column,children:[e.jsxs(u,{children:[e.jsx(p,{showColon:!0,children:"Search"}),e.jsx(m,{children:V})]}),e.jsxs(u,{children:[e.jsx(p,{showColon:!0,children:"Age"}),e.jsx(m,{children:B})]}),e.jsxs(u,{children:[e.jsx(p,{showColon:!0,children:"Countries"}),e.jsx(m,{children:JSON.stringify(i)})]}),e.jsxs(u,{children:[e.jsx(p,{showColon:!0,children:"Currency"}),e.jsx(m,{children:x})]}),e.jsxs(u,{children:[e.jsx(p,{showColon:!0,children:"Date"}),e.jsx(m,{children:T})]}),e.jsxs(u,{children:[e.jsx(p,{showColon:!0,children:"Date Range"}),e.jsx(m,{children:y})]})]})]})}},I={name:"In DynamicPage",render:l=>e.jsx(ee,{headerTitle:e.jsx(te,{header:e.jsxs(ae,{onClick:a=>{a.stopPropagation()},children:[e.jsx(D,{children:"Variant 1"}),e.jsx(D,{selected:!0,children:"Variant 2"})]})}),headerContent:e.jsx(ne,{children:e.jsxs(g,{...l,hideToolbar:!0,children:[e.jsx(t,{label:"StepInput",children:e.jsx(F,{})}),e.jsx(t,{label:"MultiInput",active:!0,required:!0,children:e.jsx(_,{required:!0,tokens:e.jsxs(e.Fragment,{children:[e.jsx(s,{text:"Argentina",selected:!0}),e.jsx(s,{text:"Bulgaria"}),e.jsx(s,{text:"England"}),e.jsx(s,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(j,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",visibleInFilterBar:!1,children:e.jsx(N,{})}),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(C,{children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{selected:!0,children:"Option 2"}),e.jsx(n,{children:"Option 3"}),e.jsx(n,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",visibleInFilterBar:!1,children:e.jsxs(C,{children:[e.jsx(n,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(n,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(n,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(n,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(n,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",visibleInFilterBar:!1,children:e.jsxs(O,{children:[e.jsx(o,{text:"MultiComboBoxItem 1"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(o,{text:"MultiComboBoxItem 3"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",visibleInFilterBar:!1,children:e.jsxs(U,{children:[e.jsx(d,{text:"ComboBoxItem 1"}),e.jsx(d,{text:"ComboBoxItem 2"}),e.jsx(d,{text:"ComboBoxItem 3"}),e.jsx(d,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(S,{style:{minWidth:"auto"}})})]})}),children:e.jsx("div",{style:{background:"cadetblue",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(m,{style:{color:"white"},children:"Content"})})})};var R,f,M;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(f=h.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var v,k,w;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
      age,
      countries,
      currency,
      date,
      dateRange,
      search
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
    return <>
        <FilterBar showResetButton search={<Input onInput={handleSearch} />} onRestore={handleRestore} onFiltersDialogOpen={handleFiltersDialogOpen}>
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
            <DatePicker value={date} onChange={handleDateChange} style={{
            minWidth: 'auto'
          }} on />
          </FilterGroupItem>
          <FilterGroupItem label="Date Range" active={!!dateRange} visibleInFilterBar={false}>
            <DateRangePicker value={dateRange} onChange={handleDateRangeChange} style={{
            minWidth: 'auto'
          }} on />
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
}`,...(w=(k=b.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var A,P,L;I.parameters={...I.parameters,docs:{...(A=I.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(L=(P=I.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const xe=["Default","WithLogic","InDynamicPage"],ke=Object.freeze(Object.defineProperty({__proto__:null,Default:h,InDynamicPage:I,WithLogic:b,__namedExportsOrder:xe,default:se},Symbol.toStringTag,{value:"Module"}));export{ke as C,h as D,I,b as W};
