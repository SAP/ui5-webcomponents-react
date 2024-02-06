import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as x}from"./index-OjgoNOWw.js";import{D as ee}from"./index-bYVVHVV1.js";import{D as te,a as ne}from"./index-Usj_FhBA.js";import{a as g,F as t}from"./index-P9RBhvUi.js";import{F as c,a as oe}from"./index-sHoRIkfF.js";import{T as d}from"./index-G1ylA0vb.js";import{V as ae,a as O}from"./VariantItem-EtljzJt2.js";import{S as T}from"./index-q69b2gFA.js";import{R as ie}from"./index-MghFh2bF.js";import{M as E}from"./index-obZXMYe6.js";import{T as r}from"./index-XffIM1Qo.js";import{S as L}from"./index-maI4SpEk.js";import{C as A,a as l}from"./index-WTSZCyfg.js";import{D as y}from"./index-RMYIEVIt.js";import{I as j}from"./index-HcQbvDn7.js";import{T as re}from"./index-HdPNeAOO.js";import{S as C}from"./index-_o9-AyAS.js";import{O as n}from"./index-4kg1Mrci.js";import{M as S,a as o}from"./index-xrtDYVSm.js";import{D as le}from"./index-96LJzsJq.js";import{L as u}from"./index-m5rAO5ZE.js";const se={title:"Layouts & Floorplans / FilterBar",component:g,args:{search:e.jsx(j,{}),header:e.jsx(re,{children:"Test"}),filterContainerWidth:"13.125rem"},argTypes:{activeFiltersCount:{control:"number"},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},portalContainer:{control:{disable:!0}},filterContainerWidth:{control:"text"},as:{control:{disable:!0}}}},h={render:m=>e.jsxs(g,{...m,children:[e.jsx(t,{label:"StepInput",required:!0,children:e.jsx(T,{required:!0})}),e.jsx(t,{label:"RatingIndicator",children:e.jsx(ie,{})}),e.jsx(t,{label:"MultiInput",active:!0,children:e.jsx(E,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(r,{text:"Argentina",selected:!0}),e.jsx(r,{text:"Bulgaria"}),e.jsx(r,{text:"England"}),e.jsx(r,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(j,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",children:e.jsx(L,{})}),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(C,{children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{selected:!0,children:"Option 2"}),e.jsx(n,{children:"Option 3"}),e.jsx(n,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",children:e.jsxs(C,{children:[e.jsx(n,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(n,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(n,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(n,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(n,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",children:e.jsxs(S,{children:[e.jsx(o,{text:"MultiComboBoxItem 1"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(o,{text:"MultiComboBoxItem 3"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",children:e.jsxs(A,{children:[e.jsx(l,{text:"ComboBoxItem 1"}),e.jsx(l,{text:"ComboBoxItem 2"}),e.jsx(l,{text:"ComboBoxItem 3"}),e.jsx(l,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(y,{style:{minWidth:"auto"}})})]})},b={render:m=>{const[p,N]=x.useState(37),[i,U]=x.useState({}),[s,V]=x.useState("USD"),[B,W]=x.useState(""),[F,q]=x.useState(""),[Y,J]=x.useState(""),_=a=>{J(a.target.value)},H=a=>{N(a.target.value)},$=a=>{U(a.detail.items.reduce((X,Z)=>({...X,[Z.getAttribute("text").toLowerCase()]:!0}),{}))},z=a=>{V(a.detail.selectedOption.textContent)},K=a=>{a.detail.valid&&W(a.detail.value)},Q=a=>{a.detail.valid&&q(a.detail.value)};return e.jsxs(e.Fragment,{children:[e.jsxs(g,{...m,search:e.jsx(j,{onInput:_}),children:[e.jsx(t,{label:"Age",active:!!p,required:!0,children:e.jsx(T,{value:p,onChange:H,required:!0})}),e.jsx(t,{label:"Countries",active:Object.keys(i).length>0,children:e.jsxs(S,{onSelectionChange:$,children:[e.jsx(o,{text:"Argentina",selected:i.argentina}),e.jsx(o,{text:"Bulgaria",selected:i.bulgaria}),e.jsx(o,{text:"Finland",selected:i.finland}),e.jsx(o,{text:"Germany",selected:i.germany}),e.jsx(o,{text:"Ireland",selected:i.ireland}),e.jsx(o,{text:"Ukraine",selected:i.ukraine}),e.jsx(o,{text:"USA",selected:i.usa})]})}),e.jsx(t,{label:"Currency",active:!!s,children:e.jsxs(C,{onChange:z,children:[e.jsx(n,{additionalText:"€",selected:s==="EUR",children:"EUR"}),e.jsx(n,{additionalText:"$",selected:s==="USD",children:"USD"}),e.jsx(n,{additionalText:"£",selected:s==="GBP",children:"GBP"}),e.jsx(n,{additionalText:"₺",selected:s==="TRY",children:"TRY"}),e.jsx(n,{additionalText:"¥",selected:s==="JPY",children:"JPY"})]})}),e.jsx(t,{label:"Date",active:!!B,children:e.jsx(le,{value:B,onChange:K,style:{minWidth:"auto"},on:!0})}),e.jsx(t,{label:"Date Range",active:!!F,visibleInFilterBar:!1,children:e.jsx(y,{value:F,onChange:Q,style:{minWidth:"auto"},on:!0})})]}),e.jsxs(c,{direction:oe.Column,children:[e.jsxs(c,{children:[e.jsx(u,{showColon:!0,children:"Search"}),e.jsx(d,{children:Y})]}),e.jsxs(c,{children:[e.jsx(u,{showColon:!0,children:"Age"}),e.jsx(d,{children:p})]}),e.jsxs(c,{children:[e.jsx(u,{showColon:!0,children:"Countries"}),e.jsx(d,{children:JSON.stringify(i)})]}),e.jsxs(c,{children:[e.jsx(u,{showColon:!0,children:"Currency"}),e.jsx(d,{children:s})]}),e.jsxs(c,{children:[e.jsx(u,{showColon:!0,children:"Date"}),e.jsx(d,{children:B})]}),e.jsxs(c,{children:[e.jsx(u,{showColon:!0,children:"Date Range"}),e.jsx(d,{children:F})]})]})]})}},I={name:"In DynamicPage",render:m=>e.jsx(ee,{headerTitle:e.jsx(te,{header:e.jsxs(ae,{onClick:p=>{p.stopPropagation()},children:[e.jsx(O,{children:"Variant 1"}),e.jsx(O,{selected:!0,children:"Variant 2"})]})}),headerContent:e.jsx(ne,{children:e.jsxs(g,{...m,hideToolbar:!0,children:[e.jsx(t,{label:"StepInput",children:e.jsx(T,{})}),e.jsx(t,{label:"MultiInput",active:!0,required:!0,children:e.jsx(E,{required:!0,tokens:e.jsxs(e.Fragment,{children:[e.jsx(r,{text:"Argentina",selected:!0}),e.jsx(r,{text:"Bulgaria"}),e.jsx(r,{text:"England"}),e.jsx(r,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(j,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",visibleInFilterBar:!1,children:e.jsx(L,{})}),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(C,{children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{selected:!0,children:"Option 2"}),e.jsx(n,{children:"Option 3"}),e.jsx(n,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",visibleInFilterBar:!1,children:e.jsxs(C,{children:[e.jsx(n,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(n,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(n,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(n,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(n,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",visibleInFilterBar:!1,children:e.jsxs(S,{children:[e.jsx(o,{text:"MultiComboBoxItem 1"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(o,{text:"MultiComboBoxItem 3"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",visibleInFilterBar:!1,children:e.jsxs(A,{children:[e.jsx(l,{text:"ComboBoxItem 1"}),e.jsx(l,{text:"ComboBoxItem 2"}),e.jsx(l,{text:"ComboBoxItem 3"}),e.jsx(l,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(y,{style:{minWidth:"auto"}})})]})}),children:e.jsx("div",{style:{background:"cadetblue",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(d,{style:{color:"white"},children:"Content"})})})};var G,D,M;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(M=(D=h.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var f,k,v;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [age, setAge] = useState(37);
    const [countries, setCountries] = useState<Record<string, boolean>>({});
    const [currency, setCurrency] = useState('USD');
    const [date, setDate] = useState('');
    const [dateRange, setDateRange] = useState('');
    const [search, setSearch] = useState('');
    const handleSearch = e => {
      setSearch(e.target.value);
    };
    const handleAgeChange = e => {
      setAge(e.target.value);
    };
    const handleCountriesChange = e => {
      setCountries(e.detail.items.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.getAttribute('text').toLowerCase()]: true
        };
      }, {}));
    };
    const handleCurrencyChange = e => {
      setCurrency(e.detail.selectedOption.textContent);
    };
    const handleDateChange = e => {
      if (e.detail.valid) {
        setDate(e.detail.value);
      }
    };
    const handleDateRangeChange = e => {
      if (e.detail.valid) {
        setDateRange(e.detail.value);
      }
    };
    return <>
        <FilterBar {...args} search={<Input onInput={handleSearch} />}>
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
}`,...(v=(k=b.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,P,R;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(P=I.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const ce=["Default","WithLogic","InDynamicPage"],ve=Object.freeze(Object.defineProperty({__proto__:null,Default:h,InDynamicPage:I,WithLogic:b,__namedExportsOrder:ce,default:se},Symbol.toStringTag,{value:"Module"}));export{ve as C,h as D,I,b as W};
