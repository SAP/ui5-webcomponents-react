# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.17.3](https://github.com/SAP/ui5-webcomponents-react/compare/v1.17.2...v1.17.3) (2023-07-19)

### Bug Fixes

- **AnalyticalTable:** add missing dependency property ([#4889](https://github.com/SAP/ui5-webcomponents-react/issues/4889)) ([001d362](https://github.com/SAP/ui5-webcomponents-react/commit/001d362dbba38462f40b392d5f3fe25f1b903272))
- **AnalyticalTable:** always return correct `column` property in `onRowExpandChange` ([#4839](https://github.com/SAP/ui5-webcomponents-react/issues/4839)) ([d129417](https://github.com/SAP/ui5-webcomponents-react/commit/d1294176e5ee1ab9e15a020e1bf40ba66539f2e7))
- **AnalyticalTable:** fix nested `manualGroupBy` ([#4862](https://github.com/SAP/ui5-webcomponents-react/issues/4862)) ([37911bb](https://github.com/SAP/ui5-webcomponents-react/commit/37911bb0ee156ab1953c995257688e4653e185aa))
- **AnalyticalTable:** return correct values in `onRowSelect` for filtered rows ([#4902](https://github.com/SAP/ui5-webcomponents-react/issues/4902)) ([d7ef54b](https://github.com/SAP/ui5-webcomponents-react/commit/d7ef54bc0e207a554156de82110fe856e08ac239))
- **deps:** update dependency clsx to v2 ([#4894](https://github.com/SAP/ui5-webcomponents-react/issues/4894)) ([80f08e9](https://github.com/SAP/ui5-webcomponents-react/commit/80f08e97700e55b9375e6e3cba36ca45ae5277b9))
- **SplitterLayout:** fix resizing SplitterElements via keyboard ([#4877](https://github.com/SAP/ui5-webcomponents-react/issues/4877)) ([d995c40](https://github.com/SAP/ui5-webcomponents-react/commit/d995c4047774aba0d1833eb3ce25ae615eb03014)), closes [#4876](https://github.com/SAP/ui5-webcomponents-react/issues/4876)
- **Toolbar:** correct child paddings ([#4847](https://github.com/SAP/ui5-webcomponents-react/issues/4847)) ([594dde1](https://github.com/SAP/ui5-webcomponents-react/commit/594dde18a44216491f3fd04c1ca1cfde111018d4)), closes [#4810](https://github.com/SAP/ui5-webcomponents-react/issues/4810)
- **UI5DomRef - TypeScript:** update interface to latest methods and properties ([#4872](https://github.com/SAP/ui5-webcomponents-react/issues/4872)) ([391abf1](https://github.com/SAP/ui5-webcomponents-react/commit/391abf1a276e8e7a51c3cf47f484c1bec29d6ea4))

## [1.17.2](https://github.com/SAP/ui5-webcomponents-react/compare/v1.17.1...v1.17.2) (2023-07-05)

### Bug Fixes

- **AnalyticalTable:** improve keyboard navigation and subcomponents focus handling ([#4829](https://github.com/SAP/ui5-webcomponents-react/issues/4829)) ([58ef172](https://github.com/SAP/ui5-webcomponents-react/commit/58ef1720fe6903614326d15f89b49781e06fb031))
- **VariantItem:** remove unsupported props of `StandardLisItem` from type definitions ([#4830](https://github.com/SAP/ui5-webcomponents-react/issues/4830)) ([d326f5f](https://github.com/SAP/ui5-webcomponents-react/commit/d326f5fb6208628ae1e93e959dff8acc61c35781))

## [1.17.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.17.0...v1.17.1) (2023-07-04)

### Bug Fixes

- **deps:** update dependency recharts to v2.7.2 ([#4776](https://github.com/SAP/ui5-webcomponents-react/issues/4776)) ([050c3b4](https://github.com/SAP/ui5-webcomponents-react/commit/050c3b4adb6b321178eac8489b9d9e83ecd540a1))
- **Form & FormGroup:** add `use client` directive ([#4822](https://github.com/SAP/ui5-webcomponents-react/issues/4822)) ([5bf98b3](https://github.com/SAP/ui5-webcomponents-react/commit/5bf98b3114ad7ec34334a59bd593595e3e315443))

# [1.17.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.16.3...v1.17.0) (2023-07-03)

### Bug Fixes

- **AnalyticalTable:** use correct height for expand button ([#4782](https://github.com/SAP/ui5-webcomponents-react/issues/4782)) ([168febf](https://github.com/SAP/ui5-webcomponents-react/commit/168febfc453c66758621b12c9c4c556eee76af7f))
- **translations:** fix "default" translation in Portuguese ([#4812](https://github.com/SAP/ui5-webcomponents-react/issues/4812)) ([006eea2](https://github.com/SAP/ui5-webcomponents-react/commit/006eea2ed13a75dae78c3a55a6f83f3f48d718b3)), closes [#4789](https://github.com/SAP/ui5-webcomponents-react/issues/4789)
- **TypeScript:** use UI5 Web Component types in custom components ([#4762](https://github.com/SAP/ui5-webcomponents-react/issues/4762)) ([522fe40](https://github.com/SAP/ui5-webcomponents-react/commit/522fe40391a3de3dbc1a6586cd4740403640e544))

### Features

- **Form:** allow custom components as children ([#4777](https://github.com/SAP/ui5-webcomponents-react/issues/4777)) ([4468314](https://github.com/SAP/ui5-webcomponents-react/commit/44683143ea7fccf28dd5656372143c47cc2b6fba)), closes [#4497](https://github.com/SAP/ui5-webcomponents-react/issues/4497) [#4597](https://github.com/SAP/ui5-webcomponents-react/issues/4597)
- update `@ui5/webcomponents` to `~1.15.1` ([#4811](https://github.com/SAP/ui5-webcomponents-react/issues/4811)) ([bebb6bb](https://github.com/SAP/ui5-webcomponents-react/commit/bebb6bb87c4eb55b4598137329c0a2f12d03293e))
- **VariantItem:** add `applyAutomaticallyText` prop ([#4779](https://github.com/SAP/ui5-webcomponents-react/issues/4779)) ([f12fc8d](https://github.com/SAP/ui5-webcomponents-react/commit/f12fc8de05da268f449ed5ed00183e114debf20a))

## [1.16.3](https://github.com/SAP/ui5-webcomponents-react/compare/v1.16.2...v1.16.3) (2023-06-19)

### Bug Fixes

- add browser condition to package exports ([#4756](https://github.com/SAP/ui5-webcomponents-react/issues/4756)) ([5088784](https://github.com/SAP/ui5-webcomponents-react/commit/5088784417af4669bd52a0c959446730f6b91c99)), closes [#4676](https://github.com/SAP/ui5-webcomponents-react/issues/4676)
- **deps:** update dependency recharts to v2.7.0 ([#4748](https://github.com/SAP/ui5-webcomponents-react/issues/4748)) ([a0bd47e](https://github.com/SAP/ui5-webcomponents-react/commit/a0bd47e2089cb6fd9e7af83b6fd0cc4f87e908f5))
- **deps:** update dependency recharts to v2.7.1 ([#4754](https://github.com/SAP/ui5-webcomponents-react/issues/4754)) ([c8cfdb6](https://github.com/SAP/ui5-webcomponents-react/commit/c8cfdb67f3f420fa7ccfd760a014bfbb117fe7a5))

## [1.16.2](https://github.com/SAP/ui5-webcomponents-react/compare/v1.16.1...v1.16.2) (2023-06-13)

### Bug Fixes

- **AnalyticalTable:** allow filtering on grouped rows ([#4730](https://github.com/SAP/ui5-webcomponents-react/issues/4730)) ([4e51b3e](https://github.com/SAP/ui5-webcomponents-react/commit/4e51b3e352eb81b383a21b869dbc671502066412))
- **AnalyticalTable:** don't add `rowindex` to element attributes ([#4723](https://github.com/SAP/ui5-webcomponents-react/issues/4723)) ([607458b](https://github.com/SAP/ui5-webcomponents-react/commit/607458b15de9a5e74d480edf168c905d0bd51f38))
- **AnalyticalTable:** don't use `NaN` as row height if CSS var is not yet defined ([#4729](https://github.com/SAP/ui5-webcomponents-react/issues/4729)) ([9366944](https://github.com/SAP/ui5-webcomponents-react/commit/93669447ad1ffc8ef71c6b7d1f6678f6755062af))
- **server-components:** add missing use client directives ([#4717](https://github.com/SAP/ui5-webcomponents-react/issues/4717)) ([3990376](https://github.com/SAP/ui5-webcomponents-react/commit/3990376fd7bc25904b61682c8dc698d164fc1f74))

### Reverts

- Revert "chore(deps): update dependency lerna to v7 (#4710)" ([23fd9fb](https://github.com/SAP/ui5-webcomponents-react/commit/23fd9fb81a3e815810fb0d7719396fa586925c62)), closes [#4710](https://github.com/SAP/ui5-webcomponents-react/issues/4710)

## [1.16.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.16.0...v1.16.1) (2023-06-07)

### Bug Fixes

- **AnalyticalTable:** apply alternate row color correctly on sorted rows ([#4691](https://github.com/SAP/ui5-webcomponents-react/issues/4691)) ([c1e20eb](https://github.com/SAP/ui5-webcomponents-react/commit/c1e20ebed91a59a53bd35c7c961b48a9d0fe05be)), closes [#4690](https://github.com/SAP/ui5-webcomponents-react/issues/4690)
- **Form:** fix `labelSpan`, `columns` and size calculation ([#4681](https://github.com/SAP/ui5-webcomponents-react/issues/4681)) ([895346d](https://github.com/SAP/ui5-webcomponents-react/commit/895346d7d604fe4f2ae8231325fee30915d74b11)), closes [#4497](https://github.com/SAP/ui5-webcomponents-react/issues/4497) [#4597](https://github.com/SAP/ui5-webcomponents-react/issues/4597) [#4668](https://github.com/SAP/ui5-webcomponents-react/issues/4668) [#4638](https://github.com/SAP/ui5-webcomponents-react/issues/4638)
- **Toolbar:** only prevent keydown default actions in `onClick` ([#4688](https://github.com/SAP/ui5-webcomponents-react/issues/4688)) ([ddbfb4a](https://github.com/SAP/ui5-webcomponents-react/commit/ddbfb4a44171831c6704db958519feee75b15bbe)), closes [#4687](https://github.com/SAP/ui5-webcomponents-react/issues/4687)

# [1.16.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.15.1...v1.16.0) (2023-06-05)

### Bug Fixes

- add export condition for node to main package ([#4640](https://github.com/SAP/ui5-webcomponents-react/issues/4640)) ([4881b58](https://github.com/SAP/ui5-webcomponents-react/commit/4881b58cae303b93498fe9ff65bc3377ceeb8afe))
- **AnalyticalTable:** allow nested sub-rows as `subRowsKey`, add `manualGroupBy` support ([#4598](https://github.com/SAP/ui5-webcomponents-react/issues/4598)) ([00686bc](https://github.com/SAP/ui5-webcomponents-react/commit/00686bc57f41634240416a5add1dd230950fdb5c))
- **deps:** update dependency recharts to v2.6.2 ([#4594](https://github.com/SAP/ui5-webcomponents-react/issues/4594)) ([1c0a7e3](https://github.com/SAP/ui5-webcomponents-react/commit/1c0a7e32959e62b204deba454052ac5aef139046))
- **deps:** update ui5 web components to v1.13.1 (patch) ([#4599](https://github.com/SAP/ui5-webcomponents-react/issues/4599)) ([0ca3ee7](https://github.com/SAP/ui5-webcomponents-react/commit/0ca3ee7748b2941a7fdf693b3ce68d167b12733b))
- **deps:** update ui5 web components to v1.13.2 (patch) ([#4603](https://github.com/SAP/ui5-webcomponents-react/issues/4603)) ([449e3b3](https://github.com/SAP/ui5-webcomponents-react/commit/449e3b347d273e9df36d79b9672bf4696469542a))
- **deps:** update ui5 web components to v1.13.3 (patch) ([#4614](https://github.com/SAP/ui5-webcomponents-react/issues/4614)) ([1ce1ffd](https://github.com/SAP/ui5-webcomponents-react/commit/1ce1ffd7f7adda3bc6338d32478004199887f303))
- **ssr:** switch back to classic jsx runtime ([#4666](https://github.com/SAP/ui5-webcomponents-react/issues/4666)) ([95fb5c4](https://github.com/SAP/ui5-webcomponents-react/commit/95fb5c4a2f711ebb9b72676ba7bae734c83db40e))
- **Toolbar:** fix `onOverflowChange` debounce init when the prop is not provided ([#4662](https://github.com/SAP/ui5-webcomponents-react/issues/4662)) ([378e0ed](https://github.com/SAP/ui5-webcomponents-react/commit/378e0ed714aafde1ed4aadc535db81d2796513d5)), closes [#4661](https://github.com/SAP/ui5-webcomponents-react/issues/4661)
- **Toolbar:** return correct value for `overflowElements` in `onOverflowChange` ([#4610](https://github.com/SAP/ui5-webcomponents-react/issues/4610)) ([73d5065](https://github.com/SAP/ui5-webcomponents-react/commit/73d5065e9b01a3f21b4337bf1d299f4e8a099356))

### Features

- **AnalyticalTable - `useOrderedMultiSort`:** introduce new plugin hook ([#4623](https://github.com/SAP/ui5-webcomponents-react/issues/4623)) ([9db7041](https://github.com/SAP/ui5-webcomponents-react/commit/9db70411a50a4e27e6be844ba643ab68816b7ef6)), closes [#3897](https://github.com/SAP/ui5-webcomponents-react/issues/3897)
- **Toolbar:** add `a11yConfig` prop ([#4611](https://github.com/SAP/ui5-webcomponents-react/issues/4611)) ([911cd20](https://github.com/SAP/ui5-webcomponents-react/commit/911cd2036ae77f5e4f3dd61c53b20ba2653812f9)), closes [#4609](https://github.com/SAP/ui5-webcomponents-react/issues/4609)
- update to @ui5/webcomponents ~1.14.0 ([#4667](https://github.com/SAP/ui5-webcomponents-react/issues/4667)) ([ec2dca2](https://github.com/SAP/ui5-webcomponents-react/commit/ec2dca2253031478ae5f57a48e85e70061707e3f))

## [1.15.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.15.0...v1.15.1) (2023-05-09)

### Bug Fixes

- **main - TypeScript:** only use separate type export ([#4590](https://github.com/SAP/ui5-webcomponents-react/issues/4590)) ([c9912c7](https://github.com/SAP/ui5-webcomponents-react/commit/c9912c782e5af935ef829d12d87a04a48ca72224))
- **useSyncRef:** add `use client` directive ([#4591](https://github.com/SAP/ui5-webcomponents-react/issues/4591)) ([08f900f](https://github.com/SAP/ui5-webcomponents-react/commit/08f900f7c5583754fad205c22e30c94d0c9ded64))

# [1.15.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.14.0...v1.15.0) (2023-05-05)

### Bug Fixes

- **AnalyticalTable:** allow closing column popover by selection with SPACE key ([#4565](https://github.com/SAP/ui5-webcomponents-react/issues/4565)) ([bc5c5ed](https://github.com/SAP/ui5-webcomponents-react/commit/bc5c5edc86fa1188f7d8f2fbb8c75599c960666d)), closes [#4545](https://github.com/SAP/ui5-webcomponents-react/issues/4545)
- **AnalyticalTable:** center align indicator icons of columns ([#4572](https://github.com/SAP/ui5-webcomponents-react/issues/4572)) ([10eda2c](https://github.com/SAP/ui5-webcomponents-react/commit/10eda2c611370c124d4cb9e770d01545409805b0))
- **charts:** mark charts package as `type: module` ([#4160](https://github.com/SAP/ui5-webcomponents-react/issues/4160)) ([add9c88](https://github.com/SAP/ui5-webcomponents-react/commit/add9c8889856878ca9b4c1dcda258520a6688c17))
- **main:** mark main package as `type: module` ([#4552](https://github.com/SAP/ui5-webcomponents-react/issues/4552)) ([976064b](https://github.com/SAP/ui5-webcomponents-react/commit/976064b57caa8a8abf7f4b22725dfb522f81f58e))

### Features

- update to @ui5/webcomponents ~1.13.0 ([#4567](https://github.com/SAP/ui5-webcomponents-react/issues/4567)) ([3d0cbf6](https://github.com/SAP/ui5-webcomponents-react/commit/3d0cbf6deceb985225c048c160af9d1ce92849d1))

# [1.14.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.13.1...v1.14.0) (2023-05-03)

### Bug Fixes

- **base:** mark base package as `type: module` ([#4140](https://github.com/SAP/ui5-webcomponents-react/issues/4140)) ([646b32b](https://github.com/SAP/ui5-webcomponents-react/commit/646b32bf405d868cdbb637ef676c26751ccd03ed))
- **DynamicPageTitle:** always show all contents of the 2nd line ([#4489](https://github.com/SAP/ui5-webcomponents-react/issues/4489)) ([d0b9a32](https://github.com/SAP/ui5-webcomponents-react/commit/d0b9a32fc2651d2fa180d16adf969ab623fb161d)), closes [#4488](https://github.com/SAP/ui5-webcomponents-react/issues/4488)
- **FilterGroupItem:** don't show colon if label is empty ([#4529](https://github.com/SAP/ui5-webcomponents-react/issues/4529)) ([79a709a](https://github.com/SAP/ui5-webcomponents-react/commit/79a709a6781832918f4f0d9ddf66f21ca0e7fded)), closes [#4513](https://github.com/SAP/ui5-webcomponents-react/issues/4513)
- **FormItem:** fix react unique key error when using multiple children in FormItem ([#4509](https://github.com/SAP/ui5-webcomponents-react/issues/4509)) ([75ad94e](https://github.com/SAP/ui5-webcomponents-react/commit/75ad94efab68382e4b3ab98b88ef3fa596e840ca)), closes [#4499](https://github.com/SAP/ui5-webcomponents-react/issues/4499)
- **ObjectPage:** remove unnecessary `banner` role ([#4532](https://github.com/SAP/ui5-webcomponents-react/issues/4532)) ([37863d6](https://github.com/SAP/ui5-webcomponents-react/commit/37863d6200d9aac2af2181f97adc0fc16f34e0d7)), closes [#4491](https://github.com/SAP/ui5-webcomponents-react/issues/4491)
- **Toolbar:** make ids unique for overflow items ([#4557](https://github.com/SAP/ui5-webcomponents-react/issues/4557)) ([7d8e3ab](https://github.com/SAP/ui5-webcomponents-react/commit/7d8e3abbebfca6814f6ecb6984b98a9c79c8622a)), closes [#4556](https://github.com/SAP/ui5-webcomponents-react/issues/4556)
- **Toolbar:** support F6 Fast Navigation ([#4514](https://github.com/SAP/ui5-webcomponents-react/issues/4514)) ([d52147d](https://github.com/SAP/ui5-webcomponents-react/commit/d52147db2d98b52867a8317138d7e68dd42e631a))
- **Variant Management:** fix error message for duplicate variant names ([#4498](https://github.com/SAP/ui5-webcomponents-react/issues/4498)) ([f2da506](https://github.com/SAP/ui5-webcomponents-react/commit/f2da5066860fbc0caaa5478f9890c5585d733775)), closes [#4496](https://github.com/SAP/ui5-webcomponents-react/issues/4496)

### Features

- **AnalyticalTable:** add `selectedRowIds` object to `onRowSelect` event & improve performance when selecting rows ([#4534](https://github.com/SAP/ui5-webcomponents-react/issues/4534)) ([ce8b109](https://github.com/SAP/ui5-webcomponents-react/commit/ce8b109dfc91350262e0524490807c727e22729f)), closes [#4517](https://github.com/SAP/ui5-webcomponents-react/issues/4517)
- **AnalyticalTable:** allow multi-sorting ([#4550](https://github.com/SAP/ui5-webcomponents-react/issues/4550)) ([728e013](https://github.com/SAP/ui5-webcomponents-react/commit/728e0135b3686a05fd18ba6e690db92e58225e9d))

## [1.13.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.13.0...v1.13.1) (2023-04-14)

### Bug Fixes

- **AnalyticalTable:** use unique id for header cells ([#4479](https://github.com/SAP/ui5-webcomponents-react/issues/4479)) ([f618647](https://github.com/SAP/ui5-webcomponents-react/commit/f618647c15ddba965a55a8bd1bb15bc792a7162e)), closes [#4462](https://github.com/SAP/ui5-webcomponents-react/issues/4462)
- **deps:** update dependency tocbot to v4.21.0 ([#4463](https://github.com/SAP/ui5-webcomponents-react/issues/4463)) ([6669759](https://github.com/SAP/ui5-webcomponents-react/commit/66697598f86b4c97cb29284b8f0b6ff42dccb039))
- **deps:** update ui5 web components to v1.12.1 (patch) ([#4481](https://github.com/SAP/ui5-webcomponents-react/issues/4481)) ([419c7b0](https://github.com/SAP/ui5-webcomponents-react/commit/419c7b01d1043ee5a265b6439af2519b70557ab7))
- **deps:** update ui5 web components to v1.12.2 (patch) ([#4493](https://github.com/SAP/ui5-webcomponents-react/issues/4493)) ([311d4bc](https://github.com/SAP/ui5-webcomponents-react/commit/311d4bc360673d43daf3b29d8375aae408835b5f))
- **FilterBar:** don't show navigated-cell in filters-dialog table ([#4490](https://github.com/SAP/ui5-webcomponents-react/issues/4490)) ([81aa29e](https://github.com/SAP/ui5-webcomponents-react/commit/81aa29e964f8c34e78125d1d18e7acde94175f0d))
- **Form:** apply props to correct element ([#4484](https://github.com/SAP/ui5-webcomponents-react/issues/4484)) ([b726f12](https://github.com/SAP/ui5-webcomponents-react/commit/b726f12623bfb41a3eed1981410ba3c8ec6c6337)), closes [#4430](https://github.com/SAP/ui5-webcomponents-react/issues/4430)
- **TreeItemCustom - TypeScript:** omit `content` HTMLAttribute from PropTypes ([#4476](https://github.com/SAP/ui5-webcomponents-react/issues/4476)) ([0b37829](https://github.com/SAP/ui5-webcomponents-react/commit/0b37829efe8b21d2b4950cc75e14e4fa976082af))

# [1.13.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.12.0...v1.13.0) (2023-04-04)

### Bug Fixes

- **AnalyticalTable:** don't scroll to top if expandable row is collapsed ([#4420](https://github.com/SAP/ui5-webcomponents-react/issues/4420)) ([d6e79e5](https://github.com/SAP/ui5-webcomponents-react/commit/d6e79e5f3760d49902cbe837e02cda073aeded4a)), closes [#4409](https://github.com/SAP/ui5-webcomponents-react/issues/4409)
- **DynamicPage & ObjectPage:** prevent empty area on top of content when scrolling ([#4429](https://github.com/SAP/ui5-webcomponents-react/issues/4429)) ([3b25452](https://github.com/SAP/ui5-webcomponents-react/commit/3b254523f5fa5735bfec65c369d48d5d77da1876)), closes [#4364](https://github.com/SAP/ui5-webcomponents-react/issues/4364)
- **FormItem:** allow `id`s on `children` ([#4412](https://github.com/SAP/ui5-webcomponents-react/issues/4412)) ([17eed8f](https://github.com/SAP/ui5-webcomponents-react/commit/17eed8f003663101df6daa9e2454566fd3d39486))

### Features

- update `@ui5/webcomponents` to ~1.12.0 ([#4455](https://github.com/SAP/ui5-webcomponents-react/issues/4455)) ([ec02b8e](https://github.com/SAP/ui5-webcomponents-react/commit/ec02b8efde3fc61682dd4757433e68d66159e31e))

# [1.12.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.11.3...v1.12.0) (2023-03-22)

### Bug Fixes

- **AnalyticalTable:** always scale cols correctly with `scaleWidthMode` "Grow" ([#4362](https://github.com/SAP/ui5-webcomponents-react/issues/4362)) ([15dfb3a](https://github.com/SAP/ui5-webcomponents-react/commit/15dfb3aeb33aa6e3890938eab23db2f6f282fa45)), closes [#4348](https://github.com/SAP/ui5-webcomponents-react/issues/4348)
- **AnalyticalTable:** announce grouped, filtered and sorted columns with screen readers ([#4392](https://github.com/SAP/ui5-webcomponents-react/issues/4392)) ([46b29cd](https://github.com/SAP/ui5-webcomponents-react/commit/46b29cdae6759561548837ae2a58d0a5c47ec88b)), closes [#4172](https://github.com/SAP/ui5-webcomponents-react/issues/4172)
- **AnalyticalTable:** correct alignment of `Filter` ([#4360](https://github.com/SAP/ui5-webcomponents-react/issues/4360)) ([81e4bed](https://github.com/SAP/ui5-webcomponents-react/commit/81e4bed6b5d39f66390c3c97fe50d283b03a769a))
- **cypress-commands:** point to declaration file of bundle ([#4358](https://github.com/SAP/ui5-webcomponents-react/issues/4358)) ([e73ac06](https://github.com/SAP/ui5-webcomponents-react/commit/e73ac06eb0e95b3264752592c5f5565dc4c287c1))
- **deps:** update dependency recharts to v2.5.0 ([#4354](https://github.com/SAP/ui5-webcomponents-react/issues/4354)) ([29ec474](https://github.com/SAP/ui5-webcomponents-react/commit/29ec474648bdf0057a9c8b23e4eab0662abd86ee))
- **FilterGroupItem:** add colon to labels ([#4378](https://github.com/SAP/ui5-webcomponents-react/issues/4378)) ([d3dc2ad](https://github.com/SAP/ui5-webcomponents-react/commit/d3dc2ad183634715c3918273f47426e2eb286677)), closes [#4234](https://github.com/SAP/ui5-webcomponents-react/issues/4234)
- **FormItem:** add label-input relation for screen readers ([#4387](https://github.com/SAP/ui5-webcomponents-react/issues/4387)) ([3a65810](https://github.com/SAP/ui5-webcomponents-react/commit/3a658107c9121b3734447d2e314057302b494da3)), closes [#4144](https://github.com/SAP/ui5-webcomponents-react/issues/4144)
- **MessageBox - a11y:** announce message boxes as alert dialog ([#4390](https://github.com/SAP/ui5-webcomponents-react/issues/4390)) ([340a2e2](https://github.com/SAP/ui5-webcomponents-react/commit/340a2e26791f3e567114f5205b9757c274cf07a7)), closes [#3431](https://github.com/SAP/ui5-webcomponents-react/issues/3431)
- **SelectDialog:** make search icon clickable again ([#4371](https://github.com/SAP/ui5-webcomponents-react/issues/4371)) ([c6f9b88](https://github.com/SAP/ui5-webcomponents-react/commit/c6f9b883b3bed42e066fad1c88e38ea7bf180930))
- **SplitterLayout:** allow `SplitterElement`s to shrink ([#4393](https://github.com/SAP/ui5-webcomponents-react/issues/4393)) ([9be1999](https://github.com/SAP/ui5-webcomponents-react/commit/9be1999af4ac1a4d6abc115e25afff77b485e6ea)), closes [#4156](https://github.com/SAP/ui5-webcomponents-react/issues/4156)
- **Toolbar:** recalculate overflow elements on children change ([#4383](https://github.com/SAP/ui5-webcomponents-react/issues/4383)) ([67e35fb](https://github.com/SAP/ui5-webcomponents-react/commit/67e35fbc04dbf7709e8e9bf32cb7ee15e410a889)), closes [#4357](https://github.com/SAP/ui5-webcomponents-react/issues/4357)

### Features

- **DynamicPage:** enable sticky sub-headers support ([#4377](https://github.com/SAP/ui5-webcomponents-react/issues/4377)) ([8ccd2eb](https://github.com/SAP/ui5-webcomponents-react/commit/8ccd2eb27a18096ba0fecb63ed70ae4962791c28)), closes [#3989](https://github.com/SAP/ui5-webcomponents-react/issues/3989)
- integrate `@ui5/webcomponents-cypress-commands` into cra template ([#4341](https://github.com/SAP/ui5-webcomponents-react/issues/4341)) ([e4564f1](https://github.com/SAP/ui5-webcomponents-react/commit/e4564f12c5c64a0282f466e9d3fafe800c5039d0))

## [1.11.3](https://github.com/SAP/ui5-webcomponents-react/compare/v1.11.2...v1.11.3) (2023-03-14)

### Bug Fixes

- force release for all packages ([25fd39f](https://github.com/SAP/ui5-webcomponents-react/commit/25fd39fadfe5fa005302df5c2f1882a3ca514ed3))

## [1.11.2](https://github.com/SAP/ui5-webcomponents-react/compare/v1.11.1...v1.11.2) (2023-03-14)

### Bug Fixes

- force new release for `@ui5/webcomponents-react` ([6d3d2e9](https://github.com/SAP/ui5-webcomponents-react/commit/6d3d2e9ee19c1e16039d200d9b99b12163a6d9c9))

## [1.11.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.11.0...v1.11.1) (2023-03-14)

### Bug Fixes

- **cypress-commands:** fix publish config ([#4334](https://github.com/SAP/ui5-webcomponents-react/issues/4334)) ([a23a8aa](https://github.com/SAP/ui5-webcomponents-react/commit/a23a8aaa000eaf3670e4e5a53843dae40c6cdd9c))

# [1.11.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.10.0...v1.11.0) (2023-03-14)

### Bug Fixes

- **charts:** update peer dependencies ([#4280](https://github.com/SAP/ui5-webcomponents-react/issues/4280)) ([ce5e0d5](https://github.com/SAP/ui5-webcomponents-react/commit/ce5e0d5be758dd28a592b7698db95ff781b7543a))
- **MessageBox:** adjust title style and level to latest Design specs ([#4291](https://github.com/SAP/ui5-webcomponents-react/issues/4291)) ([5eb79b0](https://github.com/SAP/ui5-webcomponents-react/commit/5eb79b0249156f4eb887fe9f35f57896d6cad0ab)), closes [#4290](https://github.com/SAP/ui5-webcomponents-react/issues/4290)
- **MessageItem:** correct style for `"None"` message icon, make `type` and `children` optional (TypeScript) ([#4314](https://github.com/SAP/ui5-webcomponents-react/issues/4314)) ([3119c4e](https://github.com/SAP/ui5-webcomponents-react/commit/3119c4e880a4a23ee2fa0378e8b3e4e6e8baa2df))
- **SplitterLayout:** use correct dimensions for vertical layout ([#4284](https://github.com/SAP/ui5-webcomponents-react/issues/4284)) ([b22d649](https://github.com/SAP/ui5-webcomponents-react/commit/b22d649c92aaa82048c181c8e74757b23247a870))
- **Toolbar:** always respect `numberOfAlwaysVisibleItems` ([#4330](https://github.com/SAP/ui5-webcomponents-react/issues/4330)) ([7fb45b1](https://github.com/SAP/ui5-webcomponents-react/commit/7fb45b1c301ee1524ea83d3c1e427acce86e3154))

### Features

- adjust cra-template to use Cypress instead of Jest for testing ([#4306](https://github.com/SAP/ui5-webcomponents-react/issues/4306)) ([478f395](https://github.com/SAP/ui5-webcomponents-react/commit/478f395bf8b8df135120f1da56c94e3818bece06))
- introduce new `@ui5/webcomponents-cypress-commands` package ([#4289](https://github.com/SAP/ui5-webcomponents-react/issues/4289)) ([41c748a](https://github.com/SAP/ui5-webcomponents-react/commit/41c748ac3d6e2d3b6c368ad3d0ab4472a4f65981))

# [1.10.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.9.2...v1.10.0) (2023-03-06)

### Features

- **TimelineChart:** introduce new chart (experimental) ([#3921](https://github.com/SAP/ui5-webcomponents-react/issues/3921)) ([4b09939](https://github.com/SAP/ui5-webcomponents-react/commit/4b099391f9e7462a23767806ec2feabb44cda5fd))
- update @ui5/webcomponents to ~1.11.0 ([#4254](https://github.com/SAP/ui5-webcomponents-react/issues/4254)) ([25e6443](https://github.com/SAP/ui5-webcomponents-react/commit/25e6443ac1694c346ba41215467e1ce4ed916793))

## [1.9.2](https://github.com/SAP/ui5-webcomponents-react/compare/v1.9.1...v1.9.2) (2023-02-27)

### Bug Fixes

- **AnalyticalTable:** don't include empty rows in internal functions ([#4196](https://github.com/SAP/ui5-webcomponents-react/issues/4196)) ([1cb2454](https://github.com/SAP/ui5-webcomponents-react/commit/1cb2454b3dfea957960ab173d9a67008516de570))
- **SelectDialog - TypeScript:** improve event types ([#4187](https://github.com/SAP/ui5-webcomponents-react/issues/4187)) ([d5f6d0d](https://github.com/SAP/ui5-webcomponents-react/commit/d5f6d0dc801aa528d7cebd4f2a3ffacc8c64afe4))
- **Toolbar:** only fire `onClick` on SPACE/ENTER if toolbar is focused ([#4192](https://github.com/SAP/ui5-webcomponents-react/issues/4192)) ([fef567b](https://github.com/SAP/ui5-webcomponents-react/commit/fef567bd35d2ae29faac59bbe7f9c29a933789d0)), closes [#4190](https://github.com/SAP/ui5-webcomponents-react/issues/4190)

## [1.9.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.9.0...v1.9.1) (2023-02-21)

### Bug Fixes

- **AnalyticalTable:** don't allow subcomponents on empty rows ([#4173](https://github.com/SAP/ui5-webcomponents-react/issues/4173)) ([f6b9081](https://github.com/SAP/ui5-webcomponents-react/commit/f6b908170d4247f9819f130f364fbf37002757dc))
- correct faulty import ([#4184](https://github.com/SAP/ui5-webcomponents-react/issues/4184)) ([1334c44](https://github.com/SAP/ui5-webcomponents-react/commit/1334c448551eefa416fd8fdf053b48d60a1c3cb5))

# [1.9.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.8.1...v1.9.0) (2023-02-17)

### Bug Fixes

- **AnalyticalCard:** fix `aria-label` announcing "undefined" ([#4060](https://github.com/SAP/ui5-webcomponents-react/issues/4060)) ([0c77905](https://github.com/SAP/ui5-webcomponents-react/commit/0c779056547acfbbc7ff0c96f002c93fa6ac7631))
- **AnalyticalTable:** center align select checkboxes ([#4132](https://github.com/SAP/ui5-webcomponents-react/issues/4132)) ([25c3f0a](https://github.com/SAP/ui5-webcomponents-react/commit/25c3f0a37531d750e41e2e590a7e2329acbd15ba)), closes [#3732](https://github.com/SAP/ui5-webcomponents-react/issues/3732)
- **AnalyticalTable:** fix column scaling with internal columns ([#4150](https://github.com/SAP/ui5-webcomponents-react/issues/4150)) ([485293e](https://github.com/SAP/ui5-webcomponents-react/commit/485293ee24217fabb1cc82c3232b71e48da1b4ea))
- **AnalyticalTable:** fix expandable styles and key-event bubbling ([#4141](https://github.com/SAP/ui5-webcomponents-react/issues/4141)) ([88e85dd](https://github.com/SAP/ui5-webcomponents-react/commit/88e85dd94a7dd903b632702b1a42013db31651ff))
- don't rely on `id`s when internally opening popovers ([#4089](https://github.com/SAP/ui5-webcomponents-react/issues/4089)) ([91515ad](https://github.com/SAP/ui5-webcomponents-react/commit/91515adb0d09c5580f8dd446ae763d7ab5a0be88)), closes [#4086](https://github.com/SAP/ui5-webcomponents-react/issues/4086)
- **FilterBar:** fix selection behavior and styles ([#4064](https://github.com/SAP/ui5-webcomponents-react/issues/4064)) ([a20c538](https://github.com/SAP/ui5-webcomponents-react/commit/a20c53805adfefb1f38cff4494ea17896d9bbfef))
- **Form:** remove FormGroup Title background ([#4171](https://github.com/SAP/ui5-webcomponents-react/issues/4171)) ([be32597](https://github.com/SAP/ui5-webcomponents-react/commit/be32597bd860cfdebf4dbf018037069a1b1cbd6c)), closes [#4151](https://github.com/SAP/ui5-webcomponents-react/issues/4151)
- **Menu - TypeScript:** fix type for `opener` ([#4097](https://github.com/SAP/ui5-webcomponents-react/issues/4097)) ([abdb67a](https://github.com/SAP/ui5-webcomponents-react/commit/abdb67ae1ed559388ed555e82222f8edd2491e7f))
- **Toolbar:** always get correct state for overflow button ([#4133](https://github.com/SAP/ui5-webcomponents-react/issues/4133)) ([5472404](https://github.com/SAP/ui5-webcomponents-react/commit/54724044cd6f5d17d95a8aa56d242f3aa6fb792a))
- **VariantManagement:** display tooltip of delete button ([#4118](https://github.com/SAP/ui5-webcomponents-react/issues/4118)) ([a0d65bd](https://github.com/SAP/ui5-webcomponents-react/commit/a0d65bd770c9dd2c5068cb209b1c5cdbb72037e4))
- **VariantManagement:** return `variantItem` reference in `onSaveManageViews` callback ([#4149](https://github.com/SAP/ui5-webcomponents-react/issues/4149)) ([0702332](https://github.com/SAP/ui5-webcomponents-react/commit/0702332f7278cbbecbdd5265c363d769aa12544f))
- **VariantManagement:** unbind click handler when disabled ([#4159](https://github.com/SAP/ui5-webcomponents-react/issues/4159)) ([f9729a2](https://github.com/SAP/ui5-webcomponents-react/commit/f9729a2539f9e4855b0aa8e892fb0bf36f48bbb6))

### Features

- **ActionSheet:** support Fragments as `children` ([#4059](https://github.com/SAP/ui5-webcomponents-react/issues/4059)) ([e999323](https://github.com/SAP/ui5-webcomponents-react/commit/e999323fd77ee21e19a48b87a3203c54998c7a55))
- **LineChart:** fully allow customizing the internal `Line` component ([#4125](https://github.com/SAP/ui5-webcomponents-react/issues/4125)) ([42a0bc1](https://github.com/SAP/ui5-webcomponents-react/commit/42a0bc10b5d4ef293a970633bcd3d9de0e4421e7)), closes [#4124](https://github.com/SAP/ui5-webcomponents-react/issues/4124)
- **VariantManagement:** improve configuration capabilities & validation for inputs ([#4158](https://github.com/SAP/ui5-webcomponents-react/issues/4158)) ([e76f6f2](https://github.com/SAP/ui5-webcomponents-react/commit/e76f6f25def97d906f3d7c48f9269c03706327d6)), closes [#4157](https://github.com/SAP/ui5-webcomponents-react/issues/4157) [#4129](https://github.com/SAP/ui5-webcomponents-react/issues/4129)

## [1.8.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.8.0...v1.8.1) (2023-01-30)

### Bug Fixes

- restrict base package dependency to be on same minor version as main package ([#4046](https://github.com/SAP/ui5-webcomponents-react/issues/4046)) ([cc8f2dc](https://github.com/SAP/ui5-webcomponents-react/commit/cc8f2dc6d1075b909b8d3ffce435421904b67079)), closes [#4043](https://github.com/SAP/ui5-webcomponents-react/issues/4043)
- **TypeScript:** slot props support React v17 & v16 ([#4056](https://github.com/SAP/ui5-webcomponents-react/issues/4056)) ([a88ca74](https://github.com/SAP/ui5-webcomponents-react/commit/a88ca74d461b456879f00221d8e1b7a30691835b)), closes [#4047](https://github.com/SAP/ui5-webcomponents-react/issues/4047)

# [1.8.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.7.2...v1.8.0) (2023-01-25)

### Bug Fixes

- **charts:** prevent crash when using zooming tool ([#3997](https://github.com/SAP/ui5-webcomponents-react/issues/3997)) ([e508b59](https://github.com/SAP/ui5-webcomponents-react/commit/e508b593ade20ff9bfa4bb18dba0a3ac913a4f71))

### Features

- **client components:** add `use client` directive for client-only components ([#4021](https://github.com/SAP/ui5-webcomponents-react/issues/4021)) ([074f902](https://github.com/SAP/ui5-webcomponents-react/commit/074f90202bfeb00600d0ac5d1320e4261451cbcd))
- **GlobalStyleClasses:** add `inheritingSapScrollBar` class ([#3990](https://github.com/SAP/ui5-webcomponents-react/issues/3990)) ([35cd7d5](https://github.com/SAP/ui5-webcomponents-react/commit/35cd7d59681b8a1718f81dfdff5c3bdbb197621f))
- **Modals:** add Menu component ([#4032](https://github.com/SAP/ui5-webcomponents-react/issues/4032)) ([3ffca22](https://github.com/SAP/ui5-webcomponents-react/commit/3ffca22b668993dc6534aa915541bc8bb9d81a7d))
- **ObjectPageSection & ObjectPageSubSection:** add multiple props ([#3946](https://github.com/SAP/ui5-webcomponents-react/issues/3946)) ([c81d2ba](https://github.com/SAP/ui5-webcomponents-react/commit/c81d2baa4029c379ffa2be03cdde1398bb9650f7)), closes [#3924](https://github.com/SAP/ui5-webcomponents-react/issues/3924)
- update to UI5 Web Components 1.10.3 ([#3801](https://github.com/SAP/ui5-webcomponents-react/issues/3801)) ([2febd53](https://github.com/SAP/ui5-webcomponents-react/commit/2febd534f234c3d38109659369716b6b5946dfda))

## [1.7.2](https://github.com/SAP/ui5-webcomponents-react/compare/v1.7.1...v1.7.2) (2023-01-17)

### Bug Fixes

- **AnalyticalTable:** allow customization of `maxWidth` in `Grow` mode ([#3941](https://github.com/SAP/ui5-webcomponents-react/issues/3941)) ([82a0dfb](https://github.com/SAP/ui5-webcomponents-react/commit/82a0dfb34ef494bab9a990093c963bbdbf359fc9))
- **AnalyticalTable:** calculate column width correctly when `columns` change ([#3947](https://github.com/SAP/ui5-webcomponents-react/issues/3947)) ([dfa455a](https://github.com/SAP/ui5-webcomponents-react/commit/dfa455a83f5de01aa4bd304d5df814b7963fc1d0)), closes [#3878](https://github.com/SAP/ui5-webcomponents-react/issues/3878)
- **AnalyticalTable:** reset `infiniteScrollThreshold` when tree data changes ([#3981](https://github.com/SAP/ui5-webcomponents-react/issues/3981)) ([915bdd1](https://github.com/SAP/ui5-webcomponents-react/commit/915bdd1124479befcc785fd186ec4779448c6b04)), closes [#3980](https://github.com/SAP/ui5-webcomponents-react/issues/3980)
- **DynamicPage:** fix scroll issue for some content heights ([#3942](https://github.com/SAP/ui5-webcomponents-react/issues/3942)) ([5f148f4](https://github.com/SAP/ui5-webcomponents-react/commit/5f148f45de76f06bd5c1a60e242d5a5fe0315530)), closes [#3925](https://github.com/SAP/ui5-webcomponents-react/issues/3925)
- **FilterBar:** don't fire bubbled up selection-change event of `Table` ([#3935](https://github.com/SAP/ui5-webcomponents-react/issues/3935)) ([b42026f](https://github.com/SAP/ui5-webcomponents-react/commit/b42026ff1042e3da3820e71555828eba5427154a))
- **Grid:** fix React key error ([#3933](https://github.com/SAP/ui5-webcomponents-react/issues/3933)) ([8b437e8](https://github.com/SAP/ui5-webcomponents-react/commit/8b437e824382691b596154ae79175c33932c26e8)), closes [#3915](https://github.com/SAP/ui5-webcomponents-react/issues/3915)
- **Toolbar:** fire onClick on Space/Enter press, fix info bar colors ([#3934](https://github.com/SAP/ui5-webcomponents-react/issues/3934)) ([96a6644](https://github.com/SAP/ui5-webcomponents-react/commit/96a6644c8214e389544e2b65df06946abe22f9b4)), closes [#3914](https://github.com/SAP/ui5-webcomponents-react/issues/3914)

## [1.7.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.7.0...v1.7.1) (2022-12-21)

### Bug Fixes

- **ObjectPage:** fix scrolling for ObjectPages with single section ([#3901](https://github.com/SAP/ui5-webcomponents-react/issues/3901)) ([1280a65](https://github.com/SAP/ui5-webcomponents-react/commit/1280a659500bac7650eb6def61e4c4e6a1e6a6c3)), closes [#3870](https://github.com/SAP/ui5-webcomponents-react/issues/3870)

# [1.7.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.6.0...v1.7.0) (2022-12-19)

### Bug Fixes

- **AnalyticalTable - TypeScript:** correct type for `onTableScroll` ([#3839](https://github.com/SAP/ui5-webcomponents-react/issues/3839)) ([02ea1ed](https://github.com/SAP/ui5-webcomponents-react/commit/02ea1edf35c97845ccf57c7e9b2a56db6759f7d5))
- **AnalyticalTable - TypeScript:** fix `ref` type ([#3815](https://github.com/SAP/ui5-webcomponents-react/issues/3815)) ([2337db1](https://github.com/SAP/ui5-webcomponents-react/commit/2337db1ea8ac566799f0b78bf50fae64e792db5e))
- **AnalyticalTable - TypeScript:** fix `selectedFlatRows` type of `onRowSelect` event ([#3817](https://github.com/SAP/ui5-webcomponents-react/issues/3817)) ([bb224ba](https://github.com/SAP/ui5-webcomponents-react/commit/bb224ba9c236612dad79779c3fa38d447f8b29b4))
- **charts:** allow formatting y/x-axis ticks w/o changing measure formatter ([#3803](https://github.com/SAP/ui5-webcomponents-react/issues/3803)) ([ad15be8](https://github.com/SAP/ui5-webcomponents-react/commit/ad15be8bc6d419d786599cdf1f6669075cf7bfaa)), closes [#3802](https://github.com/SAP/ui5-webcomponents-react/issues/3802)
- **FilterBar:** fix alignment of table cells in dialog ([#3829](https://github.com/SAP/ui5-webcomponents-react/issues/3829)) ([c8c834e](https://github.com/SAP/ui5-webcomponents-react/commit/c8c834ee89516660a973665f376431f7d3415337))
- **Grid:** support `React.Fragment` as children ([#3850](https://github.com/SAP/ui5-webcomponents-react/issues/3850)) ([beb032e](https://github.com/SAP/ui5-webcomponents-react/commit/beb032e09b6e8d614b4de542c2d3205a454e7c3a))
- make `children` of `FlexBox`, `Grid`, `ResponsiveGridLayout` and `Text` optional ([#3851](https://github.com/SAP/ui5-webcomponents-react/issues/3851)) ([d20f986](https://github.com/SAP/ui5-webcomponents-react/commit/d20f98614731e6d302ccc8b211ff223fb4be401c))
- **Modals - TypeScript:** allow typing the container element ([#3856](https://github.com/SAP/ui5-webcomponents-react/issues/3856)) ([780206a](https://github.com/SAP/ui5-webcomponents-react/commit/780206a24ab532766fa869ac90164a83bc97bca1))

### Features

- **DynamicPageTitle:** expose toolbar `overflowPopoverRef` ref via toolbar props ([#3805](https://github.com/SAP/ui5-webcomponents-react/issues/3805)) ([72e8cd7](https://github.com/SAP/ui5-webcomponents-react/commit/72e8cd71f1861647a4da4ba3399962d8e714e529))
- **ObjectPage & DynamicPage:** add `onPinnedStateChange`, fix setting `alwaysShowContentHeader` in runtime ([#3876](https://github.com/SAP/ui5-webcomponents-react/issues/3876)) ([6bce2da](https://github.com/SAP/ui5-webcomponents-react/commit/6bce2da0d119721311adcf61dec2eb5383cb7a48))
- update `@ui5/webcomponents` to 1.9.3 ([#3886](https://github.com/SAP/ui5-webcomponents-react/issues/3886)) ([c7ca7bb](https://github.com/SAP/ui5-webcomponents-react/commit/c7ca7bbfd80273c9c7dd56204c883bd5becce7e5))

# [1.6.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.5.0...v1.6.0) (2022-11-24)

### Bug Fixes

- **AnalyticalTable:** fix expand/collapse & select keyboard navigation and execution of cb's ([#3789](https://github.com/SAP/ui5-webcomponents-react/issues/3789)) ([ab8bb61](https://github.com/SAP/ui5-webcomponents-react/commit/ab8bb61a07771df8360a4f3acf99bd4bda5e2178)), closes [#3788](https://github.com/SAP/ui5-webcomponents-react/issues/3788)

### Features

- **AnalyticalTable - useIndeterminateRowSelection:** add `onIndeterminateChange` param ([#3797](https://github.com/SAP/ui5-webcomponents-react/issues/3797)) ([9527db1](https://github.com/SAP/ui5-webcomponents-react/commit/9527db13da7db23142f1a92c57a7dcc843993260)), closes [#3775](https://github.com/SAP/ui5-webcomponents-react/issues/3775) [#3612](https://github.com/SAP/ui5-webcomponents-react/issues/3612)

# [1.5.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.4.1...v1.5.0) (2022-11-17)

### Bug Fixes

- **AnalyticalTable:** always return correct `isSelected` value in `onRowSelect` cb ([#3774](https://github.com/SAP/ui5-webcomponents-react/issues/3774)) ([bf149e3](https://github.com/SAP/ui5-webcomponents-react/commit/bf149e3bb051a968e67c425173c57115e0e6e428))
- **AnalyticalTable:** fix keyboard navigation on columns/data change ([#3751](https://github.com/SAP/ui5-webcomponents-react/issues/3751)) ([5ec55a2](https://github.com/SAP/ui5-webcomponents-react/commit/5ec55a2a88cda2068fd28525a376c7765e40d35d)), closes [#3739](https://github.com/SAP/ui5-webcomponents-react/issues/3739)
- **AnalyticalTable:** reduce debounce wait time of height and width observers ([#3753](https://github.com/SAP/ui5-webcomponents-react/issues/3753)) ([85b79cb](https://github.com/SAP/ui5-webcomponents-react/commit/85b79cbda0d5048037e0a598c3e52d5c2b6cab93))
- **DynamicPage:** always call `onToggleHeaderContent` on toggle button click ([#3756](https://github.com/SAP/ui5-webcomponents-react/issues/3756)) ([b5e0415](https://github.com/SAP/ui5-webcomponents-react/commit/b5e04151a39ed5ff705fabcd7a7e41a633bf8315)), closes [#3754](https://github.com/SAP/ui5-webcomponents-react/issues/3754)
- **ObjectPage:** adjust responsive padding of tab-bar to header padding ([#3744](https://github.com/SAP/ui5-webcomponents-react/issues/3744)) ([676e020](https://github.com/SAP/ui5-webcomponents-react/commit/676e020d944b7ee130cb1d9bc65451ec9cd0ddff)), closes [#3551](https://github.com/SAP/ui5-webcomponents-react/issues/3551)
- **SplitterLayout:** always reset the layout if reset conditions match ([#3761](https://github.com/SAP/ui5-webcomponents-react/issues/3761)) ([04c732d](https://github.com/SAP/ui5-webcomponents-react/commit/04c732d9874b27f095d71000df908bf7914491d7))

### Features

- **ObjectPageSubSection:** introduce `actions` prop ([#3752](https://github.com/SAP/ui5-webcomponents-react/issues/3752)) ([e32f551](https://github.com/SAP/ui5-webcomponents-react/commit/e32f551e8cae63ca7be72bf9449bd07511920022)), closes [#3692](https://github.com/SAP/ui5-webcomponents-react/issues/3692)

## [1.4.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.4.0...v1.4.1) (2022-11-09)

### Bug Fixes

- **withWebComponent:** improve event registration and cleanup ([#3740](https://github.com/SAP/ui5-webcomponents-react/issues/3740)) ([b4febf7](https://github.com/SAP/ui5-webcomponents-react/commit/b4febf7907a76cdb35fb7b99e8d2cb8f717fb53b))

# [1.4.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.3.1...v1.4.0) (2022-11-08)

### Bug Fixes

- **AnalyticalTable:** adjust selection cell width to UX design ([#3733](https://github.com/SAP/ui5-webcomponents-react/issues/3733)) ([c07a866](https://github.com/SAP/ui5-webcomponents-react/commit/c07a8662c0f03881a7e6fdd872472f03322089bb)), closes [#3732](https://github.com/SAP/ui5-webcomponents-react/issues/3732)
- **AnalyticalTable:** consider `false` selected row id value for `onRowSelect` callback ([#3717](https://github.com/SAP/ui5-webcomponents-react/issues/3717)) ([5fcc8ce](https://github.com/SAP/ui5-webcomponents-react/commit/5fcc8ce4d82c0b9729ed2e4dd1e9adf5b1fb2168))
- bind web component events with useLayoutEffect if available ([#3718](https://github.com/SAP/ui5-webcomponents-react/issues/3718)) ([cba730f](https://github.com/SAP/ui5-webcomponents-react/commit/cba730ff19ddcbea26eb0a16eb3081a33514c4b1))
- **VariantManagement:** show tooltip on "Select View" button ([#3731](https://github.com/SAP/ui5-webcomponents-react/issues/3731)) ([3bdaada](https://github.com/SAP/ui5-webcomponents-react/commit/3bdaada7707e8e68613f3fee2009dba0ff5bfff4)), closes [#3123](https://github.com/SAP/ui5-webcomponents-react/issues/3123)

### Features

- **AnalyticalTable:** introduce `headerRowHeight` prop ([#3730](https://github.com/SAP/ui5-webcomponents-react/issues/3730)) ([d6ba5bb](https://github.com/SAP/ui5-webcomponents-react/commit/d6ba5bb71c9b7897d4115c4273c55b7bbea31a1a)), closes [#3716](https://github.com/SAP/ui5-webcomponents-react/issues/3716)

## [1.3.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.3.0...v1.3.1) (2022-11-07)

### Bug Fixes

- **typescript:** don't include `ref` in all component props ([#3713](https://github.com/SAP/ui5-webcomponents-react/issues/3713)) ([2f49dc3](https://github.com/SAP/ui5-webcomponents-react/commit/2f49dc34221a95e6ca99e7c3c9ad82cd6199cdf3))
- **TypeScript:** improve ref types ([#3714](https://github.com/SAP/ui5-webcomponents-react/issues/3714)) ([5048bfd](https://github.com/SAP/ui5-webcomponents-react/commit/5048bfd89c81dde0ad516fc3880cb1de539103ef))

# [1.3.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.2.3...v1.3.0) (2022-11-02)

### Features

- update to @ui5/webcomponents 1.9.0 ([#3708](https://github.com/SAP/ui5-webcomponents-react/issues/3708)) ([c2c046e](https://github.com/SAP/ui5-webcomponents-react/commit/c2c046e18a4fda4d8ac9f133b0a857919327349a))

## [1.2.3](https://github.com/SAP/ui5-webcomponents-react/compare/v1.2.2...v1.2.3) (2022-10-31)

### Bug Fixes

- **ComposedChart:** fix `onDataPointClick` event payload for bars ([#3697](https://github.com/SAP/ui5-webcomponents-react/issues/3697)) ([e0699d8](https://github.com/SAP/ui5-webcomponents-react/commit/e0699d88273948dd1f248437129b2b6e9447c483))

## [1.2.2](https://github.com/SAP/ui5-webcomponents-react/compare/v1.2.1...v1.2.2) (2022-10-27)

### Bug Fixes

- **AnalyticalTable:** only call onRowSelect when row is selected by user ([#3682](https://github.com/SAP/ui5-webcomponents-react/issues/3682)) ([e014c37](https://github.com/SAP/ui5-webcomponents-react/commit/e014c3720371984dcbf94668bf61e27dc5f5b4f8))
- **ColumnChartWithTrend:** enable `onDataPointClick` callback & fix tooltip ([#3688](https://github.com/SAP/ui5-webcomponents-react/issues/3688)) ([89107b8](https://github.com/SAP/ui5-webcomponents-react/commit/89107b820a219bbf0039b0dcb9ed4ab96a2e5258))
- **ComposedChart:** invoke `onDataPointClick` only on the points of the area chart ([#3687](https://github.com/SAP/ui5-webcomponents-react/issues/3687)) ([2239a49](https://github.com/SAP/ui5-webcomponents-react/commit/2239a491c95d3153b621accef9ce57352c5294ec))

## [1.2.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.2.0...v1.2.1) (2022-10-25)

### Bug Fixes

- **AnalyticalTable:** return correct values in `onRowSelect` callback ([#3668](https://github.com/SAP/ui5-webcomponents-react/issues/3668)) ([f0f736d](https://github.com/SAP/ui5-webcomponents-react/commit/f0f736d6e4fc0134c043a821db36de70582f003d)), closes [#3659](https://github.com/SAP/ui5-webcomponents-react/issues/3659) [#3612](https://github.com/SAP/ui5-webcomponents-react/issues/3612)

# [1.2.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.1.0...v1.2.0) (2022-10-21)

### Bug Fixes

- **AnalyticalTable - useIndeterminateRowSelection:** reset indeterminate state if not applicable ([#3644](https://github.com/SAP/ui5-webcomponents-react/issues/3644)) ([51deeb5](https://github.com/SAP/ui5-webcomponents-react/commit/51deeb55aa7293c7d18589466ea564219f5da5b8)), closes [#3604](https://github.com/SAP/ui5-webcomponents-react/issues/3604)
- **AnalyticalTable:** enable keyboard navigation for empty cells & align them correctly ([#3639](https://github.com/SAP/ui5-webcomponents-react/issues/3639)) ([d78dbb0](https://github.com/SAP/ui5-webcomponents-react/commit/d78dbb09b34570bd5c4af3fe94c70df0fd1ee604)), closes [#3605](https://github.com/SAP/ui5-webcomponents-react/issues/3605)
- **AnalyticalTable:** fix select-all behavior in React18 Strict Mode ([#3658](https://github.com/SAP/ui5-webcomponents-react/issues/3658)) ([5cf234f](https://github.com/SAP/ui5-webcomponents-react/commit/5cf234fae1b259d803e80f1d8e0bfadb876aea0a)), closes [#3657](https://github.com/SAP/ui5-webcomponents-react/issues/3657)
- **ColumnChartWithTrend:** improve TypeScript types and docs ([#3630](https://github.com/SAP/ui5-webcomponents-react/issues/3630)) ([885d56e](https://github.com/SAP/ui5-webcomponents-react/commit/885d56ea338f816fb1d0f3125ba33264fa556b37))
- **ObjectPage & DynamicPage:** don't show pin-button if header content is not defined ([#3666](https://github.com/SAP/ui5-webcomponents-react/issues/3666)) ([5d85ebe](https://github.com/SAP/ui5-webcomponents-react/commit/5d85ebee2ed3471e57acc1de89b26437fd5cfa2e))
- **ObjectPage & DynamicPage:** fix expand/collapse behavior of header content ([#3650](https://github.com/SAP/ui5-webcomponents-react/issues/3650)) ([9be8531](https://github.com/SAP/ui5-webcomponents-react/commit/9be853167a97c25dccd6ec9bc4148076d24da4c0)), closes [#3623](https://github.com/SAP/ui5-webcomponents-react/issues/3623)
- **Toolbar:** allow Fragments with single child inside `children` ([#3661](https://github.com/SAP/ui5-webcomponents-react/issues/3661)) ([8594993](https://github.com/SAP/ui5-webcomponents-react/commit/8594993b62a7aab2cf8304d0250a2d4c1736d6f0)), closes [#3660](https://github.com/SAP/ui5-webcomponents-react/issues/3660)

### Features

- **charts:** allow full customization of reference lines ([#3619](https://github.com/SAP/ui5-webcomponents-react/issues/3619)) ([9d582fc](https://github.com/SAP/ui5-webcomponents-react/commit/9d582fcbaac26fe2d5cbc403f2e3e1991cfaa4a8))

# [1.1.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.0.1...v1.1.0) (2022-10-06)

### Bug Fixes

- **AnalyticalTable:** force hide of body scrollbar ([#3614](https://github.com/SAP/ui5-webcomponents-react/issues/3614)) ([9647ad0](https://github.com/SAP/ui5-webcomponents-react/commit/9647ad07b6092f40b19dbd3f6834f2779d9020cf))
- **ObjectPage:** scroll to selected section with expanded header ([#3613](https://github.com/SAP/ui5-webcomponents-react/issues/3613)) ([7e58c1f](https://github.com/SAP/ui5-webcomponents-react/commit/7e58c1f350db59fa244f02c1f39c734e84fd4834))

### Features

- update @ui5/webcomponents to ~1.8.0 ([#3610](https://github.com/SAP/ui5-webcomponents-react/issues/3610)) ([f9c5c2d](https://github.com/SAP/ui5-webcomponents-react/commit/f9c5c2d1cd8e7c25ebb57e421ca3e83a4b48827e)), closes [#3583](https://github.com/SAP/ui5-webcomponents-react/issues/3583)

## [1.0.1](https://github.com/SAP/ui5-webcomponents-react/compare/v1.0.1-rc.0...v1.0.1) (2022-09-30)

### Bug Fixes

- **AnalyticalTable:** fix keyboard navigation with no-data placeholder ([#3600](https://github.com/SAP/ui5-webcomponents-react/issues/3600)) ([513b20c](https://github.com/SAP/ui5-webcomponents-react/commit/513b20cc49aa67934deb6467e6aa7d74a08d18eb))

## [1.0.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.0.0-rc.0...v1.0.1-rc.0) (2022-09-30)

### Bug Fixes

- **DynamicPageTitle:** fix subHeader default placement ([#3598](https://github.com/SAP/ui5-webcomponents-react/issues/3598)) ([d6b05a2](https://github.com/SAP/ui5-webcomponents-react/commit/d6b05a2a48e32f9f4c911129ce44d48d947e5c5f))

# [1.0.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.28.2...v1.0.0-rc.0) (2022-09-30)

### Bug Fixes

- **charts:** allow overwriting internal styles via stylesheet or inline ([#3594](https://github.com/SAP/ui5-webcomponents-react/issues/3594)) ([689a44c](https://github.com/SAP/ui5-webcomponents-react/commit/689a44c69cac01fdc1485761240b3a208efd3543))
- **VariantManagement:** adjust component to design specs ([#3588](https://github.com/SAP/ui5-webcomponents-react/issues/3588)) ([751c14c](https://github.com/SAP/ui5-webcomponents-react/commit/751c14c50bdd8aa3726d7fafba226b3b17d60e66))

### chore

- remove deprecated props ([#3597](https://github.com/SAP/ui5-webcomponents-react/issues/3597)) ([1cab34e](https://github.com/SAP/ui5-webcomponents-react/commit/1cab34e34725557233e5d35e569d59fa6dc8956d))

### Features

- **FilterBar:** update to latest UX specs ([#2731](https://github.com/SAP/ui5-webcomponents-react/issues/2731)) ([a37183f](https://github.com/SAP/ui5-webcomponents-react/commit/a37183fdca33d46bb77e0946f1a5bf0741bb8641)), closes [#3152](https://github.com/SAP/ui5-webcomponents-react/issues/3152) [#3124](https://github.com/SAP/ui5-webcomponents-react/issues/3124) [#2968](https://github.com/SAP/ui5-webcomponents-react/issues/2968) [#2808](https://github.com/SAP/ui5-webcomponents-react/issues/2808)
- prepare peer dependencies for 1.0.0 ([#3596](https://github.com/SAP/ui5-webcomponents-react/issues/3596)) ([0724381](https://github.com/SAP/ui5-webcomponents-react/commit/07243818291472ca1e1b8ab45863f9c76b152247))

### BREAKING CHANGES

- **ActionSheet**: The prop `alwaysShowHeader` has been removed.
- **ActionSheet**: The prop `a11yConfig.actionSheetMobileContent.ariaLabel` has been removed. Please use `accessibleName` instead.
- **AnalyticalTable**: The props `onRowSelected` and `onColumnsReordered` have been removed. Please use `onRowSelect` and `onColumnsReorder` instead.
- **DynamicPageTitle**: The props `actionsOverflowButton`, `navigationActionsOverflowButton` and `onToolbarOverflowChange` have been removed. Please use the `overflowButton` and `onOverflowChange` properties of the `actionsToolbarProps` and `navigationActionsToolbarProps` props instead. More details can be found in our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page).
- **FilterBar:** The FilterBar was completely overhauled to adjust to
  the latest design specs. You can find all breaking changes in our
  [MigrationGuide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page).
- **VariantManagement:** **VariantManagement:** `showCancelButton` prop has been
  removed without replacement.

## [0.28.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.28.1...v0.28.2) (2022-09-28)

### Bug Fixes

- **AnalyticalTable:** don't render checkboxes for grouped rows ([#3545](https://github.com/SAP/ui5-webcomponents-react/issues/3545)) ([e70f8bc](https://github.com/SAP/ui5-webcomponents-react/commit/e70f8bc5f41536127d11ae836a1bbc9e5e94e292))
- **AnalyticalTable:** don't scroll page when initially focusing the table by click ([#3523](https://github.com/SAP/ui5-webcomponents-react/issues/3523)) ([6e10279](https://github.com/SAP/ui5-webcomponents-react/commit/6e10279045766557d962443119f0fc677566470d)), closes [#3521](https://github.com/SAP/ui5-webcomponents-react/issues/3521)
- **AnalyticalTable:** don't throw error when sorted column is "popped-in" ([#3540](https://github.com/SAP/ui5-webcomponents-react/issues/3540)) ([9e59073](https://github.com/SAP/ui5-webcomponents-react/commit/9e590730a03dce13dec9bcee429c348313fef030)), closes [#3529](https://github.com/SAP/ui5-webcomponents-react/issues/3529)
- **AnalyticalTable:** fix scroll behavior of keyboard navigation ([#3584](https://github.com/SAP/ui5-webcomponents-react/issues/3584)) ([f06f0b9](https://github.com/SAP/ui5-webcomponents-react/commit/f06f0b9ca3a4b894ebe6f6ac334c681e11ac250a))
- **AnalyticalTable:** scroll horizontally if focused cell is only partially visible ([#3572](https://github.com/SAP/ui5-webcomponents-react/issues/3572)) ([1bcf729](https://github.com/SAP/ui5-webcomponents-react/commit/1bcf72966b98ec111aa558ce2b157087bf4cff61)), closes [#3571](https://github.com/SAP/ui5-webcomponents-react/issues/3571)
- **AnalyticalTable:** support horizon theme ([#3568](https://github.com/SAP/ui5-webcomponents-react/issues/3568)) ([ad37cd4](https://github.com/SAP/ui5-webcomponents-react/commit/ad37cd4535f6eb1deae11007bb27d07315c83c06))
- **AnalyticalTable:** use present tense for all events ([#3565](https://github.com/SAP/ui5-webcomponents-react/issues/3565)) ([3381047](https://github.com/SAP/ui5-webcomponents-react/commit/3381047b6034deba7a8574884ad1dfaa98e78e41))
- **DynamicPage & ObjectPage:** fix collapse/expand header loop ([#3533](https://github.com/SAP/ui5-webcomponents-react/issues/3533)) ([62397b0](https://github.com/SAP/ui5-webcomponents-react/commit/62397b0edab6e503e149364b23b653ae62003329)), closes [#3532](https://github.com/SAP/ui5-webcomponents-react/issues/3532)
- **MessageView:** remove hard-coded height and improve stories ([#3587](https://github.com/SAP/ui5-webcomponents-react/issues/3587)) ([377b9cb](https://github.com/SAP/ui5-webcomponents-react/commit/377b9cb68dde89acd4af702add680b50f47d43f2))
- **Toolbar:** fire `onOverflowChange` event if `children` are changed ([#3541](https://github.com/SAP/ui5-webcomponents-react/issues/3541)) ([780ec50](https://github.com/SAP/ui5-webcomponents-react/commit/780ec50783a1a199819680bc7e90d9303af4d5f4)), closes [#3530](https://github.com/SAP/ui5-webcomponents-react/issues/3530)
- **VariantManagement:** always display "Cancel" button in transparent design ([#3515](https://github.com/SAP/ui5-webcomponents-react/issues/3515)) ([f59d0e9](https://github.com/SAP/ui5-webcomponents-react/commit/f59d0e9198a05725d3c1197eb0c529bc8fdcfe3e)), closes [#3511](https://github.com/SAP/ui5-webcomponents-react/issues/3511)

### Features

- **Form:** introduce `backgroundDesign` prop ([#3566](https://github.com/SAP/ui5-webcomponents-react/issues/3566)) ([e2767bc](https://github.com/SAP/ui5-webcomponents-react/commit/e2767bc45eee41365bd2f52e7d0364d43022ca4c))

## [0.28.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.28.0...v0.28.1) (2022-09-09)

### Bug Fixes

- **Loader:** apply correct styles ([#3502](https://github.com/SAP/ui5-webcomponents-react/issues/3502)) ([371b9a1](https://github.com/SAP/ui5-webcomponents-react/commit/371b9a13b67bb787b02bcc624138ae09c2118097))
- **ObjectPageSection:** fix styles for horizon high contrast themes ([#3501](https://github.com/SAP/ui5-webcomponents-react/issues/3501)) ([f689496](https://github.com/SAP/ui5-webcomponents-react/commit/f689496e295add0d66c70202349238cfb0c9dc53))
- **Toolbar:** don't crash on unmount if customElement is not defined ([#3500](https://github.com/SAP/ui5-webcomponents-react/issues/3500)) ([992d1ea](https://github.com/SAP/ui5-webcomponents-react/commit/992d1eae63cb937f632fbe251416249afb3debf0)), closes [#3499](https://github.com/SAP/ui5-webcomponents-react/issues/3499)

# [0.28.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.27.5...v0.28.0) (2022-09-08)

### Bug Fixes

- **AnalyticalTable:** don't show unnecessary horizontal scrollbar ([#3432](https://github.com/SAP/ui5-webcomponents-react/issues/3432)) ([1b69421](https://github.com/SAP/ui5-webcomponents-react/commit/1b694213bd88087c88c13afb7afcea691852ac25)), closes [#3376](https://github.com/SAP/ui5-webcomponents-react/issues/3376) [#3369](https://github.com/SAP/ui5-webcomponents-react/issues/3369)
- **DynamicPage:** prevent footer from "jumping" in rare cases ([#3486](https://github.com/SAP/ui5-webcomponents-react/issues/3486)) ([7da82a0](https://github.com/SAP/ui5-webcomponents-react/commit/7da82a0df546c540e3924cbde5e5fa9d87b0397d)), closes [#3388](https://github.com/SAP/ui5-webcomponents-react/issues/3388)
- **MessageBox:** use Dialog `state` for better accessibility ([#3488](https://github.com/SAP/ui5-webcomponents-react/issues/3488)) ([d05cd76](https://github.com/SAP/ui5-webcomponents-react/commit/d05cd767f32240b364fadfd330bfa412f357f56f)), closes [#3480](https://github.com/SAP/ui5-webcomponents-react/issues/3480) [#3431](https://github.com/SAP/ui5-webcomponents-react/issues/3431) [#3375](https://github.com/SAP/ui5-webcomponents-react/issues/3375)
- **MessageViewButton:** fix bad import ([#3492](https://github.com/SAP/ui5-webcomponents-react/issues/3492)) ([f398cac](https://github.com/SAP/ui5-webcomponents-react/commit/f398cacced3d8042a9db6808c215a2ca68222ea3))

### Code Refactoring

- **TablePlaceholder:** use css animation instead of svg ([#3487](https://github.com/SAP/ui5-webcomponents-react/issues/3487)) ([63961d1](https://github.com/SAP/ui5-webcomponents-react/commit/63961d1c2b58fef2b0e87f447851f0a90deafba3))

### Features

- **MessageViewButton:** introduce component ([#3345](https://github.com/SAP/ui5-webcomponents-react/issues/3345)) ([38d2162](https://github.com/SAP/ui5-webcomponents-react/commit/38d21627463d5b8152e6b34462d517b28603969d))
- update @ui5/webcomponents to 1.7.1 ([#3465](https://github.com/SAP/ui5-webcomponents-react/issues/3465)) ([0426462](https://github.com/SAP/ui5-webcomponents-react/commit/0426462352e567b3a421ba8c7d8aa28d650be1e8))

### BREAKING CHANGES

- **MessageBox:** `MessageBoxTypes.Highlight` has been removed as it was
  not specified by the Fiori guidelines.
- **AnalyticalTable:** **AnalyticalTable:** Scaling the table via the CSS
  `scale()` function is now only supported if the scaleFactor is passed to
  the `scaleXFactor` prop.
- **TablePlaceholder:** removed props `rowHeight`, `tableWidth` and `isRtl`. Those values are now inherited via CSS.

## [0.27.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.27.4...v0.27.5) (2022-09-02)

### Bug Fixes

- **ActionSheet:** deprecate `alwaysShowHeader` prop ([#3448](https://github.com/SAP/ui5-webcomponents-react/issues/3448)) ([43e8bd7](https://github.com/SAP/ui5-webcomponents-react/commit/43e8bd7b52561c74e39cd82c40cdace7e80d2128))
- **AnalyticalTable:** update `aria-rowindex` when row order changes ([#3461](https://github.com/SAP/ui5-webcomponents-react/issues/3461)) ([83dacd7](https://github.com/SAP/ui5-webcomponents-react/commit/83dacd74b10de52ff782c4ee4296b2365949f922))
- **charts:** allow hiding of tooltips ([#3449](https://github.com/SAP/ui5-webcomponents-react/issues/3449)) ([ee0ab04](https://github.com/SAP/ui5-webcomponents-react/commit/ee0ab04e96822fa8879ec9cc305b0d28e195789b))
- **SplitterLayout:** correctly detect runtime change of `dir` on component ([#3447](https://github.com/SAP/ui5-webcomponents-react/issues/3447)) ([4939532](https://github.com/SAP/ui5-webcomponents-react/commit/493953256b9bc81487ad5f66decfe9e76792eb2f)), closes [#3446](https://github.com/SAP/ui5-webcomponents-react/issues/3446)

### Features

- **AnalyticalTable:** add `retainColumnWidth` prop ([#3445](https://github.com/SAP/ui5-webcomponents-react/issues/3445)) ([4f6e4ea](https://github.com/SAP/ui5-webcomponents-react/commit/4f6e4eaaaa60f6d297159dc2374e0cf58759e111)), closes [#3444](https://github.com/SAP/ui5-webcomponents-react/issues/3444)
- **MessageBox:** allow customization of `accessibleNameRef` ([#3453](https://github.com/SAP/ui5-webcomponents-react/issues/3453)) ([7fe78ca](https://github.com/SAP/ui5-webcomponents-react/commit/7fe78ca2f9a1a8e96f10decd46d9d822fa26ae28))

## [0.27.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.27.3...v0.27.4) (2022-08-26)

### Bug Fixes

- **AnalyticalTable - useOnColumnResize:** don't crash when more than 6 rows are rendered ([#3423](https://github.com/SAP/ui5-webcomponents-react/issues/3423)) ([87c21b8](https://github.com/SAP/ui5-webcomponents-react/commit/87c21b89cf7873add1b69e9debdf568974bf72c6))
- **SplitterLayout:** adjust design to comply with guidelines ([#3374](https://github.com/SAP/ui5-webcomponents-react/issues/3374)) ([a738c06](https://github.com/SAP/ui5-webcomponents-react/commit/a738c06b585088e1ac25ef087bd3caf44309a699))
- **SplitterLayout:** correct margin & grip button styles ([#3410](https://github.com/SAP/ui5-webcomponents-react/issues/3410)) ([3c62c8c](https://github.com/SAP/ui5-webcomponents-react/commit/3c62c8c12aa209ea3f6588e585ae4d1369e237ef))
- **useSyncRef:** add useCallback to avoid unnecessary rerenders ([#3381](https://github.com/SAP/ui5-webcomponents-react/issues/3381)) ([6de1d27](https://github.com/SAP/ui5-webcomponents-react/commit/6de1d2792ccde94ccfb1303db726562ab2375681))
- **VariantManagement:** translate "Manage Views" heading ([#3400](https://github.com/SAP/ui5-webcomponents-react/issues/3400)) ([5906a3f](https://github.com/SAP/ui5-webcomponents-react/commit/5906a3fdf196fb53e15b10d5ec55973fc9f30d05)), closes [#3397](https://github.com/SAP/ui5-webcomponents-react/issues/3397)

### Features

- **Form:** support conditional rendering of form items ([#3363](https://github.com/SAP/ui5-webcomponents-react/issues/3363)) ([94ddad0](https://github.com/SAP/ui5-webcomponents-react/commit/94ddad0519023e666543e08bf67e939d3e7296e7)), closes [#3362](https://github.com/SAP/ui5-webcomponents-react/issues/3362)

## [0.27.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.27.2...v0.27.3) (2022-08-10)

### Bug Fixes

- **jestSetup:** make mocked crypto API writable ([#3355](https://github.com/SAP/ui5-webcomponents-react/issues/3355)) ([fd39f9a](https://github.com/SAP/ui5-webcomponents-react/commit/fd39f9a1c6edeb69af28439d0a6c3a91e38cd3b9))

### Features

- **DynamicPageTitle:** allow a subset of `Toolbar` props to be passed to each toolbar ([#3354](https://github.com/SAP/ui5-webcomponents-react/issues/3354)) ([0dede0a](https://github.com/SAP/ui5-webcomponents-react/commit/0dede0a61bf6ce7a2885f74a00ff99edb983f6ee)), closes [#3353](https://github.com/SAP/ui5-webcomponents-react/issues/3353)

## [0.27.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.27.1...v0.27.2) (2022-08-08)

### Bug Fixes

- **AnalyticalTable:** allow adding columns in runtime ([#3328](https://github.com/SAP/ui5-webcomponents-react/issues/3328)) ([0fd7b6f](https://github.com/SAP/ui5-webcomponents-react/commit/0fd7b6f2e708cfbe313004f9efd914f5d4aec0ef))
- **AnalyticalTable:** allow closing the column popover with ESC again ([#3336](https://github.com/SAP/ui5-webcomponents-react/issues/3336)) ([7b60248](https://github.com/SAP/ui5-webcomponents-react/commit/7b60248407e193f73d1ff9c361b8b37182063903))
- **AnalyticalTable:** don't scroll when horizontal scrollbar is clicked ([#3286](https://github.com/SAP/ui5-webcomponents-react/issues/3286)) ([68bf828](https://github.com/SAP/ui5-webcomponents-react/commit/68bf828e2a5075bb366ca1749a401f60c367a650)), closes [#3285](https://github.com/SAP/ui5-webcomponents-react/issues/3285)
- **FilterBar:** use emphasized design for "Save" if "Go" is not set ([#3344](https://github.com/SAP/ui5-webcomponents-react/issues/3344)) ([e169821](https://github.com/SAP/ui5-webcomponents-react/commit/e1698216f4189874a6e9f19bf60568370aefc17a))
- **ObjectStatus:** update to latest design specs for Belize, Quartz and Horizon ([#3340](https://github.com/SAP/ui5-webcomponents-react/issues/3340)) ([f90077d](https://github.com/SAP/ui5-webcomponents-react/commit/f90077de24eef165d54472f1256226cad5a1e0b7))
- **VariantManagement:** only show favorite column if `showOnlyFavorites` is `true` ([#3331](https://github.com/SAP/ui5-webcomponents-react/issues/3331)) ([c44f80a](https://github.com/SAP/ui5-webcomponents-react/commit/c44f80a9d4e8a8d3df3fe5083ded501e265ea82e))

### Features

- **DynamicPageTitle:** add `actionsOverflowButton` and `navigationActionsOverflowButton` ([#3338](https://github.com/SAP/ui5-webcomponents-react/issues/3338)) ([6b04c98](https://github.com/SAP/ui5-webcomponents-react/commit/6b04c980b1b9832c1bdcd53a2ebed09c71774e50)), closes [#3253](https://github.com/SAP/ui5-webcomponents-react/issues/3253)
- **Toolbar:** add `overflowButton` prop ([#3337](https://github.com/SAP/ui5-webcomponents-react/issues/3337)) ([40f66c0](https://github.com/SAP/ui5-webcomponents-react/commit/40f66c0a932b3b517a001c26a710a4b3aa8adf5d))

## [0.27.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.27.0...v0.27.1) (2022-08-02)

### Bug Fixes

- **ActionSheet:** update to latest design specs for Quartz and Horizon ([#3308](https://github.com/SAP/ui5-webcomponents-react/issues/3308)) ([e6f984a](https://github.com/SAP/ui5-webcomponents-react/commit/e6f984ab7312b3e7ea362955208f09ea2cd3dff6))
- **AnalyticalTable:** support whitespace input in filter, close column popover on keystroke selection ([#3324](https://github.com/SAP/ui5-webcomponents-react/issues/3324)) ([5207f74](https://github.com/SAP/ui5-webcomponents-react/commit/5207f743b12b6d4f9236538144831a17e1d5a507))
- **ObjectStatus:** correct icon padding in RTL ([#3300](https://github.com/SAP/ui5-webcomponents-react/issues/3300)) ([c09139b](https://github.com/SAP/ui5-webcomponents-react/commit/c09139bb5670f252fbaa899a6cf94155c3a699f9))
- **Text:** update text selection color ([#3301](https://github.com/SAP/ui5-webcomponents-react/issues/3301)) ([e024bcb](https://github.com/SAP/ui5-webcomponents-react/commit/e024bcb6e9642335e76ce8b4a74003bcb523d899))

# [0.27.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.26.2...v0.27.0) (2022-07-25)

### Bug Fixes

- **AnalyticalTable:** remove empty grouped rows ([#3273](https://github.com/SAP/ui5-webcomponents-react/issues/3273)) ([50d38a7](https://github.com/SAP/ui5-webcomponents-react/commit/50d38a703cf638ea871d2213e74dd08576bc3aca)), closes [#3266](https://github.com/SAP/ui5-webcomponents-react/issues/3266)
- **Toolbar:** align `iconEnd` button content to start ([#3281](https://github.com/SAP/ui5-webcomponents-react/issues/3281)) ([028259d](https://github.com/SAP/ui5-webcomponents-react/commit/028259df6c165bd8efe8e6b7a95f523685b340e8))

### Features

- update `@ui5/webcomponents` to 1.6.0 ([#3283](https://github.com/SAP/ui5-webcomponents-react/issues/3283)) ([230d5de](https://github.com/SAP/ui5-webcomponents-react/commit/230d5de0475db9d06e5eeacee37bc5724839c503))

## [0.26.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.26.1...v0.26.2) (2022-07-19)

### Bug Fixes

- **AnalyticalCard:** fix screen reader announcement for content section ([#3258](https://github.com/SAP/ui5-webcomponents-react/issues/3258)) ([fd7faaf](https://github.com/SAP/ui5-webcomponents-react/commit/fd7faaf345c2a073eae63c1f1ebd4636735ffd02))
- **AnalyticalTable:** correct `detail` in `onRowSelected` callback ([#3235](https://github.com/SAP/ui5-webcomponents-react/issues/3235)) ([c6e9909](https://github.com/SAP/ui5-webcomponents-react/commit/c6e9909eae9d584405b65b897133c9307ca8041c)), closes [#3147](https://github.com/SAP/ui5-webcomponents-react/issues/3147)
- **AnalyticalTable:** prevent focus change on column resize ([#3221](https://github.com/SAP/ui5-webcomponents-react/issues/3221)) ([1deb82d](https://github.com/SAP/ui5-webcomponents-react/commit/1deb82d65313fe79ba597a1be42d8ec8136bf48d)), closes [#3220](https://github.com/SAP/ui5-webcomponents-react/issues/3220)
- **Form:** add padding between vertical aligned `FormItem`s ([#3210](https://github.com/SAP/ui5-webcomponents-react/issues/3210)) ([ee7f9f1](https://github.com/SAP/ui5-webcomponents-react/commit/ee7f9f184938e0e63f93c50e045b45b923943617))
- **NumericSideIndicator:** export prop-types interface ([#3257](https://github.com/SAP/ui5-webcomponents-react/issues/3257)) ([e348f30](https://github.com/SAP/ui5-webcomponents-react/commit/e348f30b44d450e6a15c2e7d4df5b83167c008f1))
- **SelectDialog:** support horizon themes ([#3198](https://github.com/SAP/ui5-webcomponents-react/issues/3198)) ([2bc8539](https://github.com/SAP/ui5-webcomponents-react/commit/2bc8539f61a230ab7b0b3ebed98edfa40efa71ec))

### Features

- **AnalyticalTable:** add `useOnColumnResize` plugin hook ([#3197](https://github.com/SAP/ui5-webcomponents-react/issues/3197)) ([844a8f3](https://github.com/SAP/ui5-webcomponents-react/commit/844a8f3e3dfb63c82008d64d35f3610fabdc7959)), closes [#3195](https://github.com/SAP/ui5-webcomponents-react/issues/3195)
- **DynamicPage:** add more aria options to `a11yConfig` ([#3240](https://github.com/SAP/ui5-webcomponents-react/issues/3240)) ([fb40a2a](https://github.com/SAP/ui5-webcomponents-react/commit/fb40a2aef368c5824014f389422f536d59af12c3))

## [0.26.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.26.0...v0.26.1) (2022-07-07)

### Bug Fixes

- add `IllustrationMessageSize` enum ([#3211](https://github.com/SAP/ui5-webcomponents-react/issues/3211)) ([44bdbf7](https://github.com/SAP/ui5-webcomponents-react/commit/44bdbf79ae0eb28b3e81148edb5a2ca443feaece))
- **i18n:** register context only once ([#3217](https://github.com/SAP/ui5-webcomponents-react/issues/3217)) ([b9d7f20](https://github.com/SAP/ui5-webcomponents-react/commit/b9d7f205413a5c308999728c38839a926a1a6fc6))

# [0.26.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.25.7...v0.26.0) (2022-07-04)

### Bug Fixes

- **AnalyticalCard:** implement latest specs and fix accessibility ([#3183](https://github.com/SAP/ui5-webcomponents-react/issues/3183)) ([8b7e6de](https://github.com/SAP/ui5-webcomponents-react/commit/8b7e6de94de8c8aee2832a0263ec6ac3534a725e))
- **AnalyticalTable:** `disableDragAndDrop` always disables drag and drop of column ([#3182](https://github.com/SAP/ui5-webcomponents-react/issues/3182)) ([f02c107](https://github.com/SAP/ui5-webcomponents-react/commit/f02c107128fe289ba23f02dff1e091858623cb32))

### chore

- increase minimum react version to 16.14.0 ([#3177](https://github.com/SAP/ui5-webcomponents-react/issues/3177)) ([bd3d499](https://github.com/SAP/ui5-webcomponents-react/commit/bd3d499b64ce418dd6ef28ac2a61bd84018683ed))
- remove deprecated entrypoints ([#3154](https://github.com/SAP/ui5-webcomponents-react/issues/3154)) ([e58f733](https://github.com/SAP/ui5-webcomponents-react/commit/e58f7331d1017528dacce10562d928fa2e7862b6))
- remove polyfills for IE11 and Safari ([#3138](https://github.com/SAP/ui5-webcomponents-react/issues/3138)) ([558fe71](https://github.com/SAP/ui5-webcomponents-react/commit/558fe7106eb4839b5443e5215f1a013729cd2f2c))

### Features

- update @ui5/webcomponents to 1.5.0 ([#3170](https://github.com/SAP/ui5-webcomponents-react/issues/3170)) ([43aebfd](https://github.com/SAP/ui5-webcomponents-react/commit/43aebfd123137fcce082978b79a38c8da7138b28))

### BREAKING CHANGES

- **AnalyticalCard:** The `AnalyticalCardHeader` has been refactored completely to match the latest design specifications. Please take a look at our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/main/?path=/docs/migration-guide--page).
- **@ui5/webcomponents-react**: remove all deprecated entrypoints
- **@ui5/webcomponents-react-base**: remove all deprecated entrypoints
- **@ui5/webcomponents-react-base**: remove deprecated `usePassThroughHtmlProps` hook
- **@ui5/webcomponents-react-charts**: remove all deprecated entrypoints
- The polyfills `@ui5/webcomponents-react-base/polyfill/Safari.js` and `@ui5/webcomponents-react-base/polyfill/IE11.js` and their dependencies have been removed. You will now most likely need to install `resize-observer-polyfill` on your own to run your jest tests. More Details can be found in our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/main/?path=/docs/migration-guide--page).
- minimum required version of `react` and `react-dom` bumped to `16.14.0` in order to use the new `jsx-transform`.

## [0.25.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.25.6...v0.25.7) (2022-06-30)

### Features

- **AnalyticalTable:** add `showOverlay` prop ([#3167](https://github.com/SAP/ui5-webcomponents-react/issues/3167)) ([6a19602](https://github.com/SAP/ui5-webcomponents-react/commit/6a1960219bf5c3e349b11dbd9c0bda190e6c932b)), closes [#3134](https://github.com/SAP/ui5-webcomponents-react/issues/3134)

## [0.25.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.25.5...v0.25.6) (2022-06-29)

### Bug Fixes

- **AnalyticalTable:** announce column header popover with screen readers ([#3159](https://github.com/SAP/ui5-webcomponents-react/issues/3159)) ([6b18a4b](https://github.com/SAP/ui5-webcomponents-react/commit/6b18a4bc094b17736e57cf54bb0525901075dfd6)), closes [#3132](https://github.com/SAP/ui5-webcomponents-react/issues/3132)
- **DynamicPage:** fix tooltip and aria-label for anchor bar buttons ([#3122](https://github.com/SAP/ui5-webcomponents-react/issues/3122)) ([b696d54](https://github.com/SAP/ui5-webcomponents-react/commit/b696d54ea936956a96809221c8d3bc3756c5b897))
- **Form:** fix alignment of last group row ([#3155](https://github.com/SAP/ui5-webcomponents-react/issues/3155)) ([f819d7f](https://github.com/SAP/ui5-webcomponents-react/commit/f819d7fb0e0f40c420f9ffe3990eb4da45ccf970))
- **MessageBox:** avoid duplicate aria announcement ([#3153](https://github.com/SAP/ui5-webcomponents-react/issues/3153)) ([344b977](https://github.com/SAP/ui5-webcomponents-react/commit/344b97706710ffef2e614e8667da065143a51120))

## [0.25.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.25.4...v0.25.5) (2022-06-22)

### Bug Fixes

- **ActionSheet:** don't scroll page on keyDown/Up, correct margin of buttons ([#3093](https://github.com/SAP/ui5-webcomponents-react/issues/3093)) ([da2c5a4](https://github.com/SAP/ui5-webcomponents-react/commit/da2c5a442e3ffad9f2099493132821543069e7ee)), closes [#3092](https://github.com/SAP/ui5-webcomponents-react/issues/3092)
- **AnalyticalTable:** adjust column scaling on data change ([#3102](https://github.com/SAP/ui5-webcomponents-react/issues/3102)) ([328fc7b](https://github.com/SAP/ui5-webcomponents-react/commit/328fc7b04d21c7db2576cb7652219e3d72146d9a))
- **DynamicPageTitle:** use "large" font size for title if no `headerContent` is set ([#3109](https://github.com/SAP/ui5-webcomponents-react/issues/3109)) ([40eef51](https://github.com/SAP/ui5-webcomponents-react/commit/40eef51dbced691ea2b83ea6daebe59c459dafdb))
- **SplitterElement:** don't remount component on reset ([#3103](https://github.com/SAP/ui5-webcomponents-react/issues/3103)) ([84ef289](https://github.com/SAP/ui5-webcomponents-react/commit/84ef289c47a443daa906f8b99f58f319c924813b))

### Features

- **ObjectPage & DynamicPage:** add `onToggleHeaderContent` event ([#3094](https://github.com/SAP/ui5-webcomponents-react/issues/3094)) ([e5bcb5a](https://github.com/SAP/ui5-webcomponents-react/commit/e5bcb5a725141714e93647740c538ddbb40e99fd)), closes [#3091](https://github.com/SAP/ui5-webcomponents-react/issues/3091)

## [0.25.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.25.3...v0.25.4) (2022-06-15)

### Bug Fixes

- simplify asset imports & improve i18n provider and docs ([#3079](https://github.com/SAP/ui5-webcomponents-react/issues/3079)) ([374a5d3](https://github.com/SAP/ui5-webcomponents-react/commit/374a5d339b4d9493cf04d7aa95161c2514b3cdc1))

## [0.25.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.25.2...v0.25.3) (2022-06-15)

### Bug Fixes

- prevent webpack export error in React 16 and 17 ([#3075](https://github.com/SAP/ui5-webcomponents-react/issues/3075)) ([d4afe80](https://github.com/SAP/ui5-webcomponents-react/commit/d4afe80c388806c53416385b824b7ac239d1b6b0))

## [0.25.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.25.1...v0.25.2) (2022-06-14)

### Bug Fixes

- **cra-template-seed:** Shell: use shellbar height css variable instead of fixed value ([#3054](https://github.com/SAP/ui5-webcomponents-react/issues/3054)) ([c95ad10](https://github.com/SAP/ui5-webcomponents-react/commit/c95ad101270848a66f86d2ace35a371c73fc5d3a))
- **Toolbar:** add margin for first child & fix rtl margins ([#3062](https://github.com/SAP/ui5-webcomponents-react/issues/3062)) ([b5af72e](https://github.com/SAP/ui5-webcomponents-react/commit/b5af72e13d71553b9c2d7822d0244a0463aca365)), closes [#3055](https://github.com/SAP/ui5-webcomponents-react/issues/3055)

### Features

- **AnalyticalTable:** add `useManualRowSelect` plugin hook ([#3056](https://github.com/SAP/ui5-webcomponents-react/issues/3056)) ([c2fb172](https://github.com/SAP/ui5-webcomponents-react/commit/c2fb172ce8c910b1c63a32a50700f3eceebebcb9))
- **AnalyticalTable:** improve "Smart" `scaleWidthMode` ([#3044](https://github.com/SAP/ui5-webcomponents-react/issues/3044)) ([5cbba91](https://github.com/SAP/ui5-webcomponents-react/commit/5cbba91581fccc294775b3853598e898225822e5))

## [0.25.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.25.0...v0.25.1) (2022-06-10)

### Bug Fixes

- **ActionSheet:** remove repetitive aria announcements ([#3050](https://github.com/SAP/ui5-webcomponents-react/issues/3050)) ([cdec3de](https://github.com/SAP/ui5-webcomponents-react/commit/cdec3defcd5f7b414edfed662eb065c15d447d41))
- **AnalyticalTable:** allow disabling custom scrollbar styles w/o using CSS ([#3040](https://github.com/SAP/ui5-webcomponents-react/issues/3040)) ([cbf79a5](https://github.com/SAP/ui5-webcomponents-react/commit/cbf79a54edc9013d5f36a143b0c8e2d4e57fdac8))
- **AnalyticalTable:** don't bubble up click event of th popover ([#3034](https://github.com/SAP/ui5-webcomponents-react/issues/3034)) ([a506c8a](https://github.com/SAP/ui5-webcomponents-react/commit/a506c8ad6e42d529ecc00eb313de08370fab5c29))
- **AnalyticalTable:** improve table scroll & resizer drag performance ([#3028](https://github.com/SAP/ui5-webcomponents-react/issues/3028)) ([1e10461](https://github.com/SAP/ui5-webcomponents-react/commit/1e1046112c5553159dd0ee0bf85a5ff70771e359))

# [0.25.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.24.0...v0.25.0) (2022-06-01)

### Bug Fixes

- **AnalyticalTable:** don't reset column widths on data load if data already exists ([#3012](https://github.com/SAP/ui5-webcomponents-react/issues/3012)) ([1b0331d](https://github.com/SAP/ui5-webcomponents-react/commit/1b0331d1c2553414d70f6ab3d22c7fd8b3ca1c77))
- **cra-template-seed:** improve formik bindings ([#3010](https://github.com/SAP/ui5-webcomponents-react/issues/3010)) ([a62556d](https://github.com/SAP/ui5-webcomponents-react/commit/a62556df6bc27d21dcf9c2d26bba631ac0a77a79)), closes [#2911](https://github.com/SAP/ui5-webcomponents-react/issues/2911)
- **DynamicPageTitle:** remove unnecessary padding on heading ([#3013](https://github.com/SAP/ui5-webcomponents-react/issues/3013)) ([cffcc2e](https://github.com/SAP/ui5-webcomponents-react/commit/cffcc2e7b030e0f3288db456130c15e89979acdf))
- **MessageBox:** remove default header icons from a11y tree ([#3016](https://github.com/SAP/ui5-webcomponents-react/issues/3016)) ([73aed44](https://github.com/SAP/ui5-webcomponents-react/commit/73aed44f205b4970c7a443a3c9ca0d465f43ed87))

### Features

- update [@ui5/webcomponents to 1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) ([#2997](https://github.com/SAP/ui5-webcomponents-react/issues/2997)) ([25a0d2f](https://github.com/SAP/ui5-webcomponents-react/commit/25a0d2f36fe3e194c1435a1a906247116c14ffba))

# [0.24.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.23.2...v0.24.0) (2022-05-24)

### Bug Fixes

- **AnalyticalTable - useRowDisableSelection:** correct a11y attributes for disabled rows ([#2920](https://github.com/SAP/ui5-webcomponents-react/issues/2920)) ([f0d8ebc](https://github.com/SAP/ui5-webcomponents-react/commit/f0d8ebc713e4657801143a49f1dbe1d699bded80))
- **AnalyticalTable:** correct virtualization behavior when scaled via CSS ([#2976](https://github.com/SAP/ui5-webcomponents-react/issues/2976)) ([65fbdc9](https://github.com/SAP/ui5-webcomponents-react/commit/65fbdc9d7826aef8dba44d6c24b3219db350396f))
- **AnalyticalTable:** don't scroll to top when collapsing rows ([#2931](https://github.com/SAP/ui5-webcomponents-react/issues/2931)) ([782b2e7](https://github.com/SAP/ui5-webcomponents-react/commit/782b2e713ccc6160ac52792edde75f9c502451e3))
- **AnalyticalTable:** don't wrap Header elements inside `Text` ([#2981](https://github.com/SAP/ui5-webcomponents-react/issues/2981)) ([fe290e7](https://github.com/SAP/ui5-webcomponents-react/commit/fe290e76442c04a41f29b78a2eeffd13637beb6f))
- **cra-template-seed:** use `onInput` for react change events ([#2913](https://github.com/SAP/ui5-webcomponents-react/issues/2913)) ([fbc971f](https://github.com/SAP/ui5-webcomponents-react/commit/fbc971f15b67f3b0eed6e62e70efdfe6bc676805))
- **DynamicPageTitle:** reduce title font-size for small devices ([#2940](https://github.com/SAP/ui5-webcomponents-react/issues/2940)) ([cddea31](https://github.com/SAP/ui5-webcomponents-react/commit/cddea3178fcde28d654b2613d8852fe3d4170a25))
- **Modals:** support React 18 by rendering Portals instead of creating new roots ([#2932](https://github.com/SAP/ui5-webcomponents-react/issues/2932)) ([f1d2bd3](https://github.com/SAP/ui5-webcomponents-react/commit/f1d2bd39eccab718e8a33839ff40186ffd8f68f7)), closes [#2730](https://github.com/SAP/ui5-webcomponents-react/issues/2730)
- **VariantManagement:** correct `valueState` behavior ([#2927](https://github.com/SAP/ui5-webcomponents-react/issues/2927)) ([a69f388](https://github.com/SAP/ui5-webcomponents-react/commit/a69f3883b99c44ec4379fa3aab2a558275c39756))

### chore

- remove deprecated `tooltip`, `useConsolidatedRef` and `StyleClassHelper` ([#2909](https://github.com/SAP/ui5-webcomponents-react/issues/2909)) ([57eacda](https://github.com/SAP/ui5-webcomponents-react/commit/57eacda9b108337d7520677b963dc3fcfb78d450))

### Features

- **OverflowToolbarButton & OverflowToolbarToggleButton:** add option to display text of a button only in toolbar popover ([#2971](https://github.com/SAP/ui5-webcomponents-react/issues/2971)) ([3ca8885](https://github.com/SAP/ui5-webcomponents-react/commit/3ca8885b553a99cc88762a8c25e77f79674acc40))
- **VariantManagement:** add hideCreatedBy property ([#2914](https://github.com/SAP/ui5-webcomponents-react/issues/2914)) ([3cc390c](https://github.com/SAP/ui5-webcomponents-react/commit/3cc390c749bf4d00f28d68006980cd873c25f777))

### Reverts

- Revert "fix(AnalyticalTable): don't wrap Header elements inside `Text` (#2981)" ([545defa](https://github.com/SAP/ui5-webcomponents-react/commit/545defa540bd4228b1c47f3f7587162a3f377bb4)), closes [#2981](https://github.com/SAP/ui5-webcomponents-react/issues/2981)

### BREAKING CHANGES

- **Modals:** In order to use the `Modals` helper, you **must** wrap your Application into the `<ThemeProvider />` component. For most users this should not be a breaking change as the `<ThemeProvider />` was required for other purposes already.
- The deprecated `tooltip` prop has been removed, please use the native `title` attribute instead (This does not remove the `tooltip` prop of the `Button`, `ToggleButton` or `SegmentedButtonItem`)
- The deprecated `useConsolidatedRef` hook has been removed, please use `useSyncRef` instead.
- The deprecated `StyleClassHelper` class has been removed, please use `clsx` instead or implement your own `className` helper.

## [0.23.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.23.1...v0.23.2) (2022-05-03)

### Bug Fixes

- **ActionSheet:** always align button content to start ([#2887](https://github.com/SAP/ui5-webcomponents-react/issues/2887)) ([252a273](https://github.com/SAP/ui5-webcomponents-react/commit/252a27382fc7cae2c19ee9cdfce6c5cf492c9d98))
- **cra-template-seed:** correct Portugues translations ([#2886](https://github.com/SAP/ui5-webcomponents-react/issues/2886)) ([e25f597](https://github.com/SAP/ui5-webcomponents-react/commit/e25f59730a91daf1a311e6a2075c11e11a2d5d87))
- **DynamicPage/ObjectPage:** implement Horizon Theme for Title and Anchor Buttons ([#2894](https://github.com/SAP/ui5-webcomponents-react/issues/2894)) ([442e0d2](https://github.com/SAP/ui5-webcomponents-react/commit/442e0d205e9d61bf5105fcf2170c8e026b7fce5f))
- **ObjectPage:** fix Section and SubSection Styles for Horizon theme family ([#2904](https://github.com/SAP/ui5-webcomponents-react/issues/2904)) ([ffec199](https://github.com/SAP/ui5-webcomponents-react/commit/ffec1996daa1334a6168a076a4db53715099f19f))
- **Toolbar:** correctly align icon-only buttons in overflow popover ([#2893](https://github.com/SAP/ui5-webcomponents-react/issues/2893)) ([8c40522](https://github.com/SAP/ui5-webcomponents-react/commit/8c40522a8490bb270930ac96fecbf73d36724779))

## [0.23.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.23.0...v0.23.1) (2022-04-28)

### Bug Fixes

- **AnalyticalTable:** announce content of `header` in screen readers ([#2816](https://github.com/SAP/ui5-webcomponents-react/issues/2816)) ([a9964e9](https://github.com/SAP/ui5-webcomponents-react/commit/a9964e902f2eaa397383cafcb5fe9f049bf2d660))
- **cra-template-seed:** update UI5 Web Components language when user changes language ([#2872](https://github.com/SAP/ui5-webcomponents-react/issues/2872)) ([ead5c60](https://github.com/SAP/ui5-webcomponents-react/commit/ead5c605d22b19b1b62a8a1a96e2d7a0d61f87c2))
- **cra-template:** update testing-library to latest versions ([#2801](https://github.com/SAP/ui5-webcomponents-react/issues/2801)) ([ab2f22d](https://github.com/SAP/ui5-webcomponents-react/commit/ab2f22dbe5f700e706c69248fe755569bcb27da2))
- **i18nProvider:** make sure I18nContext is always available ([#2869](https://github.com/SAP/ui5-webcomponents-react/issues/2869)) ([f74d47b](https://github.com/SAP/ui5-webcomponents-react/commit/f74d47b2b20e004c8d9abf4ae02e4b607e00fad4))
- **Toolbar:** correct styles for overflow popover in mobile mode ([#2834](https://github.com/SAP/ui5-webcomponents-react/issues/2834)) ([51e955b](https://github.com/SAP/ui5-webcomponents-react/commit/51e955bbcc5b93c59000e11a74cacb15c06bfb8d))
- **TypeScript:** correct typings of `detail` property of CustomElements ([#2845](https://github.com/SAP/ui5-webcomponents-react/issues/2845)) ([261edc5](https://github.com/SAP/ui5-webcomponents-react/commit/261edc58ded067a4c5ab10a57a7680b089926ce9))
- update @ui5/webcomponents to 1.3.1 ([#2870](https://github.com/SAP/ui5-webcomponents-react/issues/2870)) ([9366adc](https://github.com/SAP/ui5-webcomponents-react/commit/9366adc03679f6704e059927ea5c5fb468180d81))

### Features

- **AnalyticalTable:** add `onTableScroll` prop ([#2817](https://github.com/SAP/ui5-webcomponents-react/issues/2817)) ([c9cc986](https://github.com/SAP/ui5-webcomponents-react/commit/c9cc986e3b23e2666cbc9143864b525a72876fc5))

# [0.23.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.22.8...v0.23.0) (2022-04-22)

### Bug Fixes

- **AnalyticalTable:** add a11y attribute for expanded and selected state of row ([#2774](https://github.com/SAP/ui5-webcomponents-react/issues/2774)) ([1397335](https://github.com/SAP/ui5-webcomponents-react/commit/139733559f79dba5015fb14ec082e56391aeed1b))
- **Form:** correct alignment ([#2827](https://github.com/SAP/ui5-webcomponents-react/issues/2827)) ([faa1d28](https://github.com/SAP/ui5-webcomponents-react/commit/faa1d2861c7317a6f197e510dbdc3515cd378c6f))
- **Form:** prevent crash if window range is initially not available ([#2818](https://github.com/SAP/ui5-webcomponents-react/issues/2818)) ([df7ecd4](https://github.com/SAP/ui5-webcomponents-react/commit/df7ecd4051af16f0c48d431e5ae92fe5ea627b2e))
- **ObjectPage:** don't crash on tab select after ui5-wc update ([#2833](https://github.com/SAP/ui5-webcomponents-react/issues/2833)) ([a5b5aa6](https://github.com/SAP/ui5-webcomponents-react/commit/a5b5aa67b46b53fb40884b43f0181c8c90852997))

### Features

- update @ui5/webcomponents to 1.3.0 ([#2796](https://github.com/SAP/ui5-webcomponents-react/issues/2796)) ([21b2e9f](https://github.com/SAP/ui5-webcomponents-react/commit/21b2e9f153b0a9b9ca98d93a8dede41ef7a9aa40))

### BREAKING CHANGES

- **FilterItem:** The FilterItem now extends the UI5Element and not the ListItem anymore. As a result the `type`, `selected` and `onDetailClick` props have been removed.

## [0.22.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.22.7...v0.22.8) (2022-04-14)

### Bug Fixes

- **SplitterElement:** don't crash if element ref is undefined ([#2789](https://github.com/SAP/ui5-webcomponents-react/issues/2789)) ([d6d8b16](https://github.com/SAP/ui5-webcomponents-react/commit/d6d8b1637513c92a246474123bc3f2d2a1876e0c))
- **Toolbar:** correct overflow behavior with single item and alignment of overflow button ([#2792](https://github.com/SAP/ui5-webcomponents-react/issues/2792)) ([5b7ff6a](https://github.com/SAP/ui5-webcomponents-react/commit/5b7ff6a823b6a0b374a4d421a938a1a0ada3b161))
- update theming parameters ([#2779](https://github.com/SAP/ui5-webcomponents-react/issues/2779)) ([f60bb0c](https://github.com/SAP/ui5-webcomponents-react/commit/f60bb0c038ab06f3fd1931eb82a77caeee3f011b))

## [0.22.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.22.6...v0.22.7) (2022-04-08)

### Bug Fixes

- **AnalyticalTable:** support custom `subRowsKey` in combination with `selectSubRows` ([#2761](https://github.com/SAP/ui5-webcomponents-react/issues/2761)) ([92bf138](https://github.com/SAP/ui5-webcomponents-react/commit/92bf138eab2e465aafa966609bd3ef10d88b770c))
- **MessageView:** fix scroll behaviour and add no data handling ([#2759](https://github.com/SAP/ui5-webcomponents-react/issues/2759)) ([502394a](https://github.com/SAP/ui5-webcomponents-react/commit/502394ae874f88309ba0f49820f241381fad13b4))
- **Toolbar:** stretch overflow popover to available screen width on phones ([#2747](https://github.com/SAP/ui5-webcomponents-react/issues/2747)) ([e6ea478](https://github.com/SAP/ui5-webcomponents-react/commit/e6ea4786d89f19542f9b44026cebefa60dd523d3))

### Features

- **DynamicPage:** make role of footer customizable ([#2753](https://github.com/SAP/ui5-webcomponents-react/issues/2753)) ([c5c4d9d](https://github.com/SAP/ui5-webcomponents-react/commit/c5c4d9d318c027d5be9fc033c85c031c7ea1df54))

## [0.22.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.22.5...v0.22.6) (2022-04-05)

### Bug Fixes

- **i18nBundle:** support micro front ends ([#2743](https://github.com/SAP/ui5-webcomponents-react/issues/2743)) ([cc2fe72](https://github.com/SAP/ui5-webcomponents-react/commit/cc2fe728a47a42c5719a57f46ebdd8281d75dec7))

## [0.22.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.22.4...v0.22.5) (2022-03-31)

### Bug Fixes

- **AnalyticalTable:** enable keyboard selection with RowSelector selection behavior ([#2723](https://github.com/SAP/ui5-webcomponents-react/issues/2723)) ([01bf233](https://github.com/SAP/ui5-webcomponents-react/commit/01bf233fa0a18091d474a78de1ee1cc7d4c303dc))
- **Toolbar:** only assign aria attributes when needed ([#2729](https://github.com/SAP/ui5-webcomponents-react/issues/2729)) ([c698a37](https://github.com/SAP/ui5-webcomponents-react/commit/c698a375a16c684bf12c169353903655d2dd66d0))
- **useResponsiveContentPadding:** calculate paddings based on border box ([#2710](https://github.com/SAP/ui5-webcomponents-react/issues/2710)) ([cf3c8e4](https://github.com/SAP/ui5-webcomponents-react/commit/cf3c8e4ebc96651d8f4d2bf805062c5b639974ae))
- **VariantManagement:** call onSaveManageViews with current callback properties ([#2701](https://github.com/SAP/ui5-webcomponents-react/issues/2701)) ([d66188e](https://github.com/SAP/ui5-webcomponents-react/commit/d66188ee821ab2cf68499d2cd9b24223c7dc0121))

### Features

- **AnalyticalTable:** add `adjustTableHeightOnPopIn` prop to calculate body height based on pop-in rows ([#2721](https://github.com/SAP/ui5-webcomponents-react/issues/2721)) ([b3dab3f](https://github.com/SAP/ui5-webcomponents-react/commit/b3dab3fe84f41ddd615ba84f9e655590e30f1e95))
- **SplitterLayout:** add `options` prop to customize reset behavior, correct sizing of elements ([#2713](https://github.com/SAP/ui5-webcomponents-react/issues/2713)) ([4dc15f4](https://github.com/SAP/ui5-webcomponents-react/commit/4dc15f45e5b319bbccca5e88864bc4c82909d886))
- support react 18 ([#2719](https://github.com/SAP/ui5-webcomponents-react/issues/2719)) ([e0f12d9](https://github.com/SAP/ui5-webcomponents-react/commit/e0f12d9514e067e644becaad5dc156459bf837ac))

## [0.22.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.22.3...v0.22.4) (2022-03-23)

### Bug Fixes

- update to @ui5/webcomponents 1.2.3 ([#2700](https://github.com/SAP/ui5-webcomponents-react/issues/2700)) ([d6c7659](https://github.com/SAP/ui5-webcomponents-react/commit/d6c76592e4a545da215daa829810c641cb9dfc58))

## [0.22.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.22.2...v0.22.3) (2022-03-18)

### Bug Fixes

- **AnalyticalTable - `useRowDisableSelection` :** fire `onRowClick` event on non selectable rows ([#2664](https://github.com/SAP/ui5-webcomponents-react/issues/2664)) ([11610e9](https://github.com/SAP/ui5-webcomponents-react/commit/11610e9dee45504e74310b2c37788bd7f8d869ff))
- **AnalyticalTable:** update table body height when changed on runtime ([#2688](https://github.com/SAP/ui5-webcomponents-react/issues/2688)) ([fbc306d](https://github.com/SAP/ui5-webcomponents-react/commit/fbc306d530418c135a894cb1fa2c62def0814304))
- **cra-template-seed:** update all dependencies ([#2674](https://github.com/SAP/ui5-webcomponents-react/issues/2674)) ([042ee74](https://github.com/SAP/ui5-webcomponents-react/commit/042ee743446413f3734053e1884e8ad6dd43ed8d))
- **cra-template:** update from official `cra-template` ([#2673](https://github.com/SAP/ui5-webcomponents-react/issues/2673)) ([1e687a1](https://github.com/SAP/ui5-webcomponents-react/commit/1e687a1841c1b7672907520a265717a84c1ffe46))
- **DynamicPage:** prevent error in React Strict Mode ([#2684](https://github.com/SAP/ui5-webcomponents-react/issues/2684)) ([0a69903](https://github.com/SAP/ui5-webcomponents-react/commit/0a69903f23068e5bed5ba981db4b3a55aea1d759))
- **ObjectPage:** remove content padding of sub-section popover ([#2681](https://github.com/SAP/ui5-webcomponents-react/issues/2681)) ([3acfeb6](https://github.com/SAP/ui5-webcomponents-react/commit/3acfeb6a21eaf7e4c2e5cfdf36da28e66fd437db))
- **Toolbar:** spacings between elements ([#2660](https://github.com/SAP/ui5-webcomponents-react/issues/2660)) ([fce68fa](https://github.com/SAP/ui5-webcomponents-react/commit/fce68fa38af64b53ec721ed34d62bbca36a693cd))
- **VariantManagement:** render save-as dialog with portal, fix styles ([#2676](https://github.com/SAP/ui5-webcomponents-react/issues/2676)) ([0a88653](https://github.com/SAP/ui5-webcomponents-react/commit/0a886533eae80de85d4c4e27ee437704f2c78cf0))
- **withWebcomponent:** add optional chaining for event listener registration ([#2670](https://github.com/SAP/ui5-webcomponents-react/issues/2670)) ([96f1337](https://github.com/SAP/ui5-webcomponents-react/commit/96f13373dae60099828a8df24d8bd678399e6ba4))

### Features

- **FormItem:** add data attributes to form item container ([#2668](https://github.com/SAP/ui5-webcomponents-react/issues/2668)) ([484f7ad](https://github.com/SAP/ui5-webcomponents-react/commit/484f7ad052138ba8ded955e8b05f81f565d8d5f1))

## [0.22.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.22.1...v0.22.2) (2022-03-08)

### Bug Fixes

- **ActionSheet:** allow key navigation between action buttons with screen readers ([#2658](https://github.com/SAP/ui5-webcomponents-react/issues/2658)) ([3cce57c](https://github.com/SAP/ui5-webcomponents-react/commit/3cce57ce386613f46d688e1e71f6062af2526723))
- **ComposedChart:** fix formatters and create unique sync ids per chart ([#2659](https://github.com/SAP/ui5-webcomponents-react/issues/2659)) ([895aa10](https://github.com/SAP/ui5-webcomponents-react/commit/895aa1027023cb5c88199541379012783e698087))
- **Toolbar:** show correct value for `aria-expanded` ([#2657](https://github.com/SAP/ui5-webcomponents-react/issues/2657)) ([df80f5d](https://github.com/SAP/ui5-webcomponents-react/commit/df80f5d76dd6a0ce5c3c30211ab91d4ab6c6640e))

### Features

- add `Modals` component for opening modals imperatively ([#2654](https://github.com/SAP/ui5-webcomponents-react/issues/2654)) ([917f0b7](https://github.com/SAP/ui5-webcomponents-react/commit/917f0b7b452716c6980751f3aff0c16bfa0df3f8))

## [0.22.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.22.0...v0.22.1) (2022-03-04)

### Bug Fixes

- **ActionSheet:** fix unexpected white line ([#2645](https://github.com/SAP/ui5-webcomponents-react/issues/2645)) ([b891060](https://github.com/SAP/ui5-webcomponents-react/commit/b891060aec9007bbd582f12e5821dcd1a001f631))
- **AnalyticalTable:** correct: h-align of header, padding of popover, spacing between header & body ([#2643](https://github.com/SAP/ui5-webcomponents-react/issues/2643)) ([d566dde](https://github.com/SAP/ui5-webcomponents-react/commit/d566ddef5aefbdd58f162df237581e44221be9cc))
- **DynamicPageTitle:** make sure overflow popover for actions closes after interaction ([#2653](https://github.com/SAP/ui5-webcomponents-react/issues/2653)) ([fd495a7](https://github.com/SAP/ui5-webcomponents-react/commit/fd495a78a517d3082a22913f0de0aa7b77f7425a))
- fix build for "bring your own webcomponents" wrappers ([#2649](https://github.com/SAP/ui5-webcomponents-react/issues/2649)) ([1ad0c4f](https://github.com/SAP/ui5-webcomponents-react/commit/1ad0c4fee406355072c4f33578df4821652fa939))

# [0.22.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.21.5...v0.22.0) (2022-03-02)

### Bug Fixes

- **useI18nBundle:** update translations in all mounted components ([#2629](https://github.com/SAP/ui5-webcomponents-react/issues/2629)) ([6840840](https://github.com/SAP/ui5-webcomponents-react/commit/6840840605664df58b6a8ee9d8f706046a0777d3))

### Features

- **Toolbar:** add a11y attributes to overflow button ([#2634](https://github.com/SAP/ui5-webcomponents-react/issues/2634)) ([e0d2a5e](https://github.com/SAP/ui5-webcomponents-react/commit/e0d2a5e6c5d0ffcbb7a06b3c536941df3cc7f54f))
- update @ui5/webcomponents to 1.2.1 ([#2631](https://github.com/SAP/ui5-webcomponents-react/issues/2631)) ([f9a0156](https://github.com/SAP/ui5-webcomponents-react/commit/f9a0156b6e8c40d4bd87ecf195f885e3d2b4e1dd))

### BREAKING CHANGES

- **useI18nBundle:** The `useI18nBundle` hook must now be used in the context of the `ThemeProvider`.  
  _Please make sure that you have wrapped your App in the ThemeProvider component._

## [0.21.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.21.4...v0.21.5) (2022-02-21)

### Bug Fixes

- **AnalyticalTable:** fix layout of Column Filter Input ([#2620](https://github.com/SAP/ui5-webcomponents-react/issues/2620)) ([59437f0](https://github.com/SAP/ui5-webcomponents-react/commit/59437f0d209d14037b0de40e40ffe5dc57ca3b68))
- create re-export of AnalyticalTableHooks ([#2619](https://github.com/SAP/ui5-webcomponents-react/issues/2619)) ([b251c6d](https://github.com/SAP/ui5-webcomponents-react/commit/b251c6d9d3dd140925e7f44d942fe13df76a75c4))

## [0.21.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.21.3...v0.21.4) (2022-02-21)

### Bug Fixes

- create re-export components for old folder structure ([#2618](https://github.com/SAP/ui5-webcomponents-react/issues/2618)) ([e3f4e38](https://github.com/SAP/ui5-webcomponents-react/commit/e3f4e3888147a254618ef1800959ea4541ad3271))

## [0.21.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.21.2...v0.21.3) (2022-02-21)

### Bug Fixes

- **ActionSheet:** only announce aria role once ([#2562](https://github.com/SAP/ui5-webcomponents-react/issues/2562)) ([672fa3e](https://github.com/SAP/ui5-webcomponents-react/commit/672fa3eb4aba60406b3156f8c0fad0bb3fb6c156))
- cancel debounced functions when component unmounts ([#2582](https://github.com/SAP/ui5-webcomponents-react/issues/2582)) ([d022da0](https://github.com/SAP/ui5-webcomponents-react/commit/d022da08db0b230b1c253c32137e337b0686d1c7))
- **DynamicPageTitle:** close overflow popover on action click ([#2608](https://github.com/SAP/ui5-webcomponents-react/issues/2608)) ([ee246de](https://github.com/SAP/ui5-webcomponents-react/commit/ee246dee09447e480ba3f31d567883d16b63d904))
- **i18n:** improve translation of cancel and clear ([#2605](https://github.com/SAP/ui5-webcomponents-react/issues/2605)) ([9124c72](https://github.com/SAP/ui5-webcomponents-react/commit/9124c72167a2804ede1355f48bb913c761798e81))
- **types:** remove object properties from declarative prop types ([#2586](https://github.com/SAP/ui5-webcomponents-react/issues/2586)) ([beb334f](https://github.com/SAP/ui5-webcomponents-react/commit/beb334f870c7455020a5db2d1c38cacfef6c268e))
- use correct return type for web component methods ([#2614](https://github.com/SAP/ui5-webcomponents-react/issues/2614)) ([74e800d](https://github.com/SAP/ui5-webcomponents-react/commit/74e800d1ae0bcf6ce83a5e195d90bfb996162176))

### Features

- add `waitForDefine` prop to all components with web component base ([#2594](https://github.com/SAP/ui5-webcomponents-react/issues/2594)) ([633a5b2](https://github.com/SAP/ui5-webcomponents-react/commit/633a5b2ce24345427a3c94d7fbfdd5cfece5994f))
- **FilterBar:** make opening the filter dialog optional in `onFiltersDialogOpen`, fix alignment of checkbox ([#2537](https://github.com/SAP/ui5-webcomponents-react/issues/2537)) ([e761863](https://github.com/SAP/ui5-webcomponents-react/commit/e761863040a67b0785fac0abce25155e4a336e61))
- **SplitterLayout:** initial component implementation ([#2487](https://github.com/SAP/ui5-webcomponents-react/issues/2487)) ([14d29aa](https://github.com/SAP/ui5-webcomponents-react/commit/14d29aa43a12142bb45c6886718c0cdafeb55331))
- **Toolbar:** expose overflow popover Ref via `overflowPopoverRef` prop ([#2607](https://github.com/SAP/ui5-webcomponents-react/issues/2607)) ([f5ec6f9](https://github.com/SAP/ui5-webcomponents-react/commit/f5ec6f9fdb567b16bcfda905a37a75184bc3a3c9))

### Deprecation

- All interfaces, enums, hooks, components, etc. should now be imported from the root path of their package.

```js
// Example for base package imports
import { ThemingParameters, useSyncRef, Device } from '@ui5/webcomponents-react-base';
// Example for chart package imports
import { BarChart, BarChartPlaceholder } from '@ui5/webcomponents-react-charts';
// Example for main package imports
import { ActionSheet, AnalyticalTableHooks, AvatarGroup, AvatarShape } from '@ui5/webcomponents-react';
```

## [0.21.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.21.1...v0.21.2) (2022-01-26)

### Bug Fixes

- update UI5 Web Components to 1.1.2 ([#2533](https://github.com/SAP/ui5-webcomponents-react/issues/2533)) ([033bf41](https://github.com/SAP/ui5-webcomponents-react/commit/033bf41fdc24bcafa7bc9a4957c751a920c89737))

## [0.21.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.21.0...v0.21.1) (2022-01-25)

### Bug Fixes

- **ObjectPage:** fix navigation bar styles ([#2528](https://github.com/SAP/ui5-webcomponents-react/issues/2528)) ([05840e1](https://github.com/SAP/ui5-webcomponents-react/commit/05840e1d4b7cd1ec1bcf936db4e88be18f1be9d2))

# [0.21.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.20.7...v0.21.0) (2022-01-25)

### Bug Fixes

- **RadialChart:** correct `chartConfig` types ([#2525](https://github.com/SAP/ui5-webcomponents-react/issues/2525)) ([a5465df](https://github.com/SAP/ui5-webcomponents-react/commit/a5465df518444a2a8ec56f73167e7736bef0fc14))

### Features

- update UI5 Web Components to 1.1.1 ([#2517](https://github.com/SAP/ui5-webcomponents-react/issues/2517)) ([310b0d2](https://github.com/SAP/ui5-webcomponents-react/commit/310b0d2053422f1dee8e189cf0dfaefa72fd86c7))

## [0.20.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.20.6...v0.20.7) (2022-01-19)

### Features

- **SelectDialog:** add `numberOfSelectedItems` prop to support `MultiSelect` mode ([#2494](https://github.com/SAP/ui5-webcomponents-react/issues/2494)) ([0077877](https://github.com/SAP/ui5-webcomponents-react/commit/00778776d265bfa481072a9def90858e655c02e0))
- **SelectDialog:** make infobar sticky ([#2504](https://github.com/SAP/ui5-webcomponents-react/issues/2504)) ([ff4d207](https://github.com/SAP/ui5-webcomponents-react/commit/ff4d2076fc2c9b3cf2c0bcfba9903ed6bef66732))
- **Toolbar:** add `aria-label` to overflow button ([#2488](https://github.com/SAP/ui5-webcomponents-react/issues/2488)) ([a4fd03d](https://github.com/SAP/ui5-webcomponents-react/commit/a4fd03d25bb22e50fd4bc1d72f0883cab1419658))

## [0.20.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.20.5...v0.20.6) (2022-01-12)

### Bug Fixes

- support `title` attribute by all components ([#2480](https://github.com/SAP/ui5-webcomponents-react/issues/2480)) ([44c707d](https://github.com/SAP/ui5-webcomponents-react/commit/44c707d2d35c7f7bac1d3558917e51f69e02bfce))

### Features

- **RadialChart:** introduce `chartConfig` & `displayValueStyle` prop, adjust default margin of internal chart ([#2465](https://github.com/SAP/ui5-webcomponents-react/issues/2465)) ([18f1e4f](https://github.com/SAP/ui5-webcomponents-react/commit/18f1e4f9d85cc7e437db017c136ecd5667329070))

## [0.20.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.20.4...v0.20.5) (2021-12-21)

### Bug Fixes

- add missing translations ([#2422](https://github.com/SAP/ui5-webcomponents-react/issues/2422)) ([2b1b1cb](https://github.com/SAP/ui5-webcomponents-react/commit/2b1b1cb0e5d4306b1daa502850751d84b1d0211e))

### Features

- **charts:** expose all `XAxis` and `YAxis` recharts props ([#2423](https://github.com/SAP/ui5-webcomponents-react/issues/2423)) ([9db0cf3](https://github.com/SAP/ui5-webcomponents-react/commit/9db0cf3e8f314877ba043241e6b06c3325454ae7))
- **MessageBox:** allow passing `Button`s as actions ([#2432](https://github.com/SAP/ui5-webcomponents-react/issues/2432)) ([cca2b61](https://github.com/SAP/ui5-webcomponents-react/commit/cca2b61c840f3f676f69c1337e803f1c4efc8ec9))
- **Toolbar:** introduce `numberOfAlwaysVisibleItems` prop ([#2425](https://github.com/SAP/ui5-webcomponents-react/issues/2425)) ([1ee1705](https://github.com/SAP/ui5-webcomponents-react/commit/1ee1705f269477e4eccb1def03047185813259c1))

## [0.20.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.20.3...v0.20.4) (2021-12-15)

### Bug Fixes

- use fully specified paths for all web component imports ([#2418](https://github.com/SAP/ui5-webcomponents-react/issues/2418)) ([b972dc8](https://github.com/SAP/ui5-webcomponents-react/commit/b972dc867eface52814806796dcd111ec8761ac3))

## [0.20.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.20.2...v0.20.3) (2021-12-09)

### Bug Fixes

- **ActionSheet:** expose `tabIndex` and `onFocus` of action buttons ([#2390](https://github.com/SAP/ui5-webcomponents-react/issues/2390)) ([94f05e2](https://github.com/SAP/ui5-webcomponents-react/commit/94f05e28489cd53f44996b9b8a4aea6e522e2d60))
- **ActionSheet:** reduce customCSS and respect scoping ([#2392](https://github.com/SAP/ui5-webcomponents-react/issues/2392)) ([657094e](https://github.com/SAP/ui5-webcomponents-react/commit/657094e87714e33d33cb229aaa5b18b3c0db5910))
- **AnalyticalTable:** align column header popover with `hAlign` column option ([#2384](https://github.com/SAP/ui5-webcomponents-react/issues/2384)) ([acc79dd](https://github.com/SAP/ui5-webcomponents-react/commit/acc79ddc03937f457c8660215399a603e6492fd9))
- **DynamicPage:** correctly display footer in FCL ([#2379](https://github.com/SAP/ui5-webcomponents-react/issues/2379)) ([1dddb5a](https://github.com/SAP/ui5-webcomponents-react/commit/1dddb5a2b6304de9b010c92e1f9597d827d72301))
- **Toolbar:** fix Button alignment in overflow popover (spec compliance) ([#2395](https://github.com/SAP/ui5-webcomponents-react/issues/2395)) ([73ded91](https://github.com/SAP/ui5-webcomponents-react/commit/73ded91b297771eba640512712b3c7ad7d3dc8b9))

### Features

- **DynamicPageTitle:** add `onToolbarOverflowChange` callback/prop ([d224f67](https://github.com/SAP/ui5-webcomponents-react/commit/d224f677e34c03b822e1f3b38eb59502d3a152fc))
- **Toolbar:** add `onOverflowChange` callback/prop ([#2377](https://github.com/SAP/ui5-webcomponents-react/issues/2377)) ([bf3b3aa](https://github.com/SAP/ui5-webcomponents-react/commit/bf3b3aa7b1d776d8545e5fce210b5d6899562443))

## [0.20.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.20.1...v0.20.2) (2021-12-03)

### Features

- **SelectDialog:** initial component implementation ([#2349](https://github.com/SAP/ui5-webcomponents-react/issues/2349)) ([37767d8](https://github.com/SAP/ui5-webcomponents-react/commit/37767d86c52d304bd51e4e722a07c052ad21a285))

## [0.20.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.20.0...v0.20.1) (2021-11-29)

### Bug Fixes

- **AnalyticalTable:** center `noDataText` if no columns are defined ([#2305](https://github.com/SAP/ui5-webcomponents-react/issues/2305)) ([54c5663](https://github.com/SAP/ui5-webcomponents-react/commit/54c5663def66fe6137382928d2647fe2712b4776))
- sync refs correctly with `useSyncRef` hook ([#2314](https://github.com/SAP/ui5-webcomponents-react/issues/2314)) ([d1db74c](https://github.com/SAP/ui5-webcomponents-react/commit/d1db74ce01054be56f684cf16205d6848770a688))

### Features

- **AnalyticalTable:** introduce useIndeterminateRowSelection plugin hook ([#2344](https://github.com/SAP/ui5-webcomponents-react/issues/2344)) ([9ea460d](https://github.com/SAP/ui5-webcomponents-react/commit/9ea460d71e40017f04d7262a11e3f2db7774da90))

# [0.20.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.19.1...v0.20.0) (2021-11-10)

### Features

- create dom ref interfaces for all web components ([#2292](https://github.com/SAP/ui5-webcomponents-react/issues/2292)) ([4b1d0fc](https://github.com/SAP/ui5-webcomponents-react/commit/4b1d0fc9c415646e7c964ac23a622c2ee176de7d))
- update @ui5/webcomponents to 1.0.0 🎉 ([#2282](https://github.com/SAP/ui5-webcomponents-react/issues/2282)) ([e6971af](https://github.com/SAP/ui5-webcomponents-react/commit/e6971afcab6553f813156f8188665a8a3965a6b5))  
  _All changes of version [1.0.0-rc.16](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.16) of ui5-webcomponents are available in 1.0.0 as well, therefore it's recommended to upgrade directly to this version._

### BREAKING CHANGES

- **TypeScript only**: The `Ui5` prefix for interfaces for using DOM refs (e.g. `Ui5DialogDomRef`) has been removed (now `DialogDomRef`) and the interfaces are now exported from the respective components themselves. For details please check our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#changed-typescript-interfaces-for-ref).

Co-authored-by: Harbarth, Lukas <lukas.harbarth@sap.com>

- update @ui5/webcomponents to [1.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0), this includes all changes of [1.0.0-rc.16](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.16)
- **Input:** The `onSuggestionScroll` event has been removed.
- **BreadcrumbsItem, ComboboxItem, MultiComboboxItem, Option, Tab:** `stableDomRef` prop has been removed - call `getDomRef()` to get the matching actual DOM ref.
- **ShellbarItem:** `onItemClick` has been renamed to `onClick`.
- **Wizard:** The `accessibleName` prop has been removed.

## [0.19.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.19.0...v0.19.1) (2021-11-04)

### Bug Fixes

- **charts:** correct version of wcr peer-dependencies ([#2281](https://github.com/SAP/ui5-webcomponents-react/issues/2281)) ([9f934f0](https://github.com/SAP/ui5-webcomponents-react/commit/9f934f0f4aacc4c6780eb7f3dc4f4a903d4317aa))

# [0.19.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.10...v0.19.0) (2021-11-03)

### Bug Fixes

- **FormItem:** remove unecessary string conversion ([#2236](https://github.com/SAP/ui5-webcomponents-react/issues/2236)) ([ed094c3](https://github.com/SAP/ui5-webcomponents-react/commit/ed094c35a5ecf3612b9e43c979614cd302bfd133))

### Features

- add `portalContainer` prop for elements rendered via `createPortal` ([#2275](https://github.com/SAP/ui5-webcomponents-react/issues/2275)) ([e71b663](https://github.com/SAP/ui5-webcomponents-react/commit/e71b663299bcdc4bc8e4ee02f38e982d33de5f51))
- **MessageBox:** add `accessibleName` default text ([#2208](https://github.com/SAP/ui5-webcomponents-react/issues/2208)) ([a79051a](https://github.com/SAP/ui5-webcomponents-react/commit/a79051a983fe428b5c79dbfbf11eed362dc3500c))
- **VariantManagement:** add features to comply with UX Guidelines ([#2163](https://github.com/SAP/ui5-webcomponents-react/issues/2163)) ([2b621f4](https://github.com/SAP/ui5-webcomponents-react/commit/2b621f46ac5bb6c9347771b001b47f2ea623a589))

### BREAKING CHANGES

Please visit our [**Migration Guide**](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#migrating-from-018x-to-0190) for update instructions.

- **VariantManagement**: `variantItems` has been removed. Please pass the `VariantItem` component for each variant instead.
- **VariantManagement**: `selectedKey` has been removed. To mark a variant as selected, please pass the `selected` prop to the corresponding `VariantItem` component.
- **VariantManagement**: Per default no "Cancel" button is displayed in the popover. If you want to add it again, you can set the `showCancelButton` prop to `true`.
- **VariantManagement**: Per default the "Save As" and "Manage" buttons are displayed in the popover. If you want to hide them, you can set the `hideSaveAs` and `hideManageVariants` props to `true`.
- **ObjectPage**: `onSelectedSectionChanged` event handler has been removed. Please use `onSelectedSectionChange` instead.
- **MessageBoxActions**: `ABORT`, `CANCEL`, `CLOSE`, `DELETE`, `IGNORE`, `NO`,`RETRY`,`YES` has been transformed to PascalCase notation.
- **MessageBoxTypes**: `CONFIRM`, `ERROR`, `INFORMATION`, `SUCCESS`, `WARNING`, `HIGHLIGHT` has been transformed to PascalCase notation.
- **TableSelectionBehavior:** `ROW`, `ROW_ONLY`, `ROW_SELECTOR` has been transformed to PascalCase notation.
- **TableSelectionMode:** `NONE`, `SINGLE_SELECT`, `MULTI_SELECT` has been transformed to PascalCase notation.
- **TableVisibleRowCountMode:** `FIXED`, `AUTO`, `INTERACTIVE` has been transformed to PascalCase notation.

## [0.18.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.9...v0.18.10) (2021-10-11)

### Bug Fixes

- **DynamicPageTitle:** wrap `header` and `subHeader` if not enough space is available ([#2171](https://github.com/SAP/ui5-webcomponents-react/issues/2171)) ([5e706f3](https://github.com/SAP/ui5-webcomponents-react/commit/5e706f343603233cb010a2c9157f3d458ec45a2e))
- **MessageBox:** correct spacing of header items in rtl mode ([#2190](https://github.com/SAP/ui5-webcomponents-react/issues/2190)) ([93f1ed1](https://github.com/SAP/ui5-webcomponents-react/commit/93f1ed186cc8ede4eff4e70921276d744cfe5ff8))
- **Toolbar:** add `max-width: 100%` to outer toolbar container ([#2207](https://github.com/SAP/ui5-webcomponents-react/issues/2207)) ([d9c63c8](https://github.com/SAP/ui5-webcomponents-react/commit/d9c63c8a7d5349bd2a6fb117727603882974f28d))

### Features

- **DynamicPageTitle:** if not enough space is available break words at hyphenation points ([#2177](https://github.com/SAP/ui5-webcomponents-react/issues/2177)) ([6655587](https://github.com/SAP/ui5-webcomponents-react/commit/6655587deaafc03edb5d36e27e8f2d027f54920c))
- **FilterBar & FlexBox & Form & Toolbar:** introduce `as` prop to change HTML tag dynamically ([#2203](https://github.com/SAP/ui5-webcomponents-react/issues/2203)) ([f75582a](https://github.com/SAP/ui5-webcomponents-react/commit/f75582a0eaa76bc26541cb1e66583b2b6846fb6b))

## [0.18.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.8...v0.18.9) (2021-09-21)

### Bug Fixes

- add `.js` file extension to all web components imports ([#2147](https://github.com/SAP/ui5-webcomponents-react/issues/2147)) ([2799eba](https://github.com/SAP/ui5-webcomponents-react/commit/2799eba322824f0995b48a31feadd4c43b889fed))
- **MessageItem:** use correct display name ([#2129](https://github.com/SAP/ui5-webcomponents-react/issues/2129)) ([4357fab](https://github.com/SAP/ui5-webcomponents-react/commit/4357fabd9dbc169d07b15caa9438bbff436e2186))

### Features

- **MessageBox:** expose all `Dialog` props, except `footer`, `headerText` and `onAfterClose` ([#2141](https://github.com/SAP/ui5-webcomponents-react/issues/2141)) ([7a29323](https://github.com/SAP/ui5-webcomponents-react/commit/7a293231a8e5061e600f910cb30dbddd4c40751e))

## [0.18.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.7...v0.18.8) (2021-09-15)

### Bug Fixes

- **Bar & ColumnChart:** always show labels if enough space is available ([#2100](https://github.com/SAP/ui5-webcomponents-react/issues/2100)) ([09b7e25](https://github.com/SAP/ui5-webcomponents-react/commit/09b7e250a642b5aed86cc1ded6007d7c6d951953))
- **charts:** show data labels with negative values ([#2079](https://github.com/SAP/ui5-webcomponents-react/issues/2079)) ([3d1c6c1](https://github.com/SAP/ui5-webcomponents-react/commit/3d1c6c1a844246b55455714d31d53fd037c3ca25))
- **DynamicPage:** footer always sticks to bottom of the page ([#2083](https://github.com/SAP/ui5-webcomponents-react/issues/2083)) ([4d291cb](https://github.com/SAP/ui5-webcomponents-react/commit/4d291cb0c20ad5a4bad04ad84cffa6967f0ad8e5))
- **MessageBox:** actions receive unique ids ([#2086](https://github.com/SAP/ui5-webcomponents-react/issues/2086)) ([a6980e1](https://github.com/SAP/ui5-webcomponents-react/commit/a6980e15975ea17c141f2d0971efb3e5fdf8e737))
- **ObjectPage:** consistently toggle header after scrolling ([#2122](https://github.com/SAP/ui5-webcomponents-react/issues/2122)) ([c116579](https://github.com/SAP/ui5-webcomponents-react/commit/c116579ef1b8b4136d47719b3250f9ba6601655d))
- **ObjectPage:** programatically remove sections without crashing ([#2085](https://github.com/SAP/ui5-webcomponents-react/issues/2085)) ([d043d6f](https://github.com/SAP/ui5-webcomponents-react/commit/d043d6f60429c7fd14943b6f9ae30bd32ad36651))

### Features

- allow disabling sapScrollBar ([#2078](https://github.com/SAP/ui5-webcomponents-react/issues/2078)) ([77908af](https://github.com/SAP/ui5-webcomponents-react/commit/77908af6daa997052bcf485ad4fe8d5f8ef1f8f6))
- export `useResponsiveContentPadding` hook in base package ([#2125](https://github.com/SAP/ui5-webcomponents-react/issues/2125)) ([503aecb](https://github.com/SAP/ui5-webcomponents-react/commit/503aecbcf4b1acd3e5871566a53fedff062f604a))

## [0.18.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.6...v0.18.7) (2021-09-01)

### Bug Fixes

- **AnalyticalTable:** programatically setting hidden columns triggers table resize ([#2066](https://github.com/SAP/ui5-webcomponents-react/issues/2066)) ([df5d1cd](https://github.com/SAP/ui5-webcomponents-react/commit/df5d1cd1a4e9701b2cd65b60e6190d4bc8432aa4))
- **AnalyticalTable:** remove filter without showing `undefined` ([#2074](https://github.com/SAP/ui5-webcomponents-react/issues/2074)) ([47ebd40](https://github.com/SAP/ui5-webcomponents-react/commit/47ebd40fe26becfdda29b00354ee6cee8eb7f96a))
- **CardHeader:** fire `onClick` only once ([#2075](https://github.com/SAP/ui5-webcomponents-react/issues/2075)) ([b07dc41](https://github.com/SAP/ui5-webcomponents-react/commit/b07dc413efab53cdf2d587c57554af39a36c5710))

## [0.18.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.5...v0.18.6) (2021-08-31)

### Bug Fixes

- **AnalyticalTable:** reset infinity-scroll offset with data change ([#2036](https://github.com/SAP/ui5-webcomponents-react/issues/2036)) ([b749f5c](https://github.com/SAP/ui5-webcomponents-react/commit/b749f5c21cfa2a87e4e89ad22f71c4ef2d978a76))
- **AnalyticalTable:** return correct value for `onRowSelected` with select-all checkbox ([#2035](https://github.com/SAP/ui5-webcomponents-react/issues/2035)) ([efb41a4](https://github.com/SAP/ui5-webcomponents-react/commit/efb41a463c9ef4345d42442c0723797676ffd680))
- **Form:** use `form` element instead of `div` ([#2051](https://github.com/SAP/ui5-webcomponents-react/issues/2051)) ([8d19e93](https://github.com/SAP/ui5-webcomponents-react/commit/8d19e934c24f2e5fbf75a751885b7cb8bb1a41f1))

### Features

- **ActionSheet/DynamicPage/ObjectPage:** add `a11yConfig` prop to customize a11y properties ([#2038](https://github.com/SAP/ui5-webcomponents-react/issues/2038)) ([49f5293](https://github.com/SAP/ui5-webcomponents-react/commit/49f5293e9e7ae56a4b720926e4fe89bf475bab82))
- **AnalyticalTable:** expose table instance via `tableInstance` prop ([#2064](https://github.com/SAP/ui5-webcomponents-react/issues/2064)) ([32fff10](https://github.com/SAP/ui5-webcomponents-react/commit/32fff10b825745c52bc11604446021cec53c6d01))
- **MessageView:** initial component implementation ([#2044](https://github.com/SAP/ui5-webcomponents-react/issues/2044)) ([dd8d2c8](https://github.com/SAP/ui5-webcomponents-react/commit/dd8d2c8c18f3283b42458911db649afb0df9c8da))

## [0.18.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.4...v0.18.5) (2021-08-24)

### Bug Fixes

- **ColumnChartWithTrend:** fix sync of charts ([#1999](https://github.com/SAP/ui5-webcomponents-react/issues/1999)) ([c36042d](https://github.com/SAP/ui5-webcomponents-react/commit/c36042deb126858aaa27d851c8c3fc2e9f8eea7a))
- **FilterBar:** update filter item refs on every dialog save ([#2025](https://github.com/SAP/ui5-webcomponents-react/issues/2025)) ([1a46272](https://github.com/SAP/ui5-webcomponents-react/commit/1a462723ab0f15d90723ecb58784032f3d3321e3))
- **ObjectPage:** fire `onSelectedSectionChanged` on every section change ([#1997](https://github.com/SAP/ui5-webcomponents-react/issues/1997)) ([993b52f](https://github.com/SAP/ui5-webcomponents-react/commit/993b52fb3a2eed347d2aa1ecf1d8b5b3a8dce43a))
- **ObjectPage:** respect scoping suffix for custom anchor tab ([#2011](https://github.com/SAP/ui5-webcomponents-react/issues/2011)) ([7123cac](https://github.com/SAP/ui5-webcomponents-react/commit/7123cac8d5376bf69af7051ac0221d2ede82f780))

### Features

- allow string values in all enums ([#2018](https://github.com/SAP/ui5-webcomponents-react/issues/2018)) ([927c0c2](https://github.com/SAP/ui5-webcomponents-react/commit/927c0c2316e5d506dc13cfc7e1f2997c31bc8499))
- **BulletChart:** initial component implementation ([#1960](https://github.com/SAP/ui5-webcomponents-react/issues/1960)) ([21be8ef](https://github.com/SAP/ui5-webcomponents-react/commit/21be8ef7e7d511515234f72870233dc532f0424f))
- **charts:** add `highlightColor` option for measures in `Bar`, `Column` and `ColumnWithTrend` ([#1911](https://github.com/SAP/ui5-webcomponents-react/issues/1911)) ([cf1e65d](https://github.com/SAP/ui5-webcomponents-react/commit/cf1e65db39fd4467d931c14a32fb06567f349092))
- **charts:** add `highlightColor` option for measures in `BulletChart` and `ComposedChart` ([#1994](https://github.com/SAP/ui5-webcomponents-react/issues/1994)) ([fcdbca5](https://github.com/SAP/ui5-webcomponents-react/commit/fcdbca54b78581d8db658b9dbe9516bbc4cb1b6d))
- **charts:** support formatter on secondary y axis for Bar, Column, Composed and Line Chart ([#1934](https://github.com/SAP/ui5-webcomponents-react/issues/1934)) ([a8e2e6f](https://github.com/SAP/ui5-webcomponents-react/commit/a8e2e6fb3b6492b3a44990965322273825bb3784))

### Deprecation

Deprecated values and props are going to be removed with version 0.19.0.

- **ObjectPage:** `onSelectedSectionChanged` is deprecated, please use `onSelectedSectionChange`
- **AnalyticalTable:** string values of `visibleRowCountMode`, `selectionBehavior` and `selectionMode` in all caps and snake_case are deprecated, please use the respective camelCase (first letter uppercase) values instead.
- **MessageBox:** string values of `type`, `actions`, `initialFocus`, and `emphasizedAction` in all caps and snake_case are deprecated, please use the respective camelCase (first letter uppercase) values instead.

## [0.18.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.3...v0.18.4) (2021-08-12)

### Bug Fixes

- **AnalyticalTable:** don't throw errors on empty table ([#1968](https://github.com/SAP/ui5-webcomponents-react/issues/1968)) ([c2400e0](https://github.com/SAP/ui5-webcomponents-react/commit/c2400e03778b6fca3165dcfc3916866230f210b8))
- **DynamicPageTitle:** only render actions toolbar if necessary ([#1969](https://github.com/SAP/ui5-webcomponents-react/issues/1969)) ([5c80a71](https://github.com/SAP/ui5-webcomponents-react/commit/5c80a7124bf69c4d38421a14c6e9463b4c212673))

## [0.18.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.2...v0.18.3) (2021-08-10)

### Bug Fixes

- **codemod:** correctly replace `image` -> `children` for `Avatar` ([#1959](https://github.com/SAP/ui5-webcomponents-react/issues/1959)) ([70975bb](https://github.com/SAP/ui5-webcomponents-react/commit/70975bbcda1335340204d84d4af31aed9b40786b))

## [0.18.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.1...v0.18.2) (2021-08-10)

### Bug Fixes

- add missing library exports of `BreadcrumbsDesign` and `BreadcrumbsItem` ([92fc225](https://github.com/SAP/ui5-webcomponents-react/commit/92fc2251de66b7e9be96307b9562e5908207ada6))

## [0.18.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.18.0...v0.18.1) (2021-08-10)

### Bug Fixes

- **FilterBar:** pass refs of FilterGroupItems children to rendered component ([#1954](https://github.com/SAP/ui5-webcomponents-react/issues/1954)) ([26b7e12](https://github.com/SAP/ui5-webcomponents-react/commit/26b7e121ceb59211e694641f5889cb749456733c))
- **withWebComponent:** don't append CommonProps to Component Props ([#1957](https://github.com/SAP/ui5-webcomponents-react/issues/1957)) ([9c26995](https://github.com/SAP/ui5-webcomponents-react/commit/9c26995b2d1d89871cded3fdfdae04bc5953fdd2))

# [0.18.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.17.3...v0.18.0) (2021-08-09)

### Bug Fixes

- **AnalyticalTable:** correctly indent root level tree rows ([#1948](https://github.com/SAP/ui5-webcomponents-react/issues/1948)) ([efbcfc1](https://github.com/SAP/ui5-webcomponents-react/commit/efbcfc15b86cc7504ba5d09cd0cec73ba6ad86e2))
- **AnalyticalTable:** unselect rows in single-select mode & correctly select rows with row-selector only behavior ([#1951](https://github.com/SAP/ui5-webcomponents-react/issues/1951)) ([ba7128c](https://github.com/SAP/ui5-webcomponents-react/commit/ba7128cf27dc3793ea1ca7071057ce07a4755c91))
- use squash merge for dependabot ([7287515](https://github.com/SAP/ui5-webcomponents-react/commit/7287515e57e3fceb5575a286a36ecdae8761589c))

### Code Refactoring

- add missing component PropTypes exports ([#1638](https://github.com/SAP/ui5-webcomponents-react/issues/1638)) ([5335e6a](https://github.com/SAP/ui5-webcomponents-react/commit/5335e6a048f81136e3b1e32e46d195cfbeee8bbc))
- **AnalyticalCardHeader:** rename props and don't render unnecessary elements ([#1601](https://github.com/SAP/ui5-webcomponents-react/issues/1601)) ([3ba2e7e](https://github.com/SAP/ui5-webcomponents-react/commit/3ba2e7e3bf3e2cb64ecef8a515870677be66d239))
- **AnalyticalTable:** rename `title` to `header` ([#1602](https://github.com/SAP/ui5-webcomponents-react/issues/1602)) ([4a537b7](https://github.com/SAP/ui5-webcomponents-react/commit/4a537b72c06f4006c06bba7c0cbd8253f07076ce))
- **DynamicPageTitle:** rename props ([#1912](https://github.com/SAP/ui5-webcomponents-react/issues/1912)) ([d4cefad](https://github.com/SAP/ui5-webcomponents-react/commit/d4cefade5f619a2643df22670bbd9bcff05ac6df))
- **Form & FormGroup:** rename `title` to `titleText` ([#1603](https://github.com/SAP/ui5-webcomponents-react/issues/1603)) ([862b815](https://github.com/SAP/ui5-webcomponents-react/commit/862b8156cd4f6425073126b4f70b8faae6e721de))
- **MessageBox:** rename `title` to `titleText` ([#1604](https://github.com/SAP/ui5-webcomponents-react/issues/1604)) ([f76930a](https://github.com/SAP/ui5-webcomponents-react/commit/f76930a95d1e20eed414c88a228c9dedbe67e4db))
- **ObjectPage:** rename `heading` to `titleText` ([#1910](https://github.com/SAP/ui5-webcomponents-react/issues/1910)) ([94f4521](https://github.com/SAP/ui5-webcomponents-react/commit/94f4521f9bb5da37c2e1f77c125138622a67c556))
- **VariantManagement:** rename `popupTitle` to `titleText` ([#1605](https://github.com/SAP/ui5-webcomponents-react/issues/1605)) ([57bd620](https://github.com/SAP/ui5-webcomponents-react/commit/57bd6200ca5d28585117c47e4fcc35ebf40d90c4))

### Features

- **AnalyticalTable:** add improved keyboard navigation ([#1864](https://github.com/SAP/ui5-webcomponents-react/issues/1864)) ([0f8bfdd](https://github.com/SAP/ui5-webcomponents-react/commit/0f8bfdda7d56c677d66b36f06c03025c701962b3))
- **AnalyticalTable:** add indeterminate state to select-all checkbox ([#1949](https://github.com/SAP/ui5-webcomponents-react/issues/1949)) ([a69c5e4](https://github.com/SAP/ui5-webcomponents-react/commit/a69c5e491b995525ac472031e6862356b84aec2d))
- update `@ui5/webcomponents` to 1.0.0-rc.15 ([#1873](https://github.com/SAP/ui5-webcomponents-react/issues/1873)) ([db2145f](https://github.com/SAP/ui5-webcomponents-react/commit/db2145f5057fecbd698634a78c60f42769d20f2d))

### BREAKING CHANGES

#### Updated `@ui5/webcomponents` to 1.0.0-rc.15.

This update includes several **breaking changes** that are reflected in this library as well. Please visit our [**Migration Guide**](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#migrating-from-017x-to-0180) for update instructions.

- **AnalyticalCard (TypeScript only)**: `AnalyticalCardTypes` has been renamed to `AnalyticalCardPropTypes`
- **AnalyticalTable (TypeScript only)**: `TableProps` has been renamed to `AnalyticalTablePropTypes`
- **DynamicPage (TypeScript only)**: `DynamicPageProps` has been renamed to `DynamicPagePropTypes`
- **DynamicPageHeader (TypeScript only)**: `DynamicPageHeaderProps` has been renamed to `DynamicPageHeaderPropTypes`
- **DynamicPageTitle (TypeScript only)**: `DynamicPageTitleProps` has been renamed to `DynamicPageTitlePropTypes`
- **FormGroup (TypeScript only)**: `FormGroupProps` has been renamed to `FormGroupPropTypes`
- **FormItem (TypeScript only)**: `FormItemProps` has been renamed to `FormItemPropTypes`
- **Loader (TypeScript only)**: `LoaderProps` has been renamed to `LoaderPropTypes`
- **Text (TypeScript only)**: `TextProps` has been renamed to `TextPropTypes`
- **ThemeProvider (TypeScript only)**: `ThemeProviderProps` has been renamed to `ThemeProviderPropTypes`
- **Toolbar (TypeScript only)**: `ToolbarProptypes` has been renamed to `ToolbarPropTypes`
- **ActionSheet**: the ActionSheet can now be opened with `actionSheetRef.current.showAt(opener)` instead of `actionSheetRef.current.open(opener)`
- **Avatar**: `img` prop is replaced by `children` with a `<img>` component
- **Breadcrumbs**: the `Breadcrumbs` component has been replaced with the official UI5 Web Component. Please visit our migration guide for details.
- **Card**: props `headerInteractive`, `status`, `subtitleText`, `titleText`, `action`, `avatar` and `onHeaderClick` have been removed. Please use the `CardHeader` component instead and pass it to the new `header` prop of the Card.
- **Carousel**: `selectedIndex`, `infiniteScrollOffset`, and `onLoadMore` are removed, use the `onNavigate` event to load more items.
- **ComboBox**: The `filterValue` property has been removed. The `value` property should be used as now it represents the "live" value of the component.
- **Dialog**: Dialogs can now be opened with `dialogRef.current.show()` instead of `dialogRef.current.open()`
- **DurationPicker**: Component was made private by the UI5 Web Components, hence it's removed here as well.
- **MessageStrip**: rename `MessageStripType` enum to `MessageStripDesign`. The prop `type` has been renamed to `design` and now accepts `MessageStripDesign` values.
- **RadioButton**: the `onSelect` event has been renamed to `onChange`. Read the state of the Radio Button in the event handler with `event.target.checked`.
- **ResponsivePopover**: the responsive popover can now be opened with `popoverRef.current.showAt(opener)` instead of `popoverRef.current.open(opener)`
- **Popover**: the popover can now be opened with `popoverRef.current.showAt(opener)` instead of `popoverRef.current.openBy(opener)`
- **SegmentedButton**: The SegmentedButton no longer accepts `ToggleButton` as children but expects `SegmentedButtonItem`.
- **SuggestionItem**: prop `group` is not longer supported. Please use the `SuggestionItemGroup` component instead for creating groups.
- **Wizard**: the `onSelectionChange` event has been renamed to `onStepChange`. In addition, the event param `selectedStep` has been renamed to `step` and `previouslySelectedStep` has been renamed to `previousStep`.
- **deleted enums**: `AvatarFitType` (Avatar component doesn't support the fitType prop anymore), `TabContainerHeaderMode`, `TabDesignMode`, `SearchFunctions` (all three unused), `TabContainerTabsPlacement` (TabContainer component doesn't accept the placement prop anymore)
- **renamed enums**: `AvatarBackgroundColor` to `AvatarColorScheme`, `PlacementType` to `PopoverPlacementType`, `PanelAccessibleRoles` to `PanelAccessibleRole`, `ListItemTypes` to `ListItemType`
- **PageBackgroundDesign**: `PageBackgroundDesign.Standard` has been removed. Please use `PageBackgroundDesign.Solid` instead.
- **DynamicPageTitle:** `heading` has been renamed to `header`, `subheading` to `subHeader` and `showSubheadingRight` to `showSubHeaderRight`
- **ObjectPage:** **ObjectPageSection**: `heading` has been renamed to `titleText` and `headingUppercase` to `titleTextUppercase`
- **ObjectPage:** **ObjectPageSubSection**: `heading` has been renamed to `titleText`
- **AnalyticalCardHeader:** `title` has been renamed to `titleText`, `subTitle` to `subtitleText` and `onHeaderPress` to `onClick`.
- **VariantManagement:** `popupTitle` has been renamed to `titleText`
- **MessageBox:** `title` has been renamed to `titleText`
- **Form & FormGroup:** **Form:** `title` has been renamed to `titleText`
- **Form & FormGroup:** **FormGroup:** `title` has been renamed to `titleText`
- **AnalyticalTable:** `title` has been renamed to `header`

## [0.17.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.17.2...v0.17.3) (2021-08-02)

### Bug Fixes

- improve setupMatchMedia for cra-templates and docs ([#1909](https://github.com/SAP/ui5-webcomponents-react/issues/1909)) ([d8ef7a1](https://github.com/SAP/ui5-webcomponents-react/commit/d8ef7a130d09229f2c5f9b4d3fa3ee67f0e6e256))

### Features

- **ColumnChartWithTrend:** initial component implementation ([#1824](https://github.com/SAP/ui5-webcomponents-react/issues/1824)) ([f8f069a](https://github.com/SAP/ui5-webcomponents-react/commit/f8f069a11621158490420d2b10de554e918f1a12))
- **RadialChart:** add noAnimation prop ([#1877](https://github.com/SAP/ui5-webcomponents-react/issues/1877)) ([e3cd4c8](https://github.com/SAP/ui5-webcomponents-react/commit/e3cd4c8c388f21e5ba57de4ff3b88c96ca44d635))

## [0.17.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.17.1...v0.17.2) (2021-07-23)

### Bug Fixes

- **DynamicPageTitle:** correct responsive positioning of nav and global actions ([#1842](https://github.com/SAP/ui5-webcomponents-react/issues/1842)) ([df9749d](https://github.com/SAP/ui5-webcomponents-react/commit/df9749d78eaa6945023c543ac71ff745e4bcb9f2))
- **ObjectPage:** make sure TabBar is always on top of content ([#1857](https://github.com/SAP/ui5-webcomponents-react/issues/1857)) ([da61ab6](https://github.com/SAP/ui5-webcomponents-react/commit/da61ab6873ec7715267f1efba00602ef4b9514eb))
- **TabContainer:** apply ObjectPage styles only in ObjectPage ([#1861](https://github.com/SAP/ui5-webcomponents-react/issues/1861)) ([718eb72](https://github.com/SAP/ui5-webcomponents-react/commit/718eb72965e6482467ea1406382b6ebef844264e))
- **Toolbar:** always align items in the center ([#1847](https://github.com/SAP/ui5-webcomponents-react/issues/1847)) ([535051e](https://github.com/SAP/ui5-webcomponents-react/commit/535051e4aab6a2a18f6f53ad7c37211d7f44789a))

## [0.17.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.17.0...v0.17.1) (2021-07-16)

### Bug Fixes

- **cra-templates:** always use latest version of ui5-webcomponents-react ([#1829](https://github.com/SAP/ui5-webcomponents-react/issues/1829)) ([623dc51](https://github.com/SAP/ui5-webcomponents-react/commit/623dc51117551f28d1d4418722a27883effcea47))
- **DynamicPage:** fix memory leaks when unmounted during resize ([#1838](https://github.com/SAP/ui5-webcomponents-react/issues/1838)) ([9bc3722](https://github.com/SAP/ui5-webcomponents-react/commit/9bc37220edb40f2c4e33415bc11b017b741b8e00)), closes [#1835](https://github.com/SAP/ui5-webcomponents-react/issues/1835)
- **Form:** don't crash when range detection returns null ([#1837](https://github.com/SAP/ui5-webcomponents-react/issues/1837)) ([f75a5fa](https://github.com/SAP/ui5-webcomponents-react/commit/f75a5face15487f460dfac9da3e7bf291013c08d)), closes [#1835](https://github.com/SAP/ui5-webcomponents-react/issues/1835)
- **useResponsiveContentPadding:** don't crash in Safari ([#1836](https://github.com/SAP/ui5-webcomponents-react/issues/1836)) ([ea4cd60](https://github.com/SAP/ui5-webcomponents-react/commit/ea4cd60491eb1ba05afbfccf0409f8b0a1085c0c)), closes [#1835](https://github.com/SAP/ui5-webcomponents-react/issues/1835)

### Features

- **ObjectPage & DynamicPage:** add data attributes to elements ([#1831](https://github.com/SAP/ui5-webcomponents-react/issues/1831)) ([4983526](https://github.com/SAP/ui5-webcomponents-react/commit/49835267c8572bb00ee8d3a46bc2276650d97eea))

# [0.17.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.6...v0.17.0) (2021-07-15)

### Bug Fixes

- **ObjectPage & DynamicPage:** active elements in `headerTitle` are always interactive and won't expand the header ([#1825](https://github.com/SAP/ui5-webcomponents-react/issues/1825)) ([1e1650d](https://github.com/SAP/ui5-webcomponents-react/commit/1e1650d71ca2cddb6d0c00da783aecebf5cbcd68))

### chore

- **Device:** document public methods and cleanup ([#1819](https://github.com/SAP/ui5-webcomponents-react/issues/1819)) ([dd8ad28](https://github.com/SAP/ui5-webcomponents-react/commit/dd8ad28aeaf11aaaf89ae5d47d6f9d0adbc40cbe)), closes [#1791](https://github.com/SAP/ui5-webcomponents-react/issues/1791)

### Features

- **charts:** add `tooltipConfig` prop to allow control of Tooltip ([#1808](https://github.com/SAP/ui5-webcomponents-react/issues/1808)) ([e063144](https://github.com/SAP/ui5-webcomponents-react/commit/e0631448e15fd793d6cc0109f06f96d96b490290))
- **ObjectPage & DynamicPage:** consolidates API of ObjectPage and DynamicPage (#1782)([58719ce](https://github.com/SAP/ui5-webcomponents-react/commit/58719ce8e69fe99e777f423ea611e2897f20f379))

### BREAKING CHANGES

**[Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page)**

- **Device:** all `supportXYZ` methods have been removed. Please consult our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#device-cleanup) for alternatives
- **Device:** the Media Range Set part of the Device has been cleaned up in order to support only one default range set. More details can be found in our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#media-range-sets)
- **Device:** **useViewportRange**: the `rangeSetName` parameter has been removed without replacement
- **Device:** `Logger` and `LogLevel` have been removed. Check our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#removal-of-logger-and-loglevel) for details
- **DynamicPageHeader:** `children` are no longer displayed as `flex` items to support other display types like `grid`. To align children you now need to add the container (like `FlexBox`) and CSS yourself.
- **DynamicPageTitle:** `subHeading` has been renamed. Please use `subheading` instead.
- **DynamicPage:** `header` has been renamed. Please use `headerContent` instead.
- **DynamicPage:** `title` has been renamed. Please use `headerTitle` instead.
- **ObjectPage:** `title` has been renamed to `headerTitle` and is now defining the upper, static, title section of the `ObjectPage`. It expects to receive the `DynamicPageTitle` component.
- **ObjectPage:** `noHeader` has been removed. It is now sufficient not to set `headerTitle` and `header` to achieve the same behavior.
- **ObjectPage:** `title`, `subTitle`, `headerActions`, `breadcrumbs` and `keyInfos` should now be passed to the corresponding `DynamicPageTitle` props.
- **ObjectPageSection:** `title` and `titleUppercase` has been renamed. Please use `heading` and `headingUppercase` instead.
- **ObjectPageSubSection:** `title` has been renamed. Please use `heading` instead.
- **getScrollBarWidth** has been removed.

## [0.16.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.5...v0.16.6) (2021-07-06)

### Bug Fixes

- **ActionSheet:** consistent button padding and placement on phones ([#1794](https://github.com/SAP/ui5-webcomponents-react/issues/1794)) ([8a008c3](https://github.com/SAP/ui5-webcomponents-react/commit/8a008c3fac295f6d636a79dc9881fdcb6ca2050a)), closes [#1748](https://github.com/SAP/ui5-webcomponents-react/issues/1748)
- **charts:** use correct peer dependencies for 0.16.x ([#1795](https://github.com/SAP/ui5-webcomponents-react/issues/1795)) ([d40ebab](https://github.com/SAP/ui5-webcomponents-react/commit/d40ebaba0306b75f24ecdeb59e730d8447ce5653))

### Features

- **ObjectStatus:** support IndicationColor, active and inverted state ([#1790](https://github.com/SAP/ui5-webcomponents-react/issues/1790)) ([9ca075a](https://github.com/SAP/ui5-webcomponents-react/commit/9ca075a46c3174dac292cee60db3b3d015f019be))

## [0.16.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.4...v0.16.5) (2021-06-30)

### Bug Fixes

- **AnalyticalTable:** Only use `offsetTop` if parent is relative positioned ([#1768](https://github.com/SAP/ui5-webcomponents-react/issues/1768)) ([2042831](https://github.com/SAP/ui5-webcomponents-react/commit/2042831de9d89d258d1372970433ba5bb3646eda))

### Features

- **DynamicPage:** add `footer` prop ([#1737](https://github.com/SAP/ui5-webcomponents-react/issues/1737)) ([5e2ba47](https://github.com/SAP/ui5-webcomponents-react/commit/5e2ba473cca146e0cfc9f63a0f82bfdbc620db6d))

## [0.16.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.3...v0.16.4) (2021-06-14)

### Bug Fixes

- **DynamicPage:** only render necessary elements ([#1726](https://github.com/SAP/ui5-webcomponents-react/issues/1726)) ([6c2863e](https://github.com/SAP/ui5-webcomponents-react/commit/6c2863ec7f65eb0c98c1c284680c31fcf1518490))
- **FilterBar & AnalyticalTable:** display subcomponents and filter items correctly in Safari ([#1723](https://github.com/SAP/ui5-webcomponents-react/issues/1723)) ([929833d](https://github.com/SAP/ui5-webcomponents-react/commit/929833df5ad86404a481418ab74e3c9c0ca9eaa2))
- refactor `sapUiResponsiveContentPadding` and add respective padding to ObjectPage content ([#1699](https://github.com/SAP/ui5-webcomponents-react/issues/1699)) ([5fe3c18](https://github.com/SAP/ui5-webcomponents-react/commit/5fe3c1819f230512c43d91c7876ed82b592b705f))
- **AnalyticalTable:** Prevent crash when filtering with subcomponents and no row is returned ([#1697](https://github.com/SAP/ui5-webcomponents-react/issues/1697)) ([a8989d5](https://github.com/SAP/ui5-webcomponents-react/commit/a8989d50948aec73df230ba0d16cac184f177d3c))

### Features

- **PieChart & DonutChart:** add callback to `hideDataLabel` measure prop ([#1722](https://github.com/SAP/ui5-webcomponents-react/issues/1722)) ([a4f2dec](https://github.com/SAP/ui5-webcomponents-react/commit/a4f2dec35e8365be9b82d082ac7b7647f4a08c74))
- **ResponsiveGridLayout:** initial component implementation ([#1698](https://github.com/SAP/ui5-webcomponents-react/issues/1698)) ([866290b](https://github.com/SAP/ui5-webcomponents-react/commit/866290bb75847625559a485051fda64e7ad676a5))

## [0.16.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.2...v0.16.3) (2021-06-07)

### Bug Fixes

- **FilterBar:** add spacing between buttons when no toolbar is displayed ([#1668](https://github.com/SAP/ui5-webcomponents-react/issues/1668)) ([eaf7e5f](https://github.com/SAP/ui5-webcomponents-react/commit/eaf7e5f80f46016bf9347059c2b2840bd07cdf70))
- **Form:** align CheckBox, RadioButton and Switch correctly ([#1689](https://github.com/SAP/ui5-webcomponents-react/issues/1689)) ([573afca](https://github.com/SAP/ui5-webcomponents-react/commit/573afcaa1d77d836847a507145bc7d5cfe50a40d))

### Features

- **MessageBox:** add `emphasizedAction` prop ([#1690](https://github.com/SAP/ui5-webcomponents-react/issues/1690)) ([40bd570](https://github.com/SAP/ui5-webcomponents-react/commit/40bd570d309bfb40438f5997378df67e90a00910))

## [0.16.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.1...v0.16.2) (2021-06-02)

### Bug Fixes

- **AnalyticalTable:** fix focus and keyboard navigation for cells and subcomponents ([#1591](https://github.com/SAP/ui5-webcomponents-react/issues/1591)) ([11e1497](https://github.com/SAP/ui5-webcomponents-react/commit/11e14972f7e23d1482301ba1e87da49247d1bc40))
- **cra-template-seed:** fix husky pre push hook ([#1635](https://github.com/SAP/ui5-webcomponents-react/issues/1635)) ([b8af6ea](https://github.com/SAP/ui5-webcomponents-react/commit/b8af6eabb21c131966118f258b66a74b20f013fd))
- **cra-templates:** use latest UI5 Web Components for React version ([#1666](https://github.com/SAP/ui5-webcomponents-react/issues/1666)) ([d0dc44e](https://github.com/SAP/ui5-webcomponents-react/commit/d0dc44e52cf4bb394e2d95992f8d86503b922d12))
- **enrichEventWithDetails:** add generic return type ([#1637](https://github.com/SAP/ui5-webcomponents-react/issues/1637)) ([48b4f64](https://github.com/SAP/ui5-webcomponents-react/commit/48b4f644aa2621c8c13a97a0de4106cf6d54effb))
- **Form:** prevent crash when a single item within an array is passed as child ([#1624](https://github.com/SAP/ui5-webcomponents-react/issues/1624)) ([874d3a8](https://github.com/SAP/ui5-webcomponents-react/commit/874d3a8e48f59440a86c798fc36d73ac0e2bad32))

### Features

- **AnalyticalTable:** allow inline styles for rows in custom hooks ([#1664](https://github.com/SAP/ui5-webcomponents-react/issues/1664)) ([1c45689](https://github.com/SAP/ui5-webcomponents-react/commit/1c45689d59901bfc302930cf1c1d946d6cff7514))
- **FilterBar:** FilterBar without Toolbar spreads filters to available width ([#1660](https://github.com/SAP/ui5-webcomponents-react/issues/1660)) ([bdb6173](https://github.com/SAP/ui5-webcomponents-react/commit/bdb617316465855a3ae2626ddd64b624b601b2b9))
- **MessageBox:** add `initialFocus`, `onBeforeOpen` and `onAfterOpen` props ([#1661](https://github.com/SAP/ui5-webcomponents-react/issues/1661)) ([a4f974f](https://github.com/SAP/ui5-webcomponents-react/commit/a4f974fef78aff494a71c373f9b72440b6ee7568))

## [0.16.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.16.0...v0.16.1) (2021-05-12)

### Bug Fixes

- add and export all available interfaces for public methods ([#1577](https://github.com/SAP/ui5-webcomponents-react/issues/1577)) ([2c866c7](https://github.com/SAP/ui5-webcomponents-react/commit/2c866c7e0fe9dc4e5bd4ce5a0e3d7eaccef857e7))

# [0.16.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.4...v0.16.0) (2021-05-11)

### Bug Fixes

- **Charts:** export `ComposedChart` and `ComposedChartPlaceholder` in main entry point ([#1556](https://github.com/SAP/ui5-webcomponents-react/issues/1556)) ([2ab8e4c](https://github.com/SAP/ui5-webcomponents-react/commit/2ab8e4c03b992c36b295c2ec32a3110983c8216b))
- **FilterBar:** if `useToolbar` is set to `false`, hide the entire toolbar and display buttons next to the filter items ([#1540](https://github.com/SAP/ui5-webcomponents-react/issues/1540)) ([c3e96ff](https://github.com/SAP/ui5-webcomponents-react/commit/c3e96ff54b2ffc1d28ecf7c50a1f398ae77ab318))
- **FilterBar:** only display toolbar separator & overflow button when necessary ([#1570](https://github.com/SAP/ui5-webcomponents-react/issues/1570)) ([518d4c4](https://github.com/SAP/ui5-webcomponents-react/commit/518d4c46897df1f295be5f6a6bbe8b146610fc0f))
- improve typings for event handlers ([#1545](https://github.com/SAP/ui5-webcomponents-react/issues/1545)) ([52e5e7a](https://github.com/SAP/ui5-webcomponents-react/commit/52e5e7a1d84f56517578369cf01fe5c4663a0fe6))

### BREAKING CHANGES

- **Charts:** `ComposedChartPlaceholder`: The import path has changed. You can now import the placeholder from `@ui5/webcomponents-react-charts/dist/ComposedChartPlaceholder` or directly from `@ui5/webcomponents-react-charts`.
- **FilterBar:** If useToolbar is set to false, now the entire toolbar above the filter items is hidden. The search input, variants, and the "Show/Hide FilterBar" button is not available in this mode. The rest of the buttons are displayed next to the filter items.

The **Migration Guide** can be found [here](https://sap.github.io/ui5-webcomponents-react/?path=/story/migration-guide--page#migrating-from-015x-to-0160).

## [0.15.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.3...v0.15.4) (2021-04-28)

### Features

- **ActionSheet:** improve a11y support & refactor implementation to comply to UX guidelines ([#1519](https://github.com/SAP/ui5-webcomponents-react/issues/1519)) ([2178b79](https://github.com/SAP/ui5-webcomponents-react/commit/2178b79095da4e4f9344809647693eb0262a1bb4))
- **AnalyticalTable:** add `globalFilterValue` prop to allow searching all columns ([#1512](https://github.com/SAP/ui5-webcomponents-react/issues/1512)) ([e0aea00](https://github.com/SAP/ui5-webcomponents-react/commit/e0aea00add72984c09cd68438372b61521f58cc3))
- **Charts:** Replaced the plain HTML onClick mouse event with an onClick event that returns the internal target of the charts svg container, including values and payload when available ([#1526](https://github.com/SAP/ui5-webcomponents-react/issues/1526)) ([17a1e17](https://github.com/SAP/ui5-webcomponents-react/commit/17a1e1797daf217b33f99937fcf7e383f07eb31c))

## [0.15.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.2...v0.15.3) (2021-04-14)

### Bug Fixes

- **Breadcrumbs:** add missing aria labels & allow navigation with arrow keys ([#1503](https://github.com/SAP/ui5-webcomponents-react/issues/1503)) ([65c3bbd](https://github.com/SAP/ui5-webcomponents-react/commit/65c3bbd58d0bd017156ee74ccc8b001b0ad5fae5))
- **MessageBox:** screen reader reads out whole content of MessageBox when opened ([#1504](https://github.com/SAP/ui5-webcomponents-react/issues/1504)) ([0145978](https://github.com/SAP/ui5-webcomponents-react/commit/0145978b1914afd2291dff7eeb7f804cd967a70e))

## [0.15.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.1...v0.15.2) (2021-04-01)

### Features

- update @ui5/webcomponents to 1.0.0-rc.14 ([#1478](https://github.com/SAP/ui5-webcomponents-react/issues/1478)) ([bea31ee](https://github.com/SAP/ui5-webcomponents-react/commit/bea31ee9d2f200a80738410dabb9eae6f85b35bd))

## [0.15.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.15.0...v0.15.1) (2021-03-30)

### Bug Fixes

- re-add main fields to package.json for jest tests ([#1471](https://github.com/SAP/ui5-webcomponents-react/issues/1471)) ([5941d8c](https://github.com/SAP/ui5-webcomponents-react/commit/5941d8cc4dfa11887699a73de1d5bb3b14601f62))

# [0.15.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.5...v0.15.0) (2021-03-30)

Please also check the [release notes of UI5 Web Components](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.13).

### Bug Fixes

- **AnalyticalTable:** improve sub-component size calculation & performance ([#1461](https://github.com/SAP/ui5-webcomponents-react/issues/1461)) ([c87a2e4](https://github.com/SAP/ui5-webcomponents-react/commit/c87a2e4e30bf1fbd9d26aa45f486b3718bf5ed59))
- **MessageBox:** a11y - use correct title level ([#1454](https://github.com/SAP/ui5-webcomponents-react/issues/1454)) ([7a84961](https://github.com/SAP/ui5-webcomponents-react/commit/7a8496128799461da623ec5f9c560bec13ce0b98))

### chore

- don't publish lib folder anymore ([#1469](https://github.com/SAP/ui5-webcomponents-react/issues/1469)) ([616e167](https://github.com/SAP/ui5-webcomponents-react/commit/616e1679935e7198a64329d286e0104ecd448bdc))
- remove commonjs build ([#1450](https://github.com/SAP/ui5-webcomponents-react/issues/1450)) ([8374ae6](https://github.com/SAP/ui5-webcomponents-react/commit/8374ae6ed28515bb517f3ac641a1b7e8aa2fd01d))

### Features

- update ui5 web components to 1.0.0-rc.13 ([#1462](https://github.com/SAP/ui5-webcomponents-react/issues/1462)) ([9a0b132](https://github.com/SAP/ui5-webcomponents-react/commit/9a0b132f97f734c69e64fdecb2778832dd7479d8))

### BREAKING CHANGES

- `@ui5/webcomponents-react`, `@ui5/webcomponents-react-base` and `@ui5/webcomponents-react-charts` are no longer publishing the `lib` folder. Please use `dist` instead. More details can be found in our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#replaced-lib-folder-with-dist-folder).
- `@ui5/webcomponents-react`, `@ui5/webcomponents-react-base` and `@ui5/webcomponents-react-charts` are no longer providing a `CommonJS` build. As the underlying ui5 web components never published a `cjs` build, this change shouldn't affect you. In case you are facing any issues feel free to reach out to us.
- **Device**: `isEdge`, `isChrome`, `isFF`, `isMobile`, `isAndroid`, `getOS`, `getSystem`, `getBrowser` have been removed without replacement
- **Device**: `supportTouch` has been renamed to `supportsTouch`
- **Input**: The `onSubmit` event is now removed. The `onSubmit` functionality must be added with a custom code - listen for the standard `onKeyDown` event and check if `ENTER` is pressed to submit a form, containing the input component.
- **List**: The `infiniteScroll` prop has been removed, use `growing={ListGrowingMode.Scroll}` instead

## [0.14.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.4...v0.14.5) (2021-03-17)

### Bug Fixes

- **AnalyticalTable:** add totalRowCount to event.detail param of onLoadMore event, fix rowCount number for expandable rows ([#1405](https://github.com/SAP/ui5-webcomponents-react/issues/1405)) ([2dc3c76](https://github.com/SAP/ui5-webcomponents-react/commit/2dc3c76780fb3f601cd564ff4c7a723b5bd5564e))
- **MessageBox:** allow duplicate action names ([#1415](https://github.com/SAP/ui5-webcomponents-react/issues/1415)) ([03bcc06](https://github.com/SAP/ui5-webcomponents-react/commit/03bcc06084c9286cf45ac78f2d0bd42744504a7c))
- **Toolbar:** prevent event propagation of the overflow button ([#1416](https://github.com/SAP/ui5-webcomponents-react/issues/1416)) ([f421e5b](https://github.com/SAP/ui5-webcomponents-react/commit/f421e5b8f19f5468cc8303057f7b6508ed335b37))

### Features

- **AnalyticalTable:** add offset-top support to visibleRowCountMode "Auto" ([#1402](https://github.com/SAP/ui5-webcomponents-react/issues/1402)) ([30bfa7f](https://github.com/SAP/ui5-webcomponents-react/commit/30bfa7fcfe08ebcf134cd92abfeb52468de038bd))

## [0.14.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.3...v0.14.4) (2021-03-09)

### Bug Fixes

- **ComboBox:** Add missing onSelectionChange event prop ([#1399](https://github.com/SAP/ui5-webcomponents-react/issues/1399)) ([23da8ac](https://github.com/SAP/ui5-webcomponents-react/commit/23da8ac3607206f2a391c780e134dc79861182ed))
- **Form:** prevent flickering when used within dialog ([#1390](https://github.com/SAP/ui5-webcomponents-react/issues/1390)) ([4501b89](https://github.com/SAP/ui5-webcomponents-react/commit/4501b89fb17432cc50186165b3341853e6ce9790))

## [0.14.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.2...v0.14.3) (2021-03-03)

### Bug Fixes

- **cra-template-seed:** add InputElementsFormSupport import ([#1382](https://github.com/SAP/ui5-webcomponents-react/issues/1382)) ([a7b82c4](https://github.com/SAP/ui5-webcomponents-react/commit/a7b82c4ca7d04fe0b557dac9a7bfa4f41bcb7f75))

### Features

- **AnalyticalTable:** add option to always show subcomponents below a row, fix race condition in subcomponent renderer ([#1377](https://github.com/SAP/ui5-webcomponents-react/issues/1377)) ([07a9ace](https://github.com/SAP/ui5-webcomponents-react/commit/07a9aceb8b44ded8dcf53b4a6fca8524cc7100a1))

## [0.14.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.1...v0.14.2) (2021-02-24)

### Bug Fixes

- **cra-template:** add asset imports ([#1322](https://github.com/SAP/ui5-webcomponents-react/issues/1322)) ([0dc453f](https://github.com/SAP/ui5-webcomponents-react/commit/0dc453f12d6df0f2c39f77bffea1838f69cfb59c))

### Features

- **AnalyticalTable:** select rows by pressing the "Enter" key ([#1321](https://github.com/SAP/ui5-webcomponents-react/issues/1321)) ([b150663](https://github.com/SAP/ui5-webcomponents-react/commit/b1506630c8acc1498bc5a7702e364f0865083ae1)), closes [#1306](https://github.com/SAP/ui5-webcomponents-react/issues/1306)
- **ColorPicker:** add ColorPicker component ([#1343](https://github.com/SAP/ui5-webcomponents-react/issues/1343)) ([fce270d](https://github.com/SAP/ui5-webcomponents-react/commit/fce270dcbf04712860ab54d8cdb68b1b76be4212))

## [0.14.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.0...v0.14.1) (2021-02-19)

### Bug Fixes

- **ObjectPage:** prevent crash on re-mount ([#1317](https://github.com/SAP/ui5-webcomponents-react/issues/1317)) ([e0dfc5b](https://github.com/SAP/ui5-webcomponents-react/commit/e0dfc5b28a70df47ccbe9e288626c294bad19385))
- **Web Components:** don't crash when single react element is used inside a slot fragment ([#1316](https://github.com/SAP/ui5-webcomponents-react/issues/1316)) ([693b1b3](https://github.com/SAP/ui5-webcomponents-react/commit/693b1b30dbdf40dc72b1cd9e148eac5c8ab1d734))

# [0.14.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.14.0-rc.0...v0.14.0) (2021-02-18)

### Stable Release of [v0.14.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/releases/tag/v0.14.0-rc.0)

### Bug Fixes

- fix tests in both create-react-app templates ([c7df584](https://github.com/SAP/ui5-webcomponents-react/commit/c7df58477b629e328c12097b4c2f535569be5363))

# [0.14.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.9...v0.14.0-rc.0) (2021-02-18)

### Bug Fixes

- **Form:** Adjust spacing and alignment to comply with fiori guidelines ([#1299](https://github.com/SAP/ui5-webcomponents-react/issues/1299)) ([cae9c34](https://github.com/SAP/ui5-webcomponents-react/commit/cae9c3404f5c68baa2f3575cf0cbf7a2652f5200))
- **Form:** correct alignment of FormItems ([#1305](https://github.com/SAP/ui5-webcomponents-react/issues/1305)) ([0fb6f4c](https://github.com/SAP/ui5-webcomponents-react/commit/0fb6f4cb119d34c7edc9e316c85a2707d74ba943))
- **ObjectPage:** prevent crash on re-mounting the component ([#1304](https://github.com/SAP/ui5-webcomponents-react/issues/1304)) ([49dda59](https://github.com/SAP/ui5-webcomponents-react/commit/49dda590d50bbb06228e7b5abcb5da95dd92eafa)), closes [#1300](https://github.com/SAP/ui5-webcomponents-react/issues/1300)
- improve IE11 support for ObjectPage, DynamicPage and Grid ([#1285](https://github.com/SAP/ui5-webcomponents-react/issues/1285)) ([6b5c536](https://github.com/SAP/ui5-webcomponents-react/commit/6b5c5366028060aac7d2c43a27afa72708fbf85e))

### chore

- delete deprecated useI18nText hook ([#1303](https://github.com/SAP/ui5-webcomponents-react/issues/1303)) ([0ab483f](https://github.com/SAP/ui5-webcomponents-react/commit/0ab483ff6bc5a815a685b841679906ea6467dcb0))
- deprecate Internet Explorer 11 ([#1252](https://github.com/SAP/ui5-webcomponents-react/issues/1252)) ([0e02486](https://github.com/SAP/ui5-webcomponents-react/commit/0e024861f058f616985ad80f4e508a1eb6030799))
- drop support for Edge Legacy ([#1196](https://github.com/SAP/ui5-webcomponents-react/issues/1196)) ([8aff48c](https://github.com/SAP/ui5-webcomponents-react/commit/8aff48c1770af197e6c0733f0547b9b781b46bac))
- release npm lib files as ES6 ([#1284](https://github.com/SAP/ui5-webcomponents-react/issues/1284)) ([44fd091](https://github.com/SAP/ui5-webcomponents-react/commit/44fd09104eb6c3b23eb91d81d5f900d3943eb501))

### Code Refactoring

- **cra-template-seed:** simplify coding and development setup, update dependencies ([#1275](https://github.com/SAP/ui5-webcomponents-react/issues/1275)) ([18dc286](https://github.com/SAP/ui5-webcomponents-react/commit/18dc28621d05e772212581711df7d95b22b10a66))
- **ThemeProvider:** flatten ThemeProviderContext ([#1147](https://github.com/SAP/ui5-webcomponents-react/issues/1147)) ([4a2e68f](https://github.com/SAP/ui5-webcomponents-react/commit/4a2e68f0a8e663e5bd6c19a1025fba042bc2ac18))

### Features

- publish wrapper only components ([#1250](https://github.com/SAP/ui5-webcomponents-react/issues/1250)) ([b8d28c7](https://github.com/SAP/ui5-webcomponents-react/commit/b8d28c7eecdc401d281899f3be92bea77784302c))
- update wrapper components to @ui5/web components 1.0.0-rc.12 ([#1298](https://github.com/SAP/ui5-webcomponents-react/issues/1298)) ([c385a8d](https://github.com/SAP/ui5-webcomponents-react/commit/c385a8dd1b68384bfe1e24a084a325ff937bd9a0))

### BREAKING CHANGES

- All UI5 Web Components Wrappers have been updated to `@ui5/webcomponents@1.0.0-rc.12`, please check the [release notes](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.12) as well.
- **Page**: Replaced custom component with `ui5-page` web component. Please check our [migration guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#replaced-component-page) for more details.
- **Table**: prop `hasMore` has been removed, use `growing` instead
- **Table**: prop `loadMoreText` has been renamed to `moreText `
- **Table**: prop `loadMoreSubtext` has been renamed to `moreSubtext`
- **Calendar**: prop `selectedDates` has been removed, please set selected dates via the `CalendarDate` component as child of the `Calendar`
- **Calendar**: prop `selection` has been renamed to `selectionMode`
- **Calendar**: prop `timestamp ` has been removed
- **Slider**: unused prop `children` has been removed
- `useI18nText` is replaced by `useI18nBundle`. For more details please consult our [migration guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#deleted-hooks).
- As `@ui5/webcomponents-react` has now dropped support for IE11 and Edge Legacy, we are releasing our `lib` files as ES6 code. If you need to run `@ui5/webcomponents-react` in a browser that does not support ES6, please transpile your dependencies using e.g. babel.
- **ThemeProvider:** The `ThemeProvider` context is now simplified to provide only an object with `ThemingParameters`, all other properties have been removed. For details on the migration check out our [migration guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#themeprovider-context-changes).
- Internet Explorer 11 is now deprecated
- **cra-template-seed:** this template is not longer providing out-of-the-box support for IE11 and Edge (legacy)
- The Legacy Edge browser is no longer supported, therefore the following import has been removed: `import '@ui5/webcomponents-react-base/polyfill/Edge';`

## [0.13.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.8...v0.13.9) (2021-02-10)

### Bug Fixes

- **Form:** position all labels with the same spacing ([#1267](https://github.com/SAP/ui5-webcomponents-react/issues/1267)) ([4988241](https://github.com/SAP/ui5-webcomponents-react/commit/498824107792a2b1bfb3d950faa4d5efa4672372))

## [0.13.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.7...v0.13.8) (2021-02-06)

### Bug Fixes

- **ToolbarSeparator:** use correct import path for useI18nBundle ([520f1da](https://github.com/SAP/ui5-webcomponents-react/commit/520f1daa8546cd1b684b95943a670429e930d27b)), closes [#1260](https://github.com/SAP/ui5-webcomponents-react/issues/1260)

## [0.13.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.6...v0.13.7) (2021-02-05)

### Bug Fixes

- **webcomponents:** fix crash, allow nested fragments in all supported browsers ([#1259](https://github.com/SAP/ui5-webcomponents-react/issues/1259)) ([d0be87c](https://github.com/SAP/ui5-webcomponents-react/commit/d0be87c02a1f37003b43b43580e8792be174b01c))

## [0.13.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.5...v0.13.6) (2021-02-02)

### Bug Fixes

- **AnalyticalTable:** show column header icons in correct place ([#1232](https://github.com/SAP/ui5-webcomponents-react/issues/1232)) ([bb13cf5](https://github.com/SAP/ui5-webcomponents-react/commit/bb13cf508eb268444194068ad338048a49e5aaf8))
- **MicroBarChart:** fix default color calculation ([#1233](https://github.com/SAP/ui5-webcomponents-react/issues/1233)) ([9139707](https://github.com/SAP/ui5-webcomponents-react/commit/91397076803e4d4d4c1f5f4b589999af79fe3f05))

### Features

- **Web Components:** allow nested fragments in slots (not available for IE11) ([#1221](https://github.com/SAP/ui5-webcomponents-react/issues/1221)) ([578ae6c](https://github.com/SAP/ui5-webcomponents-react/commit/578ae6c15ea7324ce4f8f108267f8841762e074e)), closes [#1219](https://github.com/SAP/ui5-webcomponents-react/issues/1219)

## [0.13.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.4...v0.13.5) (2021-01-26)

### Bug Fixes

- **AnalyticalTable:** remove unnecessary borders in column headers ([#1218](https://github.com/SAP/ui5-webcomponents-react/issues/1218)) ([9da2247](https://github.com/SAP/ui5-webcomponents-react/commit/9da22477e5113a27743bcec5e62fda5170659b66)), closes [#1197](https://github.com/SAP/ui5-webcomponents-react/issues/1197)
- **Web Components:** allow conditional rendering in slots ([#1217](https://github.com/SAP/ui5-webcomponents-react/issues/1217)) ([b9f50fe](https://github.com/SAP/ui5-webcomponents-react/commit/b9f50fed266bb30341865a2d719822173f76fc47)), closes [#1213](https://github.com/SAP/ui5-webcomponents-react/issues/1213)
- use correct peer dependency version of @ui5/webcomponents-base ([63816fe](https://github.com/SAP/ui5-webcomponents-react/commit/63816fe772558a597bfa40eb09c07aaca9e822b6))
- **Device:** use named export to prevent typescript error ([#1200](https://github.com/SAP/ui5-webcomponents-react/issues/1200)) ([2862abf](https://github.com/SAP/ui5-webcomponents-react/commit/2862abfda68970176b7f3f9640656e04d60ef591))

## [0.13.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.3...v0.13.4) (2021-01-20)

### Bug Fixes

- **Charts:** use ErrorBoundary to prevent errors when components are re-mounted ([#1190](https://github.com/SAP/ui5-webcomponents-react/issues/1190)) ([77427eb](https://github.com/SAP/ui5-webcomponents-react/commit/77427ebb0cb213158484248d952f5101ac577ea4)), closes [#1145](https://github.com/SAP/ui5-webcomponents-react/issues/1145)

### Features

- **AnalyticalTable:** improve accessibility ([#1189](https://github.com/SAP/ui5-webcomponents-react/issues/1189)) ([754050a](https://github.com/SAP/ui5-webcomponents-react/commit/754050a61f40e086c01eb96e2225d73dbb6ecdcb))

## [0.13.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.2...v0.13.3) (2021-01-19)

### Bug Fixes

- **seed:** wrap application with ThemeProvider ([#1185](https://github.com/SAP/ui5-webcomponents-react/issues/1185)) ([842ff20](https://github.com/SAP/ui5-webcomponents-react/commit/842ff200772121e3e134a9582ea2f7f946ef7ab4))
- remove 'export \* as' syntax for compatibility with react-scripts 3 ([#1184](https://github.com/SAP/ui5-webcomponents-react/issues/1184)) ([b4fe896](https://github.com/SAP/ui5-webcomponents-react/commit/b4fe896d40876649072a35ff50e8abc473a10915))
- resolve CSS variables correctly in IE11 ([#1183](https://github.com/SAP/ui5-webcomponents-react/issues/1183)) ([a5ac248](https://github.com/SAP/ui5-webcomponents-react/commit/a5ac24858af45433a5384fb82e8249c54a8952a5))
- **ObjectPage:** add accessibility labels to header buttons and title levels ([#1176](https://github.com/SAP/ui5-webcomponents-react/issues/1176)) ([80f3057](https://github.com/SAP/ui5-webcomponents-react/commit/80f3057b38cb9af52bafb78ce0bf1536467c1284)), closes [#1166](https://github.com/SAP/ui5-webcomponents-react/issues/1166) [#1165](https://github.com/SAP/ui5-webcomponents-react/issues/1165)

### Features

- add accessibility storybook addon (addon-a11y) in dev ([#1169](https://github.com/SAP/ui5-webcomponents-react/issues/1169)) ([1ff79e2](https://github.com/SAP/ui5-webcomponents-react/commit/1ff79e2b6c6b5b7fb691c0c035291d8326fe7f60))

## [0.13.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.1...v0.13.2) (2021-01-15)

### Bug Fixes

- **AnalyticalTable:** prevent crashes and unintended behavior in IE11 ([#1168](https://github.com/SAP/ui5-webcomponents-react/issues/1168)) ([4d328a8](https://github.com/SAP/ui5-webcomponents-react/commit/4d328a82d6d8dc86022a212556bb786c35f2f64a))
- **DynamicPage:** add className prop to dynamic page classes ([#1159](https://github.com/SAP/ui5-webcomponents-react/issues/1159)) ([1c73396](https://github.com/SAP/ui5-webcomponents-react/commit/1c73396f00f60e085769c772100a51ba2a1b4450))
- **MessageBox:** don't crash when Dialog Web Component is not ready yet ([#1148](https://github.com/SAP/ui5-webcomponents-react/issues/1148)) ([cadab16](https://github.com/SAP/ui5-webcomponents-react/commit/cadab16b76f1546a6349ee3a124e4243252241d8))

### Features

- **AnalyticalTable:** add plugin hook to enable disabling selection of rows ([#1156](https://github.com/SAP/ui5-webcomponents-react/issues/1156)) ([4da2848](https://github.com/SAP/ui5-webcomponents-react/commit/4da28487152630ceda02747974c94c84a986843e))

## [0.13.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.13.0...v0.13.1) (2021-01-11)

### Bug Fixes

- **AnalyticalTable:** support rtl ([#1146](https://github.com/SAP/ui5-webcomponents-react/issues/1146)) ([ed4aee1](https://github.com/SAP/ui5-webcomponents-react/commit/ed4aee186f42ee9230b31aeb182abe29479d38e7))
- **DynamicPage:** don't render unnecessary scrollbar & only show actions separator when needed ([#1137](https://github.com/SAP/ui5-webcomponents-react/issues/1137)) ([70d0453](https://github.com/SAP/ui5-webcomponents-react/commit/70d045377e1caff7922f33d8b39d5635d05dedac)), closes [#1074](https://github.com/SAP/ui5-webcomponents-react/issues/1074)

### Features

- **AnalyticalTable:** add navigation indicator ([#1127](https://github.com/SAP/ui5-webcomponents-react/issues/1127)) ([c5f0003](https://github.com/SAP/ui5-webcomponents-react/commit/c5f00033558deeddec07105f810cf0b9e7d54a54)), closes [#1083](https://github.com/SAP/ui5-webcomponents-react/issues/1083)
- **AnalyticalTable:** add onRowClickEvent ([#1143](https://github.com/SAP/ui5-webcomponents-react/issues/1143)) ([2a4c29f](https://github.com/SAP/ui5-webcomponents-react/commit/2a4c29f5f2cec38b76674c73c002c39246c9ac02)), closes [#1138](https://github.com/SAP/ui5-webcomponents-react/issues/1138)
- **Charts:** add RTL support ([#915](https://github.com/SAP/ui5-webcomponents-react/issues/915)) ([f453b8a](https://github.com/SAP/ui5-webcomponents-react/commit/f453b8a653e4f95e43a4cbf2724f9bbbe17af82c))

# [0.13.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.4...v0.13.0) (2021-01-07)

### chore

- delete deprecated components for v0.13.0 ([#1106](https://github.com/SAP/ui5-webcomponents-react/issues/1106)) ([01814d1](https://github.com/SAP/ui5-webcomponents-react/commit/01814d1e680249653548a4edefecd65dab302981))

### Features

- update @ui5/webcomponents to 1.0.0-rc.11 ([#1108](https://github.com/SAP/ui5-webcomponents-react/issues/1108)) ([905dbca](https://github.com/SAP/ui5-webcomponents-react/commit/905dbca96911c1eefdcab212790c2961eda70d5f))

### BREAKING CHANGES

- `NotificationOverflowAction` got renamed to `NotificationAction`
- **BarDesign**: removed BarDesign `Auto`
- **Bar**: prop `contentLeft` is now `startContent`
- **Bar**: prop `contentMiddle` is now `middleContent`
- **Bar**: prop `contentRight` is now `endContent`
- removed deprecated `Spinner` component
- removed deprecated `Tokenizer` component
- **Toolbar**: removed deprecated `onToolbarClick` in favour of `onClick`
- **Device**: removed deprecated, class-based API. Please use the [individual util functions](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#device-api) instead.
- **Device**: removed the optional `oListener` parameter from all device attach/detach functions (mostly used internally)

## [0.12.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.3...v0.12.4) (2020-12-17)

### Features

- **charts:** add support for children prop (enable linear gradients) ([#1105](https://github.com/SAP/ui5-webcomponents-react/issues/1105)) ([5841519](https://github.com/SAP/ui5-webcomponents-react/commit/5841519b6b613654b3f00f811d84cb5a2f8ee894))

## [0.12.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.2...v0.12.3) (2020-12-17)

### Bug Fixes

- **AnalyticalTable:** use correct import for useI18nText ([#1088](https://github.com/SAP/ui5-webcomponents-react/issues/1088)) ([74b7f63](https://github.com/SAP/ui5-webcomponents-react/commit/74b7f63934b63748d61e11a9d95d2e8a0d4d0013))

### Features

- **AnalyticalTable:** add "Interactive" visibleRowCountMode to allow vertical resizing of the table ([#1056](https://github.com/SAP/ui5-webcomponents-react/issues/1056)) ([6295984](https://github.com/SAP/ui5-webcomponents-react/commit/629598469702d794d839a4bf0111645312895665))
- **AnalyticalTable:** add responsive column options for pop-in or hiding columns ([#1093](https://github.com/SAP/ui5-webcomponents-react/issues/1093)) ([cebbf16](https://github.com/SAP/ui5-webcomponents-react/commit/cebbf16d8394718de404f4653924306f1abdd069))
- **useI18nBundle:** add new hook to retrieve current i18n bundle ([#1104](https://github.com/SAP/ui5-webcomponents-react/issues/1104)) ([7b38975](https://github.com/SAP/ui5-webcomponents-react/commit/7b389751815409ed48435a853129c27d8da12df9))

## [0.12.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.1...v0.12.2) (2020-12-02)

### Bug Fixes

- **Bar:** add border-radius to floating-footer ([#1046](https://github.com/SAP/ui5-webcomponents-react/issues/1046)) ([d4fd8c9](https://github.com/SAP/ui5-webcomponents-react/commit/d4fd8c9bf9a889671880051cd2c571dfdfb0f3ef))

### Features

- **AnalyticalTable:** add visibleRowCountMode prop that controls how the table displays visible rows ([#1044](https://github.com/SAP/ui5-webcomponents-react/issues/1044)) ([e86460b](https://github.com/SAP/ui5-webcomponents-react/commit/e86460b6760715c63c2eb7219abec898a6c3c9f0))

## [0.12.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.12.0...v0.12.1) (2020-11-24)

### Bug Fixes

- **Page:** content area adapts to height of header and footer ([#966](https://github.com/SAP/ui5-webcomponents-react/issues/966)) ([cb60b38](https://github.com/SAP/ui5-webcomponents-react/commit/cb60b386e8ff184752fbc3f1427446b1fd737a4d))

### Features

- **AnalyticalTable:** add support for subcomponents ([#997](https://github.com/SAP/ui5-webcomponents-react/issues/997)) ([15a1e99](https://github.com/SAP/ui5-webcomponents-react/commit/15a1e99e7f4892971d01c51841f67d57109b274f))
- **cra-template-seed:** add route based code splitting and lazy loading of edit component ([#961](https://github.com/SAP/ui5-webcomponents-react/issues/961)) ([fffed60](https://github.com/SAP/ui5-webcomponents-react/commit/fffed600d11ca4ec4f595675ad6643c6badb94ed))

# [0.12.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.4...v0.12.0) (2020-11-16)

### Features

- update @ui5/webcomponents to 1.0.0-rc.10 ([#946](https://github.com/SAP/ui5-webcomponents-react/issues/946)) ([801e64a](https://github.com/SAP/ui5-webcomponents-react/commit/801e64a9979e7f5ba0c7a285485c8e8d753d416d))

### BREAKING CHANGES

- Icon import paths changed from e.g. `@ui5/webcomponents-icons/dist/icons/add.js` to `@ui5/webcomponents-icons/dist/add.js`. (`icon` directory got removed)

## [0.11.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.3...v0.11.4) (2020-11-16)

### Bug Fixes

- **charts:** allow negative measures in stacked charts, upgrade recharts ([#952](https://github.com/SAP/ui5-webcomponents-react/issues/952)) ([fb9b254](https://github.com/SAP/ui5-webcomponents-react/commit/fb9b254a5f16f79cb7a6d21a3cafca84fcf3e0c4)), closes [#773](https://github.com/SAP/ui5-webcomponents-react/issues/773)
- **useI18nBundle:** prevent state transition if the component has been unmounted ([#922](https://github.com/SAP/ui5-webcomponents-react/issues/922)) ([9a4adf8](https://github.com/SAP/ui5-webcomponents-react/commit/9a4adf834fd357f8ca717848db2b659ff18bfce9))

### Features

- **cra-template-seed:** improve developer experience for data loading ([#938](https://github.com/SAP/ui5-webcomponents-react/issues/938)) ([4b09e9b](https://github.com/SAP/ui5-webcomponents-react/commit/4b09e9b55b45062f07dfaf4757a57cb3dcc5f506))
- **DynamicPage:** initial component implementation ([#865](https://github.com/SAP/ui5-webcomponents-react/issues/865)) ([a85ab71](https://github.com/SAP/ui5-webcomponents-react/commit/a85ab71803e84fb9e4951a80fc0d75a7ba254b22)), closes [#544](https://github.com/SAP/ui5-webcomponents-react/issues/544)

## [0.11.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.2...v0.11.3) (2020-11-04)

### Bug Fixes

- update peer dependencies to support react 17 ([#850](https://github.com/SAP/ui5-webcomponents-react/issues/850)) ([72c9d6f](https://github.com/SAP/ui5-webcomponents-react/commit/72c9d6f139af52944973da0f2cc9852c6102111a)), closes [#786](https://github.com/SAP/ui5-webcomponents-react/issues/786)

### Features

- **cra-template-seed:** add new cra template @ui5/webcomponents-react-seed ([#790](https://github.com/SAP/ui5-webcomponents-react/issues/790)) ([69713ca](https://github.com/SAP/ui5-webcomponents-react/commit/69713ca45fdcd7fccb87fff9d04f3a4054de48dc))

## [0.11.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.1...v0.11.2) (2020-10-23)

### Bug Fixes

- **AnalyticalTable:** add missing keys ([#808](https://github.com/SAP/ui5-webcomponents-react/issues/808)) ([9bf94d6](https://github.com/SAP/ui5-webcomponents-react/commit/9bf94d68930e01cddbe1e43b6907ec41ea716041))
- **AnalyticalTable:** persist values and don't close the popover when typing within the filters-popover input field ([#810](https://github.com/SAP/ui5-webcomponents-react/issues/810)) ([45a6d8f](https://github.com/SAP/ui5-webcomponents-react/commit/45a6d8f90308d8b19cca75cd702c77ea9b5d7c3a))
- **AnalyticalTable:** prevent style warning when scrollbar is visible ([#813](https://github.com/SAP/ui5-webcomponents-react/issues/813)) ([e0106a7](https://github.com/SAP/ui5-webcomponents-react/commit/e0106a7a0ee6a19c1c67085b8e995740b1285c4a)), closes [#811](https://github.com/SAP/ui5-webcomponents-react/issues/811)

## [0.11.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.0...v0.11.1) (2020-10-21)

### Bug Fixes

- **AnalyticalTable:** mount filters popover only when it's opened ([#738](https://github.com/SAP/ui5-webcomponents-react/issues/738)) ([1350790](https://github.com/SAP/ui5-webcomponents-react/commit/135079054c0e2c4bdff4a10271fb332518eb9d13))
- ensure theming parameters are in sync with ui5/webcomponents-theme-base ([#737](https://github.com/SAP/ui5-webcomponents-react/issues/737)) ([880a8ab](https://github.com/SAP/ui5-webcomponents-react/commit/880a8ab3b099aedc25847f0cdf77fc7cfa20d881))

# [0.11.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.0-rc.1...v0.11.0) (2020-10-15)

_This release is a combining the changes of `0.11.0-rc.0` and `0.11.0-rc.1` in a stable release._

### Features

- **AnalyticalTable:** add header tooltip property to column ([#721](https://github.com/SAP/ui5-webcomponents-react/issues/721)) ([3cde696](https://github.com/SAP/ui5-webcomponents-react/commit/3cde6965f26e53465e9a8af1fef53874da910307)), closes [#704](https://github.com/SAP/ui5-webcomponents-react/issues/704)
- **AnalyticalTable:** always show scrollbars if needed ([#706](https://github.com/SAP/ui5-webcomponents-react/issues/706)) ([6fcb42a](https://github.com/SAP/ui5-webcomponents-react/commit/6fcb42ae61ea3723a6bf7411a83cbf3c0aace9c4)), closes [#698](https://github.com/SAP/ui5-webcomponents-react/issues/698
- **Toolbar:** accept react fragments as children ([#723](https://github.com/SAP/ui5-webcomponents-react/issues/723)) ([9697b43](https://github.com/SAP/ui5-webcomponents-react/commit/9697b432541c34d29fda35b7a225cd4ac9c431d0))
- **upgrade ui5-webcomponents to 1.0.0-rc.9** ([#705](https://github.com/SAP/ui5-webcomponents-react/issues/705)) ([fb7d5c6](https://github.com/SAP/ui5-webcomponents-react/commit/fb7d5c62d10a6afa161cbd55c75850a068ec3383)), closes [#674](https://github.com/SAP/ui5-webcomponents-react/issues/674)

### Bug Fixes

- **AnalyticalTable:** don't crash when removing columns ([#716](https://github.com/SAP/ui5-webcomponents-react/issues/716)) ([6c74e5d](https://github.com/SAP/ui5-webcomponents-react/commit/6c74e5dcdefbdd41812c4a8d081afd060dbecdb0))
- **AnalyticalTable:** show all columns in Dialog ([#722](https://github.com/SAP/ui5-webcomponents-react/issues/722)) ([5e21750](https://github.com/SAP/ui5-webcomponents-react/commit/5e21750443e76d2e92b276513af59562106e6f8e)), closes [#719](https://github.com/SAP/ui5-webcomponents-react/issues/719)

### chore

- delete deprecated FilterItem ([#717](https://github.com/SAP/ui5-webcomponents-react/issues/717)) ([f30d2fc](https://github.com/SAP/ui5-webcomponents-react/commit/f30d2fc83a6bc4173b83e303fc2659e673c8633b)), closes [#646](https://github.com/SAP/ui5-webcomponents-react/issues/646)

### BREAKING CHANGES

- deleted deprecated component `FilterItem`, please use `FilterGroupItem` instead. The `FilterBar` is now accepting only `FilterGroupItem`s as children.
- **Token**: the Token text is now defined via the `text` prop, `children` has no effect anymore.
- **Token**: `onDelete` is removed as the Token shouldn’t be used as a standalone component.

# [0.11.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.11.0-rc.0...v0.11.0-rc.1) (2020-10-13)

### Bug Fixes

- **AnalyticalTable:** show all columns in Dialog ([#722](https://github.com/SAP/ui5-webcomponents-react/issues/722)) ([5e21750](https://github.com/SAP/ui5-webcomponents-react/commit/5e21750443e76d2e92b276513af59562106e6f8e)), closes [#719](https://github.com/SAP/ui5-webcomponents-react/issues/719)

### Features

- **AnalyticalTable:** add header tooltip property to column ([#721](https://github.com/SAP/ui5-webcomponents-react/issues/721)) ([3cde696](https://github.com/SAP/ui5-webcomponents-react/commit/3cde6965f26e53465e9a8af1fef53874da910307)), closes [#704](https://github.com/SAP/ui5-webcomponents-react/issues/704)
- **AnalyticalTable:** always show scrollbars if needed ([#706](https://github.com/SAP/ui5-webcomponents-react/issues/706)) ([6fcb42a](https://github.com/SAP/ui5-webcomponents-react/commit/6fcb42ae61ea3723a6bf7411a83cbf3c0aace9c4)), closes [#698](https://github.com/SAP/ui5-webcomponents-react/issues/698)

# [0.11.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.10...v0.11.0-rc.0) (2020-10-08)

### Bug Fixes

- **AnalyticalTable:** don't crash when removing columns ([#716](https://github.com/SAP/ui5-webcomponents-react/issues/716)) ([6c74e5d](https://github.com/SAP/ui5-webcomponents-react/commit/6c74e5dcdefbdd41812c4a8d081afd060dbecdb0))

### chore

- delete deprecated FilterItem ([#717](https://github.com/SAP/ui5-webcomponents-react/issues/717)) ([f30d2fc](https://github.com/SAP/ui5-webcomponents-react/commit/f30d2fc83a6bc4173b83e303fc2659e673c8633b)), closes [#646](https://github.com/SAP/ui5-webcomponents-react/issues/646)

### Features

- upgrade ui5-webcomponents to 1.0.0-rc.9 ([#705](https://github.com/SAP/ui5-webcomponents-react/issues/705)) ([fb7d5c6](https://github.com/SAP/ui5-webcomponents-react/commit/fb7d5c62d10a6afa161cbd55c75850a068ec3383)), closes [#674](https://github.com/SAP/ui5-webcomponents-react/issues/674)

### BREAKING CHANGES

- deleted deprecated component `FilterItem`, please use `FilterGroupItem` instead. The `FilterBar` is now accepting only `FilterGroupItem`s as children.
- **Token**: the Token text is now defined via the `text` prop, `children` has no effect anymore.
- **Token**: `onDelete` is removed as the Token shouldn’t be used as a standalone component.

## [0.10.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.9...v0.10.10) (2020-10-02)

### Bug Fixes

- **CommonProps:** add type definitions for HTML attributes ([#692](https://github.com/SAP/ui5-webcomponents-react/issues/692)) ([07c5b6a](https://github.com/SAP/ui5-webcomponents-react/commit/07c5b6adcd57b9ad1e59d65eb70e2855aa22fa91))

### Features

- **AnalyticalTable:** horizontal virtualization of table cells ([#640](https://github.com/SAP/ui5-webcomponents-react/issues/640)) ([05b1e6e](https://github.com/SAP/ui5-webcomponents-react/commit/05b1e6eae02cfd4b56471be1ece94ed6be9b71c2))

## [0.10.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.8...v0.10.9) (2020-09-23)

### Bug Fixes

- **AnalyticalTable:** only apply selectedRowIds prop if its value has changed ([#685](https://github.com/SAP/ui5-webcomponents-react/issues/685)) ([8278f4b](https://github.com/SAP/ui5-webcomponents-react/commit/8278f4b4e9228c0748a68a7464178eadf41fec21))
- **AnalyticalTable:** prevent an error in the storybook if loading prop was toggled ([#679](https://github.com/SAP/ui5-webcomponents-react/issues/679)) ([296d75b](https://github.com/SAP/ui5-webcomponents-react/commit/296d75be01ecdaff5ed4533fa0d0bac897507dc5))
- **AnalyticalTable:** selectedRowIds can contain more than one digit per segment ([#672](https://github.com/SAP/ui5-webcomponents-react/issues/672)) ([6882524](https://github.com/SAP/ui5-webcomponents-react/commit/6882524e57aa66b9d20537458cc1884a34ced3e2))
- **FilterBar:** Add missing onFiltersDialogSave event properties and fix manually controlled visibleInFilterBar prop ([#682](https://github.com/SAP/ui5-webcomponents-react/issues/682)) ([95a1078](https://github.com/SAP/ui5-webcomponents-react/commit/95a10785cd877168f3d7401bb2eae3d4797ac4ad))
- **FilterBar:** after opening the filters-dialog, enable manual control of filters again ([#683](https://github.com/SAP/ui5-webcomponents-react/issues/683)) ([5727165](https://github.com/SAP/ui5-webcomponents-react/commit/5727165e945a1cd2a240cf620a0339513faed519))

## [0.10.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.7...v0.10.8) (2020-09-02)

### Bug Fixes

- **MessageBox:** allow any react node to be passed as children ([#670](https://github.com/SAP/ui5-webcomponents-react/issues/670)) ([b2fae12](https://github.com/SAP/ui5-webcomponents-react/commit/b2fae12ce5c9443c70934b5cc09b0ca17372dea2))
- **PieChart/DonutChart:** re-release active segment feature ([0447b22](https://github.com/SAP/ui5-webcomponents-react/commit/0447b22a63e642d632b0d80521a4ee6a31213a4b))

## [0.10.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.6...v0.10.7) (2020-08-28)

### Bug Fixes

- **PieChart / DonutChart:** fix hide data label logic ([#668](https://github.com/SAP/ui5-webcomponents-react/issues/668)) ([d8dc5ef](https://github.com/SAP/ui5-webcomponents-react/commit/d8dc5ef1faa96fcc24014790fb199999a3a9266d))

### Features

- **PieChart / DonutChart:** add option to mark chart segments as active ([#667](https://github.com/SAP/ui5-webcomponents-react/issues/667)) ([743d6d8](https://github.com/SAP/ui5-webcomponents-react/commit/743d6d8fcc79a58f0dd09f37e0f77030f96cb2f9))

## [0.10.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.5...v0.10.6) (2020-08-24)

### Bug Fixes

- **AnalyticalTable:** respect columnOrder prop ([#666](https://github.com/SAP/ui5-webcomponents-react/issues/666)) ([05382b8](https://github.com/SAP/ui5-webcomponents-react/commit/05382b887fb20ddeb13cfbc1b26c3c45649fcf42))
- **Charts:** apply dimension formatter to zooming tool ([#663](https://github.com/SAP/ui5-webcomponents-react/issues/663)) ([972ee49](https://github.com/SAP/ui5-webcomponents-react/commit/972ee49594149e9ed7b8eea8a79656520b0f92c9))
- **Form:** fix tab order ([#665](https://github.com/SAP/ui5-webcomponents-react/issues/665)) ([d022fe7](https://github.com/SAP/ui5-webcomponents-react/commit/d022fe74be1e1cc8004b938cb7247473771f3016)), closes [#645](https://github.com/SAP/ui5-webcomponents-react/issues/645)

## [0.10.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.4...v0.10.5) (2020-08-19)

### Bug Fixes

- **AnalyticalTable:** prevent crash if unsupported rowId is set as selectedRowIds key ([#660](https://github.com/SAP/ui5-webcomponents-react/issues/660)) ([e3b1117](https://github.com/SAP/ui5-webcomponents-react/commit/e3b111766f8a9170294e5b1335eeced323c649d7))
- **AnalyticalTable:** prevent event bubbling of ui5 controls ([#659](https://github.com/SAP/ui5-webcomponents-react/issues/659)) ([44bedf8](https://github.com/SAP/ui5-webcomponents-react/commit/44bedf8262a026b63c6b5292e8fc318dc3abddd3))
- **FilterBar:** support new web-components controls, fix layout and labels ([#661](https://github.com/SAP/ui5-webcomponents-react/issues/661)) ([d0969b5](https://github.com/SAP/ui5-webcomponents-react/commit/d0969b53bcd524c2289fa1d228594678638cb671))

## [0.10.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.3...v0.10.4) (2020-08-19)

### Bug Fixes

- **AnalyticalTable:** fix pre-selection of custom row ids and update react-table ([#649](https://github.com/SAP/ui5-webcomponents-react/issues/649)) ([b733f4c](https://github.com/SAP/ui5-webcomponents-react/commit/b733f4c35b583feda184164552ac3a1c1159b91e))
- **FilterBar:** use createPortal for FilterDialog within FilterBar ([#655](https://github.com/SAP/ui5-webcomponents-react/issues/655)) ([2a65a24](https://github.com/SAP/ui5-webcomponents-react/commit/2a65a24a1bfb15e225391457033889e7a5ea2617)), closes [#652](https://github.com/SAP/ui5-webcomponents-react/issues/652)
- **Themes:** add missing themes `sap_fiori_3_hcb` and `sap_fiori_3_hcw` ([#648](https://github.com/SAP/ui5-webcomponents-react/issues/648)) ([19cf697](https://github.com/SAP/ui5-webcomponents-react/commit/19cf697d05c62b3bbc6723d5a4a6e74b6a9d168e))

## [0.10.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.2...v0.10.3) (2020-08-06)

### Bug Fixes

- **MessageBox:** correctly align items in footer and fix header alignment in Safari ([#643](https://github.com/SAP/ui5-webcomponents-react/issues/643)) ([c36df38](https://github.com/SAP/ui5-webcomponents-react/commit/c36df3884aba7a74efa1f456739b0511f18be1e4))

## [0.10.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.1...v0.10.2) (2020-08-05)

### Bug Fixes

- **FilterBar:** search field within dialog expands to available width ([#638](https://github.com/SAP/ui5-webcomponents-react/issues/638)) ([507d3cb](https://github.com/SAP/ui5-webcomponents-react/commit/507d3cb9276617d8d589be4fc8789d5e9e97f409))
- use createPortal for all internal popovers ([#636](https://github.com/SAP/ui5-webcomponents-react/issues/636)) ([9b36161](https://github.com/SAP/ui5-webcomponents-react/commit/9b36161330d40a8ddc466f5d9367b84e9d829f06))
- **TimelineItem:** use correct name ([#635](https://github.com/SAP/ui5-webcomponents-react/issues/635)) ([a5737c3](https://github.com/SAP/ui5-webcomponents-react/commit/a5737c35b40c9f15d11b91ff07c31b39cea738c1)), closes [#634](https://github.com/SAP/ui5-webcomponents-react/issues/634)

## [0.10.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0...v0.10.1) (2020-07-31)

### Bug Fixes

- **AnalyticalTable:** allow column reordering in tree table mode ([3f91c84](https://github.com/SAP/ui5-webcomponents-react/commit/3f91c846b0d946dc55c6df67adc87fa4764f0c8f))
- **web components:** export shared prop types ([dc68681](https://github.com/SAP/ui5-webcomponents-react/commit/dc6868133759427a5978f501d621f5c859d24782))
- fix typescript errors ([#632](https://github.com/SAP/ui5-webcomponents-react/issues/632)) ([77df7c3](https://github.com/SAP/ui5-webcomponents-react/commit/77df7c37045616a8274b3a6288251a377ef8a23e))

# [0.10.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.11...v0.10.0) (2020-07-30)

### Features

- update to [ui5-webcomponents 1.0.0-rc.8](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.8) ([#623](https://github.com/SAP/ui5-webcomponents-react/issues/623)) ([45bbc8c](https://github.com/SAP/ui5-webcomponents-react/commit/45bbc8cb8d9c43774ae44ff15e4026c67be434c3))

### BREAKING CHANGES

- Deleted `Notification` component, replaced by `NotificationListItem`
- Deleted `NotificationGroup` component, replaced by `NotificationGroupListItem`
- **ProgressIndicator** replaced by UI5 Web Component with new API
- **ShellBar**: `logo` is now accepting an `img` tag or the `Avatar` component. Passing a `string` with the URL to the image is not longer supported.
- **TabContainer** will no longer automatically select the first tab, if no tab is selected. If you relied on this behaviour, you should now explicitly set the selected property on the first tab.

For a full list of breaking changes, please take a look at the [CHANGELOG](https://github.com/SAP/ui5-webcomponents-react/blob/main/CHANGELOG.md) with all `0.10.0-rc.x` releases and read our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/?path=/docs/migration-guide--page#migrating-from-09x-to-0100).

# [0.10.0-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.10...v0.10.0-rc.11) (2020-07-29)

### Bug Fixes

- **AnalyticalTable:** apply minWidth only if necessary ([#620](https://github.com/SAP/ui5-webcomponents-react/issues/620)) ([8f6f544](https://github.com/SAP/ui5-webcomponents-react/commit/8f6f544656de814889d38c2430569e1a09b7f35a))
- **AnalyticalTable:** insert reordered column in the correct place ([#626](https://github.com/SAP/ui5-webcomponents-react/issues/626)) ([73c60c7](https://github.com/SAP/ui5-webcomponents-react/commit/73c60c766ab916cf4c469512467e9b3a202f83de))
- **PieChart:** fix tooltip font color and add chartConfig option to modify the tooltip styles ([#625](https://github.com/SAP/ui5-webcomponents-react/issues/625)) ([ae697a9](https://github.com/SAP/ui5-webcomponents-react/commit/ae697a9134283e3290bb1c10b5da33e734b58ca4))

# [0.10.0-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.9...v0.10.0-rc.10) (2020-07-23)

### Bug Fixes

- **AnalyticalTable:** prevent crash if unsupported rowId is set as selectedRowId ([#615](https://github.com/SAP/ui5-webcomponents-react/issues/615)) ([83a808e](https://github.com/SAP/ui5-webcomponents-react/commit/83a808e101bae5320b930b512e8f54245252b360))
- **AnalyticalTable:** prevent horizontal overflow if last column is resizable ([#612](https://github.com/SAP/ui5-webcomponents-react/issues/612)) ([47d3f16](https://github.com/SAP/ui5-webcomponents-react/commit/47d3f16bc7adc3bc52ef51296b62f13610bba905))
- **AnalyticalTable:** update react-table ([#616](https://github.com/SAP/ui5-webcomponents-react/issues/616)) ([17ed544](https://github.com/SAP/ui5-webcomponents-react/commit/17ed5449709c87e1744f1d3891b404d76df9c171))
- **Charts:** tooltip respects dimension formatter ([#614](https://github.com/SAP/ui5-webcomponents-react/issues/614)) ([47104f9](https://github.com/SAP/ui5-webcomponents-react/commit/47104f9067c15fd06bfcfc126191ef578effe5a0))
- **Popups:** prevent bubbling of internally used popover events ([#618](https://github.com/SAP/ui5-webcomponents-react/issues/618)) ([8781f42](https://github.com/SAP/ui5-webcomponents-react/commit/8781f42e4bb8369a0631c382cc173c8d9129abd7))

### chore

- **AnalyticalTable:** remove busyIndicatorEnabled prop ([#617](https://github.com/SAP/ui5-webcomponents-react/issues/617)) ([ff287cf](https://github.com/SAP/ui5-webcomponents-react/commit/ff287cf5eeb2c08825ff5c93b257c9b1b8bbf816))

### BREAKING CHANGES

- **AnalyticalTable:** remove prop `busyIndicatorEnabled` as it is somehow duplicate to `loading`. The visibility of the busy indicator is now solely controlled by the prop `loading`.

# [0.10.0-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.8...v0.10.0-rc.9) (2020-07-17)

### Bug Fixes

- **AnalyticalTable:** fix subRows selection in tree table mode ([#610](https://github.com/SAP/ui5-webcomponents-react/issues/610)) ([69e63d9](https://github.com/SAP/ui5-webcomponents-react/commit/69e63d9b14cc9e9ad2936bd4c0301f2122f285d3))
- **FilterBar:** search-input field reacts to value prop changes ([#609](https://github.com/SAP/ui5-webcomponents-react/issues/609)) ([27981dd](https://github.com/SAP/ui5-webcomponents-react/commit/27981dd0cafa44d137c66ae9a0eeca2f553fff27))

### Features

- **AnalyticalTable:** support resize on whole column ([#607](https://github.com/SAP/ui5-webcomponents-react/issues/607)) ([cb99e78](https://github.com/SAP/ui5-webcomponents-react/commit/cb99e785cc1c0df8c4839d904bc8f0aff90db628)), closes [#580](https://github.com/SAP/ui5-webcomponents-react/issues/580)

# [0.10.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.7...v0.10.0-rc.8) (2020-07-16)

### Bug Fixes

- **ObjectPage:** support dynamically added sections ([#604](https://github.com/SAP/ui5-webcomponents-react/issues/604)) ([a7ecb3c](https://github.com/SAP/ui5-webcomponents-react/commit/a7ecb3c55d2d3cb47b43b9c2c57e0fc609a9fb01)), closes [#591](https://github.com/SAP/ui5-webcomponents-react/issues/591)
- remove useMemo from usePassThroughHtmlProps ([#601](https://github.com/SAP/ui5-webcomponents-react/issues/601)) ([10e0d89](https://github.com/SAP/ui5-webcomponents-react/commit/10e0d89ebcf338e692ecc92931d04c50d3a3a3d1))
- **AnalyticalTable:** fix dynamic column width and prevent table from overflowing in some cases ([#597](https://github.com/SAP/ui5-webcomponents-react/issues/597)) ([fe93af8](https://github.com/SAP/ui5-webcomponents-react/commit/fe93af8762ff149929fbeb3ac1c306ba2458d272))
- **AnalyticalTable:** improve scroll performance when scrolling very fast ([#600](https://github.com/SAP/ui5-webcomponents-react/issues/600)) ([e4a8e95](https://github.com/SAP/ui5-webcomponents-react/commit/e4a8e95b2269147229f6768aa1ded8edbc3f5b5e))
- **FilterBar:** replace fragments inside of toolbar and update story ([#599](https://github.com/SAP/ui5-webcomponents-react/issues/599)) ([ab0760f](https://github.com/SAP/ui5-webcomponents-react/commit/ab0760f266006bc6e26534e00982bce6fb3d52d3))

# [0.10.0-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.6...v0.10.0-rc.7) (2020-07-09)

### Bug Fixes

- **MicroBarChart:** rollback to old implementation with new API ([#588](https://github.com/SAP/ui5-webcomponents-react/issues/588)) ([330d639](https://github.com/SAP/ui5-webcomponents-react/commit/330d63946ca025128f0a2395211f6686f82029e6))
- **sapScrollBar:** use correct height for horizontal scrollbar ([#587](https://github.com/SAP/ui5-webcomponents-react/issues/587)) ([3ceb0de](https://github.com/SAP/ui5-webcomponents-react/commit/3ceb0dee7dc7328bbb6d816d083f3ca1f8af6e73))

### BREAKING CHANGES

- **MicroBarChart:** Removed props `noLegend`, `onLegendClick`, `noAnimation`, `centerLabel` and `chartConfig` as they we not used in the chart and had no effect.

# [0.10.0-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.5...v0.10.0-rc.6) (2020-07-02)

### Bug Fixes

- **AnalyticalTable:** fix behavior of minWidth and add maxWidth support ([#585](https://github.com/SAP/ui5-webcomponents-react/issues/585)) ([525bbec](https://github.com/SAP/ui5-webcomponents-react/commit/525bbece5ba3f1f041e36193540b894c32b93364))

### Features

- **AnalyticalTable:** add horizontal scrollbar in fiori design ([#583](https://github.com/SAP/ui5-webcomponents-react/issues/583)) ([f695215](https://github.com/SAP/ui5-webcomponents-react/commit/f6952151b768ddff6ac481c694a64da9453e3d77))

# [0.10.0-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.4...v0.10.0-rc.5) (2020-06-22)

### Bug Fixes

- **BarChart/ColumnChart:** fix data labels for nested data accessors ([#579](https://github.com/SAP/ui5-webcomponents-react/issues/579)) ([605cb06](https://github.com/SAP/ui5-webcomponents-react/commit/605cb06f5b5929a190e9c962535e666557c6c2f2))
- **Form:** fix bad import ([12e3278](https://github.com/SAP/ui5-webcomponents-react/commit/12e32789cfddb40a6f56738e6d1fbe5904e7d459))

### Features

- **Form:** add props to control labelSpan and columns for each size ([#578](https://github.com/SAP/ui5-webcomponents-react/issues/578)) ([40d9579](https://github.com/SAP/ui5-webcomponents-react/commit/40d95790bb330dc4a1a5e6077c278de78825967b))
- **ScatterChart:** initial component implementation ([#577](https://github.com/SAP/ui5-webcomponents-react/issues/577)) ([bcadbea](https://github.com/SAP/ui5-webcomponents-react/commit/bcadbeaabbe523ed1e7a24ff964cb3da67a9d9b2)), closes [#570](https://github.com/SAP/ui5-webcomponents-react/issues/570)

# [0.10.0-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.3...v0.10.0-rc.4) (2020-06-18)

### Code Refactoring

- **Form:** use grid layout ([#576](https://github.com/SAP/ui5-webcomponents-react/issues/576)) ([6f14ae5](https://github.com/SAP/ui5-webcomponents-react/commit/6f14ae5b8131f06fe1c3f32083a8cdb75e5b613a)), closes [#564](https://github.com/SAP/ui5-webcomponents-react/issues/564)

### BREAKING CHANGES

- **Form:** deleted `CurrentViewportRange` (mostly used internally)
- **Form:** `FormGroup` and `FormItem` don't support `className`, `style`, `ref`, ..etc. props anymore, there are only used for calculating the final form layout.

# [0.10.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.2...v0.10.0-rc.3) (2020-06-16)

### Bug Fixes

- **base:** remove unnecessary proxy polyfill ([10adb29](https://github.com/SAP/ui5-webcomponents-react/commit/10adb29135d0966c6b95c8018453751663267109))
- Fix wrong display names for NotificationGroup and VariantManagement ([2963a55](https://github.com/SAP/ui5-webcomponents-react/commit/2963a55bd11ebc5d99c654374352f0fd0a28370b))
- **BarChart/ColumnChart:** display correct labels in stacked charts ([#568](https://github.com/SAP/ui5-webcomponents-react/issues/568)) ([66b68be](https://github.com/SAP/ui5-webcomponents-react/commit/66b68beca816964c7c6230da2de8e43ac5f0e0d7))

# [0.10.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.1...v0.10.0-rc.2) (2020-06-05)

### Bug Fixes

- **FilterBar/ObjectPage:** add toolbar for making action bars responsive ([#546](https://github.com/SAP/ui5-webcomponents-react/issues/546)) ([bb0d9d4](https://github.com/SAP/ui5-webcomponents-react/commit/bb0d9d4a0023f9ecaf058f8b3bccd049621e96bf)), closes [#533](https://github.com/SAP/ui5-webcomponents-react/issues/533)
- **MessageBox:** allow custom action texts ([#561](https://github.com/SAP/ui5-webcomponents-react/issues/561)) ([f20d861](https://github.com/SAP/ui5-webcomponents-react/commit/f20d8614bfe241b5e7ea8c87ac047c2eb7e92df4)), closes [#551](https://github.com/SAP/ui5-webcomponents-react/issues/551)

### Features

- **spacings:** add fiori 3 spacings ([#549](https://github.com/SAP/ui5-webcomponents-react/issues/549)) ([270110d](https://github.com/SAP/ui5-webcomponents-react/commit/270110d89302741f259a1c122a0beab83eef452e))
- **Toolbar:** initial component implementation ([#543](https://github.com/SAP/ui5-webcomponents-react/issues/543)) ([0ef66dd](https://github.com/SAP/ui5-webcomponents-react/commit/0ef66ddb8a6285a15c6a3f6245114a83e4e4ad8d))

# [0.10.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.10.0-rc.0...v0.10.0-rc.1) (2020-05-25)

### Bug Fixes

- **AnalyticalTable:** remove padding and scrollbar from select-all header cell ([#536](https://github.com/SAP/ui5-webcomponents-react/issues/536)) ([97158a3](https://github.com/SAP/ui5-webcomponents-react/commit/97158a39663cf40c424829a86962df7070a0dacb)), closes [#532](https://github.com/SAP/ui5-webcomponents-react/issues/532)
- **DurationPicker:** use correct value for defaultProp maxValue ([#529](https://github.com/SAP/ui5-webcomponents-react/issues/529)) ([888d069](https://github.com/SAP/ui5-webcomponents-react/commit/888d069a86784c4833f9257abc67e569be3dd231))

### Features

- **StyleClassHelper:** add putIfPresent method ([#539](https://github.com/SAP/ui5-webcomponents-react/issues/539)) ([0ae0785](https://github.com/SAP/ui5-webcomponents-react/commit/0ae078554dd0e7e6a1424de6755ec02fa15bb12e))

# [0.10.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.5...v0.10.0-rc.0) (2020-05-19)

### Bug Fixes

- **AnalyticalTable:** don't crash if scrollTo methods are not defined ([#515](https://github.com/SAP/ui5-webcomponents-react/issues/515)) ([636d507](https://github.com/SAP/ui5-webcomponents-react/commit/636d50741deaebacd518f05c52ea4528dfce99fa))
- **AnalyticalTable:** enable minWidth/maxWidth column option, disable dragging while resizing ([#518](https://github.com/SAP/ui5-webcomponents-react/issues/518)) ([0b59899](https://github.com/SAP/ui5-webcomponents-react/commit/0b59899efe4d6c59c5c4774a4b4d463d394136a0))
- **AnalyticalTable:** prevent overflow y on parent container ([#521](https://github.com/SAP/ui5-webcomponents-react/issues/521)) ([c8e98ff](https://github.com/SAP/ui5-webcomponents-react/commit/c8e98ff56055b10d0d6b9d5fc45d1bcfdd2867a5))
- **AnalyticalTable:** remove deprecated AnalyticalTableScrollMode smart ([#526](https://github.com/SAP/ui5-webcomponents-react/issues/526)) ([64f7e64](https://github.com/SAP/ui5-webcomponents-react/commit/64f7e6481a7a6164bce8973e8c3337cc52b45831))
- **AnalyticalTable:** use 100% of the parent height ([#512](https://github.com/SAP/ui5-webcomponents-react/issues/512)) ([e033f85](https://github.com/SAP/ui5-webcomponents-react/commit/e033f85ae73289b89b6ffe2354da7e44d672df2c))
- **Charts:** fix onDataPointClick event not firing or firing for wrong segment on Donut/PieChart ([#524](https://github.com/SAP/ui5-webcomponents-react/issues/524)) ([c68b162](https://github.com/SAP/ui5-webcomponents-react/commit/c68b16241f70b2d17ce8a570dec9c1fb9e297528))
- **ObjectPage:** make anchor bar more resilient ([#522](https://github.com/SAP/ui5-webcomponents-react/issues/522)) ([a6adefc](https://github.com/SAP/ui5-webcomponents-react/commit/a6adefc47040ca5167a586f939cfac54e16c6579))
- **Pie/DonutChart:** respect measure formatter and custom data label ([#525](https://github.com/SAP/ui5-webcomponents-react/issues/525)) ([e49eddc](https://github.com/SAP/ui5-webcomponents-react/commit/e49eddc4761661f59e4b7850d36b44dfc104e732))

### chore

- **charts:** remove deprecated charts ([#510](https://github.com/SAP/ui5-webcomponents-react/issues/510)) ([0aafca0](https://github.com/SAP/ui5-webcomponents-react/commit/0aafca0b82877e472b89ffe601d17ef71dcd79d9))
- consolidate APIs ([#514](https://github.com/SAP/ui5-webcomponents-react/issues/514)) ([bea48ae](https://github.com/SAP/ui5-webcomponents-react/commit/bea48aec79949bc7148f7d8ea7a7fbe72f573608))
- **base:** remove deprecated components ([#508](https://github.com/SAP/ui5-webcomponents-react/issues/508)) ([781fe4e](https://github.com/SAP/ui5-webcomponents-react/commit/781fe4ebac7e10e431f8cd1925ec48ba941172e8))
- **main:** remove deprecated render methods ([#511](https://github.com/SAP/ui5-webcomponents-react/issues/511)) ([030473c](https://github.com/SAP/ui5-webcomponents-react/commit/030473c9a38d2bcaa3069925c9efd5ec75d0f909))

### Code Refactoring

- **Grid:** use CSS Grid layout ([#504](https://github.com/SAP/ui5-webcomponents-react/issues/504)) ([fcc449a](https://github.com/SAP/ui5-webcomponents-react/commit/fcc449a9682952c697a1e13c82cce19cd4070f5f))

### BREAKING CHANGES

- **charts:** replace deprecated charts with new implementation. In case your imports contain a `next` path segment, please remove this segment. Example: `import { BarChart } from '@ui5/webcomponents-react-charts/lib/next/BarChart';` becomes `import { BarChart } from '@ui5/webcomponents-react-charts/lib/BarChart';`. For further details please take a look into our [Migration Guide](https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/MigrationGuide.stories.mdx#charts).
- **AnalyticalCard**: remove prop `width`, please use `style` or `className` instead
- **Text**: remove prop `width`, please use `style` or `className` instead
- **ProgressIndicator**: remove props `width` and `height`, please use `style` or `className` instead
- **FlexBox**: remove props `width` and `height`, please use `style` or `className` instead
- **base:** remove deprecated `sap_fiori_3` theming parameters, use `ThemingParameters` instead
- **base:** remove polyfill of old event API
- **main:** **AnalyticalTable**: remove deprecated prop `renderExtension`, please use `extension` instead
- **main:** **Bar**: remove deprecated prop `renderContentLeft`, `renderContentMiddle`, `renderContentRight`, please use `contentLeft`, `contentMiddle`, `contentRight` instead
- **main:** **FormItem**: remove deprecated prop `labelText`, please use `label` instead
- **main:** **FilterBar**: remove deprecated prop `renderSearch`, `renderVariants`, please use `search`, `variants` instead
- **main:** **ObjectPage**: remove deprecated prop `renderHeaderContent`, `renderBreadcrumbs`, `renderKeyInfos`, please use `headerContent`, `breadcrumbs`, `keyInfos` instead
- **main:** **Page**: remove deprecated prop `renderCustomHeader`, `renderCustomFooter`, please use `customHeader`, `customFooter` instead
- **Grid:** remove prop `width`, width can now be set via `style` or `className`
- **Grid:** prop `vSpacing` accepts now a CSS height instead of a number in `rem`
- **Grid:** prop `hSpacing` accepts now a CSS width instead of a number in `rem`
- **Grid:** change prop `data-layout` (object) on child elements to `data-layout-span` and `data-layout-indent`

### BREAKING CHANGES (undocumented classes, internal framework cleanup)

- **base:** remove deprecated `Event`
- **base:** remove deprecated `font72` (comes with UI5 Web Components)
- **base:** remove deprecated `HSLColor`
- **base:** remove deprecated `Optional` (use JS optional-chaining instead)
- **base:** remove deprecated `Scroller` library

## [0.9.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.4...v0.9.5) (2020-05-13)

### Bug Fixes

- **Charts - New:** configurable animation and rendering improvements ([#501](https://github.com/SAP/ui5-webcomponents-react/issues/501)) ([06f58b9](https://github.com/SAP/ui5-webcomponents-react/commit/06f58b9e8850dc9c1b0dc9f4734586df556bd6ef))

### Features

- **Charts:** stabilize new charts and deprecate old charts ([#507](https://github.com/SAP/ui5-webcomponents-react/issues/507)) ([4dbb17e](https://github.com/SAP/ui5-webcomponents-react/commit/4dbb17eb6fcd70e68ac025a303b008468e468b76))
- **PieChart/DonutChart - New:** expose innerRadius and outerRadius in chartConfig prop ([#503](https://github.com/SAP/ui5-webcomponents-react/issues/503)) ([8390186](https://github.com/SAP/ui5-webcomponents-react/commit/8390186199ca973759a56992298ebc8d48d32b1b))

## [0.9.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.3...v0.9.4) (2020-05-08)

### Bug Fixes

- **Charts:** fix crash in ComposedChart on click when onDataPointClick is not set ([#483](https://github.com/SAP/ui5-webcomponents-react/issues/483)) ([c318ca2](https://github.com/SAP/ui5-webcomponents-react/commit/c318ca2122beb667b80d20e501510b6e269dd4bd))
- **Charts - New:** layouting fixes ([#488](https://github.com/SAP/ui5-webcomponents-react/issues/488)) ([4a47e1d](https://github.com/SAP/ui5-webcomponents-react/commit/4a47e1d520f1a99426bcf481d13ceb6b71a22d89))
- **Charts-New:** fix labels of donut chart and yAxis width calculation of bar chart ([#498](https://github.com/SAP/ui5-webcomponents-react/issues/498)) ([db3a5b7](https://github.com/SAP/ui5-webcomponents-react/commit/db3a5b7ca2de8dbbdb160cd95ecdd35225b5c34f))
- **cra-template:** fix test to be successful ([#497](https://github.com/SAP/ui5-webcomponents-react/issues/497)) ([f5932fa](https://github.com/SAP/ui5-webcomponents-react/commit/f5932fa0e2aa9cf236b718cf18a6bee49cf189af))
- **PieChart:** fix hideDataLabel on measure not hiding data labels ([#499](https://github.com/SAP/ui5-webcomponents-react/issues/499)) ([2c73460](https://github.com/SAP/ui5-webcomponents-react/commit/2c73460f32aa36928cc8d5c4a6c6e0667f7c6665))
- fix cjs build ([#496](https://github.com/SAP/ui5-webcomponents-react/issues/496)) ([b1900cb](https://github.com/SAP/ui5-webcomponents-react/commit/b1900cbc96f1de4cbcbed7c86dbb4f6ec3f38fd5))

## [0.9.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.2...v0.9.3) (2020-05-06)

### Bug Fixes

- add babel/runtime as dependency to all packages ([#482](https://github.com/SAP/ui5-webcomponents-react/issues/482)) ([c7475b4](https://github.com/SAP/ui5-webcomponents-react/commit/c7475b40c393643f79e2ddc3993e53b36e8438ec))

## [0.9.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.1...v0.9.2) (2020-05-06)

### Bug Fixes

- **AnalyticalTable:** fix header text collision with sort/group/filter icons ([#478](https://github.com/SAP/ui5-webcomponents-react/issues/478)) ([eb36865](https://github.com/SAP/ui5-webcomponents-react/commit/eb368655ca85bff73059def88cd875a6ca986492))
- **Charts - New:** fix crash in label truncation if value is null or undefined ([#476](https://github.com/SAP/ui5-webcomponents-react/issues/476)) ([9628ae0](https://github.com/SAP/ui5-webcomponents-react/commit/9628ae083b6625aa5a0bdfda1bc8363d32bc4e57))

## [0.9.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0...v0.9.1) (2020-05-04)

### Bug Fixes

- **AnalyticalTable:** calculate scrollbar width only if table is scrollable ([#470](https://github.com/SAP/ui5-webcomponents-react/issues/470)) ([ddd19fe](https://github.com/SAP/ui5-webcomponents-react/commit/ddd19fe662c8f633ebc597b286faf8c201551d05)), closes [#467](https://github.com/SAP/ui5-webcomponents-react/issues/467)
- **web-components-wrapper:** don't generate default props for empty strings ([#469](https://github.com/SAP/ui5-webcomponents-react/issues/469)) ([48505d9](https://github.com/SAP/ui5-webcomponents-react/commit/48505d9e2e375f640a2ed282f97bab1dd650676f))

# [0.9.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.0.0...v0.9.0) (2020-04-30)

You can find the most important changes and how to migrate to `v0.9.0` in our [Migration Guide](https://github.com/SAP/ui5-webcomponents-react/blob/main/docs/MigrationGuide.stories.mdx).

**Note:** Version bump only for package ui5-webcomponents-react-release

# [0.9.0-rc.18](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.17...v0.9.0-rc.18) (2020-04-29)

### Bug Fixes

- **AnalyticalTable:** support RTL ([#466](https://github.com/SAP/ui5-webcomponents-react/issues/466)) ([a99b183](https://github.com/SAP/ui5-webcomponents-react/commit/a99b183fbe8009f65b5b8af825cb85f159db4162)), closes [#460](https://github.com/SAP/ui5-webcomponents-react/issues/460)
- **Charts - New:** fix rendering of x and y axis ticks ([#462](https://github.com/SAP/ui5-webcomponents-react/issues/462)) ([e94b663](https://github.com/SAP/ui5-webcomponents-react/commit/e94b663f729483cf0ab7c97d422617315b4b3e4c))
- **Charts - New:** tooltip supports dark theme ([#465](https://github.com/SAP/ui5-webcomponents-react/issues/465)) ([e66ff58](https://github.com/SAP/ui5-webcomponents-react/commit/e66ff58318156e0ba8ece08aaf4d679ac3a9dd28))
- **ComposedChart:** fix padding calculation for vertical layout ([#464](https://github.com/SAP/ui5-webcomponents-react/issues/464)) ([9347f16](https://github.com/SAP/ui5-webcomponents-react/commit/9347f161462715cd99ec84b64ce5376257ab4443))
- **MessageBox:** enable closing with esc key ([#463](https://github.com/SAP/ui5-webcomponents-react/issues/463)) ([3377b75](https://github.com/SAP/ui5-webcomponents-react/commit/3377b75c5fbae24db8f599afc72e2b18974ad7cc))

# [0.9.0-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.16...v0.9.0-rc.17) (2020-04-28)

### Bug Fixes

- **AnalyticalTable:** debounce resize handler ([#454](https://github.com/SAP/ui5-webcomponents-react/issues/454)) ([f1a5a6e](https://github.com/SAP/ui5-webcomponents-react/commit/f1a5a6e882647e071f0ab2cb29c3d6b5395d7456))
- **AnalyticalTable:** fix passing styles object to AnalyticalTable ([#449](https://github.com/SAP/ui5-webcomponents-react/issues/449)) ([e3499ee](https://github.com/SAP/ui5-webcomponents-react/commit/e3499ee1ea8b58de269f95087ba583b1e8f90d7d))
- **Bar:** make slot props optional ([#450](https://github.com/SAP/ui5-webcomponents-react/issues/450)) ([5e490d8](https://github.com/SAP/ui5-webcomponents-react/commit/5e490d8072876c42d10f90d9b2843e5102e8e3be))
- **charts:** debounce recalculate size ([#456](https://github.com/SAP/ui5-webcomponents-react/issues/456)) ([d35f861](https://github.com/SAP/ui5-webcomponents-react/commit/d35f861f3145a078286b858afb1fef3e2ee405e4))
- **Charts - New:** automatic reduction of label elements ([#451](https://github.com/SAP/ui5-webcomponents-react/issues/451)) ([3d3bab2](https://github.com/SAP/ui5-webcomponents-react/commit/3d3bab2b8442366c18cf1884e6c6549ecd3271b5))
- **Charts - New:** fix rules of hooks & consistent margin calculation ([#459](https://github.com/SAP/ui5-webcomponents-react/issues/459)) ([951fb3c](https://github.com/SAP/ui5-webcomponents-react/commit/951fb3cfe26544960ba1f0abdbee1c5ee87d9617))

# [0.9.0-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.15...v0.9.0-rc.16) (2020-04-22)

### Bug Fixes

- **AnalyticalTable:** fix multi-select checkbox ([#445](https://github.com/SAP/ui5-webcomponents-react/issues/445)) ([2ed6a98](https://github.com/SAP/ui5-webcomponents-react/commit/2ed6a9817bc6c5dd8d349a15db8b8d39a2391ea7))
- **AnalyticalTable:** header should respect hAlign as well ([#438](https://github.com/SAP/ui5-webcomponents-react/issues/438)) ([79c9f3f](https://github.com/SAP/ui5-webcomponents-react/commit/79c9f3f1e77399c0c5edf23b498e80bc1bc37246))
- **AnalyticalTable:** remove ResizeObserver condition to avoid race conditions ([#444](https://github.com/SAP/ui5-webcomponents-react/issues/444)) ([830ab14](https://github.com/SAP/ui5-webcomponents-react/commit/830ab146ef30affdb46659442b7904b16f34e3c3))
- **Charts:** Add hcb and hcw support for charts. ([#441](https://github.com/SAP/ui5-webcomponents-react/issues/441)) ([a7ffcd6](https://github.com/SAP/ui5-webcomponents-react/commit/a7ffcd67b4cca7da3c6f1ad450e1e4673e41c55f))
- **withWebComponent:** fix handling of react fragments as slots ([#446](https://github.com/SAP/ui5-webcomponents-react/issues/446)) ([66a8344](https://github.com/SAP/ui5-webcomponents-react/commit/66a8344a26a84f8be7037353062a24981b0268b4))

### Features

- **Charts - New:** improve autoscaling of axis ticks ([#447](https://github.com/SAP/ui5-webcomponents-react/issues/447)) ([a763bb8](https://github.com/SAP/ui5-webcomponents-react/commit/a763bb8c742382fb9c247a29bc0cb728b81a4812))
- add slot props and deprecated render methods ([#436](https://github.com/SAP/ui5-webcomponents-react/issues/436)) ([018337f](https://github.com/SAP/ui5-webcomponents-react/commit/018337f6252a2bf9291a66e415d38226645ad932))

# [0.9.0-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.14...v0.9.0-rc.15) (2020-04-16)

### Bug Fixes

- **AnalyticalTable:** don't select row when an actionable element was clicked ([#432](https://github.com/SAP/ui5-webcomponents-react/issues/432)) ([8c31818](https://github.com/SAP/ui5-webcomponents-react/commit/8c318187de5eb70b6412caaffd090adc65f5703f)), closes [#428](https://github.com/SAP/ui5-webcomponents-react/issues/428)
- **AnalyticalTable:** use correct border-bottom for selected row ([e65d8da](https://github.com/SAP/ui5-webcomponents-react/commit/e65d8da6b064bac53a36c3634f711b18984eadf8))

### Features

- **cra-template:** add test setup and use latest version + docs ([#433](https://github.com/SAP/ui5-webcomponents-react/issues/433)) ([961dec7](https://github.com/SAP/ui5-webcomponents-react/commit/961dec781e379da8e76ab02b4103c59c1adafcf6))

# [0.9.0-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.13...v0.9.0-rc.14) (2020-04-10)

### Bug Fixes

- **Framework:** fix sideEffect-full files in react production build ([f5c02b1](https://github.com/SAP/ui5-webcomponents-react/commit/f5c02b18e56e7b1f72e89a095c737c83de626eab))

# [0.9.0-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.12...v0.9.0-rc.13) (2020-04-09)

### Bug Fixes

- **AnalyticalTable:** move ResizeObserver creation into effect to avoid blank tables on second mount ([#420](https://github.com/SAP/ui5-webcomponents-react/issues/420)) ([a237d51](https://github.com/SAP/ui5-webcomponents-react/commit/a237d511c7a7c246ed549c59f582b1c076989879))
- **VariantManagement:** fix invalid hook calls ([#421](https://github.com/SAP/ui5-webcomponents-react/issues/421)) ([820d28d](https://github.com/SAP/ui5-webcomponents-react/commit/820d28def6316b3cff0e7b115e827e28d2765f8c))

### BREAKING CHANGES

- **VariantManagement:** rename prop `initialSelectedKey` to `selectedKey`

# [0.9.0-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.11...v0.9.0-rc.12) (2020-04-09)

### Bug Fixes

- **Device:** avoid modernizr to be treeshaked ([#419](https://github.com/SAP/ui5-webcomponents-react/issues/419)) ([3c8a1e2](https://github.com/SAP/ui5-webcomponents-react/commit/3c8a1e2ed92270d1af220331a49e267f095b9f46))

# [0.9.0-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.10...v0.9.0-rc.11) (2020-04-09)

### Bug Fixes

- **AnalyticalTable:** fix scrollbar issue on column reorder & initial horizontal scrolling ([#413](https://github.com/SAP/ui5-webcomponents-react/issues/413)) ([4665db7](https://github.com/SAP/ui5-webcomponents-react/commit/4665db7b06ccddff4a62dfa4712e07b1bd68de30))
- **Charts:** separate size monitoring for height and width ([#417](https://github.com/SAP/ui5-webcomponents-react/issues/417)) ([a771fd3](https://github.com/SAP/ui5-webcomponents-react/commit/a771fd3e570555682b09daaf15861233049618a7))
- **Framework:** fix side-effects in rollup build ([#414](https://github.com/SAP/ui5-webcomponents-react/issues/414)) ([b64fc5f](https://github.com/SAP/ui5-webcomponents-react/commit/b64fc5f568160b22294f94f5e2fe2e6702e88be0))
- **Grid:** fix incorrect layout when rendered before Device was initialized ([#418](https://github.com/SAP/ui5-webcomponents-react/issues/418)) ([cb62961](https://github.com/SAP/ui5-webcomponents-react/commit/cb629618a13a17b416005f88ee98238692c4dcea))
- **ThemingSupport:** don't load fiori_3 parameters twice ([#416](https://github.com/SAP/ui5-webcomponents-react/issues/416)) ([b5421a6](https://github.com/SAP/ui5-webcomponents-react/commit/b5421a639527519bdeefe8e6dfe2a3824901db49))

### Code Refactoring

- **withWebComponent:** new static wrapper & web components as peer dependency ([#412](https://github.com/SAP/ui5-webcomponents-react/issues/412)) ([dca9b9a](https://github.com/SAP/ui5-webcomponents-react/commit/dca9b9aa0f4820ab08710156710fb30a10a0b304))

### BREAKING CHANGES

- **withWebComponent:** the dependencies `@ui5/webcomponents`, `@ui5/webcomponents-fiori` and `@ui5/webcomponents-icons` are now `peerDependencies` and have to be installed next to `@ui5/webcomponents-react`

# [0.9.0-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.9...v0.9.0-rc.10) (2020-04-07)

### Bug Fixes

- **AnalyticalTable:** fix column filter and allow spaces as input ([#411](https://github.com/SAP/ui5-webcomponents-react/issues/411)) ([4003065](https://github.com/SAP/ui5-webcomponents-react/commit/40030659428e90679fd153f622c3c1aa544684d8))
- **AnalyticalTable:** skip first table paint as long as column width has not been calculated ([#406](https://github.com/SAP/ui5-webcomponents-react/issues/406)) ([528d048](https://github.com/SAP/ui5-webcomponents-react/commit/528d048705d162112d173e66d0a726873e397328))
- **AnalyticalTableColumnDefinition:** Add props typing to ComponenType ([#409](https://github.com/SAP/ui5-webcomponents-react/issues/409)) ([6e3d549](https://github.com/SAP/ui5-webcomponents-react/commit/6e3d549ade2359ddeadd7c5860b0c2ca51ac7d18))

### Code Refactoring

- **Popovers:** Remove custom logic ([#408](https://github.com/SAP/ui5-webcomponents-react/issues/408)) ([856df0b](https://github.com/SAP/ui5-webcomponents-react/commit/856df0b1cd2d349bcc8f607c87901906616027f8))

### Features

- **Charts - New:** new formatters and support large datasets ([#410](https://github.com/SAP/ui5-webcomponents-react/issues/410)) ([9c4c176](https://github.com/SAP/ui5-webcomponents-react/commit/9c4c176b403d7a3998b3f38728b58f917ee7a41f))

### BREAKING CHANGES

- **Popovers:** **Dialog**: Remove property `open`. You can now open a dialog by attaching a ref to the dialog and call the method `open()`.
- **Popovers:** **Popover**: Removed props `openBy`, `openByStyle`, `open` and `propagateOpenByClickEvent`. For opening a popover after e.g. a button click attach a ref to the popover and use the button click hander for calling `.openBy(event.target)` on the popover ref.
- **Popovers:** **ResponsivePopover**: Removed props `openBy`, `openByStyle`, `open` and `propagateOpenByClickEvent`. For opening a responsive popover after e.g. a button click attach a ref to the responsive popover and use the Button click hander for calling `.open(event.target)` on the responsive popover ref.

# [0.9.0-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.8...v0.9.0-rc.9) (2020-04-03)

### Bug Fixes

- **AnalyticalTable:** fix tree-table selection, add selectionBehavior prop + enum ([#401](https://github.com/SAP/ui5-webcomponents-react/issues/401)) ([7aab047](https://github.com/SAP/ui5-webcomponents-react/commit/7aab047ba2b66f49be06cb92f068ac96950aff20))
- **useViewportRange:** don't update state after unmount ([#402](https://github.com/SAP/ui5-webcomponents-react/issues/402)) ([6b8daef](https://github.com/SAP/ui5-webcomponents-react/commit/6b8daef07adf446fe31167530ff7e68fdcaa45a2))

### Features

- **AnalyticalTable:** add infiniteScroll and keyboard navigation for cells ([#397](https://github.com/SAP/ui5-webcomponents-react/issues/397)) ([c6b64ba](https://github.com/SAP/ui5-webcomponents-react/commit/c6b64ba2256f7e238d48e1dd72f244c24c96e396))
- **AnalyticalTable:** add possibility to clear sorting in column header ([#399](https://github.com/SAP/ui5-webcomponents-react/issues/399)) ([137da3f](https://github.com/SAP/ui5-webcomponents-react/commit/137da3fea2d390595afe18c13858166f2adc5461))
- **Framework:** update to ui5-webcomponents-rc.6 ([#392](https://github.com/SAP/ui5-webcomponents-react/issues/392)) ([84a3f90](https://github.com/SAP/ui5-webcomponents-react/commit/84a3f905f48e5ef12526a026b68a3c8faf4b5fe0)), closes [/github.com/SAP/ui5-webcomponents/blob/main/CHANGELOG.md#100-rc6-2020-03-27](https://github.com//github.com/SAP/ui5-webcomponents/blob/main/CHANGELOG.md/issues/100-rc6-2020-03-27) [#349](https://github.com/SAP/ui5-webcomponents-react/issues/349)
- **ThemeProvider:** add global css classes ([#400](https://github.com/SAP/ui5-webcomponents-react/issues/400)) ([d0c811d](https://github.com/SAP/ui5-webcomponents-react/commit/d0c811d981dce2684776de19e90b3c31fec84636))

### BREAKING CHANGES

- **AnalyticalTable:** replace `noSelectionColumn` prop with `selectionBehavior` enum
- **AnalyticalTable:** column option `groupable` replaced by `disableGroupBy: boolean`
- **AnalyticalTable:** column option `sortable` replaced by `disableSortBy: boolean`
- **AnalyticalTable:** column option `filterable` replaced by `disableFilters: boolean`
- **AnalyticalTable:** Enabling grouping, sorting or filtering on column level by e.g `disableGroupBy: false` will not overwrite the table overall setting in case e.g. `groupable={false}`
- **Framework:** Replace Avatar Component with `Avatar` UI5 Web Component
- **Framework:** Replace Carousel Component with `Carousel` UI5 Web Component
- **Framework:** Replace SegmentedButton Component with `SegmentedButton` UI5 Web Component
- **Framework:** Deleted SegmentedButtonItem, replaced by ToggleButton
- **Framework:** Remove MessageToast Component, replaced by `Toast` UI5 Web Component
- **Framework:** **ThemeProvider**: Remove prop `withToastContainer`
- **Framework:** **AvatarSize**: Remove value `Custom`
- **Framework:** **ButtonDesign**: Rename`Accept` to `Positive`
- **Framework:** **ButtonDesign**: Rename`Reject` to `Negative`
- **Framework:** **InputType**: Rename `Url` to `URL`
- **Framework:** **CarouselArrowsPlacement**: Rename `PageIndicator` to `Navigation`
- **Framework:** **BusyIndicator** : change default size of busy dots to `Medium`
- **Framework:** **Icon** : `src` property is removed in favor of `name`
- **Framework:** **MessageStrip** : replace icon property with icon slot to allow setting arbitrary content by the user
- **Framework:** **MultiComboBox** : Does not longer accept `StandardListItem` as child, use `MultiComboBoxItem` instead
- **Framework:** **ShellBar** : profile property is removed in favour of profile slot
- **Framework:** **TabContainer** : `onItemSelect` event is renamed to `onTabSelect` and the item event parameter is renamed to tab.
- **Framework:** **Card** : the property `subtitle` has been renamed to `subheading`
- **Framework:** **TextArea** : the property `maxLength` has been renamed to `maxlength`
- **Framework:** **ThemeProvider** : new prop `theme` is required for correct theming in addition to importing `import '@ui5/webcomponents-react/lib/ThemingSupport'`
- **Framework:** configuring of compact size is removed, use the `ui5-content-density-compact` CSS class to apply compact size.

# [0.9.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.7...v0.9.0-rc.8) (2020-04-01)

### Bug Fixes

- **AnalyticalTable:** avoid scrollbar overlaying last column ([#396](https://github.com/SAP/ui5-webcomponents-react/issues/396)) ([fb282c7](https://github.com/SAP/ui5-webcomponents-react/commit/fb282c7e453fdf3edfab23053e59bfc8879b7ad5))

# [0.9.0-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.6...v0.9.0-rc.7) (2020-03-31)

### Bug Fixes

- **Charts - New:** make secondary dimension configurable ([#395](https://github.com/SAP/ui5-webcomponents-react/issues/395)) ([0a57b51](https://github.com/SAP/ui5-webcomponents-react/commit/0a57b517f9aae6d7b883df6b36549513a5d08f07))
- **RTL:** add dir="rtl" to html tag when running in RTL ([#394](https://github.com/SAP/ui5-webcomponents-react/issues/394)) ([78c1f93](https://github.com/SAP/ui5-webcomponents-react/commit/78c1f9368a4ad4f005ff65986938dd7a83e7a389)), closes [#366](https://github.com/SAP/ui5-webcomponents-react/issues/366)

# [0.9.0-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.5...v0.9.0-rc.6) (2020-03-31)

### Bug Fixes

- **Charts - New:** Respect formatter for calculating label sizes ([#389](https://github.com/SAP/ui5-webcomponents-react/issues/389)) ([1acf528](https://github.com/SAP/ui5-webcomponents-react/commit/1acf52883bf44209ecbfe8bbe7eb21c0e201273b))
- **ObjectPage:** Don't wrap title and subtitle ([#390](https://github.com/SAP/ui5-webcomponents-react/issues/390)) ([193e8ef](https://github.com/SAP/ui5-webcomponents-react/commit/193e8efd32ff2d995f7f9231f16e63b924f75cab)), closes [#372](https://github.com/SAP/ui5-webcomponents-react/issues/372)
- **ThemeProvider:** Add Typing for JSSTheme ([98cb810](https://github.com/SAP/ui5-webcomponents-react/commit/98cb81080db1cb800b42af292023b4bd8581de17))

### Features

- **AnalyticalTable:** Add Highlight Column ([#391](https://github.com/SAP/ui5-webcomponents-react/issues/391)) ([69e648a](https://github.com/SAP/ui5-webcomponents-react/commit/69e648a3762f92f63108d04ffdc3af56194c4db4)), closes [#312](https://github.com/SAP/ui5-webcomponents-react/issues/312)
- **Charts -New:** add secondary dimension in charts ([#393](https://github.com/SAP/ui5-webcomponents-react/issues/393)) ([64c5d79](https://github.com/SAP/ui5-webcomponents-react/commit/64c5d79ab7dec6219d0adf8a13ec231f21ebd28a))

# [0.9.0-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.4...v0.9.0-rc.5) (2020-03-25)

### Bug Fixes

- **Event-System:** Polyfill old behaviour by fallback to event.target for details ([#385](https://github.com/SAP/ui5-webcomponents-react/issues/385)) ([7fdc725](https://github.com/SAP/ui5-webcomponents-react/commit/7fdc7258b97fe03baa846cae56772d506100be2d))
- **ObjectPage:** Fix event for changing selected section ([#386](https://github.com/SAP/ui5-webcomponents-react/issues/386)) ([034f8b9](https://github.com/SAP/ui5-webcomponents-react/commit/034f8b949adadea412a5ebad3d92f315fa0c2839)), closes [#384](https://github.com/SAP/ui5-webcomponents-react/issues/384)
- **ObjectPage:** Prevent infinite grow ([#383](https://github.com/SAP/ui5-webcomponents-react/issues/383)) ([9393af4](https://github.com/SAP/ui5-webcomponents-react/commit/9393af4b73929975c15eb980b3a68e35bec3cea9)), closes [#373](https://github.com/SAP/ui5-webcomponents-react/issues/373)

# [0.9.0-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.3...v0.9.0-rc.4) (2020-03-25)

### Bug Fixes

- **AnalyticalTable:** prevent overflow if rows are selectable ([#381](https://github.com/SAP/ui5-webcomponents-react/issues/381)) ([95d81b7](https://github.com/SAP/ui5-webcomponents-react/commit/95d81b7c9c02a69692183f8d4b70d4e3be4143f2)), closes [#380](https://github.com/SAP/ui5-webcomponents-react/issues/380)
- **Charts - New:** Resizing of chart area if long axis labels are used ([#382](https://github.com/SAP/ui5-webcomponents-react/issues/382)) ([cea495d](https://github.com/SAP/ui5-webcomponents-react/commit/cea495d9c240074e2cd66a3c5f5eaf7913d60d25))
- **Loader/Spinner/Grid:** Fix memory leaks by cleanup effects ([#379](https://github.com/SAP/ui5-webcomponents-react/issues/379)) ([058cae7](https://github.com/SAP/ui5-webcomponents-react/commit/058cae7f1f60705f4d2eb9ab8df91a74c2d044e0)), closes [#335](https://github.com/SAP/ui5-webcomponents-react/issues/335)

# [0.9.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.2...v0.9.0-rc.3) (2020-03-24)

### Bug Fixes

- **AnalyticalTable:** remove z-index from Table Header which caused issues when using table in an ObjectPage ([#377](https://github.com/SAP/ui5-webcomponents-react/issues/377)) ([3f545c1](https://github.com/SAP/ui5-webcomponents-react/commit/3f545c1f1392944547285b5225037e8a4d67925e))
- **Grid:** Float items correctly in RTL mode ([#378](https://github.com/SAP/ui5-webcomponents-react/issues/378)) ([cdb1a14](https://github.com/SAP/ui5-webcomponents-react/commit/cdb1a14044d4b8eed5cf28119db4b6217ad4a92a)), closes [#371](https://github.com/SAP/ui5-webcomponents-react/issues/371)
- **ObjectPage:** hide first section Header ([#374](https://github.com/SAP/ui5-webcomponents-react/issues/374)) ([7b05ab9](https://github.com/SAP/ui5-webcomponents-react/commit/7b05ab9d95226c593eef027942de4a4cb65b860d))
- **SegmentedButton:** add intermediate css variable mappings in order to fix styling ([#375](https://github.com/SAP/ui5-webcomponents-react/issues/375)) ([86e962e](https://github.com/SAP/ui5-webcomponents-react/commit/86e962eb315381a1442b94b37baffeecff8638ca))

# [0.9.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.9.0-rc.1...v0.9.0-rc.2) (2020-03-23)

### Bug Fixes

- **ChartContainer - New:** data handling ([#363](https://github.com/SAP/ui5-webcomponents-react/issues/363)) ([fecef0d](https://github.com/SAP/ui5-webcomponents-react/commit/fecef0dcbed3c91187d03e95005cbdf6005aecf7))
- **ObjectPage:** RTL support for Header ([#369](https://github.com/SAP/ui5-webcomponents-react/issues/369)) ([338b8b3](https://github.com/SAP/ui5-webcomponents-react/commit/338b8b35ab4f24cc1f0afa8f24b365ee62860d60)), closes [#366](https://github.com/SAP/ui5-webcomponents-react/issues/366)

### Features

- **All Components:** Allow all HTML events to be passed ([#370](https://github.com/SAP/ui5-webcomponents-react/issues/370)) ([376f9c1](https://github.com/SAP/ui5-webcomponents-react/commit/376f9c1a2893f2c46dfff85583c7756f4b6651cc))
- **Css-Variables:** Add link styles ([#367](https://github.com/SAP/ui5-webcomponents-react/issues/367)) ([7595cdd](https://github.com/SAP/ui5-webcomponents-react/commit/7595cdd0648ba1c9cb45ca76c77ae78a1403e073))

# [0.9.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.7-rc.0...v0.9.0-rc.1) (2020-03-19)

### Bug Fixes

- **Polyfills:** Fix scrollTo polyfill import ([9fa2e1b](https://github.com/SAP/ui5-webcomponents-react/commit/9fa2e1b9fda72369596432165829cc26e7b4f110))

## [0.8.7-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.6...v0.8.7-rc.0) (2020-03-19)

### Bug Fixes

- **AnalyticalCard:** fix styling ([#360](https://github.com/SAP/ui5-webcomponents-react/issues/360)) ([d19c256](https://github.com/SAP/ui5-webcomponents-react/commit/d19c2561b9148d13637b3711164bacb45fb85cd2))
- **AnalyticalTable:** Always respect Cell option ([#359](https://github.com/SAP/ui5-webcomponents-react/issues/359)) ([8db97c3](https://github.com/SAP/ui5-webcomponents-react/commit/8db97c39d551cdba3be70ec0f49e03675853c746)), closes [#358](https://github.com/SAP/ui5-webcomponents-react/issues/358)
- **AnalyticalTable:** Expose React Table Container ref ([#341](https://github.com/SAP/ui5-webcomponents-react/issues/341)) ([5e8c32d](https://github.com/SAP/ui5-webcomponents-react/commit/5e8c32dba85d0be822005d9c8f8f3dbb31506d82))
- **AnalyticalTable:** Fix Loading Shimmer to take full table width ([#347](https://github.com/SAP/ui5-webcomponents-react/issues/347)) ([d31cf5c](https://github.com/SAP/ui5-webcomponents-react/commit/d31cf5cb4752facbc15789c60b087a6c61e3c96c)), closes [#346](https://github.com/SAP/ui5-webcomponents-react/issues/346)
- **AnalyticalTable:** Update react-table and fix TreeTable selection columns ([#344](https://github.com/SAP/ui5-webcomponents-react/issues/344)) ([7a46d2d](https://github.com/SAP/ui5-webcomponents-react/commit/7a46d2d845d145e5cfb6ccdac396d58b10f775a3)), closes [#333](https://github.com/SAP/ui5-webcomponents-react/issues/333) [#336](https://github.com/SAP/ui5-webcomponents-react/issues/336)
- **Charts:** Create Typings for new Charts ([89fca41](https://github.com/SAP/ui5-webcomponents-react/commit/89fca41ad4ac286cbd4324c533719bf370149225))
- **ThemingParameters:** Add temporary quick fix for missing variables ([#350](https://github.com/SAP/ui5-webcomponents-react/issues/350)) ([ef1934a](https://github.com/SAP/ui5-webcomponents-react/commit/ef1934a9d27ccb6168a345236729bdbdddb29cce))

### Code Refactoring

- **ThemeProvider:** Remove JSSProvider and simplify all tests ([#355](https://github.com/SAP/ui5-webcomponents-react/issues/355)) ([db50f30](https://github.com/SAP/ui5-webcomponents-react/commit/db50f3060096b801654fc64f7ea9dc532f1d3778))

### Features

- **Charts:** Create new SVG based charts ([#325](https://github.com/SAP/ui5-webcomponents-react/issues/325)) ([0e4fb72](https://github.com/SAP/ui5-webcomponents-react/commit/0e4fb72753772a5e09d51fd852fdfad6b01d9b4b)), closes [#280](https://github.com/SAP/ui5-webcomponents-react/issues/280)
- **ObjectPage:** Add 'Pin-Header' button ([#354](https://github.com/SAP/ui5-webcomponents-react/issues/354)) ([0e5e9b6](https://github.com/SAP/ui5-webcomponents-react/commit/0e5e9b658fc0aff0304dae952284d337e89e9d2c)), closes [#345](https://github.com/SAP/ui5-webcomponents-react/issues/345) [#334](https://github.com/SAP/ui5-webcomponents-react/issues/334) [#248](https://github.com/SAP/ui5-webcomponents-react/issues/248)
- **ThemingParameters:** Switch to offical Theme Designer Parameters ([#348](https://github.com/SAP/ui5-webcomponents-react/issues/348)) ([dc6f94e](https://github.com/SAP/ui5-webcomponents-react/commit/dc6f94e73fe0dd9c2828fdf222a5b8135f5721e4)), closes [#240](https://github.com/SAP/ui5-webcomponents-react/issues/240)

### BREAKING CHANGES

- **ThemeProvider:** ThemeProvider does not longer render a JSSProvider and the `jss`-prop is removed. If you need a custom JSS setup, please render your own JSSProvider.

## [0.8.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.5...v0.8.6) (2020-03-09)

### Bug Fixes

- **AnalyticalTable:** Don't modify read-only classList ([#339](https://github.com/SAP/ui5-webcomponents-react/issues/339)) ([65f3876](https://github.com/SAP/ui5-webcomponents-react/commit/65f3876ea64d92dc4551f1f4f7cd76b7453af3fe))

## [0.8.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.4...v0.8.5) (2020-02-20)

### Bug Fixes

- **AnalyticalTable:** fix sorting with minRows ([#327](https://github.com/SAP/ui5-webcomponents-react/issues/327)) ([11b6321](https://github.com/SAP/ui5-webcomponents-react/commit/11b63214c24c5e72ee9dee75da9e915de18c19a8))
- **Bar:** Adjust alignment and add Bar design ([#320](https://github.com/SAP/ui5-webcomponents-react/issues/320)) ([117c9f3](https://github.com/SAP/ui5-webcomponents-react/commit/117c9f350a238ea950335dabfa8b9a0e47201dec))

## [0.8.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.3...v0.8.4) (2020-02-13)

### Bug Fixes

- **AnalyticalTable:** fire onRowSelected when header select all chechbox changes ([5910581](https://github.com/SAP/ui5-webcomponents-react/commit/59105811bc00c3eed4d55df147f872c4aff312c9))
- **AnalyticalTable:** fixed alternateRowColor sort bug ([#316](https://github.com/SAP/ui5-webcomponents-react/issues/316)) ([ee37009](https://github.com/SAP/ui5-webcomponents-react/commit/ee3700957056ba188cf5c62699db485a70bcc98c))
- **Avatar:** Adjust icon size in sync with Avatar Size ([#317](https://github.com/SAP/ui5-webcomponents-react/issues/317)) ([a3af613](https://github.com/SAP/ui5-webcomponents-react/commit/a3af613c6431eec039a74ae20bb28ddd1e94f076))
- **base:** Mark polyfills as sideEffects ([83963d1](https://github.com/SAP/ui5-webcomponents-react/commit/83963d1dd3a19324a0a83aece126adfa981b958d))
- **withWebComponent:** Add handler of events those are not specified in metadata of ui5-webcomponents ([#315](https://github.com/SAP/ui5-webcomponents-react/issues/315)) ([978b126](https://github.com/SAP/ui5-webcomponents-react/commit/978b126e9c01213acaa3f0509deb2457e3b35122))

## [0.8.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.2...v0.8.3) (2020-02-11)

### Bug Fixes

- **AnalyticalTable:** Always render selection column as first column ([75a43a3](https://github.com/SAP/ui5-webcomponents-react/commit/75a43a3f55034ec00b7ba321f9e6abaa63187bb7)), closes [#311](https://github.com/SAP/ui5-webcomponents-react/issues/311)

## [0.8.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.1...v0.8.2) (2020-02-10)

### Bug Fixes

- **AnalyticalTable:** Show selection column with select all in header ([#310](https://github.com/SAP/ui5-webcomponents-react/issues/310)) ([b60842c](https://github.com/SAP/ui5-webcomponents-react/commit/b60842c4790a29a6aa817509834905c1e59d03d4))

## [0.8.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.8.0...v0.8.1) (2020-02-06)

### Bug Fixes

- **AnalyticalTable:** fix flickering background colors when alternateRowColors is active ([#303](https://github.com/SAP/ui5-webcomponents-react/issues/303)) ([553c504](https://github.com/SAP/ui5-webcomponents-react/commit/553c5048065802b5f3b772a60d6e37ede1f0d2b4))
- **AnalyticalTable:** Fix intendation for Tree Table Level 4 and deeper ([9fe072c](https://github.com/SAP/ui5-webcomponents-react/commit/9fe072ce9f447570fd1239242fa9ac705b0a2838))
- **AnalyticalTable:** fix minRows + loading behaviour ([#304](https://github.com/SAP/ui5-webcomponents-react/issues/304)) ([253a0c8](https://github.com/SAP/ui5-webcomponents-react/commit/253a0c8b2d949ea266423d29ca4e415fc3ebd4d2))
- **withWebComponent:** Fix crash if WebComponent is not present yet ([c1cbb8d](https://github.com/SAP/ui5-webcomponents-react/commit/c1cbb8dc128568b9e0ed8d0d0919b06a50799d61))

# [0.8.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.3...v0.8.0) (2020-02-04)

### Bug Fixes

- **AnalyticalTable:** fix broken empty row visualization ([#296](https://github.com/SAP/ui5-webcomponents-react/issues/296)) ([c76f199](https://github.com/SAP/ui5-webcomponents-react/commit/c76f19909127e12caddf12279f4bdfcf2556eb99))
- **AnalyticalTable:** Table should always call the most recent version of onColumnsReordered ([#301](https://github.com/SAP/ui5-webcomponents-react/issues/301)) ([3b9e97c](https://github.com/SAP/ui5-webcomponents-react/commit/3b9e97c2832d35d3c53f6ecce80a03fcd24ab730))
- **ObjectPage:** fix crash when unmounted ObjectPage tries to asynchronously set scrollbar height ([#294](https://github.com/SAP/ui5-webcomponents-react/issues/294)) ([7ed965e](https://github.com/SAP/ui5-webcomponents-react/commit/7ed965e0187d0fd767fee0a778fa6834099e3a1e))

### Features

- **AnalyticalTable:** add experimental feature to determine column widths based on content ([#295](https://github.com/SAP/ui5-webcomponents-react/issues/295)) ([88a98ce](https://github.com/SAP/ui5-webcomponents-react/commit/88a98ce5d866bfe7ef89d004a74d6f760ad62ce9))

## [0.7.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.2...v0.7.3) (2020-01-24)

### Bug Fixes

- **AnalyticalTable:** Fix hAlign and vAlign attributes on column ([#290](https://github.com/SAP/ui5-webcomponents-react/issues/290)) ([49d125e](https://github.com/SAP/ui5-webcomponents-react/commit/49d125e90f0d685e39d77111566629d4466a30a3))
- **Form:** Accept common props ([#291](https://github.com/SAP/ui5-webcomponents-react/issues/291)) ([12c3d79](https://github.com/SAP/ui5-webcomponents-react/commit/12c3d799764d06846a27d9ccea84fc4ad270ae58))

## [0.7.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.1...v0.7.2) (2020-01-23)

### Bug Fixes

- **AnalyticalTable:** remove double scrollbars on windows ([#283](https://github.com/SAP/ui5-webcomponents-react/issues/283)) ([b269da3](https://github.com/SAP/ui5-webcomponents-react/commit/b269da3a7f850221dfd360b902a22c997cbf1259))
- **charts:** add some top padding on charts to prevent cut off labels ([#279](https://github.com/SAP/ui5-webcomponents-react/issues/279)) ([0b38e18](https://github.com/SAP/ui5-webcomponents-react/commit/0b38e180496f8b6d167ecfe0950e1359a73ca7c3))
- **MicroBarChart:** Add ellipsis and tooltip ([#289](https://github.com/SAP/ui5-webcomponents-react/issues/289)) ([41f6971](https://github.com/SAP/ui5-webcomponents-react/commit/41f69718a59d11b0ebbc77b3e493c2a69bd19629))
- **ObjectPage:** Don't crash when conditional rendering is used for children ([#284](https://github.com/SAP/ui5-webcomponents-react/issues/284)) ([5adfc15](https://github.com/SAP/ui5-webcomponents-react/commit/5adfc1585caa1d29815466b05f124960a12763e4))
- **ObjectPage:** fix empty section content when dynamically adding sections ([#282](https://github.com/SAP/ui5-webcomponents-react/issues/282)) ([bdf2c95](https://github.com/SAP/ui5-webcomponents-react/commit/bdf2c955266e67c8d6225b4bd2419cab98892533))
- **ObjectPage:** Fix floating of custom header content ([#288](https://github.com/SAP/ui5-webcomponents-react/issues/288)) ([c4568b9](https://github.com/SAP/ui5-webcomponents-react/commit/c4568b9f9e18821e3cda9246b41b1fade19392f1))
- **ObjectPage:** Fix size of collapsed avatar when passed as ReactElement ([#286](https://github.com/SAP/ui5-webcomponents-react/issues/286)) ([7e090ba](https://github.com/SAP/ui5-webcomponents-react/commit/7e090ba8f48d68982ab7ee8e30fefe1ac5bc7419))

## [0.7.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0...v0.7.1) (2020-01-21)

### Bug Fixes

- **AnalyticalTable:** re-enable setting isVisible on column to show/hide columns ([#278](https://github.com/SAP/ui5-webcomponents-react/issues/278)) ([624e84f](https://github.com/SAP/ui5-webcomponents-react/commit/624e84f876b6d421eba02bbfd07c223a1165b5d2))
- **Avatar:** Don't crash onClick when no handler is passed ([#276](https://github.com/SAP/ui5-webcomponents-react/issues/276)) ([eedb9f8](https://github.com/SAP/ui5-webcomponents-react/commit/eedb9f84f7266294f2d802fc9fc1103528196346)), closes [#272](https://github.com/SAP/ui5-webcomponents-react/issues/272)
- **Form:** Use shared context for Form and FormItem ([#275](https://github.com/SAP/ui5-webcomponents-react/issues/275)) ([b403bdc](https://github.com/SAP/ui5-webcomponents-react/commit/b403bdcce5bc57947c878b982206f1a4cb42cc80)), closes [#274](https://github.com/SAP/ui5-webcomponents-react/issues/274)
- **ObjectPage:** Don't wrap header content if image is an avatar ([#277](https://github.com/SAP/ui5-webcomponents-react/issues/277)) ([bd87102](https://github.com/SAP/ui5-webcomponents-react/commit/bd871023f902027b87ef848e13d79c86e3321d4f)), closes [#273](https://github.com/SAP/ui5-webcomponents-react/issues/273)

# [0.7.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.8...v0.7.0) (2020-01-17)

### Bug Fixes

- **AnalyticalTable:** Each column can have groupable, sortable, filterable options ([#264](https://github.com/SAP/ui5-webcomponents-react/issues/264)) ([7e8c01f](https://github.com/SAP/ui5-webcomponents-react/commit/7e8c01f0b45b4edcceb8274c818bebe2323d3ad4))
- **AnalyticalTable:** fix resize behavior of hidden columns and columns with fixed width ([#271](https://github.com/SAP/ui5-webcomponents-react/issues/271)) ([b6b829e](https://github.com/SAP/ui5-webcomponents-react/commit/b6b829e7d706a2eb71ad5fe2cb7f2b9381897208))
- **Loader:** Call usePassThroughHooks early return ([#266](https://github.com/SAP/ui5-webcomponents-react/issues/266)) ([0ee9a81](https://github.com/SAP/ui5-webcomponents-react/commit/0ee9a81575300290cb5ca3551d067a88c6daffab))

# [0.7.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.7...v0.7.0-rc.8) (2020-01-14)

### Bug Fixes

- **AnalyticalTable:** Fix resizing ([#261](https://github.com/SAP/ui5-webcomponents-react/issues/261)) ([6cbb35d](https://github.com/SAP/ui5-webcomponents-react/commit/6cbb35d9779167288d9499033e964da9833b93b6))
- **AnalyticalTable:** fix table resize for hidden columns ([#262](https://github.com/SAP/ui5-webcomponents-react/issues/262)) ([b3f155f](https://github.com/SAP/ui5-webcomponents-react/commit/b3f155f82966266c954b54d6626728e7e935df86))

### Features

- **Components:** Pass data-, aria- and id props to rendered component ([#263](https://github.com/SAP/ui5-webcomponents-react/issues/263)) ([295b8df](https://github.com/SAP/ui5-webcomponents-react/commit/295b8dfd6b3b947bf31a110e7b28bd4e55c1f652))

# [0.7.0-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.6...v0.7.0-rc.7) (2020-01-08)

### Bug Fixes

- **SegmentedButton:** check if ref to html element still exists before accessing members on it ([#260](https://github.com/SAP/ui5-webcomponents-react/issues/260)) ([c9788c9](https://github.com/SAP/ui5-webcomponents-react/commit/c9788c9))

# [0.7.0-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.5...v0.7.0-rc.6) (2019-12-20)

### Bug Fixes

- **AnalyticalTable:** Fix selectedRow background color with alernateRowColor ([98774d8](https://github.com/SAP/ui5-webcomponents-react/commit/98774d8))

# [0.7.0-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.1...v0.7.0-rc.5) (2019-12-20)

### Bug Fixes

- **AnalyticalTable:** fix wrong column order on consecutive column reorder events ([#233](https://github.com/SAP/ui5-webcomponents-react/issues/233)) ([f94a6ff](https://github.com/SAP/ui5-webcomponents-react/commit/f94a6ff))
- **base:** Fix modernizr side effect ([5436bd4](https://github.com/SAP/ui5-webcomponents-react/commit/5436bd4))
- **cra-template:** Fix package.json file name ([752f1b3](https://github.com/SAP/ui5-webcomponents-react/commit/752f1b3))
- **ObjectPage:** Prevent flickering and fix scroll to section ([#245](https://github.com/SAP/ui5-webcomponents-react/issues/245)) ([4731573](https://github.com/SAP/ui5-webcomponents-react/commit/4731573))
- **ShellBarItem:** Fix wrong typing ([#254](https://github.com/SAP/ui5-webcomponents-react/issues/254)) ([d2bc4c5](https://github.com/SAP/ui5-webcomponents-react/commit/d2bc4c5))

### Code Refactoring

- **AnalyticalTable:** update react-table and replace grid with absolute layout ([#238](https://github.com/SAP/ui5-webcomponents-react/issues/238)) ([e9bc297](https://github.com/SAP/ui5-webcomponents-react/commit/e9bc297))
- **ThemeProvider:** Remove custom Theme Injection ([#241](https://github.com/SAP/ui5-webcomponents-react/issues/241)) ([22729e2](https://github.com/SAP/ui5-webcomponents-react/commit/22729e2))

### Features

- **AnalyticalTable:** Add overscanCount prop ([#231](https://github.com/SAP/ui5-webcomponents-react/issues/231)) ([c939c32](https://github.com/SAP/ui5-webcomponents-react/commit/c939c32))
- **AnalyticalTable:** Add prop selectionMode ([#258](https://github.com/SAP/ui5-webcomponents-react/issues/258)) ([f322bd0](https://github.com/SAP/ui5-webcomponents-react/commit/f322bd0))
- **AnalyticalTable:** Reordern columns with drag and drop ([#229](https://github.com/SAP/ui5-webcomponents-react/issues/229)) ([b208822](https://github.com/SAP/ui5-webcomponents-react/commit/b208822))
- **AnalyticalTable:** Update react-table to 7.0.0-beta.20 ([#237](https://github.com/SAP/ui5-webcomponents-react/issues/237)) ([530917c](https://github.com/SAP/ui5-webcomponents-react/commit/530917c))
- **AnalyticalTable:** Update react-table to v7.0.0-rc.15 ([#257](https://github.com/SAP/ui5-webcomponents-react/issues/257)) ([373fe5d](https://github.com/SAP/ui5-webcomponents-react/commit/373fe5d))
- **AnalyticalTable:** Update to react-table rc.10 ([#253](https://github.com/SAP/ui5-webcomponents-react/issues/253)) ([e24561c](https://github.com/SAP/ui5-webcomponents-react/commit/e24561c))
- **cra-template:** Add Template for UI5 Web Components React ([#244](https://github.com/SAP/ui5-webcomponents-react/issues/244)) ([fcb176c](https://github.com/SAP/ui5-webcomponents-react/commit/fcb176c))
- **Form:** initial Implementation ([#242](https://github.com/SAP/ui5-webcomponents-react/issues/242)) ([c4c2848](https://github.com/SAP/ui5-webcomponents-react/commit/c4c2848))
- **ObjectPage:** Introduce Breadcrumbs and key infos ([#246](https://github.com/SAP/ui5-webcomponents-react/issues/246)) ([6f44a72](https://github.com/SAP/ui5-webcomponents-react/commit/6f44a72))
- **WebComponents:** Update to v1.0.0-rc.5, add ProductSwitch Component ([#236](https://github.com/SAP/ui5-webcomponents-react/issues/236)) ([1a2c9b4](https://github.com/SAP/ui5-webcomponents-react/commit/1a2c9b4))

### BREAKING CHANGES

- **AnalyticalTable:** Replace prop `selectable` with `selectionMode`
- **AnalyticalTable:** Update `react-table` to `v7.0.0-rc.15`
- **AnalyticalTable:** replaced prop `selectedRowKey` with `selectedRowIds` (Object of rowIds)
- **AnalyticalTable:** Update to react-table `7.0.0-rc.10`
- **AnalyticalTable:** Update `react-table` to `7.0.0-rc.5`
- **ThemeProvider:** Removed prop `noInjectThemeProperties` as this is now handled by the UI5 Web Components
- **WebComponents:** Icon import paths changed from `@ui5/webcomponents/dist/icons/add.js` to `@ui5/webcomponents-icons/dist/icons/add.js`.
- **WebComponents:** **Icon**: prop `src` was renamed to `name`
- **WebComponents:** **Icon**: the `sap-icon://` prefix was removed
- **WebComponents:** **ShellBar** prop `icon` was renamed to `startButton`
- **WebComponents:** **ShellBarItem**: prop `src` was renamed to `name`
- **WebComponents:** **Card**: `avatar` prop now accepts a node instead of a string

Please also check the [UI5 Web Components Release Notes](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.5).

# [0.7.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.1...v0.7.0-rc.2) (2019-12-11)

### Bug Fixes

- **AnalyticalTable:** fix wrong column order on consecutive column reorder events ([#233](https://github.com/SAP/ui5-webcomponents-react/issues/233)) ([f94a6ff](https://github.com/SAP/ui5-webcomponents-react/commit/f94a6ff))
- **ObjectPage:** Prevent flickering and fix scroll to section ([#245](https://github.com/SAP/ui5-webcomponents-react/issues/245)) ([4731573](https://github.com/SAP/ui5-webcomponents-react/commit/4731573))

### Code Refactoring

- **AnalyticalTable:** update react-table and replace grid with absolute layout ([#238](https://github.com/SAP/ui5-webcomponents-react/issues/238)) ([e9bc297](https://github.com/SAP/ui5-webcomponents-react/commit/e9bc297))
- **ThemeProvider:** Remove custom Theme Injection ([#241](https://github.com/SAP/ui5-webcomponents-react/issues/241)) ([22729e2](https://github.com/SAP/ui5-webcomponents-react/commit/22729e2))

### Features

- **AnalyticalTable:** Add overscanCount prop ([#231](https://github.com/SAP/ui5-webcomponents-react/issues/231)) ([c939c32](https://github.com/SAP/ui5-webcomponents-react/commit/c939c32))
- **AnalyticalTable:** Reordern columns with drag and drop ([#229](https://github.com/SAP/ui5-webcomponents-react/issues/229)) ([b208822](https://github.com/SAP/ui5-webcomponents-react/commit/b208822))
- **AnalyticalTable:** Update react-table to 7.0.0-beta.20 ([#237](https://github.com/SAP/ui5-webcomponents-react/issues/237)) ([530917c](https://github.com/SAP/ui5-webcomponents-react/commit/530917c))
- **WebComponents:** Update to v1.0.0-rc.5, add ProductSwitch Component ([#236](https://github.com/SAP/ui5-webcomponents-react/issues/236)) ([1a2c9b4](https://github.com/SAP/ui5-webcomponents-react/commit/1a2c9b4))

### BREAKING CHANGES

- **AnalyticalTable:** Update `react-table` to `7.0.0-rc.5`
- **ThemeProvider:** Removed prop `noInjectThemeProperties` as this is now handled by the UI5 Web Components
- **WebComponents:** Icon import paths changed from `@ui5/webcomponents/dist/icons/add.js` to `@ui5/webcomponents-icons/dist/icons/add.js`.
- **WebComponents:** **Icon**: prop `src` was renamed to `name`
- **WebComponents:** **Icon**: the `sap-icon://` prefix was removed
- **WebComponents:** **ShellBar** prop `icon` was renamed to `startButton`
- **WebComponents:** **ShellBarItem**: prop `src` was renamed to `name`
- **WebComponents:** **Card**: `avatar` prop now accepts a node instead of a string

Please also check the [UI5 Web Components Release Notes](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.5).

# [0.7.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.7.0-rc.0...v0.7.0-rc.1) (2019-11-19)

### Bug Fixes

- **AnalyticalTable:** Loading Placeholder now respects show prop of columns ([#224](https://github.com/SAP/ui5-webcomponents-react/issues/224)) ([fe98dcb](https://github.com/SAP/ui5-webcomponents-react/commit/fe98dcb))
- **AnalyticalTable:** Resize table content correctly if columns are hidden or minWidth is set ([#228](https://github.com/SAP/ui5-webcomponents-react/issues/228)) ([af1aadc](https://github.com/SAP/ui5-webcomponents-react/commit/af1aadc))
- **Text:** Show ellipsis if text is overflowing at default width ([#225](https://github.com/SAP/ui5-webcomponents-react/issues/225)) ([5b78651](https://github.com/SAP/ui5-webcomponents-react/commit/5b78651))

# [0.7.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.2...v0.7.0-rc.0) (2019-11-12)

### Bug Fixes

- **AnalyticalTable:** Allow copy cell values in non-selectable mode ([#210](https://github.com/SAP/ui5-webcomponents-react/issues/210)) ([2e1e339](https://github.com/SAP/ui5-webcomponents-react/commit/2e1e339))
- **AnalyticalTable:** Fix overscan count ([#208](https://github.com/SAP/ui5-webcomponents-react/issues/208)) ([a975e62](https://github.com/SAP/ui5-webcomponents-react/commit/a975e62))
- **AnalyticalTable:** Fix scrolling and resizing ([#206](https://github.com/SAP/ui5-webcomponents-react/issues/206)) ([fe50a43](https://github.com/SAP/ui5-webcomponents-react/commit/fe50a43))
- **AnalyticalTable:** Fixed resizable columns and horizontal scrolling ([#211](https://github.com/SAP/ui5-webcomponents-react/issues/211)) ([b289749](https://github.com/SAP/ui5-webcomponents-react/commit/b289749))
- **AnalyticalTable:** return correct item key for rerenders ([#216](https://github.com/SAP/ui5-webcomponents-react/issues/216)) ([4b1891f](https://github.com/SAP/ui5-webcomponents-react/commit/4b1891f))
- **Notification:** Add onClose prop, fix semantic-icon size ([#220](https://github.com/SAP/ui5-webcomponents-react/issues/220)) ([ed6ae9b](https://github.com/SAP/ui5-webcomponents-react/commit/ed6ae9b))
- **Notification:** Removed/renamed props to adopt to UI5-Webcomponents conventions ([#223](https://github.com/SAP/ui5-webcomponents-react/issues/223)) ([5ac74de](https://github.com/SAP/ui5-webcomponents-react/commit/5ac74de))
- **ObjectPage:** enable scroll by dragging scrollbar ([#209](https://github.com/SAP/ui5-webcomponents-react/issues/209)) ([58b708d](https://github.com/SAP/ui5-webcomponents-react/commit/58b708d))
- **SegmentedButton:** call onClick prop on SegmentedButtonItem if set ([#218](https://github.com/SAP/ui5-webcomponents-react/issues/218)) ([bc9bef3](https://github.com/SAP/ui5-webcomponents-react/commit/bc9bef3))

### Features

- **AnalyticalTable:** Add prop alternateRowColor ([#212](https://github.com/SAP/ui5-webcomponents-react/issues/212)) ([d82d2d9](https://github.com/SAP/ui5-webcomponents-react/commit/d82d2d9))
- **AnalyticalTable:** Refactoring, add onRowExpandChange and placeholder loading ([#207](https://github.com/SAP/ui5-webcomponents-react/issues/207)) ([2ae4bf6](https://github.com/SAP/ui5-webcomponents-react/commit/2ae4bf6))
- **Notifications:** Add Notification and NotificationGroup component ([#171](https://github.com/SAP/ui5-webcomponents-react/issues/171)) ([78200e2](https://github.com/SAP/ui5-webcomponents-react/commit/78200e2))
- **ObjectPage:** Enable selecting a subSection by prop ([#213](https://github.com/SAP/ui5-webcomponents-react/issues/213)) ([f927ab3](https://github.com/SAP/ui5-webcomponents-react/commit/f927ab3))
- **polyfills:** Add Safari Polyfill ([#219](https://github.com/SAP/ui5-webcomponents-react/issues/219)) ([1801269](https://github.com/SAP/ui5-webcomponents-react/commit/1801269))

### BREAKING CHANGES

- **AnalyticalTable:** Removed unused prop `cellHeight`, use `rowHeight` instead
- **AnalyticalTable:** Removed unused prop `reactTableProps`
- **AnalyticalTable:** Removed unused prop `getTableProps`
- **AnalyticalTable:** Removed unused prop `getHeaderGroupsProps`
- **AnalyticalTable:** Removed unused prop `getHeaderProps`
- **AnalyticalTable:** Removed unused prop `getRowProps`
- **AnalyticalTable:** Removed unused prop `getCellProps`

## [0.6.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.1...v0.6.2) (2019-10-23)

### Bug Fixes

- **AnalyticalTable:** Add missing property to dependency array ([#203](https://github.com/SAP/ui5-webcomponents-react/issues/203)) ([6b2a135](https://github.com/SAP/ui5-webcomponents-react/commit/6b2a135))

## [0.6.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0...v0.6.1) (2019-10-22)

### Bug Fixes

- **AnalyticalTable:** Fix column width reduce function ([#201](https://github.com/SAP/ui5-webcomponents-react/issues/201)) ([68bec1a](https://github.com/SAP/ui5-webcomponents-react/commit/68bec1a))

# [0.6.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.23...v0.6.0) (2019-10-21)

**Note:** Version bump only for package node-library-fiori-for-react-github.com-release

# [0.6.0-rc.23](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.22...v0.6.0-rc.23) (2019-10-21)

### Bug Fixes

- **AnalyticalTable:** Handle disableGrouping in column level ([#198](https://github.com/SAP/ui5-webcomponents-react/issues/198)) ([88b2a44](https://github.com/SAP/ui5-webcomponents-react/commit/88b2a44)), closes [#193](https://github.com/SAP/ui5-webcomponents-react/issues/193)

### Features

- **AnalyticalTable:** horizontal scrolling ([#199](https://github.com/SAP/ui5-webcomponents-react/issues/199)) ([0ad70bc](https://github.com/SAP/ui5-webcomponents-react/commit/0ad70bc))
- **Loader/Spinner:** Add `delay` prop ([#197](https://github.com/SAP/ui5-webcomponents-react/issues/197)) ([de2310d](https://github.com/SAP/ui5-webcomponents-react/commit/de2310d)), closes [#67](https://github.com/SAP/ui5-webcomponents-react/issues/67)

# [0.6.0-rc.22](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.21...v0.6.0-rc.22) (2019-10-18)

### Bug Fixes

- **AnalyticalTable:** Fix Grouping ([#190](https://github.com/SAP/ui5-webcomponents-react/issues/190)) ([12ecc5d](https://github.com/SAP/ui5-webcomponents-react/commit/12ecc5d)), closes [#117](https://github.com/SAP/ui5-webcomponents-react/issues/117)
- **ObjectPage:** render image in ObjectPage as img tag when a string is passed in ([#191](https://github.com/SAP/ui5-webcomponents-react/issues/191)) ([b2f6f1a](https://github.com/SAP/ui5-webcomponents-react/commit/b2f6f1a))

### BREAKING CHANGES

- **AnalyticalTable:** If used as a tree table, the prop `isTreeTable` is now mandatory

# [0.6.0-rc.21](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.20...v0.6.0-rc.21) (2019-10-18)

### Bug Fixes

- **SideNavigation:** Fix Rendering and Event Handling ([#189](https://github.com/SAP/ui5-webcomponents-react/issues/189)) ([dc70d57](https://github.com/SAP/ui5-webcomponents-react/commit/dc70d57))

# [0.6.0-rc.20](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.19...v0.6.0-rc.20) (2019-10-17)

### Bug Fixes

- **ObjecPage:** fix scrollbar width on windows ([#188](https://github.com/SAP/ui5-webcomponents-react/issues/188)) ([8af1a4c](https://github.com/SAP/ui5-webcomponents-react/commit/8af1a4c))

# [0.6.0-rc.19](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.18...v0.6.0-rc.19) (2019-10-16)

### Bug Fixes

- **FilterBar:** fix always showing Scrollbar on windows ([#187](https://github.com/SAP/ui5-webcomponents-react/issues/187)) ([8f85bc1](https://github.com/SAP/ui5-webcomponents-react/commit/8f85bc1))

# [0.6.0-rc.18](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.17...v0.6.0-rc.18) (2019-10-15)

### Features

- **AnalyticalTable:** control row selection by prop ([#186](https://github.com/SAP/ui5-webcomponents-react/issues/186)) ([b4fcec8](https://github.com/SAP/ui5-webcomponents-react/commit/b4fcec8))

# [0.6.0-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.16...v0.6.0-rc.17) (2019-10-15)

### Features

- **AnalyticalTable:** offer scrollTo and scrollToItem methods on table ref ([#185](https://github.com/SAP/ui5-webcomponents-react/issues/185)) ([4a1c25a](https://github.com/SAP/ui5-webcomponents-react/commit/4a1c25a))

# [0.6.0-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.15...v0.6.0-rc.16) (2019-10-14)

### Features

- **AnalyticalTable:** Added option to use tree-tables. ([#178](https://github.com/SAP/ui5-webcomponents-react/issues/178)) ([37c3c1f](https://github.com/SAP/ui5-webcomponents-react/commit/37c3c1f))

# [0.6.0-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.14...v0.6.0-rc.15) (2019-10-14)

### Bug Fixes

- **WebComponents:** Update to rc.4 ([#184](https://github.com/SAP/ui5-webcomponents-react/issues/184)) ([2cc3abc](https://github.com/SAP/ui5-webcomponents-react/commit/2cc3abc))

### Features

- **AnalytictalTable:** Added `onGroup` prop ([#183](https://github.com/SAP/ui5-webcomponents-react/issues/183)) ([1574057](https://github.com/SAP/ui5-webcomponents-react/commit/1574057))

### BREAKING CHANGES

- **AnalytictalTable:** Rename prop `pivotBy` to `groupBy`

# [0.6.0-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.13...v0.6.0-rc.14) (2019-10-10)

### Bug Fixes

- **withWebComponent:** Bind unknown events & cleanup ([#182](https://github.com/SAP/ui5-webcomponents-react/issues/182)) ([b6e2a66](https://github.com/SAP/ui5-webcomponents-react/commit/b6e2a66)), closes [#181](https://github.com/SAP/ui5-webcomponents-react/issues/181)

### BREAKING CHANGES

- **withWebComponent:** Removed `innerStyles` prop in favor of css variables and UI5's `addCustomCSS` API

# [0.6.0-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.12...v0.6.0-rc.13) (2019-10-10)

### Bug Fixes

- **Carousel:** Fix icon import ([#180](https://github.com/SAP/ui5-webcomponents-react/issues/180)) ([42e88af](https://github.com/SAP/ui5-webcomponents-react/commit/42e88af)), closes [#177](https://github.com/SAP/ui5-webcomponents-react/issues/177)

### Features

- **ObjectPage:** add alwaysShowContentHeader and showTitleInHeaderContent ([#179](https://github.com/SAP/ui5-webcomponents-react/issues/179)) ([cd63eff](https://github.com/SAP/ui5-webcomponents-react/commit/cd63eff))

# [0.6.0-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.11...v0.6.0-rc.12) (2019-10-09)

### Bug Fixes

- **AnalyticalTable:** add info in onRowSelected event whether row is selected or not ([#176](https://github.com/SAP/ui5-webcomponents-react/issues/176)) ([4d6eaa4](https://github.com/SAP/ui5-webcomponents-react/commit/4d6eaa4))

### Features

- **WebComponents:** Update to v1.0.0-rc.3 ([#175](https://github.com/SAP/ui5-webcomponents-react/issues/175)) ([f294e67](https://github.com/SAP/ui5-webcomponents-react/commit/f294e67))

### BREAKING CHANGES

- **WebComponents:** Configuration Script is now identified via `data-ui5-config` instead of `data-id="sap-ui-config"`
- **WebComponents:** `BusyIndicatorType` is renamed to `BusyIndicatorSize`
- **WebComponents:** `Popover`: stayOpenOnScroll is now removed
  Popover will no longer close when the browser is scrolled
  and its parent (opener) is visible in the viewport.
- **WebComponents:** `ListItem`: CSS variable --ui5-listitem-background-color is removed, set the desired background directly on the tag.
- **WebComponents:** `TableColumn`: width property of the ui5-table-column has been removed, use CSS to give width to the columns.
- **WebComponents:** `MultiComboBox`: property validateInput is removed,
  use the property allowCustomValues, note built in validation is enabled by default.
- **WebComponents:** `Icon`: SVG icons have to imported, e.g. `import @ui5/webcomponents/dist/icons/add';`

# [0.6.0-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.10...v0.6.0-rc.11) (2019-10-08)

### Bug Fixes

- **AnalyticalTable:** fix table row selection ([#174](https://github.com/SAP/ui5-webcomponents-react/issues/174)) ([9aa6380](https://github.com/SAP/ui5-webcomponents-react/commit/9aa6380))

# [0.6.0-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.9...v0.6.0-rc.10) (2019-10-02)

### Bug Fixes

- **AnalyticalTable:** Don't crash when no columns provided ([bed976b](https://github.com/SAP/ui5-webcomponents-react/commit/bed976b))

# [0.6.0-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.8...v0.6.0-rc.9) (2019-10-01)

### Bug Fixes

- **SideNavigation:** Don't render zero if no footerItems present ([#165](https://github.com/SAP/ui5-webcomponents-react/issues/165)) ([7e4946a](https://github.com/SAP/ui5-webcomponents-react/commit/7e4946a)), closes [#164](https://github.com/SAP/ui5-webcomponents-react/issues/164)
- **web-components:** Fix tooltip handling ([#166](https://github.com/SAP/ui5-webcomponents-react/issues/166)) ([d721e2b](https://github.com/SAP/ui5-webcomponents-react/commit/d721e2b)), closes [#164](https://github.com/SAP/ui5-webcomponents-react/issues/164)

# [0.6.0-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.7...v0.6.0-rc.8) (2019-09-30)

### Bug Fixes

- **charts:** Fix legend display ([#163](https://github.com/SAP/ui5-webcomponents-react/issues/163)) ([124dff4](https://github.com/SAP/ui5-webcomponents-react/commit/124dff4))

# [0.6.0-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.6...v0.6.0-rc.7) (2019-09-26)

### Bug Fixes

- **SideNavigation:** fix tooltip support ([#156](https://github.com/SAP/ui5-webcomponents-react/issues/156)) ([72cced3](https://github.com/SAP/ui5-webcomponents-react/commit/72cced3)), closes [#155](https://github.com/SAP/ui5-webcomponents-react/issues/155)

# [0.6.0-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.5...v0.6.0-rc.6) (2019-09-26)

### Features

- **Loader:** Initial Implementation ([#153](https://github.com/SAP/ui5-webcomponents-react/issues/153)) ([6621804](https://github.com/SAP/ui5-webcomponents-react/commit/6621804))

# [0.6.0-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.4...v0.6.0-rc.5) (2019-09-25)

### Bug Fixes

- **Charts:** dynamic chart size ([#154](https://github.com/SAP/ui5-webcomponents-react/issues/154)) ([1746a76](https://github.com/SAP/ui5-webcomponents-react/commit/1746a76))

# [0.6.0-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.2...v0.6.0-rc.4) (2019-09-25)

### Bug Fixes

- **lerna:** Update lerna version [ci skip] ([721fb63](https://github.com/SAP/ui5-webcomponents-react/commit/721fb63))
- **main:** Fix wrong Button import ([#151](https://github.com/SAP/ui5-webcomponents-react/issues/151)) ([05dbf7f](https://github.com/SAP/ui5-webcomponents-react/commit/05dbf7f))

# [0.6.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.6.0-rc.1...v0.6.0-rc.2) (2019-09-24)

### Features

- **Charts:** enable passing width and height in percentage ([#147](https://github.com/SAP/ui5-webcomponents-react/issues/147)) ([0d680ff](https://github.com/SAP/ui5-webcomponents-react/commit/0d680ff))

# [0.6.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.17...v0.6.0-rc.1) (2019-09-24)

### Bug Fixes

- **FilterBar:** Add scrolling and wrapping for small screens ([#143](https://github.com/SAP/ui5-webcomponents-react/issues/143)) ([55dc57d](https://github.com/SAP/ui5-webcomponents-react/commit/55dc57d))

### Code Refactoring

- **base:** Deleted withStyles HOC ([#145](https://github.com/SAP/ui5-webcomponents-react/issues/145)) ([d852576](https://github.com/SAP/ui5-webcomponents-react/commit/d852576))
- **framework:** Clean up legacy code and improve bundle size ([#135](https://github.com/SAP/ui5-webcomponents-react/issues/135)) ([7ab3122](https://github.com/SAP/ui5-webcomponents-react/commit/7ab3122))

### BREAKING CHANGES

- **base:** Delete `withStyles` export from `base` package
- **framework:** `base`: Removed `KeyCodes` export, please use `event.key` instead
- **framework:** `base`: Removed `pushElementBackInScreen`
- **framework:** `base`: Removed `fonts` exports, please use `parameters` instead

## [0.6.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.17...v0.6.1-rc.0) (2019-09-24)

### Code Refactoring

- **framework:** Clean up legacy code and improve bundle size ([#135](https://github.com/SAP/ui5-webcomponents-react/issues/135)) ([7ab3122](https://github.com/SAP/ui5-webcomponents-react/commit/7ab3122))

### BREAKING CHANGES

- **framework:** `base`: Removed `KeyCodes` export, please use `event.key` instead
- **framework:** `base`: Removed `pushElementBackInScreen`
- **framework:** `base`: Removed `fonts` exports, please use `parameters` instead

## [0.5.1-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.16...v0.5.1-rc.17) (2019-09-23)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.5.1-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.15...v0.5.1-rc.16) (2019-09-20)

### Features

- **SideNavigation:** Initial Component Implementation ([#132](https://github.com/SAP/ui5-webcomponents-react/issues/132)) ([da53e3e](https://github.com/SAP/ui5-webcomponents-react/commit/da53e3e))

## [0.5.1-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.14...v0.5.1-rc.15) (2019-09-18)

### Features

- **AnalyticalTable:** enable passing additional props to react-table ([#131](https://github.com/SAP/ui5-webcomponents-react/issues/131)) ([61cd83f](https://github.com/SAP/ui5-webcomponents-react/commit/61cd83f))

## [0.5.1-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.13...v0.5.1-rc.14) (2019-09-18)

### Bug Fixes

- **base:** Added missing react peer dependency ([#130](https://github.com/SAP/ui5-webcomponents-react/issues/130)) ([d899f11](https://github.com/SAP/ui5-webcomponents-react/commit/d899f11))

### Features

- **Breadcrumbs:** Initial Component Implementation ([#129](https://github.com/SAP/ui5-webcomponents-react/issues/129)) ([ada4c3a](https://github.com/SAP/ui5-webcomponents-react/commit/ada4c3a))

## [0.5.1-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.12...v0.5.1-rc.13) (2019-09-18)

### Code Refactoring

- **MessageBox:** Rename prop visible to open ([#128](https://github.com/SAP/ui5-webcomponents-react/issues/128)) ([1487862](https://github.com/SAP/ui5-webcomponents-react/commit/1487862))
- **ProgressIndicator:** Remove visible prop ([#126](https://github.com/SAP/ui5-webcomponents-react/issues/126)) ([100e6ff](https://github.com/SAP/ui5-webcomponents-react/commit/100e6ff))
- **SegmentedButton:** Remove visible prop and rename enabled ([#125](https://github.com/SAP/ui5-webcomponents-react/issues/125)) ([174447a](https://github.com/SAP/ui5-webcomponents-react/commit/174447a))

### BREAKING CHANGES

- **MessageBox:** `MessageBox`: Renamed prop `visible` to `open`
- **MessageBox:** `MessageBoxButton`: deleted export as this component was intended for internal use only
- **ProgressIndicator:** removed `visible` prop

[ci skip]

- **SegmentedButton:** `SegmentedButtonItem` removed `visible` prop, please use conditional rendering instead
- **SegmentedButton:** `SegmentedButton` and `SegmentedButtonItem` prop enabled is now renamed to disabled and logic is inverted
  [ci skip]

## [0.5.1-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.11...v0.5.1-rc.12) (2019-09-17)

### Features

- **AnalyticalTable:** add onSort callback to Table ([#123](https://github.com/SAP/ui5-webcomponents-react/issues/123)) ([de7843f](https://github.com/SAP/ui5-webcomponents-react/commit/de7843f))
- **AnalyticalTable:** make columns resizable ([#124](https://github.com/SAP/ui5-webcomponents-react/issues/124)) ([556ff59](https://github.com/SAP/ui5-webcomponents-react/commit/556ff59))

## [0.5.1-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.10...v0.5.1-rc.11) (2019-09-16)

### Bug Fixes

- **ThemeProvider:** create own style tag containing css variables ([#121](https://github.com/SAP/ui5-webcomponents-react/issues/121)) ([19d8cff](https://github.com/SAP/ui5-webcomponents-react/commit/19d8cff))

## [0.5.1-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.9...v0.5.1-rc.10) (2019-09-14)

### Bug Fixes

- **ThemeProvider:** wrapping injectThemeVariables in requestAnimationFrame so that it won´t interfere with style tag initialization ([#120](https://github.com/SAP/ui5-webcomponents-react/issues/120)) ([77cb45d](https://github.com/SAP/ui5-webcomponents-react/commit/77cb45d))

## [0.5.1-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.8...v0.5.1-rc.9) (2019-09-13)

### Bug Fixes

- **VariantManagement:** disabled prop disables onClick events ([#119](https://github.com/SAP/ui5-webcomponents-react/issues/119)) ([ccdf3dc](https://github.com/SAP/ui5-webcomponents-react/commit/ccdf3dc))

## [0.5.1-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.7...v0.5.1-rc.8) (2019-09-13)

### Code Refactoring

- **Table:** Update to react-table v7 ([#110](https://github.com/SAP/ui5-webcomponents-react/issues/110)) ([e1c5ad7](https://github.com/SAP/ui5-webcomponents-react/commit/e1c5ad7))

### BREAKING CHANGES

- **Table:** upgrade react-table from 6.10.0 to 7.0.0-alpha.32

## [0.5.1-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.6...v0.5.1-rc.7) (2019-08-29)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.5.1-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.5...v0.5.1-rc.6) (2019-08-29)

### Bug Fixes

- **build:** Generate correct typings for charts ([e529003](https://github.com/SAP/ui5-webcomponents-react/commit/e529003)), closes [#90](https://github.com/SAP/ui5-webcomponents-react/issues/90)

## [0.5.1-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.4...v0.5.1-rc.5) (2019-08-28)

### Features

- **Charts:** Pass current dataset to formatters ([#107](https://github.com/SAP/ui5-webcomponents-react/issues/107)) ([a8c7e96](https://github.com/SAP/ui5-webcomponents-react/commit/a8c7e96))

## [0.5.1-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.3...v0.5.1-rc.4) (2019-08-27)

### Documentation

- **Storybook:** Updated to 5.2 with Docs ([#106](https://github.com/SAP/ui5-webcomponents-react/issues/106)) ([45c0e21](https://github.com/SAP/ui5-webcomponents-react/commit/45c0e21))

### BREAKING CHANGES

- **Storybook:** Deleted internal component `CalendarHeader`
- **Storybook:** Deleted internal component `YearPicker`

## [0.5.1-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.2...v0.5.1-rc.3) (2019-08-23)

### Code Refactoring

- **tests:** Replace karma with jest ([#105](https://github.com/SAP/ui5-webcomponents-react/issues/105)) ([2ebd8ab](https://github.com/SAP/ui5-webcomponents-react/commit/2ebd8ab))

### BREAKING CHANGES

- **tests:** Deleted export for TabBase (internal component)
- **tests:** Deleted export for ListItem (internal component)
- **tests:** Deleted export for ListItemBase (internal component)
- **tests:** Deleted export for DayPicker (internal component)
- **tests:** Deleted export for MonthPicker (internal component)
- **tests:** Deleted export for Popup (internal component)

## [0.5.1-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.1...v0.5.1-rc.2) (2019-08-23)

### Features

- **ObjectPage:** Collapse header on scroll ([#104](https://github.com/SAP/ui5-webcomponents-react/issues/104)) ([6788b59](https://github.com/SAP/ui5-webcomponents-react/commit/6788b59))

## [0.5.1-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.1-rc.0...v0.5.1-rc.1) (2019-08-22)

### Features

- **Carousel:** Added Keyboard Navigation ([#103](https://github.com/SAP/ui5-webcomponents-react/issues/103)) ([e1299ed](https://github.com/SAP/ui5-webcomponents-react/commit/e1299ed))

## [0.5.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.5.0...v0.5.1-rc.0) (2019-08-20)

### Bug Fixes

- **Carousel:** Hide Pagination Bar if not required ([#101](https://github.com/SAP/ui5-webcomponents-react/issues/101)) ([d6ec9b2](https://github.com/SAP/ui5-webcomponents-react/commit/d6ec9b2))
- **Spinner:** Accept style prop ([#100](https://github.com/SAP/ui5-webcomponents-react/issues/100)) ([f7a7958](https://github.com/SAP/ui5-webcomponents-react/commit/f7a7958)), closes [#94](https://github.com/SAP/ui5-webcomponents-react/issues/94)

### Features

- **ThemeProvider:** Add jss and noInjectThemeProperties props ([#102](https://github.com/SAP/ui5-webcomponents-react/issues/102)) ([8237b22](https://github.com/SAP/ui5-webcomponents-react/commit/8237b22))

# [0.5.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.18...v0.5.0) (2019-08-15)

Combined Changelog from `0.4.1` to `0.5.0`

### Features

- **Charts:** Added lib export per chart ([#66](https://github.com/SAP/ui5-webcomponents-react/issues/66)) ([977cc25](https://github.com/SAP/ui5-webcomponents-react/commit/977cc25
- **FilterItem:** Add MultiSelect option to FilterTypes ([#79](https://github.com/SAP/ui5-webcomponents-react/issues/79)) ([0665824](https://github.com/SAP/ui5-webcomponents-react/commit/0665824))

### Bug Fixes

- **Charts:** Show Loading Placeholder ([#64](https://github.com/SAP/ui5-webcomponents-react/issues/64)) ([589f787](https://github.com/SAP/ui5-webcomponents-react/commit/589f787))
- **VariantManagement:** initialSelectedKey prop is working as intended ([#75](https://github.com/SAP/ui5-webcomponents-react/issues/75)) ([a5e4267](https://github.com/SAP/ui5-webcomponents-react/commit/a5e4267))
- **AnalyticalTable:** Header is now resizable ([#76](https://github.com/SAP/ui5-webcomponents-react/issues/76)) ([eadd61a](https://github.com/SAP/ui5-webcomponents-react/commit/eadd61a))
- **FilterBar:** Increase margin between FilterItems in FilterBar ([#80](https://github.com/SAP/ui5-webcomponents-react/issues/80)) ([ee94065](https://github.com/SAP/ui5-webcomponents-react/commit/ee94065))
- **ObjectPage:** Don't crash in default mode with only 1 child provided ([#81](https://github.com/SAP/ui5-webcomponents-react/issues/81)) ([2e5ddb5](https://github.com/SAP/ui5-webcomponents-react/commit/2e5ddb5))
- **Custom Components:** adding ref to CommonProps interface ([#84](https://github.com/SAP/ui5-webcomponents-react/issues/84)) ([bb612ec](https://github.com/SAP/ui5-webcomponents-react/commit/bb612ec))
- **charts:** Repeat the color palette if more datasets than colors are used ([#86](https://github.com/SAP/ui5-webcomponents-react/issues/86)) ([e22387c](https://github.com/SAP/ui5-webcomponents-react/commit/e22387c))

### Code Refactoring

- **Charts:** Update ref API and color maps ([#62](https://github.com/SAP/ui5-webcomponents-react/issues/62)) ([a343567](https://github.com/SAP/ui5-webcomponents-react/commit/a343567))
- **VariantManagement:** removed unused prop enabled ([#77](https://github.com/SAP/ui5-webcomponents-react/issues/77)) ([5080316](https://github.com/SAP/ui5-webcomponents-react/commit/5080316))

### BREAKING CHANGES

- **Charts:** `innerChartRef` is replaced by `ref`
- **Charts:** `sap_belize` and `sap_belize_plus` stylings are not longer exported
- **Charts:** Name of color variables for all themes changed. Now `sapUiChartAccent1` to `sapUiChartAccent12` plus `sapUiChartGood`, `sapUiChartBad` and `sapUiChartHighlight` are available
- **VariantManagement:** Removed prop `enabled`, please use `disabled` instead. This change should not affect your applications, because `enabled` was never implemented.
- **AnalyticalCard**: Prop `renderHeader` renamed to `header`, now accepting the React Element direclty
- **AnalyticalCardHeader**: Prop `loading` was removed as it was not part of the specs

## [0.4.2-rc.18](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.17...v0.4.2-rc.18) (2019-08-15)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.4.2-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.16...v0.4.2-rc.17) (2019-08-12)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.4.2-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.15...v0.4.2-rc.16) (2019-08-08)

### Bug Fixes

- **charts:** Repeat the color palette if more datasets than colors are used ([#86](https://github.com/SAP/ui5-webcomponents-react/issues/86)) ([e22387c](https://github.com/SAP/ui5-webcomponents-react/commit/e22387c))

## [0.4.2-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.14...v0.4.2-rc.15) (2019-08-05)

### Bug Fixes

- **Custom Components:** adding ref to CommonProps interface ([#84](https://github.com/SAP/ui5-webcomponents-react/issues/84)) ([bb612ec](https://github.com/SAP/ui5-webcomponents-react/commit/bb612ec))

## [0.4.2-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.13...v0.4.2-rc.14) (2019-08-05)

### Bug Fixes

- **FilterBar:** Increase margin between FilterItems in FilterBar ([#80](https://github.com/SAP/ui5-webcomponents-react/issues/80)) ([ee94065](https://github.com/SAP/ui5-webcomponents-react/commit/ee94065))
- **ObjectPage:** Don't crash in default mode with only 1 child provided ([#81](https://github.com/SAP/ui5-webcomponents-react/issues/81)) ([2e5ddb5](https://github.com/SAP/ui5-webcomponents-react/commit/2e5ddb5))

## [0.4.2-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.12...v0.4.2-rc.13) (2019-08-02)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.4.2-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.11...v0.4.2-rc.12) (2019-08-02)

### Bug Fixes

- **AnalyticalTable:** Header is now resizable ([#76](https://github.com/SAP/ui5-webcomponents-react/issues/76)) ([eadd61a](https://github.com/SAP/ui5-webcomponents-react/commit/eadd61a))

## [0.4.2-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.10...v0.4.2-rc.11) (2019-08-02)

### Features

- **FilterItem:** Add MultiSelect option to FilterTypes ([#79](https://github.com/SAP/ui5-webcomponents-react/issues/79)) ([0665824](https://github.com/SAP/ui5-webcomponents-react/commit/0665824))

## [0.4.2-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.9...v0.4.2-rc.10) (2019-08-02)

### Code Refactoring

- **VariantManagement:** removed unused prop enabled ([#77](https://github.com/SAP/ui5-webcomponents-react/issues/77)) ([5080316](https://github.com/SAP/ui5-webcomponents-react/commit/5080316))

### BREAKING CHANGES

- **VariantManagement:** Removed prop `enabled`, please use `disabled` instead. This change should not affect your applications, because `enabled` was never implemented.

## [0.4.2-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.8...v0.4.2-rc.9) (2019-07-31)

### Bug Fixes

- **VariantManagement:** initialSelectedKey prop is working as intended ([#75](https://github.com/SAP/ui5-webcomponents-react/issues/75)) ([a5e4267](https://github.com/SAP/ui5-webcomponents-react/commit/a5e4267))

## [0.4.2-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.7...v0.4.2-rc.8) (2019-07-29)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.4.2-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.6...v0.4.2-rc.7) (2019-07-29)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.4.2-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.5...v0.4.2-rc.6) (2019-07-25)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.4.2-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.4...v0.4.2-rc.5) (2019-07-24)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.4.2-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.1...v0.4.2-rc.4) (2019-07-23)

### Features

- **Charts:** Added lib export per chart ([#66](https://github.com/SAP/ui5-webcomponents-react/issues/66)) ([977cc25](https://github.com/SAP/ui5-webcomponents-react/commit/977cc25))

## [0.4.2-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.2...v0.4.2-rc.3) (2019-07-22)

### Features

- **Charts:** Added lib export per chart ([#66](https://github.com/SAP/ui5-webcomponents-react/issues/66)) ([977cc25](https://github.com/SAP/ui5-webcomponents-react/commit/977cc25))

## [0.4.2-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.1...v0.4.2-rc.2) (2019-07-22)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.4.2-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.2-rc.0...v0.4.2-rc.1) (2019-07-22)

### Bug Fixes

- **Charts:** Show Loading Placeholder ([#64](https://github.com/SAP/ui5-webcomponents-react/issues/64)) ([589f787](https://github.com/SAP/ui5-webcomponents-react/commit/589f787))

## [0.4.2-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1...v0.4.2-rc.0) (2019-07-19)

### Code Refactoring

- **Charts:** Update ref API and color maps ([#62](https://github.com/SAP/ui5-webcomponents-react/issues/62)) ([a343567](https://github.com/SAP/ui5-webcomponents-react/commit/a343567))

### BREAKING CHANGES

- **Charts:** `innerChartRef` is replaced by `ref`
- **Charts:** `sap_belize` and `sap_belize_plus` stylings are not longer exported
- **Charts:** Name of color variables for all themes changed. Now `sapUiChartAccent1` to `sapUiChartAccent12` plus `sapUiChartGood`, `sapUiChartBad` and `sapUiChartHighlight` are available

## [0.4.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1-rc.2...v0.4.1) (2019-07-19)

**Note:** Version bump only for package node-library-fiori-for-react-github.com-release

## [0.4.1-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1-rc.1...v0.4.1-rc.2) (2019-07-19)

### Bug Fixes

- **FilterItem:** BusyIndicator is displayed when loading prop is true ([#63](https://github.com/SAP/ui5-webcomponents-react/issues/63)) ([9d88985](https://github.com/SAP/ui5-webcomponents-react/commit/9d88985))

## [0.4.1-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.1-rc.0...v0.4.1-rc.1) (2019-07-17)

### Bug Fixes

- **AnalyticalTable:** BusyIndicator is displayed when loading prop is true ([#61](https://github.com/SAP/ui5-webcomponents-react/issues/61)) ([f841ead](https://github.com/SAP/ui5-webcomponents-react/commit/f841ead))

## [0.4.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.4.0...v0.4.1-rc.0) (2019-07-16)

### Bug Fixes

- **Spinner:** Enabled Spinning again ([#59](https://github.com/SAP/ui5-webcomponents-react/issues/59)) ([740891f](https://github.com/SAP/ui5-webcomponents-react/commit/740891f)), closes [#57](https://github.com/SAP/ui5-webcomponents-react/issues/57)

# [0.4.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.17...v0.4.0) (2019-07-15)

### Features

- **AnalyticalTable:** Added option to create pivot tables ([#47](https://github.com/SAP/ui5-webcomponents-react/issues/47)) ([71b546d](https://github.com/SAP/ui5-webcomponents-react/commit/71b546d))
- **ThemeProvider:** Read config from UI5 Web Components ([efee11f](https://github.com/SAP/ui5-webcomponents-react/commit/efee11f))
- **WebComponents**: Updated to v1.0.0-rc.2 (#51) ([8a40deb](https://github.com/SAP/ui5-webcomponents-react/commit/8a40deb)), closes [#51](https://github.com/SAP/ui5-webcomponents-react/issues/51)

### Bug Fixes

- **CSS-Variables:** remove trailing semicolon ([#53](https://github.com/SAP/ui5-webcomponents-react/issues/53)) ([f9d1daf](https://github.com/SAP/ui5-webcomponents-react/commit/f9d1daf)), closes [#49](https://github.com/SAP/ui5-webcomponents-react/issues/49)
- **ObjectPage:** Highlight selected section while scrolling ([#56](https://github.com/SAP/ui5-webcomponents-react/issues/56)) ([42a6a10](https://github.com/SAP/ui5-webcomponents-react/commit/42a6a10))
- **ObjectPage:** Added Hide Header Button ([#28](https://github.com/SAP/ui5-webcomponents-react/issues/28)) ([5509098](https://github.com/SAP/ui5-webcomponents-react/commit/5509098))
- **RadialChart:** Handle width and height prop correctly ([#52](https://github.com/SAP/ui5-webcomponents-react/issues/52)) ([2d3f091](https://github.com/SAP/ui5-webcomponents-react/commit/2d3f091))
- **ThemeProvider:** Only inject theme properties if they are not present ([#55](https://github.com/SAP/ui5-webcomponents-react/issues/55)) ([3ec61d5](https://github.com/SAP/ui5-webcomponents-react/commit/3ec61d5))
- **Table:** Fixed Table and adapt slot handling ([#50](https://github.com/SAP/ui5-webcomponents-react/issues/50)) ([2159ab1](https://github.com/SAP/ui5-webcomponents-react/commit/2159ab1))

### Code Refactoring

- **base:** Merge `styles` and `utils` into `base` ([#38](https://github.com/SAP/ui5-webcomponents-react/issues/38)) ([9309505](https://github.com/SAP/ui5-webcomponents-react/commit/9309505)), closes [#34](https://github.com/SAP/ui5-webcomponents-react/issues/34)
- **Custom Components:** Expose HTML Element via ref in every component ([#54](https://github.com/SAP/ui5-webcomponents-react/issues/54)) ([c285ee6](https://github.com/SAP/ui5-webcomponents-react/commit/c285ee6))
- **withWebComponent:** replace innerComponentRef with ref for Web Components ([#44](https://github.com/SAP/ui5-webcomponents-react/issues/44)) ([08982ba](https://github.com/SAP/ui5-webcomponents-react/commit/08982ba))

### BREAKING CHANGES

- **Button**: Use design with `ButtonDesign`, type with `ButtonType` is deleted
- **Button**: `onPress` renamed to `onClick`
- **Card**: `onHeaderPress` renamed to `onHeaderClick`
- **Custom Components:** All Components now expose their root html node/the encapsulated Web Component via ref instead of the React instance.
- **Dialog**: remove prop `noHeader`
- **Link**: `onPress` renamed to `onClick`
- **List**: `onItemPress` renamed to `onItemClick`
- **Link**: Use design with `LinkDesign`, type with `LinkType` is deleted
- **MessageStrip**: `hideIcon` and `hideCloseButton` are renamed to `noIcon` and `noCloseButton`
- **Popup**: remove prop `noHeader`
- **ResponsivePopover:** Deleted `ResponsivePopover`, please use the `Popover` Component
- **Select**: the parameter of the change event is now called `selectedOption`
- **Select**: Use `Option` instead of `StandardListItem` for selection
- **ShellBar**: `onProfilePress` renamed to `onProfileClick`
- **ShellBar**: `onNotificationsPress` renamed to `onNotificationsClick`
- **ShellBar**: `onProductSwitchPress` renamed to `onProductSwitchClick`
- **ShellBar**: `onLogoPress` renamed to `onLogoClick`
- **ShellBar**: `onCoPilotPress` renamed to `onCoPilotClick`
- **ShellBarItem**: prop `onPress` is renamed to `onClick`
- **Switch**: type is removed, use `graphical`
- **Table:** Use prop `slot` instead of `data-ui5-slot`
- **Table**: prop `rows` is replaced by `children`
- **TableRow**: prop `header` is replaced by `children`
- **ThemeProvider:** Themes: rename Theme `sap_fiori3_light` to `sap_fiori_3`
- **ThemeProvider:** ThemeProvider: removed contentDensity and theme props. To set those, use the [ui5 WebComponents configuration script tag](https://github.com/SAP/ui5-webcomponents#configure).
- **TimelineItem**: `onItemNamePress` renamed to `onItemNameClick`
- **ToggleButton**: Use design with `ButtonDesign`, type with `ButtonDesign` is deleted
- **ToggleButton**: `onPress` renamed to `onClick`
- **withWebComponent:** Replaced `innerComponentRef` with `ref` to support React `RefObject`

Please also check the [UI5 Web Components Release Notes](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.2)

## [0.3.2-rc.17](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.16...v0.3.2-rc.17) (2019-07-15)

### Features

- **AnalyticalTable:** Added option to create pivot tables ([#47](https://github.com/SAP/ui5-webcomponents-react/issues/47)) ([71b546d](https://github.com/SAP/ui5-webcomponents-react/commit/71b546d))

## [0.3.2-rc.16](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.15...v0.3.2-rc.16) (2019-07-12)

### Bug Fixes

- **ObjectPage:** Highlight selected section while scrolling ([#56](https://github.com/SAP/ui5-webcomponents-react/issues/56)) ([42a6a10](https://github.com/SAP/ui5-webcomponents-react/commit/42a6a10))

## [0.3.2-rc.15](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.14...v0.3.2-rc.15) (2019-07-11)

### Bug Fixes

- **ThemeProvider:** Only inject theme properties if they are not present ([#55](https://github.com/SAP/ui5-webcomponents-react/issues/55)) ([3ec61d5](https://github.com/SAP/ui5-webcomponents-react/commit/3ec61d5))

## [0.3.2-rc.14](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.13...v0.3.2-rc.14) (2019-07-10)

### Code Refactoring

- **Custom Components:** Expose HTML Element via ref in every component ([#54](https://github.com/SAP/ui5-webcomponents-react/issues/54)) ([c285ee6](https://github.com/SAP/ui5-webcomponents-react/commit/c285ee6))

### BREAKING CHANGES

- **Custom Components:** All Components now expose their root html node/the encapsulated Web Component via ref instead of the React instance.

## [0.3.2-rc.13](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.12...v0.3.2-rc.13) (2019-07-05)

### Bug Fixes

- **CSS-Variables:** remove trailing semicolon ([#53](https://github.com/SAP/ui5-webcomponents-react/issues/53)) ([f9d1daf](https://github.com/SAP/ui5-webcomponents-react/commit/f9d1daf)), closes [#49](https://github.com/SAP/ui5-webcomponents-react/issues/49)

## [0.3.2-rc.12](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.11...v0.3.2-rc.12) (2019-07-05)

### Bug Fixes

- **RadialChart:** Handle width and height prop correctly ([#52](https://github.com/SAP/ui5-webcomponents-react/issues/52)) ([2d3f091](https://github.com/SAP/ui5-webcomponents-react/commit/2d3f091))

## [0.3.2-rc.11](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.10...v0.3.2-rc.11) (2019-07-04)

- feat(WebComponents): Updated to v1.0.0-rc.2 (#51) ([8a40deb](https://github.com/SAP/ui5-webcomponents-react/commit/8a40deb)), closes [#51](https://github.com/SAP/ui5-webcomponents-react/issues/51)

### BREAKING CHANGES

- **ShellBarItem**: prop `onPress` is renamed to `onClick`
- **Dialog**: remove prop `noHeader`
- **Popup**: remove prop `noHeader`
  Please also check the [UI5 Web Components Release Notes](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.0.0-rc.2)

## [0.3.2-rc.10](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.9...v0.3.2-rc.10) (2019-07-03)

### Bug Fixes

- **Table:** Fixed Table and adapt slot handling ([#50](https://github.com/SAP/ui5-webcomponents-react/issues/50)) ([2159ab1](https://github.com/SAP/ui5-webcomponents-react/commit/2159ab1))

### BREAKING CHANGES

- **Table:** Use prop `slot` instead of `data-ui5-slot`
- **Table:** **Table**: prop `rows` is replaced by `children`
- **Table:** **TableRow**: prop `header` is replaced by `children`

## [0.3.2-rc.9](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.8...v0.3.2-rc.9) (2019-07-02)

### Features

- **WebComponents:** Updated Wrappers to v1.0.0-rc.1 ([#48](https://github.com/SAP/ui5-webcomponents-react/issues/48)) ([ac6570c](https://github.com/SAP/ui5-webcomponents-react/commit/ac6570c)), closes [#43](https://github.com/SAP/ui5-webcomponents-react/issues/43)

### BREAKING CHANGES

- **WebComponents:** **Button**: `onPress` renamed to `onClick`
- **WebComponents:** **ToggleButton**: `onPress` renamed to `onClick`
- **WebComponents:** **Link**: `onPress` renamed to `onClick`
- **WebComponents:** **List**: `onItemPress` renamed to `onItemClick`
- **WebComponents:** **ShellBar**: `onNotificationsPress` renamed to `onNotificationsClick`
- **WebComponents:** **Card**: `onHeaderPress` renamed to `onHeaderClick`
- **WebComponents:** **ShellBar**: `onProductSwitchPress` renamed to `onProductSwitchClick`
- **WebComponents:** **ShellBar**: `onLogoPress` renamed to `onLogoClick`
- **WebComponents:** **ShellBar**: `onCoPilotPress` renamed to `onCoPilotClick`
- **WebComponents:** **TimelineItem**: `onItemNamePress` renamed to `onItemNameClick`
- **WebComponents:** **ShellBar**: `onProfilePress` renamed to `onProfileClick`

## [0.3.2-rc.8](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.7...v0.3.2-rc.8) (2019-07-01)

### Bug Fixes

- **fiori3:** Fixed Import in Ui5PopoverDomRef interface ([88326b4](https://github.com/SAP/ui5-webcomponents-react/commit/88326b4))

## [0.3.2-rc.7](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.6...v0.3.2-rc.7) (2019-07-01)

### Code Refactoring

- **withWebComponent:** replace innerComponentRef with ref for Web Components ([#44](https://github.com/SAP/ui5-webcomponents-react/issues/44)) ([08982ba](https://github.com/SAP/ui5-webcomponents-react/commit/08982ba))

### BREAKING CHANGES

- **withWebComponent:** Replaced `innerComponentRef` with `ref` to support React `RefObject`

## [0.3.2-rc.6](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.5...v0.3.2-rc.6) (2019-06-26)

**Note:** Version bump only for package ui5-webcomponents-react

## [0.3.2-rc.5](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.4...v0.3.2-rc.5) (2019-06-24)

### Bug Fixes

- **main:** Added react-table dependency ([ebc8fc5](https://github.com/SAP/ui5-webcomponents-react/commit/ebc8fc5))

## [0.3.2-rc.4](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.3...v0.3.2-rc.4) (2019-06-24)

- - chore(Web Components): Updated Web Components to v0.13.1 (#39) ([e7f6164](https://github.com/SAP/ui5-webcomponents-react/commit/e7f6164)), closes [#39](https://github.com/SAP/ui5-webcomponents-react/issues/39) [#36](https://github.com/SAP/ui5-webcomponents-react/issues/36)

### BREAKING CHANGES

- **Select**: the parameter of the change event is now called `selectedOption`
- **Select**: Use `Option` instead of `StandardListItem` for selection
- **Link**: Use design with `LinkDesign`, type with `LinkType` is deleted
- **Button**: Use design with `ButtonDesign`, type with `ButtonDesign` is deleted
- **ToggleButton**: Use design with `ButtonDesign`, type with `ButtonDesign` is deleted
- **Switch**: type is removed, use `graphical`
- **MessageStrip**: `hideIcon` and `hideCloseButton` are renamed to `noIcon` and `noCloseButton`
- **Popover**: `hideArrow` and `hideHeader` are renamed to `noArrow` and `noHeader`

Please refer to the [UI5 Web Components Changelog](https://github.com/SAP/ui5-webcomponents/releases/tag/v0.13.1) as well.

## [0.3.2-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.2...v0.3.2-rc.3) (2019-06-24)

### Code Refactoring

- **base:** Merge `styles` and `utils` into `base` ([#38](https://github.com/SAP/ui5-webcomponents-react/issues/38)) ([9309505](https://github.com/SAP/ui5-webcomponents-react/commit/9309505)), closes [#34](https://github.com/SAP/ui5-webcomponents-react/issues/34)

### BREAKING CHANGES

- **base:** `@ui5-webcomponents-react/styles` and `@ui5-webcomponents-react/utils` are replaced by ``@ui5/webcomponents-react-base`
- **base:** Deleted Themes `sap_belize`, `sap_belize_plus` and `sap_belize_hcb`
- **base:** Removed `createThemeMap` from base
- **base:** Removed `getThemeClassFor` from base
- **base:** Removed `getThemeOverwrite` from base
- **base:** Deleted `Themes` from base

## [0.3.2-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.1...v0.3.2-rc.2) (2019-06-17)

### Features

- **AnalyticalTable:** Initial Implementation ([#32](https://github.com/SAP/ui5-webcomponents-react/issues/32)) ([4f30127](https://github.com/SAP/ui5-webcomponents-react/commit/4f30127))

### BREAKING CHANGES

- **AnalyticalTable:** Deleted `ResponsivePopover`, please use the `Popover` Component

## [0.3.2-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.2-rc.0...v0.3.2-rc.1) (2019-06-14)

**Note:** Version bump only for package @ui5/webcomponents-react-suite

## [0.3.2-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.1-rc.2...v0.3.2-rc.0) (2019-06-14)

### Features

- **ThemeProvider:** Read config from UI5 Web Components ([efee11f](https://github.com/SAP/ui5-webcomponents-react/commit/efee11f))

### BREAKING CHANGES

- **ThemeProvider:** Themes: rename Theme `sap_fiori3_light` to `sap_fiori_3`
- **ThemeProvider:** ThemeProvider: removed contentDensity and theme props. To set those, use the [ui5 WebComponents configuration script tag](https://github.com/SAP/ui5-webcomponents#configure).

## [0.3.1-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.1-rc.1...v0.3.1-rc.2) (2019-06-13)

### Features

- Update UI5 WebComponents to v0.12.0 ([#30](https://github.com/SAP/ui5-webcomponents-react/issues/30)) ([4958a15](https://github.com/SAP/ui5-webcomponents-react/commit/4958a15))

### BREAKING CHANGES

- IconColor is renamed to SemanticColor
- Tab: renamed property iconColor to semanticColor
- Button: Remove activeIcon property
- ToggleButton: Remove activeIcon property

See also [UI5-WebComponents 0.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v0.12.0) release notes.

## [0.3.1-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.1-rc.0...v0.3.1-rc.1) (2019-06-07)

### Features

- **ObjectPage:** Added Hide Header Button ([#28](https://github.com/SAP/ui5-webcomponents-react/issues/28)) ([5509098](https://github.com/SAP/ui5-webcomponents-react/commit/5509098))

## [0.3.1-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.3.0...v0.3.1-rc.0) (2019-06-03)

**Note:** Version bump only for package @ui5/webcomponents-react-suite

# [0.3.0](https://github.com/SAP/ui5-webcomponents-react/compare/v0.2.0...v0.3.0) (2019-06-03)

### Features

- Updated UI5 WebComponents to v0.11.0 ([#22](https://github.com/SAP/ui5-webcomponents-react/issues/22)) ([7dcf22b](https://github.com/SAP/ui5-webcomponents-react/commit/7dcf22b))
- **FilterBar:** Initial Version ([422bdbd](https://github.com/SAP/ui5-webcomponents-react/commit/422bdbd))
- **FilterItem:** Initial Version ([19a23ec](https://github.com/SAP/ui5-webcomponents-react/commit/19a23ec))
- **VariantManagement:** Initial Version ([a1e9cbb](https://github.com/SAP/ui5-webcomponents-react/commit/a1e9cbb))
- **FilterBar:** renderSearch function ([94b468e](https://github.com/SAP/ui5-webcomponents-react/commit/94b468e))

### Bug Fixes

- **typing:** Fixed TypeScript Definitions ([440c097](https://github.com/SAP/ui5-webcomponents-react/commit/440c097))
- **WebComponentWrapper:** Fixed event handler removal after prop update ([2b93c12](https://github.com/SAP/ui5-webcomponents-react/commit/2b93c12))

### BREAKING CHANGES

- **FilterBar:** replaced boolean value with render function
- **List**: the "selectionChange" event param "items" has been renamed to "selectedItems".
- **List**: the "backgroundDesign" property has been removed, use the corresponding CSS variable (--\_ui5_listitem_background_color) to alter the list items` background.
- **Panel**: the "backgroundDesign" property has been removed, use the corresponding CSS variables (--\_ui5_panel_background_color) to alter the panel background.
- **DatePicker**: 'liveChange' event has been renamed to 'input'.
- **CheckBox**: property "readOnly" has been renamed to "readonly".
- **RadioButton**: property "readOnly" has been renamed to "readonly".

# 0.2.0 (2019-05-15)

### Bug Fixes

- **web-component-wrapper:** Slots must be passed as camelCase ([1671c17](https://github.com/SAP/ui5-webcomponents-react/commit/1671c17))

### Features

- **charts:** Added Loading Indicators ([15284b0](https://github.com/SAP/ui5-webcomponents-react/commit/15284b0))
- **VariantManagement:** Initial Version ([b8237ce](https://github.com/SAP/ui5-webcomponents-react/commit/b8237ce))
