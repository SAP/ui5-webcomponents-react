# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
