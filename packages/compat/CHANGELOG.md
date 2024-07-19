# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.29.2...v2.0.0-rc.0) (2024-07-11)

### Code Refactoring

- replace `Toolbar` with UI5 Web Component ([#6061](https://github.com/SAP/ui5-webcomponents-react/issues/6061)) ([bf60767](https://github.com/SAP/ui5-webcomponents-react/commit/bf6076772d691a6a5d98678d38ac705bed4bfb2a))

### Features

- create compat package ([#5894](https://github.com/SAP/ui5-webcomponents-react/issues/5894)) ([f4516cc](https://github.com/SAP/ui5-webcomponents-react/commit/f4516cce3b3f246929f086154f6c185c25dd357e))
- move `Loader` to `compat` package & replace with `BusyIndicator` ([#6020](https://github.com/SAP/ui5-webcomponents-react/issues/6020)) ([80d8c0b](https://github.com/SAP/ui5-webcomponents-react/commit/80d8c0b1f4ed5b69e6f1aa835f5b20d0cf264622))
- update to @ui5/webcomonents 2.0.0-rc.6 ([#5940](https://github.com/SAP/ui5-webcomponents-react/issues/5940)) ([60907b4](https://github.com/SAP/ui5-webcomponents-react/commit/60907b4a43902a899b7f48e9dc6609d0d5b9a731))
- update UI5 Web Components to 2.0.0 ([#6023](https://github.com/SAP/ui5-webcomponents-react/issues/6023)) ([49efb9b](https://github.com/SAP/ui5-webcomponents-react/commit/49efb9b71aa41d7efdcc8f02b592f91cf365d2b6))

### BREAKING CHANGES

- the `Toolbar` component and its related components have been moved to the `@ui5/webcomponents-react-compat` package.
- the `ToolbarV2` component has been renamed to `Toolbar`
- the `ToolbarSpacerV2` component has been renamed to `ToolbarSpacer`
- the `ToolbarSeparatorV2` component has been renamed to `ToolbarSeparator`
- updated UI5 Web Components to v2. All [breaking changes](https://sap.github.io/ui5-webcomponents/docs/migration-guides/to-version-2/) apply to this project as well.
- the `SuggestionGroupItem` component has been replaced by the `SuggestionItemGroup` component
- The deprecated `Loader` component has been moved to the
  `@ui5/webcomponents-react-compat` package. Please use the
  `BusyIndicator` instead, as it's now the only loading indicator that is
  supported by our UX guidelines. Please visit our [Migration
  Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs)
  for more details.
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
