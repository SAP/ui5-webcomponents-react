import React, { useReducer, useState } from 'react';
import { ButtonDomRef, MultiComboBoxDomRef, ToggleButton, Ui5CustomEvent } from '../..';
import { FilterBar, FilterGroupItem, MultiComboBox, MultiComboBoxItem } from '../..';

type ActiveFiltersMap = Map<string, string[]>;

const FilterBarView: React.FC = (props) => {
  const [logEvents, toggleLogEvents] = useReducer((prev) => !prev, false);
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersMap>(new Map());
  const [activeFiltersOnOpenedDialog, setActiveFiltersOnOpenedDialog] = useState<ActiveFiltersMap>(new Map());

  const onFilterSelectionChangeHanlder = (
    event: Ui5CustomEvent<MultiComboBoxDomRef, any>,
    filter: (typeof filters)[0]
  ) => {
    const selectedItems = event.detail.items.map(
      (selectedItem) => filter.options.find((option) => option === selectedItem.text)!
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

  const onClearHandler = (e) => {
    if (logEvents) {
      console.log(e);
    }
    setActiveFilters(new Map());
  };

  const onFiltersDialogOpenHandler = (e) => {
    if (logEvents) {
      console.log(e);
    }
    setActiveFiltersOnOpenedDialog(new Map(activeFilters));
  };

  const onFiltersDialogCloseHandler = (e: Ui5CustomEvent<HTMLElement, never>) => {
    if (logEvents) {
      console.log(e);
    }
    if ((e.target as ButtonDomRef).getAttribute('data-component-name') === 'FilterBarDialogCancelBtn') {
      setActiveFilters(new Map(activeFiltersOnOpenedDialog));
    }
  };

  const onFiltersDialogResetHandler = (e) => {
    if (logEvents) {
      console.log(e);
    }
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
    <>
      <ToggleButton onCLick={toggleLogEvents} pressed={logEvents}>
        Log all events
      </ToggleButton>
      <FilterBar
        {...props}
        hideToolbar
        showClearOnFB
        showResetButton
        onClear={onClearHandler}
        onFiltersDialogOpen={onFiltersDialogOpenHandler}
        onFiltersDialogClose={onFiltersDialogCloseHandler}
        onRestore={onFiltersDialogResetHandler}
        fullyControlFilters
      >
        {filters.map((filter) => (
          <FilterGroupItem key={filter.id} label={filter.name} active={activeFilters.has(filter.id)}>
            <MultiComboBox id={filter.id} onSelectionChange={(e) => onFilterSelectionChangeHanlder(e, filter)}>
              {filter.options.map((option) => {
                const active = activeFilters.has(filter.id) ? activeFilters.get(filter.id)?.includes(option) : false;
                return <MultiComboBoxItem key={option} text={option} selected={active} additionalText={`${active}`} />;
              })}
            </MultiComboBox>
          </FilterGroupItem>
        ))}
      </FilterBar>
      {filters.map((filter) => (
        <MultiComboBox
          key={filter.id}
          id={filter.id}
          onSelectionChange={(e) => onFilterSelectionChangeHanlder(e, filter)}
        >
          {filter.options.map((option) => {
            const active = activeFilters.has(filter.id) ? activeFilters.get(filter.id)?.includes(option) : false;
            return <MultiComboBoxItem key={option} text={option} selected={active} additionalText={`${active}`} />;
          })}
        </MultiComboBox>
      ))}
    </>
  );
};

export default FilterBarView;
