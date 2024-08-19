import type { CSSProperties, MouseEvent, ReactElement, ReactNode } from 'react';
import type { CommonProps } from '../../types/index.js';
import type { ButtonPropTypes, DialogPropTypes, InputPropTypes } from '../../webComponents/index.js';
import type { FilterGroupItemInternalProps } from '../FilterGroupItem/types.js';

interface OnToggleFiltersEvent extends Omit<MouseEvent, 'detail'> {
  detail: { visible: boolean; nativeDetail: number };
}

interface OnFiltersDialogSaveEvent extends Omit<MouseEvent, 'detail'> {
  detail: {
    /**
     * Defines all selected filters.
     */
    selectedFilterKeys: string[];
    /**
     * Defines the order of filters by `filterKey`.
     *
     * __Note:__ If `enableReordering` is falsy, the Array is empty.
     */
    reorderedFilterKeys: string[];
    /**
     * Native `detail` for `click` event.
     */
    nativeDetail: number;
  };
}

interface RestorePayload {
  /**
   * Defines the source of the event.
   */
  source: 'dialog' | 'filterBar';
  /**
   * Defines all selected filters.
   */
  selectedFilterKeys: string[];
  /**
   * Defines the initial selected filters (defined by `hiddenInFilterBar`) when opening the filters dialog.
   *
   * __Note:__ If the source is `filterBar` the value is `null`.
   *
   * __Note:__ This property doesn't take into account, if `hiddenInFilterBar` is programmatically changed while the filters dialog is open.
   */
  previousSelectedFilterKeys: string[] | null;
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
   * __Note:__ Per default `placeholder`, `icon`, `noTypeahead`, `showClearIcon` and `type` are applied to the search input.
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
   * __Note__: If set to `true`, `header` and the "Hide/Show FilterBar" button are not available and the rest of the buttons are moved to the bottom right side of the filter area.
   */
  hideToolbar?: boolean;
  /**
   * Defines whether the `FilterBar` is collapsed.
   *
   * __Note:__ This prop has no effect if `hideToolbar` is `true`.
   */
  filterBarCollapsed?: boolean;
  /**
   * Defines the width of the `FilterGroupItems`.
   *
   * __Note:__ If your filter elements have an internal `minWidth`, please make sure to overwrite it with `minWidth:'auto'` or the corresponding `filterContainerWidth` otherwise it can lead to unintended behavior.
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
   */
  enableReordering?: boolean;
  /**
   * Sets the components outer HTML tag.
   *
   * __Note:__ For TypeScript the types of `ref` are bound to the default tag name, if you change it you are responsible to set the respective types yourself.
   */
  as?: keyof HTMLElementTagNameMap;
  /**
   * Defines where modals are rendered into via React.createPortal.
   *
   * You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--docs).
   *
   * @default `document.body`
   */
  portalContainer?: Element;
  /**
   * The event is fired when the `FilterBar` is collapsed/expanded.
   */
  //todo breaking
  onToggleFilters?: (event: OnToggleFiltersEvent) => void;
  /**
   * The event is fired when the "Go" button of the filter configuration dialog is clicked.
   */
  //todo: breaking
  onFiltersDialogSave?: (event: OnFiltersDialogSaveEvent) => void;
  /**
   * The event is fired when the "Cancel" button of the filter configuration dialog is clicked or when the dialog is closed by pressing the "Escape" key.
   */
  //todo: breaking
  onFiltersDialogCancel?: (escPressed: boolean) => void;
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
  //todo: breaking
  onFiltersDialogClose?: (closeTrigger: 'cancelButtonPressed' | 'okButtonPressed' | 'escPressed') => void;
  /**
   * The event is fired when a filter is selected/unselected in the filter configuration dialog.
   */
  //todo: breaking
  onFiltersDialogSelectionChange?: (payload: FiltersDialogSelectionChangePayload) => void;
  /**
   * The event is fired on input in the filter configuration dialog search field.
   */
  // todo: breaking
  onFiltersDialogSearch?: InputPropTypes['onInput'];
  /**
   * The event is fired when the "Clear" button is clicked.
   */
  //todo breaking
  onClear?: ButtonPropTypes['onClick'];
  /**
   * The event is fired when the "Go" button is clicked.
   */
  //todo breaking
  onGo?: ButtonPropTypes['onClick'];
  /**
   * The event is fired when the "Reset" button in the filter dialog is pressed, or the "Restore" button in the FilterBar.
   */
  //todo breaking
  // - properties
  // - doesn't remove filters anymore when clicked in FB and Go btn is displayed
  onRestore?: (payload: RestorePayload) => void;
}

export type FilterBarChild = ReactElement<FilterGroupItemInternalProps> | boolean | null | undefined;
export type SafeChildrenFn = () => ReactElement<FilterGroupItemInternalProps>[];
