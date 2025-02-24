# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.7.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.7.1...v2.7.2) (2025-02-13)

**Note:** Version bump only for package @ui5/webcomponents-cypress-commands

## [2.7.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.7.0...v2.7.1) (2025-02-05)

**Note:** Version bump only for package @ui5/webcomponents-cypress-commands

# [2.7.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.6.0...v2.7.0) (2025-02-04)

### Features

- **cypress-commands:** support cypress v14 ([#6828](https://github.com/SAP/ui5-webcomponents-react/issues/6828)) ([cc7f950](https://github.com/SAP/ui5-webcomponents-react/commit/cc7f950beee4d74329bc077f773c941680cac0ea))
- update to UI5 Web Components 2.7.0 ([#6890](https://github.com/SAP/ui5-webcomponents-react/issues/6890)) ([1b85eb3](https://github.com/SAP/ui5-webcomponents-react/commit/1b85eb3522a9bfc6d0fb6ae1e6e5237f95df7b56))

# [2.6.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.5.0...v2.6.0) (2025-01-09)

### Features

- update to UI5 Web Components 2.6.2 ([#6792](https://github.com/SAP/ui5-webcomponents-react/issues/6792)) ([c147bf7](https://github.com/SAP/ui5-webcomponents-react/commit/c147bf7b4d30e606ffab67ed0cbece6c202a8e1c))

# [2.5.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.4.0...v2.5.0) (2024-12-09)

### Features

- update to UI5 Web Components 2.5.0 ([#6696](https://github.com/SAP/ui5-webcomponents-react/issues/6696)) ([19a29aa](https://github.com/SAP/ui5-webcomponents-react/commit/19a29aac347a42e5caa3bc85a540bbe5bc4b3cbd))

# [2.4.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.3.3...v2.4.0) (2024-11-05)

**Note:** Version bump only for package @ui5/webcomponents-cypress-commands

# [2.3.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.2.0...v2.3.0) (2024-10-17)

### Features

- **cypress-commands:** add `findToolbarButtonByText ` query ([#6463](https://github.com/SAP/ui5-webcomponents-react/issues/6463)) ([d16a334](https://github.com/SAP/ui5-webcomponents-react/commit/d16a33480c55e9bfae7eb968d3722b0af8b1d968))

# [2.2.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.1.1...v2.2.0) (2024-10-04)

**Note:** Version bump only for package @ui5/webcomponents-cypress-commands

# [2.0.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.3...v2.0.0) (2024-08-23)

**Note:** Version bump only for package @ui5/webcomponents-cypress-commands

# [2.0.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.0...v2.0.0-rc.1) (2024-07-19)

**Note:** Version bump only for package @ui5/webcomponents-cypress-commands

# [2.0.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.29.2...v2.0.0-rc.0) (2024-07-11)

### Bug Fixes

- use new JSX transform in preparation for React 19 ([#5837](https://github.com/SAP/ui5-webcomponents-react/issues/5837)) ([7dcad64](https://github.com/SAP/ui5-webcomponents-react/commit/7dcad64b3fb627f245a0a9e1a46e8ac01399ae09))

### Features

- update to @ui5/webcomonents 2.0.0-rc.6 ([#5940](https://github.com/SAP/ui5-webcomponents-react/issues/5940)) ([60907b4](https://github.com/SAP/ui5-webcomponents-react/commit/60907b4a43902a899b7f48e9dc6609d0d5b9a731))
- update to UI5 Web Components 2.0 RC ([#5861](https://github.com/SAP/ui5-webcomponents-react/issues/5861)) ([7a27b7f](https://github.com/SAP/ui5-webcomponents-react/commit/7a27b7f0a3d58748e704ceaf5c4b5568c7e67931))

### BREAKING CHANGES

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
- updated UI5 Web Components to v2. All [breaking changes](https://sap.github.io/ui5-webcomponents/nightly/docs/Migrating%20to%20version%202.0%20guide/) apply to this project as well.
- `ActionSheet`: prop `placementType` has been renamed to `placement`, `onAfterClose` to `onClose` and `onAfterOpen` to `onOpen`
- the `Badge` component has been renamed to `Tag`
- the `ComboBoxGroupItem` component has been renamed to `ComboBoxItemGroup`
- the `GroupHeaderListItem` component has been renamed to `ListItemGroup`
- the `NotificationAction` component has been removed. You can use the `Menu` component instead.
- the `SelectMenu` and `SelectMenuOption` components have been removed. The `Select` and `Option` now allow custom content.
- `SelectDialog`: renamed prop `mode` to `selectionMode` to be aligned with new List API, `onAfterClose` to `onClose` and `onAfterOpen` to `onOpen`

# 1.x.x

The changelog for 1.x.x can be found [here](https://github.com/SAP/ui5-webcomponents-react/blob/v1.29.x/packages/cypress-commands/CHANGELOG.md).
