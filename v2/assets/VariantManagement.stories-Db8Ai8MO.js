import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{c as r,s as i}from"./Popover-wC08zYDq.js";import{t as a}from"./jsx-runtime-BdxMnOeJ.js";import{n as o,t as s}from"./ValueState-Cz7u0abQ.js";import{i as c,r as l}from"./Title-Bp5Guh7h.js";import{n as u,t as d}from"./Text-CHVdRnJy.js";import{i as f,n as p,r as m,t as h}from"./FilterBar-13rlL_4x.js";import{n as g,t as _}from"./Label-CC0T01Qq.js";import{n as v,t as y}from"./Option-Ddg3VHDr.js";import{n as b,t as x}from"./Select-BbmUA1xS.js";import{n as S,t as C}from"./DatePicker-Cba-jhtC.js";import{a as w,i as T,n as E,o as D,r as O,t as k}from"./FormItem-74xf5vnP.js";import{i as A,n as j,r as M,t as N}from"./MultiComboBoxItem-jTVkN3fH.js";import{i as P,n as F,r as I,t as L}from"./VariantManagement-D8ZAJEPv.js";var R=t({Default:()=>H,WithCustomValidation:()=>U,WithFilterBarImplementation:()=>W,__namedExportsOrder:()=>G,default:()=>V}),z,B,V,H,U,W,G;function K(){return(K=e((()=>{r(),c(),s(),z=n(),S(),D(),T(),E(),g(),A(),j(),v(),b(),u(),p(),f(),P(),F(),B=a(),V={title:`Inputs / VariantManagement`,component:L,args:{placement:i.Bottom,level:l.H4},tags:[`package:@ui5/webcomponents-react`]},H={render:e=>(0,B.jsxs)(L,{...e,children:[(0,B.jsx)(I,{children:`Default VariantItem`}),(0,B.jsx)(I,{selected:!0,children:`Selected`}),(0,B.jsx)(I,{author:`SAP`,children:`Author`}),(0,B.jsx)(I,{favorite:!0,children:`Favorite`}),(0,B.jsx)(I,{isDefault:!0,children:`IsDefault`}),(0,B.jsx)(I,{favorite:!0,labelReadOnly:!0,children:`Favorite & labelReadOnly`}),(0,B.jsx)(I,{applyAutomatically:!0,children:`ApplyAutomatically`}),(0,B.jsx)(I,{applyAutomatically:!0,applyAutomaticallyText:`Describe your exceptions that deviate from the standard behavior here.`,children:`applyAutomatically & applyAutomaticallyText`}),(0,B.jsx)(I,{readOnly:!0,children:`ReadOnly`}),(0,B.jsx)(I,{global:!0,children:`Global`}),(0,B.jsx)(I,{global:!0,readOnly:!0,children:`Global & readOnly`}),(0,B.jsx)(I,{global:!0,children:`Not deletable -> global`}),(0,B.jsx)(I,{hideDelete:!0,children:`Not deletable -> hideDelete`}),(0,B.jsx)(I,{hideDelete:!1,global:!0,children:`Deletable -> hideDelete: false, global: true`})]})},U={render:({selectedByIndex:e=1})=>{let[t,n]=(0,z.useState)(void 0),[r,i]=(0,z.useState)(void 0),[a,s]=(0,z.useState)({1:`Only alphanumeric chars in Save View input`,2:`Max 12 chars`});return(0,B.jsxs)(L,{onSaveAs:e=>{s(t=>({...t,[e.detail[`data-id`]]:e.detail.children}))},onSaveManageViews:e=>{let t=e.detail.updatedVariants.find(e=>e[`data-custom-manage-views`]);!r&&t&&s(e=>({...e,[t[`data-id`]]:t.children}))},onManageViewsCancel:()=>{i(void 0)},onSaveViewCancel:()=>{n(void 0)},children:[(0,B.jsx)(I,{"data-id":1,selected:e===0,saveViewInputProps:{valueState:t,valueStateMessage:t?(0,B.jsx)(`div`,{children:`Only alphanumeric and space characters allowed!`}):void 0,onInput:e=>{e.target.value.match(/^[a-z0-9\s]+$/i)?(e.isInvalid=!1,n(void 0)):(e.isInvalid=!0,n(o.Negative))},"data-testid":`alphanumeric`},children:a[1]}),(0,B.jsx)(I,{"data-custom-manage-views":!0,"data-id":2,selected:e===1,manageViewsInputProps:{valueState:r,valueStateMessage:r?(0,B.jsx)(`div`,{children:`No more than 12 characters allowed!`}):void 0,onInput:e=>{e.target.value.length>12?(e.isInvalid=!0,i(o.Negative)):(e.isInvalid=!1,i(void 0))},"data-testid":`12chars`},children:a[2]})]})}},W={name:`in FilterBar`,render:()=>{let[e,t]=(0,z.useState)(`Standard`),[n,r]=(0,z.useState)(`Standard`),[i,a]=(0,z.useState)([]),[o,s]=(0,z.useState)(!1),[c,l]=(0,z.useState)(!1),u=(0,z.useRef)({Standard:{selectedCountry:`Indonesia`,date:``,selectedCodes:{}}}),[f,p]=(0,z.useReducer)((e,t)=>{let{payload:n,type:r}=t;switch(l(!0),r){case`selectedCountry`:return{...e,selectedCountry:n};case`date`:return{...e,date:n};case`selectedCodes`:return{...e,selectedCodes:n};case`changeVariant`:return n;default:return console.warn(`Unknown action type!`),e}},u.current.Standard),{selectedCountry:g,date:v,selectedCodes:b}=f;return(0,z.useEffect)(()=>{if(c){let t=Object.entries(u.current[e]).some(([e,t])=>{if(e===`selectedCodes`){let e=Object.keys(f.selectedCodes).length;return Object.keys(t).length!==e||Object.entries(f.selectedCodes).some(([e,n])=>t?.[e]!==n)}return f[e]!==t});l(!1),s(t)}},[c,e]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h,{header:(0,B.jsxs)(L,{hideApplyAutomatically:!0,dirtyState:o,onSaveAs:e=>{let{variantItem:n,selected:i,readOnly:o,labelReadOnly:c,...l}=e.detail;l.isDefault&&r(l.children),a(e=>[...e,{...l,author:`Current User`}]),u.current[l.children]=f,t(l.children),s(!1)},onSave:e=>{let{variantItem:t,selected:n,...r}=e.detail;u.current[r.children]=f,s(!1)},onSelect:e=>{let n=e.detail.selectedVariant.children;p({type:`changeVariant`,payload:u.current[n]}),t(n)},onSaveManageViews:e=>{let{deletedVariants:n,updatedVariants:i}=e.detail;n.forEach(e=>{delete u.current[e.children],a(t=>t.filter(t=>t.children!==e.children))}),i.forEach(e=>{let{variantItem:n,selected:i,...o}=e;u.current[e.children]=o,e.isDefault&&r(e.children),e.selected&&t(e.children),a(t=>t.map(t=>t.children===e.prevVariant.children?o:t))})},children:[(0,B.jsx)(I,{selected:e===`Standard`,global:!0,isDefault:n===`Standard`,author:`SAP`,readOnly:!0,labelReadOnly:!0,children:`Standard`}),i.map(t=>(0,B.jsx)(I,{...t,selected:e===t.children,isDefault:n===t.children,children:t.children},t.children))]}),children:[(0,B.jsx)(m,{label:`Countries`,filterKey:0,children:(0,B.jsxs)(x,{onChange:e=>{let{selectedOption:t}=e.detail;p({type:`selectedCountry`,payload:t.textContent})},children:[(0,B.jsx)(y,{selected:g===`Indonesia`,children:`Indonesia`}),(0,B.jsx)(y,{selected:g===`Costa Rica`,children:`Costa Rica`}),(0,B.jsx)(y,{selected:g===`Slovakia`,children:`Slovakia`}),(0,B.jsx)(y,{selected:g===`Iceland`,children:`Iceland`}),(0,B.jsx)(y,{selected:g===`Malta`,children:`Malta`}),(0,B.jsx)(y,{selected:g===`Guyana`,children:`Guyana`}),(0,B.jsx)(y,{selected:g===`Spain`,children:`Spain`}),(0,B.jsx)(y,{selected:g===`Austria`,children:`Austria`})]})}),(0,B.jsx)(m,{label:`Date`,filterKey:1,children:(0,B.jsx)(C,{value:v,onChange:e=>{p({type:`date`,payload:e.detail.value})}})}),(0,B.jsx)(m,{label:`Company Code`,filterKey:2,children:(0,B.jsxs)(M,{onSelectionChange:e=>{p({type:`selectedCodes`,payload:e.detail.items.reduce((e,t)=>(e[t.dataset.code]=!0,e),{})})},children:[(0,B.jsx)(N,{text:`001`,selected:b[`001`],"data-code":`001`}),(0,B.jsx)(N,{text:`002`,selected:b[`002`],"data-code":`002`}),(0,B.jsx)(N,{text:`003`,selected:b[`003`],"data-code":`003`}),(0,B.jsx)(N,{text:`004`,selected:b[`004`],"data-code":`004`}),(0,B.jsx)(N,{text:`005`,selected:b[`005`],"data-code":`005`})]})})]}),(0,B.jsxs)(w,{style:{marginBlockStart:`2rem`},layout:`S1 M1 L1 XL1`,labelSpan:`S3 M3 L3 XL3`,children:[(0,B.jsx)(O,{headerText:`Variant`,children:(0,B.jsx)(k,{labelContent:(0,B.jsx)(_,{showColon:!0,children:`Current View`}),children:(0,B.jsx)(d,{children:e})})}),(0,B.jsxs)(O,{headerText:`Filters`,children:[(0,B.jsx)(k,{labelContent:(0,B.jsx)(_,{showColon:!0,children:`Selected Country`}),children:(0,B.jsx)(d,{children:g})}),(0,B.jsx)(k,{labelContent:(0,B.jsx)(_,{showColon:!0,children:`Selected Date`}),children:(0,B.jsx)(d,{children:v})}),(0,B.jsx)(k,{labelContent:(0,B.jsx)(_,{showColon:!0,children:`Selected Company Codes`}),children:(0,B.jsx)(d,{children:Object.keys(b).join(`, `)})})]})]})]})}},G=[`Default`,`WithCustomValidation`,`WithFilterBarImplementation`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}}})))()}export{K as a,W as i,R as n,U as r,H as t};