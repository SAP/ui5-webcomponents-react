import React, { useRef, useState } from 'react';
import { ValueState } from '../../enums';
import { VariantManagement } from './index';
import { VariantItem } from './VariantItem';

export const VariantManagementWithCustomValidation = ({ selectedByIndex = 1 }) => {
  const [valueStateSaveView, setValueStateSaveView] = useState(undefined);
  const [valueStateManageViews, setValueStateManageViews] = useState(undefined);
  const saveViewInputRef = useRef(null);

  const handleSaveViewInput = (e) => {
    // only allow alphanumeric and space characters
    if (!e.target.value.match(/^[a-z0-9\s]+$/i)) {
      // get ui5-input element
      saveViewInputRef.current = e.currentTarget;
      setValueStateSaveView(ValueState.Error);
    } else {
      setValueStateSaveView(undefined);
    }
  };
  const handleSaveAs = (e) => {
    // prevent the dialog from closing, if the valueState is in error state
    if (valueStateSaveView) {
      e.preventDefault();
      // set focus to the input element
      saveViewInputRef.current.focus();
    }
  };

  const handleManageViewInput = (e) => {
    // only 12 or fewer characters
    if (e.target.value.length > 12) {
      setValueStateManageViews(ValueState.Error);
    } else {
      setValueStateManageViews(undefined);
    }
  };
  const handleSaveManageViews = (e) => {
    // prevent the dialog from closing, if the valueState is in error state
    if (valueStateManageViews) {
      e.preventDefault();
    }
  };

  return (
    <VariantManagement onSaveAs={handleSaveAs} onSaveManageViews={handleSaveManageViews}>
      <VariantItem
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
        Only alphanumeric chars in Save View input
      </VariantItem>
      <VariantItem
        selected={selectedByIndex === 1}
        manageViewsInputProps={{
          valueState: valueStateManageViews,
          valueStateMessage: valueStateManageViews ? <div>No more than 12 characters allowed!</div> : undefined,
          onInput: handleManageViewInput,
          'data-testid': '12chars'
        }}
      >
        Max 12 chars
      </VariantItem>
    </VariantManagement>
  );
};
