# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.17.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.6...v0.17.0) (2021-07-15)


### chore

* **Device:** document public methods and cleanup ([#1819](https://github.com/SAP/ui5-webcomponents-react/issues/1819)) ([dd8ad28](https://github.com/SAP/ui5-webcomponents-react/commit/dd8ad28aeaf11aaaf89ae5d47d6f9d0adbc40cbe)), closes [#1791](https://github.com/SAP/ui5-webcomponents-react/issues/1791)


### BREAKING CHANGES

* **Device:** all `supportXYZ` methods have been removed. Please consult our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#device-cleanup) for alternatives
* **Device:** the Media Range Set part of the Device has been cleaned up in order to support only one default range set. More details can be found in our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#media-range-sets)
* **Device:** **useViewportRange**: the `rangeSetName` parameter has been removed without replacement
* **Device:** `Logger` and `LogLevel` have been removed. Check our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#removal-of-logger-and-loglevel) for details





## [0.16.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.4...v0.16.5) (2021-06-30)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.16.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.3...v0.16.4) (2021-06-14)


### Bug Fixes

* refactor `sapUiResponsiveContentPadding` and add respective padding to ObjectPage content ([#1699](https://github.com/SAP/ui5-webcomponents-react/issues/1699)) ([5fe3c18](https://github.com/SAP/ui5-webcomponents-react/commit/5fe3c1819f230512c43d91c7876ed82b592b705f))





## [0.16.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.2...v0.16.3) (2021-06-07)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.16.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.1...v0.16.2) (2021-06-02)


### Bug Fixes

* **enrichEventWithDetails:** add generic return type ([#1637](https://github.com/SAP/ui5-webcomponents-react/issues/1637)) ([48b4f64](https://github.com/SAP/ui5-webcomponents-react/commit/48b4f644aa2621c8c13a97a0de4106cf6d54effb))





# [0.16.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.4...v0.16.0) (2021-05-11)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.15.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.3...v0.15.4) (2021-04-28)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.15.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.2...v0.15.3) (2021-04-14)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.15.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.1...v0.15.2) (2021-04-01)


### Features

* update @ui5/webcomponents to 1.0.0-rc.14 ([#1478](https://github.com/SAP/ui5-webcomponents-react/issues/1478)) ([bea31ee](https://github.com/SAP/ui5-webcomponents-react/commit/bea31ee9d2f200a80738410dabb9eae6f85b35bd))





## [0.15.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.0...v0.15.1) (2021-03-30)


### Bug Fixes

* re-add main fields to package.json for jest tests ([#1471](https://github.com/SAP/ui5-webcomponents-react/issues/1471)) ([5941d8c](https://github.com/SAP/ui5-webcomponents-react/commit/5941d8cc4dfa11887699a73de1d5bb3b14601f62))





# [0.15.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.5...v0.15.0) (2021-03-30)


### chore

* don't publish lib folder anymore ([#1469](https://github.com/SAP/ui5-webcomponents-react/issues/1469)) ([616e167](https://github.com/SAP/ui5-webcomponents-react/commit/616e1679935e7198a64329d286e0104ecd448bdc))
* remove commonjs build ([#1450](https://github.com/SAP/ui5-webcomponents-react/issues/1450)) ([8374ae6](https://github.com/SAP/ui5-webcomponents-react/commit/8374ae6ed28515bb517f3ac641a1b7e8aa2fd01d))


### Features

* update ui5 web components to 1.0.0-rc.13 ([#1462](https://github.com/SAP/ui5-webcomponents-react/issues/1462)) ([9a0b132](https://github.com/SAP/ui5-webcomponents-react/commit/9a0b132f97f734c69e64fdecb2778832dd7479d8))


### BREAKING CHANGES

* `@ui5/webcomponents-react`, `@ui5/webcomponents-react-base` and `@ui5/webcomponents-react-charts` are no longer publishing the `lib` folder. Please use `dist` instead. More details can be found in our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#replaced-lib-folder-with-dist-folder).
* `@ui5/webcomponents-react`, `@ui5/webcomponents-react-base` and `@ui5/webcomponents-react-charts` are no longer providing a `CommonJS` build. As the underlying ui5 web components never published a `cjs` build, this change shouldn't affect you. In case you are facing any issues feel free to reach out to us.
* **Device**: `isEdge`, `isChrome`, `isFF`, `isMobile`, `isAndroid`, `getOS`, `getSystem`, `getBrowser` have been removed without replacement
* **Device**: `supportTouch` has been renamed to `supportsTouch`
* **Input**: The `onSubmit` event is now removed. The `onSubmit` functionality must be added with a custom code - listen for the standard `onKeyDown` event and check if `ENTER` is pressed to submit a form, containing the input component.
* **List**: The `infiniteScroll` prop has been removed, use `growing={ListGrowingMode.Scroll}` instead





## [0.14.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.3...v0.14.4) (2021-03-09)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.14.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.2...v0.14.3) (2021-03-03)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.14.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.1...v0.14.2) (2021-02-24)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.14.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.0...v0.14.1) (2021-02-19)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.14.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.0-rc.0...v0.14.0) (2021-02-18)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.14.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.9...v0.14.0-rc.0) (2021-02-18)


### Bug Fixes

* **Form:** Adjust spacing and alignment to comply with fiori guidelines ([#1299](https://github.com/SAP/ui5-webcomponents-react/issues/1299)) ([cae9c34](https://github.com/SAP/ui5-webcomponents-react/commit/cae9c3404f5c68baa2f3575cf0cbf7a2652f5200))


### chore

* delete deprecated useI18nText hook ([#1303](https://github.com/SAP/ui5-webcomponents-react/issues/1303)) ([0ab483f](https://github.com/SAP/ui5-webcomponents-react/commit/0ab483ff6bc5a815a685b841679906ea6467dcb0))
* deprecate Internet Explorer 11 ([#1252](https://github.com/SAP/ui5-webcomponents-react/issues/1252)) ([0e02486](https://github.com/SAP/ui5-webcomponents-react/commit/0e024861f058f616985ad80f4e508a1eb6030799))
* drop support for Edge Legacy ([#1196](https://github.com/SAP/ui5-webcomponents-react/issues/1196)) ([8aff48c](https://github.com/SAP/ui5-webcomponents-react/commit/8aff48c1770af197e6c0733f0547b9b781b46bac))


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
* `useI18nText` is replaced by `useI18nBundle`. For more details please consult our [migration guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#deleted-hooks).
* Internet Explorer 11 is now deprecated
* The Legacy Edge browser is no longer supported, therefore the following import has been removed: `import '@ui5/webcomponents-react-base/polyfill/Edge';`





## [0.13.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.8...v0.13.9) (2021-02-10)


### Bug Fixes

* **Form:** position all labels with the same spacing ([#1267](https://github.com/SAP/ui5-webcomponents-react/issues/1267)) ([4988241](https://github.com/SAP/ui5-webcomponents-react/commit/498824107792a2b1bfb3d950faa4d5efa4672372))





## [0.13.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.6...v0.13.7) (2021-02-05)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.13.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.4...v0.13.5) (2021-01-26)


### Bug Fixes

* **Device:** use named export to prevent typescript error ([#1200](https://github.com/SAP/ui5-webcomponents-react/issues/1200)) ([2862abf](https://github.com/SAP/ui5-webcomponents-react/commit/2862abfda68970176b7f3f9640656e04d60ef591))





## [0.13.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.3...v0.13.4) (2021-01-20)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.13.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.2...v0.13.3) (2021-01-19)


### Bug Fixes

* remove 'export * as' syntax for compatibility with react-scripts 3 ([#1184](https://github.com/SAP/ui5-webcomponents-react/issues/1184)) ([b4fe896](https://github.com/SAP/ui5-webcomponents-react/commit/b4fe896d40876649072a35ff50e8abc473a10915))





## [0.13.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.0...v0.13.1) (2021-01-11)


### Features

* **Charts:** add RTL support ([#915](https://github.com/SAP/ui5-webcomponents-react/issues/915)) ([f453b8a](https://github.com/SAP/ui5-webcomponents-react/commit/f453b8a653e4f95e43a4cbf2724f9bbbe17af82c))





# [0.13.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.4...v0.13.0) (2021-01-07)


### chore

* delete deprecated components for v0.13.0 ([#1106](https://github.com/SAP/ui5-webcomponents-react/issues/1106)) ([01814d1](https://github.com/SAP/ui5-webcomponents-react/commit/01814d1e680249653548a4edefecd65dab302981))


### Features

* update @ui5/webcomponents to 1.0.0-rc.11 ([#1108](https://github.com/SAP/ui5-webcomponents-react/issues/1108)) ([905dbca](https://github.com/SAP/ui5-webcomponents-react/commit/905dbca96911c1eefdcab212790c2961eda70d5f))


### BREAKING CHANGES

* `NotificationOverflowAction` got renamed to `NotificationAction`
* **BarDesign**: removed BarDesign `Auto` 
* **Bar**: prop `contentLeft` is now `startContent`
* **Bar**: prop `contentMiddle` is now `middleContent`
* **Bar**: prop `contentRight` is now `endContent`
* removed deprecated `Spinner` component
* removed deprecated `Tokenizer` component
* **Toolbar**: removed deprecated `onToolbarClick` in favour of `onClick`
* **Device**: removed deprecated, class-based API. Please use the [individual util functions](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#device-api) instead.
* **Device**: removed the optional `oListener` parameter from all device attach/detach functions (mostly used internally)





## [0.12.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.2...v0.12.3) (2020-12-17)


### Features

* **useI18nBundle:** add new hook to retrieve current i18n bundle ([#1104](https://github.com/SAP/ui5-webcomponents-react/issues/1104)) ([7b38975](https://github.com/SAP/ui5-webcomponents-react/commit/7b389751815409ed48435a853129c27d8da12df9))





## [0.12.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.1...v0.12.2) (2020-12-02)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.12.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.4...v0.12.0) (2020-11-16)


### Features

* update @ui5/webcomponents to 1.0.0-rc.10 ([#946](https://github.com/SAP/ui5-webcomponents-react/issues/946)) ([801e64a](https://github.com/SAP/ui5-webcomponents-react/commit/801e64a9979e7f5ba0c7a285485c8e8d753d416d))


### BREAKING CHANGES

* Icon import paths changed from e.g. `@ui5/webcomponents/dist/icons/add.js` to `@ui5/webcomponents-icons/dist/icons/add.js`. (`icon` directory got removed)





## [0.11.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.3...v0.11.4) (2020-11-16)


### Bug Fixes

* **useI18nBundle:** prevent state transition if the component has been unmounted ([#922](https://github.com/SAP/ui5-webcomponents-react/issues/922)) ([9a4adf8](https://github.com/SAP/ui5-webcomponents-react/commit/9a4adf834fd357f8ca717848db2b659ff18bfce9))


### Features

* **DynamicPage:** initial component implementation ([#865](https://github.com/SAP/ui5-webcomponents-react/issues/865)) ([a85ab71](https://github.com/SAP/ui5-webcomponents-react/commit/a85ab71803e84fb9e4951a80fc0d75a7ba254b22)), closes [#544](https://github.com/SAP/ui5-webcomponents-react/issues/544)





## [0.11.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.2...v0.11.3) (2020-11-04)


### Bug Fixes

* update peer dependencies to support react 17 ([#850](https://github.com/SAP/ui5-webcomponents-react/issues/850)) ([72c9d6f](https://github.com/SAP/ui5-webcomponents-react/commit/72c9d6f139af52944973da0f2cc9852c6102111a)), closes [#786](https://github.com/SAP/ui5-webcomponents-react/issues/786)





## [0.11.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.1...v0.11.2) (2020-10-23)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.11.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.0...v0.11.1) (2020-10-21)


### Bug Fixes

* ensure theming parameters are in sync with ui5/webcomponents-theme-base ([#737](https://github.com/SAP/ui5-webcomponents-react/issues/737)) ([880a8ab](https://github.com/SAP/ui5-webcomponents-react/commit/880a8ab3b099aedc25847f0cdf77fc7cfa20d881))





# [0.11.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.0-rc.1...v0.11.0) (2020-10-15)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.11.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.10...v0.11.0-rc.0) (2020-10-08)


### Features

* upgrade ui5-webcomponents to 1.0.0-rc.9 ([#705](https://github.com/SAP/ui5-webcomponents-react/issues/705)) ([fb7d5c6](https://github.com/SAP/ui5-webcomponents-react/commit/fb7d5c62d10a6afa161cbd55c75850a068ec3383)), closes [#674](https://github.com/SAP/ui5-webcomponents-react/issues/674)


### BREAKING CHANGES

* **Token**: the Token text is now defined via the `text` prop, `children` has no effect anymore.
* **Token**: `onDelete` is removed as the Token shouldn’t be used as a standalone component.





## [0.10.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.9...v0.10.10) (2020-10-02)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.10.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0...v0.10.1) (2020-07-31)


### Bug Fixes

* fix typescript errors ([#632](https://github.com/SAP/ui5-webcomponents-react/issues/632)) ([77df7c3](https://github.com/SAP/ui5-webcomponents-react/commit/77df7c37045616a8274b3a6288251a377ef8a23e))





# [0.10.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.11...v0.10.0) (2020-07-30)


### Features

* update to [ui5-webcomponents 1.0.0-rc.8](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.8) ([#623](https://github.com/SAP/ui5-webcomponents-react/issues/623)) ([45bbc8c](https://github.com/SAP/ui5-webcomponents-react/commit/45bbc8cb8d9c43774ae44ff15e4026c67be434c3))


### BREAKING CHANGES

* Deleted `Notification` component, replaced by `NotificationListItem`
* Deleted `NotificationGroup` component, replaced by `NotificationGroupListItem`
* **ProgressIndicator** replaced by UI5 Web Component with new API
* **ShellBar**: `logo` is now accepting an `img` tag or the `Avatar` component. Passing a `string` with the URL to the image is not longer supported.
* **TabContainer** will no longer automatically select the first tab, if no tab is selected. If you relied on this behaviour, you should now explicitly set the selected property on the first tab.





# [0.10.0-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.10...v0.10.0-rc.11) (2020-07-29)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.10.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.7...v0.10.0-rc.8) (2020-07-16)


### Bug Fixes

* remove useMemo from usePassThroughHtmlProps ([#601](https://github.com/SAP/ui5-webcomponents-react/issues/601)) ([10e0d89](https://github.com/SAP/ui5-webcomponents-react/commit/10e0d89ebcf338e692ecc92931d04c50d3a3a3d1))





# [0.10.0-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.5...v0.10.0-rc.6) (2020-07-02)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.10.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.2...v0.10.0-rc.3) (2020-06-16)


### Bug Fixes

* **base:** remove unnecessary proxy polyfill ([10adb29](https://github.com/SAP/ui5-webcomponents-react/commit/10adb29135d0966c6b95c8018453751663267109))





# [0.10.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.1...v0.10.0-rc.2) (2020-06-05)


### Features

* **spacings:** add fiori 3 spacings ([#549](https://github.com/SAP/ui5-webcomponents-react/issues/549)) ([270110d](https://github.com/SAP/ui5-webcomponents-react/commit/270110d89302741f259a1c122a0beab83eef452e))
* **Toolbar:** initial component implementation ([#543](https://github.com/SAP/ui5-webcomponents-react/issues/543)) ([0ef66dd](https://github.com/SAP/ui5-webcomponents-react/commit/0ef66ddb8a6285a15c6a3f6245114a83e4e4ad8d))





# [0.10.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.0...v0.10.0-rc.1) (2020-05-25)


### Features

* **StyleClassHelper:** add putIfPresent method ([#539](https://github.com/SAP/ui5-webcomponents-react/issues/539)) ([0ae0785](https://github.com/SAP/ui5-webcomponents-react/commit/0ae078554dd0e7e6a1424de6755ec02fa15bb12e))





# [0.10.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.5...v0.10.0-rc.0) (2020-05-19)


### chore

* **base:** remove deprecated components ([#508](https://github.com/SAP/ui5-webcomponents-react/issues/508)) ([781fe4e](https://github.com/SAP/ui5-webcomponents-react/commit/781fe4ebac7e10e431f8cd1925ec48ba941172e8))
* **main:** remove deprecated render methods ([#511](https://github.com/SAP/ui5-webcomponents-react/issues/511)) ([030473c](https://github.com/SAP/ui5-webcomponents-react/commit/030473c9a38d2bcaa3069925c9efd5ec75d0f909))


### BREAKING CHANGES

* **base:** remove deprecated `Event`
* **base:** remove deprecated `font72` (comes with UI5 Web Components)
* **base:** remove deprecated `HSLColor`
* **base:** remove deprecated `Optional` (use JS optional-chaining instead)
* **base:** remove deprecated `Scroller` library
* **base:** remove deprecated `sap_fiori_3` theming parameters, use `ThemingParameters` instead
* **base:** remove polyfill of old event API
* **main:** **AnalyticalTable**: remove deprecated prop `renderExtension`, please use `extension` instead
* **main:** **Bar**: remove deprecated prop `renderContentLeft`, `renderContentMiddle`, `renderContentRight`, please use `contentLeft`, `contentMiddle`, `contentRight` instead
* **main:** **FormItem**: remove deprecated prop `labelText`, please use `label` instead
* **main:** **FilterBar**: remove deprecated prop `renderSearch`, `renderVariants`, please use `search`, `variants` instead
* **main:** **ObjectPage**: remove deprecated prop `renderHeaderContent`, `renderBreadcrumbs`, `renderKeyInfos`, please use `headerContent`, `breadcrumbs`, `keyInfos` instead
* **main:** **Page**: remove deprecated prop `renderCustomHeader`, `renderCustomFooter`, please use `customHeader`, `customFooter` instead





## [0.9.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.3...v0.9.4) (2020-05-08)


### Bug Fixes

* fix cjs build ([#496](https://github.com/SAP/ui5-webcomponents-react/issues/496)) ([b1900cb](https://github.com/SAP/ui5-webcomponents-react/commit/b1900cbc96f1de4cbcbed7c86dbb4f6ec3f38fd5))





## [0.9.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.1...v0.9.2) (2020-05-06)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.9.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.0.0...v0.9.0) (2020-04-30)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [1.0.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.18...v1.0.0) (2020-04-30)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.9.0-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.15...v0.9.0-rc.16) (2020-04-22)


### Features

* add slot props and deprecated render methods  ([#436](https://github.com/SAP/ui5-webcomponents-react/issues/436)) ([018337f](https://github.com/SAP/ui5-webcomponents-react/commit/018337f6252a2bf9291a66e415d38226645ad932))





# [0.9.0-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.14...v0.9.0-rc.15) (2020-04-16)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.9.0-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.13...v0.9.0-rc.14) (2020-04-10)


### Bug Fixes

* **Framework:** fix sideEffect-full files in react production build ([f5c02b1](https://github.com/SAP/ui5-webcomponents-react/commit/f5c02b18e56e7b1f72e89a095c737c83de626eab))





# [0.9.0-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.11...v0.9.0-rc.12) (2020-04-09)


### Bug Fixes

* **Device:** avoid modernizr to be treeshaked ([#419](https://github.com/SAP/ui5-webcomponents-react/issues/419)) ([3c8a1e2](https://github.com/SAP/ui5-webcomponents-react/commit/3c8a1e2ed92270d1af220331a49e267f095b9f46))





# [0.9.0-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.10...v0.9.0-rc.11) (2020-04-09)


### Bug Fixes

* **Framework:** fix side-effects in rollup build ([#414](https://github.com/SAP/ui5-webcomponents-react/issues/414)) ([b64fc5f](https://github.com/SAP/ui5-webcomponents-react/commit/b64fc5f568160b22294f94f5e2fe2e6702e88be0))





# [0.9.0-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.8...v0.9.0-rc.9) (2020-04-03)


### Bug Fixes

* **AnalyticalTable:** fix tree-table selection, add selectionBehavior prop + enum ([#401](https://github.com/SAP/ui5-webcomponents-react/issues/401)) ([7aab047](https://github.com/SAP/ui5-webcomponents-react/commit/7aab047ba2b66f49be06cb92f068ac96950aff20))
* **useViewportRange:** don't update state after unmount ([#402](https://github.com/SAP/ui5-webcomponents-react/issues/402)) ([6b8daef](https://github.com/SAP/ui5-webcomponents-react/commit/6b8daef07adf446fe31167530ff7e68fdcaa45a2))


### Features

* **Framework:** update to ui5-webcomponents-rc.6 ([#392](https://github.com/SAP/ui5-webcomponents-react/issues/392)) ([84a3f90](https://github.com/SAP/ui5-webcomponents-react/commit/84a3f905f48e5ef12526a026b68a3c8faf4b5fe0)), closes [/github.com/SAP/ui5-webcomponents/blob/master/CHANGELOG.md#100-rc6-2020-03-27](https://github.com//github.com/SAP/ui5-webcomponents/blob/master/CHANGELOG.md/issues/100-rc6-2020-03-27) [#349](https://github.com/SAP/ui5-webcomponents-react/issues/349)


### BREAKING CHANGES

* **AnalyticalTable:** replace `noSelectionColumn` prop with `selectionBehavior` enum
* **Framework:** Replace Avatar Component with `Avatar` UI5 Web Component
* **Framework:** Replace Carousel Component with `Carousel` UI5 Web Component
* **Framework:** Replace SegmentedButton Component with `SegmentedButton` UI5 Web Component
* **Framework:** Deleted SegmentedButtonItem, replaced by ToggleButton
* **Framework:** Remove MessageToast Component, replaced by `Toast` UI5 Web Component
* **Framework:** **ThemeProvider**: Remove prop `withToastContainer` 
* **Framework:** **AvatarSize**: Remove value `Custom`
* **Framework:** **ButtonDesign**: Rename`Accept` to `Positive`
* **Framework:** **ButtonDesign**: Rename`Reject` to `Negative`
* **Framework:** **InputType**: Rename `Url` to `URL`
* **Framework:** **CarouselArrowsPlacement**: Rename `PageIndicator` to `Navigation`
* **Framework:** **BusyIndicator** : change default size of busy dots to `Medium`
* **Framework:** **Icon** : `src` property is removed in favor of `name`
* **Framework:** **MessageStrip** : replace icon property with icon slot to allow setting arbitrary content by the user
* **Framework:** **MultiComboBox** : Does not longer accept `StandardListItem` as child, use `MultiComboBoxItem` instead
* **Framework:** **ShellBar** : profile property is removed in favour of profile slot
* **Framework:** **TabContainer** : `onItemSelect` event is renamed to `onTabSelect` and the item event parameter is renamed to tab.
* **Framework:** **Card** : the property `subtitle` has been renamed to `subheading`
* **Framework:** **TextArea** : the property `maxLength` has been renamed to `maxlength`
* **Framework:** **ThemeProvider** : new prop `theme` is required for correct theming in addition to importing `import '@ui5/webcomponents-react/lib/ThemingSupport'`
* **Framework:** configuring of compact size is removed, use the `ui5-content-density-compact` CSS class to apply compact size.





# [0.9.0-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.4...v0.9.0-rc.5) (2020-03-25)


### Bug Fixes

* **Event-System:** Polyfill old behaviour by fallback to event.target for details ([#385](https://github.com/SAP/ui5-webcomponents-react/issues/385)) ([7fdc725](https://github.com/SAP/ui5-webcomponents-react/commit/7fdc7258b97fe03baa846cae56772d506100be2d))





# [0.9.0-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.3...v0.9.0-rc.4) (2020-03-25)


### Bug Fixes

* **Loader/Spinner/Grid:** Fix memory leaks by cleanup effects ([#379](https://github.com/SAP/ui5-webcomponents-react/issues/379)) ([058cae7](https://github.com/SAP/ui5-webcomponents-react/commit/058cae7f1f60705f4d2eb9ab8df91a74c2d044e0)), closes [#335](https://github.com/SAP/ui5-webcomponents-react/issues/335)





# [0.9.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.2...v0.9.0-rc.3) (2020-03-24)


### Bug Fixes

* **SegmentedButton:** add intermediate css variable mappings in order to fix styling ([#375](https://github.com/SAP/ui5-webcomponents-react/issues/375)) ([86e962e](https://github.com/SAP/ui5-webcomponents-react/commit/86e962eb315381a1442b94b37baffeecff8638ca))





# [0.9.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.1...v0.9.0-rc.2) (2020-03-23)


### Features

* **All Components:** Allow all HTML events to be passed ([#370](https://github.com/SAP/ui5-webcomponents-react/issues/370)) ([376f9c1](https://github.com/SAP/ui5-webcomponents-react/commit/376f9c1a2893f2c46dfff85583c7756f4b6651cc))
* **Css-Variables:** Add link styles ([#367](https://github.com/SAP/ui5-webcomponents-react/issues/367)) ([7595cdd](https://github.com/SAP/ui5-webcomponents-react/commit/7595cdd0648ba1c9cb45ca76c77ae78a1403e073))





# [0.9.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.7-rc.0...v0.9.0-rc.1) (2020-03-19)


### Bug Fixes

* **Polyfills:** Fix scrollTo polyfill import ([9fa2e1b](https://github.com/SAP/ui5-webcomponents-react/commit/9fa2e1b9fda72369596432165829cc26e7b4f110))





## [0.8.7-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.6...v0.8.7-rc.0) (2020-03-19)


### Bug Fixes

* **AnalyticalTable:** Update react-table and fix TreeTable selection columns ([#344](https://github.com/SAP/ui5-webcomponents-react/issues/344)) ([7a46d2d](https://github.com/SAP/ui5-webcomponents-react/commit/7a46d2d845d145e5cfb6ccdac396d58b10f775a3)), closes [#333](https://github.com/SAP/ui5-webcomponents-react/issues/333) [#336](https://github.com/SAP/ui5-webcomponents-react/issues/336)
* **ThemingParameters:** Add temporary quick fix for missing variables ([#350](https://github.com/SAP/ui5-webcomponents-react/issues/350)) ([ef1934a](https://github.com/SAP/ui5-webcomponents-react/commit/ef1934a9d27ccb6168a345236729bdbdddb29cce))


### Code Refactoring

* **ThemeProvider:** Remove JSSProvider and simplify all tests ([#355](https://github.com/SAP/ui5-webcomponents-react/issues/355)) ([db50f30](https://github.com/SAP/ui5-webcomponents-react/commit/db50f3060096b801654fc64f7ea9dc532f1d3778))


### Features

* **ObjectPage:** Add 'Pin-Header' button ([#354](https://github.com/SAP/ui5-webcomponents-react/issues/354)) ([0e5e9b6](https://github.com/SAP/ui5-webcomponents-react/commit/0e5e9b658fc0aff0304dae952284d337e89e9d2c)), closes [#345](https://github.com/SAP/ui5-webcomponents-react/issues/345) [#334](https://github.com/SAP/ui5-webcomponents-react/issues/334) [#248](https://github.com/SAP/ui5-webcomponents-react/issues/248)
* **ThemingParameters:** Switch to offical Theme Designer Parameters ([#348](https://github.com/SAP/ui5-webcomponents-react/issues/348)) ([dc6f94e](https://github.com/SAP/ui5-webcomponents-react/commit/dc6f94e73fe0dd9c2828fdf222a5b8135f5721e4)), closes [#240](https://github.com/SAP/ui5-webcomponents-react/issues/240)


### BREAKING CHANGES

* **ThemeProvider:** ThemeProvider does not longer render a JSSProvider and the `jss`-prop is removed. If you need a custom JSS setup, please render your own JSSProvider.





## [0.8.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.5...v0.8.6) (2020-03-09)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.8.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.4...v0.8.5) (2020-02-20)


### Bug Fixes

* **Bar:** Adjust alignment and add Bar design  ([#320](https://github.com/SAP/ui5-webcomponents-react/issues/320)) ([117c9f3](https://github.com/SAP/ui5-webcomponents-react/commit/117c9f350a238ea950335dabfa8b9a0e47201dec))





## [0.8.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.3...v0.8.4) (2020-02-13)


### Bug Fixes

* **base:** Mark polyfills as sideEffects ([83963d1](https://github.com/SAP/ui5-webcomponents-react/commit/83963d1dd3a19324a0a83aece126adfa981b958d))





## [0.8.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.2...v0.8.3) (2020-02-11)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.8.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.1...v0.8.2) (2020-02-10)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.8.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.3...v0.8.0) (2020-02-04)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.7.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.8...v0.7.0) (2020-01-17)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.7.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.7...v0.7.0-rc.8) (2020-01-14)


### Features

* **Components:** Pass data-, aria- and id props to rendered component ([#263](https://github.com/SAP/ui5-webcomponents-react/issues/263)) ([295b8df](https://github.com/SAP/ui5-webcomponents-react/commit/295b8dfd6b3b947bf31a110e7b28bd4e55c1f652))





# [0.7.0-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/@ui5/webcomponents-react-base@0.7.0-rc.3...@ui5/webcomponents-react-base@0.7.0-rc.4) (2019-12-13)


### Features

* **Form:** initial Implementation ([#242](https://github.com/SAP/ui5-webcomponents-react/issues/242)) ([c4c2848](https://github.com/SAP/ui5-webcomponents-react/commit/c4c2848))





# [0.7.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/@ui5/webcomponents-react-base@0.7.0-rc.2...@ui5/webcomponents-react-base@0.7.0-rc.3) (2019-12-11)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# 0.7.0-rc.2 (2019-12-11)


### Bug Fixes

* **base:** Fix modernizr side effect ([5436bd4](https://github.com/SAP/ui5-webcomponents-react/commit/5436bd4))



# 0.7.0-rc.1 (2019-11-19)



# 0.7.0-rc.0 (2019-11-12)


### Bug Fixes

* **ObjectPage:** enable scroll by dragging scrollbar ([#209](https://github.com/SAP/ui5-webcomponents-react/issues/209)) ([58b708d](https://github.com/SAP/ui5-webcomponents-react/commit/58b708d))


### Features

* **polyfills:** Add Safari Polyfill ([#219](https://github.com/SAP/ui5-webcomponents-react/issues/219)) ([1801269](https://github.com/SAP/ui5-webcomponents-react/commit/1801269))



# 0.6.0 (2019-10-21)



# 0.6.0-rc.23 (2019-10-21)



# 0.6.0-rc.22 (2019-10-18)



# 0.6.0-rc.21 (2019-10-18)



# 0.6.0-rc.20 (2019-10-17)


### Bug Fixes

* **ObjecPage:** fix scrollbar width on windows ([#188](https://github.com/SAP/ui5-webcomponents-react/issues/188)) ([8af1a4c](https://github.com/SAP/ui5-webcomponents-react/commit/8af1a4c))



# 0.6.0-rc.19 (2019-10-16)



# 0.6.0-rc.18 (2019-10-15)



# 0.6.0-rc.17 (2019-10-15)



# 0.6.0-rc.16 (2019-10-14)



# 0.6.0-rc.15 (2019-10-14)



# 0.6.0-rc.14 (2019-10-10)



# 0.6.0-rc.13 (2019-10-10)



# 0.6.0-rc.12 (2019-10-09)


### Features

* **WebComponents:** Update to v1.0.0-rc.3 ([#175](https://github.com/SAP/ui5-webcomponents-react/issues/175)) ([f294e67](https://github.com/SAP/ui5-webcomponents-react/commit/f294e67))


### BREAKING CHANGES

* **WebComponents:** Configuration Script is now identified via `data-ui5-config` instead of `data-id="sap-ui-config"`
* **WebComponents:** `BusyIndicatorType` is renamed to `BusyIndicatorSize`
* **WebComponents:** `Popover`: stayOpenOnScroll is now removed
Popover will no longer close when the browser is scrolled
and its parent (opener) is visible in the viewport.
* **WebComponents:** `ListItem`: CSS variable --ui5-listitem-background-color is removed, set the desired background directly on the tag.
* **WebComponents:** `TableColumn`: width property of the ui5-table-column has been removed, use CSS to give width to the columns.
* **WebComponents:** `MultiComboBox`: property validateInput is removed,
use the property allowCustomValues, note built in validation is enabled by default.
* **WebComponents:** `Icon`: SVG icons have to imported, e.g. `import @ui5/webcomponents/dist/icons/add';`



# 0.6.0-rc.11 (2019-10-08)



# 0.6.0-rc.10 (2019-10-02)



# 0.6.0-rc.9 (2019-10-01)



# 0.6.0-rc.8 (2019-09-30)



# 0.6.0-rc.7 (2019-09-26)



# 0.6.0-rc.6 (2019-09-26)



# 0.6.0-rc.5 (2019-09-25)



# 0.6.0-rc.4 (2019-09-25)



# 0.6.0-rc.2 (2019-09-24)



# 0.6.0-rc.1 (2019-09-24)


### Code Refactoring

* **base:** Deleted withStyles HOC ([#145](https://github.com/SAP/ui5-webcomponents-react/issues/145)) ([d852576](https://github.com/SAP/ui5-webcomponents-react/commit/d852576))
* **framework:** Clean up legacy code and improve bundle size ([#135](https://github.com/SAP/ui5-webcomponents-react/issues/135)) ([7ab3122](https://github.com/SAP/ui5-webcomponents-react/commit/7ab3122))


### BREAKING CHANGES

* **base:** Delete `withStyles` export from `base` package
* **framework:** `base`: Removed `KeyCodes` export, please use `event.key` instead
* **framework:** `base`: Removed `pushElementBackInScreen`
* **framework:** `base`: Removed `fonts` exports, please use `parameters` instead



## 0.5.1-rc.17 (2019-09-23)



## 0.5.1-rc.16 (2019-09-20)



## 0.5.1-rc.15 (2019-09-18)



## 0.5.1-rc.14 (2019-09-18)


### Bug Fixes

* **base:** Added missing react peer dependency ([#130](https://github.com/SAP/ui5-webcomponents-react/issues/130)) ([d899f11](https://github.com/SAP/ui5-webcomponents-react/commit/d899f11))



## 0.5.1-rc.13 (2019-09-18)



## 0.5.1-rc.12 (2019-09-17)



## 0.5.1-rc.11 (2019-09-16)



## 0.5.1-rc.10 (2019-09-14)



## 0.5.1-rc.9 (2019-09-13)



## 0.5.1-rc.8 (2019-09-13)



## 0.5.1-rc.7 (2019-08-29)



## 0.5.1-rc.6 (2019-08-29)



## 0.5.1-rc.5 (2019-08-28)



## 0.5.1-rc.4 (2019-08-27)



## 0.5.1-rc.3 (2019-08-23)



## 0.5.1-rc.2 (2019-08-23)


### Features

* **ObjectPage:** Collapse header on scroll ([#104](https://github.com/SAP/ui5-webcomponents-react/issues/104)) ([6788b59](https://github.com/SAP/ui5-webcomponents-react/commit/6788b59))



## 0.5.1-rc.1 (2019-08-22)



## 0.5.1-rc.0 (2019-08-20)



# 0.5.0 (2019-08-15)



## 0.4.2-rc.18 (2019-08-15)



## 0.4.2-rc.17 (2019-08-12)



## 0.4.2-rc.16 (2019-08-08)



## 0.4.2-rc.15 (2019-08-05)



## 0.4.2-rc.14 (2019-08-05)



## 0.4.2-rc.13 (2019-08-02)



## 0.4.2-rc.12 (2019-08-02)



## 0.4.2-rc.11 (2019-08-02)



## 0.4.2-rc.10 (2019-08-02)



## 0.4.2-rc.9 (2019-07-31)



## 0.4.2-rc.8 (2019-07-29)



## 0.4.2-rc.7 (2019-07-29)



## 0.4.2-rc.6 (2019-07-25)



## 0.4.2-rc.5 (2019-07-24)



## 0.4.2-rc.4 (2019-07-23)


### Features

* **Charts:** Added lib export per chart ([#66](https://github.com/SAP/ui5-webcomponents-react/issues/66)) ([977cc25](https://github.com/SAP/ui5-webcomponents-react/commit/977cc25))



## 0.4.2-rc.1 (2019-07-22)



## 0.4.2-rc.0 (2019-07-19)



## 0.4.1 (2019-07-19)



## 0.4.1-rc.2 (2019-07-19)



## 0.4.1-rc.1 (2019-07-17)



## 0.4.1-rc.0 (2019-07-16)



# 0.4.0 (2019-07-15)



## 0.3.2-rc.17 (2019-07-15)



## 0.3.2-rc.16 (2019-07-12)



## 0.3.2-rc.15 (2019-07-11)



## 0.3.2-rc.14 (2019-07-10)


### Code Refactoring

* **Custom Components:** Expose HTML Element via ref in every component ([#54](https://github.com/SAP/ui5-webcomponents-react/issues/54)) ([c285ee6](https://github.com/SAP/ui5-webcomponents-react/commit/c285ee6))


### BREAKING CHANGES

* **Custom Components:** All Components now expose their root html node/the encapsulated Web Component via ref instead of the React instance.



## 0.3.2-rc.13 (2019-07-05)


### Bug Fixes

* **CSS-Variables:** remove trailing semicolon ([#53](https://github.com/SAP/ui5-webcomponents-react/issues/53)) ([f9d1daf](https://github.com/SAP/ui5-webcomponents-react/commit/f9d1daf)), closes [#49](https://github.com/SAP/ui5-webcomponents-react/issues/49)



## 0.3.2-rc.12 (2019-07-05)



## 0.3.2-rc.11 (2019-07-04)



## 0.3.2-rc.10 (2019-07-03)



## 0.3.2-rc.9 (2019-07-02)



## 0.3.2-rc.8 (2019-07-01)



## 0.3.2-rc.7 (2019-07-01)


### Code Refactoring

* **withWebComponent:** replace innerComponentRef with ref for Web Components ([#44](https://github.com/SAP/ui5-webcomponents-react/issues/44)) ([08982ba](https://github.com/SAP/ui5-webcomponents-react/commit/08982ba))


### BREAKING CHANGES

* **withWebComponent:** Replaced `innerComponentRef` with `ref` to support React `RefObject`



## 0.3.2-rc.6 (2019-06-26)



## 0.3.2-rc.5 (2019-06-24)


### Bug Fixes

* **fiori3:** Added react-table dependency ([ebc8fc5](https://github.com/SAP/ui5-webcomponents-react/commit/ebc8fc5))



## 0.3.2-rc.4 (2019-06-24)



## 0.3.2-rc.3 (2019-06-24)


### Code Refactoring

* **base:** Merge `styles` and `utils` into `base` ([#38](https://github.com/SAP/ui5-webcomponents-react/issues/38)) ([9309505](https://github.com/SAP/ui5-webcomponents-react/commit/9309505)), closes [#34](https://github.com/SAP/ui5-webcomponents-react/issues/34)


### BREAKING CHANGES

* **base:** `@ui5-webcomponents-react/styles` and `@ui5-webcomponents-react/utils` are replaced by ``@ui5-webcomponents-react/base`
* **base:** Deleted Themes `sap_belize`, `sap_belize_plus` and `sap_belize_hcb`
* **base:** Removed `createThemeMap` from base
* **base:** Removed `getThemeClassFor` from base
* **base:** Removed `getThemeOverwrite` from base
* **base:** Deleted `Themes` from base





# [0.7.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.0...v0.7.0-rc.1) (2019-11-19)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.7.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.2...v0.7.0-rc.0) (2019-11-12)


### Bug Fixes

* **ObjectPage:** enable scroll by dragging scrollbar ([#209](https://github.com/SAP/ui5-webcomponents-react/issues/209)) ([58b708d](https://github.com/SAP/ui5-webcomponents-react/commit/58b708d))


### Features

* **polyfills:** Add Safari Polyfill ([#219](https://github.com/SAP/ui5-webcomponents-react/issues/219)) ([1801269](https://github.com/SAP/ui5-webcomponents-react/commit/1801269))





# [0.6.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.23...v0.6.0) (2019-10-21)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.23](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.22...v0.6.0-rc.23) (2019-10-21)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.22](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.21...v0.6.0-rc.22) (2019-10-18)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.21](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.20...v0.6.0-rc.21) (2019-10-18)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.20](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.19...v0.6.0-rc.20) (2019-10-17)


### Bug Fixes

* **ObjecPage:** fix scrollbar width on windows ([#188](https://github.com/SAP/ui5-webcomponents-react/issues/188)) ([8af1a4c](https://github.com/SAP/ui5-webcomponents-react/commit/8af1a4c))





# [0.6.0-rc.19](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.18...v0.6.0-rc.19) (2019-10-16)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.18](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.17...v0.6.0-rc.18) (2019-10-15)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.16...v0.6.0-rc.17) (2019-10-15)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.15...v0.6.0-rc.16) (2019-10-14)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.14...v0.6.0-rc.15) (2019-10-14)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.13...v0.6.0-rc.14) (2019-10-10)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.12...v0.6.0-rc.13) (2019-10-10)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.11...v0.6.0-rc.12) (2019-10-09)


### Features

* **WebComponents:** Update to v1.0.0-rc.3 ([#175](https://github.com/SAP/ui5-webcomponents-react/issues/175)) ([f294e67](https://github.com/SAP/ui5-webcomponents-react/commit/f294e67))


### BREAKING CHANGES

* **WebComponents:** Configuration Script is now identified via `data-ui5-config` instead of `data-id="sap-ui-config"`
* **WebComponents:** `BusyIndicatorType` is renamed to `BusyIndicatorSize`
* **WebComponents:** `Popover`: stayOpenOnScroll is now removed
Popover will no longer close when the browser is scrolled
and its parent (opener) is visible in the viewport.
* **WebComponents:** `ListItem`: CSS variable --ui5-listitem-background-color is removed, set the desired background directly on the tag.
* **WebComponents:** `TableColumn`: width property of the ui5-table-column has been removed, use CSS to give width to the columns.
* **WebComponents:** `MultiComboBox`: property validateInput is removed,
use the property allowCustomValues, note built in validation is enabled by default.
* **WebComponents:** `Icon`: SVG icons have to imported, e.g. `import @ui5/webcomponents/dist/icons/add';`





# [0.6.0-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.10...v0.6.0-rc.11) (2019-10-08)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.9...v0.6.0-rc.10) (2019-10-02)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.8...v0.6.0-rc.9) (2019-10-01)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.7...v0.6.0-rc.8) (2019-09-30)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.6...v0.6.0-rc.7) (2019-09-26)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.5...v0.6.0-rc.6) (2019-09-26)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.4...v0.6.0-rc.5) (2019-09-25)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.2...v0.6.0-rc.4) (2019-09-25)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.1...v0.6.0-rc.2) (2019-09-24)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.6.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.17...v0.6.0-rc.1) (2019-09-24)


### Code Refactoring

* **base:** Deleted withStyles HOC ([#145](https://github.com/SAP/ui5-webcomponents-react/issues/145)) ([d852576](https://github.com/SAP/ui5-webcomponents-react/commit/d852576))
* **framework:** Clean up legacy code and improve bundle size ([#135](https://github.com/SAP/ui5-webcomponents-react/issues/135)) ([7ab3122](https://github.com/SAP/ui5-webcomponents-react/commit/7ab3122))


### BREAKING CHANGES

* **base:** Delete `withStyles` export from `base` package
* **framework:** `base`: Removed `KeyCodes` export, please use `event.key` instead
* **framework:** `base`: Removed `pushElementBackInScreen`
* **framework:** `base`: Removed `fonts` exports, please use `parameters` instead





## [0.6.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.17...v0.6.1-rc.0) (2019-09-24)


### Code Refactoring

* **framework:** Clean up legacy code and improve bundle size ([#135](https://github.com/SAP/ui5-webcomponents-react/issues/135)) ([7ab3122](https://github.com/SAP/ui5-webcomponents-react/commit/7ab3122))


### BREAKING CHANGES

* **framework:** `base`: Removed `KeyCodes` export, please use `event.key` instead
* **framework:** `base`: Removed `pushElementBackInScreen`
* **framework:** `base`: Removed `fonts` exports, please use `parameters` instead





## [0.5.1-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.16...v0.5.1-rc.17) (2019-09-23)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.15...v0.5.1-rc.16) (2019-09-20)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.14...v0.5.1-rc.15) (2019-09-18)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.13...v0.5.1-rc.14) (2019-09-18)


### Bug Fixes

* **base:** Added missing react peer dependency ([#130](https://github.com/SAP/ui5-webcomponents-react/issues/130)) ([d899f11](https://github.com/SAP/ui5-webcomponents-react/commit/d899f11))





## [0.5.1-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.12...v0.5.1-rc.13) (2019-09-18)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.11...v0.5.1-rc.12) (2019-09-17)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.10...v0.5.1-rc.11) (2019-09-16)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.9...v0.5.1-rc.10) (2019-09-14)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.8...v0.5.1-rc.9) (2019-09-13)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.7...v0.5.1-rc.8) (2019-09-13)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.6...v0.5.1-rc.7) (2019-08-29)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.5...v0.5.1-rc.6) (2019-08-29)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.4...v0.5.1-rc.5) (2019-08-28)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.3...v0.5.1-rc.4) (2019-08-27)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.2...v0.5.1-rc.3) (2019-08-23)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.1...v0.5.1-rc.2) (2019-08-23)


### Features

* **ObjectPage:** Collapse header on scroll ([#104](https://github.com/SAP/ui5-webcomponents-react/issues/104)) ([6788b59](https://github.com/SAP/ui5-webcomponents-react/commit/6788b59))





## [0.5.1-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.0...v0.5.1-rc.1) (2019-08-22)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.5.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.0...v0.5.1-rc.0) (2019-08-20)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.5.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.18...v0.5.0) (2019-08-15)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.18](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.17...v0.4.2-rc.18) (2019-08-15)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.16...v0.4.2-rc.17) (2019-08-12)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.15...v0.4.2-rc.16) (2019-08-08)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.14...v0.4.2-rc.15) (2019-08-05)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.13...v0.4.2-rc.14) (2019-08-05)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.12...v0.4.2-rc.13) (2019-08-02)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.11...v0.4.2-rc.12) (2019-08-02)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.10...v0.4.2-rc.11) (2019-08-02)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.9...v0.4.2-rc.10) (2019-08-02)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.8...v0.4.2-rc.9) (2019-07-31)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.7...v0.4.2-rc.8) (2019-07-29)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.6...v0.4.2-rc.7) (2019-07-29)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.5...v0.4.2-rc.6) (2019-07-25)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.4...v0.4.2-rc.5) (2019-07-24)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.1...v0.4.2-rc.4) (2019-07-23)


### Features

* **Charts:** Added lib export per chart ([#66](https://github.com/SAP/ui5-webcomponents-react/issues/66)) ([977cc25](https://github.com/SAP/ui5-webcomponents-react/commit/977cc25))





## [0.4.2-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.2...v0.4.2-rc.3) (2019-07-22)


### Features

* **Charts:** Added lib export per chart ([#66](https://github.com/SAP/ui5-webcomponents-react/issues/66)) ([977cc25](https://github.com/SAP/ui5-webcomponents-react/commit/977cc25))





## [0.4.2-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.1...v0.4.2-rc.2) (2019-07-22)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.0...v0.4.2-rc.1) (2019-07-22)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.2-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1...v0.4.2-rc.0) (2019-07-19)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1-rc.2...v0.4.1) (2019-07-19)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.1-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1-rc.1...v0.4.1-rc.2) (2019-07-19)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.1-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1-rc.0...v0.4.1-rc.1) (2019-07-17)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.4.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.0...v0.4.1-rc.0) (2019-07-16)

**Note:** Version bump only for package @ui5/webcomponents-react-base





# [0.4.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.17...v0.4.0) (2019-07-15)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.16...v0.3.2-rc.17) (2019-07-15)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.15...v0.3.2-rc.16) (2019-07-12)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.14...v0.3.2-rc.15) (2019-07-11)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.13...v0.3.2-rc.14) (2019-07-10)


### Code Refactoring

* **Custom Components:** Expose HTML Element via ref in every component ([#54](https://github.com/SAP/ui5-webcomponents-react/issues/54)) ([c285ee6](https://github.com/SAP/ui5-webcomponents-react/commit/c285ee6))


### BREAKING CHANGES

* **Custom Components:** All Components now expose their root html node/the encapsulated Web Component via ref instead of the React instance.





## [0.3.2-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.12...v0.3.2-rc.13) (2019-07-05)


### Bug Fixes

* **CSS-Variables:** remove trailing semicolon ([#53](https://github.com/SAP/ui5-webcomponents-react/issues/53)) ([f9d1daf](https://github.com/SAP/ui5-webcomponents-react/commit/f9d1daf)), closes [#49](https://github.com/SAP/ui5-webcomponents-react/issues/49)





## [0.3.2-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.11...v0.3.2-rc.12) (2019-07-05)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.10...v0.3.2-rc.11) (2019-07-04)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.9...v0.3.2-rc.10) (2019-07-03)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.8...v0.3.2-rc.9) (2019-07-02)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.7...v0.3.2-rc.8) (2019-07-01)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.6...v0.3.2-rc.7) (2019-07-01)


### Code Refactoring

* **withWebComponent:** replace innerComponentRef with ref for Web Components ([#44](https://github.com/SAP/ui5-webcomponents-react/issues/44)) ([08982ba](https://github.com/SAP/ui5-webcomponents-react/commit/08982ba))


### BREAKING CHANGES

* **withWebComponent:** Replaced `innerComponentRef` with `ref` to support React `RefObject`





## [0.3.2-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.5...v0.3.2-rc.6) (2019-06-26)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.4...v0.3.2-rc.5) (2019-06-24)


### Bug Fixes

* **main:** Added react-table dependency ([ebc8fc5](https://github.com/SAP/ui5-webcomponents-react/commit/ebc8fc5))





## [0.3.2-rc.4](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/base/compare/v0.3.2-rc.3...v0.3.2-rc.4) (2019-06-24)

**Note:** Version bump only for package @ui5/webcomponents-react-base





## [0.3.2-rc.3](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/base/compare/v0.3.2-rc.2...v0.3.2-rc.3) (2019-06-24)


### Code Refactoring

* **base:** Merge `styles` and `utils` into `base` ([#38](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/base/issues/38)) ([9309505](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/base/commit/9309505)), closes [#34](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/base/issues/34)


### BREAKING CHANGES

* **base:** `@ui5-webcomponents-react/styles` and `@ui5-webcomponents-react/utils` are replaced by ``@ui5/webcomponents-react-base`
* **base:** Deleted Themes `sap_belize`, `sap_belize_plus` and `sap_belize_hcb`
* **base:** Removed `createThemeMap` from base
* **base:** Removed `getThemeClassFor` from base
* **base:** Removed `getThemeOverwrite` from base
* **base:** Deleted `Themes` from base
