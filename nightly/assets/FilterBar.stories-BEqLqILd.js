import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as P}from"./Title-CAqRFLM1.js";import{r as y}from"./index-RYns6xqu.js";import{T as x}from"./index-CHNB8-uH.js";import{a as j,F as t}from"./index-BNM7p85P.js";import{F as m,a as xe}from"./index-DufQBMho.js";import{V as L,a as K}from"./VariantItem-hLwXmTQ7.js";import{R as ee}from"./index-Ck5HV21e.js";import{M as v}from"./index-DgBBvwME.js";import{T as s}from"./index-BZQC3eTL.js";import{C as te,a as I}from"./index-DkrN-gw0.js";import{D as R}from"./index-BoNx52NR.js";import{D as me,a as he,b as Ie}from"./index-Dwwynvu2.js";import{I as C}from"./index-Chq0VNNc.js";import{T as ge}from"./index-B8vlftc9.js";import{S as D}from"./index-24SAumZJ.js";import{S as k}from"./index-C1jRMRbk.js";import{S as F}from"./index-UK0OYeGo.js";import{O as i}from"./index-B2TI7Wjv.js";import{M as w,a}from"./index-BDwjFdBQ.js";import{D as ye}from"./index-CTMmGNfE.js";import{L as h}from"./index-D5w6Jnaw.js";const be={title:"Layouts & Floorplans / FilterBar",component:j,args:{search:e.jsx(C,{}),header:e.jsx(ge,{level:P.H2,size:P.H4,children:"FilterBar"}),filterContainerWidth:"13.125rem"},argTypes:{activeFiltersCount:{control:"number"},search:{control:{disable:!0}},header:{control:{disable:!0}},children:{control:{disable:!0}},filterContainerWidth:{control:"text"},as:{control:{disable:!0}}}},T={render:l=>e.jsxs(j,{...l,children:[e.jsx(t,{label:"StepInput",required:!0,filterKey:"stepInput",children:e.jsx(D,{required:!0})}),e.jsx(t,{label:"RatingIndicator",filterKey:"ratingIndicator",children:e.jsx(ee,{})}),e.jsx(t,{label:"MultiInput",active:!0,filterKey:"multiInput",children:e.jsx(v,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(s,{text:"Argentina",selected:!0}),e.jsx(s,{text:"Bulgaria"}),e.jsx(s,{text:"England"}),e.jsx(s,{text:"Finland"})]})})}),e.jsx(t,{label:"Input",filterKey:"input",children:e.jsx(C,{placeholder:"Placeholder"})}),e.jsx(t,{label:"Switch",filterKey:"switch",children:e.jsx(k,{})}),e.jsx(t,{label:"SELECT w/ initial selected",hiddenInFilterBar:!0,filterKey:"selectInitialSelected",children:e.jsxs(F,{children:[e.jsx(i,{children:"Option 1"}),e.jsx(i,{selected:!0,children:"Option 2"}),e.jsx(i,{children:"Option 3"}),e.jsx(i,{children:"Option 4"})]})}),e.jsx(t,{label:"SELECT w/o initial selected",filterKey:"selectNoInitialSelected",children:e.jsxs(F,{children:[e.jsx(i,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(i,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(i,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(i,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(i,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{label:"MultiBox w/ initial selected",groupName:"Group 1",filterKey:"multiBoxInitialSelected",children:e.jsxs(w,{children:[e.jsx(a,{text:"MultiComboBoxItem 1"}),e.jsx(a,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(a,{text:"MultiComboBoxItem 3"}),e.jsx(a,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{label:"ComboBox w/o initial selected",groupName:"Group 2",filterKey:"comboBoxNoInitialSelected",children:e.jsxs(te,{children:[e.jsx(I,{text:"ComboBoxItem 1"}),e.jsx(I,{text:"ComboBoxItem 2"}),e.jsx(I,{text:"ComboBoxItem 3"}),e.jsx(I,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{label:"Date Picker",groupName:"Group 2",filterKey:"datePicker",children:e.jsx(R,{style:{minWidth:"auto"}})})]})},Fe={age:37,countries:{},currency:"USD",date:"",dateRange:"",search:""};function je(l,r){switch(r.type){case"SET_AGE":return{...l,age:r.payload};case"SET_COUNTRIES":return{...l,countries:r.payload};case"SET_CURRENCY":return{...l,currency:r.payload};case"SET_DATE":return{...l,date:r.payload};case"SET_DATE_RANGE":return{...l,dateRange:r.payload};case"SET_SEARCH":return{...l,search:r.payload};case"DIALOG_RESTORE":return r.payload;default:return l}}const S={render:()=>{const[l,r]=y.useReducer(je,Fe),[c,b]=y.useState(new Set(["age","countries"])),{age:g,countries:d,currency:u,date:p,dateRange:o,search:E}=l,M=y.useRef(void 0),re=n=>{r({type:"SET_SEARCH",payload:n.target.value})},ie=n=>{r({type:"SET_AGE",payload:n.target.value})},le=n=>{const B=n.detail.items.reduce((ue,pe)=>({...ue,[pe.getAttribute("text").toLowerCase()]:!0}),{});r({type:"SET_COUNTRIES",payload:B})},ne=n=>{r({type:"SET_CURRENCY",payload:n.detail.selectedOption.textContent})},ae=n=>{n.detail.valid&&r({type:"SET_DATE",payload:n.detail.value})},oe=n=>{n.detail.valid&&r({type:"SET_DATE_RANGE",payload:n.detail.value})},se=()=>{M.current=l},de=n=>{const B=n.selectedFilterKeys;r({type:"DIALOG_RESTORE",payload:M.current}),b(new Set(B))},ce=n=>{const B=n.selectedFilterKeys;b(new Set(B))};return e.jsxs(e.Fragment,{children:[e.jsxs(j,{showResetButton:!0,search:e.jsx(C,{onInput:re}),onRestore:de,onFiltersDialogOpen:se,onFiltersDialogSelectionChange:ce,children:[e.jsx(t,{filterKey:"age",label:"Age",active:!!g,required:!0,children:e.jsx(D,{value:g,onChange:ie,required:!0})}),e.jsx(t,{filterKey:"countries",label:"Countries",active:Object.keys(d).length>0,hiddenInFilterBar:!c.has("countries"),children:e.jsxs(w,{onSelectionChange:le,children:[e.jsx(a,{text:"Argentina",selected:d.argentina}),e.jsx(a,{text:"Bulgaria",selected:d.bulgaria}),e.jsx(a,{text:"Finland",selected:d.finland}),e.jsx(a,{text:"Germany",selected:d.germany}),e.jsx(a,{text:"Ireland",selected:d.ireland}),e.jsx(a,{text:"Ukraine",selected:d.ukraine}),e.jsx(a,{text:"USA",selected:d.usa})]})}),e.jsx(t,{filterKey:"currency",label:"Currency",active:!!u,hiddenInFilterBar:!c.has("currency"),children:e.jsxs(F,{onChange:ne,children:[e.jsx(i,{additionalText:"€",selected:u==="EUR",children:"EUR"}),e.jsx(i,{additionalText:"$",selected:u==="USD",children:"USD"}),e.jsx(i,{additionalText:"£",selected:u==="GBP",children:"GBP"}),e.jsx(i,{additionalText:"₺",selected:u==="TRY",children:"TRY"}),e.jsx(i,{additionalText:"¥",selected:u==="JPY",children:"JPY"})]})}),e.jsx(t,{filterKey:"date",label:"Date",active:!!p,hiddenInFilterBar:!c.has("date"),children:e.jsx(ye,{value:p,onChange:ae,style:{minWidth:"auto"}})}),e.jsx(t,{filterKey:"date-range",label:"Date Range",active:!!o,hiddenInFilterBar:!c.has("date-range"),children:e.jsx(R,{value:o,onChange:oe,style:{minWidth:"auto"}})})]}),e.jsxs(m,{direction:xe.Column,children:[e.jsxs(m,{children:[e.jsx(h,{showColon:!0,children:"Search"}),e.jsx(x,{children:E})]}),e.jsxs(m,{children:[e.jsx(h,{showColon:!0,children:"Age"}),e.jsx(x,{children:g})]}),e.jsxs(m,{children:[e.jsx(h,{showColon:!0,children:"Countries"}),e.jsx(x,{children:JSON.stringify(d)})]}),e.jsxs(m,{children:[e.jsx(h,{showColon:!0,children:"Currency"}),e.jsx(x,{children:u})]}),e.jsxs(m,{children:[e.jsx(h,{showColon:!0,children:"Date"}),e.jsx(x,{children:p})]}),e.jsxs(m,{children:[e.jsx(h,{showColon:!0,children:"Date Range"}),e.jsx(x,{children:o})]}),e.jsx("hr",{style:{width:"100%"}}),e.jsxs(m,{children:[e.jsx(h,{showColon:!0,children:"Visible Filters"}),e.jsx(x,{children:Array.from(c).join(", ")})]})]})]})}},f={name:"In DynamicPage",render:l=>e.jsx(me,{style:{height:"800px",position:"relative",zIndex:0},titleArea:e.jsx(he,{style:{minHeight:"0px"},heading:e.jsxs(L,{onClick:r=>{r.stopPropagation()},children:[e.jsx(K,{children:"Variant 1"}),e.jsx(K,{selected:!0,children:"Variant 2"})]}),snappedHeading:e.jsxs(L,{onClick:r=>{r.stopPropagation()},children:[e.jsx(K,{children:"Variant 1"}),e.jsx(K,{selected:!0,children:"Variant 2"})]})}),headerArea:e.jsx(Ie,{children:e.jsxs(j,{...l,hideToolbar:!0,children:[e.jsx(t,{filterKey:"StepInput",label:"StepInput",children:e.jsx(D,{})}),e.jsx(t,{filterKey:"MultiInput",label:"MultiInput",active:!0,required:!0,children:e.jsx(v,{required:!0,tokens:e.jsxs(e.Fragment,{children:[e.jsx(s,{text:"Argentina",selected:!0}),e.jsx(s,{text:"Bulgaria"}),e.jsx(s,{text:"England"}),e.jsx(s,{text:"Finland"})]})})}),e.jsx(t,{filterKey:"Input",label:"Input",children:e.jsx(C,{placeholder:"Placeholder"})}),e.jsx(t,{filterKey:"Switch",label:"Switch",hiddenInFilterBar:!0,children:e.jsx(k,{})}),e.jsx(t,{filterKey:"select-init-selected",label:"SELECT w/ initial selected",hiddenInFilterBar:!0,children:e.jsxs(F,{children:[e.jsx(i,{children:"Option 1"}),e.jsx(i,{selected:!0,children:"Option 2"}),e.jsx(i,{children:"Option 3"}),e.jsx(i,{children:"Option 4"})]})}),e.jsx(t,{filterKey:"select-not-selected",label:"SELECT w/o initial selected",hiddenInFilterBar:!0,children:e.jsxs(F,{children:[e.jsx(i,{"data-key":"Test 1",selected:!0,icon:"add",children:"Test 1"}),e.jsx(i,{"data-key":"Test 2",icon:"add",children:"Test 2"}),e.jsx(i,{"data-key":"Test 3",icon:"add",children:"Test 3"}),e.jsx(i,{"data-key":"Test 4",icon:"add",children:"Test 4"}),e.jsx(i,{"data-key":"Test 5",icon:"add",children:"Test 5"})]})}),e.jsx(t,{filterKey:"mcb-selected",label:"MultBox w/ initial selected",groupName:"Group 1",hiddenInFilterBar:!0,children:e.jsxs(w,{children:[e.jsx(a,{text:"MultiComboBoxItem 1"}),e.jsx(a,{selected:!0,text:"MultiComboBoxItem 2"}),e.jsx(a,{text:"MultiComboBoxItem 3"}),e.jsx(a,{selected:!0,text:"MultiComboBoxItem 4"})]})}),e.jsx(t,{filterKey:"cb-not-selected",label:"ComboBox w/o initial selected",groupName:"Group 2",hiddenInFilterBar:!0,children:e.jsxs(te,{children:[e.jsx(I,{text:"ComboBoxItem 1"}),e.jsx(I,{text:"ComboBoxItem 2"}),e.jsx(I,{text:"ComboBoxItem 3"}),e.jsx(I,{text:"ComboBoxItem 4"})]})}),e.jsx(t,{filterKey:"date-picker",label:"Date Picker",groupName:"Group 2",children:e.jsx(R,{style:{minWidth:"auto"}})})]})}),children:e.jsx("div",{style:{background:"cadetblue",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(x,{style:{color:"white"},children:"Content"})})})},O={render(l){const r=y.useId(),[c,b]=y.useState({0:!0,1:!0,2:!0,3:!0,5:!0}),[g,d]=y.useState(["0","1","2","3","4","5"]),u=p=>{d(p.detail.reorderedFilterKeys),b(p.detail.selectedFilterKeys.reduce((o,E)=>(o[E]=!0,o),{}))};return e.jsx(j,{...l,enableReordering:!0,showResetButton:!0,onFiltersDialogSave:u,children:g.map(p=>{const o=!c[p];switch(p){case"0":return e.jsx(t,{filterKey:"0",label:"StepInput",required:!0,children:e.jsx(D,{required:!0})},`${r}-0`);case"1":return e.jsx(t,{filterKey:"1",label:"RatingIndicator",hiddenInFilterBar:o,children:e.jsx(ee,{})},`${r}-1`);case"2":return e.jsx(t,{filterKey:"2",label:"MultiInput",active:!0,hiddenInFilterBar:o,children:e.jsx(v,{tokens:e.jsxs(e.Fragment,{children:[e.jsx(s,{text:"Argentina",selected:!0}),e.jsx(s,{text:"Bulgaria"}),e.jsx(s,{text:"England"}),e.jsx(s,{text:"Finland"})]})})},`${r}-2`);case"3":return e.jsx(t,{filterKey:"3",label:"Input",hiddenInFilterBar:o,children:e.jsx(C,{placeholder:"Placeholder"})},`${r}-3`);case"4":return e.jsx(t,{filterKey:"4",label:"Switch",hiddenInFilterBar:o,children:e.jsx(k,{})},`${r}-4`);case"5":return e.jsx(t,{filterKey:"5",label:"SELECT w/ initial selected",hiddenInFilterBar:o,children:e.jsxs(F,{children:[e.jsx(i,{children:"Option 1"}),e.jsx(i,{selected:!0,children:"Option 2"}),e.jsx(i,{children:"Option 3"}),e.jsx(i,{children:"Option 4"})]})},`${r}-5`);default:return null}})})}},G={parameters:{docs:{source:{type:"code",transform:()=>`
        const InputEventOrigin = (props) => {
  const [origin, setOrigin] = useState("");

  const handleInput = (e) => {
    if (!!e.currentTarget.parentElement.dataset.inFilterBar) {
      setOrigin("FilterBar");
    } else {
      setOrigin("Filters Dialog");
    }
  };

  return (
    <>
      <FilterBar {...props}>
        <FilterGroupItem filterKey="input" label="Input">
          <Input onInput={handleInput} />
        </FilterGroupItem>
      </FilterBar>
      <br />
      <Label>Last fired input event origin:</Label>
      <Text>{origin}</Text>
    </>
  );
};

        `}}},render(l){const[r,c]=y.useState(""),b=g=>{g.currentTarget.parentElement.dataset.inFilterBar?c("FilterBar"):c("Filters Dialog")};return e.jsxs(e.Fragment,{children:[e.jsx(j,{...l,children:e.jsx(t,{filterKey:"input",label:"Input",children:e.jsx(C,{onInput:b})})}),e.jsx("br",{}),e.jsx(h,{children:"Last fired input event origin:"}),e.jsx(x,{children:r})]})}};var A,V,_;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    return <FilterBar {...args}>
        <FilterGroupItem label="StepInput" required filterKey="stepInput">
          <StepInput required />
        </FilterGroupItem>
        <FilterGroupItem label="RatingIndicator" filterKey="ratingIndicator">
          <RatingIndicator />
        </FilterGroupItem>
        <FilterGroupItem label="MultiInput" active filterKey="multiInput">
          <MultiInput tokens={<>
                <Token text="Argentina" selected />
                <Token text="Bulgaria" />
                <Token text="England" />
                <Token text="Finland" />
              </>} />
        </FilterGroupItem>
        <FilterGroupItem label="Input" filterKey="input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Switch" filterKey="switch">
          <Switch />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/ initial selected" hiddenInFilterBar filterKey="selectInitialSelected">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/o initial selected" filterKey="selectNoInitialSelected">
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
        <FilterGroupItem label="MultiBox w/ initial selected" groupName="Group 1" filterKey="multiBoxInitialSelected">
          <MultiComboBox>
            <MultiComboBoxItem text="MultiComboBoxItem 1" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
            <MultiComboBoxItem text="MultiComboBoxItem 3" />
            <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="ComboBox w/o initial selected" groupName="Group 2" filterKey="comboBoxNoInitialSelected">
          <ComboBox>
            <ComboBoxItem text="ComboBoxItem 1" />
            <ComboBoxItem text="ComboBoxItem 2" />
            <ComboBoxItem text="ComboBoxItem 3" />
            <ComboBoxItem text="ComboBoxItem 4" />
          </ComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Date Picker" groupName="Group 2" filterKey="datePicker">
          <DateRangePicker style={{
          minWidth: 'auto'
        }} />
        </FilterGroupItem>
      </FilterBar>;
  }
}`,...(_=(V=T.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var N,q,H;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [visibleFilters, setVisibleFilters] = useState(new Set(['age', 'countries']));
    const {
      age,
      countries,
      currency,
      date,
      dateRange,
      search
    } = state;
    const prevDialogOpenState = useRef(undefined);
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
    const handleRestore: FilterBarPropTypes['onRestore'] = payload => {
      const prevDialogOpenVisibleFilters = payload.selectedFilterKeys;
      dispatch({
        type: 'DIALOG_RESTORE',
        payload: prevDialogOpenState.current
      });
      setVisibleFilters(new Set(prevDialogOpenVisibleFilters));
    };
    const handleFiltersDialogSelectionChange: FilterBarPropTypes['onFiltersDialogSelectionChange'] = payload => {
      const visibleFilterKeys = payload.selectedFilterKeys;
      setVisibleFilters(new Set(visibleFilterKeys));
    };
    return <>
        <FilterBar showResetButton search={<Input onInput={handleSearch} />} onRestore={handleRestore} onFiltersDialogOpen={handleFiltersDialogOpen} onFiltersDialogSelectionChange={handleFiltersDialogSelectionChange}>
          <FilterGroupItem filterKey="age" label="Age" active={!!age} required>
            <StepInput value={age} onChange={handleAgeChange} required />
          </FilterGroupItem>
          <FilterGroupItem filterKey="countries" label="Countries" active={Object.keys(countries).length > 0} hiddenInFilterBar={!visibleFilters.has('countries')}>
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
          <FilterGroupItem filterKey="currency" label="Currency" active={!!currency} hiddenInFilterBar={!visibleFilters.has('currency')}>
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
            <DatePicker value={date} onChange={handleDateChange} style={{
            minWidth: 'auto'
          }} />
          </FilterGroupItem>
          <FilterGroupItem filterKey="date-range" label="Date Range" active={!!dateRange} hiddenInFilterBar={!visibleFilters.has('date-range')}>
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
          <hr style={{
          width: '100%'
        }} />
          <FlexBox>
            <Label showColon>Visible Filters</Label>
            <Text>{Array.from(visibleFilters).join(', ')}</Text>
          </FlexBox>
        </FlexBox>
      </>;
  }
}`,...(H=(q=S.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var U,W,$;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'In DynamicPage',
  render: args => {
    return <DynamicPage style={{
      height: '800px',
      position: 'relative',
      zIndex: 0
    }} titleArea={<DynamicPageTitle style={{
      minHeight: '0px'
    }} heading={<VariantManagement onClick={e => {
      e.stopPropagation();
    }}>
                <VariantItem>Variant 1</VariantItem>
                <VariantItem selected>Variant 2</VariantItem>
              </VariantManagement>} snappedHeading={<VariantManagement onClick={e => {
      e.stopPropagation();
    }}>
                <VariantItem>Variant 1</VariantItem>
                <VariantItem selected>Variant 2</VariantItem>
              </VariantManagement>} />} headerArea={<DynamicPageHeader>
            <FilterBar {...args} hideToolbar>
              <FilterGroupItem filterKey="StepInput" label="StepInput">
                <StepInput />
              </FilterGroupItem>
              <FilterGroupItem filterKey="MultiInput" label="MultiInput" active required>
                <MultiInput required tokens={<>
                      <Token text="Argentina" selected />
                      <Token text="Bulgaria" />
                      <Token text="England" />
                      <Token text="Finland" />
                    </>} />
              </FilterGroupItem>
              <FilterGroupItem filterKey="Input" label="Input">
                <Input placeholder="Placeholder" />
              </FilterGroupItem>
              <FilterGroupItem filterKey="Switch" label="Switch" hiddenInFilterBar>
                <Switch />
              </FilterGroupItem>
              <FilterGroupItem filterKey="select-init-selected" label="SELECT w/ initial selected" hiddenInFilterBar>
                <Select>
                  <Option>Option 1</Option>
                  <Option selected>Option 2</Option>
                  <Option>Option 3</Option>
                  <Option>Option 4</Option>
                </Select>
              </FilterGroupItem>
              <FilterGroupItem filterKey="select-not-selected" label="SELECT w/o initial selected" hiddenInFilterBar>
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
              <FilterGroupItem filterKey="mcb-selected" label="MultBox w/ initial selected" groupName="Group 1" hiddenInFilterBar>
                <MultiComboBox>
                  <MultiComboBoxItem text="MultiComboBoxItem 1" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
                  <MultiComboBoxItem text="MultiComboBoxItem 3" />
                  <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
                </MultiComboBox>
              </FilterGroupItem>
              <FilterGroupItem filterKey="cb-not-selected" label="ComboBox w/o initial selected" groupName="Group 2" hiddenInFilterBar>
                <ComboBox>
                  <ComboBoxItem text="ComboBoxItem 1" />
                  <ComboBoxItem text="ComboBoxItem 2" />
                  <ComboBoxItem text="ComboBoxItem 3" />
                  <ComboBoxItem text="ComboBoxItem 4" />
                </ComboBox>
              </FilterGroupItem>
              <FilterGroupItem filterKey="date-picker" label="Date Picker" groupName="Group 2">
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
}`,...($=(W=f.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var Y,J,z;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render(args) {
    const uniqueId = useId();
    const [visibleChildrenByKey, setVisibleChildrenByKey] = useState<Record<string, boolean>>({
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '5': true
    });
    const [orderedFilterKeys, setOrderedFilterKeys] = useState(['0', '1', '2', '3', '4', '5']);
    const handleFiltersDialogSave: FilterBarPropTypes['onFiltersDialogSave'] = e => {
      setOrderedFilterKeys(e.detail.reorderedFilterKeys);
      setVisibleChildrenByKey(e.detail.selectedFilterKeys.reduce((acc, cur) => {
        acc[cur] = true;
        return acc;
      }, {}));
    };
    return <FilterBar {...args} enableReordering showResetButton onFiltersDialogSave={handleFiltersDialogSave}>
        {orderedFilterKeys.map(filterKey => {
        const isHidden = !visibleChildrenByKey[filterKey];
        switch (filterKey) {
          case '0':
            return <FilterGroupItem filterKey="0" key={\`\${uniqueId}-0\`} label="StepInput" required>
                  <StepInput required />
                </FilterGroupItem>;
          case '1':
            return <FilterGroupItem filterKey="1" key={\`\${uniqueId}-1\`} label="RatingIndicator" hiddenInFilterBar={isHidden}>
                  <RatingIndicator />
                </FilterGroupItem>;
          case '2':
            return <FilterGroupItem filterKey="2" key={\`\${uniqueId}-2\`} label="MultiInput" active hiddenInFilterBar={isHidden}>
                  <MultiInput tokens={<>
                        <Token text="Argentina" selected />
                        <Token text="Bulgaria" />
                        <Token text="England" />
                        <Token text="Finland" />
                      </>} />
                </FilterGroupItem>;
          case '3':
            return <FilterGroupItem filterKey="3" key={\`\${uniqueId}-3\`} label="Input" hiddenInFilterBar={isHidden}>
                  <Input placeholder="Placeholder" />
                </FilterGroupItem>;
          case '4':
            return <FilterGroupItem filterKey="4" key={\`\${uniqueId}-4\`} label="Switch" hiddenInFilterBar={isHidden}>
                  <Switch />
                </FilterGroupItem>;
          case '5':
            return <FilterGroupItem filterKey="5" key={\`\${uniqueId}-5\`} label="SELECT w/ initial selected" hiddenInFilterBar={isHidden}>
                  <Select>
                    <Option>Option 1</Option>
                    <Option selected>Option 2</Option>
                    <Option>Option 3</Option>
                    <Option>Option 4</Option>
                  </Select>
                </FilterGroupItem>;
          default:
            return null;
        }
      })}
      </FilterBar>;
  }
}`,...(z=(J=O.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var Q,X,Z;G.parameters={...G.parameters,docs:{...(Q=G.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code',
        transform: () => \`
        const InputEventOrigin = (props) => {
  const [origin, setOrigin] = useState("");

  const handleInput = (e) => {
    if (!!e.currentTarget.parentElement.dataset.inFilterBar) {
      setOrigin("FilterBar");
    } else {
      setOrigin("Filters Dialog");
    }
  };

  return (
    <>
      <FilterBar {...props}>
        <FilterGroupItem filterKey="input" label="Input">
          <Input onInput={handleInput} />
        </FilterGroupItem>
      </FilterBar>
      <br />
      <Label>Last fired input event origin:</Label>
      <Text>{origin}</Text>
    </>
  );
};

        \`
      }
    }
  },
  render(args) {
    const [origin, setOrigin] = useState('');
    const handleInput = e => {
      if (!!e.currentTarget.parentElement.dataset.inFilterBar) {
        setOrigin('FilterBar');
      } else {
        setOrigin('Filters Dialog');
      }
    };
    return <>
        <FilterBar {...args}>
          <FilterGroupItem filterKey="input" label="Input">
            <Input onInput={handleInput} />
          </FilterGroupItem>
        </FilterBar>
        <br />
        <Label>Last fired input event origin:</Label>
        <Text>{origin}</Text>
      </>;
  }
}`,...(Z=(X=G.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Ce=["Default","WithLogic","InDynamicPage","WithReordering","IdentifyInputEventOrigin"],Ue=Object.freeze(Object.defineProperty({__proto__:null,Default:T,IdentifyInputEventOrigin:G,InDynamicPage:f,WithLogic:S,WithReordering:O,__namedExportsOrder:Ce,default:be},Symbol.toStringTag,{value:"Module"}));export{Ue as C,T as D,f as I,S as W,O as a,G as b};
