# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
