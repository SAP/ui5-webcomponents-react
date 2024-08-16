import type { CSSProperties, MouseEvent, ReactElement, ReactNode } from 'react';
import type { CommonProps, Ui5CustomEvent } from '../../types/index.js';
import type {
  ButtonPropTypes,
  DialogPropTypes,
  InputDomRef,
  InputPropTypes,
  TableRowDomRef,
  TableSelectionDomRef
} from '../../webComponents/index.js';
import type { FilterGroupItemInternalProps } from '../FilterGroupItem/types.js';

interface OnToggleFiltersEvent extends Omit<MouseEvent, 'detail'> {
  detail: { visible: boolean; filters: HTMLElement[]; search: HTMLElement; nativeDetail: number };
}

interface OnFiltersDialogSaveEvent extends Omit<MouseEvent, 'detail'> {
  detail: {
    /**
     * Defines all selected filters.
     */
    selectedFilterKeys: Set<string>;
    orderIds: string[];
    nativeDetail: number;
  };
}

interface OnGoEvent extends Omit<MouseEvent, 'detail'> {
  detail: {
    elements: Record<string, HTMLElement>;
    filters: HTMLElement[];
    search: HTMLElement;
    nativeDetail: number;
  };
}

interface RestorePayload {
  source: 'dialog' | 'filterBar';
  selectedFilterKeys: string[];
  previousSelectedFilterKeys: string[] | null;
  search: InputDomRef | null;
}

interface FiltersDialogSelectionChangePayload {
  /**
   * Defines the toggled filter/s by `filterKey`.
   */
  toggledFilterKeys: Set<string>;
  /**
   * Defines if the filter was selected.
   *
   * __Note:__ For "select-all" this property is `undefined`.
   */
  selected: boolean | undefined;
  /**
   * Defines all selected filters.
   */
  selectedFilterKeys: Set<string>;
  /**
   * Defines previous selected filters.
   */
  previousSelectedFilterKeys: Set<string>;
}

