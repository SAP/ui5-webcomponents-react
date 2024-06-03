import type { Meta, StoryObj } from '@storybook/react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { useEffect, useReducer, useRef, useState } from 'react';
import { PopoverPlacementType, TitleLevel } from '../../enums/index.js';
import { DatePicker } from '../../webComponents/DatePicker/index.js';
import { MultiComboBox } from '../../webComponents/MultiComboBox/index.js';
import { MultiComboBoxItem } from '../../webComponents/MultiComboBoxItem/index.js';
import { Option } from '../../webComponents/Option/index.js';
import { Select } from '../../webComponents/Select/index.js';
import { FilterBar } from '../FilterBar/index.js';
import { FilterGroupItem } from '../FilterGroupItem/index.js';
import { Form } from '../Form/index.js';
import { FormGroup } from '../FormGroup/index.js';
import { FormItem } from '../FormItem/index.js';
import { Text } from '../Text/index.js';
import type { VariantItemPropTypes } from './VariantItem.js';
import { VariantItem } from './VariantItem.js';
import { VariantManagement } from './index.js';

const meta = {
  title: 'Inputs / VariantManagement',
  component: VariantManagement,
  args: {
    placement: PopoverPlacementType.Bottom,
    level: TitleLevel.H4
  }
} satisfies Meta<typeof VariantManagement>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <VariantManagement {...args}>
        <VariantItem>Default VariantItem</VariantItem>
        <VariantItem selected>Selected</VariantItem>
        <VariantItem author="SAP">Author</VariantItem>
        <VariantItem favorite>Favorite</VariantItem>
        <VariantItem isDefault>IsDefault</VariantItem>
        <VariantItem favorite labelReadOnly>
          Favorite & labelReadOnly
        </VariantItem>
        <VariantItem applyAutomatically>ApplyAutomatically</VariantItem>
        <VariantItem
          applyAutomatically
          applyAutomaticallyText="Describe your exceptions that deviate from the standard behavior here."
        >
          applyAutomatically & applyAutomaticallyText
        </VariantItem>
        <VariantItem readOnly>ReadOnly</VariantItem>
        <VariantItem global>Global</VariantItem>
        <VariantItem global readOnly>
          Global & readOnly
        </VariantItem>
        <VariantItem global>{`Not deletable -> global`}</VariantItem>
        <VariantItem hideDelete>{`Not deletable -> hideDelete`}</VariantItem>
        <VariantItem hideDelete={false} global>
          {`Deletable -> hideDelete: false, global: true`}
        </VariantItem>
      </VariantManagement>
    );
  }
};

export const WithCustomValidation: Story = {
  render: ({ selectedByIndex = 1 }: any) => {
    const [valueStateSaveView, setValueStateSaveView] = useState(undefined);
    const [valueStateManageViews, setValueStateManageViews] = useState(undefined);
    const [values, setValues] = useState({ 1: 'Only alphanumeric chars in Save View input', 2: 'Max 12 chars' });

    const handleSaveViewInput = (e) => {
      // only allow alphanumeric and space characters
      if (!e.target.value.match(/^[a-z0-9\s]+$/i)) {
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
      setValues((prev) => ({ ...prev, [e.detail['data-id']]: e.detail.children }));
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
        setValues((prev) => ({ ...prev, [isCustomManageViewsItem['data-id']]: isCustomManageViewsItem.children }));
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
            // @ts-expect-error: data- attributes are allowed on Input
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
            // @ts-expect-error: data- attributes are allowed on Input
            'data-testid': '12chars'
          }}
        >
          {values[2]}
        </VariantItem>
      </VariantManagement>
    );
  }
};

export const WithFilterBarImplementation: Story = {
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
        <Form
          style={{ marginBlockStart: '2rem' }}
          columnsS={1}
          columnsM={1}
          columnsL={1}
          columnsXL={1}
          labelSpanM={2}
          labelSpanL={2}
          labelSpanXL={2}
        >
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
      </>
    );
  }
};
