# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.2-rc.0](https://github.com/SAP/fiori-for-react/compare/v0.3.1-rc.2...v0.3.2-rc.0) (2019-06-14)


### Features

* **ThemeProvider:** Read config from UI5 Web Components ([efee11f](https://github.com/SAP/fiori-for-react/commit/efee11f))


### BREAKING CHANGES

* **ThemeProvider:** Themes: rename Theme `sap_fiori3_light` to `sap_fiori_3`
* **ThemeProvider:** ThemeProvider: removed contentDensity and theme props. To set those, use the [ui5 WebComponents configuration script tag](https://github.com/SAP/ui5-webcomponents#configure).





## [0.3.1-rc.2](https://github.com/SAP/fiori-for-react/compare/v0.3.1-rc.1...v0.3.1-rc.2) (2019-06-13)


### Features

* Update UI5 WebComponents to v0.12.0 ([#30](https://github.com/SAP/fiori-for-react/issues/30)) ([4958a15](https://github.com/SAP/fiori-for-react/commit/4958a15))


### BREAKING CHANGES

* IconColor is renamed to SemanticColor
* Tab: renamed property iconColor to semanticColor
* Button: Remove activeIcon property
* ToggleButton: Remove activeIcon property

See also [UI5-WebComponents 0.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v0.12.0) release notes.





## [0.3.1-rc.1](https://github.com/SAP/fiori-for-react/compare/v0.3.1-rc.0...v0.3.1-rc.1) (2019-06-07)


### Features

* **ObjectPage:** Added Hide Header Button ([#28](https://github.com/SAP/fiori-for-react/issues/28)) ([5509098](https://github.com/SAP/fiori-for-react/commit/5509098))





## [0.3.1-rc.0](https://github.com/SAP/fiori-for-react/compare/v0.3.0...v0.3.1-rc.0) (2019-06-03)

**Note:** Version bump only for package @fiori-for-react/suite





# [0.3.0](https://github.com/SAP/fiori-for-react/compare/v0.2.0...v0.3.0) (2019-06-03)

### Features

* Updated UI5 WebComponents to v0.11.0 ([#22](https://github.com/SAP/fiori-for-react/issues/22)) ([7dcf22b](https://github.com/SAP/fiori-for-react/commit/7dcf22b))
* **FilterBar:** Initial Version ([422bdbd](https://github.com/SAP/fiori-for-react/commit/422bdbd))
* **FilterItem:** Initial Version ([19a23ec](https://github.com/SAP/fiori-for-react/commit/19a23ec))
* **VariantManagement:** Initial Version ([a1e9cbb](https://github.com/SAP/fiori-for-react/commit/a1e9cbb))
* **FilterBar:** renderSearch function ([94b468e](https://github.com/SAP/fiori-for-react/commit/94b468e))


### Bug Fixes

* **typing:** Fixed TypeScript Definitions ([440c097](https://github.com/SAP/fiori-for-react/commit/440c097))
* **WebComponentWrapper:** Fixed event handler removal after prop update ([2b93c12](https://github.com/SAP/fiori-for-react/commit/2b93c12))


### BREAKING CHANGES

* **FilterBar:** replaced boolean value with render function
* **List**: the "selectionChange" event param "items" has been renamed to "selectedItems".
* **List**: the "backgroundDesign" property has been removed, use the corresponding CSS variable (--_ui5_listitem_background_color) to alter the list items` background.
* **Panel**: the "backgroundDesign" property has been removed, use the corresponding CSS variables (--_ui5_panel_background_color) to alter the panel background.
* **DatePicker**: 'liveChange' event has been renamed to 'input'.
* **CheckBox**: property "readOnly" has been renamed to "readonly".
* **RadioButton**: property "readOnly" has been renamed to "readonly".

# 0.2.0 (2019-05-15)


### Bug Fixes

* **web-component-wrapper:** Slots must be passed as camelCase ([1671c17](https://github.com/SAP/fiori-for-react/commit/1671c17))


### Features

* **charts:** Added Loading Indicators ([15284b0](https://github.com/SAP/fiori-for-react/commit/15284b0))
* **VariantManagement:** Initial Version ([b8237ce](https://github.com/SAP/fiori-for-react/commit/b8237ce))