export interface FilterBarPropTypes extends CommonProps {
  /**
   * Defines the filters of the `FilterBar`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `FilterGroupItems` in order to preserve the intended design.
   */
  children: ReactNode | ReactNode[];
  /**
   * Defines the search field rendered as first filter item.
   *
   * __Note:__ Per default `placeholder`, `icon`, `noTypeahead` and `showClearIcon` are applied to the search input.
   *
   * __Note:__ The field is only available in the FilterBar not inside the filter configuration dialog.
   */
  search?: ReactElement<InputPropTypes>;
  /**
   * Specifies header text or variant management that is shown in the toolbar on the first position
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantManagement`, `Text` or `Title` in order to preserve the intended design.
   *
   * __Note:__ If `hideToolbar` is `true` this prop has no effect.
   */
  header?: ReactNode;
  /**
   * Defines whether the toolbar on top of the filter items is displayed.
   *
   * __Note__: If set to `true`, `header`, `search` and the "Hide/Show FilterBar" button are not available and the rest of the buttons are moved to the bottom right side of the filter area.
   */
  hideToolbar?: boolean;
  /**
   * Defines whether the `FilterBar` is collapsed.
   */
  filterBarCollapsed?: boolean;
  /**
   * Defines the width of the `FilterGroupItems`.
   *
   * __Note:__ If your filter elements (e.g. `DateRangePicker`) have an internal `minWidth`, please make sure to overwrite it with `minWidth:'auto'` or the corresponding `filterContainerWidth` otherwise it can lead to unintended behavior.
   */
  filterContainerWidth?: CSSProperties['width'];
  /**
   * Defines whether the `groupName` of the `FilterGroupItems` is displayed.
   */
  considerGroupName?: boolean;
  /**
   * Defines whether the "Clear" button is displayed in the `FilterBar`.
   */
  showClearOnFB?: boolean;
  /**
   * Defines whether the "Go" button is displayed in the `FilterBar`.
   */
  showGoOnFB?: boolean;
  /**
   * Defines whether the "Filter" button is displayed in the `FilterBar`.
   *
   * __Note:__ Clicking on the button will open the filter configuration dialog, where you can add/remove filters to the `FilterBar`.
   */
  hideFilterConfiguration?: boolean;
  /**
   * Defines whether the "Reset" button is displayed in the filter configuration dialog.
   *
   * __Note:__
   */
  showResetButton?: boolean;
  /**
   * Defines whether the "Hide/Show Filters" button is displayed in the `FilterBar`.
   *
   * __Note:__ If `hideToolbar` is `true` or the FilterBar is used on mobile, this prop has no effect.
   */
  hideToggleFiltersButton?: boolean;
  /**
   * Defines the number of active filters displayed in the "Filter" button.
   *
   * __Note__: If `hideFilterConfiguration` is `true` this prop has no effect.
   */
  activeFiltersCount?: number | string;
  /**
   * Defines whether the "Restore" button is displayed in the `FilterBar`.
   */
  showRestoreOnFB?: boolean;
  /**
   * Allow changing the order of filters in the filter configuration dialog.
   *
   * __Note:__ Setting the `orderId` of each `FilterGroupItem` is mandatory for this feature to work.
   */
  enableReordering?: boolean;
  /**
   * Defines whether the `FilterBar` should not internally manage the state of filters when set in the filters dialog.
   *
   * __Note:__ With `v2` the internal state management will be removed and the behavior if `fullyControlFilters` is `true` will be the default. We therefore recommend using `fullyControlFilters` already.
   */
  fullyControlFilters?: boolean;
  /**
   * Sets the components outer HTML tag.
   *
   * __Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.
   */
  as?: keyof HTMLElementTagNameMap;
  /**
   * The event is fired when the `FilterBar` is collapsed/expanded.
   */
  onToggleFilters?: (event: OnToggleFiltersEvent) => void;
  /**
   * The event is fired when the "Go" button of the filter configuration dialog is clicked.
   */
  //todo: wip & breaking
  onFiltersDialogSave?: (event: OnFiltersDialogSaveEvent) => void;
  /**
   * The event is fired when the "Cancel" button of the filter configuration dialog is clicked or when the dialog is closed by pressing the "Escape" key.
   */
  onFiltersDialogCancel?: (event: Ui5CustomEvent) => void;
  /**
   * The event is fired when the filter configuration dialog is opened.
   *
   * __Note:__ By adding `event.preventDefault()` to the function body, opening the dialog is prevented and you can add your own custom component. Even though this is possible, we highly recommend using the default dialog in order to preserve the intended design.
   */
  onFiltersDialogOpen?: ButtonPropTypes['onClick'];
  /**
   * The event is fired after the filter configuration dialog has been opened.
   */
  onAfterFiltersDialogOpen?: DialogPropTypes['onOpen'];
  /**
   * The event is fired when the filter configuration dialog is closed.
   */
  onFiltersDialogClose?: (event: Ui5CustomEvent) => void;
  /**
   * The event is fired when a filter is selected/unselected in the filter configuration dialog.
   */
  //todo: breaking
  onFiltersDialogSelectionChange?: (payload: FiltersDialogSelectionChangePayload) => void;
  /**
   * The event is fired on input in the filter configuration dialog search field.
   */
  onFiltersDialogSearch?: (event: CustomEvent<{ value: string; element: HTMLElement }>) => void;
  /**
   * The event is fired when the "Clear" button is clicked.
   */
  onClear?: (event: CustomEvent<{ filters: HTMLElement[]; search: HTMLElement }>) => void;
  /**
   * The event is fired when the "Go" button is clicked.
   */
  onGo?: (event: OnGoEvent) => void;
  /**
   * The event is fired when the "Reset" button in the filter dialog is pressed, or the "Restore" button in the FilterBar.
   */
  //todo breaking
  onRestore?: (payload: RestorePayload) => void;
}

export type ReactKeyWithoutBigInt = string | number;
export type FilterBarChild = ReactElement<FilterGroupItemInternalProps> | boolean | null | undefined;
export type SafeChildrenFn = () => ReactElement<FilterGroupItemInternalProps>[];
