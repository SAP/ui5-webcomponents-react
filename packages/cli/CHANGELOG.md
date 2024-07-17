# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
- **Modals:** **ThemeProvider**: the prop `withoutModalsProvider` has been removed. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/main/?path=/docs/migration-guide--docs).
- **Modals:** the hooks `useShowDialog`, `useShowPopover`, `useShowResponsivePopover`, `useShowMenu`, `useShowMessageBox` and `useShowToast` have been removed. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/main/?path=/docs/migration-guide--docs#modals).
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
- **Form:** The `Form` component has been replaced with the `ui5-form` UI5 Web Component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/main/?path=/docs/migration-guide--docs) for more details.

# 1.x.x

The changelog for 1.x.x can be found [here](https://github.com/SAP/ui5-webcomponents-react/blob/v1.29.x/packages/cli/CHANGELOG.md).
