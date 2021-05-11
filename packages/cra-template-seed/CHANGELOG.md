# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
