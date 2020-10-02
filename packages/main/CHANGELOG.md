# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.10.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.9...v0.10.10) (2020-10-02)


### Bug Fixes

* **CommonProps:** add type definitions for HTML attributes ([#692](https://github.com/SAP/ui5-webcomponents-react/issues/692)) ([07c5b6a](https://github.com/SAP/ui5-webcomponents-react/commit/07c5b6adcd57b9ad1e59d65eb70e2855aa22fa91))


### Features

* **AnalyticalTable:** horizontal virtualization of table cells ([#640](https://github.com/SAP/ui5-webcomponents-react/issues/640)) ([05b1e6e](https://github.com/SAP/ui5-webcomponents-react/commit/05b1e6eae02cfd4b56471be1ece94ed6be9b71c2))





## [0.10.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.8...v0.10.9) (2020-09-23)


### Bug Fixes

* **AnalyticalTable:** only apply selectedRowIds prop if its value has changed ([#685](https://github.com/SAP/ui5-webcomponents-react/issues/685)) ([8278f4b](https://github.com/SAP/ui5-webcomponents-react/commit/8278f4b4e9228c0748a68a7464178eadf41fec21))
* **AnalyticalTable:** prevent an error in the storybook if loading prop was toggled  ([#679](https://github.com/SAP/ui5-webcomponents-react/issues/679)) ([296d75b](https://github.com/SAP/ui5-webcomponents-react/commit/296d75be01ecdaff5ed4533fa0d0bac897507dc5))
* **AnalyticalTable:** selectedRowIds can contain more than one digit per segment ([#672](https://github.com/SAP/ui5-webcomponents-react/issues/672)) ([6882524](https://github.com/SAP/ui5-webcomponents-react/commit/6882524e57aa66b9d20537458cc1884a34ced3e2))
* **FilterBar:** Add missing onFiltersDialogSave event properties and fix manually controlled visibleInFilterBar prop  ([#682](https://github.com/SAP/ui5-webcomponents-react/issues/682)) ([95a1078](https://github.com/SAP/ui5-webcomponents-react/commit/95a10785cd877168f3d7401bb2eae3d4797ac4ad))
* **FilterBar:** after opening the filters-dialog, enable manual control of filters again ([#683](https://github.com/SAP/ui5-webcomponents-react/issues/683)) ([5727165](https://github.com/SAP/ui5-webcomponents-react/commit/5727165e945a1cd2a240cf620a0339513faed519))





## [0.10.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.7...v0.10.8) (2020-09-02)


### Bug Fixes

* **MessageBox:** allow any react node to be passed as children ([#670](https://github.com/SAP/ui5-webcomponents-react/issues/670)) ([b2fae12](https://github.com/SAP/ui5-webcomponents-react/commit/b2fae12ce5c9443c70934b5cc09b0ca17372dea2))





## [0.10.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.5...v0.10.6) (2020-08-24)


### Bug Fixes

* **AnalyticalTable:** respect columnOrder prop ([#666](https://github.com/SAP/ui5-webcomponents-react/issues/666)) ([05382b8](https://github.com/SAP/ui5-webcomponents-react/commit/05382b887fb20ddeb13cfbc1b26c3c45649fcf42))
* **Form:** fix tab order ([#665](https://github.com/SAP/ui5-webcomponents-react/issues/665)) ([d022fe7](https://github.com/SAP/ui5-webcomponents-react/commit/d022fe74be1e1cc8004b938cb7247473771f3016)), closes [#645](https://github.com/SAP/ui5-webcomponents-react/issues/645)





## [0.10.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.4...v0.10.5) (2020-08-19)


### Bug Fixes

* **AnalyticalTable:** prevent crash if unsupported rowId is set as selectedRowIds key ([#660](https://github.com/SAP/ui5-webcomponents-react/issues/660)) ([e3b1117](https://github.com/SAP/ui5-webcomponents-react/commit/e3b111766f8a9170294e5b1335eeced323c649d7))
* **AnalyticalTable:** prevent event bubbling of ui5 controls ([#659](https://github.com/SAP/ui5-webcomponents-react/issues/659)) ([44bedf8](https://github.com/SAP/ui5-webcomponents-react/commit/44bedf8262a026b63c6b5292e8fc318dc3abddd3))
* **FilterBar:** support new web-components controls, fix layout and labels ([#661](https://github.com/SAP/ui5-webcomponents-react/issues/661)) ([d0969b5](https://github.com/SAP/ui5-webcomponents-react/commit/d0969b53bcd524c2289fa1d228594678638cb671))





## [0.10.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.3...v0.10.4) (2020-08-19)


### Bug Fixes

* **AnalyticalTable:** fix pre-selection of custom row ids and update react-table ([#649](https://github.com/SAP/ui5-webcomponents-react/issues/649)) ([b733f4c](https://github.com/SAP/ui5-webcomponents-react/commit/b733f4c35b583feda184164552ac3a1c1159b91e))
* **FilterBar:** use createPortal for FilterDialog within FilterBar ([#655](https://github.com/SAP/ui5-webcomponents-react/issues/655)) ([2a65a24](https://github.com/SAP/ui5-webcomponents-react/commit/2a65a24a1bfb15e225391457033889e7a5ea2617)), closes [#652](https://github.com/SAP/ui5-webcomponents-react/issues/652)
* **Themes:** add missing themes `sap_fiori_3_hcb` and `sap_fiori_3_hcw` ([#648](https://github.com/SAP/ui5-webcomponents-react/issues/648)) ([19cf697](https://github.com/SAP/ui5-webcomponents-react/commit/19cf697d05c62b3bbc6723d5a4a6e74b6a9d168e))





## [0.10.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.2...v0.10.3) (2020-08-06)


### Bug Fixes

* **MessageBox:** correctly align items in footer and fix header alignment in Safari ([#643](https://github.com/SAP/ui5-webcomponents-react/issues/643)) ([c36df38](https://github.com/SAP/ui5-webcomponents-react/commit/c36df3884aba7a74efa1f456739b0511f18be1e4))





## [0.10.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.1...v0.10.2) (2020-08-05)


### Bug Fixes

* **FilterBar:** search field within dialog expands to available width ([#638](https://github.com/SAP/ui5-webcomponents-react/issues/638)) ([507d3cb](https://github.com/SAP/ui5-webcomponents-react/commit/507d3cb9276617d8d589be4fc8789d5e9e97f409))
* use createPortal for all internal popovers ([#636](https://github.com/SAP/ui5-webcomponents-react/issues/636)) ([9b36161](https://github.com/SAP/ui5-webcomponents-react/commit/9b36161330d40a8ddc466f5d9367b84e9d829f06))
* **TimelineItem:** use correct name ([#635](https://github.com/SAP/ui5-webcomponents-react/issues/635)) ([a5737c3](https://github.com/SAP/ui5-webcomponents-react/commit/a5737c35b40c9f15d11b91ff07c31b39cea738c1)), closes [#634](https://github.com/SAP/ui5-webcomponents-react/issues/634)





## [0.10.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0...v0.10.1) (2020-07-31)


### Bug Fixes

* **AnalyticalTable:** allow column reordering in tree table mode ([3f91c84](https://github.com/SAP/ui5-webcomponents-react/commit/3f91c846b0d946dc55c6df67adc87fa4764f0c8f))
* **web components:** export shared prop types ([dc68681](https://github.com/SAP/ui5-webcomponents-react/commit/dc6868133759427a5978f501d621f5c859d24782))
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


### Bug Fixes

* **AnalyticalTable:** apply minWidth only if necessary ([#620](https://github.com/SAP/ui5-webcomponents-react/issues/620)) ([8f6f544](https://github.com/SAP/ui5-webcomponents-react/commit/8f6f544656de814889d38c2430569e1a09b7f35a))
* **AnalyticalTable:** insert reordered column in the correct place ([#626](https://github.com/SAP/ui5-webcomponents-react/issues/626)) ([73c60c7](https://github.com/SAP/ui5-webcomponents-react/commit/73c60c766ab916cf4c469512467e9b3a202f83de))





# [0.10.0-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.9...v0.10.0-rc.10) (2020-07-23)


### Bug Fixes

* **AnalyticalTable:** prevent crash if unsupported rowId is set as selectedRowId ([#615](https://github.com/SAP/ui5-webcomponents-react/issues/615)) ([83a808e](https://github.com/SAP/ui5-webcomponents-react/commit/83a808e101bae5320b930b512e8f54245252b360))
* **AnalyticalTable:** prevent horizontal overflow if last column is resizable ([#612](https://github.com/SAP/ui5-webcomponents-react/issues/612)) ([47d3f16](https://github.com/SAP/ui5-webcomponents-react/commit/47d3f16bc7adc3bc52ef51296b62f13610bba905))
* **AnalyticalTable:** update react-table ([#616](https://github.com/SAP/ui5-webcomponents-react/issues/616)) ([17ed544](https://github.com/SAP/ui5-webcomponents-react/commit/17ed5449709c87e1744f1d3891b404d76df9c171))
* **Popups:** prevent bubbling of internally used popover events ([#618](https://github.com/SAP/ui5-webcomponents-react/issues/618)) ([8781f42](https://github.com/SAP/ui5-webcomponents-react/commit/8781f42e4bb8369a0631c382cc173c8d9129abd7))


### chore

* **AnalyticalTable:** remove busyIndicatorEnabled prop ([#617](https://github.com/SAP/ui5-webcomponents-react/issues/617)) ([ff287cf](https://github.com/SAP/ui5-webcomponents-react/commit/ff287cf5eeb2c08825ff5c93b257c9b1b8bbf816))


### BREAKING CHANGES

* **AnalyticalTable:** remove  prop `busyIndicatorEnabled` as it is somehow duplicate to `loading`. The visibility of the busy indicator is now solely controlled by the prop `loading`.





# [0.10.0-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.8...v0.10.0-rc.9) (2020-07-17)


### Bug Fixes

* **AnalyticalTable:** fix subRows selection in tree table mode ([#610](https://github.com/SAP/ui5-webcomponents-react/issues/610)) ([69e63d9](https://github.com/SAP/ui5-webcomponents-react/commit/69e63d9b14cc9e9ad2936bd4c0301f2122f285d3))
* **FilterBar:** search-input field reacts to value prop changes ([#609](https://github.com/SAP/ui5-webcomponents-react/issues/609)) ([27981dd](https://github.com/SAP/ui5-webcomponents-react/commit/27981dd0cafa44d137c66ae9a0eeca2f553fff27))


### Features

* **AnalyticalTable:** support resize on whole column ([#607](https://github.com/SAP/ui5-webcomponents-react/issues/607)) ([cb99e78](https://github.com/SAP/ui5-webcomponents-react/commit/cb99e785cc1c0df8c4839d904bc8f0aff90db628)), closes [#580](https://github.com/SAP/ui5-webcomponents-react/issues/580)





# [0.10.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.7...v0.10.0-rc.8) (2020-07-16)


### Bug Fixes

* **AnalyticalTable:** fix dynamic column width and prevent table from overflowing in some cases ([#597](https://github.com/SAP/ui5-webcomponents-react/issues/597)) ([fe93af8](https://github.com/SAP/ui5-webcomponents-react/commit/fe93af8762ff149929fbeb3ac1c306ba2458d272))
* **AnalyticalTable:** improve scroll performance when scrolling very fast ([#600](https://github.com/SAP/ui5-webcomponents-react/issues/600)) ([e4a8e95](https://github.com/SAP/ui5-webcomponents-react/commit/e4a8e95b2269147229f6768aa1ded8edbc3f5b5e))
* **FilterBar:** replace fragments inside of toolbar and update story ([#599](https://github.com/SAP/ui5-webcomponents-react/issues/599)) ([ab0760f](https://github.com/SAP/ui5-webcomponents-react/commit/ab0760f266006bc6e26534e00982bce6fb3d52d3))
* **ObjectPage:** support dynamically added sections ([#604](https://github.com/SAP/ui5-webcomponents-react/issues/604)) ([a7ecb3c](https://github.com/SAP/ui5-webcomponents-react/commit/a7ecb3c55d2d3cb47b43b9c2c57e0fc609a9fb01)), closes [#591](https://github.com/SAP/ui5-webcomponents-react/issues/591)





# [0.10.0-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.6...v0.10.0-rc.7) (2020-07-09)


### Bug Fixes

* **sapScrollBar:** use correct height for horizontal scrollbar ([#587](https://github.com/SAP/ui5-webcomponents-react/issues/587)) ([3ceb0de](https://github.com/SAP/ui5-webcomponents-react/commit/3ceb0dee7dc7328bbb6d816d083f3ca1f8af6e73))





# [0.10.0-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.5...v0.10.0-rc.6) (2020-07-02)


### Bug Fixes

* **AnalyticalTable:** fix behavior of minWidth and add maxWidth support ([#585](https://github.com/SAP/ui5-webcomponents-react/issues/585)) ([525bbec](https://github.com/SAP/ui5-webcomponents-react/commit/525bbece5ba3f1f041e36193540b894c32b93364))


### Features

* **AnalyticalTable:** add horizontal scrollbar in fiori design ([#583](https://github.com/SAP/ui5-webcomponents-react/issues/583)) ([f695215](https://github.com/SAP/ui5-webcomponents-react/commit/f6952151b768ddff6ac481c694a64da9453e3d77))





# [0.10.0-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.4...v0.10.0-rc.5) (2020-06-22)


### Bug Fixes

* **Form:** fix bad import ([12e3278](https://github.com/SAP/ui5-webcomponents-react/commit/12e32789cfddb40a6f56738e6d1fbe5904e7d459))


### Features

* **Form:** add props to control labelSpan and columns for each size ([#578](https://github.com/SAP/ui5-webcomponents-react/issues/578)) ([40d9579](https://github.com/SAP/ui5-webcomponents-react/commit/40d95790bb330dc4a1a5e6077c278de78825967b))





# [0.10.0-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.3...v0.10.0-rc.4) (2020-06-18)


### Code Refactoring

* **Form:** use grid layout ([#576](https://github.com/SAP/ui5-webcomponents-react/issues/576)) ([6f14ae5](https://github.com/SAP/ui5-webcomponents-react/commit/6f14ae5b8131f06fe1c3f32083a8cdb75e5b613a)), closes [#564](https://github.com/SAP/ui5-webcomponents-react/issues/564)


### BREAKING CHANGES

* **Form:** deleted `CurrentViewportRange` (mostly used internally)
* **Form:** `FormGroup` and `FormItem` don't support `className`, `style`, `ref`, ..etc. props anymore, there are only used for calculating the final form layout.





# [0.10.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.2...v0.10.0-rc.3) (2020-06-16)


### Bug Fixes

* Fix wrong display names for NotificationGroup and VariantManagement ([2963a55](https://github.com/SAP/ui5-webcomponents-react/commit/2963a55bd11ebc5d99c654374352f0fd0a28370b))





# [0.10.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.1...v0.10.0-rc.2) (2020-06-05)


### Bug Fixes

* **FilterBar/ObjectPage:** add toolbar for making action bars responsive ([#546](https://github.com/SAP/ui5-webcomponents-react/issues/546)) ([bb0d9d4](https://github.com/SAP/ui5-webcomponents-react/commit/bb0d9d4a0023f9ecaf058f8b3bccd049621e96bf)), closes [#533](https://github.com/SAP/ui5-webcomponents-react/issues/533)
* **MessageBox:** allow custom action texts ([#561](https://github.com/SAP/ui5-webcomponents-react/issues/561)) ([f20d861](https://github.com/SAP/ui5-webcomponents-react/commit/f20d8614bfe241b5e7ea8c87ac047c2eb7e92df4)), closes [#551](https://github.com/SAP/ui5-webcomponents-react/issues/551)


### Features

* **Toolbar:** initial component implementation ([#543](https://github.com/SAP/ui5-webcomponents-react/issues/543)) ([0ef66dd](https://github.com/SAP/ui5-webcomponents-react/commit/0ef66ddb8a6285a15c6a3f6245114a83e4e4ad8d))





# [0.10.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.0...v0.10.0-rc.1) (2020-05-25)


### Bug Fixes

* **AnalyticalTable:** remove padding and scrollbar from select-all header cell ([#536](https://github.com/SAP/ui5-webcomponents-react/issues/536)) ([97158a3](https://github.com/SAP/ui5-webcomponents-react/commit/97158a39663cf40c424829a86962df7070a0dacb)), closes [#532](https://github.com/SAP/ui5-webcomponents-react/issues/532)
* **DurationPicker:** use correct value for defaultProp maxValue ([#529](https://github.com/SAP/ui5-webcomponents-react/issues/529)) ([888d069](https://github.com/SAP/ui5-webcomponents-react/commit/888d069a86784c4833f9257abc67e569be3dd231))





# [0.10.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.5...v0.10.0-rc.0) (2020-05-19)


### Bug Fixes

* **AnalyticalTable:** don't crash if scrollTo methods are not defined ([#515](https://github.com/SAP/ui5-webcomponents-react/issues/515)) ([636d507](https://github.com/SAP/ui5-webcomponents-react/commit/636d50741deaebacd518f05c52ea4528dfce99fa))
* **AnalyticalTable:** enable minWidth/maxWidth column option, disable dragging while resizing ([#518](https://github.com/SAP/ui5-webcomponents-react/issues/518)) ([0b59899](https://github.com/SAP/ui5-webcomponents-react/commit/0b59899efe4d6c59c5c4774a4b4d463d394136a0))
* **AnalyticalTable:** prevent overflow y on parent container ([#521](https://github.com/SAP/ui5-webcomponents-react/issues/521)) ([c8e98ff](https://github.com/SAP/ui5-webcomponents-react/commit/c8e98ff56055b10d0d6b9d5fc45d1bcfdd2867a5))
* **AnalyticalTable:** remove deprecated AnalyticalTableScrollMode smart ([#526](https://github.com/SAP/ui5-webcomponents-react/issues/526)) ([64f7e64](https://github.com/SAP/ui5-webcomponents-react/commit/64f7e6481a7a6164bce8973e8c3337cc52b45831))
* **AnalyticalTable:** use 100% of the parent height ([#512](https://github.com/SAP/ui5-webcomponents-react/issues/512)) ([e033f85](https://github.com/SAP/ui5-webcomponents-react/commit/e033f85ae73289b89b6ffe2354da7e44d672df2c))
* **ObjectPage:** make anchor bar more resilient ([#522](https://github.com/SAP/ui5-webcomponents-react/issues/522)) ([a6adefc](https://github.com/SAP/ui5-webcomponents-react/commit/a6adefc47040ca5167a586f939cfac54e16c6579))


### chore

* consolidate APIs ([#514](https://github.com/SAP/ui5-webcomponents-react/issues/514)) ([bea48ae](https://github.com/SAP/ui5-webcomponents-react/commit/bea48aec79949bc7148f7d8ea7a7fbe72f573608))
* **base:** remove deprecated components ([#508](https://github.com/SAP/ui5-webcomponents-react/issues/508)) ([781fe4e](https://github.com/SAP/ui5-webcomponents-react/commit/781fe4ebac7e10e431f8cd1925ec48ba941172e8))
* **main:** remove deprecated render methods ([#511](https://github.com/SAP/ui5-webcomponents-react/issues/511)) ([030473c](https://github.com/SAP/ui5-webcomponents-react/commit/030473c9a38d2bcaa3069925c9efd5ec75d0f909))


### Code Refactoring

* **Grid:** use CSS Grid layout ([#504](https://github.com/SAP/ui5-webcomponents-react/issues/504)) ([fcc449a](https://github.com/SAP/ui5-webcomponents-react/commit/fcc449a9682952c697a1e13c82cce19cd4070f5f))


### BREAKING CHANGES

* **AnalyticalCard**: remove prop `width`, please use `style` or `className` instead
* **Text**: remove prop `width`, please use `style` or `className` instead
* **ProgressIndicator**: remove props `width` and `height`, please use `style` or `className` instead
* **FlexBox**: remove props `width` and `height`, please use `style` or `className` instead
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
* **Grid:** remove prop `width`, width can now be set via `style` or `className`
* **Grid:** prop `vSpacing` accepts now a CSS height instead of a number in `rem`
* **Grid:** prop `hSpacing` accepts now a CSS width instead of a number in `rem`
* **Grid:** change prop `data-layout` (object) on child elements to `data-layout-span` and `data-layout-indent`





## [0.9.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.4...v0.9.5) (2020-05-13)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.9.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.3...v0.9.4) (2020-05-08)


### Bug Fixes

* fix cjs build ([#496](https://github.com/SAP/ui5-webcomponents-react/issues/496)) ([b1900cb](https://github.com/SAP/ui5-webcomponents-react/commit/b1900cbc96f1de4cbcbed7c86dbb4f6ec3f38fd5))





## [0.9.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.2...v0.9.3) (2020-05-06)


### Bug Fixes

* add babel/runtime as dependency to all packages ([#482](https://github.com/SAP/ui5-webcomponents-react/issues/482)) ([c7475b4](https://github.com/SAP/ui5-webcomponents-react/commit/c7475b40c393643f79e2ddc3993e53b36e8438ec))





## [0.9.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.1...v0.9.2) (2020-05-06)


### Bug Fixes

* **AnalyticalTable:** fix header text collision with sort/group/filter icons ([#478](https://github.com/SAP/ui5-webcomponents-react/issues/478)) ([eb36865](https://github.com/SAP/ui5-webcomponents-react/commit/eb368655ca85bff73059def88cd875a6ca986492))





## [0.9.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0...v0.9.1) (2020-05-04)


### Bug Fixes

* **AnalyticalTable:** calculate scrollbar width only if table is scrollable ([#470](https://github.com/SAP/ui5-webcomponents-react/issues/470)) ([ddd19fe](https://github.com/SAP/ui5-webcomponents-react/commit/ddd19fe662c8f633ebc597b286faf8c201551d05)), closes [#467](https://github.com/SAP/ui5-webcomponents-react/issues/467)
* **web-components-wrapper:** don't generate default props for empty strings ([#469](https://github.com/SAP/ui5-webcomponents-react/issues/469)) ([48505d9](https://github.com/SAP/ui5-webcomponents-react/commit/48505d9e2e375f640a2ed282f97bab1dd650676f))





# [0.9.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.0.0...v0.9.0) (2020-04-30)

**Note:** Version bump only for package @ui5/webcomponents-react





# [1.0.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.18...v1.0.0) (2020-04-30)


### Features

* update to @ui5/webcomponents 1.0.0-rc.7 ([#468](https://github.com/SAP/ui5-webcomponents-react/issues/468)) ([3b14676](https://github.com/SAP/ui5-webcomponents-react/commit/3b14676100659f602e08e571c0a63b400b274c82))


### BREAKING CHANGES

* *Carousel*: rename prop `cycling` to `cyclic`
* *Carousel*: replace prop `itemsPerPage` with `itemsPerPageL`, `itemsPerPageM`, `itemsPerPageS`
* *ThemeProvider*: remove `theme` prop as the UI5 Web Components are now provding all CSS Variables and we rely completely on the Web Components Theme
* Delete `@ui5/webcomponents-react/lib/ThemingSupport` as it is not needed anymore





# [0.9.0-rc.18](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.17...v0.9.0-rc.18) (2020-04-29)


### Bug Fixes

* **AnalyticalTable:** support RTL ([#466](https://github.com/SAP/ui5-webcomponents-react/issues/466)) ([a99b183](https://github.com/SAP/ui5-webcomponents-react/commit/a99b183fbe8009f65b5b8af825cb85f159db4162)), closes [#460](https://github.com/SAP/ui5-webcomponents-react/issues/460)
* **MessageBox:** enable closing with esc key ([#463](https://github.com/SAP/ui5-webcomponents-react/issues/463)) ([3377b75](https://github.com/SAP/ui5-webcomponents-react/commit/3377b75c5fbae24db8f599afc72e2b18974ad7cc))





# [0.9.0-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.16...v0.9.0-rc.17) (2020-04-28)


### Bug Fixes

* **AnalyticalTable:** debounce resize handler ([#454](https://github.com/SAP/ui5-webcomponents-react/issues/454)) ([f1a5a6e](https://github.com/SAP/ui5-webcomponents-react/commit/f1a5a6e882647e071f0ab2cb29c3d6b5395d7456))
* **AnalyticalTable:** fix passing styles object to AnalyticalTable ([#449](https://github.com/SAP/ui5-webcomponents-react/issues/449)) ([e3499ee](https://github.com/SAP/ui5-webcomponents-react/commit/e3499ee1ea8b58de269f95087ba583b1e8f90d7d))
* **Bar:** make slot props optional ([#450](https://github.com/SAP/ui5-webcomponents-react/issues/450)) ([5e490d8](https://github.com/SAP/ui5-webcomponents-react/commit/5e490d8072876c42d10f90d9b2843e5102e8e3be))





# [0.9.0-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.15...v0.9.0-rc.16) (2020-04-22)


### Bug Fixes

* **AnalyticalTable:** fix multi-select checkbox ([#445](https://github.com/SAP/ui5-webcomponents-react/issues/445)) ([2ed6a98](https://github.com/SAP/ui5-webcomponents-react/commit/2ed6a9817bc6c5dd8d349a15db8b8d39a2391ea7))
* **AnalyticalTable:** header should respect hAlign as well ([#438](https://github.com/SAP/ui5-webcomponents-react/issues/438)) ([79c9f3f](https://github.com/SAP/ui5-webcomponents-react/commit/79c9f3f1e77399c0c5edf23b498e80bc1bc37246))
* **AnalyticalTable:** remove ResizeObserver condition to avoid race conditions ([#444](https://github.com/SAP/ui5-webcomponents-react/issues/444)) ([830ab14](https://github.com/SAP/ui5-webcomponents-react/commit/830ab146ef30affdb46659442b7904b16f34e3c3))
* **withWebComponent:** fix handling of react fragments as slots ([#446](https://github.com/SAP/ui5-webcomponents-react/issues/446)) ([66a8344](https://github.com/SAP/ui5-webcomponents-react/commit/66a8344a26a84f8be7037353062a24981b0268b4))


### Features

* add slot props and deprecated render methods  ([#436](https://github.com/SAP/ui5-webcomponents-react/issues/436)) ([018337f](https://github.com/SAP/ui5-webcomponents-react/commit/018337f6252a2bf9291a66e415d38226645ad932))





# [0.9.0-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.14...v0.9.0-rc.15) (2020-04-16)


### Bug Fixes

* **AnalyticalTable:** don't select row when an actionable element was clicked ([#432](https://github.com/SAP/ui5-webcomponents-react/issues/432)) ([8c31818](https://github.com/SAP/ui5-webcomponents-react/commit/8c318187de5eb70b6412caaffd090adc65f5703f)), closes [#428](https://github.com/SAP/ui5-webcomponents-react/issues/428)
* **AnalyticalTable:** use correct border-bottom for selected row ([e65d8da](https://github.com/SAP/ui5-webcomponents-react/commit/e65d8da6b064bac53a36c3634f711b18984eadf8))





# [0.9.0-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.13...v0.9.0-rc.14) (2020-04-10)


### Bug Fixes

* **Framework:** fix sideEffect-full files in react production build ([f5c02b1](https://github.com/SAP/ui5-webcomponents-react/commit/f5c02b18e56e7b1f72e89a095c737c83de626eab))





# [0.9.0-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.12...v0.9.0-rc.13) (2020-04-09)


### Bug Fixes

* **AnalyticalTable:** move ResizeObserver creation into effect to avoid blank tables on second mount ([#420](https://github.com/SAP/ui5-webcomponents-react/issues/420)) ([a237d51](https://github.com/SAP/ui5-webcomponents-react/commit/a237d511c7a7c246ed549c59f582b1c076989879))
* **VariantManagement:** fix invalid hook calls ([#421](https://github.com/SAP/ui5-webcomponents-react/issues/421)) ([820d28d](https://github.com/SAP/ui5-webcomponents-react/commit/820d28def6316b3cff0e7b115e827e28d2765f8c))


### BREAKING CHANGES

* **VariantManagement:** rename prop `initialSelectedKey` to `selectedKey`





# [0.9.0-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.11...v0.9.0-rc.12) (2020-04-09)

**Note:** Version bump only for package @ui5/webcomponents-react





# [0.9.0-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.10...v0.9.0-rc.11) (2020-04-09)


### Bug Fixes

* **AnalyticalTable:** fix scrollbar issue on column reorder & initial horizontal scrolling ([#413](https://github.com/SAP/ui5-webcomponents-react/issues/413)) ([4665db7](https://github.com/SAP/ui5-webcomponents-react/commit/4665db7b06ccddff4a62dfa4712e07b1bd68de30))
* **Framework:** fix side-effects in rollup build ([#414](https://github.com/SAP/ui5-webcomponents-react/issues/414)) ([b64fc5f](https://github.com/SAP/ui5-webcomponents-react/commit/b64fc5f568160b22294f94f5e2fe2e6702e88be0))
* **Grid:** fix incorrect layout when rendered before Device was initialized ([#418](https://github.com/SAP/ui5-webcomponents-react/issues/418)) ([cb62961](https://github.com/SAP/ui5-webcomponents-react/commit/cb629618a13a17b416005f88ee98238692c4dcea))
* **ThemingSupport:** don't load fiori_3 parameters twice ([#416](https://github.com/SAP/ui5-webcomponents-react/issues/416)) ([b5421a6](https://github.com/SAP/ui5-webcomponents-react/commit/b5421a639527519bdeefe8e6dfe2a3824901db49))


### Code Refactoring

* **withWebComponent:** new static wrapper & web components as peer dependency ([#412](https://github.com/SAP/ui5-webcomponents-react/issues/412)) ([dca9b9a](https://github.com/SAP/ui5-webcomponents-react/commit/dca9b9aa0f4820ab08710156710fb30a10a0b304))


### BREAKING CHANGES

* **withWebComponent:** the dependencies `@ui5/webcomponents`, `@ui5/webcomponents-fiori` and `@ui5/webcomponents-icons` are now  `peerDependencies` and have to be installed next to `@ui5/webcomponents-react`





# [0.9.0-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.9...v0.9.0-rc.10) (2020-04-07)


### Bug Fixes

* **AnalyticalTable:** fix column filter and allow spaces as input ([#411](https://github.com/SAP/ui5-webcomponents-react/issues/411)) ([4003065](https://github.com/SAP/ui5-webcomponents-react/commit/40030659428e90679fd153f622c3c1aa544684d8))
* **AnalyticalTable:** skip first table paint as long as column width has not been calculated ([#406](https://github.com/SAP/ui5-webcomponents-react/issues/406)) ([528d048](https://github.com/SAP/ui5-webcomponents-react/commit/528d048705d162112d173e66d0a726873e397328))
* **AnalyticalTableColumnDefinition:** Add props typing to ComponenType ([#409](https://github.com/SAP/ui5-webcomponents-react/issues/409)) ([6e3d549](https://github.com/SAP/ui5-webcomponents-react/commit/6e3d549ade2359ddeadd7c5860b0c2ca51ac7d18))


### Code Refactoring

* **Popovers:** Remove custom logic ([#408](https://github.com/SAP/ui5-webcomponents-react/issues/408)) ([856df0b](https://github.com/SAP/ui5-webcomponents-react/commit/856df0b1cd2d349bcc8f607c87901906616027f8))


### BREAKING CHANGES

* **Popovers:** **Dialog**: Remove property `open`. You can now open a dialog by attaching a ref to the dialog and call the method `open()`.
* **Popovers:** **Popover**: Removed props `openBy`, `openByStyle`, `open` and `propagateOpenByClickEvent`. For opening a popover after e.g. a button click attach a ref to the popover and use the button click hander for calling `.openBy(event.target)` on the popover ref.
* **Popovers:** **ResponsivePopover**: Removed props `openBy`, `openByStyle`, `open` and `propagateOpenByClickEvent`. For opening a responsive popover after e.g. a button click attach a ref to the responsive popover and use the Button click hander for calling `.open(event.target)` on the responsive popover ref.





# [0.9.0-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.8...v0.9.0-rc.9) (2020-04-03)


### Bug Fixes

* **AnalyticalTable:** fix tree-table selection, add selectionBehavior prop + enum ([#401](https://github.com/SAP/ui5-webcomponents-react/issues/401)) ([7aab047](https://github.com/SAP/ui5-webcomponents-react/commit/7aab047ba2b66f49be06cb92f068ac96950aff20))


### Features

* **AnalyticalTable:** add infiniteScroll and keyboard navigation for cells ([#397](https://github.com/SAP/ui5-webcomponents-react/issues/397)) ([c6b64ba](https://github.com/SAP/ui5-webcomponents-react/commit/c6b64ba2256f7e238d48e1dd72f244c24c96e396))
* **AnalyticalTable:** add possibility to clear sorting in column header ([#399](https://github.com/SAP/ui5-webcomponents-react/issues/399)) ([137da3f](https://github.com/SAP/ui5-webcomponents-react/commit/137da3fea2d390595afe18c13858166f2adc5461))
* **Framework:** update to ui5-webcomponents-rc.6 ([#392](https://github.com/SAP/ui5-webcomponents-react/issues/392)) ([84a3f90](https://github.com/SAP/ui5-webcomponents-react/commit/84a3f905f48e5ef12526a026b68a3c8faf4b5fe0)), closes [/github.com/SAP/ui5-webcomponents/blob/master/CHANGELOG.md#100-rc6-2020-03-27](https://github.com//github.com/SAP/ui5-webcomponents/blob/master/CHANGELOG.md/issues/100-rc6-2020-03-27) [#349](https://github.com/SAP/ui5-webcomponents-react/issues/349)
* **ThemeProvider:** add global css classes ([#400](https://github.com/SAP/ui5-webcomponents-react/issues/400)) ([d0c811d](https://github.com/SAP/ui5-webcomponents-react/commit/d0c811d981dce2684776de19e90b3c31fec84636))


### BREAKING CHANGES

* **AnalyticalTable:** replace `noSelectionColumn` prop with `selectionBehavior` enum
* **AnalyticalTable:** column option `groupable` replaced by `disableGroupBy: boolean`
* **AnalyticalTable:** column option `sortable` replaced by `disableSortBy: boolean`
* **AnalyticalTable:** column option `filterable` replaced by `disableFilters: boolean`
* **AnalyticalTable:** Enabling grouping, sorting or filtering on column level by e.g `disableGroupBy: false` will not overwrite the table overall setting in case e.g. `groupable={false}`
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





# [0.9.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.7...v0.9.0-rc.8) (2020-04-01)


### Bug Fixes

* **AnalyticalTable:** avoid scrollbar overlaying last column ([#396](https://github.com/SAP/ui5-webcomponents-react/issues/396)) ([fb282c7](https://github.com/SAP/ui5-webcomponents-react/commit/fb282c7e453fdf3edfab23053e59bfc8879b7ad5))





# [0.9.0-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.6...v0.9.0-rc.7) (2020-03-31)


### Bug Fixes

* **RTL:** add dir="rtl" to html tag when running in RTL ([#394](https://github.com/SAP/ui5-webcomponents-react/issues/394)) ([78c1f93](https://github.com/SAP/ui5-webcomponents-react/commit/78c1f9368a4ad4f005ff65986938dd7a83e7a389)), closes [#366](https://github.com/SAP/ui5-webcomponents-react/issues/366)





# [0.9.0-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.5...v0.9.0-rc.6) (2020-03-31)


### Bug Fixes

* **ObjectPage:** Don't wrap title and subtitle ([#390](https://github.com/SAP/ui5-webcomponents-react/issues/390)) ([193e8ef](https://github.com/SAP/ui5-webcomponents-react/commit/193e8efd32ff2d995f7f9231f16e63b924f75cab)), closes [#372](https://github.com/SAP/ui5-webcomponents-react/issues/372)
* **ThemeProvider:** Add Typing for JSSTheme ([98cb810](https://github.com/SAP/ui5-webcomponents-react/commit/98cb81080db1cb800b42af292023b4bd8581de17))


### Features

* **AnalyticalTable:** Add Highlight Column ([#391](https://github.com/SAP/ui5-webcomponents-react/issues/391)) ([69e648a](https://github.com/SAP/ui5-webcomponents-react/commit/69e648a3762f92f63108d04ffdc3af56194c4db4)), closes [#312](https://github.com/SAP/ui5-webcomponents-react/issues/312)





# [0.9.0-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.4...v0.9.0-rc.5) (2020-03-25)


### Bug Fixes

* **ObjectPage:** Fix event for changing selected section ([#386](https://github.com/SAP/ui5-webcomponents-react/issues/386)) ([034f8b9](https://github.com/SAP/ui5-webcomponents-react/commit/034f8b949adadea412a5ebad3d92f315fa0c2839)), closes [#384](https://github.com/SAP/ui5-webcomponents-react/issues/384)
* **ObjectPage:** Prevent infinite grow ([#383](https://github.com/SAP/ui5-webcomponents-react/issues/383)) ([9393af4](https://github.com/SAP/ui5-webcomponents-react/commit/9393af4b73929975c15eb980b3a68e35bec3cea9)), closes [#373](https://github.com/SAP/ui5-webcomponents-react/issues/373)





# [0.9.0-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.3...v0.9.0-rc.4) (2020-03-25)


### Bug Fixes

* **AnalyticalTable:** prevent overflow if rows are selectable ([#381](https://github.com/SAP/ui5-webcomponents-react/issues/381)) ([95d81b7](https://github.com/SAP/ui5-webcomponents-react/commit/95d81b7c9c02a69692183f8d4b70d4e3be4143f2)), closes [#380](https://github.com/SAP/ui5-webcomponents-react/issues/380)
* **Loader/Spinner/Grid:** Fix memory leaks by cleanup effects ([#379](https://github.com/SAP/ui5-webcomponents-react/issues/379)) ([058cae7](https://github.com/SAP/ui5-webcomponents-react/commit/058cae7f1f60705f4d2eb9ab8df91a74c2d044e0)), closes [#335](https://github.com/SAP/ui5-webcomponents-react/issues/335)





# [0.9.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.2...v0.9.0-rc.3) (2020-03-24)


### Bug Fixes

* **AnalyticalTable:** remove z-index from Table Header which caused issues when using table in an ObjectPage ([#377](https://github.com/SAP/ui5-webcomponents-react/issues/377)) ([3f545c1](https://github.com/SAP/ui5-webcomponents-react/commit/3f545c1f1392944547285b5225037e8a4d67925e))
* **Grid:** Float items correctly in RTL mode ([#378](https://github.com/SAP/ui5-webcomponents-react/issues/378)) ([cdb1a14](https://github.com/SAP/ui5-webcomponents-react/commit/cdb1a14044d4b8eed5cf28119db4b6217ad4a92a)), closes [#371](https://github.com/SAP/ui5-webcomponents-react/issues/371)
* **ObjectPage:** hide first section Header ([#374](https://github.com/SAP/ui5-webcomponents-react/issues/374)) ([7b05ab9](https://github.com/SAP/ui5-webcomponents-react/commit/7b05ab9d95226c593eef027942de4a4cb65b860d))
* **SegmentedButton:** add intermediate css variable mappings in order to fix styling ([#375](https://github.com/SAP/ui5-webcomponents-react/issues/375)) ([86e962e](https://github.com/SAP/ui5-webcomponents-react/commit/86e962eb315381a1442b94b37baffeecff8638ca))





# [0.9.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.1...v0.9.0-rc.2) (2020-03-23)


### Bug Fixes

* **ObjectPage:** RTL support for Header ([#369](https://github.com/SAP/ui5-webcomponents-react/issues/369)) ([338b8b3](https://github.com/SAP/ui5-webcomponents-react/commit/338b8b35ab4f24cc1f0afa8f24b365ee62860d60)), closes [#366](https://github.com/SAP/ui5-webcomponents-react/issues/366)


### Features

* **All Components:** Allow all HTML events to be passed ([#370](https://github.com/SAP/ui5-webcomponents-react/issues/370)) ([376f9c1](https://github.com/SAP/ui5-webcomponents-react/commit/376f9c1a2893f2c46dfff85583c7756f4b6651cc))





# [0.9.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.7-rc.0...v0.9.0-rc.1) (2020-03-19)

**Note:** Version bump only for package @ui5/webcomponents-react





## [0.8.7-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.6...v0.8.7-rc.0) (2020-03-19)


### Bug Fixes

* **AnalyticalCard:** fix styling ([#360](https://github.com/SAP/ui5-webcomponents-react/issues/360)) ([d19c256](https://github.com/SAP/ui5-webcomponents-react/commit/d19c2561b9148d13637b3711164bacb45fb85cd2))
* **AnalyticalTable:** Always respect Cell option ([#359](https://github.com/SAP/ui5-webcomponents-react/issues/359)) ([8db97c3](https://github.com/SAP/ui5-webcomponents-react/commit/8db97c39d551cdba3be70ec0f49e03675853c746)), closes [#358](https://github.com/SAP/ui5-webcomponents-react/issues/358)
* **AnalyticalTable:** Expose React Table Container ref ([#341](https://github.com/SAP/ui5-webcomponents-react/issues/341)) ([5e8c32d](https://github.com/SAP/ui5-webcomponents-react/commit/5e8c32dba85d0be822005d9c8f8f3dbb31506d82))
* **AnalyticalTable:** Fix Loading Shimmer to take full table width ([#347](https://github.com/SAP/ui5-webcomponents-react/issues/347)) ([d31cf5c](https://github.com/SAP/ui5-webcomponents-react/commit/d31cf5cb4752facbc15789c60b087a6c61e3c96c)), closes [#346](https://github.com/SAP/ui5-webcomponents-react/issues/346)
* **AnalyticalTable:** Update react-table and fix TreeTable selection columns ([#344](https://github.com/SAP/ui5-webcomponents-react/issues/344)) ([7a46d2d](https://github.com/SAP/ui5-webcomponents-react/commit/7a46d2d845d145e5cfb6ccdac396d58b10f775a3)), closes [#333](https://github.com/SAP/ui5-webcomponents-react/issues/333) [#336](https://github.com/SAP/ui5-webcomponents-react/issues/336)
* **ThemingParameters:** Add temporary quick fix for missing variables ([#350](https://github.com/SAP/ui5-webcomponents-react/issues/350)) ([ef1934a](https://github.com/SAP/ui5-webcomponents-react/commit/ef1934a9d27ccb6168a345236729bdbdddb29cce))


### Code Refactoring

* **ThemeProvider:** Remove JSSProvider and simplify all tests ([#355](https://github.com/SAP/ui5-webcomponents-react/issues/355)) ([db50f30](https://github.com/SAP/ui5-webcomponents-react/commit/db50f3060096b801654fc64f7ea9dc532f1d3778))


### Features

* **Charts:** Create new SVG based charts ([#325](https://github.com/SAP/ui5-webcomponents-react/issues/325)) ([0e4fb72](https://github.com/SAP/ui5-webcomponents-react/commit/0e4fb72753772a5e09d51fd852fdfad6b01d9b4b)), closes [#280](https://github.com/SAP/ui5-webcomponents-react/issues/280)
* **ObjectPage:** Add 'Pin-Header' button ([#354](https://github.com/SAP/ui5-webcomponents-react/issues/354)) ([0e5e9b6](https://github.com/SAP/ui5-webcomponents-react/commit/0e5e9b658fc0aff0304dae952284d337e89e9d2c)), closes [#345](https://github.com/SAP/ui5-webcomponents-react/issues/345) [#334](https://github.com/SAP/ui5-webcomponents-react/issues/334) [#248](https://github.com/SAP/ui5-webcomponents-react/issues/248)
* **ThemingParameters:** Switch to offical Theme Designer Parameters ([#348](https://github.com/SAP/ui5-webcomponents-react/issues/348)) ([dc6f94e](https://github.com/SAP/ui5-webcomponents-react/commit/dc6f94e73fe0dd9c2828fdf222a5b8135f5721e4)), closes [#240](https://github.com/SAP/ui5-webcomponents-react/issues/240)


### BREAKING CHANGES

* **ThemeProvider:** ThemeProvider does not longer render a JSSProvider and the `jss`-prop is removed. If you need a custom JSS setup, please render your own JSSProvider.





## [0.8.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.5...v0.8.6) (2020-03-09)


### Bug Fixes

* **AnalyticalTable:** Don't modify read-only classList ([#339](https://github.com/SAP/ui5-webcomponents-react/issues/339)) ([65f3876](https://github.com/SAP/ui5-webcomponents-react/commit/65f3876ea64d92dc4551f1f4f7cd76b7453af3fe))





## [0.8.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.4...v0.8.5) (2020-02-20)


### Bug Fixes

* **AnalyticalTable:** fix sorting with minRows ([#327](https://github.com/SAP/ui5-webcomponents-react/issues/327)) ([11b6321](https://github.com/SAP/ui5-webcomponents-react/commit/11b63214c24c5e72ee9dee75da9e915de18c19a8))
* **Bar:** Adjust alignment and add Bar design  ([#320](https://github.com/SAP/ui5-webcomponents-react/issues/320)) ([117c9f3](https://github.com/SAP/ui5-webcomponents-react/commit/117c9f350a238ea950335dabfa8b9a0e47201dec))





## [0.8.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.3...v0.8.4) (2020-02-13)


### Bug Fixes

* **AnalyticalTable:** fire onRowSelected when header select all chechbox changes ([5910581](https://github.com/SAP/ui5-webcomponents-react/commit/59105811bc00c3eed4d55df147f872c4aff312c9))
* **AnalyticalTable:** fixed alternateRowColor sort bug ([#316](https://github.com/SAP/ui5-webcomponents-react/issues/316)) ([ee37009](https://github.com/SAP/ui5-webcomponents-react/commit/ee3700957056ba188cf5c62699db485a70bcc98c))
* **Avatar:** Adjust icon size in sync with Avatar Size  ([#317](https://github.com/SAP/ui5-webcomponents-react/issues/317)) ([a3af613](https://github.com/SAP/ui5-webcomponents-react/commit/a3af613c6431eec039a74ae20bb28ddd1e94f076))
* **withWebComponent:** Add handler of events those are not specified in metadata of ui5-webcomponents ([#315](https://github.com/SAP/ui5-webcomponents-react/issues/315)) ([978b126](https://github.com/SAP/ui5-webcomponents-react/commit/978b126e9c01213acaa3f0509deb2457e3b35122))





## [0.8.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.2...v0.8.3) (2020-02-11)


### Bug Fixes

* **AnalyticalTable:** Always render selection column as first column ([75a43a3](https://github.com/SAP/ui5-webcomponents-react/commit/75a43a3f55034ec00b7ba321f9e6abaa63187bb7)), closes [#311](https://github.com/SAP/ui5-webcomponents-react/issues/311)





## [0.8.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.1...v0.8.2) (2020-02-10)


### Bug Fixes

* **AnalyticalTable:** Show selection column with select all in header ([#310](https://github.com/SAP/ui5-webcomponents-react/issues/310)) ([b60842c](https://github.com/SAP/ui5-webcomponents-react/commit/b60842c4790a29a6aa817509834905c1e59d03d4))





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
