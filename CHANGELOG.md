# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.3.0](https://github.com/SAP/fiori-for-react/compare/v0.2.1-rc.3...v0.3.0) (2019-06-03)

**Note:** Version bump only for package @fiori-for-react/suite





## [0.2.1-rc.3](https://github.com/SAP/fiori-for-react/compare/v0.2.1-rc.2...v0.2.1-rc.3) (2019-06-03)

**Note:** Version bump only for package @fiori-for-react/suite





## [0.2.1-rc.2](https://github.com/SAP/fiori-for-react/compare/v0.2.1-rc.1...v0.2.1-rc.2) (2019-05-27)


### Features

* **FilterBar:** renderSearch function ([94b468e](https://github.com/SAP/fiori-for-react/commit/94b468e))


### BREAKING CHANGES

* **FilterBar:** replaced boolean value with render function





## [0.2.1-rc.1](https://github.com/SAP/fiori-for-react/compare/v0.2.1-rc.0...v0.2.1-rc.1) (2019-05-24)


### Features

* Updated UI5 WebComponents to v0.11.0 ([#22](https://github.com/SAP/fiori-for-react/issues/22)) ([7dcf22b](https://github.com/SAP/fiori-for-react/commit/7dcf22b))


### BREAKING CHANGES

* List: the "selectionChange" event param "items" has been renamed to "selectedItems".
* List: the "backgroundDesign" property has been removed, use the corresponding CSS variable (--_ui5_listitem_background_color) to alter the list items` background.
* Panel: the "backgroundDesign" property has been removed, use the corresponding CSS variables (--_ui5_panel_background_color) to alter the panel background.
* DatePicker: 'liveChange' event has been renamed to 'input'.
* CheckBox: property "readOnly" has been renamed to "readonly".
* RadioButton: property "readOnly" has been renamed to "readonly".





## [0.2.1-rc.0](https://github.com/SAP/fiori-for-react/compare/v0.2.0...v0.2.1-rc.0) (2019-05-22)


### Bug Fixes

* **typing:** Fixed TypeScript Definitions ([440c097](https://github.com/SAP/fiori-for-react/commit/440c097))
* **WebComponentWrapper:** Fixed event handler removal after prop update ([2b93c12](https://github.com/SAP/fiori-for-react/commit/2b93c12))


### Features

* **FilterBar:** Initial Version ([422bdbd](https://github.com/SAP/fiori-for-react/commit/422bdbd))
* **FilterItem:** Initial Version ([19a23ec](https://github.com/SAP/fiori-for-react/commit/19a23ec))
* **VariantManagement:** Initial Version ([a1e9cbb](https://github.com/SAP/fiori-for-react/commit/a1e9cbb))




# 0.2.0 (2019-05-15)


### Bug Fixes

* **web-component-wrapper:** Slots must be passed as camelCase ([1671c17](https://github.com/SAP/fiori-for-react/commit/1671c17))


### Features

* **charts:** Added Loading Indicators ([15284b0](https://github.com/SAP/fiori-for-react/commit/15284b0))
* **VariantManagement:** Initial Version ([b8237ce](https://github.com/SAP/fiori-for-react/commit/b8237ce))
