import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{r as d}from"./index-OjgoNOWw.js";import{D as te}from"./index-7iLl-v4m.js";import{M as ae,a as x}from"./index-IEhigZmI.js";import{O as h}from"./index--JXo11Jc.js";import{S as ne}from"./index-y_s2Jb6s.js";import{a as re,F as _}from"./index-E8eh9ULO.js";import{b as le,a as A,F as se}from"./index-wSou0Hkr.js";import{T as k}from"./index-2_yHJzy3.js";import{V as P,a}from"./VariantItem-y7S8aqwA.js";import{a as ie}from"./Popover-5ANP4Jn7.js";import{T as de}from"./Title-xXK6MFOu.js";import{V as T}from"./ValueState-I_-hGNIb.js";const oe={title:"Inputs / VariantManagement",component:P,args:{placement:ie.Bottom,level:de.H4}},b={render:o=>e.jsxs(P,{...o,children:[e.jsx(a,{children:"Default VariantItem"}),e.jsx(a,{selected:!0,children:"Selected"}),e.jsx(a,{author:"SAP",children:"Author"}),e.jsx(a,{favorite:!0,children:"Favorite"}),e.jsx(a,{isDefault:!0,children:"IsDefault"}),e.jsx(a,{favorite:!0,labelReadOnly:!0,children:"Favorite & labelReadOnly"}),e.jsx(a,{applyAutomatically:!0,children:"ApplyAutomatically"}),e.jsx(a,{applyAutomatically:!0,applyAutomaticallyText:"Describe your exceptions that deviate from the standard behavior here.",children:"applyAutomatically & applyAutomaticallyText"}),e.jsx(a,{readOnly:!0,children:"ReadOnly"}),e.jsx(a,{global:!0,children:"Global"}),e.jsx(a,{global:!0,readOnly:!0,children:"Global & readOnly"}),e.jsx(a,{global:!0,children:"Not deletable -> global"}),e.jsx(a,{hideDelete:!0,children:"Not deletable -> hideDelete"}),e.jsx(a,{hideDelete:!1,global:!0,children:"Deletable -> hideDelete: false, global: true"})]})},w={render:({selectedByIndex:o=1})=>{const[p,V]=d.useState(void 0),[v,f]=d.useState(void 0),[S,M]=d.useState({1:"Only alphanumeric chars in Save View input",2:"Max 12 chars"}),C=n=>{n.target.value.match(/^[a-z0-9\s]+$/i)?(n.isInvalid=!1,V(void 0)):(n.isInvalid=!0,V(T.Error))},D=n=>{M(i=>({...i,[n.detail["data-id"]]:n.detail.children}))},O=n=>{n.target.value.length>12?(n.isInvalid=!0,f(T.Error)):(n.isInvalid=!1,f(void 0))},u=n=>{const i=n.detail.updatedVariants.find(y=>y["data-custom-manage-views"]);!v&&i&&M(y=>({...y,[i["data-id"]]:i.children}))},R=()=>{f(void 0)},m=()=>{V(void 0)};return e.jsxs(P,{onSaveAs:D,onSaveManageViews:u,onManageViewsCancel:R,onSaveViewCancel:m,children:[e.jsx(a,{"data-id":1,selected:o===0,saveViewInputProps:{valueState:p,valueStateMessage:p?e.jsx("div",{children:"Only alphanumeric and space characters allowed!"}):void 0,onInput:C,"data-testid":"alphanumeric"},children:S[1]}),e.jsx(a,{"data-custom-manage-views":!0,"data-id":2,selected:o===1,manageViewsInputProps:{valueState:v,valueStateMessage:v?e.jsx("div",{children:"No more than 12 characters allowed!"}):void 0,onInput:O,"data-testid":"12chars"},children:S[2]})]})}},j={name:"in FilterBar",render:()=>{const[o,p]=d.useState("Standard"),[V,v]=d.useState("Standard"),[f,S]=d.useState([]),[M,C]=d.useState(!1),[D,O]=d.useState(!1),u=d.useRef({Standard:{selectedCountry:"Indonesia",date:"",selectedCodes:{}}}),R=(t,l)=>{const{payload:s,type:r}=l;switch(O(!0),r){case"selectedCountry":return{...t,selectedCountry:s};case"date":return{...t,date:s};case"selectedCodes":return{...t,selectedCodes:s};case"changeVariant":return s;default:return console.warn("Unknown action type!"),t}},[m,n]=d.useReducer(R,u.current.Standard),{selectedCountry:i,date:y,selectedCodes:I}=m,H=t=>{const{selectedOption:l}=t.detail;n({type:"selectedCountry",payload:l.textContent})},q=t=>{n({type:"date",payload:t.detail.value})},J=t=>{n({type:"selectedCodes",payload:t.detail.items.reduce((l,s)=>(l[s.dataset.code]=!0,l),{})})},K=t=>{const{variantItem:l,selected:s,readOnly:r,labelReadOnly:g,...c}=t.detail;c.isDefault&&v(c.children),S(F=>[...F,{...c,author:"Current User"}]),u.current[c.children]=m,p(c.children),C(!1)},Q=t=>{const{variantItem:l,selected:s,...r}=t.detail;u.current[r.children]=m,C(!1)},Y=t=>{const{deletedVariants:l,updatedVariants:s}=t.detail;l.forEach(r=>{delete u.current[r.children],S(g=>g.filter(c=>c.children!==r.children))}),s.forEach(r=>{const{variantItem:g,selected:c,...F}=r;u.current[r.children]=F,r.isDefault&&v(r.children),r.selected&&p(r.children),S(ee=>ee.map(B=>B.children===r.prevVariant.children?F:B))})},Z=t=>{const l=t.detail.selectedVariant.children;n({type:"changeVariant",payload:u.current[l]}),p(l)};return d.useEffect(()=>{if(D){const t=Object.entries(u.current[o]).some(([l,s])=>{if(l==="selectedCodes"){const r=Object.keys(m.selectedCodes).length;return Object.keys(s).length!==r?!0:Object.entries(m.selectedCodes).some(([g,c])=>(s==null?void 0:s[g])!==c)}return m[l]!==s});O(!1),C(t)}},[D,o]),e.jsxs(e.Fragment,{children:[e.jsxs(re,{header:e.jsxs(P,{hideApplyAutomatically:!0,dirtyState:M,onSaveAs:K,onSave:Q,onSelect:Z,onSaveManageViews:Y,children:[e.jsx(a,{selected:o==="Standard",global:!0,isDefault:V==="Standard",author:"SAP",readOnly:!0,labelReadOnly:!0,children:"Standard"}),f.map(t=>e.jsx(a,{...t,selected:o===t.children,isDefault:V===t.children,children:t.children},t.children))]}),children:[e.jsx(_,{label:"Countries",children:e.jsxs(ne,{onChange:H,children:[e.jsx(h,{selected:i==="Indonesia",children:"Indonesia"}),e.jsx(h,{selected:i==="Costa Rica",children:"Costa Rica"}),e.jsx(h,{selected:i==="Slovakia",children:"Slovakia"}),e.jsx(h,{selected:i==="Iceland",children:"Iceland"}),e.jsx(h,{selected:i==="Malta",children:"Malta"}),e.jsx(h,{selected:i==="Guyana",children:"Guyana"}),e.jsx(h,{selected:i==="Spain",children:"Spain"}),e.jsx(h,{selected:i==="Austria",children:"Austria"})]})}),e.jsx(_,{label:"Date",children:e.jsx(te,{value:y,onChange:q})}),e.jsx(_,{label:"Company Code",children:e.jsxs(ae,{onSelectionChange:J,children:[e.jsx(x,{text:"001",selected:I["001"],"data-code":"001"}),e.jsx(x,{text:"002",selected:I["002"],"data-code":"002"}),e.jsx(x,{text:"003",selected:I["003"],"data-code":"003"}),e.jsx(x,{text:"004",selected:I["004"],"data-code":"004"}),e.jsx(x,{text:"005",selected:I["005"],"data-code":"005"})]})})]}),e.jsxs(le,{style:{marginBlockStart:"2rem"},columnsS:1,columnsM:1,columnsL:1,columnsXL:1,labelSpanM:2,labelSpanL:2,labelSpanXL:2,children:[e.jsx(A,{label:"Current View",children:e.jsx(k,{children:o})}),e.jsxs(se,{titleText:"Filters",children:[e.jsx(A,{label:"Selected Country",children:e.jsx(k,{children:i})}),e.jsx(A,{label:"Selected Date",children:e.jsx(k,{children:y})}),e.jsx(A,{label:"Selected Company Codes",children:e.jsx(k,{children:Object.keys(I).join(", ")})})]})]})]})}};var G,E,L;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    return <VariantManagement {...args}>
        <VariantItem>Default VariantItem</VariantItem>
        <VariantItem selected>Selected</VariantItem>
        <VariantItem author="SAP">Author</VariantItem>
        <VariantItem favorite>Favorite</VariantItem>
        <VariantItem isDefault>IsDefault</VariantItem>
        <VariantItem favorite labelReadOnly>
          Favorite & labelReadOnly
        </VariantItem>
        <VariantItem applyAutomatically>ApplyAutomatically</VariantItem>
        <VariantItem applyAutomatically applyAutomaticallyText="Describe your exceptions that deviate from the standard behavior here.">
          applyAutomatically & applyAutomaticallyText
        </VariantItem>
        <VariantItem readOnly>ReadOnly</VariantItem>
        <VariantItem global>Global</VariantItem>
        <VariantItem global readOnly>
          Global & readOnly
        </VariantItem>
        <VariantItem global>{\`Not deletable -> global\`}</VariantItem>
        <VariantItem hideDelete>{\`Not deletable -> hideDelete\`}</VariantItem>
        <VariantItem hideDelete={false} global>
          {\`Deletable -> hideDelete: false, global: true\`}
        </VariantItem>
      </VariantManagement>;
  }
}`,...(L=(E=b.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var N,W,U;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    selectedByIndex = 1
  }: any) => {
    const [valueStateSaveView, setValueStateSaveView] = useState(undefined);
    const [valueStateManageViews, setValueStateManageViews] = useState(undefined);
    const [values, setValues] = useState({
      1: 'Only alphanumeric chars in Save View input',
      2: 'Max 12 chars'
    });
    const handleSaveViewInput = e => {
      // only allow alphanumeric and space characters
      if (!e.target.value.match(/^[a-z0-9\\s]+$/i)) {
        // mark variant as invalid (prevent internal logic from being applied)
        e.isInvalid = true;
        setValueStateSaveView(ValueState.Error);
      } else {
        // mark variant as valid again
        e.isInvalid = false;
        setValueStateSaveView(undefined);
      }
    };
    const handleSaveAs = e => {
      setValues(prev => ({
        ...prev,
        [e.detail['data-id']]: e.detail.children
      }));
    };
    const handleManageViewInput = e => {
      // only 12 or fewer characters
      if (e.target.value.length > 12) {
        // mark variant as invalid (prevent internal logic from being applied)
        e.isInvalid = true;
        setValueStateManageViews(ValueState.Error);
      } else {
        // mark variant as valid again
        e.isInvalid = false;
        setValueStateManageViews(undefined);
      }
    };
    const handleSaveManageViews = e => {
      // if is custom manage view variant and is not in error state, set children to new value
      const isCustomManageViewsItem = e.detail.updatedVariants.find(item => item['data-custom-manage-views']);
      if (!valueStateManageViews && isCustomManageViewsItem) {
        setValues(prev => ({
          ...prev,
          [isCustomManageViewsItem['data-id']]: isCustomManageViewsItem.children
        }));
      }
    };
    // reset value-state if user closes the dialogs without saving (cancel click or ESC press)
    const handleManageViewsCancel = () => {
      setValueStateManageViews(undefined);
    };
    const handleSaveViewCancel = () => {
      setValueStateSaveView(undefined);
    };
    return <VariantManagement onSaveAs={handleSaveAs} onSaveManageViews={handleSaveManageViews} onManageViewsCancel={handleManageViewsCancel} onSaveViewCancel={handleSaveViewCancel}>
        <VariantItem data-id={1} selected={selectedByIndex === 0} saveViewInputProps={{
        valueState: valueStateSaveView,
        valueStateMessage: valueStateSaveView ? <div>Only alphanumeric and space characters allowed!</div> : undefined,
        onInput: handleSaveViewInput,
        // @ts-expect-error: data- attributes are allowed on Input
        'data-testid': 'alphanumeric'
      }}>
          {values[1]}
        </VariantItem>
        <VariantItem data-custom-manage-views data-id={2} selected={selectedByIndex === 1} manageViewsInputProps={{
        valueState: valueStateManageViews,
        valueStateMessage: valueStateManageViews ? <div>No more than 12 characters allowed!</div> : undefined,
        onInput: handleManageViewInput,
        // @ts-expect-error: data- attributes are allowed on Input
        'data-testid': '12chars'
      }}>
          {values[2]}
        </VariantItem>
      </VariantManagement>;
  }
}`,...(U=(W=w.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var X,z,$;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'in FilterBar',
  render: () => {
    const [selectedVariant, setSelectedVariant] = useState('Standard');
    const [defaultVariant, setDefaultVariant] = useState('Standard');
    const [customVariants, setCustomVariants] = useState<VariantItemPropTypes[]>([]);
    const [isDirty, setIsDirty] = useState(false);
    const [checkIfDiry, setCheckIfDirty] = useState(false);

    // this should be persisted (e.g. by the local storage of the browser or on the server)
    const initialVariantValues = useRef({
      Standard: {
        selectedCountry: 'Indonesia',
        date: '',
        selectedCodes: {}
      }
    });
    const filterReducer = (state, action) => {
      const {
        payload,
        type
      } = action;
      setCheckIfDirty(true);
      switch (type) {
        case 'selectedCountry':
          return {
            ...state,
            selectedCountry: payload
          };
        case 'date':
          return {
            ...state,
            date: payload
          };
        case 'selectedCodes':
          return {
            ...state,
            selectedCodes: payload
          };
        case 'changeVariant':
          return payload;
        default:
          console.warn('Unknown action type!');
          return state;
      }
    };
    const [filters, dispatchFiltersChange] = useReducer(filterReducer, initialVariantValues.current.Standard);
    const {
      selectedCountry,
      date,
      selectedCodes
    } = filters;
    const handleSelectChange = e => {
      const {
        selectedOption
      } = e.detail;
      dispatchFiltersChange({
        type: 'selectedCountry',
        payload: selectedOption.textContent
      });
    };
    const handleDateChange = e => {
      dispatchFiltersChange({
        type: 'date',
        payload: e.detail.value
      });
    };
    const handleSelectedCodesChange = e => {
      dispatchFiltersChange({
        type: 'selectedCodes',
        payload: e.detail.items.reduce((acc, cur) => {
          acc[cur.dataset.code] = true;
          return acc;
        }, {})
      });
    };
    const handleSaveAs = e => {
      const {
        variantItem: _omit,
        selected: _omit2,
        readOnly: _omit3,
        labelReadOnly: _omit4,
        ...variantItemProps
      } = e.detail;
      if (variantItemProps.isDefault) {
        setDefaultVariant(variantItemProps.children);
      }
      setCustomVariants(prev => [...prev, {
        ...variantItemProps,
        author: 'Current User'
      }]);
      initialVariantValues.current[variantItemProps.children] = filters;
      setSelectedVariant(variantItemProps.children);
      setIsDirty(false);
    };
    const handleSave = e => {
      const {
        variantItem: _omit,
        selected: _omit2,
        ...variantItemProps
      } = e.detail;
      initialVariantValues.current[variantItemProps.children] = filters;
      setIsDirty(false);
    };
    const handleSaveManageViews = e => {
      const {
        deletedVariants,
        updatedVariants
      } = e.detail;
      deletedVariants.forEach(variant => {
        delete initialVariantValues.current[variant.children];
        setCustomVariants(prev => prev.filter(item => item.children !== variant.children));
      });
      updatedVariants.forEach(variant => {
        const {
          variantItem: _omit,
          selected: _omit2,
          ...variantItemProps
        } = variant;
        initialVariantValues.current[variant.children] = variantItemProps;
        if (variant.isDefault) {
          setDefaultVariant(variant.children);
        }
        if (variant.selected) {
          setSelectedVariant(variant.children);
        }
        setCustomVariants(prev => {
          return prev.map(item => {
            if (item.children === variant.prevVariant.children) {
              return variantItemProps;
            }
            return item;
          });
        });
      });
    };
    const handleSelect = e => {
      const privateSelectedVariant = e.detail.selectedVariant.children;
      dispatchFiltersChange({
        type: 'changeVariant',
        payload: initialVariantValues.current[privateSelectedVariant]
      });
      setSelectedVariant(privateSelectedVariant);
    };
    useEffect(() => {
      if (checkIfDiry) {
        const hasChanged = Object.entries(initialVariantValues.current[selectedVariant]).some(([key, val]) => {
          if (key === 'selectedCodes') {
            const selectedCodesLength = Object.keys(filters.selectedCodes).length;
            if (Object.keys(val).length !== selectedCodesLength) {
              return true;
            }
            return Object.entries(filters.selectedCodes).some(([code, bool]) => {
              return val?.[code] !== bool;
            });
          }
          return filters[key] !== val;
        });
        setCheckIfDirty(false);
        setIsDirty(hasChanged);
      }
    }, [checkIfDiry, selectedVariant]);
    return <>
        <FilterBar header={<VariantManagement hideApplyAutomatically dirtyState={isDirty} onSaveAs={handleSaveAs} onSave={handleSave} onSelect={handleSelect} onSaveManageViews={handleSaveManageViews}>
              <VariantItem selected={selectedVariant === 'Standard'} global isDefault={defaultVariant === 'Standard'} author="SAP" readOnly labelReadOnly>
                Standard
              </VariantItem>
              {customVariants.map(variantItemProps => {
          return <VariantItem key={variantItemProps.children} {...variantItemProps} selected={selectedVariant === variantItemProps.children} isDefault={defaultVariant === variantItemProps.children}>
                    {variantItemProps.children}
                  </VariantItem>;
        })}
            </VariantManagement>}>
          <FilterGroupItem label="Countries">
            <Select onChange={handleSelectChange}>
              <Option selected={selectedCountry === 'Indonesia'}>Indonesia</Option>
              <Option selected={selectedCountry === 'Costa Rica'}>Costa Rica</Option>
              <Option selected={selectedCountry === 'Slovakia'}>Slovakia</Option>
              <Option selected={selectedCountry === 'Iceland'}>Iceland</Option>
              <Option selected={selectedCountry === 'Malta'}>Malta</Option>
              <Option selected={selectedCountry === 'Guyana'}>Guyana</Option>
              <Option selected={selectedCountry === 'Spain'}>Spain</Option>
              <Option selected={selectedCountry === 'Austria'}>Austria</Option>
            </Select>
          </FilterGroupItem>
          <FilterGroupItem label="Date">
            <DatePicker value={date} onChange={handleDateChange} />
          </FilterGroupItem>
          <FilterGroupItem label="Company Code">
            <MultiComboBox onSelectionChange={handleSelectedCodesChange}>
              <MultiComboBoxItem text="001" selected={selectedCodes['001']} data-code="001" />
              <MultiComboBoxItem text="002" selected={selectedCodes['002']} data-code="002" />
              <MultiComboBoxItem text="003" selected={selectedCodes['003']} data-code="003" />
              <MultiComboBoxItem text="004" selected={selectedCodes['004']} data-code="004" />
              <MultiComboBoxItem text="005" selected={selectedCodes['005']} data-code="005" />
            </MultiComboBox>
          </FilterGroupItem>
        </FilterBar>
        <Form style={{
        marginBlockStart: '2rem'
      }} columnsS={1} columnsM={1} columnsL={1} columnsXL={1} labelSpanM={2} labelSpanL={2} labelSpanXL={2}>
          <FormItem label="Current View">
            <Text>{selectedVariant}</Text>
          </FormItem>
          <FormGroup titleText="Filters">
            <FormItem label="Selected Country">
              <Text>{selectedCountry}</Text>
            </FormItem>
            <FormItem label="Selected Date">
              <Text>{date}</Text>
            </FormItem>
            <FormItem label="Selected Company Codes">
              <Text>{Object.keys(selectedCodes).join(', ')}</Text>
            </FormItem>
          </FormGroup>
        </Form>
      </>;
  }
}`,...($=(z=j.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const ce=["Default","WithCustomValidation","WithFilterBarImplementation"],be=Object.freeze(Object.defineProperty({__proto__:null,Default:b,WithCustomValidation:w,WithFilterBarImplementation:j,__namedExportsOrder:ce,default:oe},Symbol.toStringTag,{value:"Module"}));export{be as C,b as D,w as W,j as a};
