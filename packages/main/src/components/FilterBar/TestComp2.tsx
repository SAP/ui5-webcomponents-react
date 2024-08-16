import type { MultiComboBoxSelectionChangeEventDetail } from '@ui5/webcomponents/dist/MultiComboBox.js';
import { useState } from 'react';
import type { FC } from 'react';
import { FilterBar, FilterGroupItem, MultiComboBox, MultiComboBoxItem } from '../../index.js';
import type { MultiComboBoxDomRef, Ui5CustomEvent, FilterBarPropTypes } from '../../index.js';

type ActiveFiltersMap = Map<string, string[]>;

const FilterBarView: FC = () => {
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersMap>(new Map());
  const [activeFiltersOnOpenedDialog, setActiveFiltersOnOpenedDialog] = useState<ActiveFiltersMap>(new Map());

  const onFilterSelectionChangeHanlder = (
    event: Ui5CustomEvent<MultiComboBoxDomRef, MultiComboBoxSelectionChangeEventDetail>,
    filter: (typeof filters)[0]
  ) => {
    const selectedItems = event.detail.items.map((selectedItem) =>
      filter.options.find((option) => option === selectedItem.text)
    );
    setActiveFilters((prevState) => {
      if (selectedItems.length === 0) {
        prevState.delete(filter.id);
      } else {
        prevState.set(filter.id, selectedItems);
      }
      return new Map(prevState);
    });
  };

  const onClearHandler = () => {
    setActiveFilters(new Map());
  };

  const onFiltersDialogOpenHandler = () => {
    setActiveFiltersOnOpenedDialog(new Map(activeFilters));
  };

  const onFiltersDialogCloseHandler: FilterBarPropTypes['onFiltersDialogClose'] = (closeTrigger) => {
    if (closeTrigger === 'cancelButtonPressed') {
      setActiveFilters(new Map(activeFiltersOnOpenedDialog));
    }
  };

  const onFiltersDialogResetHandler = () => {
    setActiveFilters(new Map(activeFiltersOnOpenedDialog));
  };

  const filters = [
    {
      id: 'filter1',
      name: 'Filter 1',
      options: ['Option 1', 'Option 2', 'Option 3']
    },
    {
      id: 'filter2',
      name: 'Filter 2',
      options: ['Option 1', 'Option 2', 'Option 3']
    }
  ];

  return (
    <FilterBar
      hideToolbar
      showClearOnFB
      showResetButton
      onClear={onClearHandler}
      onFiltersDialogOpen={onFiltersDialogOpenHandler}
      onFiltersDialogClose={onFiltersDialogCloseHandler}
      onRestore={onFiltersDialogResetHandler}
    >
      {filters.map((filter) => (
        <FilterGroupItem
          filterKey={filter.id}
          key={filter.id}
          label={filter.name}
          active={activeFilters.has(filter.id)}
        >
          <MultiComboBox id={filter.id} onSelectionChange={(e) => onFilterSelectionChangeHanlder(e, filter)}>
            {filter.options.map((option) => (
              <MultiComboBoxItem
                key={option}
                text={option}
                selected={activeFilters.has(filter.id) ? activeFilters.get(filter.id)?.includes(option) : false}
              />
            ))}
          </MultiComboBox>
        </FilterGroupItem>
      ))}
    </FilterBar>
  );
};

export default FilterBarView;
