import{j as e}from"./ManagedStyles-B3AuKgSD.js";import{r as S}from"./index-BP8_t0zE.js";import{D as ie}from"./index-DI_LVCU3.js";import{D as le,a as ae}from"./index-BjlxZw8Z.js";import{a as F,F as t}from"./index-CXQe0U9f.js";import{F as x,a as se}from"./index-DOzijD-M.js";import{T as p}from"./index-xGquCu8c.js";import{V as de,a as f}from"./VariantItem-Chj6amzt.js";import{S as G}from"./index-Bk5pc6Ic.js";import{R as Y}from"./index-ByO5xPxx.js";import{M as E}from"./index-BgggruPw.js";import{T as a}from"./index-0Jwp-6QW.js";import{S as D}from"./index-B41kIp8S.js";import{C as H,a as u}from"./index-Dm1mVPcO.js";import{D as R}from"./index-BHrUc4X6.js";import{I as y}from"./index-CG3xMjfT.js";import{T as ce}from"./index-DkuLACJC.js";import{S as h}from"./index-B08FjVsa.js";import{O as n}from"./index-BCmsNf4P.js";import{M as v,a as o}from"./index-fFk0LaiC.js";import{D as ue}from"./index-D6gMVlIR.js";import{L as m}from"./index-LEKsoR62.js";const xe={title:"Layouts & Floorplans / FilterBar",component:F,args:{search:e.jsx(y,{}),header:e.jsx(ce,{children:"Test"}),filterContainerWidth:"13.125rem"},argTypes:{activeFiltersCount:{control:"number"},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},portalContainer:{control:{disable:!0}},filterContainerWidth:{control:"text"},as:{control:{disable:!0}}}},C={render:i=>e.jsxs(F,{...i,children:[e.jsx(t,{label:"StepInput",required:!0,children:e.jsx(G,{required:!0})}),e.jsx(t,{label:"RatingIndicator",children:e.jsx(Y,{})}),e.jsx(t,{label:"MultiInput",active:!0,children:e.jsx(E,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(a,{text:"Argentina",selected:!0}),e.jsx(a,{text:"Bulgaria"}),e.jsx(a,{text:"England"}),e.jsx(a,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(y,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",children:e.jsx(D,{})}),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(h,{children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{selected:!0,children:"Option 2"}),e.jsx(n,{children:"Option 3"}),e.jsx(n,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",children:e.jsxs(h,{children:[e.jsx(n,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(n,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(n,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(n,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(n,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",children:e.jsxs(v,{children:[e.jsx(o,{text:"MultiComboBoxItem 1"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(o,{text:"MultiComboBoxItem 3"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",children:e.jsxs(H,{children:[e.jsx(u,{text:"ComboBoxItem 1"}),e.jsx(u,{text:"ComboBoxItem 2"}),e.jsx(u,{text:"ComboBoxItem 3"}),e.jsx(u,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(R,{style:{minWidth:"auto"}})})]})},pe={age:37,countries:{},currency:"USD",date:"",dateRange:"",search:""};function me(i,r){switch(r.type){case"SET_AGE":return{...i,age:r.payload};case"SET_COUNTRIES":return{...i,countries:r.payload};case"SET_CURRENCY":return{...i,currency:r.payload};case"SET_DATE":return{...i,date:r.payload};case"SET_DATE_RANGE":return{...i,dateRange:r.payload};case"SET_SEARCH":return{...i,search:r.payload};case"DIALOG_RESTORE":return r.payload;default:return i}}const j={render:i=>{const[r,d]=S.useReducer(me,pe),{age:I,countries:s,currency:c,date:b,dateRange:g,search:k}=r,O=S.useRef(),J=l=>{d({type:"SET_SEARCH",payload:l.target.value})},z=l=>{d({type:"SET_AGE",payload:l.target.value})},K=l=>{const ne=l.detail.items.reduce((re,oe)=>({...re,[oe.getAttribute("text").toLowerCase()]:!0}),{});d({type:"SET_COUNTRIES",payload:ne})},Q=l=>{d({type:"SET_CURRENCY",payload:l.detail.selectedOption.textContent})},X=l=>{l.detail.valid&&d({type:"SET_DATE",payload:l.detail.value})},Z=l=>{l.detail.valid&&d({type:"SET_DATE_RANGE",payload:l.detail.value})},ee=()=>{O.current=r},te=()=>{d({type:"DIALOG_RESTORE",payload:O.current})};return e.jsxs(e.Fragment,{children:[e.jsxs(F,{showResetButton:!0,search:e.jsx(y,{onInput:J}),onRestore:te,onFiltersDialogOpen:ee,children:[e.jsx(t,{label:"Age",active:!!I,required:!0,children:e.jsx(G,{value:I,onChange:z,required:!0})}),e.jsx(t,{label:"Countries",active:Object.keys(s).length>0,children:e.jsxs(v,{onSelectionChange:K,children:[e.jsx(o,{text:"Argentina",selected:s.argentina}),e.jsx(o,{text:"Bulgaria",selected:s.bulgaria}),e.jsx(o,{text:"Finland",selected:s.finland}),e.jsx(o,{text:"Germany",selected:s.germany}),e.jsx(o,{text:"Ireland",selected:s.ireland}),e.jsx(o,{text:"Ukraine",selected:s.ukraine}),e.jsx(o,{text:"USA",selected:s.usa})]})}),e.jsx(t,{label:"Currency",active:!!c,children:e.jsxs(h,{onChange:Q,children:[e.jsx(n,{additionalText:"€",selected:c==="EUR",children:"EUR"}),e.jsx(n,{additionalText:"$",selected:c==="USD",children:"USD"}),e.jsx(n,{additionalText:"£",selected:c==="GBP",children:"GBP"}),e.jsx(n,{additionalText:"₺",selected:c==="TRY",children:"TRY"}),e.jsx(n,{additionalText:"¥",selected:c==="JPY",children:"JPY"})]})}),e.jsx(t,{label:"Date",active:!!b,children:e.jsx(ue,{value:b,onChange:X,style:{minWidth:"auto"},on:!0})}),e.jsx(t,{label:"Date Range",active:!!g,visibleInFilterBar:!1,children:e.jsx(R,{value:g,onChange:Z,style:{minWidth:"auto"},on:!0})})]}),e.jsxs(x,{direction:se.Column,children:[e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Search"}),e.jsx(p,{children:k})]}),e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Age"}),e.jsx(p,{children:I})]}),e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Countries"}),e.jsx(p,{children:JSON.stringify(s)})]}),e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Currency"}),e.jsx(p,{children:c})]}),e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Date"}),e.jsx(p,{children:b})]}),e.jsxs(x,{children:[e.jsx(m,{showColon:!0,children:"Date Range"}),e.jsx(p,{children:g})]})]})]})}},B={name:"In DynamicPage",render:i=>e.jsx(ie,{headerTitle:e.jsx(le,{header:e.jsxs(de,{onClick:r=>{r.stopPropagation()},children:[e.jsx(f,{children:"Variant 1"}),e.jsx(f,{selected:!0,children:"Variant 2"})]})}),headerContent:e.jsx(ae,{children:e.jsxs(F,{...i,hideToolbar:!0,children:[e.jsx(t,{label:"StepInput",children:e.jsx(G,{})}),e.jsx(t,{label:"MultiInput",active:!0,required:!0,children:e.jsx(E,{required:!0,tokens:e.jsxs(e.Fragment,{children:[e.jsx(a,{text:"Argentina",selected:!0}),e.jsx(a,{text:"Bulgaria"}),e.jsx(a,{text:"England"}),e.jsx(a,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",children:e.jsx(y,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",visibleInFilterBar:!1,children:e.jsx(D,{})}),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,children:e.jsxs(h,{children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{selected:!0,children:"Option 2"}),e.jsx(n,{children:"Option 3"}),e.jsx(n,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",visibleInFilterBar:!1,children:e.jsxs(h,{children:[e.jsx(n,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(n,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(n,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(n,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(n,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultBox w/ initial selected",groupName:"Group 1",visibleInFilterBar:!1,children:e.jsxs(v,{children:[e.jsx(o,{text:"MultiComboBoxItem 1"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(o,{text:"MultiComboBoxItem 3"}),e.jsx(o,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",visibleInFilterBar:!1,children:e.jsxs(H,{children:[e.jsx(u,{text:"ComboBoxItem 1"}),e.jsx(u,{text:"ComboBoxItem 2"}),e.jsx(u,{text:"ComboBoxItem 3"}),e.jsx(u,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",children:e.jsx(R,{style:{minWidth:"auto"}})})]})}),children:e.jsx("div",{style:{background:"cadetblue",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(p,{style:{color:"white"},children:"Content"})})})},T={render(i){const r=S.useId(),[d,I]=S.useState([e.jsx(t,{label:"StepInput",required:!0,orderId:`${r}-0`,children:e.jsx(G,{required:!0})},`${r}-0`),e.jsx(t,{label:"RatingIndicator",orderId:`${r}-1`,children:e.jsx(Y,{})},`${r}-1`),e.jsx(t,{label:"MultiInput",active:!0,orderId:`${r}-2`,children:e.jsx(E,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(a,{text:"Argentina",selected:!0}),e.jsx(a,{text:"Bulgaria"}),e.jsx(a,{text:"England"}),e.jsx(a,{text:"Finland"})]})})},`${r}-2`),e.jsx(t,{label:"Input",orderId:`${r}-3`,children:e.jsx(y,{placeholder:"Placeholder"})},`${r}-3`),e.jsx(t,{label:"Switch",orderId:`${r}-4`,children:e.jsx(D,{})},`${r}-4`),e.jsx(t,{label:"SELECT w/ initial selected",visibleInFilterBar:!1,orderId:`${r}-5`,children:e.jsxs(h,{children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{selected:!0,children:"Option 2"}),e.jsx(n,{children:"Option 3"}),e.jsx(n,{children:"Option 4"})]})},`${r}-5`)]),s=c=>{I(b=>c.detail.orderIds.map(g=>({...b.find(O=>O.props.orderId===g)})))};return e.jsx(F,{...i,onFiltersDialogSave:s,enableReordering:!0,showResetButton:!0,children:d})}};var M,w,A;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(A=(w=C.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var P,L,q;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(L=j.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var _,$,N;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=($=B.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var U,W,V;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(V=(W=T.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const he=["Default","WithLogic","InDynamicPage","WithReordering"],Le=Object.freeze(Object.defineProperty({__proto__:null,Default:C,InDynamicPage:B,WithLogic:j,WithReordering:T,__namedExportsOrder:he,default:xe},Symbol.toStringTag,{value:"Module"}));export{Le as C,C as D,B as I,j as W,T as a};
