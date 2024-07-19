# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.29.2...v2.0.0-rc.0) (2024-07-11)

### Bug Fixes

- **AnalyticalTable - `useRowDisableSelection`:** remove `title` from select-all cell ([#5955](https://github.com/SAP/ui5-webcomponents-react/issues/5955)) ([c731554](https://github.com/SAP/ui5-webcomponents-react/commit/c73155447259e709b1c4c4a86977778e888505ff)), closes [#5953](https://github.com/SAP/ui5-webcomponents-react/issues/5953)
- **AnalyticalTable:** don't wrap custom header content in `Text` component ([#6022](https://github.com/SAP/ui5-webcomponents-react/issues/6022)) ([455acc1](https://github.com/SAP/ui5-webcomponents-react/commit/455acc15a886227e084828d88a4934047e43be33))
- **AnalyticalTable:** fire row select & click events on `keyup` instead of `keydown` ([#6013](https://github.com/SAP/ui5-webcomponents-react/issues/6013)) ([f1386f8](https://github.com/SAP/ui5-webcomponents-react/commit/f1386f8698832f2629f6a438eed456d0e5de2bcb)), closes [#4388](https://github.com/SAP/ui5-webcomponents-react/issues/4388)
- **AnalyticalTable:** fix custom header alignment ([#6068](https://github.com/SAP/ui5-webcomponents-react/issues/6068)) ([c4a49e4](https://github.com/SAP/ui5-webcomponents-react/commit/c4a49e43486783297fbcdda2a2674e061cbcc574))
- **AnalyticalTable:** improve focus border alignment ([#5944](https://github.com/SAP/ui5-webcomponents-react/issues/5944)) ([18aeb52](https://github.com/SAP/ui5-webcomponents-react/commit/18aeb52a92f19b8c4d408968a4040f2fc5a9c994)), closes [#5898](https://github.com/SAP/ui5-webcomponents-react/issues/5898)
- apply correct scoping for internal ui5wc CSS vars ([#6057](https://github.com/SAP/ui5-webcomponents-react/issues/6057)) ([3822bee](https://github.com/SAP/ui5-webcomponents-react/commit/3822beed4d141f3430fc6ab567de9b85f538005f)), closes [#6051](https://github.com/SAP/ui5-webcomponents-react/issues/6051)
- **CommonProps - TypeScript:** remove `dangerouslySetInnerHTML` from types ([#6002](https://github.com/SAP/ui5-webcomponents-react/issues/6002)) ([f5f9101](https://github.com/SAP/ui5-webcomponents-react/commit/f5f9101cce39a0b66674f9b9b6fce35c9c333eb1))
- **deps:** update dependency @tanstack/react-virtual to v3.5.1 ([#5883](https://github.com/SAP/ui5-webcomponents-react/issues/5883)) ([2db3ca9](https://github.com/SAP/ui5-webcomponents-react/commit/2db3ca96e36c1e6d52ce7c6a50dc6038d17d3a16))
- **deps:** update dependency react-content-loader to v7.0.1 ([#5899](https://github.com/SAP/ui5-webcomponents-react/issues/5899)) ([5ed11e9](https://github.com/SAP/ui5-webcomponents-react/commit/5ed11e94b1fc19b51ee8437fb019ff9d4037037d))
- **deps:** update dependency react-content-loader to v7.0.2 ([#5909](https://github.com/SAP/ui5-webcomponents-react/issues/5909)) ([cb79434](https://github.com/SAP/ui5-webcomponents-react/commit/cb79434d3bbbb1de8cef023abf1c8fbfb2368ab0))
- **deps:** update react monorepo to v19.0.0-rc-fb9a90fa48-20240614 (patch) ([#5928](https://github.com/SAP/ui5-webcomponents-react/issues/5928)) ([863055a](https://github.com/SAP/ui5-webcomponents-react/commit/863055ae220a6647f54359b28d0d4d9b1da1bc24))
- **MessageBox - TypeScript:** adjust `onClose` type ([#5975](https://github.com/SAP/ui5-webcomponents-react/issues/5975)) ([a30867a](https://github.com/SAP/ui5-webcomponents-react/commit/a30867ae33df291db40631bf585e4db3228dfec4))
- **MessageViewItem:** enable details view if `titleText` is overflowing ([#6015](https://github.com/SAP/ui5-webcomponents-react/issues/6015)) ([dba28ce](https://github.com/SAP/ui5-webcomponents-react/commit/dba28ce1378c027238cbb1fcd96eb0f07bb51283)), closes [#5990](https://github.com/SAP/ui5-webcomponents-react/issues/5990)
- **MessageView:** use correct icon and color for default type ([#6016](https://github.com/SAP/ui5-webcomponents-react/issues/6016)) ([0018bba](https://github.com/SAP/ui5-webcomponents-react/commit/0018bbaf5f478ed66475a3571cf66f5ae6b93138))
- **NumericSideIndicator:** fix alignment ([#6064](https://github.com/SAP/ui5-webcomponents-react/issues/6064)) ([7ecd301](https://github.com/SAP/ui5-webcomponents-react/commit/7ecd30123eac6629bf7cbb68098c6241c36e2b1f))
- **ObjectStatus:** remove `HTMLDivElement` from `onClick` type ([#6011](https://github.com/SAP/ui5-webcomponents-react/issues/6011)) ([671cfaa](https://github.com/SAP/ui5-webcomponents-react/commit/671cfaade247894784863a27c98978a60a8646fd))
- use new JSX transform in preparation for React 19 ([#5837](https://github.com/SAP/ui5-webcomponents-react/issues/5837)) ([7dcad64](https://github.com/SAP/ui5-webcomponents-react/commit/7dcad64b3fb627f245a0a9e1a46e8ac01399ae09))

### chore

- remove `jestSetup` ([#5906](https://github.com/SAP/ui5-webcomponents-react/issues/5906)) ([2da6d60](https://github.com/SAP/ui5-webcomponents-react/commit/2da6d607695d21f64c2a893612845bde8b3f7ff7))
- remove `react-jss` ([#5907](https://github.com/SAP/ui5-webcomponents-react/issues/5907)) ([5342836](https://github.com/SAP/ui5-webcomponents-react/commit/53428361107f0fd3f3bb6781ebc07092a16a0fe3))
- remove deprecated `AnalyticalCard` component ([#5887](https://github.com/SAP/ui5-webcomponents-react/issues/5887)) ([1d8b257](https://github.com/SAP/ui5-webcomponents-react/commit/1d8b2573bfc791d560f9f495336eb9fa4125d900))

### Code Refactoring

- **ActionSheet:** api alignment ([#5956](https://github.com/SAP/ui5-webcomponents-react/issues/5956)) ([5b2ac63](https://github.com/SAP/ui5-webcomponents-react/commit/5b2ac63943461db5e7bbb12040b29c98344402c5))
- **AnalyticalTable:** remove deprecated props & enums ([#6021](https://github.com/SAP/ui5-webcomponents-react/issues/6021)) ([ca13875](https://github.com/SAP/ui5-webcomponents-react/commit/ca13875a46a755fe8d1d4c325b33295561f7d6ad))
- **AnalyticalTable:** remove unnecessary `portalContainer` prop ([#6039](https://github.com/SAP/ui5-webcomponents-react/issues/6039)) ([7e19fbb](https://github.com/SAP/ui5-webcomponents-react/commit/7e19fbbce37aac55fdc0e73c90958caf1a92eb5f))
- **enums:** harmonize enum names ([#5970](https://github.com/SAP/ui5-webcomponents-react/issues/5970)) ([98b9bb7](https://github.com/SAP/ui5-webcomponents-react/commit/98b9bb7351e233ec958553a7f8584015434ea457))
- **FilterGroupItem:** api alignment ([#6012](https://github.com/SAP/ui5-webcomponents-react/issues/6012)) ([0e6a326](https://github.com/SAP/ui5-webcomponents-react/commit/0e6a326fd7b338408eb0a801fce495988d264d29))
- harmonize prop/enum names ([#6040](https://github.com/SAP/ui5-webcomponents-react/issues/6040)) ([4b4815b](https://github.com/SAP/ui5-webcomponents-react/commit/4b4815b0066cce7e6522dc5fd05b9c14a24e7555))
- make titleText required for object page sections ([#6014](https://github.com/SAP/ui5-webcomponents-react/issues/6014)) ([10e50a2](https://github.com/SAP/ui5-webcomponents-react/commit/10e50a2f73602d4a6985ed4a7ada29c3450b2d22))
- **MessageBox:** refactor `onClose` event ([#5989](https://github.com/SAP/ui5-webcomponents-react/issues/5989)) ([ef490f4](https://github.com/SAP/ui5-webcomponents-react/commit/ef490f487b51b1ca8c0d499ddaa0d33bdf518ca2))
- **Modals:** replace context with use-sync-external-store ([#6042](https://github.com/SAP/ui5-webcomponents-react/issues/6042)) ([e0818c4](https://github.com/SAP/ui5-webcomponents-react/commit/e0818c4a3ba50d989c78b9f228fbc5b973926066))
- **ObjectPage:** api alignment ([#6047](https://github.com/SAP/ui5-webcomponents-react/issues/6047)) ([703084b](https://github.com/SAP/ui5-webcomponents-react/commit/703084bbb1994516da06066a7f292ffe396955d4))
- remove all `spacing` variables ([#6009](https://github.com/SAP/ui5-webcomponents-react/issues/6009)) ([c2c3730](https://github.com/SAP/ui5-webcomponents-react/commit/c2c3730e7a58cef531a8bfe444ed38a445fad671))
- replace `Toolbar` with UI5 Web Component ([#6061](https://github.com/SAP/ui5-webcomponents-react/issues/6061)) ([bf60767](https://github.com/SAP/ui5-webcomponents-react/commit/bf6076772d691a6a5d98678d38ac705bed4bfb2a))

### Features

- **AnalyticalTable:** introduce `loadingDelay` prop ([#6025](https://github.com/SAP/ui5-webcomponents-react/issues/6025)) ([6d80fd8](https://github.com/SAP/ui5-webcomponents-react/commit/6d80fd8c89838bea6c70f9b6138e8a294295b8b5))
- **charts:** introduce `loadingDelay` prop ([#6027](https://github.com/SAP/ui5-webcomponents-react/issues/6027)) ([71fcb40](https://github.com/SAP/ui5-webcomponents-react/commit/71fcb408bf2bafd8af4d6b4c7c7d47f4c518e520))
- **cli:** create codemod for UI5 Web Components React v2 migration ([#5908](https://github.com/SAP/ui5-webcomponents-react/issues/5908)) ([9f65c98](https://github.com/SAP/ui5-webcomponents-react/commit/9f65c987c39093b240e1230d783c66376d29aad6))
- create compat package ([#5894](https://github.com/SAP/ui5-webcomponents-react/issues/5894)) ([f4516cc](https://github.com/SAP/ui5-webcomponents-react/commit/f4516cce3b3f246929f086154f6c185c25dd357e))
- **DynamicPage & ObjectPage:** use ui5wc `DynamicPage` & rename `ObjectPage` components ([#5939](https://github.com/SAP/ui5-webcomponents-react/issues/5939)) ([cb684cd](https://github.com/SAP/ui5-webcomponents-react/commit/cb684cdfbf70d5010427b6806f3dc4ba0c47266a))
- **Form:** replace with UI5 Web Component ([#5925](https://github.com/SAP/ui5-webcomponents-react/issues/5925)) ([1e246ee](https://github.com/SAP/ui5-webcomponents-react/commit/1e246ee5da541f48ffcb08833babb483c41e27d4))
- move `Loader` to `compat` package & replace with `BusyIndicator` ([#6020](https://github.com/SAP/ui5-webcomponents-react/issues/6020)) ([80d8c0b](https://github.com/SAP/ui5-webcomponents-react/commit/80d8c0b1f4ed5b69e6f1aa835f5b20d0cf264622))
- **ObjectPage:** introduce `preserveHeaderStateOnClick` prop ([#6049](https://github.com/SAP/ui5-webcomponents-react/issues/6049)) ([c3c6f06](https://github.com/SAP/ui5-webcomponents-react/commit/c3c6f06dbfcbebf51abe0238e2eec7fe9dcb1d63))
- **RadialChart:** introduce `loading` & `loadingDelay` props ([#6028](https://github.com/SAP/ui5-webcomponents-react/issues/6028)) ([3891437](https://github.com/SAP/ui5-webcomponents-react/commit/3891437548c6e51e84c4ebdfe0180e1f4e2cd8ac))
- support objects and references as Web Component props ([#5957](https://github.com/SAP/ui5-webcomponents-react/issues/5957)) ([f41d32b](https://github.com/SAP/ui5-webcomponents-react/commit/f41d32b47f4ecbd818afeedb0b72a5b624e4514c))
- support React 19 ([#5860](https://github.com/SAP/ui5-webcomponents-react/issues/5860)) ([c78ab7f](https://github.com/SAP/ui5-webcomponents-react/commit/c78ab7f5c9998bbcf65b107151d206eccb3c6f99))
- **Text:** replace with UI5 Web Component ([#5988](https://github.com/SAP/ui5-webcomponents-react/issues/5988)) ([19ed2ec](https://github.com/SAP/ui5-webcomponents-react/commit/19ed2eceba7a9539fd2609e3f50226b4182b5cd8))
- **ThemeProvider:** apply Fiori scrollbar styling to all scroll containers ([#5978](https://github.com/SAP/ui5-webcomponents-react/issues/5978)) ([9a611fd](https://github.com/SAP/ui5-webcomponents-react/commit/9a611fde3b3ce7eade5c90bbc61a346a189d2417))
- update to @ui5/webcomonents 2.0.0-rc.6 ([#5940](https://github.com/SAP/ui5-webcomponents-react/issues/5940)) ([60907b4](https://github.com/SAP/ui5-webcomponents-react/commit/60907b4a43902a899b7f48e9dc6609d0d5b9a731))
- update to UI5 Web Components 2.0 RC ([#5861](https://github.com/SAP/ui5-webcomponents-react/issues/5861)) ([7a27b7f](https://github.com/SAP/ui5-webcomponents-react/commit/7a27b7f0a3d58748e704ceaf5c4b5568c7e67931))
- update UI5 Web Components to 2.0.0 ([#6023](https://github.com/SAP/ui5-webcomponents-react/issues/6023)) ([49efb9b](https://github.com/SAP/ui5-webcomponents-react/commit/49efb9b71aa41d7efdcc8f02b592f91cf365d2b6))

### BREAKING CHANGES

- the `Toolbar` component and its related components have been moved to the `@ui5/webcomponents-react-compat` package.
- the `ToolbarV2` component has been renamed to `Toolbar`
- the `ToolbarSpacerV2` component has been renamed to `ToolbarSpacer`
- the `ToolbarSeparatorV2` component has been renamed to `ToolbarSeparator`
- **ObjectPage:** the props `showHideHeaderButton` and `showTitleInHeaderContent` have been removed.
- **ObjectPage:** the prop `alwaysShowContentHeader` has been renamed to `headerPinned`
- **ObjectPage:** the prop `headerContentPinnable` has been renamed to `hidePinButton` and its logic has been inverted. The pin button is now shown by default.
- **ObjectPage:** the prop `showSubHeaderRight` has been removed as it's not defined by design anymore.
- **Modals:** **ThemeProvider**: the prop `withoutModalsProvider` has been removed. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs).
- **Modals:** the hooks `useShowDialog`, `useShowPopover`, `useShowResponsivePopover`, `useShowMenu`, `useShowMessageBox` and `useShowToast` have been removed. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs#modals).
- **ActionSheet:** `a11yConfig` has been renamed to `accessibilityAttributes`.
- **AnalyticalTable:** The properties and values for the `AnalyticalTableSelectionMode` enum has been changed. `SingleSelect` is now `Single` and `MultiSelect` is now `Multiple`.
- **AnalyticalTable:** `a11yConfig` has been renamed to `accessibilityAttributes`.
- **ObjectPage:** `a11yConfig` has been renamed to `accessibilityAttributes`.
- **ObjectStatus:** `active` has been renamed to `interactive`.
- **AnalyticalTable:** `portalContainer` has been removed as it's no longer needed due to the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).
- updated UI5 Web Components to v2. All [breaking changes](https://sap.github.io/ui5-webcomponents/docs/migration-guides/to-version-2/) apply to this project as well.
- the `SuggestionGroupItem` component has been replaced by the `SuggestionItemGroup` component
- **AnalyticalTable:** The `TableScaleWidthMode` enum has been removed, please use `AnalyticalTableScaleWidthMode` instead.
- **AnalyticalTable:** The `TableSelectionBehavior` enum has been removed, please use `AnalyticalTableSelectionBehavior` instead.
- **AnalyticalTable:** The `TableSelectionMode ` enum has been removed, please use `AnalyticalTableSelectionMode` instead.
- **AnalyticalTable:** The `TableVisibleRowCountMode` enum has been removed, please use `AnalyticalTableVisibleRowCountMode ` instead.
- **AnalyticalTable:** The `alwaysShowSubComponent ` prop has been removed, please use `subComponentsBehavior` instead.
- **AnalyticalTable:** The default value (`true`) of the `sortable` prop has been removed, it is now required to explicitly set this prop, if the table should be sortable.
- **AnalyticalTable:** The `canReorder` [column property](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/data-display-analyticaltable--docs#column-properties) has been removed, please use `disableDragAndDrop` instead.
- The deprecated `Loader` component has been moved to the `@ui5/webcomponents-react-compat` package. Please use the `BusyIndicator` instead, as it's now the only loading indicator that is supported by our UX guidelines. Please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- **FilterGroupItem:** For a better aligned API, the `visible` and `visibleInFilterBar` (default: `true`) props have been replaced with `hidden` and `hiddenInFilterBar` (no default value).
- **ObjectPageSection**: the prop `titleText` is now required.
- **ObjectPageSection**: the default value `true` for the prop `titleTextUppercase` has been removed.
- **ObjectPageSubSection**: the prop `titleText` is now required.
- **AnalyticalTable:** When selecting or pressing a row by using the Space key, `onRowClick` and `onRowSelect` are now fired on `keyup` instead of`keydown`.
- **ObjectStatus:** **TypeScript**: the `HTMLDivElement` type has been removed from the `onClick` handler.
- All spacing variables have been removed. You can use common CSS classes as a substitute for most variables. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs).
- **Text:** the `Text` component has been replaced with the `ui5-text` web component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- **Text:** **ExpandableText**: the inherited props `hyphenated` and `emptyIndicator` from the `Text` have been removed.
- **Text:** **ExpandableText**: the `portalContainer` prop has been removed as it's not needed anymore
- **CommonProps - TypeScript:** `dangerouslySetInnerHTML` type has been removed
- **ThemeProvider:** the `GlobalStyleClasses` enum has been removed
- **MessageBox:** `onClose` is now a plain callback and not a `CustomEvent` event anymore. It now receives two params: `action` & `escPressed`.
- **enums:** the `MessageBoxActions` enum has been renamed to `MessageBoxAction`
- **enums:** the `MessageBoxTypes` enum has been renamed to `MessageBoxType`
- **enums:** the `Themes` enum has been renamed to `Theme` and the deprecated "Belize" (`sap_belize`) theme family has been removed
- **ActionSheet:** the `portalContainer` prop has been removed as it's not needed anymore
- **ActionSheet:** the `showCancelButton` has been renamed to `hideCancelButton` and the logic has been inverted.
- the `StandardListItem` has been replaced with the `ListItemStandard` component
- the `CustomListItem` has been replaced with the `ListItemCustom` component
- the `MultiComboBoxGroupItem` has been replaced with the `MultiComboBoxItemGroup` component
- the `TableGroupRow` component has been deleted
- the `TableColumn` component has been replaced with the `TableHeaderCell` component
- **VariantManagement**: the `portalContainer` prop has been removed as it is no longer needed.
- **DynamicPage & ObjectPage:** The `DynamicPage` component has been replaced with the `ui5-dynamic-page` UI5 Web Component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- **DynamicPage & ObjectPage:** The `DynamicPageHeader` component has been replaced with the `ui5-dynamic-page-header` UI5 Web Component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- **DynamicPage & ObjectPage:** The `DynamicPageTitle` component has been replaced with the `ui5-dynamic-page-title` UI5 Web Component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- **DynamicPage & ObjectPage:** **ObjectPage:** `headerTitle` now only accepts the `ObjectPageTitle` component instead of the `DynamicPageTitle`.
- **DynamicPage & ObjectPage:** **ObjectPage:** `headerContent` now only accepts the `ObjectPageHeader` component instead of the `DynamicPageTitle`.
- **DynamicPage & ObjectPage:** **ObjectPage:** `a11yConfig.dynamicPageAnchorBar` has been renamed to `a11yConfig.objectPageAnchorBar`
- **Form:** The `Form` component has been replaced with the `ui5-form` UI5 Web Component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- UI5 Web Components for React is no longer relying on `react-jss` internally, hence the dependency is now removed and the `react-jss` ThemeProvider is no longer rendered as part of our `ThemeProvider`. If you are relying on `react-jss` in your application, please make sure to render your own `react-jss` ThemeProvider.
- The `useResponsiveContentPadding` has been removed. You can achieve the same look and feel by using the [responsive content padding from Common CSS](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-common-css--docs#content-paddings).
- We stopped recommending `jest` as a testing framework over a year ago, thus the `jestSetup` file is removed. We recommend using [cypress](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/testing-with-cypress-setup--docs) instead.
- The `AnalyticalCard` component has been removed. Please use the `Card` component instead.
- updated UI5 Web Components to v2. All [breaking changes](https://sap.github.io/ui5-webcomponents/nightly/docs/Migrating%20to%20version%202.0%20guide/) apply to this project as well.
- `ActionSheet`: prop `placementType` has been renamed to `placement`, `onAfterClose` to `onClose` and `onAfterOpen` to `onOpen`
- the `Badge` component has been renamed to `Tag`
- the `ComboBoxGroupItem` component has been renamed to `ComboBoxItemGroup`
- the `GroupHeaderListItem` component has been renamed to `ListItemGroup`
- the `NotificationAction` component has been removed. You can use the `Menu` component instead.
- the `SelectMenu` and `SelectMenuOption` components have been removed. The `Select` and `Option` now allow custom content.
- `SelectDialog`: renamed prop `mode` to `selectionMode` to be aligned with new List API, `onAfterClose` to `onClose` and `onAfterOpen` to `onOpen`
- **ObjectPage (TypeScript):** replace `headerTitle` type with `ReactElement<DynamicPageTitlePropTypes>`
- **ObjectPage (TypeScript):** replace `headerContent` type with `ReactElement<DynamicPageHeaderPropTypes>`
- **ObjectPage (TypeScript):** replace `image` type with `string | ReactElement<AvatarPropTypes>`

# 1.x.x

The changelog for 1.x.x can be found [here](https://github.com/SAP/ui5-webcomponents-react/blob/v1.29.x/CHANGELOG.md).
