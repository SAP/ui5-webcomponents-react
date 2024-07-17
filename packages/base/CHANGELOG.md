# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.29.2...v2.0.0-rc.0) (2024-07-11)

### Bug Fixes

- use new JSX transform in preparation for React 19 ([#5837](https://github.com/SAP/ui5-webcomponents-react/issues/5837)) ([7dcad64](https://github.com/SAP/ui5-webcomponents-react/commit/7dcad64b3fb627f245a0a9e1a46e8ac01399ae09))

### chore

- remove `react-jss` ([#5907](https://github.com/SAP/ui5-webcomponents-react/issues/5907)) ([5342836](https://github.com/SAP/ui5-webcomponents-react/commit/53428361107f0fd3f3bb6781ebc07092a16a0fe3))

### Code Refactoring

- remove all `spacing` variables ([#6009](https://github.com/SAP/ui5-webcomponents-react/issues/6009)) ([c2c3730](https://github.com/SAP/ui5-webcomponents-react/commit/c2c3730e7a58cef531a8bfe444ed38a445fad671))

### Features

- support React 19 ([#5860](https://github.com/SAP/ui5-webcomponents-react/issues/5860)) ([c78ab7f](https://github.com/SAP/ui5-webcomponents-react/commit/c78ab7f5c9998bbcf65b107151d206eccb3c6f99))
- update to @ui5/webcomonents 2.0.0-rc.6 ([#5940](https://github.com/SAP/ui5-webcomponents-react/issues/5940)) ([60907b4](https://github.com/SAP/ui5-webcomponents-react/commit/60907b4a43902a899b7f48e9dc6609d0d5b9a731))
- update to UI5 Web Components 2.0 RC ([#5861](https://github.com/SAP/ui5-webcomponents-react/issues/5861)) ([7a27b7f](https://github.com/SAP/ui5-webcomponents-react/commit/7a27b7f0a3d58748e704ceaf5c4b5568c7e67931))
- update UI5 Web Components to 2.0.0 ([#6023](https://github.com/SAP/ui5-webcomponents-react/issues/6023)) ([49efb9b](https://github.com/SAP/ui5-webcomponents-react/commit/49efb9b71aa41d7efdcc8f02b592f91cf365d2b6))

### BREAKING CHANGES

- updated UI5 Web Components to v2. All [breaking changes](https://sap.github.io/ui5-webcomponents/docs/migration-guides/to-version-2/) apply to this project as well.
- the `SuggestionGroupItem` component has been replaced by the `SuggestionItemGroup` component
- All spacing variables have been removed. You can use common CSS classes as a substitute for most variables. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs).
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
- UI5 Web Components for React is no longer relying on `react-jss` internally, hence the dependency is now removed and the `react-jss` ThemeProvider is no longer rendered as part of our `ThemeProvider`. If you are relying on `react-jss` in your application, please make sure to render your own `react-jss` ThemeProvider.
- The `useResponsiveContentPadding` has been removed. You can achieve the same look and feel by using the [responsive content padding from Common CSS](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-common-css--docs#content-paddings).
- updated UI5 Web Components to v2. All [breaking changes](https://sap.github.io/ui5-webcomponents/nightly/docs/Migrating%20to%20version%202.0%20guide/) apply to this project as well.
- `ActionSheet`: prop `placementType` has been renamed to `placement`, `onAfterClose` to `onClose` and `onAfterOpen` to `onOpen`
- the `Badge` component has been renamed to `Tag`
- the `ComboBoxGroupItem` component has been renamed to `ComboBoxItemGroup`
- the `GroupHeaderListItem` component has been renamed to `ListItemGroup`
- the `NotificationAction` component has been removed. You can use the `Menu` component instead.
- the `SelectMenu` and `SelectMenuOption` components have been removed. The `Select` and `Option` now allow custom content.
- `SelectDialog`: renamed prop `mode` to `selectionMode` to be aligned with new List API, `onAfterClose` to `onClose` and `onAfterOpen` to `onOpen`
- **ObjectPage (TypeScript):** replace `headerTitle` type
  with `ReactElement<DynamicPageTitlePropTypes>`
- **ObjectPage (TypeScript):** replace `headerContent`
  type with `ReactElement<DynamicPageHeaderPropTypes>`
- **ObjectPage (TypeScript):** replace `image` type with
  `string | ReactElement<AvatarPropTypes>`

# 1.x.x

The changelog for 1.x.x can be found [here](https://github.com/SAP/ui5-webcomponents-react/blob/v1.29.x/packages/base/CHANGELOG.md).
