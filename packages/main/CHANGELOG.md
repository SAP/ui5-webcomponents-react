# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.8.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.0...v0.8.1) (2020-02-06)


### Bug Fixes

* **AnalyticalTable:** fix flickering background colors when alternateRowColors is active ([#303](https://github.com/SAP/ui5-webcomponents-react/issues/303)) ([553c504](https://github.com/SAP/ui5-webcomponents-react/commit/553c5048065802b5f3b772a60d6e37ede1f0d2b4))
* **AnalyticalTable:** Fix intendation for Tree Table Level 4 and deeper ([9fe072c](https://github.com/SAP/ui5-webcomponents-react/commit/9fe072ce9f447570fd1239242fa9ac705b0a2838))
* **AnalyticalTable:** fix minRows + loading behaviour ([#304](https://github.com/SAP/ui5-webcomponents-react/issues/304)) ([253a0c8](https://github.com/SAP/ui5-webcomponents-react/commit/253a0c8b2d949ea266423d29ca4e415fc3ebd4d2))
* **withWebComponent:** Fix crash if WebComponent is not present yet ([c1cbb8d](https://github.com/SAP/ui5-webcomponents-react/commit/c1cbb8dc128568b9e0ed8d0d0919b06a50799d61))





# [0.8.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.3...v0.8.0) (2020-02-04)


### Bug Fixes

* **AnalyticalTable:** fix broken empty row visualization ([#296](https://github.com/SAP/ui5-webcomponents-react/issues/296)) ([c76f199](https://github.com/SAP/ui5-webcomponents-react/commit/c76f19909127e12caddf12279f4bdfcf2556eb99))
* **AnalyticalTable:** Table should always call the most recent version of onColumnsReordered ([#301](https://github.com/SAP/ui5-webcomponents-react/issues/301)) ([3b9e97c](https://github.com/SAP/ui5-webcomponents-react/commit/3b9e97c2832d35d3c53f6ecce80a03fcd24ab730))
* **ObjectPage:** fix crash when unmounted ObjectPage tries to asynchronously set scrollbar height ([#294](https://github.com/SAP/ui5-webcomponents-react/issues/294)) ([7ed965e](https://github.com/SAP/ui5-webcomponents-react/commit/7ed965e0187d0fd767fee0a778fa6834099e3a1e))


### Features

* **AnalyticalTable:** add experimental feature to determine column widths based on content ([#295](https://github.com/SAP/ui5-webcomponents-react/issues/295)) ([88a98ce](https://github.com/SAP/ui5-webcomponents-react/commit/88a98ce5d866bfe7ef89d004a74d6f760ad62ce9))





## [0.7.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.2...v0.7.3) (2020-01-24)


### Bug Fixes

* **AnalyticalTable:** Fix hAlign and vAlign attributes on column ([#290](https://github.com/SAP/ui5-webcomponents-react/issues/290)) ([49d125e](https://github.com/SAP/ui5-webcomponents-react/commit/49d125e90f0d685e39d77111566629d4466a30a3))
* **Form:** Accept common props ([#291](https://github.com/SAP/ui5-webcomponents-react/issues/291)) ([12c3d79](https://github.com/SAP/ui5-webcomponents-react/commit/12c3d799764d06846a27d9ccea84fc4ad270ae58))





## [0.7.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.1...v0.7.2) (2020-01-23)


### Bug Fixes

* **AnalyticalTable:** remove double scrollbars on windows ([#283](https://github.com/SAP/ui5-webcomponents-react/issues/283)) ([b269da3](https://github.com/SAP/ui5-webcomponents-react/commit/b269da3a7f850221dfd360b902a22c997cbf1259))
* **ObjectPage:** Don't crash when conditional rendering is used for children ([#284](https://github.com/SAP/ui5-webcomponents-react/issues/284)) ([5adfc15](https://github.com/SAP/ui5-webcomponents-react/commit/5adfc1585caa1d29815466b05f124960a12763e4))
* **ObjectPage:** fix empty section content when dynamically adding sections ([#282](https://github.com/SAP/ui5-webcomponents-react/issues/282)) ([bdf2c95](https://github.com/SAP/ui5-webcomponents-react/commit/bdf2c955266e67c8d6225b4bd2419cab98892533))
* **ObjectPage:** Fix floating of custom header content ([#288](https://github.com/SAP/ui5-webcomponents-react/issues/288)) ([c4568b9](https://github.com/SAP/ui5-webcomponents-react/commit/c4568b9f9e18821e3cda9246b41b1fade19392f1))
* **ObjectPage:** Fix size of collapsed avatar when passed as ReactElement ([#286](https://github.com/SAP/ui5-webcomponents-react/issues/286)) ([7e090ba](https://github.com/SAP/ui5-webcomponents-react/commit/7e090ba8f48d68982ab7ee8e30fefe1ac5bc7419))





## [0.7.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0...v0.7.1) (2020-01-21)


### Bug Fixes

* **AnalyticalTable:** re-enable setting isVisible on column to show/hide columns ([#278](https://github.com/SAP/ui5-webcomponents-react/issues/278)) ([624e84f](https://github.com/SAP/ui5-webcomponents-react/commit/624e84f876b6d421eba02bbfd07c223a1165b5d2))
* **Avatar:** Don't crash onClick when no handler is passed ([#276](https://github.com/SAP/ui5-webcomponents-react/issues/276)) ([eedb9f8](https://github.com/SAP/ui5-webcomponents-react/commit/eedb9f84f7266294f2d802fc9fc1103528196346)), closes [#272](https://github.com/SAP/ui5-webcomponents-react/issues/272)
* **Form:** Use shared context for Form and FormItem ([#275](https://github.com/SAP/ui5-webcomponents-react/issues/275)) ([b403bdc](https://github.com/SAP/ui5-webcomponents-react/commit/b403bdcce5bc57947c878b982206f1a4cb42cc80)), closes [#274](https://github.com/SAP/ui5-webcomponents-react/issues/274)
* **ObjectPage:** Don't wrap header content if image is an avatar ([#277](https://github.com/SAP/ui5-webcomponents-react/issues/277)) ([bd87102](https://github.com/SAP/ui5-webcomponents-react/commit/bd871023f902027b87ef848e13d79c86e3321d4f)), closes [#273](https://github.com/SAP/ui5-webcomponents-react/issues/273)





# [0.7.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.8...v0.7.0) (2020-01-17)


### Bug Fixes

* **AnalyticalTable:** Each column can have groupable, sortable, filterable options ([#264](https://github.com/SAP/ui5-webcomponents-react/issues/264)) ([7e8c01f](https://github.com/SAP/ui5-webcomponents-react/commit/7e8c01f0b45b4edcceb8274c818bebe2323d3ad4))
* **AnalyticalTable:** fix resize behavior of hidden columns and columns with fixed width ([#271](https://github.com/SAP/ui5-webcomponents-react/issues/271)) ([b6b829e](https://github.com/SAP/ui5-webcomponents-react/commit/b6b829e7d706a2eb71ad5fe2cb7f2b9381897208))
* **Loader:** Call usePassThroughHooks early return ([#266](https://github.com/SAP/ui5-webcomponents-react/issues/266)) ([0ee9a81](https://github.com/SAP/ui5-webcomponents-react/commit/0ee9a81575300290cb5ca3551d067a88c6daffab))





# [0.7.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.7...v0.7.0-rc.8) (2020-01-14)


### Bug Fixes

* **AnalyticalTable:** Fix resizing ([#261](https://github.com/SAP/ui5-webcomponents-react/issues/261)) ([6cbb35d](https://github.com/SAP/ui5-webcomponents-react/commit/6cbb35d9779167288d9499033e964da9833b93b6))
* **AnalyticalTable:** fix table resize for hidden columns ([#262](https://github.com/SAP/ui5-webcomponents-react/issues/262)) ([b3f155f](https://github.com/SAP/ui5-webcomponents-react/commit/b3f155f82966266c954b54d6626728e7e935df86))


### Features

* **Components:** Pass data-, aria- and id props to rendered component ([#263](https://github.com/SAP/ui5-webcomponents-react/issues/263)) ([295b8df](https://github.com/SAP/ui5-webcomponents-react/commit/295b8dfd6b3b947bf31a110e7b28bd4e55c1f652))





# [0.7.0-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.6...v0.7.0-rc.7) (2020-01-08)


### Bug Fixes

* **SegmentedButton:** check if ref to html element still exists before accessing members on it ([#260](https://github.com/SAP/ui5-webcomponents-react/issues/260)) ([c9788c9](https://github.com/SAP/ui5-webcomponents-react/commit/c9788c9))





# [0.7.0-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.5...v0.7.0-rc.6) (2019-12-20)


### Bug Fixes

* **AnalyticalTable:** Fix selectedRow background color with alernateRowColor ([98774d8](https://github.com/SAP/ui5-webcomponents-react/commit/98774d8))





# [0.7.0-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.1...v0.7.0-rc.5) (2019-12-20)


### Bug Fixes

* **AnalyticalTable:** fix wrong column order on consecutive column reorder events ([#233](https://github.com/SAP/ui5-webcomponents-react/issues/233)) ([f94a6ff](https://github.com/SAP/ui5-webcomponents-react/commit/f94a6ff))
* **ObjectPage:** Prevent flickering and fix scroll to section ([#245](https://github.com/SAP/ui5-webcomponents-react/issues/245)) ([4731573](https://github.com/SAP/ui5-webcomponents-react/commit/4731573))
* **ShellBarItem:** Fix wrong typing ([#254](https://github.com/SAP/ui5-webcomponents-react/issues/254)) ([d2bc4c5](https://github.com/SAP/ui5-webcomponents-react/commit/d2bc4c5))


### Code Refactoring

* **AnalyticalTable:** update react-table and replace grid with absolute layout ([#238](https://github.com/SAP/ui5-webcomponents-react/issues/238)) ([e9bc297](https://github.com/SAP/ui5-webcomponents-react/commit/e9bc297))
* **ThemeProvider:** Remove custom Theme Injection ([#241](https://github.com/SAP/ui5-webcomponents-react/issues/241)) ([22729e2](https://github.com/SAP/ui5-webcomponents-react/commit/22729e2))


### Features

* **AnalyticalTable:** Add overscanCount prop ([#231](https://github.com/SAP/ui5-webcomponents-react/issues/231)) ([c939c32](https://github.com/SAP/ui5-webcomponents-react/commit/c939c32))
* **AnalyticalTable:** Add prop selectionMode ([#258](https://github.com/SAP/ui5-webcomponents-react/issues/258)) ([f322bd0](https://github.com/SAP/ui5-webcomponents-react/commit/f322bd0))
* **AnalyticalTable:** Reordern columns with drag and drop ([#229](https://github.com/SAP/ui5-webcomponents-react/issues/229)) ([b208822](https://github.com/SAP/ui5-webcomponents-react/commit/b208822))
* **AnalyticalTable:** Update react-table to 7.0.0-beta.20 ([#237](https://github.com/SAP/ui5-webcomponents-react/issues/237)) ([530917c](https://github.com/SAP/ui5-webcomponents-react/commit/530917c))
* **AnalyticalTable:** Update react-table to v7.0.0-rc.15 ([#257](https://github.com/SAP/ui5-webcomponents-react/issues/257)) ([373fe5d](https://github.com/SAP/ui5-webcomponents-react/commit/373fe5d))
* **AnalyticalTable:** Update to react-table rc.10 ([#253](https://github.com/SAP/ui5-webcomponents-react/issues/253)) ([e24561c](https://github.com/SAP/ui5-webcomponents-react/commit/e24561c))
* **Form:** initial Implementation ([#242](https://github.com/SAP/ui5-webcomponents-react/issues/242)) ([c4c2848](https://github.com/SAP/ui5-webcomponents-react/commit/c4c2848))
* **ObjectPage:** Introduce Breadcrumbs and key infos ([#246](https://github.com/SAP/ui5-webcomponents-react/issues/246)) ([6f44a72](https://github.com/SAP/ui5-webcomponents-react/commit/6f44a72))
* **WebComponents:** Update to v1.0.0-rc.5, add ProductSwitch Component ([#236](https://github.com/SAP/ui5-webcomponents-react/issues/236)) ([1a2c9b4](https://github.com/SAP/ui5-webcomponents-react/commit/1a2c9b4))


### BREAKING CHANGES

* **AnalyticalTable:** Replace prop `selectable` with `selectionMode`
* **AnalyticalTable:** Update `react-table` to `v7.0.0-rc.15`
* **AnalyticalTable:** replaced prop `selectedRowKey` with `selectedRowIds` (Object of rowIds)
* **AnalyticalTable:** Update to react-table `7.0.0-rc.10`
* **AnalyticalTable:** Update `react-table` to `7.0.0-rc.5`
* **ThemeProvider:** Removed prop `noInjectThemeProperties` as this is now handled by the UI5 Web Components
* **WebComponents:** Icon import paths changed from `@ui5/webcomponents/dist/icons/add.js` to `@ui5/webcomponents-icons/dist/icons/add.js`.
* **WebComponents:** **Icon**: prop `src` was renamed to `name`
* **WebComponents:** **Icon**: the `sap-icon://` prefix was removed
* **WebComponents:** **ShellBar** prop `icon` was renamed to `startButton`
* **WebComponents:** **ShellBarItem**: prop `src` was renamed to `name`
* **WebComponents:** **Card**: `avatar` prop now accepts a node instead of a string

Please also check the [UI5 Web Components Release Notes](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.5).





# [0.7.0-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/@ui5/webcomponents-react@0.7.0-rc.3...@ui5/webcomponents-react@0.7.0-rc.4) (2019-12-13)


### Features

* **Form:** initial Implementation ([#242](https://github.com/SAP/ui5-webcomponents-react/issues/242)) ([c4c2848](https://github.com/SAP/ui5-webcomponents-react/commit/c4c2848))





# [0.7.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/@ui5/webcomponents-react@0.7.0-rc.2...@ui5/webcomponents-react@0.7.0-rc.3) (2019-12-11)

**Note:** Version bump only for package @ui5/webcomponents-react





# 0.7.0-rc.2 (2019-12-11)


### Bug Fixes

* **AnalyticalTable:** fix wrong column order on consecutive column reorder events ([#233](https://github.com/SAP/ui5-webcomponents-react/issues/233)) ([f94a6ff](https://github.com/SAP/ui5-webcomponents-react/commit/f94a6ff))
* **ObjectPage:** Prevent flickering and fix scroll to section ([#245](https://github.com/SAP/ui5-webcomponents-react/issues/245)) ([4731573](https://github.com/SAP/ui5-webcomponents-react/commit/4731573))


### Code Refactoring

* **AnalyticalTable:** update react-table and replace grid with absolute layout ([#238](https://github.com/SAP/ui5-webcomponents-react/issues/238)) ([e9bc297](https://github.com/SAP/ui5-webcomponents-react/commit/e9bc297))
* **ThemeProvider:** Remove custom Theme Injection ([#241](https://github.com/SAP/ui5-webcomponents-react/issues/241)) ([22729e2](https://github.com/SAP/ui5-webcomponents-react/commit/22729e2))


### Features

* **AnalyticalTable:** Add overscanCount prop ([#231](https://github.com/SAP/ui5-webcomponents-react/issues/231)) ([c939c32](https://github.com/SAP/ui5-webcomponents-react/commit/c939c32))
* **AnalyticalTable:** Reordern columns with drag and drop ([#229](https://github.com/SAP/ui5-webcomponents-react/issues/229)) ([b208822](https://github.com/SAP/ui5-webcomponents-react/commit/b208822))
* **AnalyticalTable:** Update react-table to 7.0.0-beta.20 ([#237](https://github.com/SAP/ui5-webcomponents-react/issues/237)) ([530917c](https://github.com/SAP/ui5-webcomponents-react/commit/530917c))
* **WebComponents:** Update to v1.0.0-rc.5, add ProductSwitch Component ([#236](https://github.com/SAP/ui5-webcomponents-react/issues/236)) ([1a2c9b4](https://github.com/SAP/ui5-webcomponents-react/commit/1a2c9b4))


### BREAKING CHANGES

* **AnalyticalTable:** Update `react-table` to `7.0.0-rc.5`
* **ThemeProvider:** Removed prop `noInjectThemeProperties` as this is now handled by the UI5 Web Components
* **WebComponents:** Icon import paths changed from `@ui5/webcomponents/dist/icons/add.js` to `@ui5/webcomponents-icons/dist/icons/add.js`.
* **WebComponents:** **Icon**: prop `src` was renamed to `name`
* **WebComponents:** **Icon**: the `sap-icon://` prefix was removed
* **WebComponents:** **ShellBar** prop `icon` was renamed to `startButton`
* **WebComponents:** **ShellBarItem**: prop `src` was renamed to `name`
* **WebComponents:** **Card**: `avatar` prop now accepts a node instead of a string

Please also check the [UI5 Web Components Release Notes](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.5).



# 0.7.0-rc.1 (2019-11-19)


### Bug Fixes

* **AnalyticalTable:** Loading Placeholder now respects show prop of columns ([#224](https://github.com/SAP/ui5-webcomponents-react/issues/224)) ([fe98dcb](https://github.com/SAP/ui5-webcomponents-react/commit/fe98dcb))
* **AnalyticalTable:** Resize table content correctly if columns are hidden or minWidth is set ([#228](https://github.com/SAP/ui5-webcomponents-react/issues/228)) ([af1aadc](https://github.com/SAP/ui5-webcomponents-react/commit/af1aadc))
* **Text:** Show ellipsis if text is overflowing at default width ([#225](https://github.com/SAP/ui5-webcomponents-react/issues/225)) ([5b78651](https://github.com/SAP/ui5-webcomponents-react/commit/5b78651))



# 0.7.0-rc.0 (2019-11-12)


### Bug Fixes

* **AnalyticalTable:** Allow copy cell values in non-selectable mode ([#210](https://github.com/SAP/ui5-webcomponents-react/issues/210)) ([2e1e339](https://github.com/SAP/ui5-webcomponents-react/commit/2e1e339))
* **AnalyticalTable:** Fix overscan count ([#208](https://github.com/SAP/ui5-webcomponents-react/issues/208)) ([a975e62](https://github.com/SAP/ui5-webcomponents-react/commit/a975e62))
* **AnalyticalTable:** Fix scrolling and resizing ([#206](https://github.com/SAP/ui5-webcomponents-react/issues/206)) ([fe50a43](https://github.com/SAP/ui5-webcomponents-react/commit/fe50a43))
* **AnalyticalTable:** Fixed resizable columns and horizontal scrolling ([#211](https://github.com/SAP/ui5-webcomponents-react/issues/211)) ([b289749](https://github.com/SAP/ui5-webcomponents-react/commit/b289749))
* **AnalyticalTable:** return correct item key for rerenders ([#216](https://github.com/SAP/ui5-webcomponents-react/issues/216)) ([4b1891f](https://github.com/SAP/ui5-webcomponents-react/commit/4b1891f))
* **Notification:** Add onClose prop, fix semantic-icon size ([#220](https://github.com/SAP/ui5-webcomponents-react/issues/220)) ([ed6ae9b](https://github.com/SAP/ui5-webcomponents-react/commit/ed6ae9b))
* **Notification:** Removed/renamed props to adopt to UI5-Webcomponents conventions ([#223](https://github.com/SAP/ui5-webcomponents-react/issues/223)) ([5ac74de](https://github.com/SAP/ui5-webcomponents-react/commit/5ac74de))
* **ObjectPage:** enable scroll by dragging scrollbar ([#209](https://github.com/SAP/ui5-webcomponents-react/issues/209)) ([58b708d](https://github.com/SAP/ui5-webcomponents-react/commit/58b708d))
* **SegmentedButton:** call onClick prop on SegmentedButtonItem if set ([#218](https://github.com/SAP/ui5-webcomponents-react/issues/218)) ([bc9bef3](https://github.com/SAP/ui5-webcomponents-react/commit/bc9bef3))


### Features

* **AnalyticalTable:** Add prop alternateRowColor ([#212](https://github.com/SAP/ui5-webcomponents-react/issues/212)) ([d82d2d9](https://github.com/SAP/ui5-webcomponents-react/commit/d82d2d9))
* **AnalyticalTable:** Refactoring, add onRowExpandChange and placeholder loading ([#207](https://github.com/SAP/ui5-webcomponents-react/issues/207)) ([2ae4bf6](https://github.com/SAP/ui5-webcomponents-react/commit/2ae4bf6))
* **Notifications:** Add Notification and NotificationGroup component ([#171](https://github.com/SAP/ui5-webcomponents-react/issues/171)) ([78200e2](https://github.com/SAP/ui5-webcomponents-react/commit/78200e2))
* **ObjectPage:** Enable selecting a subSection by prop ([#213](https://github.com/SAP/ui5-webcomponents-react/issues/213)) ([f927ab3](https://github.com/SAP/ui5-webcomponents-react/commit/f927ab3))


### BREAKING CHANGES

* **AnalyticalTable:** Removed unused prop `cellHeight`, use `rowHeight` instead
* **AnalyticalTable:** Removed unused prop `reactTableProps`
* **AnalyticalTable:** Removed unused prop `getTableProps`
* **AnalyticalTable:** Removed unused prop `getHeaderGroupsProps`
* **AnalyticalTable:** Removed unused prop `getHeaderProps`
* **AnalyticalTable:** Removed unused prop `getRowProps`
* **AnalyticalTable:** Removed unused prop `getCellProps`



## 0.6.2 (2019-10-23)


### Bug Fixes

* **AnalyticalTable:** Add missing property to dependency array ([#203](https://github.com/SAP/ui5-webcomponents-react/issues/203)) ([6b2a135](https://github.com/SAP/ui5-webcomponents-react/commit/6b2a135))



## 0.6.1 (2019-10-22)


### Bug Fixes

* **AnalyticalTable:** Fix column width reduce function ([#201](https://github.com/SAP/ui5-webcomponents-react/issues/201)) ([68bec1a](https://github.com/SAP/ui5-webcomponents-react/commit/68bec1a))



# 0.6.0 (2019-10-21)



# 0.6.0-rc.23 (2019-10-21)


### Bug Fixes

* **AnalyticalTable:** Handle disableGrouping in column level ([#198](https://github.com/SAP/ui5-webcomponents-react/issues/198)) ([88b2a44](https://github.com/SAP/ui5-webcomponents-react/commit/88b2a44)), closes [#193](https://github.com/SAP/ui5-webcomponents-react/issues/193)


### Features

* **AnalyticalTable:** horizontal scrolling ([#199](https://github.com/SAP/ui5-webcomponents-react/issues/199)) ([0ad70bc](https://github.com/SAP/ui5-webcomponents-react/commit/0ad70bc))
* **Loader/Spinner:** Add `delay` prop ([#197](https://github.com/SAP/ui5-webcomponents-react/issues/197)) ([de2310d](https://github.com/SAP/ui5-webcomponents-react/commit/de2310d)), closes [#67](https://github.com/SAP/ui5-webcomponents-react/issues/67)



# 0.6.0-rc.22 (2019-10-18)


### Bug Fixes

* **AnalyticalTable:** Fix Grouping ([#190](https://github.com/SAP/ui5-webcomponents-react/issues/190)) ([12ecc5d](https://github.com/SAP/ui5-webcomponents-react/commit/12ecc5d)), closes [#117](https://github.com/SAP/ui5-webcomponents-react/issues/117)
* **ObjectPage:** render image in ObjectPage as img tag when a string is passed in ([#191](https://github.com/SAP/ui5-webcomponents-react/issues/191)) ([b2f6f1a](https://github.com/SAP/ui5-webcomponents-react/commit/b2f6f1a))


### BREAKING CHANGES

* **AnalyticalTable:** If used as a tree table, the prop `isTreeTable` is now mandatory



# 0.6.0-rc.21 (2019-10-18)


### Bug Fixes

* **SideNavigation:** Fix Rendering and Event Handling ([#189](https://github.com/SAP/ui5-webcomponents-react/issues/189)) ([dc70d57](https://github.com/SAP/ui5-webcomponents-react/commit/dc70d57))



# 0.6.0-rc.20 (2019-10-17)


### Bug Fixes

* **ObjecPage:** fix scrollbar width on windows ([#188](https://github.com/SAP/ui5-webcomponents-react/issues/188)) ([8af1a4c](https://github.com/SAP/ui5-webcomponents-react/commit/8af1a4c))



# 0.6.0-rc.19 (2019-10-16)


### Bug Fixes

* **FilterBar:** fix always showing Scrollbar on windows ([#187](https://github.com/SAP/ui5-webcomponents-react/issues/187)) ([8f85bc1](https://github.com/SAP/ui5-webcomponents-react/commit/8f85bc1))



# 0.6.0-rc.18 (2019-10-15)


### Features

* **AnalyticalTable:** control row selection by prop ([#186](https://github.com/SAP/ui5-webcomponents-react/issues/186)) ([b4fcec8](https://github.com/SAP/ui5-webcomponents-react/commit/b4fcec8))



# 0.6.0-rc.17 (2019-10-15)


### Features

* **AnalyticalTable:** offer scrollTo and scrollToItem methods on table ref ([#185](https://github.com/SAP/ui5-webcomponents-react/issues/185)) ([4a1c25a](https://github.com/SAP/ui5-webcomponents-react/commit/4a1c25a))



# 0.6.0-rc.16 (2019-10-14)


### Features

* **AnalyticalTable:** Added option to use tree-tables. ([#178](https://github.com/SAP/ui5-webcomponents-react/issues/178)) ([37c3c1f](https://github.com/SAP/ui5-webcomponents-react/commit/37c3c1f))



# 0.6.0-rc.15 (2019-10-14)


### Bug Fixes

* **WebComponents:** Update to rc.4 ([#184](https://github.com/SAP/ui5-webcomponents-react/issues/184)) ([2cc3abc](https://github.com/SAP/ui5-webcomponents-react/commit/2cc3abc))


### Features

* **AnalytictalTable:** Added `onGroup` prop ([#183](https://github.com/SAP/ui5-webcomponents-react/issues/183)) ([1574057](https://github.com/SAP/ui5-webcomponents-react/commit/1574057))


### BREAKING CHANGES

* **AnalytictalTable:** Rename prop `pivotBy` to `groupBy`



# 0.6.0-rc.14 (2019-10-10)


### Bug Fixes

* **withWebComponent:** Bind unknown events & cleanup ([#182](https://github.com/SAP/ui5-webcomponents-react/issues/182)) ([b6e2a66](https://github.com/SAP/ui5-webcomponents-react/commit/b6e2a66)), closes [#181](https://github.com/SAP/ui5-webcomponents-react/issues/181)


### BREAKING CHANGES

* **withWebComponent:** Removed `innerStyles` prop in favor of css variables and UI5's `addCustomCSS` API



# 0.6.0-rc.13 (2019-10-10)


### Bug Fixes

* **Carousel:** Fix icon import ([#180](https://github.com/SAP/ui5-webcomponents-react/issues/180)) ([42e88af](https://github.com/SAP/ui5-webcomponents-react/commit/42e88af)), closes [#177](https://github.com/SAP/ui5-webcomponents-react/issues/177)


### Features

* **ObjectPage:** add alwaysShowContentHeader and showTitleInHeaderContent ([#179](https://github.com/SAP/ui5-webcomponents-react/issues/179)) ([cd63eff](https://github.com/SAP/ui5-webcomponents-react/commit/cd63eff))



# 0.6.0-rc.12 (2019-10-09)


### Bug Fixes

* **AnalyticalTable:** add info in onRowSelected event whether row is selected or not ([#176](https://github.com/SAP/ui5-webcomponents-react/issues/176)) ([4d6eaa4](https://github.com/SAP/ui5-webcomponents-react/commit/4d6eaa4))


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


### Bug Fixes

* **AnalyticalTable:** fix table row selection ([#174](https://github.com/SAP/ui5-webcomponents-react/issues/174)) ([9aa6380](https://github.com/SAP/ui5-webcomponents-react/commit/9aa6380))



# 0.6.0-rc.10 (2019-10-02)


### Bug Fixes

* **AnalyticalTable:** Don't crash when no columns provided ([bed976b](https://github.com/SAP/ui5-webcomponents-react/commit/bed976b))



# 0.6.0-rc.9 (2019-10-01)


### Bug Fixes

* **SideNavigation:** Don't render zero if no footerItems present ([#165](https://github.com/SAP/ui5-webcomponents-react/issues/165)) ([7e4946a](https://github.com/SAP/ui5-webcomponents-react/commit/7e4946a)), closes [#164](https://github.com/SAP/ui5-webcomponents-react/issues/164)
* **web-components:** Fix tooltip handling ([#166](https://github.com/SAP/ui5-webcomponents-react/issues/166)) ([d721e2b](https://github.com/SAP/ui5-webcomponents-react/commit/d721e2b)), closes [#164](https://github.com/SAP/ui5-webcomponents-react/issues/164)



# 0.6.0-rc.8 (2019-09-30)



# 0.6.0-rc.7 (2019-09-26)


### Bug Fixes

* **SideNavigation:** fix tooltip support ([#156](https://github.com/SAP/ui5-webcomponents-react/issues/156)) ([72cced3](https://github.com/SAP/ui5-webcomponents-react/commit/72cced3)), closes [#155](https://github.com/SAP/ui5-webcomponents-react/issues/155)



# 0.6.0-rc.6 (2019-09-26)


### Features

* **Loader:** Initial Implementation ([#153](https://github.com/SAP/ui5-webcomponents-react/issues/153)) ([6621804](https://github.com/SAP/ui5-webcomponents-react/commit/6621804))



# 0.6.0-rc.5 (2019-09-25)



# 0.6.0-rc.4 (2019-09-25)


### Bug Fixes

* **main:** Fix wrong Button import ([#151](https://github.com/SAP/ui5-webcomponents-react/issues/151)) ([05dbf7f](https://github.com/SAP/ui5-webcomponents-react/commit/05dbf7f))



# 0.6.0-rc.2 (2019-09-24)


### Features

* **Charts:** enable passing width and height in percentage ([#147](https://github.com/SAP/ui5-webcomponents-react/issues/147)) ([0d680ff](https://github.com/SAP/ui5-webcomponents-react/commit/0d680ff))



# 0.6.0-rc.1 (2019-09-24)


### Bug Fixes

* **FilterBar:** Add scrolling and wrapping for small screens ([#143](https://github.com/SAP/ui5-webcomponents-react/issues/143)) ([55dc57d](https://github.com/SAP/ui5-webcomponents-react/commit/55dc57d))


### Code Refactoring

* **framework:** Clean up legacy code and improve bundle size ([#135](https://github.com/SAP/ui5-webcomponents-react/issues/135)) ([7ab3122](https://github.com/SAP/ui5-webcomponents-react/commit/7ab3122))


### BREAKING CHANGES

* **framework:** `base`: Removed `KeyCodes` export, please use `event.key` instead
* **framework:** `base`: Removed `pushElementBackInScreen`
* **framework:** `base`: Removed `fonts` exports, please use `parameters` instead



## 0.5.1-rc.17 (2019-09-23)



## 0.5.1-rc.16 (2019-09-20)


### Features

* **SideNavigation:** Initial Component Implementation ([#132](https://github.com/SAP/ui5-webcomponents-react/issues/132)) ([da53e3e](https://github.com/SAP/ui5-webcomponents-react/commit/da53e3e))



## 0.5.1-rc.15 (2019-09-18)


### Features

* **AnalyticalTable:** enable passing additional props to react-table ([#131](https://github.com/SAP/ui5-webcomponents-react/issues/131)) ([61cd83f](https://github.com/SAP/ui5-webcomponents-react/commit/61cd83f))



## 0.5.1-rc.14 (2019-09-18)


### Features

* **Breadcrumbs:** Initial Component Implementation ([#129](https://github.com/SAP/ui5-webcomponents-react/issues/129)) ([ada4c3a](https://github.com/SAP/ui5-webcomponents-react/commit/ada4c3a))



## 0.5.1-rc.13 (2019-09-18)


### Code Refactoring

* **MessageBox:** Rename prop visible to open ([#128](https://github.com/SAP/ui5-webcomponents-react/issues/128)) ([1487862](https://github.com/SAP/ui5-webcomponents-react/commit/1487862))
* **ProgressIndicator:** Remove visible prop ([#126](https://github.com/SAP/ui5-webcomponents-react/issues/126)) ([100e6ff](https://github.com/SAP/ui5-webcomponents-react/commit/100e6ff))
* **SegmentedButton:** Remove visible prop and rename enabled ([#125](https://github.com/SAP/ui5-webcomponents-react/issues/125)) ([174447a](https://github.com/SAP/ui5-webcomponents-react/commit/174447a))


### BREAKING CHANGES

* **MessageBox:** `MessageBox`: Renamed prop `visible` to `open`
* **MessageBox:** `MessageBoxButton`: deleted export as this component was intended for internal use only
* **ProgressIndicator:** removed `visible` prop

[ci skip]
* **SegmentedButton:** `SegmentedButtonItem` removed `visible` prop, please use conditional rendering instead
* **SegmentedButton:** `SegmentedButton` and `SegmentedButtonItem` prop enabled is now renamed to disabled and logic is inverted
[ci skip]



## 0.5.1-rc.12 (2019-09-17)


### Features

* **AnalyticalTable:** add onSort callback to Table ([#123](https://github.com/SAP/ui5-webcomponents-react/issues/123)) ([de7843f](https://github.com/SAP/ui5-webcomponents-react/commit/de7843f))
* **AnalyticalTable:** make columns resizable ([#124](https://github.com/SAP/ui5-webcomponents-react/issues/124)) ([556ff59](https://github.com/SAP/ui5-webcomponents-react/commit/556ff59))



## 0.5.1-rc.11 (2019-09-16)


### Bug Fixes

* **ThemeProvider:** create own style tag containing css variables ([#121](https://github.com/SAP/ui5-webcomponents-react/issues/121)) ([19d8cff](https://github.com/SAP/ui5-webcomponents-react/commit/19d8cff))



## 0.5.1-rc.10 (2019-09-14)


### Bug Fixes

* **ThemeProvider:** wrapping injectThemeVariables in requestAnimationFrame so that it won´t interfere with style tag initialization ([#120](https://github.com/SAP/ui5-webcomponents-react/issues/120)) ([77cb45d](https://github.com/SAP/ui5-webcomponents-react/commit/77cb45d))



## 0.5.1-rc.9 (2019-09-13)


### Bug Fixes

* **VariantManagement:** disabled prop disables onClick events ([#119](https://github.com/SAP/ui5-webcomponents-react/issues/119)) ([ccdf3dc](https://github.com/SAP/ui5-webcomponents-react/commit/ccdf3dc))



## 0.5.1-rc.8 (2019-09-13)


### Code Refactoring

* **Table:** Update to react-table v7 ([#110](https://github.com/SAP/ui5-webcomponents-react/issues/110)) ([e1c5ad7](https://github.com/SAP/ui5-webcomponents-react/commit/e1c5ad7))


### BREAKING CHANGES

* **Table:** upgrade react-table from 6.10.0 to 7.0.0-alpha.32



## 0.5.1-rc.7 (2019-08-29)



## 0.5.1-rc.6 (2019-08-29)



## 0.5.1-rc.5 (2019-08-28)



## 0.5.1-rc.4 (2019-08-27)


### Documentation

* **Storybook:** Updated to 5.2 with Docs ([#106](https://github.com/SAP/ui5-webcomponents-react/issues/106)) ([45c0e21](https://github.com/SAP/ui5-webcomponents-react/commit/45c0e21))


### BREAKING CHANGES

* **Storybook:** Deleted internal component `CalendarHeader`
* **Storybook:** Deleted internal component `YearPicker`



## 0.5.1-rc.3 (2019-08-23)


### Code Refactoring

* **tests:** Replace karma with jest ([#105](https://github.com/SAP/ui5-webcomponents-react/issues/105)) ([2ebd8ab](https://github.com/SAP/ui5-webcomponents-react/commit/2ebd8ab))


### BREAKING CHANGES

* **tests:** Deleted export for TabBase (internal component)
* **tests:** Deleted export for ListItem (internal component)
* **tests:** Deleted export for ListItemBase (internal component)
* **tests:** Deleted export for DayPicker (internal component)
* **tests:** Deleted export for MonthPicker (internal component)
* **tests:** Deleted export for Popup (internal component)



## 0.5.1-rc.2 (2019-08-23)


### Features

* **ObjectPage:** Collapse header on scroll ([#104](https://github.com/SAP/ui5-webcomponents-react/issues/104)) ([6788b59](https://github.com/SAP/ui5-webcomponents-react/commit/6788b59))



## 0.5.1-rc.1 (2019-08-22)


### Features

* **Carousel:** Added Keyboard Navigation ([#103](https://github.com/SAP/ui5-webcomponents-react/issues/103)) ([e1299ed](https://github.com/SAP/ui5-webcomponents-react/commit/e1299ed))



## 0.5.1-rc.0 (2019-08-20)


### Bug Fixes

* **Carousel:** Hide Pagination Bar if not required ([#101](https://github.com/SAP/ui5-webcomponents-react/issues/101)) ([d6ec9b2](https://github.com/SAP/ui5-webcomponents-react/commit/d6ec9b2))
* **Spinner:** Accept style prop ([#100](https://github.com/SAP/ui5-webcomponents-react/issues/100)) ([f7a7958](https://github.com/SAP/ui5-webcomponents-react/commit/f7a7958)), closes [#94](https://github.com/SAP/ui5-webcomponents-react/issues/94)


### Features

* **ThemeProvider:** Add jss and noInjectThemeProperties props ([#102](https://github.com/SAP/ui5-webcomponents-react/issues/102)) ([8237b22](https://github.com/SAP/ui5-webcomponents-react/commit/8237b22))



# 0.5.0 (2019-08-15)



## 0.4.2-rc.18 (2019-08-15)



## 0.4.2-rc.17 (2019-08-12)



## 0.4.2-rc.16 (2019-08-08)



## 0.4.2-rc.15 (2019-08-05)


### Bug Fixes

* **Custom Components:** adding ref to CommonProps interface ([#84](https://github.com/SAP/ui5-webcomponents-react/issues/84)) ([bb612ec](https://github.com/SAP/ui5-webcomponents-react/commit/bb612ec))



## 0.4.2-rc.14 (2019-08-05)


### Bug Fixes

* **FilterBar:** Increase margin between FilterItems in FilterBar ([#80](https://github.com/SAP/ui5-webcomponents-react/issues/80)) ([ee94065](https://github.com/SAP/ui5-webcomponents-react/commit/ee94065))
* **ObjectPage:** Don't crash in default mode with only 1 child provided ([#81](https://github.com/SAP/ui5-webcomponents-react/issues/81)) ([2e5ddb5](https://github.com/SAP/ui5-webcomponents-react/commit/2e5ddb5))



## 0.4.2-rc.13 (2019-08-02)



## 0.4.2-rc.12 (2019-08-02)


### Bug Fixes

* **AnalyticalTable:** Header is now resizable ([#76](https://github.com/SAP/ui5-webcomponents-react/issues/76)) ([eadd61a](https://github.com/SAP/ui5-webcomponents-react/commit/eadd61a))



## 0.4.2-rc.11 (2019-08-02)


### Features

* **FilterItem:** Add MultiSelect option to FilterTypes ([#79](https://github.com/SAP/ui5-webcomponents-react/issues/79)) ([0665824](https://github.com/SAP/ui5-webcomponents-react/commit/0665824))



## 0.4.2-rc.10 (2019-08-02)


### Code Refactoring

* **VariantManagement:** removed unused prop enabled ([#77](https://github.com/SAP/ui5-webcomponents-react/issues/77)) ([5080316](https://github.com/SAP/ui5-webcomponents-react/commit/5080316))


### BREAKING CHANGES

* **VariantManagement:** Removed prop `enabled`, please use `disabled` instead. This change should not affect your applications, because `enabled` was never implemented.



## 0.4.2-rc.9 (2019-07-31)


### Bug Fixes

* **VariantManagement:** initialSelectedKey prop is working as intended ([#75](https://github.com/SAP/ui5-webcomponents-react/issues/75)) ([a5e4267](https://github.com/SAP/ui5-webcomponents-react/commit/a5e4267))



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


### Bug Fixes

* **FilterItem:** BusyIndicator is displayed when loading prop is true ([#63](https://github.com/SAP/ui5-webcomponents-react/issues/63)) ([9d88985](https://github.com/SAP/ui5-webcomponents-react/commit/9d88985))



## 0.4.1-rc.1 (2019-07-17)


### Bug Fixes

* **AnalyticalTable:** BusyIndicator is displayed when loading prop is true ([#61](https://github.com/SAP/ui5-webcomponents-react/issues/61)) ([f841ead](https://github.com/SAP/ui5-webcomponents-react/commit/f841ead))



## 0.4.1-rc.0 (2019-07-16)


### Bug Fixes

* **Spinner:** Enabled Spinning again ([#59](https://github.com/SAP/ui5-webcomponents-react/issues/59)) ([740891f](https://github.com/SAP/ui5-webcomponents-react/commit/740891f)), closes [#57](https://github.com/SAP/ui5-webcomponents-react/issues/57)



# 0.4.0 (2019-07-15)



## 0.3.2-rc.17 (2019-07-15)


### Features

* **AnalyticalTable:** Added option to create pivot tables ([#47](https://github.com/SAP/ui5-webcomponents-react/issues/47)) ([71b546d](https://github.com/SAP/ui5-webcomponents-react/commit/71b546d))



## 0.3.2-rc.16 (2019-07-12)


### Bug Fixes

* **ObjectPage:** Highlight selected section while scrolling ([#56](https://github.com/SAP/ui5-webcomponents-react/issues/56)) ([42a6a10](https://github.com/SAP/ui5-webcomponents-react/commit/42a6a10))



## 0.3.2-rc.15 (2019-07-11)


### Bug Fixes

* **ThemeProvider:** Only inject theme properties if they are not present ([#55](https://github.com/SAP/ui5-webcomponents-react/issues/55)) ([3ec61d5](https://github.com/SAP/ui5-webcomponents-react/commit/3ec61d5))



## 0.3.2-rc.14 (2019-07-10)


### Code Refactoring

* **Custom Components:** Expose HTML Element via ref in every component ([#54](https://github.com/SAP/ui5-webcomponents-react/issues/54)) ([c285ee6](https://github.com/SAP/ui5-webcomponents-react/commit/c285ee6))


### BREAKING CHANGES

* **Custom Components:** All Components now expose their root html node/the encapsulated Web Component via ref instead of the React instance.



## 0.3.2-rc.13 (2019-07-05)



## 0.3.2-rc.12 (2019-07-05)



## 0.3.2-rc.11 (2019-07-04)


*  feat(WebComponents): Updated to v1.0.0-rc.2 (#51) ([8a40deb](https://github.com/SAP/ui5-webcomponents-react/commit/8a40deb)), closes [#51](https://github.com/SAP/ui5-webcomponents-react/issues/51)


### BREAKING CHANGES

* **ShellBarItem**: prop `onPress` is renamed to `onClick`
* **Dialog**: remove prop `noHeader`
* **Popup**: remove prop `noHeader`
Please also check the [UI5 Web Components Release Notes](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.2)



## 0.3.2-rc.10 (2019-07-03)


### Bug Fixes

* **Table:** Fixed Table and adapt slot handling ([#50](https://github.com/SAP/ui5-webcomponents-react/issues/50)) ([2159ab1](https://github.com/SAP/ui5-webcomponents-react/commit/2159ab1))


### BREAKING CHANGES

* **Table:** Use prop `slot` instead of `data-ui5-slot`
* **Table:** **Table**: prop `rows` is replaced by `children`
* **Table:** **TableRow**: prop `header` is replaced by `children`



## 0.3.2-rc.9 (2019-07-02)


### Features

* **WebComponents:** Updated Wrappers to v1.0.0-rc.1 ([#48](https://github.com/SAP/ui5-webcomponents-react/issues/48)) ([ac6570c](https://github.com/SAP/ui5-webcomponents-react/commit/ac6570c)), closes [#43](https://github.com/SAP/ui5-webcomponents-react/issues/43)


### BREAKING CHANGES

* **WebComponents:** **Button**: `onPress` renamed to `onClick`
* **WebComponents:** **Card**: `onHeaderPress` renamed to `onHeaderClick`
* **WebComponents:** **Link**: `onPress` renamed to `onClick`
* **WebComponents:** **List**: `onItemPress` renamed to `onItemClick`
* **WebComponents:** **ShellBar**: `onNotificationsPress` renamed to `onNotificationsClick`
* **WebComponents:** **ShellBar**: `onProfilePress` renamed to `onProfileClick`
* **WebComponents:** **ShellBar**: `onProductSwitchPress` renamed to `onProductSwitchClick`
* **WebComponents:** **ShellBar**: `onLogoPress` renamed to `onLogoClick`
* **WebComponents:** **ShellBar**: `onCoPilotPress` renamed to `onCoPilotClick`
* **WebComponents:** **TimelineItem**: `onItemNamePress` renamed to `onItemNameClick`
* **WebComponents:** **ToggleButton**: `onPress` renamed to `onClick`



## 0.3.2-rc.8 (2019-07-01)


### Bug Fixes

* **fiori3:** Fixed Import in Ui5PopoverDomRef interface ([88326b4](https://github.com/SAP/ui5-webcomponents-react/commit/88326b4))



## 0.3.2-rc.7 (2019-07-01)


### Code Refactoring

* **withWebComponent:** replace innerComponentRef with ref for Web Components ([#44](https://github.com/SAP/ui5-webcomponents-react/issues/44)) ([08982ba](https://github.com/SAP/ui5-webcomponents-react/commit/08982ba))


### BREAKING CHANGES

* **withWebComponent:** Replaced `innerComponentRef` with `ref` to support React `RefObject`



## 0.3.2-rc.6 (2019-06-26)





# [0.7.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.0...v0.7.0-rc.1) (2019-11-19)


### Bug Fixes

* **AnalyticalTable:** Loading Placeholder now respects show prop of columns ([#224](https://github.com/SAP/ui5-webcomponents-react/issues/224)) ([fe98dcb](https://github.com/SAP/ui5-webcomponents-react/commit/fe98dcb))
* **AnalyticalTable:** Resize table content correctly if columns are hidden or minWidth is set ([#228](https://github.com/SAP/ui5-webcomponents-react/issues/228)) ([af1aadc](https://github.com/SAP/ui5-webcomponents-react/commit/af1aadc))
* **Text:** Show ellipsis if text is overflowing at default width ([#225](https://github.com/SAP/ui5-webcomponents-react/issues/225)) ([5b78651](https://github.com/SAP/ui5-webcomponents-react/commit/5b78651))





# [0.7.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.2...v0.7.0-rc.0) (2019-11-12)


### Bug Fixes

* **AnalyticalTable:** Allow copy cell values in non-selectable mode ([#210](https://github.com/SAP/ui5-webcomponents-react/issues/210)) ([2e1e339](https://github.com/SAP/ui5-webcomponents-react/commit/2e1e339))
* **AnalyticalTable:** Fix overscan count ([#208](https://github.com/SAP/ui5-webcomponents-react/issues/208)) ([a975e62](https://github.com/SAP/ui5-webcomponents-react/commit/a975e62))
* **AnalyticalTable:** Fix scrolling and resizing ([#206](https://github.com/SAP/ui5-webcomponents-react/issues/206)) ([fe50a43](https://github.com/SAP/ui5-webcomponents-react/commit/fe50a43))
* **AnalyticalTable:** Fixed resizable columns and horizontal scrolling ([#211](https://github.com/SAP/ui5-webcomponents-react/issues/211)) ([b289749](https://github.com/SAP/ui5-webcomponents-react/commit/b289749))
* **AnalyticalTable:** return correct item key for rerenders ([#216](https://github.com/SAP/ui5-webcomponents-react/issues/216)) ([4b1891f](https://github.com/SAP/ui5-webcomponents-react/commit/4b1891f))
* **Notification:** Add onClose prop, fix semantic-icon size ([#220](https://github.com/SAP/ui5-webcomponents-react/issues/220)) ([ed6ae9b](https://github.com/SAP/ui5-webcomponents-react/commit/ed6ae9b))
* **Notification:** Removed/renamed props to adopt to UI5-Webcomponents conventions ([#223](https://github.com/SAP/ui5-webcomponents-react/issues/223)) ([5ac74de](https://github.com/SAP/ui5-webcomponents-react/commit/5ac74de))
* **ObjectPage:** enable scroll by dragging scrollbar ([#209](https://github.com/SAP/ui5-webcomponents-react/issues/209)) ([58b708d](https://github.com/SAP/ui5-webcomponents-react/commit/58b708d))
* **SegmentedButton:** call onClick prop on SegmentedButtonItem if set ([#218](https://github.com/SAP/ui5-webcomponents-react/issues/218)) ([bc9bef3](https://github.com/SAP/ui5-webcomponents-react/commit/bc9bef3))


### Features

* **AnalyticalTable:** Add prop alternateRowColor ([#212](https://github.com/SAP/ui5-webcomponents-react/issues/212)) ([d82d2d9](https://github.com/SAP/ui5-webcomponents-react/commit/d82d2d9))
* **AnalyticalTable:** Refactoring, add onRowExpandChange and placeholder loading ([#207](https://github.com/SAP/ui5-webcomponents-react/issues/207)) ([2ae4bf6](https://github.com/SAP/ui5-webcomponents-react/commit/2ae4bf6))
* **Notifications:** Add Notification and NotificationGroup component ([#171](https://github.com/SAP/ui5-webcomponents-react/issues/171)) ([78200e2](https://github.com/SAP/ui5-webcomponents-react/commit/78200e2))
* **ObjectPage:** Enable selecting a subSection by prop ([#213](https://github.com/SAP/ui5-webcomponents-react/issues/213)) ([f927ab3](https://github.com/SAP/ui5-webcomponents-react/commit/f927ab3))


### BREAKING CHANGES

* **AnalyticalTable:** Removed unused prop `cellHeight`, use `rowHeight` instead
* **AnalyticalTable:** Removed unused prop `reactTableProps`
* **AnalyticalTable:** Removed unused prop `getTableProps`
* **AnalyticalTable:** Removed unused prop `getHeaderGroupsProps`
* **AnalyticalTable:** Removed unused prop `getHeaderProps`
* **AnalyticalTable:** Removed unused prop `getRowProps`
* **AnalyticalTable:** Removed unused prop `getCellProps`





## [0.6.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.1...v0.6.2) (2019-10-23)


### Bug Fixes

* **AnalyticalTable:** Add missing property to dependency array ([#203](https://github.com/SAP/ui5-webcomponents-react/issues/203)) ([6b2a135](https://github.com/SAP/ui5-webcomponents-react/commit/6b2a135))





## [0.6.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0...v0.6.1) (2019-10-22)


### Bug Fixes

* **AnalyticalTable:** Fix column width reduce function ([#201](https://github.com/SAP/ui5-webcomponents-react/issues/201)) ([68bec1a](https://github.com/SAP/ui5-webcomponents-react/commit/68bec1a))





# [0.6.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.23...v0.6.0) (2019-10-21)

**Note:** Version bump only for package @ui5/webcomponents-react





# [0.6.0-rc.23](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.22...v0.6.0-rc.23) (2019-10-21)


### Bug Fixes

* **AnalyticalTable:** Handle disableGrouping in column level ([#198](https://github.com/SAP/ui5-webcomponents-react/issues/198)) ([88b2a44](https://github.com/SAP/ui5-webcomponents-react/commit/88b2a44)), closes [#193](https://github.com/SAP/ui5-webcomponents-react/issues/193)


### Features

* **AnalyticalTable:** horizontal scrolling ([#199](https://github.com/SAP/ui5-webcomponents-react/issues/199)) ([0ad70bc](https://github.com/SAP/ui5-webcomponents-react/commit/0ad70bc))
* **Loader/Spinner:** Add `delay` prop ([#197](https://github.com/SAP/ui5-webcomponents-react/issues/197)) ([de2310d](https://github.com/SAP/ui5-webcomponents-react/commit/de2310d)), closes [#67](https://github.com/SAP/ui5-webcomponents-react/issues/67)





# [0.6.0-rc.22](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.21...v0.6.0-rc.22) (2019-10-18)


### Bug Fixes

* **AnalyticalTable:** Fix Grouping ([#190](https://github.com/SAP/ui5-webcomponents-react/issues/190)) ([12ecc5d](https://github.com/SAP/ui5-webcomponents-react/commit/12ecc5d)), closes [#117](https://github.com/SAP/ui5-webcomponents-react/issues/117)
* **ObjectPage:** render image in ObjectPage as img tag when a string is passed in ([#191](https://github.com/SAP/ui5-webcomponents-react/issues/191)) ([b2f6f1a](https://github.com/SAP/ui5-webcomponents-react/commit/b2f6f1a))


### BREAKING CHANGES

* **AnalyticalTable:** If used as a tree table, the prop `isTreeTable` is now mandatory





# [0.6.0-rc.21](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.20...v0.6.0-rc.21) (2019-10-18)


### Bug Fixes

* **SideNavigation:** Fix Rendering and Event Handling ([#189](https://github.com/SAP/ui5-webcomponents-react/issues/189)) ([dc70d57](https://github.com/SAP/ui5-webcomponents-react/commit/dc70d57))





# [0.6.0-rc.20](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.19...v0.6.0-rc.20) (2019-10-17)


### Bug Fixes

* **ObjecPage:** fix scrollbar width on windows ([#188](https://github.com/SAP/ui5-webcomponents-react/issues/188)) ([8af1a4c](https://github.com/SAP/ui5-webcomponents-react/commit/8af1a4c))





# [0.6.0-rc.19](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.18...v0.6.0-rc.19) (2019-10-16)


### Bug Fixes

* **FilterBar:** fix always showing Scrollbar on windows ([#187](https://github.com/SAP/ui5-webcomponents-react/issues/187)) ([8f85bc1](https://github.com/SAP/ui5-webcomponents-react/commit/8f85bc1))





# [0.6.0-rc.18](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.17...v0.6.0-rc.18) (2019-10-15)


### Features

* **AnalyticalTable:** control row selection by prop ([#186](https://github.com/SAP/ui5-webcomponents-react/issues/186)) ([b4fcec8](https://github.com/SAP/ui5-webcomponents-react/commit/b4fcec8))





# [0.6.0-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.16...v0.6.0-rc.17) (2019-10-15)


### Features

* **AnalyticalTable:** offer scrollTo and scrollToItem methods on table ref ([#185](https://github.com/SAP/ui5-webcomponents-react/issues/185)) ([4a1c25a](https://github.com/SAP/ui5-webcomponents-react/commit/4a1c25a))





# [0.6.0-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.15...v0.6.0-rc.16) (2019-10-14)


### Features

* **AnalyticalTable:** Added option to use tree-tables. ([#178](https://github.com/SAP/ui5-webcomponents-react/issues/178)) ([37c3c1f](https://github.com/SAP/ui5-webcomponents-react/commit/37c3c1f))





# [0.6.0-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.14...v0.6.0-rc.15) (2019-10-14)


### Bug Fixes

* **WebComponents:** Update to rc.4 ([#184](https://github.com/SAP/ui5-webcomponents-react/issues/184)) ([2cc3abc](https://github.com/SAP/ui5-webcomponents-react/commit/2cc3abc))


### Features

* **AnalytictalTable:** Added `onGroup` prop ([#183](https://github.com/SAP/ui5-webcomponents-react/issues/183)) ([1574057](https://github.com/SAP/ui5-webcomponents-react/commit/1574057))


### BREAKING CHANGES

* **AnalytictalTable:** Rename prop `pivotBy` to `groupBy`





# [0.6.0-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.13...v0.6.0-rc.14) (2019-10-10)


### Bug Fixes

* **withWebComponent:** Bind unknown events & cleanup ([#182](https://github.com/SAP/ui5-webcomponents-react/issues/182)) ([b6e2a66](https://github.com/SAP/ui5-webcomponents-react/commit/b6e2a66)), closes [#181](https://github.com/SAP/ui5-webcomponents-react/issues/181)


### BREAKING CHANGES

* **withWebComponent:** Removed `innerStyles` prop in favor of css variables and UI5's `addCustomCSS` API





# [0.6.0-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.12...v0.6.0-rc.13) (2019-10-10)


### Bug Fixes

* **Carousel:** Fix icon import ([#180](https://github.com/SAP/ui5-webcomponents-react/issues/180)) ([42e88af](https://github.com/SAP/ui5-webcomponents-react/commit/42e88af)), closes [#177](https://github.com/SAP/ui5-webcomponents-react/issues/177)


### Features

* **ObjectPage:** add alwaysShowContentHeader and showTitleInHeaderContent ([#179](https://github.com/SAP/ui5-webcomponents-react/issues/179)) ([cd63eff](https://github.com/SAP/ui5-webcomponents-react/commit/cd63eff))





# [0.6.0-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.11...v0.6.0-rc.12) (2019-10-09)


### Bug Fixes

* **AnalyticalTable:** add info in onRowSelected event whether row is selected or not ([#176](https://github.com/SAP/ui5-webcomponents-react/issues/176)) ([4d6eaa4](https://github.com/SAP/ui5-webcomponents-react/commit/4d6eaa4))


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


### Bug Fixes

* **AnalyticalTable:** fix table row selection ([#174](https://github.com/SAP/ui5-webcomponents-react/issues/174)) ([9aa6380](https://github.com/SAP/ui5-webcomponents-react/commit/9aa6380))





# [0.6.0-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.9...v0.6.0-rc.10) (2019-10-02)


### Bug Fixes

* **AnalyticalTable:** Don't crash when no columns provided ([bed976b](https://github.com/SAP/ui5-webcomponents-react/commit/bed976b))





# [0.6.0-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.8...v0.6.0-rc.9) (2019-10-01)


### Bug Fixes

* **SideNavigation:** Don't render zero if no footerItems present ([#165](https://github.com/SAP/ui5-webcomponents-react/issues/165)) ([7e4946a](https://github.com/SAP/ui5-webcomponents-react/commit/7e4946a)), closes [#164](https://github.com/SAP/ui5-webcomponents-react/issues/164)
* **web-components:** Fix tooltip handling ([#166](https://github.com/SAP/ui5-webcomponents-react/issues/166)) ([d721e2b](https://github.com/SAP/ui5-webcomponents-react/commit/d721e2b)), closes [#164](https://github.com/SAP/ui5-webcomponents-react/issues/164)





# [0.6.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.7...v0.6.0-rc.8) (2019-09-30)

**Note:** Version bump only for package @ui5/webcomponents-react





# [0.6.0-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.6...v0.6.0-rc.7) (2019-09-26)


### Bug Fixes

* **SideNavigation:** fix tooltip support ([#156](https://github.com/SAP/ui5-webcomponents-react/issues/156)) ([72cced3](https://github.com/SAP/ui5-webcomponents-react/commit/72cced3)), closes [#155](https://github.com/SAP/ui5-webcomponents-react/issues/155)





# [0.6.0-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.5...v0.6.0-rc.6) (2019-09-26)


### Features

* **Loader:** Initial Implementation ([#153](https://github.com/SAP/ui5-webcomponents-react/issues/153)) ([6621804](https://github.com/SAP/ui5-webcomponents-react/commit/6621804))





# [0.6.0-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.4...v0.6.0-rc.5) (2019-09-25)

**Note:** Version bump only for package @ui5/webcomponents-react





# [0.6.0-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.2...v0.6.0-rc.4) (2019-09-25)


### Bug Fixes

* **main:** Fix wrong Button import ([#151](https://github.com/SAP/ui5-webcomponents-react/issues/151)) ([05dbf7f](https://github.com/SAP/ui5-webcomponents-react/commit/05dbf7f))





# [0.6.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.1...v0.6.0-rc.2) (2019-09-24)


### Features

* **Charts:** enable passing width and height in percentage ([#147](https://github.com/SAP/ui5-webcomponents-react/issues/147)) ([0d680ff](https://github.com/SAP/ui5-webcomponents-react/commit/0d680ff))





# [0.6.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.17...v0.6.0-rc.1) (2019-09-24)


### Bug Fixes

* **FilterBar:** Add scrolling and wrapping for small screens ([#143](https://github.com/SAP/ui5-webcomponents-react/issues/143)) ([55dc57d](https://github.com/SAP/ui5-webcomponents-react/commit/55dc57d))


### Code Refactoring

* **framework:** Clean up legacy code and improve bundle size ([#135](https://github.com/SAP/ui5-webcomponents-react/issues/135)) ([7ab3122](https://github.com/SAP/ui5-webcomponents-react/commit/7ab3122))


### BREAKING CHANGES

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

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.5.1-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.15...v0.5.1-rc.16) (2019-09-20)


### Features

* **SideNavigation:** Initial Component Implementation ([#132](https://github.com/SAP/ui5-webcomponents-react/issues/132)) ([da53e3e](https://github.com/SAP/ui5-webcomponents-react/commit/da53e3e))





## [0.5.1-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.14...v0.5.1-rc.15) (2019-09-18)


### Features

* **AnalyticalTable:** enable passing additional props to react-table ([#131](https://github.com/SAP/ui5-webcomponents-react/issues/131)) ([61cd83f](https://github.com/SAP/ui5-webcomponents-react/commit/61cd83f))





## [0.5.1-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.13...v0.5.1-rc.14) (2019-09-18)


### Features

* **Breadcrumbs:** Initial Component Implementation ([#129](https://github.com/SAP/ui5-webcomponents-react/issues/129)) ([ada4c3a](https://github.com/SAP/ui5-webcomponents-react/commit/ada4c3a))





## [0.5.1-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.12...v0.5.1-rc.13) (2019-09-18)


### Code Refactoring

* **MessageBox:** Rename prop visible to open ([#128](https://github.com/SAP/ui5-webcomponents-react/issues/128)) ([1487862](https://github.com/SAP/ui5-webcomponents-react/commit/1487862))
* **ProgressIndicator:** Remove visible prop ([#126](https://github.com/SAP/ui5-webcomponents-react/issues/126)) ([100e6ff](https://github.com/SAP/ui5-webcomponents-react/commit/100e6ff))
* **SegmentedButton:** Remove visible prop and rename enabled ([#125](https://github.com/SAP/ui5-webcomponents-react/issues/125)) ([174447a](https://github.com/SAP/ui5-webcomponents-react/commit/174447a))


### BREAKING CHANGES

* **MessageBox:** `MessageBox`: Renamed prop `visible` to `open`
* **MessageBox:** `MessageBoxButton`: deleted export as this component was intended for internal use only
* **ProgressIndicator:** removed `visible` prop

[ci skip]
* **SegmentedButton:** `SegmentedButtonItem` removed `visible` prop, please use conditional rendering instead
* **SegmentedButton:** `SegmentedButton` and `SegmentedButtonItem` prop enabled is now renamed to disabled and logic is inverted
[ci skip]





## [0.5.1-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.11...v0.5.1-rc.12) (2019-09-17)


### Features

* **AnalyticalTable:** add onSort callback to Table ([#123](https://github.com/SAP/ui5-webcomponents-react/issues/123)) ([de7843f](https://github.com/SAP/ui5-webcomponents-react/commit/de7843f))
* **AnalyticalTable:** make columns resizable ([#124](https://github.com/SAP/ui5-webcomponents-react/issues/124)) ([556ff59](https://github.com/SAP/ui5-webcomponents-react/commit/556ff59))





## [0.5.1-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.10...v0.5.1-rc.11) (2019-09-16)


### Bug Fixes

* **ThemeProvider:** create own style tag containing css variables ([#121](https://github.com/SAP/ui5-webcomponents-react/issues/121)) ([19d8cff](https://github.com/SAP/ui5-webcomponents-react/commit/19d8cff))





## [0.5.1-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.9...v0.5.1-rc.10) (2019-09-14)


### Bug Fixes

* **ThemeProvider:** wrapping injectThemeVariables in requestAnimationFrame so that it won´t interfere with style tag initialization ([#120](https://github.com/SAP/ui5-webcomponents-react/issues/120)) ([77cb45d](https://github.com/SAP/ui5-webcomponents-react/commit/77cb45d))





## [0.5.1-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.8...v0.5.1-rc.9) (2019-09-13)


### Bug Fixes

* **VariantManagement:** disabled prop disables onClick events ([#119](https://github.com/SAP/ui5-webcomponents-react/issues/119)) ([ccdf3dc](https://github.com/SAP/ui5-webcomponents-react/commit/ccdf3dc))





## [0.5.1-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.7...v0.5.1-rc.8) (2019-09-13)


### Code Refactoring

* **Table:** Update to react-table v7 ([#110](https://github.com/SAP/ui5-webcomponents-react/issues/110)) ([e1c5ad7](https://github.com/SAP/ui5-webcomponents-react/commit/e1c5ad7))


### BREAKING CHANGES

* **Table:** upgrade react-table from 6.10.0 to 7.0.0-alpha.32





## [0.5.1-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.6...v0.5.1-rc.7) (2019-08-29)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.5.1-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.5...v0.5.1-rc.6) (2019-08-29)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.5.1-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.4...v0.5.1-rc.5) (2019-08-28)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.5.1-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.3...v0.5.1-rc.4) (2019-08-27)


### Documentation

* **Storybook:** Updated to 5.2 with Docs ([#106](https://github.com/SAP/ui5-webcomponents-react/issues/106)) ([45c0e21](https://github.com/SAP/ui5-webcomponents-react/commit/45c0e21))


### BREAKING CHANGES

* **Storybook:** Deleted internal component `CalendarHeader`
* **Storybook:** Deleted internal component `YearPicker`





## [0.5.1-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.2...v0.5.1-rc.3) (2019-08-23)


### Code Refactoring

* **tests:** Replace karma with jest ([#105](https://github.com/SAP/ui5-webcomponents-react/issues/105)) ([2ebd8ab](https://github.com/SAP/ui5-webcomponents-react/commit/2ebd8ab))


### BREAKING CHANGES

* **tests:** Deleted export for TabBase (internal component)
* **tests:** Deleted export for ListItem (internal component)
* **tests:** Deleted export for ListItemBase (internal component)
* **tests:** Deleted export for DayPicker (internal component)
* **tests:** Deleted export for MonthPicker (internal component)
* **tests:** Deleted export for Popup (internal component)





## [0.5.1-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.1...v0.5.1-rc.2) (2019-08-23)


### Features

* **ObjectPage:** Collapse header on scroll ([#104](https://github.com/SAP/ui5-webcomponents-react/issues/104)) ([6788b59](https://github.com/SAP/ui5-webcomponents-react/commit/6788b59))





## [0.5.1-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.0...v0.5.1-rc.1) (2019-08-22)


### Features

* **Carousel:** Added Keyboard Navigation ([#103](https://github.com/SAP/ui5-webcomponents-react/issues/103)) ([e1299ed](https://github.com/SAP/ui5-webcomponents-react/commit/e1299ed))





## [0.5.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.0...v0.5.1-rc.0) (2019-08-20)


### Bug Fixes

* **Carousel:** Hide Pagination Bar if not required ([#101](https://github.com/SAP/ui5-webcomponents-react/issues/101)) ([d6ec9b2](https://github.com/SAP/ui5-webcomponents-react/commit/d6ec9b2))
* **Spinner:** Accept style prop ([#100](https://github.com/SAP/ui5-webcomponents-react/issues/100)) ([f7a7958](https://github.com/SAP/ui5-webcomponents-react/commit/f7a7958)), closes [#94](https://github.com/SAP/ui5-webcomponents-react/issues/94)


### Features

* **ThemeProvider:** Add jss and noInjectThemeProperties props ([#102](https://github.com/SAP/ui5-webcomponents-react/issues/102)) ([8237b22](https://github.com/SAP/ui5-webcomponents-react/commit/8237b22))





# [0.5.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.18...v0.5.0) (2019-08-15)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.18](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.17...v0.4.2-rc.18) (2019-08-15)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.16...v0.4.2-rc.17) (2019-08-12)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.15...v0.4.2-rc.16) (2019-08-08)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.14...v0.4.2-rc.15) (2019-08-05)


### Bug Fixes

* **Custom Components:** adding ref to CommonProps interface ([#84](https://github.com/SAP/ui5-webcomponents-react/issues/84)) ([bb612ec](https://github.com/SAP/ui5-webcomponents-react/commit/bb612ec))





## [0.4.2-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.13...v0.4.2-rc.14) (2019-08-05)


### Bug Fixes

* **FilterBar:** Increase margin between FilterItems in FilterBar ([#80](https://github.com/SAP/ui5-webcomponents-react/issues/80)) ([ee94065](https://github.com/SAP/ui5-webcomponents-react/commit/ee94065))
* **ObjectPage:** Don't crash in default mode with only 1 child provided ([#81](https://github.com/SAP/ui5-webcomponents-react/issues/81)) ([2e5ddb5](https://github.com/SAP/ui5-webcomponents-react/commit/2e5ddb5))





## [0.4.2-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.12...v0.4.2-rc.13) (2019-08-02)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.11...v0.4.2-rc.12) (2019-08-02)


### Bug Fixes

* **AnalyticalTable:** Header is now resizable ([#76](https://github.com/SAP/ui5-webcomponents-react/issues/76)) ([eadd61a](https://github.com/SAP/ui5-webcomponents-react/commit/eadd61a))





## [0.4.2-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.10...v0.4.2-rc.11) (2019-08-02)


### Features

* **FilterItem:** Add MultiSelect option to FilterTypes ([#79](https://github.com/SAP/ui5-webcomponents-react/issues/79)) ([0665824](https://github.com/SAP/ui5-webcomponents-react/commit/0665824))





## [0.4.2-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.9...v0.4.2-rc.10) (2019-08-02)


### Code Refactoring

* **VariantManagement:** removed unused prop enabled ([#77](https://github.com/SAP/ui5-webcomponents-react/issues/77)) ([5080316](https://github.com/SAP/ui5-webcomponents-react/commit/5080316))


### BREAKING CHANGES

* **VariantManagement:** Removed prop `enabled`, please use `disabled` instead. This change should not affect your applications, because `enabled` was never implemented.





## [0.4.2-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.8...v0.4.2-rc.9) (2019-07-31)


### Bug Fixes

* **VariantManagement:** initialSelectedKey prop is working as intended ([#75](https://github.com/SAP/ui5-webcomponents-react/issues/75)) ([a5e4267](https://github.com/SAP/ui5-webcomponents-react/commit/a5e4267))





## [0.4.2-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.7...v0.4.2-rc.8) (2019-07-29)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.6...v0.4.2-rc.7) (2019-07-29)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.5...v0.4.2-rc.6) (2019-07-25)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.4...v0.4.2-rc.5) (2019-07-24)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.1...v0.4.2-rc.4) (2019-07-23)


### Features

* **Charts:** Added lib export per chart ([#66](https://github.com/SAP/ui5-webcomponents-react/issues/66)) ([977cc25](https://github.com/SAP/ui5-webcomponents-react/commit/977cc25))





## [0.4.2-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.2...v0.4.2-rc.3) (2019-07-22)


### Features

* **Charts:** Added lib export per chart ([#66](https://github.com/SAP/ui5-webcomponents-react/issues/66)) ([977cc25](https://github.com/SAP/ui5-webcomponents-react/commit/977cc25))





## [0.4.2-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.1...v0.4.2-rc.2) (2019-07-22)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.0...v0.4.2-rc.1) (2019-07-22)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.2-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1...v0.4.2-rc.0) (2019-07-19)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1-rc.2...v0.4.1) (2019-07-19)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.4.1-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1-rc.1...v0.4.1-rc.2) (2019-07-19)


### Bug Fixes

* **FilterItem:** BusyIndicator is displayed when loading prop is true ([#63](https://github.com/SAP/ui5-webcomponents-react/issues/63)) ([9d88985](https://github.com/SAP/ui5-webcomponents-react/commit/9d88985))





## [0.4.1-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1-rc.0...v0.4.1-rc.1) (2019-07-17)


### Bug Fixes

* **AnalyticalTable:** BusyIndicator is displayed when loading prop is true ([#61](https://github.com/SAP/ui5-webcomponents-react/issues/61)) ([f841ead](https://github.com/SAP/ui5-webcomponents-react/commit/f841ead))





## [0.4.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.0...v0.4.1-rc.0) (2019-07-16)


### Bug Fixes

* **Spinner:** Enabled Spinning again ([#59](https://github.com/SAP/ui5-webcomponents-react/issues/59)) ([740891f](https://github.com/SAP/ui5-webcomponents-react/commit/740891f)), closes [#57](https://github.com/SAP/ui5-webcomponents-react/issues/57)





# [0.4.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.17...v0.4.0) (2019-07-15)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.3.2-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.16...v0.3.2-rc.17) (2019-07-15)


### Features

* **AnalyticalTable:** Added option to create pivot tables ([#47](https://github.com/SAP/ui5-webcomponents-react/issues/47)) ([71b546d](https://github.com/SAP/ui5-webcomponents-react/commit/71b546d))





## [0.3.2-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.15...v0.3.2-rc.16) (2019-07-12)


### Bug Fixes

* **ObjectPage:** Highlight selected section while scrolling ([#56](https://github.com/SAP/ui5-webcomponents-react/issues/56)) ([42a6a10](https://github.com/SAP/ui5-webcomponents-react/commit/42a6a10))





## [0.3.2-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.14...v0.3.2-rc.15) (2019-07-11)


### Bug Fixes

* **ThemeProvider:** Only inject theme properties if they are not present ([#55](https://github.com/SAP/ui5-webcomponents-react/issues/55)) ([3ec61d5](https://github.com/SAP/ui5-webcomponents-react/commit/3ec61d5))





## [0.3.2-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.13...v0.3.2-rc.14) (2019-07-10)


### Code Refactoring

* **Custom Components:** Expose HTML Element via ref in every component ([#54](https://github.com/SAP/ui5-webcomponents-react/issues/54)) ([c285ee6](https://github.com/SAP/ui5-webcomponents-react/commit/c285ee6))


### BREAKING CHANGES

* **Custom Components:** All Components now expose their root html node/the encapsulated Web Component via ref instead of the React instance.





## [0.3.2-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.12...v0.3.2-rc.13) (2019-07-05)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.3.2-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.11...v0.3.2-rc.12) (2019-07-05)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.3.2-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.10...v0.3.2-rc.11) (2019-07-04)


*  feat(WebComponents): Updated to v1.0.0-rc.2 (#51) ([8a40deb](https://github.com/SAP/ui5-webcomponents-react/commit/8a40deb)), closes [#51](https://github.com/SAP/ui5-webcomponents-react/issues/51)


### BREAKING CHANGES

* **ShellBarItem**: prop `onPress` is renamed to `onClick`
* **Dialog**: remove prop `noHeader`
* **Popup**: remove prop `noHeader`
Please also check the [UI5 Web Components Release Notes](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.2)





## [0.3.2-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.9...v0.3.2-rc.10) (2019-07-03)


### Bug Fixes

* **Table:** Fixed Table and adapt slot handling ([#50](https://github.com/SAP/ui5-webcomponents-react/issues/50)) ([2159ab1](https://github.com/SAP/ui5-webcomponents-react/commit/2159ab1))


### BREAKING CHANGES

* **Table:** Use prop `slot` instead of `data-ui5-slot`
* **Table:** **Table**: prop `rows` is replaced by `children`
* **Table:** **TableRow**: prop `header` is replaced by `children`





## [0.3.2-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.8...v0.3.2-rc.9) (2019-07-02)


### Features

* **WebComponents:** Updated Wrappers to v1.0.0-rc.1 ([#48](https://github.com/SAP/ui5-webcomponents-react/issues/48)) ([ac6570c](https://github.com/SAP/ui5-webcomponents-react/commit/ac6570c)), closes [#43](https://github.com/SAP/ui5-webcomponents-react/issues/43)


### BREAKING CHANGES

* **WebComponents:** **Button**: `onPress` renamed to `onClick`
* **WebComponents:** **ToggleButton**: `onPress` renamed to `onClick`
* **WebComponents:** **Link**: `onPress` renamed to `onClick`
* **WebComponents:** **List**: `onItemPress` renamed to `onItemClick`
* **WebComponents:** **ShellBar**: `onNotificationsPress` renamed to `onNotificationsClick`
* **WebComponents:** **Card**: `onHeaderPress` renamed to `onHeaderClick`
* **WebComponents:** **ShellBar**: `onProductSwitchPress` renamed to `onProductSwitchClick`
* **WebComponents:** **ShellBar**: `onLogoPress` renamed to `onLogoClick`
* **WebComponents:** **ShellBar**: `onCoPilotPress` renamed to `onCoPilotClick`
* **WebComponents:** **TimelineItem**: `onItemNamePress` renamed to `onItemNameClick`
* **WebComponents:** **ShellBar**: `onProfilePress` renamed to `onProfileClick`





## [0.3.2-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.7...v0.3.2-rc.8) (2019-07-01)


### Bug Fixes

* **fiori3:** Fixed Import in Ui5PopoverDomRef interface ([88326b4](https://github.com/SAP/ui5-webcomponents-react/commit/88326b4))





## [0.3.2-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.6...v0.3.2-rc.7) (2019-07-01)


### Code Refactoring

* **withWebComponent:** replace innerComponentRef with ref for Web Components ([#44](https://github.com/SAP/ui5-webcomponents-react/issues/44)) ([08982ba](https://github.com/SAP/ui5-webcomponents-react/commit/08982ba))


### BREAKING CHANGES

* **withWebComponent:** Replaced `innerComponentRef` with `ref` to support React `RefObject`





## [0.3.2-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.5...v0.3.2-rc.6) (2019-06-26)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.3.2-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.4...v0.3.2-rc.5) (2019-06-24)


### Bug Fixes

* **main:** Added react-table dependency ([ebc8fc5](https://github.com/SAP/ui5-webcomponents-react/commit/ebc8fc5))





## [0.3.2-rc.4](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/main/compare/v0.3.2-rc.3...v0.3.2-rc.4) (2019-06-24)


* * chore(Web Components): Updated Web Components to v0.13.1 (#39) ([e7f6164](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/main/commit/e7f6164)), closes [#39](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/main/issues/39) [#36](https://github.com/SAP/ui5-webcomponents-react/issues/36)


### BREAKING CHANGES

* **Select**: the parameter of the change event is now called `selectedOption`
* **Select**: Use `Option` instead of `StandardListItem` for selection
* **Link**: Use design with `LinkDesign`,  type with `LinkType` is deleted
* **Button**: Use design with `ButtonDesign`, type with `ButtonDesign` is deleted
* **ToggleButton**: Use design with `ButtonDesign`, type with `ButtonDesign` is deleted
* **Switch**: type is removed, use `graphical`
* **MessageStrip**: `hideIcon` and `hideCloseButton` are renamed to `noIcon` and `noCloseButton`
* **Popover**: `hideArrow` and `hideHeader` are renamed to `noArrow` and `noHeader`

Please refer to the [UI5 Web Components Changelog](https://github.com/SAP/ui5-webcomponents/releases/tag/v0.13.1) as well.





## [0.3.2-rc.3](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/main/compare/v0.3.2-rc.2...v0.3.2-rc.3) (2019-06-24)


### Code Refactoring

* **base:** Merge `styles` and `utils` into `base` ([#38](https://github.com/SAP/ui5-webcomponents-react/issues/38)) ([9309505](https://github.com/SAP/ui5-webcomponents-react/commit/9309505)), closes [#34](https://github.com/SAP/ui5-webcomponents-react/issues/34)


### BREAKING CHANGES

* **base:** `@ui5/webcomponents-react/styles` and `@ui5/webcomponents-react/utils` are replaced by ``@ui5/webcomponents-react-base`
* **base:** Deleted Themes `sap_belize`, `sap_belize_plus` and `sap_belize_hcb`
* **base:** Removed `createThemeMap` from base
* **base:** Removed `getThemeClassFor` from base
* **base:** Removed `getThemeOverwrite` from base
* **base:** Deleted `Themes` from base





## [0.3.2-rc.2](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/main/compare/v0.3.2-rc.1...v0.3.2-rc.2) (2019-06-17)


### Features

* **AnalyticalTable:** Initial Implementation ([#32](https://github.com/SAP/ui5-webcomponents-react/issues/32)) ([4f30127](https://github.com/SAP/ui5-webcomponents-react/commit/4f30127))


### BREAKING CHANGES

* **AnalyticalTable:** Deleted `ResponsivePopover`, please use the `Popover` Component





## [0.3.2-rc.1](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/main/compare/v0.3.2-rc.0...v0.3.2-rc.1) (2019-06-14)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.3.2-rc.0](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/main/compare/v0.3.1-rc.2...v0.3.2-rc.0) (2019-06-14)


### Features

* **ThemeProvider:** Read config from UI5 Web Components ([efee11f](https://github.com/SAP/ui5-webcomponents-react/commit/efee11f))


### BREAKING CHANGES

* **ThemeProvider:** Themes: rename Theme `sap_fiori3_light` to `sap_fiori_3`
* **ThemeProvider:** ThemeProvider: removed contentDensity and theme props. To set those, use the [ui5 WebComponents configuration script tag](https://github.com/SAP/ui5-webcomponents#configure).





## [0.3.1-rc.2](https://github.com/SAP/ui5-webcomponents-react/tree/master/packages/main/compare/v0.3.1-rc.1...v0.3.1-rc.2) (2019-06-13)


### Features

* Update UI5 WebComponents to v0.12.0 ([#30](https://github.com/SAP/ui5-webcomponents-react/issues/30)) ([4958a15](https://github.com/SAP/ui5-webcomponents-react/commit/4958a15))


### BREAKING CHANGES

* IconColor is renamed to SemanticColor
* Tab: renamed property iconColor to semanticColor
* Button: Remove activeIcon property
* ToggleButton: Remove activeIcon property

See also [UI5-WebComponents 0.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v0.12.0) release notes.





## [0.3.1-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.1-rc.0...v0.3.1-rc.1) (2019-06-07)


### Features

* **ObjectPage:** Added Hide Header Button ([#28](https://github.com/SAP/ui5-webcomponents-react/issues/28)) ([5509098](https://github.com/SAP/ui5-webcomponents-react/commit/5509098))





## [0.3.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.0...v0.3.1-rc.0) (2019-06-03)

**Note:** Version bump only for package @ui5/webcomponents-react





# [0.3.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.2.0...v0.3.0) (2019-06-03)


### Features

* Updated UI5 WebComponents to v0.11.0 ([#22](https://github.com/SAP/ui5-webcomponents-react/issues/22)) ([7dcf22b](https://github.com/SAP/ui5-webcomponents-react/commit/7dcf22b))
* **FilterBar:** Initial Version ([422bdbd](https://github.com/SAP/ui5-webcomponents-react/commit/422bdbd))
* **FilterItem:** Initial Version ([19a23ec](https://github.com/SAP/ui5-webcomponents-react/commit/19a23ec))
* **VariantManagement:** Initial Version ([a1e9cbb](https://github.com/SAP/ui5-webcomponents-react/commit/a1e9cbb))
* **FilterBar:** renderSearch function ([94b468e](https://github.com/SAP/ui5-webcomponents-react/commit/94b468e))


### Bug Fixes

* **typing:** Fixed TypeScript Definitions ([440c097](https://github.com/SAP/ui5-webcomponents-react/commit/440c097))
* **WebComponentWrapper:** Fixed event handler removal after prop update ([2b93c12](https://github.com/SAP/ui5-webcomponents-react/commit/2b93c12))


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

* **web-component-wrapper:** Slots must be passed as camelCase ([1671c17](https://github.com/SAP/ui5-webcomponents-react/commit/1671c17))


### Features

* **VariantManagement:** Initial Version ([b8237ce](https://github.com/SAP/ui5-webcomponents-react/commit/b8237ce))
