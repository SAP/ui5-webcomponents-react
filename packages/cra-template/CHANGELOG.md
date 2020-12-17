# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
