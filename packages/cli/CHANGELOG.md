# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2024-08-21)

### Code Refactoring

- **FilterBar:** remove reference copying of filter/input elements ([#6214](https://github.com/SAP/ui5-webcomponents-react/issues/6214)) ([4473118](https://github.com/SAP/ui5-webcomponents-react/commit/4473118f82031ab69216f07afa9218835268eb0c)), closes [#5652](https://github.com/SAP/ui5-webcomponents-react/issues/5652)

### BREAKING CHANGES

- **FilterBar:** The `FilterBar` component was completely overhauled and references of input elements aren’t copied to the filters dialog anymore, also internal logic for reordering and selection has been removed, meaning it’s necessary to control their values manually (e.g. via React state).
- **FilterBar:** `onToggleFilters`: The `detail` property of the event now only includes `visible` and `nativeDetail` properties. `filters` and `search` have been removed.
- **FilterBar:** `onFiltersDialogSave`: The `detail` property of the event now only includes `selectedFilterKeys`, `reorderedFilterKeys` and `nativeDetail` properties. `elements`, `toggledElements`, `filters`, `search`, `orderIds` have been removed.
- **FilterBar:** `onFiltersDialogCancel`: The event is now a callback instead of a `Ui5CustomEvent`. It implements the `escPressed` parameter.
- **FilterBar:** `onFiltersDialogClose`: The event is now a callback instead of a `Ui5CustomEvent`. It implements the `closeTrigger` parameter.
- **FilterBar:** `onFiltersDialogSelectionChange`: The event is now a callback instead of a `Ui5CustomEvent`. It implements a payload object as parameter.
- **FilterBar:** `onFiltersDialogSearch`: The event is now a standard `Input` `onInput` event. The `detail` properties `value` and `element` have been removed.
- **FilterBar:** `onClear`: The event is now a standard `ToolbarButton` `onClick` event. The `detail` properties `filters` and `search` have been removed.
- **FilterBar:** `onGo`: The event is now a standard `ToolbarButton` `onClick` event. The `detail` properties `elements`, `filters`, `search`, `nativeDetail` have been removed.
- **FilterBar:** `onRestore`: The event is now a callback instead of a `CustomEvent`. It implements a payload object as parameter.
- **FilterBar:** `onFiltersDialogOpen (TypeScript)`: The target of the event is now a `ToolbarButton`.
- **FilterBar:** `portalContainer` has been removed as it's no longer needed due to the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) used in the `Popover` ui5 web component.
- **FilterBar:** `FilterGroupItem`: `orderId` has been removed. Please use `filterKey` instead.

# [2.0.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.1...v2.0.0-rc.2) (2024-08-07)

### Bug Fixes

- **codemod:** improve replacements for `Text` ([#6123](https://github.com/SAP/ui5-webcomponents-react/issues/6123)) ([277120b](https://github.com/SAP/ui5-webcomponents-react/commit/277120b8c44a5f8aa227b6f84264cbd4accdd360))

### Features

- update to UI5 Web Components ~2.1.1 ([#6151](https://github.com/SAP/ui5-webcomponents-react/issues/6151)) ([80c9a65](https://github.com/SAP/ui5-webcomponents-react/commit/80c9a652be7eb25c3b882579666ab7c950bbc0cb)), closes [#5971](https://github.com/SAP/ui5-webcomponents-react/issues/5971)

# [2.0.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.0...v2.0.0-rc.1) (2024-07-19)

### Bug Fixes

- **codemod:** fix import statment for UI5 Web Component enums ([#6084](https://github.com/SAP/ui5-webcomponents-react/issues/6084)) ([b3a5aed](https://github.com/SAP/ui5-webcomponents-react/commit/b3a5aed8b99c31e7475c2d305d6804b9afa7275b))

### Features

- **codemod:** basic replacements for `DynamicPage` ([#6086](https://github.com/SAP/ui5-webcomponents-react/issues/6086)) ([93819a9](https://github.com/SAP/ui5-webcomponents-react/commit/93819a9a9c7fd87d16d5bc64094890e8f8d5684a))
- **codemod:** transform Text `wrapping` to `maxLines` ([#6085](https://github.com/SAP/ui5-webcomponents-react/issues/6085)) ([a879a9b](https://github.com/SAP/ui5-webcomponents-react/commit/a879a9b107dc50e1bc267bfd2abe32038201c30f))
- **ObjectPage:** refactor component to support ui5wc v2 ([#6089](https://github.com/SAP/ui5-webcomponents-react/issues/6089)) ([105b2da](https://github.com/SAP/ui5-webcomponents-react/commit/105b2da44c1c2727080da8558dfb6c4ef65e2b39))

### BREAKING CHANGES

- **ObjectPage:** `headerContent` has been renamed to `headerArea` and
  now only accepts the `ObjectPageHeader` component.
- **ObjectPage:** `headerTitle` has been renamed to `titleArea` and now
  only accepts the `ObjectPageTitle` component.
- **ObjectPage:** `footer` has been renamed to `footerArea`.
- **ObjectPage:** `onToggleHeaderContent` has been renamed to
  `onToggleHeaderArea`
- **ObjectPage:** `onPinnedStateChange` has been renamed to
  `onPinButtonToggle`
- **ObjectPage:** **ObjectPageTitle**: `actions` has been renamed to
  `actionsBar`. Instead of single actions, the `Toolbar` component should
  now be passed.
- **ObjectPage:** **ObjectPageTitle**: `navigationActions` has been
  renamed to `navigationBar`. Instead of single actions, the `Toolbar`
  component should now be passed.
- **ObjectPage:** **ObjectPageTitle**: `actionsToolbarProps`: Since it's
  now recommended passing the `Toolbar` component directly, this prop is
  redundant.
- **ObjectPage:** **ObjectPageTitle**: `navigationActionsToolbarProps`:
  Since it's now recommended passing the `Toolbar` component directly,
  this prop is redundant.

# [2.0.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.29.2...v2.0.0-rc.0) (2024-07-11)

### Code Refactoring

- **ActionSheet:** api alignment ([#5956](https://github.com/SAP/ui5-webcomponents-react/issues/5956)) ([5b2ac63](https://github.com/SAP/ui5-webcomponents-react/commit/5b2ac63943461db5e7bbb12040b29c98344402c5))
- **AnalyticalTable:** remove deprecated props & enums ([#6021](https://github.com/SAP/ui5-webcomponents-react/issues/6021)) ([ca13875](https://github.com/SAP/ui5-webcomponents-react/commit/ca13875a46a755fe8d1d4c325b33295561f7d6ad))
- **enums:** harmonize enum names ([#5970](https://github.com/SAP/ui5-webcomponents-react/issues/5970)) ([98b9bb7](https://github.com/SAP/ui5-webcomponents-react/commit/98b9bb7351e233ec958553a7f8584015434ea457))
- **FilterGroupItem:** api alignment ([#6012](https://github.com/SAP/ui5-webcomponents-react/issues/6012)) ([0e6a326](https://github.com/SAP/ui5-webcomponents-react/commit/0e6a326fd7b338408eb0a801fce495988d264d29))
- harmonize prop/enum names ([#6040](https://github.com/SAP/ui5-webcomponents-react/issues/6040)) ([4b4815b](https://github.com/SAP/ui5-webcomponents-react/commit/4b4815b0066cce7e6522dc5fd05b9c14a24e7555))
- **Modals:** replace context with use-sync-external-store ([#6042](https://github.com/SAP/ui5-webcomponents-react/issues/6042)) ([e0818c4](https://github.com/SAP/ui5-webcomponents-react/commit/e0818c4a3ba50d989c78b9f228fbc5b973926066))
- **ObjectPage:** api alignment ([#6047](https://github.com/SAP/ui5-webcomponents-react/issues/6047)) ([703084b](https://github.com/SAP/ui5-webcomponents-react/commit/703084bbb1994516da06066a7f292ffe396955d4))
- replace `Toolbar` with UI5 Web Component ([#6061](https://github.com/SAP/ui5-webcomponents-react/issues/6061)) ([bf60767](https://github.com/SAP/ui5-webcomponents-react/commit/bf6076772d691a6a5d98678d38ac705bed4bfb2a))

### Features

- **cli:** create codemod for UI5 Web Components React v2 migration ([#5908](https://github.com/SAP/ui5-webcomponents-react/issues/5908)) ([9f65c98](https://github.com/SAP/ui5-webcomponents-react/commit/9f65c987c39093b240e1230d783c66376d29aad6))
- **Form:** replace with UI5 Web Component ([#5925](https://github.com/SAP/ui5-webcomponents-react/issues/5925)) ([1e246ee](https://github.com/SAP/ui5-webcomponents-react/commit/1e246ee5da541f48ffcb08833babb483c41e27d4))
- support objects and references as Web Component props ([#5957](https://github.com/SAP/ui5-webcomponents-react/issues/5957)) ([f41d32b](https://github.com/SAP/ui5-webcomponents-react/commit/f41d32b47f4ecbd818afeedb0b72a5b624e4514c))
- update to @ui5/webcomonents 2.0.0-rc.6 ([#5940](https://github.com/SAP/ui5-webcomponents-react/issues/5940)) ([60907b4](https://github.com/SAP/ui5-webcomponents-react/commit/60907b4a43902a899b7f48e9dc6609d0d5b9a731))
- update UI5 Web Components to 2.0.0 ([#6023](https://github.com/SAP/ui5-webcomponents-react/issues/6023)) ([49efb9b](https://github.com/SAP/ui5-webcomponents-react/commit/49efb9b71aa41d7efdcc8f02b592f91cf365d2b6))

### BREAKING CHANGES

- the `Toolbar` component and its related components have been moved to the `@ui5/webcomponents-react-compat` package.
- the `ToolbarV2` component has been renamed to `Toolbar`
- the `ToolbarSpacerV2` component has been renamed to `ToolbarSpacer`
- the `ToolbarSeparatorV2` component has been renamed to `ToolbarSeparator`
- **ObjectPage:** the props `showHideHeaderButton` and
  `showTitleInHeaderContent` have been removed.
- **ObjectPage:** the prop `alwaysShowContentHeader` has been renamed to
  `headerPinned`
- **ObjectPage:** the prop `headerContentPinnable` has been renamed to
  `hidePinButton` and its logic has been inverted. The pin button is now
  shown by default.
- **ObjectPage:** the prop `showSubHeaderRight` has been removed as it's
  not defined by design anymore.
- **Modals:** **ThemeProvider**: the prop `withoutModalsProvider` has been removed. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs).
- **Modals:** the hooks `useShowDialog`, `useShowPopover`, `useShowResponsivePopover`, `useShowMenu`, `useShowMessageBox` and `useShowToast` have been removed. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs#modals).
- **ActionSheet:** `a11yConfig` has been renamed to
  `accessibilityAttributes`.
- **AnalyticalTable:** The properties and values for the
  `AnalyticalTableSelectionMode` enum has been changed. `SingleSelect` is
  now `Single` and `MultiSelect` is now `Multiple`.
- **AnalyticalTable:** `a11yConfig` has been renamed to
  `accessibilityAttributes`.
- **ObjectPage:** `a11yConfig` has been renamed to
  `accessibilityAttributes`.
- **ObjectStatus:** `active` has been renamed to
  `interactive`.
- updated UI5 Web Components to v2. All [breaking changes](https://sap.github.io/ui5-webcomponents/docs/migration-guides/to-version-2/) apply to this project as well.
- the `SuggestionGroupItem` component has been replaced by the `SuggestionItemGroup` component
- **AnalyticalTable:** The `TableScaleWidthMode` enum has been removed, please
  use `AnalyticalTableScaleWidthMode` instead.
- **AnalyticalTable:** The `TableSelectionBehavior` enum has been removed,
  please use `AnalyticalTableSelectionBehavior` instead.
- **AnalyticalTable:** The `TableSelectionMode ` enum has been removed, please
  use `AnalyticalTableSelectionMode` instead.
- **AnalyticalTable:** The `TableVisibleRowCountMode` enum has been removed,
  please use `AnalyticalTableVisibleRowCountMode ` instead.
- **AnalyticalTable:** The `alwaysShowSubComponent ` prop has been removed,
  please use `subComponentsBehavior` instead.
- **AnalyticalTable:** The default value (`true`) of the `sortable` prop has
  been removed, it is now required to explicitly set this prop, if the
  table should be sortable.
- **AnalyticalTable:** The `canReorder` [column property](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/data-display-analyticaltable--docs#column-properties) has been removed, please use `disableDragAndDrop` instead.
- **FilterGroupItem:** For a better aligned API, the `visible` and `visibleInFilterBar` (default: `true`) props have been replaced with `hidden` and `hiddenInFilterBar` (no default value).
- **enums:** the `MessageBoxActions` enum has been renamed to `MessageBoxAction`
- **enums:** the `MessageBoxTypes` enum has been renamed to `MessageBoxType`
- **enums:** the `Themes` enum has been renamed to `Theme` and the deprecated "Belize" (`sap_belize`) theme family has been removed
- **ActionSheet:** the `portalContainer` prop has been removed as it's not needed anymore
- **ActionSheet:** the `showCancelButton` has been renamed to `hideCancelButton` and the logic has been inverted.
- the `StandardListItem` has been replaced with the
  `ListItemStandard` component
- the `CustomListItem` has been replaced with the
  `ListItemCustom` component
- the `MultiComboBoxGroupItem` has been replaced with the
  `MultiComboBoxItemGroup` component
- the `TableGroupRow` component has been deleted
- the `TableColumn` component has been replaced with the
  `TableHeaderCell` component
- **VariantManagement**: the `portalContainer` prop has
  been removed as it is no longer needed.
- **Form:** The `Form` component has been replaced with the `ui5-form` UI5 Web Component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.

# 1.x.x

The changelog for 1.x.x can be found [here](https://github.com/SAP/ui5-webcomponents-react/blob/v1.29.x/packages/cli/CHANGELOG.md).
