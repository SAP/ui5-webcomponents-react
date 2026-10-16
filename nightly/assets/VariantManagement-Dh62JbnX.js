import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./MessageStrip-CfLGPDZy.js";import{i,r as a}from"./VariantManagement-CKxK4b_I.js";import{i as o,r as s}from"./react-BOKIvUzN.js";import{_ as c,d as l,n as u,o as d,r as f,u as p}from"./blocks-DXeKFkas.js";import{b as m,f as h,t as g,u as _}from"./components-B-xCMNi4.js";import{n as v,t as y}from"./SubcomponentsSection-Kv79Q7K7.js";import{a as b,i as x,n as S,r as C,t as w}from"./VariantManagement.stories-DMnB51ht.js";function T(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...o(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(l,{of:S}),`
`,(0,D.jsx)(h,{of:S,subComponents:[`VariantItem`]}),`
`,(0,D.jsx)(`br`,{}),`
`,(0,D.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,D.jsx)(f,{of:w}),`
`,(0,D.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,D.jsx)(m,{of:w}),`
`,(0,D.jsx)(t.h1,{id:`more-examples`,children:`More Examples`}),`
`,(0,D.jsx)(t.h2,{id:`variantmanagement-with-custom-input`,children:`VariantManagement with custom Input`}),`
`,(0,D.jsxs)(t.p,{children:[`You can customize the inputs inside the configuration dialogs ("Save View" and "Manage Views") by leveraging the corresponding `,(0,D.jsx)(t.code,{children:`inputProps`}),` prop (`,(0,D.jsx)(t.code,{children:`saveViewInputProps`}),` and `,(0,D.jsx)(t.code,{children:`manageViewsInputProps`}),`) of the `,(0,D.jsx)(t.code,{children:`VariantItem`}),` component.
These props accept props of the `,(0,D.jsx)(t.code,{children:`Input`}),` component with which you are able to overwrite internal implementations. E.g. `,(0,D.jsx)(t.code,{children:`valueState`}),` and `,(0,D.jsx)(t.code,{children:`valueState`}),` message.`]}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.strong,{children:`Note:`}),` To prevent internal logic from being executed on save click, you can mark the `,(0,D.jsx)(t.code,{children:`onInput`}),` event of the corresponding `,(0,D.jsx)(t.code,{children:`Input`}),` component as invalid by setting `,(0,D.jsx)(t.code,{children:`event.isInvalid = true`}),` inside the respective handler.`]}),`
`,(0,D.jsx)(r,{hideCloseButton:!0,children:`It is possible to overwrite internally used props. Please use with caution!`}),`
`,(0,D.jsx)(f,{of:C,sourceState:`none`}),`
`,(0,D.jsx)(t.h3,{id:`code-example`,children:`Code Example`}),`
`,(0,D.jsxs)(`details`,{style:{marginBlockEnd:`2rem`},children:[(0,D.jsx)(`summary`,{children:`Show Code`}),(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:`language-jsx`,children:`const VariantManagementWithCustomValidation = ({ selectedByIndex = 1 }) => {
  const [valueStateSaveView, setValueStateSaveView] = useState(undefined);
  const [valueStateManageViews, setValueStateManageViews] = useState(undefined);
  const [values, setValues] = useState({
    1: 'Only alphanumeric chars in Save View input',
    2: 'Max 12 chars'
  });

  const handleSaveViewInput = (e) => {
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
  const handleSaveAs = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.detail['data-id']]: e.detail.children
    }));
  };

  const handleManageViewInput = (e) => {
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
  const handleSaveManageViews = (e) => {
    // if is custom manage view variant and is not in error state, set children to new value
    const isCustomManageViewsItem = e.detail.updatedVariants.find((item) => item['data-custom-manage-views']);
    if (!valueStateManageViews && isCustomManageViewsItem) {
      setValues((prev) => ({
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
  return (
    <VariantManagement
      onSaveAs={handleSaveAs}
      onSaveManageViews={handleSaveManageViews}
      onManageViewsCancel={handleManageViewsCancel}
      onSaveViewCancel={handleSaveViewCancel}
    >
      <VariantItem
        data-id={1}
        selected={selectedByIndex === 0}
        saveViewInputProps={{
          valueState: valueStateSaveView,
          valueStateMessage: valueStateSaveView ? (
            <div>Only alphanumeric and space characters allowed!</div>
          ) : undefined,
          onInput: handleSaveViewInput,
          'data-testid': 'alphanumeric'
        }}
      >
        {values[1]}
      </VariantItem>
      <VariantItem
        data-custom-manage-views
        data-id={2}
        selected={selectedByIndex === 1}
        manageViewsInputProps={{
          valueState: valueStateManageViews,
          valueStateMessage: valueStateManageViews ? <div>No more than 12 characters allowed!</div> : undefined,
          onInput: handleManageViewInput,
          'data-testid': '12chars'
        }}
      >
        {values[2]}
      </VariantItem>
    </VariantManagement>
  );
};
`})})]}),`
`,(0,D.jsx)(t.h2,{id:`basic-variantmanagement-implementation`,children:`Basic VariantManagement Implementation`}),`
`,(0,D.jsxs)(t.p,{children:[`This example shows how a basic implementation of the `,(0,D.jsx)(t.code,{children:`VariantManagement`}),` inside a `,(0,D.jsx)(t.code,{children:`FilterBar`}),` could look like. For a more in depth documentation you can take a look at the official `,(0,D.jsx)(t.a,{href:`https://experience.sap.com/fiori-design-web/variant-management/`,rel:`nofollow`,children:`Fiori for Web Design Guidelines`}),`.`]}),`
`,(0,D.jsxs)(t.p,{children:[(0,D.jsx)(t.strong,{children:`Note:`}),` All views are applied automatically, so the "Apply Automatically" checkboxes in both dialogs won't be visible.`]}),`
`,(0,D.jsx)(f,{of:x,sourceState:`none`}),`
`,(0,D.jsx)(t.h3,{id:`code-example-1`,children:`Code Example`}),`
`,(0,D.jsxs)(`details`,{style:{marginBlockEnd:`2rem`},children:[(0,D.jsx)(`summary`,{children:`Show Code`}),(0,D.jsx)(t.pre,{children:(0,D.jsx)(t.code,{className:`language-tsx`,children:`function FilterBarWithVariantManagement() {
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
    const { payload, type } = action;
    setCheckIfDirty(true);
    switch (type) {
      case 'selectedCountry':
        return { ...state, selectedCountry: payload };
      case 'date':
        return { ...state, date: payload };
      case 'selectedCodes':
        return { ...state, selectedCodes: payload };
      case 'changeVariant':
        return payload;
      default:
        console.warn('Unknown action type!');
        return state;
    }
  };

  const [filters, dispatchFiltersChange] = useReducer(filterReducer, initialVariantValues.current.Standard);
  const { selectedCountry, date, selectedCodes } = filters;

  const handleSelectChange = (e) => {
    const { selectedOption } = e.detail;
    dispatchFiltersChange({ type: 'selectedCountry', payload: selectedOption.textContent });
  };
  const handleDateChange = (e) => {
    dispatchFiltersChange({ type: 'date', payload: e.detail.value });
  };
  const handleSelectedCodesChange = (e) => {
    dispatchFiltersChange({
      type: 'selectedCodes',
      payload: e.detail.items.reduce((acc, cur) => {
        acc[cur.dataset.code] = true;
        return acc;
      }, {})
    });
  };

  const handleSaveAs = (e) => {
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
    setCustomVariants((prev) => [...prev, { ...variantItemProps, author: 'Current User' }]);
    initialVariantValues.current[variantItemProps.children] = filters;
    setSelectedVariant(variantItemProps.children);
    setIsDirty(false);
  };

  const handleSave = (e) => {
    const { variantItem: _omit, selected: _omit2, ...variantItemProps } = e.detail;
    initialVariantValues.current[variantItemProps.children] = filters;
    setIsDirty(false);
  };

  const handleSaveManageViews = (e) => {
    const { deletedVariants, updatedVariants } = e.detail;
    deletedVariants.forEach((variant) => {
      delete initialVariantValues.current[variant.children];
      setCustomVariants((prev) => prev.filter((item) => item.children !== variant.children));
    });
    updatedVariants.forEach((variant) => {
      const { variantItem: _omit, selected: _omit2, ...variantItemProps } = variant;
      initialVariantValues.current[variant.children] = variantItemProps;
      if (variant.isDefault) {
        setDefaultVariant(variant.children);
      }
      if (variant.selected) {
        setSelectedVariant(variant.children);
      }
      setCustomVariants((prev) => {
        return prev.map((item) => {
          if (item.children === variant.prevVariant.children) {
            return variantItemProps;
          }
          return item;
        });
      });
    });
  };

  const handleSelect = (e) => {
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

  return (
    <>
      <FilterBar
        header={
          <VariantManagement
            hideApplyAutomatically
            dirtyState={isDirty}
            onSaveAs={handleSaveAs}
            onSave={handleSave}
            onSelect={handleSelect}
            onSaveManageViews={handleSaveManageViews}
          >
            <VariantItem
              selected={selectedVariant === 'Standard'}
              global
              isDefault={defaultVariant === 'Standard'}
              author="SAP"
              readOnly
              labelReadOnly
            >
              Standard
            </VariantItem>
            {customVariants.map((variantItemProps) => {
              return (
                <VariantItem
                  key={variantItemProps.children}
                  {...variantItemProps}
                  selected={selectedVariant === variantItemProps.children}
                  isDefault={defaultVariant === variantItemProps.children}
                >
                  {variantItemProps.children}
                </VariantItem>
              );
            })}
          </VariantManagement>
        }
      >
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
      <Form style={{ marginBlockStart: '2rem' }} layout={'S1 M1 L1 XL1'} labelSpan={'S3 M3 L3 XL3'}>
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
    </>
  );
}
`})})]}),`
`,(0,D.jsx)(p,{children:y}),`
`,(0,D.jsx)(t.h2,{id:`variantitem`,children:`VariantItem`}),`
`,(0,D.jsx)(d,{of:a}),`
`,(0,D.jsx)(u,{of:a}),`
`,(0,D.jsx)(_,{})]})}function E(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;function O(){return(O=e((()=>{D=t(),s(),g(),v(),c(),n(),i(),b()})))()}O();export{E as default};