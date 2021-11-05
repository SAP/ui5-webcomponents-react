# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.19.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.10...v0.19.0) (2021-11-03)

**Note:** Version bump only for package @ui5/cra-template-webcomponents-react-seed





## [0.18.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.8...v0.18.9) (2021-09-21)


### Bug Fixes

* add `.js` file extension to all web components imports ([#2147](https://github.com/SAP/ui5-webcomponents-react/issues/2147)) ([2799eba](https://github.com/SAP/ui5-webcomponents-react/commit/2799eba322824f0995b48a31feadd4c43b889fed))





# [0.18.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.17.3...v0.18.0) (2021-08-09)


### Features

* update `@ui5/webcomponents` to 1.0.0-rc.15 ([#1873](https://github.com/SAP/ui5-webcomponents-react/issues/1873)) ([db2145f](https://github.com/SAP/ui5-webcomponents-react/commit/db2145f5057fecbd698634a78c60f42769d20f2d))


### BREAKING CHANGES

* updated `@ui5/webcomponents` to 1.0.0-rc.15. This update includes several breaking changes that are reflected in this library as well. Please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#migrating-from-017x-to-0180) for update instructions.
* **ActionSheet**: the ActionSheet can now be opened with `actionSheetRef.current.showAt(opener)` instead of `actionSheetRef.current.open(opener)`
* **Avatar**: `img` prop is replaced by `children` with a `<img>` component
* **Breadcrumbs**: the `Breadcrumbs` component has been replaced with the official UI5 Web Component. Please visit our migration guide for details.
* **Card**: props `headerInteractive`, `status`,  `subtitleText`, `titleText`, `action`, `avatar` and `onHeaderClick` have been removed. Please use the `CardHeader` component instead and pass it to the new `header` prop of the Card.
* **Carousel**: `selectedIndex`, `infiniteScrollOffset`, and  `onLoadMore` are removed, use the `onNavigate` event to load more items.
* **ComboBox**: The `filterValue` property has been removed. The `value` property should be used as now it represents the "live" value of the component.
* **Dialog**: Dialogs can now be opened with `dialogRef.current.show()` instead of `dialogRef.current.open()`
* **DurationPicker**: Component was made private by the UI5 Web Components, hence it's removed here as well.
* **MessageStrip**: rename `MessageStripType` enum to `MessageStripDesign`. The prop `type` has been renamed to `design` and now accepts `MessageStripDesign` values.
* **RadioButton**: the `onSelect` event has been renamed to `onChange`. Read the state of the Radio Button in the event handler with `event.target.checked`.
* **ResponsivePopover**: the responsive popover can now be opened with `popoverRef.current.showAt(opener)` instead of `popoverRef.current.open(opener)`
* **Popover**: the popover can now be opened with `popoverRef.current.showAt(opener)` instead of `popoverRef.current.openBy(opener)`
* **SegmentedButton**: The SegmentedButton no longer accepts `ToggleButton` as children but expects `SegmentedButtonItem`.
* **SuggestionItem**: prop `group` is not longer supported. Please use the `SuggestionItemGroup` component instead for creating groups.
* **Wizard**: the `onSelectionChange` event has been renamed to `onStepChange`. In addition, the event param `selectedStep` has been renamed to `step` and `previouslySelectedStep` has been renamed to `previousStep`.
* **deleted enums**:  `AvatarFitType` (Avatar component doesn't support the fitType prop anymore), `TabContainerHeaderMode`, `TabDesignMode`,  `SearchFunctions` (all three unused), `TabContainerTabsPlacement` (TabContainer component doesn't accept the placement prop anymore)
* **renamed enums**: `AvatarBackgroundColor` to `AvatarColorScheme`, `PlacementType` to `PopoverPlacementType`, `PanelAccessibleRoles` to `PanelAccessibleRole`, `ListItemTypes` to `ListItemType`
* **PageBackgroundDesign**: `PageBackgroundDesign.Standard` has been removed. Please use `PageBackgroundDesign.Solid` instead.





## [0.17.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.17.2...v0.17.3) (2021-08-02)


### Bug Fixes

* improve setupMatchMedia for cra-templates and docs ([#1909](https://github.com/SAP/ui5-webcomponents-react/issues/1909)) ([d8ef7a1](https://github.com/SAP/ui5-webcomponents-react/commit/d8ef7a130d09229f2c5f9b4d3fa3ee67f0e6e256))





## [0.17.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.17.0...v0.17.1) (2021-07-16)


### Bug Fixes

* **cra-templates:** always use latest version of ui5-webcomponents-react ([#1829](https://github.com/SAP/ui5-webcomponents-react/issues/1829)) ([623dc51](https://github.com/SAP/ui5-webcomponents-react/commit/623dc51117551f28d1d4418722a27883effcea47))





# [0.17.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.6...v0.17.0) (2021-07-15)

**Note:** Version bump only for package @ui5/cra-template-webcomponents-react-seed





## [0.16.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.1...v0.16.2) (2021-06-02)


### Bug Fixes

* **cra-template-seed:** fix husky pre push hook ([#1635](https://github.com/SAP/ui5-webcomponents-react/issues/1635)) ([b8af6ea](https://github.com/SAP/ui5-webcomponents-react/commit/b8af6eabb21c131966118f258b66a74b20f013fd))
* **cra-templates:** use latest UI5 Web Components for React version ([#1666](https://github.com/SAP/ui5-webcomponents-react/issues/1666)) ([d0dc44e](https://github.com/SAP/ui5-webcomponents-react/commit/d0dc44e52cf4bb394e2d95992f8d86503b922d12))





# [0.16.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.4...v0.16.0) (2021-05-11)

**Note:** Version bump only for package @ui5/cra-template-webcomponents-react-seed





## [0.15.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.3...v0.15.4) (2021-04-28)

**Note:** Version bump only for package @ui5/cra-template-webcomponents-react-seed





## [0.15.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.1...v0.15.2) (2021-04-01)


### Features

* update @ui5/webcomponents to 1.0.0-rc.14 ([#1478](https://github.com/SAP/ui5-webcomponents-react/issues/1478)) ([bea31ee](https://github.com/SAP/ui5-webcomponents-react/commit/bea31ee9d2f200a80738410dabb9eae6f85b35bd))





# [0.15.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.5...v0.15.0) (2021-03-30)


### Features

* update ui5 web components to 1.0.0-rc.13 ([#1462](https://github.com/SAP/ui5-webcomponents-react/issues/1462)) ([9a0b132](https://github.com/SAP/ui5-webcomponents-react/commit/9a0b132f97f734c69e64fdecb2778832dd7479d8))


### BREAKING CHANGES

* **Device**: `isEdge`, `isChrome`, `isFF`, `isMobile`, `isAndroid`, `getOS`, `getSystem`, `getBrowser` have been removed without replacement
* **Device**: `supportTouch` has been renamed to `supportsTouch`
* **Input**: The `onSubmit` event is now removed. The `onSubmit` functionality must be added with a custom code - listen for the standard `onKeyDown` event and check if `ENTER` is pressed to submit a form, containing the input component.
* **List**: The `infiniteScroll` prop has been removed, use `growing={ListGrowingMode.Scroll}` instead





## [0.14.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.2...v0.14.3) (2021-03-03)


### Bug Fixes

* **cra-template-seed:** add InputElementsFormSupport import ([#1382](https://github.com/SAP/ui5-webcomponents-react/issues/1382)) ([a7b82c4](https://github.com/SAP/ui5-webcomponents-react/commit/a7b82c4ca7d04fe0b557dac9a7bfa4f41bcb7f75))





# [0.14.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.0-rc.0...v0.14.0) (2021-02-18)


### Bug Fixes

* fix tests in both create-react-app templates ([c7df584](https://github.com/SAP/ui5-webcomponents-react/commit/c7df58477b629e328c12097b4c2f535569be5363))





# [0.14.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.9...v0.14.0-rc.0) (2021-02-18)


### chore

* deprecate Internet Explorer 11 ([#1252](https://github.com/SAP/ui5-webcomponents-react/issues/1252)) ([0e02486](https://github.com/SAP/ui5-webcomponents-react/commit/0e024861f058f616985ad80f4e508a1eb6030799))


### Code Refactoring

* **cra-template-seed:** simplify coding and development setup, update dependencies ([#1275](https://github.com/SAP/ui5-webcomponents-react/issues/1275)) ([18dc286](https://github.com/SAP/ui5-webcomponents-react/commit/18dc28621d05e772212581711df7d95b22b10a66))


### Features

* update wrapper components to @ui5/web components 1.0.0-rc.12 ([#1298](https://github.com/SAP/ui5-webcomponents-react/issues/1298)) ([c385a8d](https://github.com/SAP/ui5-webcomponents-react/commit/c385a8dd1b68384bfe1e24a084a325ff937bd9a0))


### BREAKING CHANGES

* All UI5 Web Components Wrappers have been updated to `@ui5/webcomponents@1.0.0-rc.12`, please check the [release notes](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.12) as well.
* **Page**: Replaced custom component with `ui5-page` web component. Please check our [migration guide](https://sap.github.io/ui5-webcomponents-react/master/?path=/docs/migration-guide--page#replaced-component-page) for more details.
* **Table**: prop `hasMore` has been removed, use `growing` instead
* **Table**: prop `loadMoreText` has been renamed to `moreText `
* **Table**: prop `loadMoreSubtext` has been renamed to `moreSubtext`
* **Calendar**: prop `selectedDates` has been removed, please set selected dates via the `CalendarDate` component as child of the `Calendar`
* **Calendar**: prop `selection` has been renamed to `selectionMode`
* **Calendar**: prop `timestamp ` has been removed
* **Slider**: unused prop `children` has been removed
* Internet Explorer 11 is now deprecated
* **cra-template-seed:** this template is not longer providing out-of-the-box support for IE11 and Edge (legacy)





## [0.13.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.2...v0.13.3) (2021-01-19)


### Bug Fixes

* **seed:** wrap application with ThemeProvider ([#1185](https://github.com/SAP/ui5-webcomponents-react/issues/1185)) ([842ff20](https://github.com/SAP/ui5-webcomponents-react/commit/842ff200772121e3e134a9582ea2f7f946ef7ab4))





# [0.13.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.4...v0.13.0) (2021-01-07)


### Features

* update @ui5/webcomponents to 1.0.0-rc.11 ([#1108](https://github.com/SAP/ui5-webcomponents-react/issues/1108)) ([905dbca](https://github.com/SAP/ui5-webcomponents-react/commit/905dbca96911c1eefdcab212790c2961eda70d5f))


### BREAKING CHANGES

* `NotificationOverflowAction` got renamed to `NotificationAction`
* **BarDesign**: removed BarDesign `Auto` 
* **Bar**: prop `contentLeft` is now `startContent`
* **Bar**: prop `contentMiddle` is now `middleContent`
* **Bar**: prop `contentRight` is now `endContent`





## [0.12.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.0...v0.12.1) (2020-11-24)


### Features

* **cra-template-seed:** add route based code splitting and lazy loading of edit component ([#961](https://github.com/SAP/ui5-webcomponents-react/issues/961)) ([fffed60](https://github.com/SAP/ui5-webcomponents-react/commit/fffed600d11ca4ec4f595675ad6643c6badb94ed))





# [0.12.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.4...v0.12.0) (2020-11-16)


### Features

* update @ui5/webcomponents to 1.0.0-rc.10 ([#946](https://github.com/SAP/ui5-webcomponents-react/issues/946)) ([801e64a](https://github.com/SAP/ui5-webcomponents-react/commit/801e64a9979e7f5ba0c7a285485c8e8d753d416d))


### BREAKING CHANGES

* Icon import paths changed from e.g. `@ui5/webcomponents/dist/icons/add.js` to `@ui5/webcomponents-icons/dist/icons/add.js`. (`icon` directory got removed)





## [0.11.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.3...v0.11.4) (2020-11-16)


### Features

* **cra-template-seed:** improve developer experience for data loading ([#938](https://github.com/SAP/ui5-webcomponents-react/issues/938)) ([4b09e9b](https://github.com/SAP/ui5-webcomponents-react/commit/4b09e9b55b45062f07dfaf4757a57cb3dcc5f506))





## [0.11.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.2...v0.11.3) (2020-11-04)


### Features

* **cra-template-seed:** add new cra template @ui5/webcomponents-react-seed ([#790](https://github.com/SAP/ui5-webcomponents-react/issues/790)) ([69713ca](https://github.com/SAP/ui5-webcomponents-react/commit/69713ca45fdcd7fccb87fff9d04f3a4054de48dc))
