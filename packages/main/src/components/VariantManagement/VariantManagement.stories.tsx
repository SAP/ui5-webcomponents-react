import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PopoverPlacementType, TitleLevel, ValueState } from '../../enums/index.js';
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
    const [customSaveViewVariantText, setCustomSaveViewVariantText] = useState(
      'Only alphanumeric chars in Save View input'
    );
    const [valueStateManageViews, setValueStateManageViews] = useState(undefined);
    const [customManageViewsVariantText, setCustomManageViewsVariantText] = useState('Max 12 chars');

    const handleSaveViewInput = (e) => {
      // only allow alphanumeric and space characters
      if (!e.target.value.match(/^[a-z0-9\s]+$/i)) {
        // mark variant as invalid (prevent internal logic from being applied)
        e.isInvalid = true;
        setValueStateSaveView(ValueState.Error);
      } else {
        // mark variant as valid again
        e.isInvalid = false;
        setValueStateSaveView(undefined);
      }
    };
    const handleSaveAs = (e) => {
      setCustomSaveViewVariantText(e.detail.children);
    };

    const handleManageViewInput = (e) => {
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
    const handleSaveManageViews = (e) => {
      // if is custom manage view variant and is not in error state, set children to new value
      const isCustomManageViewsItem = e.detail.updatedVariants.find((item) => item['data-custom-manage-views']);
      if (!valueStateManageViews && isCustomManageViewsItem) {
        setCustomManageViewsVariantText(isCustomManageViewsItem.children);
      }
    };
    return (
      <VariantManagement onSaveAs={handleSaveAs} onSaveManageViews={handleSaveManageViews}>
        <VariantItem
          data-custom-save-view
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
          {customSaveViewVariantText}
        </VariantItem>
        <VariantItem
          data-custom-manage-views
          selected={selectedByIndex === 1}
          manageViewsInputProps={{
            valueState: valueStateManageViews,
            valueStateMessage: valueStateManageViews ? <div>No more than 12 characters allowed!</div> : undefined,
            onInput: handleManageViewInput,
            // @ts-expect-error: data- attributes are allowed on Input
            'data-testid': '12chars'
          }}
        >
          {customManageViewsVariantText}
        </VariantItem>
      </VariantManagement>
    );
  }
};
