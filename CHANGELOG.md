# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0...v2.0.1) (2024-08-26)

### Bug Fixes

- remove json export from root index files ([#6269](https://github.com/SAP/ui5-webcomponents-react/issues/6269)) ([a665715](https://github.com/SAP/ui5-webcomponents-react/commit/a665715b0652bfedf860e0c2a5ca407be9e41aa7))

# [2.0.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.3...v2.0.0) (2024-08-23)

### Bug Fixes

- add runtime index to global Modal and Style store ([#6248](https://github.com/SAP/ui5-webcomponents-react/issues/6248)) ([8184b4e](https://github.com/SAP/ui5-webcomponents-react/commit/8184b4e98fea38ec1b1ba40a43fb31651bba8ac8))
- **AnalyticalTable:** ensure loading indicator displays correctly across all browsers ([#6244](https://github.com/SAP/ui5-webcomponents-react/issues/6244)) ([4fb6008](https://github.com/SAP/ui5-webcomponents-react/commit/4fb600806ea9451b20f4c3478cbbd44a10214a13)), closes [#6243](https://github.com/SAP/ui5-webcomponents-react/issues/6243)

### chore

- **charts:** remove MicroBarChart ([#6249](https://github.com/SAP/ui5-webcomponents-react/issues/6249)) ([93439fb](https://github.com/SAP/ui5-webcomponents-react/commit/93439fb97f14db4dbc642014b3735bf3bb7a94f9))
- remove dedicated SSR build ([#6253](https://github.com/SAP/ui5-webcomponents-react/issues/6253)) ([3f3b465](https://github.com/SAP/ui5-webcomponents-react/commit/3f3b465d7ad86ebf16ff4cb966c45e149235054c))

### Code Refactoring

- **AnalyticalTable:** remove `selectedFlatRows` & add `rowsById` to `onRowSelect` ([#6255](https://github.com/SAP/ui5-webcomponents-react/issues/6255)) ([ee2785c](https://github.com/SAP/ui5-webcomponents-react/commit/ee2785c349a97616c3de173c1731ee1d2b399837))

### Features

- **AnalyticalTable - TypeScript:** improve instance & prop types ([#6256](https://github.com/SAP/ui5-webcomponents-react/issues/6256)) ([796f7c1](https://github.com/SAP/ui5-webcomponents-react/commit/796f7c131d0719c00993fb75228e6766ec2290a8))

### BREAKING CHANGES

- **AnalyticalTable - TypeScript:** The internal table instance types were updated, leading
  to stricter types, so depending on your implementation, you might
  encounter ts-errors.
- the dedicated build for Server Side Rendering in the `ssr` folder has been removed as the UI5 Web Components now natively support being imported in Node.js environments. You can import all components from `@ui5/webcomponents-react`.
- **AnalyticalTable:** `selectedFlatRows` has been removed from the `detail`
  object of `onRowSelect`.
- **charts:** the `MicroBarChart` component as been removed as this is a legacy component which is not covered by design specs anymore.

# [2.0.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2024-08-21)

### Bug Fixes

- **AnalyticalTable:** correct `CustomElementsScope` import path ([#6184](https://github.com/SAP/ui5-webcomponents-react/issues/6184)) ([de68b2d](https://github.com/SAP/ui5-webcomponents-react/commit/de68b2d733c05f0f1994ab11feedbb93a0593b59)), closes [#6183](https://github.com/SAP/ui5-webcomponents-react/issues/6183)
- **MessageBox:** don't throw error if `onClose` is not passed ([#6226](https://github.com/SAP/ui5-webcomponents-react/issues/6226)) ([7981491](https://github.com/SAP/ui5-webcomponents-react/commit/79814918c0810214535a11a4b0e4c68324a2d1c9)), closes [#6215](https://github.com/SAP/ui5-webcomponents-react/issues/6215)
- **VariantManagement:** apply correct header size for "Manage Views" dialog ([#6185](https://github.com/SAP/ui5-webcomponents-react/issues/6185)) ([8b01af4](https://github.com/SAP/ui5-webcomponents-react/commit/8b01af4c9c734b93bc447f2ca86dd6e0a4abe891))

### Code Refactoring

- **FilterBar:** remove reference copying of filter/input elements ([#6214](https://github.com/SAP/ui5-webcomponents-react/issues/6214)) ([4473118](https://github.com/SAP/ui5-webcomponents-react/commit/4473118f82031ab69216f07afa9218835268eb0c)), closes [#5652](https://github.com/SAP/ui5-webcomponents-react/issues/5652)
- **Modals:** avoid unnecessary use of `createPortal` ([#6242](https://github.com/SAP/ui5-webcomponents-react/issues/6242)) ([a571981](https://github.com/SAP/ui5-webcomponents-react/commit/a57198133420c8befd81793948d5cb8e634f2c78))

### Features

- expose CLI package for creating web component wrappers ([#6212](https://github.com/SAP/ui5-webcomponents-react/issues/6212)) ([28b14d9](https://github.com/SAP/ui5-webcomponents-react/commit/28b14d9b2fbc99621f89cfd94b1234bebd37f4fb)), closes [#5046](https://github.com/SAP/ui5-webcomponents-react/issues/5046)
- **react 19:** bind web components event handlers using react lifecycle ([#6169](https://github.com/SAP/ui5-webcomponents-react/issues/6169)) ([70f9f27](https://github.com/SAP/ui5-webcomponents-react/commit/70f9f27329a2b361f203a9911fa05e12415bc9f4))
- register current runtime version in window ([#6222](https://github.com/SAP/ui5-webcomponents-react/issues/6222)) ([367628c](https://github.com/SAP/ui5-webcomponents-react/commit/367628c117a389b85a9b9fa977d865fdad4e7f33)), closes [#6210](https://github.com/SAP/ui5-webcomponents-react/issues/6210)

### BREAKING CHANGES

- **Modals:** modals are now rendered as children of the `Modals`
  component instead of being rendered into `document.body`
- **FilterBar:** The `FilterBar` component was completely overhauled and references of input elements aren’t copied to the filters dialog anymore, also internal logic for reordering and selection has been removed, meaning it’s necessary to control their values manually (e.g. via React state).
- **FilterBar:** `onToggleFilters`: The `detail` property of the event now only includes `visible` and `nativeDetail` properties. `filters` and `search` have been removed.
- **FilterBar:** `onFiltersDialogSave`: The `detail` property of the event now only includes `selectedFilterKeys`, `reorderedFilterKeys` and `nativeDetail` properties. `elements`, `toggledElements`, `filters`, `search`, `orderIds` have been removed.
- **FilterBar:** `onFiltersDialogCancel`: The event is now a callback instead of a `Ui5CustomEvent`. It implements the `escPressed` parameter.
- **FilterBar:** `onFiltersDialogClose`: The event is now a callback instead of a `Ui5CustomEvent`. It implements the `closeTrigger` parameter.
- **FilterBar:** `onFiltersDialogSelectionChange`: The event is now a callback instead of a `Ui5CustomEvent`. It implements a payload object as parameter.
- **FilterBar:** `onFiltersDialogSearch`: The event is now a standard `Input` `onInput` event. The `detail` properties `value` and `element` have been removed.
- **FilterBar:** `onClear`: The event is now a standard `ToolbarButton` `onClick` event. The `detail` properties `filters` and `search` have been removed.
- **FilterBar:** `onGo`: The event is now a standard `ToolbarButton` `onClick` event. The `detail` properties `elements`, `filters`, `search`, `nativeDetail` have been removed.
- **FilterBar:** `onRestore`: The event is now a callback instead of a `CustomEvent`. It implements a payload object as parameter.
- **FilterBar:** `onFiltersDialogOpen (TypeScript)`: The target of the event is now a `ToolbarButton`.
- **FilterBar:** `portalContainer` has been removed as it's no longer needed due to the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) used in the `Popover` ui5 web component.
- **FilterBar:** `FilterGroupItem`: `orderId` has been removed. Please use `filterKey` instead.

# [2.0.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.1...v2.0.0-rc.2) (2024-08-07)

### Bug Fixes

- **AnalyticalTable:** add "Filter" text to column popover ([#6164](https://github.com/SAP/ui5-webcomponents-react/issues/6164)) ([c035703](https://github.com/SAP/ui5-webcomponents-react/commit/c0357037ae2920ecadde73feb9c85bac2cffc17a)), closes [#6132](https://github.com/SAP/ui5-webcomponents-react/issues/6132)
- **AnalyticalTable:** add `aria-hidden` to multi selection checkboxes ([#6134](https://github.com/SAP/ui5-webcomponents-react/issues/6134)) ([082d1c0](https://github.com/SAP/ui5-webcomponents-react/commit/082d1c039d91486d90a175e72d9213434fe90a7e)), closes [#6133](https://github.com/SAP/ui5-webcomponents-react/issues/6133)
- **AnalyticalTable:** allow selecting all rows via keyboard ([#6168](https://github.com/SAP/ui5-webcomponents-react/issues/6168)) ([65de580](https://github.com/SAP/ui5-webcomponents-react/commit/65de5801a4b2b919c09420065fe25ddfe9fb24cf)), closes [#6110](https://github.com/SAP/ui5-webcomponents-react/issues/6110)
- **AnalyticalTable:** fix pop-in content styles ([#6170](https://github.com/SAP/ui5-webcomponents-react/issues/6170)) ([5f7d56b](https://github.com/SAP/ui5-webcomponents-react/commit/5f7d56b11b5864c22ca991b5be8ab7c36c9c573e)), closes [#5977](https://github.com/SAP/ui5-webcomponents-react/issues/5977)
- **codemod:** improve replacements for `Text` ([#6123](https://github.com/SAP/ui5-webcomponents-react/issues/6123)) ([277120b](https://github.com/SAP/ui5-webcomponents-react/commit/277120b8c44a5f8aa227b6f84264cbd4accdd360))
- **deps:** update dependency @tanstack/react-virtual to v3.8.4 (main) ([#6137](https://github.com/SAP/ui5-webcomponents-react/issues/6137)) ([ef1650b](https://github.com/SAP/ui5-webcomponents-react/commit/ef1650b4fe4476c22e1db97037e255df6a71aa15))
- **ObjectPage:** increase header z-index ([#6117](https://github.com/SAP/ui5-webcomponents-react/issues/6117)) ([e9aeb63](https://github.com/SAP/ui5-webcomponents-react/commit/e9aeb6352cf148c015dd303a2ec51c3ec4810b09)), closes [#6116](https://github.com/SAP/ui5-webcomponents-react/issues/6116)
- **ObjectPageTitle:** prevent styling race condition when using static css bundle ([#6115](https://github.com/SAP/ui5-webcomponents-react/issues/6115)) ([f4c4ebb](https://github.com/SAP/ui5-webcomponents-react/commit/f4c4ebb29a04073f76590a103b552862e3fa55da))
- **UI5CustomEvent - TypeScript:** correctly `currentTarget` type ([#6167](https://github.com/SAP/ui5-webcomponents-react/issues/6167)) ([656ad5a](https://github.com/SAP/ui5-webcomponents-react/commit/656ad5a47d3c35669455b3a8b03bc7bd422c31d2)), closes [#6136](https://github.com/SAP/ui5-webcomponents-react/issues/6136)

### Features

- update to UI5 Web Components ~2.1.1 ([#6151](https://github.com/SAP/ui5-webcomponents-react/issues/6151)) ([80c9a65](https://github.com/SAP/ui5-webcomponents-react/commit/80c9a652be7eb25c3b882579666ab7c950bbc0cb)), closes [#5971](https://github.com/SAP/ui5-webcomponents-react/issues/5971)
- **VariantManagement:** introduce `size` prop & improve docs ([#6166](https://github.com/SAP/ui5-webcomponents-react/issues/6166)) ([c0184cc](https://github.com/SAP/ui5-webcomponents-react/commit/c0184cc979daebe076768d8bc853f704d85b84b6))

# [2.0.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.0...v2.0.0-rc.1) (2024-07-19)

### Bug Fixes

- **codemod:** fix import statment for UI5 Web Component enums ([#6084](https://github.com/SAP/ui5-webcomponents-react/issues/6084)) ([b3a5aed](https://github.com/SAP/ui5-webcomponents-react/commit/b3a5aed8b99c31e7475c2d305d6804b9afa7275b))

### Code Refactoring

- drop support for React 16 & 17 ([#6095](https://github.com/SAP/ui5-webcomponents-react/issues/6095)) ([07facf3](https://github.com/SAP/ui5-webcomponents-react/commit/07facf3678c6d0432eb30ddae8c90784dd8351e6))

### Features

- **codemod:** basic replacements for `DynamicPage` ([#6086](https://github.com/SAP/ui5-webcomponents-react/issues/6086)) ([93819a9](https://github.com/SAP/ui5-webcomponents-react/commit/93819a9a9c7fd87d16d5bc64094890e8f8d5684a))
- **codemod:** transform Text `wrapping` to `maxLines` ([#6085](https://github.com/SAP/ui5-webcomponents-react/issues/6085)) ([a879a9b](https://github.com/SAP/ui5-webcomponents-react/commit/a879a9b107dc50e1bc267bfd2abe32038201c30f))
- **ObjectPage:** refactor component to support ui5wc v2 ([#6089](https://github.com/SAP/ui5-webcomponents-react/issues/6089)) ([105b2da](https://github.com/SAP/ui5-webcomponents-react/commit/105b2da44c1c2727080da8558dfb6c4ef65e2b39))

### BREAKING CHANGES

- the minimum required `react` and `react-dom` version is now 18.0.0
- **ObjectPage:** `headerContent` has been renamed to `headerArea` and
  now only accepts the `ObjectPageHeader` component.
- **ObjectPage:** `headerTitle` has been renamed to `titleArea` and now
  only accepts the `ObjectPageTitle` component.
- **ObjectPage:** `footer` has been renamed to `footerArea`.
- **ObjectPage:** `onToggleHeaderContent` has been renamed to
  `onToggleHeaderArea`
- **ObjectPage:** `onPinnedStateChange` has been renamed to
  `onPinButtonToggle`
- **ObjectPage:** **ObjectPageTitle**: `actions` has been renamed to
  `actionsBar`. Instead of single actions, the `Toolbar` component should
  now be passed.
- **ObjectPage:** **ObjectPageTitle**: `navigationActions` has been
  renamed to `navigationBar`. Instead of single actions, the `Toolbar`
  component should now be passed.
- **ObjectPage:** **ObjectPageTitle**: `actionsToolbarProps`: Since it's
  now recommended passing the `Toolbar` component directly, this prop is
  redundant.
- **ObjectPage:** **ObjectPageTitle**: `navigationActionsToolbarProps`:
  Since it's now recommended passing the `Toolbar` component directly,
  this prop is redundant.

# [2.0.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.29.2...v2.0.0-rc.0) (2024-07-11)

### Bug Fixes

- **AnalyticalTable - `useRowDisableSelection`:** remove `title` from select-all cell ([#5955](https://github.com/SAP/ui5-webcomponents-react/issues/5955)) ([c731554](https://github.com/SAP/ui5-webcomponents-react/commit/c73155447259e709b1c4c4a86977778e888505ff)), closes [#5953](https://github.com/SAP/ui5-webcomponents-react/issues/5953)
- **AnalyticalTable:** don't wrap custom header content in `Text` component ([#6022](https://github.com/SAP/ui5-webcomponents-react/issues/6022)) ([455acc1](https://github.com/SAP/ui5-webcomponents-react/commit/455acc15a886227e084828d88a4934047e43be33))
- **AnalyticalTable:** fire row select & click events on `keyup` instead of `keydown` ([#6013](https://github.com/SAP/ui5-webcomponents-react/issues/6013)) ([f1386f8](https://github.com/SAP/ui5-webcomponents-react/commit/f1386f8698832f2629f6a438eed456d0e5de2bcb)), closes [#4388](https://github.com/SAP/ui5-webcomponents-react/issues/4388)
- **AnalyticalTable:** fix custom header alignment ([#6068](https://github.com/SAP/ui5-webcomponents-react/issues/6068)) ([c4a49e4](https://github.com/SAP/ui5-webcomponents-react/commit/c4a49e43486783297fbcdda2a2674e061cbcc574))
- **AnalyticalTable:** improve focus border alignment ([#5944](https://github.com/SAP/ui5-webcomponents-react/issues/5944)) ([18aeb52](https://github.com/SAP/ui5-webcomponents-react/commit/18aeb52a92f19b8c4d408968a4040f2fc5a9c994)), closes [#5898](https://github.com/SAP/ui5-webcomponents-react/issues/5898)
- apply correct scoping for internal ui5wc CSS vars ([#6057](https://github.com/SAP/ui5-webcomponents-react/issues/6057)) ([3822bee](https://github.com/SAP/ui5-webcomponents-react/commit/3822beed4d141f3430fc6ab567de9b85f538005f)), closes [#6051](https://github.com/SAP/ui5-webcomponents-react/issues/6051)
- **CommonProps - TypeScript:** remove `dangerouslySetInnerHTML` from types ([#6002](https://github.com/SAP/ui5-webcomponents-react/issues/6002)) ([f5f9101](https://github.com/SAP/ui5-webcomponents-react/commit/f5f9101cce39a0b66674f9b9b6fce35c9c333eb1))
- **deps:** update dependency @tanstack/react-virtual to v3.5.1 ([#5883](https://github.com/SAP/ui5-webcomponents-react/issues/5883)) ([2db3ca9](https://github.com/SAP/ui5-webcomponents-react/commit/2db3ca96e36c1e6d52ce7c6a50dc6038d17d3a16))
- **deps:** update dependency react-content-loader to v7.0.1 ([#5899](https://github.com/SAP/ui5-webcomponents-react/issues/5899)) ([5ed11e9](https://github.com/SAP/ui5-webcomponents-react/commit/5ed11e94b1fc19b51ee8437fb019ff9d4037037d))
- **deps:** update dependency react-content-loader to v7.0.2 ([#5909](https://github.com/SAP/ui5-webcomponents-react/issues/5909)) ([cb79434](https://github.com/SAP/ui5-webcomponents-react/commit/cb79434d3bbbb1de8cef023abf1c8fbfb2368ab0))
- **deps:** update react monorepo to v19.0.0-rc-fb9a90fa48-20240614 (patch) ([#5928](https://github.com/SAP/ui5-webcomponents-react/issues/5928)) ([863055a](https://github.com/SAP/ui5-webcomponents-react/commit/863055ae220a6647f54359b28d0d4d9b1da1bc24))
- **MessageBox - TypeScript:** adjust `onClose` type ([#5975](https://github.com/SAP/ui5-webcomponents-react/issues/5975)) ([a30867a](https://github.com/SAP/ui5-webcomponents-react/commit/a30867ae33df291db40631bf585e4db3228dfec4))
- **MessageViewItem:** enable details view if `titleText` is overflowing ([#6015](https://github.com/SAP/ui5-webcomponents-react/issues/6015)) ([dba28ce](https://github.com/SAP/ui5-webcomponents-react/commit/dba28ce1378c027238cbb1fcd96eb0f07bb51283)), closes [#5990](https://github.com/SAP/ui5-webcomponents-react/issues/5990)
- **MessageView:** use correct icon and color for default type ([#6016](https://github.com/SAP/ui5-webcomponents-react/issues/6016)) ([0018bba](https://github.com/SAP/ui5-webcomponents-react/commit/0018bbaf5f478ed66475a3571cf66f5ae6b93138))
- **NumericSideIndicator:** fix alignment ([#6064](https://github.com/SAP/ui5-webcomponents-react/issues/6064)) ([7ecd301](https://github.com/SAP/ui5-webcomponents-react/commit/7ecd30123eac6629bf7cbb68098c6241c36e2b1f))
- **ObjectStatus:** remove `HTMLDivElement` from `onClick` type ([#6011](https://github.com/SAP/ui5-webcomponents-react/issues/6011)) ([671cfaa](https://github.com/SAP/ui5-webcomponents-react/commit/671cfaade247894784863a27c98978a60a8646fd))
- use new JSX transform in preparation for React 19 ([#5837](https://github.com/SAP/ui5-webcomponents-react/issues/5837)) ([7dcad64](https://github.com/SAP/ui5-webcomponents-react/commit/7dcad64b3fb627f245a0a9e1a46e8ac01399ae09))

### chore

- remove `jestSetup` ([#5906](https://github.com/SAP/ui5-webcomponents-react/issues/5906)) ([2da6d60](https://github.com/SAP/ui5-webcomponents-react/commit/2da6d607695d21f64c2a893612845bde8b3f7ff7))
- remove `react-jss` ([#5907](https://github.com/SAP/ui5-webcomponents-react/issues/5907)) ([5342836](https://github.com/SAP/ui5-webcomponents-react/commit/53428361107f0fd3f3bb6781ebc07092a16a0fe3))
- remove deprecated `AnalyticalCard` component ([#5887](https://github.com/SAP/ui5-webcomponents-react/issues/5887)) ([1d8b257](https://github.com/SAP/ui5-webcomponents-react/commit/1d8b2573bfc791d560f9f495336eb9fa4125d900))

### Code Refactoring

- **ActionSheet:** api alignment ([#5956](https://github.com/SAP/ui5-webcomponents-react/issues/5956)) ([5b2ac63](https://github.com/SAP/ui5-webcomponents-react/commit/5b2ac63943461db5e7bbb12040b29c98344402c5))
- **AnalyticalTable:** remove deprecated props & enums ([#6021](https://github.com/SAP/ui5-webcomponents-react/issues/6021)) ([ca13875](https://github.com/SAP/ui5-webcomponents-react/commit/ca13875a46a755fe8d1d4c325b33295561f7d6ad))
- **AnalyticalTable:** remove unnecessary `portalContainer` prop ([#6039](https://github.com/SAP/ui5-webcomponents-react/issues/6039)) ([7e19fbb](https://github.com/SAP/ui5-webcomponents-react/commit/7e19fbbce37aac55fdc0e73c90958caf1a92eb5f))
- **enums:** harmonize enum names ([#5970](https://github.com/SAP/ui5-webcomponents-react/issues/5970)) ([98b9bb7](https://github.com/SAP/ui5-webcomponents-react/commit/98b9bb7351e233ec958553a7f8584015434ea457))
- **FilterGroupItem:** api alignment ([#6012](https://github.com/SAP/ui5-webcomponents-react/issues/6012)) ([0e6a326](https://github.com/SAP/ui5-webcomponents-react/commit/0e6a326fd7b338408eb0a801fce495988d264d29))
- harmonize prop/enum names ([#6040](https://github.com/SAP/ui5-webcomponents-react/issues/6040)) ([4b4815b](https://github.com/SAP/ui5-webcomponents-react/commit/4b4815b0066cce7e6522dc5fd05b9c14a24e7555))
- make titleText required for object page sections ([#6014](https://github.com/SAP/ui5-webcomponents-react/issues/6014)) ([10e50a2](https://github.com/SAP/ui5-webcomponents-react/commit/10e50a2f73602d4a6985ed4a7ada29c3450b2d22))
- **MessageBox:** refactor `onClose` event ([#5989](https://github.com/SAP/ui5-webcomponents-react/issues/5989)) ([ef490f4](https://github.com/SAP/ui5-webcomponents-react/commit/ef490f487b51b1ca8c0d499ddaa0d33bdf518ca2))
- **Modals:** replace context with use-sync-external-store ([#6042](https://github.com/SAP/ui5-webcomponents-react/issues/6042)) ([e0818c4](https://github.com/SAP/ui5-webcomponents-react/commit/e0818c4a3ba50d989c78b9f228fbc5b973926066))
- **ObjectPage:** api alignment ([#6047](https://github.com/SAP/ui5-webcomponents-react/issues/6047)) ([703084b](https://github.com/SAP/ui5-webcomponents-react/commit/703084bbb1994516da06066a7f292ffe396955d4))
- remove all `spacing` variables ([#6009](https://github.com/SAP/ui5-webcomponents-react/issues/6009)) ([c2c3730](https://github.com/SAP/ui5-webcomponents-react/commit/c2c3730e7a58cef531a8bfe444ed38a445fad671))
- replace `Toolbar` with UI5 Web Component ([#6061](https://github.com/SAP/ui5-webcomponents-react/issues/6061)) ([bf60767](https://github.com/SAP/ui5-webcomponents-react/commit/bf6076772d691a6a5d98678d38ac705bed4bfb2a))

### Features

- **AnalyticalTable:** introduce `loadingDelay` prop ([#6025](https://github.com/SAP/ui5-webcomponents-react/issues/6025)) ([6d80fd8](https://github.com/SAP/ui5-webcomponents-react/commit/6d80fd8c89838bea6c70f9b6138e8a294295b8b5))
- **charts:** introduce `loadingDelay` prop ([#6027](https://github.com/SAP/ui5-webcomponents-react/issues/6027)) ([71fcb40](https://github.com/SAP/ui5-webcomponents-react/commit/71fcb408bf2bafd8af4d6b4c7c7d47f4c518e520))
- **cli:** create codemod for UI5 Web Components React v2 migration ([#5908](https://github.com/SAP/ui5-webcomponents-react/issues/5908)) ([9f65c98](https://github.com/SAP/ui5-webcomponents-react/commit/9f65c987c39093b240e1230d783c66376d29aad6))
- create compat package ([#5894](https://github.com/SAP/ui5-webcomponents-react/issues/5894)) ([f4516cc](https://github.com/SAP/ui5-webcomponents-react/commit/f4516cce3b3f246929f086154f6c185c25dd357e))
- **DynamicPage & ObjectPage:** use ui5wc `DynamicPage` & rename `ObjectPage` components ([#5939](https://github.com/SAP/ui5-webcomponents-react/issues/5939)) ([cb684cd](https://github.com/SAP/ui5-webcomponents-react/commit/cb684cdfbf70d5010427b6806f3dc4ba0c47266a))
- **Form:** replace with UI5 Web Component ([#5925](https://github.com/SAP/ui5-webcomponents-react/issues/5925)) ([1e246ee](https://github.com/SAP/ui5-webcomponents-react/commit/1e246ee5da541f48ffcb08833babb483c41e27d4))
- move `Loader` to `compat` package & replace with `BusyIndicator` ([#6020](https://github.com/SAP/ui5-webcomponents-react/issues/6020)) ([80d8c0b](https://github.com/SAP/ui5-webcomponents-react/commit/80d8c0b1f4ed5b69e6f1aa835f5b20d0cf264622))
- **ObjectPage:** introduce `preserveHeaderStateOnClick` prop ([#6049](https://github.com/SAP/ui5-webcomponents-react/issues/6049)) ([c3c6f06](https://github.com/SAP/ui5-webcomponents-react/commit/c3c6f06dbfcbebf51abe0238e2eec7fe9dcb1d63))
- **RadialChart:** introduce `loading` & `loadingDelay` props ([#6028](https://github.com/SAP/ui5-webcomponents-react/issues/6028)) ([3891437](https://github.com/SAP/ui5-webcomponents-react/commit/3891437548c6e51e84c4ebdfe0180e1f4e2cd8ac))
- support objects and references as Web Component props ([#5957](https://github.com/SAP/ui5-webcomponents-react/issues/5957)) ([f41d32b](https://github.com/SAP/ui5-webcomponents-react/commit/f41d32b47f4ecbd818afeedb0b72a5b624e4514c))
- support React 19 ([#5860](https://github.com/SAP/ui5-webcomponents-react/issues/5860)) ([c78ab7f](https://github.com/SAP/ui5-webcomponents-react/commit/c78ab7f5c9998bbcf65b107151d206eccb3c6f99))
- **Text:** replace with UI5 Web Component ([#5988](https://github.com/SAP/ui5-webcomponents-react/issues/5988)) ([19ed2ec](https://github.com/SAP/ui5-webcomponents-react/commit/19ed2eceba7a9539fd2609e3f50226b4182b5cd8))
- **ThemeProvider:** apply Fiori scrollbar styling to all scroll containers ([#5978](https://github.com/SAP/ui5-webcomponents-react/issues/5978)) ([9a611fd](https://github.com/SAP/ui5-webcomponents-react/commit/9a611fde3b3ce7eade5c90bbc61a346a189d2417))
- update to @ui5/webcomonents 2.0.0-rc.6 ([#5940](https://github.com/SAP/ui5-webcomponents-react/issues/5940)) ([60907b4](https://github.com/SAP/ui5-webcomponents-react/commit/60907b4a43902a899b7f48e9dc6609d0d5b9a731))
- update to UI5 Web Components 2.0 RC ([#5861](https://github.com/SAP/ui5-webcomponents-react/issues/5861)) ([7a27b7f](https://github.com/SAP/ui5-webcomponents-react/commit/7a27b7f0a3d58748e704ceaf5c4b5568c7e67931))
- update UI5 Web Components to 2.0.0 ([#6023](https://github.com/SAP/ui5-webcomponents-react/issues/6023)) ([49efb9b](https://github.com/SAP/ui5-webcomponents-react/commit/49efb9b71aa41d7efdcc8f02b592f91cf365d2b6))

### BREAKING CHANGES

- the `Toolbar` component and its related components have been moved to the `@ui5/webcomponents-react-compat` package.
- the `ToolbarV2` component has been renamed to `Toolbar`
- the `ToolbarSpacerV2` component has been renamed to `ToolbarSpacer`
- the `ToolbarSeparatorV2` component has been renamed to `ToolbarSeparator`
- **ObjectPage:** the props `showHideHeaderButton` and `showTitleInHeaderContent` have been removed.
- **ObjectPage:** the prop `alwaysShowContentHeader` has been renamed to `headerPinned`
- **ObjectPage:** the prop `headerContentPinnable` has been renamed to `hidePinButton` and its logic has been inverted. The pin button is now shown by default.
- **ObjectPage:** the prop `showSubHeaderRight` has been removed as it's not defined by design anymore.
- **Modals:** **ThemeProvider**: the prop `withoutModalsProvider` has been removed. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs).
- **Modals:** the hooks `useShowDialog`, `useShowPopover`, `useShowResponsivePopover`, `useShowMenu`, `useShowMessageBox` and `useShowToast` have been removed. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs#modals).
- **ActionSheet:** `a11yConfig` has been renamed to `accessibilityAttributes`.
- **AnalyticalTable:** The properties and values for the `AnalyticalTableSelectionMode` enum has been changed. `SingleSelect` is now `Single` and `MultiSelect` is now `Multiple`.
- **AnalyticalTable:** `a11yConfig` has been renamed to `accessibilityAttributes`.
- **ObjectPage:** `a11yConfig` has been renamed to `accessibilityAttributes`.
- **ObjectStatus:** `active` has been renamed to `interactive`.
- **AnalyticalTable:** `portalContainer` has been removed as it's no longer needed due to the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API).
- updated UI5 Web Components to v2. All [breaking changes](https://sap.github.io/ui5-webcomponents/docs/migration-guides/to-version-2/) apply to this project as well.
- the `SuggestionGroupItem` component has been replaced by the `SuggestionItemGroup` component
- **AnalyticalTable:** The `TableScaleWidthMode` enum has been removed, please use `AnalyticalTableScaleWidthMode` instead.
- **AnalyticalTable:** The `TableSelectionBehavior` enum has been removed, please use `AnalyticalTableSelectionBehavior` instead.
- **AnalyticalTable:** The `TableSelectionMode ` enum has been removed, please use `AnalyticalTableSelectionMode` instead.
- **AnalyticalTable:** The `TableVisibleRowCountMode` enum has been removed, please use `AnalyticalTableVisibleRowCountMode ` instead.
- **AnalyticalTable:** The `alwaysShowSubComponent ` prop has been removed, please use `subComponentsBehavior` instead.
- **AnalyticalTable:** The default value (`true`) of the `sortable` prop has been removed, it is now required to explicitly set this prop, if the table should be sortable.
- **AnalyticalTable:** The `canReorder` [column property](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/data-display-analyticaltable--docs#column-properties) has been removed, please use `disableDragAndDrop` instead.
- The deprecated `Loader` component has been moved to the `@ui5/webcomponents-react-compat` package. Please use the `BusyIndicator` instead, as it's now the only loading indicator that is supported by our UX guidelines. Please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- **FilterGroupItem:** For a better aligned API, the `visible` and `visibleInFilterBar` (default: `true`) props have been replaced with `hidden` and `hiddenInFilterBar` (no default value).
- **ObjectPageSection**: the prop `titleText` is now required.
- **ObjectPageSection**: the default value `true` for the prop `titleTextUppercase` has been removed.
- **ObjectPageSubSection**: the prop `titleText` is now required.
- **AnalyticalTable:** When selecting or pressing a row by using the Space key, `onRowClick` and `onRowSelect` are now fired on `keyup` instead of`keydown`.
- **ObjectStatus:** **TypeScript**: the `HTMLDivElement` type has been removed from the `onClick` handler.
- All spacing variables have been removed. You can use common CSS classes as a substitute for most variables. For more information, please refer to our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs).
- **Text:** the `Text` component has been replaced with the `ui5-text` web component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- **Text:** **ExpandableText**: the inherited props `hyphenated` and `emptyIndicator` from the `Text` have been removed.
- **Text:** **ExpandableText**: the `portalContainer` prop has been removed as it's not needed anymore
- **CommonProps - TypeScript:** `dangerouslySetInnerHTML` type has been removed
- **ThemeProvider:** the `GlobalStyleClasses` enum has been removed
- **MessageBox:** `onClose` is now a plain callback and not a `CustomEvent` event anymore. It now receives two params: `action` & `escPressed`.
- **enums:** the `MessageBoxActions` enum has been renamed to `MessageBoxAction`
- **enums:** the `MessageBoxTypes` enum has been renamed to `MessageBoxType`
- **enums:** the `Themes` enum has been renamed to `Theme` and the deprecated "Belize" (`sap_belize`) theme family has been removed
- **ActionSheet:** the `portalContainer` prop has been removed as it's not needed anymore
- **ActionSheet:** the `showCancelButton` has been renamed to `hideCancelButton` and the logic has been inverted.
- the `StandardListItem` has been replaced with the `ListItemStandard` component
- the `CustomListItem` has been replaced with the `ListItemCustom` component
- the `MultiComboBoxGroupItem` has been replaced with the `MultiComboBoxItemGroup` component
- the `TableGroupRow` component has been deleted
- the `TableColumn` component has been replaced with the `TableHeaderCell` component
- **VariantManagement**: the `portalContainer` prop has been removed as it is no longer needed.
- **DynamicPage & ObjectPage:** The `DynamicPage` component has been replaced with the `ui5-dynamic-page` UI5 Web Component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- **DynamicPage & ObjectPage:** The `DynamicPageHeader` component has been replaced with the `ui5-dynamic-page-header` UI5 Web Component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- **DynamicPage & ObjectPage:** The `DynamicPageTitle` component has been replaced with the `ui5-dynamic-page-title` UI5 Web Component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- **DynamicPage & ObjectPage:** **ObjectPage:** `headerTitle` now only accepts the `ObjectPageTitle` component instead of the `DynamicPageTitle`.
- **DynamicPage & ObjectPage:** **ObjectPage:** `headerContent` now only accepts the `ObjectPageHeader` component instead of the `DynamicPageTitle`.
- **DynamicPage & ObjectPage:** **ObjectPage:** `a11yConfig.dynamicPageAnchorBar` has been renamed to `a11yConfig.objectPageAnchorBar`
- **Form:** The `Form` component has been replaced with the `ui5-form` UI5 Web Component, please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs) for more details.
- UI5 Web Components for React is no longer relying on `react-jss` internally, hence the dependency is now removed and the `react-jss` ThemeProvider is no longer rendered as part of our `ThemeProvider`. If you are relying on `react-jss` in your application, please make sure to render your own `react-jss` ThemeProvider.
- The `useResponsiveContentPadding` has been removed. You can achieve the same look and feel by using the [responsive content padding from Common CSS](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-common-css--docs#content-paddings).
- We stopped recommending `jest` as a testing framework over a year ago, thus the `jestSetup` file is removed. We recommend using [cypress](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/testing-with-cypress-setup--docs) instead.
- The `AnalyticalCard` component has been removed. Please use the `Card` component instead.
- updated UI5 Web Components to v2. All [breaking changes](https://sap.github.io/ui5-webcomponents/nightly/docs/Migrating%20to%20version%202.0%20guide/) apply to this project as well.
- `ActionSheet`: prop `placementType` has been renamed to `placement`, `onAfterClose` to `onClose` and `onAfterOpen` to `onOpen`
- the `Badge` component has been renamed to `Tag`
- the `ComboBoxGroupItem` component has been renamed to `ComboBoxItemGroup`
- the `GroupHeaderListItem` component has been renamed to `ListItemGroup`
- the `NotificationAction` component has been removed. You can use the `Menu` component instead.
- the `SelectMenu` and `SelectMenuOption` components have been removed. The `Select` and `Option` now allow custom content.
- `SelectDialog`: renamed prop `mode` to `selectionMode` to be aligned with new List API, `onAfterClose` to `onClose` and `onAfterOpen` to `onOpen`
- **ObjectPage (TypeScript):** replace `headerTitle` type with `ReactElement<DynamicPageTitlePropTypes>`
- **ObjectPage (TypeScript):** replace `headerContent` type with `ReactElement<DynamicPageHeaderPropTypes>`
- **ObjectPage (TypeScript):** replace `image` type with `string | ReactElement<AvatarPropTypes>`

# 1.x.x

The changelog for 1.x.x can be found [here](https://github.com/SAP/ui5-webcomponents-react/blob/v1.29.x/CHANGELOG.md).
