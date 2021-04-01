# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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





## [0.14.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.1...v0.14.2) (2021-02-24)


### Bug Fixes

* **cra-template:** add asset imports ([#1322](https://github.com/SAP/ui5-webcomponents-react/issues/1322)) ([0dc453f](https://github.com/SAP/ui5-webcomponents-react/commit/0dc453f12d6df0f2c39f77bffea1838f69cfb59c))





# [0.14.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.0-rc.0...v0.14.0) (2021-02-18)


### Bug Fixes

* fix tests in both create-react-app templates ([c7df584](https://github.com/SAP/ui5-webcomponents-react/commit/c7df58477b629e328c12097b4c2f535569be5363))





# [0.14.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.9...v0.14.0-rc.0) (2021-02-18)


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





# [0.13.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.4...v0.13.0) (2021-01-07)


### Features

* update @ui5/webcomponents to 1.0.0-rc.11 ([#1108](https://github.com/SAP/ui5-webcomponents-react/issues/1108)) ([905dbca](https://github.com/SAP/ui5-webcomponents-react/commit/905dbca96911c1eefdcab212790c2961eda70d5f))


### BREAKING CHANGES

* `NotificationOverflowAction` got renamed to `NotificationAction`
* **BarDesign**: removed BarDesign `Auto` 
* **Bar**: prop `contentLeft` is now `startContent`
* **Bar**: prop `contentMiddle` is now `middleContent`
* **Bar**: prop `contentRight` is now `endContent`





# [0.12.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.4...v0.12.0) (2020-11-16)


### Features

* update @ui5/webcomponents to 1.0.0-rc.10 ([#946](https://github.com/SAP/ui5-webcomponents-react/issues/946)) ([801e64a](https://github.com/SAP/ui5-webcomponents-react/commit/801e64a9979e7f5ba0c7a285485c8e8d753d416d))


### BREAKING CHANGES

* Icon import paths changed from e.g. `@ui5/webcomponents/dist/icons/add.js` to `@ui5/webcomponents-icons/dist/icons/add.js`. (`icon` directory got removed)





# [0.11.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.0-rc.1...v0.11.0) (2020-10-15)

**Note:** Version bump only for package @ui5/cra-template-webcomponents-react





# [0.11.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.10...v0.11.0-rc.0) (2020-10-08)


### Features

* upgrade ui5-webcomponents to 1.0.0-rc.9 ([#705](https://github.com/SAP/ui5-webcomponents-react/issues/705)) ([fb7d5c6](https://github.com/SAP/ui5-webcomponents-react/commit/fb7d5c62d10a6afa161cbd55c75850a068ec3383)), closes [#674](https://github.com/SAP/ui5-webcomponents-react/issues/674)


### BREAKING CHANGES

* **Token**: the Token text is now defined via the `text` prop, `children` has no effect anymore.
* **Token**: `onDelete` is removed as the Token shouldn’t be used as a standalone component.





# [0.10.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.11...v0.10.0) (2020-07-30)


### Features

* update to [ui5-webcomponents 1.0.0-rc.8](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.8) ([#623](https://github.com/SAP/ui5-webcomponents-react/issues/623)) ([45bbc8c](https://github.com/SAP/ui5-webcomponents-react/commit/45bbc8cb8d9c43774ae44ff15e4026c67be434c3))


### BREAKING CHANGES

* Deleted `Notification` component, replaced by `NotificationListItem`
* Deleted `NotificationGroup` component, replaced by `NotificationGroupListItem`
* **ProgressIndicator** replaced by UI5 Web Component with new API
* **ShellBar**: `logo` is now accepting an `img` tag or the `Avatar` component. Passing a `string` with the URL to the image is not longer supported.
* **TabContainer** will no longer automatically select the first tab, if no tab is selected. If you relied on this behaviour, you should now explicitly set the selected property on the first tab.





## [0.9.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.3...v0.9.4) (2020-05-08)


### Bug Fixes

* **cra-template:** fix test to be successful ([#497](https://github.com/SAP/ui5-webcomponents-react/issues/497)) ([f5932fa](https://github.com/SAP/ui5-webcomponents-react/commit/f5932fa0e2aa9cf236b718cf18a6bee49cf189af))





# [0.9.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.0.0...v0.9.0) (2020-04-30)

**Note:** Version bump only for package @ui5/cra-template-webcomponents-react





# [1.0.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.18...v1.0.0) (2020-04-30)


### Features

* update to @ui5/webcomponents 1.0.0-rc.7 ([#468](https://github.com/SAP/ui5-webcomponents-react/issues/468)) ([3b14676](https://github.com/SAP/ui5-webcomponents-react/commit/3b14676100659f602e08e571c0a63b400b274c82))


### BREAKING CHANGES

* *Carousel*: rename prop `cycling` to `cyclic`
* *Carousel*: replace prop `itemsPerPage` with `itemsPerPageL`, `itemsPerPageM`, `itemsPerPageS`
* *ThemeProvider*: remove `theme` prop as the UI5 Web Components are now provding all CSS Variables and we rely completely on the Web Components Theme
* Delete `@ui5/webcomponents-react/lib/ThemingSupport` as it is not needed anymore





# [0.9.0-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.14...v0.9.0-rc.15) (2020-04-16)


### Features

* **cra-template:** add test setup and use latest version + docs ([#433](https://github.com/SAP/ui5-webcomponents-react/issues/433)) ([961dec7](https://github.com/SAP/ui5-webcomponents-react/commit/961dec781e379da8e76ab02b4103c59c1adafcf6))





# [0.8.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.3...v0.8.0) (2020-02-04)

**Note:** Version bump only for package @ui5/cra-template-webcomponents-react





# [0.7.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.8...v0.7.0) (2020-01-17)

**Note:** Version bump only for package @ui5/cra-template-webcomponents-react





# [0.7.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.7...v0.7.0-rc.8) (2020-01-14)

**Note:** Version bump only for package @ui5/cra-template-webcomponents-react





## 0.1.1-rc.0 (2019-12-13)


### Bug Fixes

* **cra-template:** Fix package.json file name ([752f1b3](https://github.com/SAP/ui5-webcomponents-react/commit/752f1b3))


### Features

* **cra-template:** Add Template for UI5 Web Components React ([#244](https://github.com/SAP/ui5-webcomponents-react/issues/244)) ([fcb176c](https://github.com/SAP/ui5-webcomponents-react/commit/fcb176c))
