import{j as e}from"./jsx-runtime-d079401a.js";import{r as d}from"./index-f1f2c4b1.js";import{D as te}from"./index-5f2cb077.js";import{M as ae,a as f}from"./index-8222d92f.js";import{O as h}from"./index-84e99827.js";import{S as ne}from"./index-744da9b3.js";import{F as re,a as R}from"./index-51130beb.js";import{F as le,a as F,b as se}from"./index-d374f56e.js";import{T as A}from"./index-47d0a85a.js";import{a as T,V as a}from"./VariantItem-e4bd4405.js";import{a as ie}from"./Popover-2c2db418.js";import{T as de}from"./Title-3276c542.js";import{V as B}from"./ValueState-ab6838cc.js";const oe={title:"Inputs / VariantManagement",component:T,args:{placement:ie.Bottom,level:de.H4}},g={render:o=>e.jsxs(T,{...o,children:[e.jsx(a,{children:"Default VariantItem"}),e.jsx(a,{selected:!0,children:"Selected"}),e.jsx(a,{author:"SAP",children:"Author"}),e.jsx(a,{favorite:!0,children:"Favorite"}),e.jsx(a,{isDefault:!0,children:"IsDefault"}),e.jsx(a,{favorite:!0,labelReadOnly:!0,children:"Favorite & labelReadOnly"}),e.jsx(a,{applyAutomatically:!0,children:"ApplyAutomatically"}),e.jsx(a,{applyAutomatically:!0,applyAutomaticallyText:"Describe your exceptions that deviate from the standard behavior here.",children:"applyAutomatically & applyAutomaticallyText"}),e.jsx(a,{readOnly:!0,children:"ReadOnly"}),e.jsx(a,{global:!0,children:"Global"}),e.jsx(a,{global:!0,readOnly:!0,children:"Global & readOnly"}),e.jsx(a,{global:!0,children:"Not deletable -> global"}),e.jsx(a,{hideDelete:!0,children:"Not deletable -> hideDelete"}),e.jsx(a,{hideDelete:!1,global:!0,children:"Deletable -> hideDelete: false, global: true"})]})},C={render:({selectedByIndex:o=1})=>{const[V,S]=d.useState(void 0),[b,k]=d.useState("Only alphanumeric chars in Save View input"),[p,w]=d.useState(void 0),[y,j]=d.useState("Max 12 chars"),M=r=>{r.target.value.match(/^[a-z0-9\s]+$/i)?(r.isInvalid=!1,S(void 0)):(r.isInvalid=!0,S(B.Error))},u=r=>{k(r.detail.children)},P=r=>{r.target.value.length>12?(r.isInvalid=!0,w(B.Error)):(r.isInvalid=!1,w(void 0))},m=r=>{const i=r.detail.updatedVariants.find(D=>D["data-custom-manage-views"]);!p&&i&&j(i.children)};return e.jsxs(T,{onSaveAs:u,onSaveManageViews:m,children:[e.jsx(a,{"data-custom-save-view":!0,selected:o===0,saveViewInputProps:{valueState:V,valueStateMessage:V?e.jsx("div",{children:"Only alphanumeric and space characters allowed!"}):void 0,onInput:M,"data-testid":"alphanumeric"},children:b}),e.jsx(a,{"data-custom-manage-views":!0,selected:o===1,manageViewsInputProps:{valueState:p,valueStateMessage:p?e.jsx("div",{children:"No more than 12 characters allowed!"}):void 0,onInput:P,"data-testid":"12chars"},children:y})]})}},x={name:"in FilterBar",render:()=>{const[o,V]=d.useState("Standard"),[S,b]=d.useState("Standard"),[k,p]=d.useState([]),[w,y]=d.useState(!1),[j,M]=d.useState(!1),u=d.useRef({Standard:{selectedCountry:"Indonesia",date:"",selectedCodes:{}}}),P=(t,l)=>{const{payload:s,type:n}=l;switch(M(!0),n){case"selectedCountry":return{...t,selectedCountry:s};case"date":return{...t,date:s};case"selectedCodes":return{...t,selectedCodes:s};case"changeVariant":return s;default:return console.warn("Unknown action type!"),t}},[m,r]=d.useReducer(P,u.current.Standard),{selectedCountry:i,date:D,selectedCodes:v}=m,H=t=>{const{selectedOption:l}=t.detail;r({type:"selectedCountry",payload:l.textContent})},q=t=>{r({type:"date",payload:t.detail.value})},J=t=>{r({type:"selectedCodes",payload:t.detail.items.reduce((l,s)=>(l[s.dataset.code]=!0,l),{})})},K=t=>{const{variantItem:l,selected:s,readOnly:n,labelReadOnly:I,...c}=t.detail;c.isDefault&&b(c.children),p(O=>[...O,{...c,author:"Current User"}]),u.current[c.children]=m,V(c.children),y(!1)},Q=t=>{const{variantItem:l,selected:s,...n}=t.detail;u.current[n.children]=m,y(!1)},Y=t=>{const{deletedVariants:l,updatedVariants:s}=t.detail;l.forEach(n=>{delete u.current[n.children],p(I=>I.filter(c=>c.children!==n.children))}),s.forEach(n=>{const{variantItem:I,selected:c,...O}=n;u.current[n.children]=O,n.isDefault&&b(n.children),n.selected&&V(n.children),p(ee=>ee.map(_=>_.children===n.prevVariant.children?O:_))})},Z=t=>{const l=t.detail.selectedVariant.children;r({type:"changeVariant",payload:u.current[l]}),V(l)};return d.useEffect(()=>{if(j){const t=Object.entries(u.current[o]).some(([l,s])=>{if(l==="selectedCodes"){const n=Object.keys(m.selectedCodes).length;return Object.keys(s).length!==n?!0:Object.entries(m.selectedCodes).some(([I,c])=>(s==null?void 0:s[I])!==c)}return m[l]!==s});M(!1),y(t)}},[j,o]),e.jsxs(e.Fragment,{children:[e.jsxs(re,{header:e.jsxs(T,{hideApplyAutomatically:!0,dirtyState:w,onSaveAs:K,onSave:Q,onSelect:Z,onSaveManageViews:Y,children:[e.jsx(a,{selected:o==="Standard",global:!0,isDefault:S==="Standard",author:"SAP",readOnly:!0,labelReadOnly:!0,children:"Standard"}),k.map(t=>e.jsx(a,{...t,selected:o===t.children,isDefault:S===t.children,children:t.children},t.children))]}),children:[e.jsx(R,{label:"Countries",children:e.jsxs(ne,{onChange:H,children:[e.jsx(h,{selected:i==="Indonesia",children:"Indonesia"}),e.jsx(h,{selected:i==="Costa Rica",children:"Costa Rica"}),e.jsx(h,{selected:i==="Slovakia",children:"Slovakia"}),e.jsx(h,{selected:i==="Iceland",children:"Iceland"}),e.jsx(h,{selected:i==="Malta",children:"Malta"}),e.jsx(h,{selected:i==="Guyana",children:"Guyana"}),e.jsx(h,{selected:i==="Spain",children:"Spain"}),e.jsx(h,{selected:i==="Austria",children:"Austria"})]})}),e.jsx(R,{label:"Date",children:e.jsx(te,{value:D,onChange:q})}),e.jsx(R,{label:"Company Code",children:e.jsxs(ae,{onSelectionChange:J,children:[e.jsx(f,{text:"001",selected:v["001"],"data-code":"001"}),e.jsx(f,{text:"002",selected:v["002"],"data-code":"002"}),e.jsx(f,{text:"003",selected:v["003"],"data-code":"003"}),e.jsx(f,{text:"004",selected:v["004"],"data-code":"004"}),e.jsx(f,{text:"005",selected:v["005"],"data-code":"005"})]})})]}),e.jsxs(le,{style:{marginBlockStart:"2rem"},columnsS:1,columnsM:1,columnsL:1,columnsXL:1,labelSpanM:2,labelSpanL:2,labelSpanXL:2,children:[e.jsx(F,{label:"Current View",children:e.jsx(A,{children:o})}),e.jsxs(se,{titleText:"Filters",children:[e.jsx(F,{label:"Selected Country",children:e.jsx(A,{children:i})}),e.jsx(F,{label:"Selected Date",children:e.jsx(A,{children:D})}),e.jsx(F,{label:"Selected Company Codes",children:e.jsx(A,{children:Object.keys(v).join(", ")})})]})]})]})}};var G,E,L;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(E=g.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var N,W,U;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ({
    selectedByIndex = 1
  }: any) => {
    const [valueStateSaveView, setValueStateSaveView] = useState(undefined);
    const [customSaveViewVariantText, setCustomSaveViewVariantText] = useState('Only alphanumeric chars in Save View input');
    const [valueStateManageViews, setValueStateManageViews] = useState(undefined);
    const [customManageViewsVariantText, setCustomManageViewsVariantText] = useState('Max 12 chars');
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
      setCustomSaveViewVariantText(e.detail.children);
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
        setCustomManageViewsVariantText(isCustomManageViewsItem.children);
      }
    };
    return <VariantManagement onSaveAs={handleSaveAs} onSaveManageViews={handleSaveManageViews}>
        <VariantItem data-custom-save-view selected={selectedByIndex === 0} saveViewInputProps={{
        valueState: valueStateSaveView,
        valueStateMessage: valueStateSaveView ? <div>Only alphanumeric and space characters allowed!</div> : undefined,
        onInput: handleSaveViewInput,
        // @ts-expect-error: data- attributes are allowed on Input
        'data-testid': 'alphanumeric'
      }}>
          {customSaveViewVariantText}
        </VariantItem>
        <VariantItem data-custom-manage-views selected={selectedByIndex === 1} manageViewsInputProps={{
        valueState: valueStateManageViews,
        valueStateMessage: valueStateManageViews ? <div>No more than 12 characters allowed!</div> : undefined,
        onInput: handleManageViewInput,
        // @ts-expect-error: data- attributes are allowed on Input
        'data-testid': '12chars'
      }}>
          {customManageViewsVariantText}
        </VariantItem>
      </VariantManagement>;
  }
}`,...(U=(W=C.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var X,z,$;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(z=x.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const ce=["Default","WithCustomValidation","WithFilterBarImplementation"],be=Object.freeze(Object.defineProperty({__proto__:null,Default:g,WithCustomValidation:C,WithFilterBarImplementation:x,__namedExportsOrder:ce,default:oe},Symbol.toStringTag,{value:"Module"}));export{be as C,g as D,C as W,x as a};
//# sourceMappingURL=VariantManagement.stories-010e4c20.js.map
