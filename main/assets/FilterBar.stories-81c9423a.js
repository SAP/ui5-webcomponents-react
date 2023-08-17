import{j as e}from"./jsx-runtime-d079401a.js";import{r as u}from"./index-f1f2c4b1.js";import{D as K}from"./index-6b12a3df.js";import{D as Q,a as X}from"./index-00aeb691.js";import{F as C,a as t}from"./index-df3001f3.js";import{F as c,b as Z}from"./index-43333f43.js";import{T as x}from"./index-bb1f9706.js";import{a as ee,V as G}from"./VariantItem-3e2ede98.js";import{S as F}from"./index-e8dcff92.js";import{R as te}from"./index-1cd5afe8.js";import{M as E}from"./index-dc9c98a8.js";import{T as a}from"./index-7bbe819e.js";import{S as L}from"./index-1566f092.js";import{C as A,a as n}from"./index-cac6690a.js";import{D as T}from"./index-43548f18.js";import{I as y}from"./index-803ff69d.js";import{T as oe}from"./index-3ee0dff9.js";import{S as I}from"./index-df057e40.js";import{O as o}from"./index-1206ae53.js";import{M as O,a as i}from"./index-f9fb51de.js";import{D as ie}from"./index-3797d1de.js";import{L as m}from"./index-35809501.js";const re={title:"Layouts & Floorplans / FilterBar",component:C,args:{search:e.jsx(y,{placeholder:"Search"}),header:e.jsx(oe,{children:"Test"}),filterContainerWidth:"13.125rem"},argTypes:{activeFiltersCount:{control:"number"},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},portalContainer:{control:{disable:!0}},filterContainerWidth:{control:"text"},as:{control:{disable:!0}}}},p={render:s=>e.jsxs(C,{...s,children:[e.jsx(t,{label:"StepInput",required:!0,children:e.jsx(F,{required:!0})}),e.jsx(t,{label:"RatingIndicator",children:e.jsx(te,{})}),e.jsx(t,{label:"MultiInput",active:!0,children:e.jsx(E,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(a,{text:"Argentina",selected:!0}),e.jsx(a,{text:"Bulgaria"}),e.jsx(a,{text:"England"}),e.jsx(a,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(y,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",children:e.jsx(L,{})}),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(I,{children:[e.jsx(o,{children:"Option 1"}),e.jsx(o,{selected:!0,children:"Option 2"}),e.jsx(o,{children:"Option 3"}),e.jsx(o,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",children:e.jsxs(I,{children:[e.jsx(o,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(o,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(o,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(o,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(o,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",children:e.jsxs(O,{children:[e.jsx(i,{text:"MultiComboBoxItem 1"}),e.jsx(i,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(i,{text:"MultiComboBoxItem 3"}),e.jsx(i,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",children:e.jsxs(A,{children:[e.jsx(n,{text:"ComboBoxItem 1"}),e.jsx(n,{text:"ComboBoxItem 2"}),e.jsx(n,{text:"ComboBoxItem 3"}),e.jsx(n,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(T,{style:{minWidth:"auto"}})})]})},h={render:()=>{const[s,g]=u.useState(37),[l,N]=u.useState({}),[d,U]=u.useState("USD"),[j,V]=u.useState(""),[B,W]=u.useState(""),q=r=>{g(r.target.value)},Y=r=>{N(r.detail.items.reduce(($,z)=>({...$,[z.getAttribute("text").toLowerCase()]:!0}),{}))},J=r=>{U(r.detail.selectedOption.textContent)},_=r=>{r.detail.valid&&V(r.detail.value)},H=r=>{r.detail.valid&&W(r.detail.value)};return e.jsxs(e.Fragment,{children:[e.jsxs(C,{children:[e.jsx(t,{label:"Age",active:!!s,required:!0,children:e.jsx(F,{value:s,onChange:q,required:!0})}),e.jsx(t,{label:"Countries",active:Object.keys(l).length>0,children:e.jsxs(O,{onSelectionChange:Y,children:[e.jsx(i,{text:"Argentina",selected:l.argentina}),e.jsx(i,{text:"Bulgaria",selected:l.bulgaria}),e.jsx(i,{text:"Finland",selected:l.finland}),e.jsx(i,{text:"Germany",selected:l.germany}),e.jsx(i,{text:"Ireland",selected:l.ireland}),e.jsx(i,{text:"Ukraine",selected:l.ukraine}),e.jsx(i,{text:"USA",selected:l.usa})]})}),e.jsx(t,{label:"Currency",active:!!d,children:e.jsxs(I,{onChange:J,children:[e.jsx(o,{additionalText:"€",selected:d==="EUR",children:"EUR"}),e.jsx(o,{additionalText:"$",selected:d==="USD",children:"USD"}),e.jsx(o,{additionalText:"£",selected:d==="GBP",children:"GBP"}),e.jsx(o,{additionalText:"₺",selected:d==="TRY",children:"TRY"}),e.jsx(o,{additionalText:"¥",selected:d==="JPY",children:"JPY"})]})}),e.jsx(t,{label:"Date",active:!!j,children:e.jsx(ie,{value:j,onChange:_,style:{minWidth:"auto"},on:!0})}),e.jsx(t,{label:"Date Range",active:!!B,visibleInFilterBar:!1,children:e.jsx(T,{value:B,onChange:H,style:{minWidth:"auto"},on:!0})})]}),e.jsxs(c,{direction:Z.Column,children:[e.jsxs(c,{children:[e.jsx(m,{showColon:!0,children:"Age"}),e.jsx(x,{children:s})]}),e.jsxs(c,{children:[e.jsx(m,{showColon:!0,children:"Countries"}),e.jsx(x,{children:JSON.stringify(l)})]}),e.jsxs(c,{children:[e.jsx(m,{showColon:!0,children:"Currency"}),e.jsx(x,{children:d})]}),e.jsxs(c,{children:[e.jsx(m,{showColon:!0,children:"Date"}),e.jsx(x,{children:j})]}),e.jsxs(c,{children:[e.jsx(m,{showColon:!0,children:"Date Range"}),e.jsx(x,{children:B})]})]})]})}},b={name:"In DynamicPage",render:s=>e.jsx(K,{headerTitle:e.jsx(Q,{header:e.jsxs(ee,{onClick:g=>{g.stopPropagation()},children:[e.jsx(G,{children:"Variant 1"}),e.jsx(G,{selected:!0,children:"Variant 2"})]})}),headerContent:e.jsx(X,{children:e.jsxs(C,{...s,hideToolbar:!0,children:[e.jsx(t,{label:"StepInput",children:e.jsx(F,{})}),e.jsx(t,{label:"MultiInput",active:!0,required:!0,children:e.jsx(E,{required:!0,tokens:e.jsxs(e.Fragment,{children:[e.jsx(a,{text:"Argentina",selected:!0}),e.jsx(a,{text:"Bulgaria"}),e.jsx(a,{text:"England"}),e.jsx(a,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(y,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",visibleInFilterBar:!1,children:e.jsx(L,{})}),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(I,{children:[e.jsx(o,{children:"Option 1"}),e.jsx(o,{selected:!0,children:"Option 2"}),e.jsx(o,{children:"Option 3"}),e.jsx(o,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",visibleInFilterBar:!1,children:e.jsxs(I,{children:[e.jsx(o,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(o,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(o,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(o,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(o,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",visibleInFilterBar:!1,children:e.jsxs(O,{children:[e.jsx(i,{text:"MultiComboBoxItem 1"}),e.jsx(i,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(i,{text:"MultiComboBoxItem 3"}),e.jsx(i,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",visibleInFilterBar:!1,children:e.jsxs(A,{children:[e.jsx(n,{text:"ComboBoxItem 1"}),e.jsx(n,{text:"ComboBoxItem 2"}),e.jsx(n,{text:"ComboBoxItem 3"}),e.jsx(n,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(T,{style:{minWidth:"auto"}})})]})}),children:e.jsx("div",{style:{background:"cadetblue",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(x,{style:{color:"white"},children:"Content"})})})};var S,D,M;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(D=p.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var f,k,v;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [age, setAge] = useState(37);
    const [countries, setCountries] = useState<Record<string, boolean>>({});
    const [currency, setCurrency] = useState('USD');
    const [date, setDate] = useState('');
    const [dateRange, setDateRange] = useState('');
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
        <FilterBar>
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
}`,...(v=(k=h.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,P,R;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(P=b.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const le=["Default","WithLogic","InDynamicPage"],De=Object.freeze(Object.defineProperty({__proto__:null,Default:p,InDynamicPage:b,WithLogic:h,__namedExportsOrder:le,default:re},Symbol.toStringTag,{value:"Module"}));export{De as C,p as D,b as I,h as W};
//# sourceMappingURL=FilterBar.stories-81c9423a.js.map
