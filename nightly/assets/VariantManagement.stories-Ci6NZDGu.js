import{j as e}from"./jsx-runtime-CLpGMVip.js";import{P as ne}from"./Popover-BEou1Y9a.js";import{T as re}from"./Title-HEcUckFf.js";import{V as B}from"./ValueState-CyC8gWMA.js";import{r as d}from"./index-CjmQ2z5u.js";import{D as le}from"./index-oSRIq3V1.js";import{F as se,a as G,b as A}from"./index-I9-Heeze.js";import{L as k}from"./index-DnJL0qev.js";import{M as ie,a as x}from"./index-IIAHdRbm.js";import{O as h}from"./index-R-8EbHGk.js";import{S as de}from"./index-BKHxVFoq.js";import{T as P}from"./index-C-cAGxuE.js";import{a as oe,F as T}from"./index-2wwk43wP.js";import{V as L,a}from"./VariantItem-BBmWdj22.js";const ce={title:"Inputs / VariantManagement",component:L,args:{placement:ne.Bottom,level:re.H4}},b={render:o=>e.jsxs(L,{...o,children:[e.jsx(a,{children:"Default VariantItem"}),e.jsx(a,{selected:!0,children:"Selected"}),e.jsx(a,{author:"SAP",children:"Author"}),e.jsx(a,{favorite:!0,children:"Favorite"}),e.jsx(a,{isDefault:!0,children:"IsDefault"}),e.jsx(a,{favorite:!0,labelReadOnly:!0,children:"Favorite & labelReadOnly"}),e.jsx(a,{applyAutomatically:!0,children:"ApplyAutomatically"}),e.jsx(a,{applyAutomatically:!0,applyAutomaticallyText:"Describe your exceptions that deviate from the standard behavior here.",children:"applyAutomatically & applyAutomaticallyText"}),e.jsx(a,{readOnly:!0,children:"ReadOnly"}),e.jsx(a,{global:!0,children:"Global"}),e.jsx(a,{global:!0,readOnly:!0,children:"Global & readOnly"}),e.jsx(a,{global:!0,children:"Not deletable -> global"}),e.jsx(a,{hideDelete:!0,children:"Not deletable -> hideDelete"}),e.jsx(a,{hideDelete:!1,global:!0,children:"Deletable -> hideDelete: false, global: true"})]})},w={render:({selectedByIndex:o=1})=>{const[p,V]=d.useState(void 0),[v,C]=d.useState(void 0),[S,M]=d.useState({1:"Only alphanumeric chars in Save View input",2:"Max 12 chars"}),I=n=>{n.target.value.match(/^[a-z0-9\s]+$/i)?(n.isInvalid=!1,V(void 0)):(n.isInvalid=!0,V(B.Negative))},D=n=>{M(i=>({...i,[n.detail["data-id"]]:n.detail.children}))},O=n=>{n.target.value.length>12?(n.isInvalid=!0,C(B.Negative)):(n.isInvalid=!1,C(void 0))},u=n=>{const i=n.detail.updatedVariants.find(y=>y["data-custom-manage-views"]);!v&&i&&M(y=>({...y,[i["data-id"]]:i.children}))},R=()=>{C(void 0)},m=()=>{V(void 0)};return e.jsxs(L,{onSaveAs:D,onSaveManageViews:u,onManageViewsCancel:R,onSaveViewCancel:m,children:[e.jsx(a,{"data-id":1,selected:o===0,saveViewInputProps:{valueState:p,valueStateMessage:p?e.jsx("div",{children:"Only alphanumeric and space characters allowed!"}):void 0,onInput:I,"data-testid":"alphanumeric"},children:S[1]}),e.jsx(a,{"data-custom-manage-views":!0,"data-id":2,selected:o===1,manageViewsInputProps:{valueState:v,valueStateMessage:v?e.jsx("div",{children:"No more than 12 characters allowed!"}):void 0,onInput:O,"data-testid":"12chars"},children:S[2]})]})}},j={name:"in FilterBar",render:()=>{const[o,p]=d.useState("Standard"),[V,v]=d.useState("Standard"),[C,S]=d.useState([]),[M,I]=d.useState(!1),[D,O]=d.useState(!1),u=d.useRef({Standard:{selectedCountry:"Indonesia",date:"",selectedCodes:{}}}),R=(t,l)=>{const{payload:s,type:r}=l;switch(O(!0),r){case"selectedCountry":return{...t,selectedCountry:s};case"date":return{...t,date:s};case"selectedCodes":return{...t,selectedCodes:s};case"changeVariant":return s;default:return console.warn("Unknown action type!"),t}},[m,n]=d.useReducer(R,u.current.Standard),{selectedCountry:i,date:y,selectedCodes:f}=m,q=t=>{const{selectedOption:l}=t.detail;n({type:"selectedCountry",payload:l.textContent})},J=t=>{n({type:"date",payload:t.detail.value})},Q=t=>{n({type:"selectedCodes",payload:t.detail.items.reduce((l,s)=>(l[s.dataset.code]=!0,l),{})})},Y=t=>{const{variantItem:l,selected:s,readOnly:r,labelReadOnly:g,...c}=t.detail;c.isDefault&&v(c.children),S(F=>[...F,{...c,author:"Current User"}]),u.current[c.children]=m,p(c.children),I(!1)},Z=t=>{const{variantItem:l,selected:s,...r}=t.detail;u.current[r.children]=m,I(!1)},ee=t=>{const{deletedVariants:l,updatedVariants:s}=t.detail;l.forEach(r=>{delete u.current[r.children],S(g=>g.filter(c=>c.children!==r.children))}),s.forEach(r=>{const{variantItem:g,selected:c,...F}=r;u.current[r.children]=F,r.isDefault&&v(r.children),r.selected&&p(r.children),S(ae=>ae.map(_=>_.children===r.prevVariant.children?F:_))})},te=t=>{const l=t.detail.selectedVariant.children;n({type:"changeVariant",payload:u.current[l]}),p(l)};return d.useEffect(()=>{if(D){const t=Object.entries(u.current[o]).some(([l,s])=>{if(l==="selectedCodes"){const r=Object.keys(m.selectedCodes).length;return Object.keys(s).length!==r?!0:Object.entries(m.selectedCodes).some(([g,c])=>(s==null?void 0:s[g])!==c)}return m[l]!==s});O(!1),I(t)}},[D,o]),e.jsxs(e.Fragment,{children:[e.jsxs(oe,{header:e.jsxs(L,{hideApplyAutomatically:!0,dirtyState:M,onSaveAs:Y,onSave:Z,onSelect:te,onSaveManageViews:ee,children:[e.jsx(a,{selected:o==="Standard",global:!0,isDefault:V==="Standard",author:"SAP",readOnly:!0,labelReadOnly:!0,children:"Standard"}),C.map(t=>e.jsx(a,{...t,selected:o===t.children,isDefault:V===t.children,children:t.children},t.children))]}),children:[e.jsx(T,{label:"Countries",filterKey:0,children:e.jsxs(de,{onChange:q,children:[e.jsx(h,{selected:i==="Indonesia",children:"Indonesia"}),e.jsx(h,{selected:i==="Costa Rica",children:"Costa Rica"}),e.jsx(h,{selected:i==="Slovakia",children:"Slovakia"}),e.jsx(h,{selected:i==="Iceland",children:"Iceland"}),e.jsx(h,{selected:i==="Malta",children:"Malta"}),e.jsx(h,{selected:i==="Guyana",children:"Guyana"}),e.jsx(h,{selected:i==="Spain",children:"Spain"}),e.jsx(h,{selected:i==="Austria",children:"Austria"})]})}),e.jsx(T,{label:"Date",filterKey:1,children:e.jsx(le,{value:y,onChange:J})}),e.jsx(T,{label:"Company Code",filterKey:2,children:e.jsxs(ie,{onSelectionChange:Q,children:[e.jsx(x,{text:"001",selected:f["001"],"data-code":"001"}),e.jsx(x,{text:"002",selected:f["002"],"data-code":"002"}),e.jsx(x,{text:"003",selected:f["003"],"data-code":"003"}),e.jsx(x,{text:"004",selected:f["004"],"data-code":"004"}),e.jsx(x,{text:"005",selected:f["005"],"data-code":"005"})]})})]}),e.jsxs(se,{style:{marginBlockStart:"2rem"},layout:"S1 M1 L1 XL1",labelSpan:"S3 M3 L3 XL3",children:[e.jsx(G,{headerText:"Variant",children:e.jsx(A,{labelContent:e.jsx(k,{showColon:!0,children:"Current View"}),children:e.jsx(P,{children:o})})}),e.jsxs(G,{headerText:"Filters",children:[e.jsx(A,{labelContent:e.jsx(k,{showColon:!0,children:"Selected Country"}),children:e.jsx(P,{children:i})}),e.jsx(A,{labelContent:e.jsx(k,{showColon:!0,children:"Selected Date"}),children:e.jsx(P,{children:y})}),e.jsx(A,{labelContent:e.jsx(k,{showColon:!0,children:"Selected Company Codes"}),children:e.jsx(P,{children:Object.keys(f).join(", ")})})]})]})]})}};var E,N,K;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(K=(N=b.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var W,U,X;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        setValueStateSaveView(ValueState.Negative);
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
        setValueStateManageViews(ValueState.Negative);
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
}`,...(X=(U=w.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var z,$,H;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
          <FilterGroupItem label="Countries" filterKey={0}>
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
          <FilterGroupItem label="Date" filterKey={1}>
            <DatePicker value={date} onChange={handleDateChange} />
          </FilterGroupItem>
          <FilterGroupItem label="Company Code" filterKey={2}>
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
      }} layout={'S1 M1 L1 XL1'} labelSpan={'S3 M3 L3 XL3'}>
          <FormGroup headerText="Variant">
            <FormItem labelContent={<Label showColon>Current View</Label>}>
              <Text>{selectedVariant}</Text>
            </FormItem>
          </FormGroup>
          <FormGroup headerText="Filters">
            <FormItem labelContent={<Label showColon>Selected Country</Label>}>
              <Text>{selectedCountry}</Text>
            </FormItem>
            <FormItem labelContent={<Label showColon>Selected Date</Label>}>
              <Text>{date}</Text>
            </FormItem>
            <FormItem labelContent={<Label showColon>Selected Company Codes</Label>}>
              <Text>{Object.keys(selectedCodes).join(', ')}</Text>
            </FormItem>
          </FormGroup>
        </Form>
      </>;
  }
}`,...(H=($=j.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};const ue=["Default","WithCustomValidation","WithFilterBarImplementation"],je=Object.freeze(Object.defineProperty({__proto__:null,Default:b,WithCustomValidation:w,WithFilterBarImplementation:j,__namedExportsOrder:ue,default:ce},Symbol.toStringTag,{value:"Module"}));export{je as C,b as D,w as W,j as a};
