# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.14.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.14.0...v2.14.1) (2025-09-08)

### Bug Fixes

- **Assets:** remove top-level `await` ([#7741](https://github.com/SAP/ui5-webcomponents-react/issues/7741)) ([63165f8](https://github.com/SAP/ui5-webcomponents-react/commit/63165f80cedfb6405af78322717bb5c02758f4cd))
- **FilterBar:** announce filters dialog title by screen readers ([#7730](https://github.com/SAP/ui5-webcomponents-react/issues/7730)) ([1a63673](https://github.com/SAP/ui5-webcomponents-react/commit/1a63673b2b74061c52eb02206e61ca30113bdda8)), closes [#7582](https://github.com/SAP/ui5-webcomponents-react/issues/7582)

# [2.14.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.13.2...v2.14.0) (2025-09-05)

### Bug Fixes

- **AnalyticalTable:** safeguard extension, header & title height calc ([#7715](https://github.com/SAP/ui5-webcomponents-react/issues/7715)) ([703dfec](https://github.com/SAP/ui5-webcomponents-react/commit/703dfec363ab0a6a053eabe03a45d0e7b0a70dae)), closes [#7681](https://github.com/SAP/ui5-webcomponents-react/issues/7681)
- **deps:** update dependency dedent to v1.7.0 ([#7717](https://github.com/SAP/ui5-webcomponents-react/issues/7717)) ([09418ea](https://github.com/SAP/ui5-webcomponents-react/commit/09418eab155a61651295bcac25f0bd6571e0aa9d))

### Features

- **AnalyticalTable:** introduce `useF2CellEdit` plugin hook ([#7666](https://github.com/SAP/ui5-webcomponents-react/issues/7666)) ([86bb7e1](https://github.com/SAP/ui5-webcomponents-react/commit/86bb7e18109ff27ae44ce8f97b9931a104891e39)), closes [#6161](https://github.com/SAP/ui5-webcomponents-react/issues/6161)
- expose all components via exports maps ([#7690](https://github.com/SAP/ui5-webcomponents-react/issues/7690)) ([4275835](https://github.com/SAP/ui5-webcomponents-react/commit/4275835fe0483355df13ce7f5d7d55499b5f9673)), closes [#7722](https://github.com/SAP/ui5-webcomponents-react/issues/7722)
- make `@ui5/webcomponents-fiori` peer-dependency optional ([#7640](https://github.com/SAP/ui5-webcomponents-react/issues/7640)) ([da20bb6](https://github.com/SAP/ui5-webcomponents-react/commit/da20bb60cf305538a5e396fa902b60a398f8c74d)), closes [#7720](https://github.com/SAP/ui5-webcomponents-react/issues/7720)
- update to UI5 Web Components v2.14.0 ([#7726](https://github.com/SAP/ui5-webcomponents-react/issues/7726)) ([e5de4db](https://github.com/SAP/ui5-webcomponents-react/commit/e5de4dbb18319cf16a9e4825b702f429acddeeb1))

## [2.13.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.13.1...v2.13.2) (2025-08-29)

### Bug Fixes

- **AnalyticalTable:** clear sorting correctly in tree table ([#7669](https://github.com/SAP/ui5-webcomponents-react/issues/7669)) ([0fd1c99](https://github.com/SAP/ui5-webcomponents-react/commit/0fd1c9923f7803d4693a236384f50caf3a513c45)), closes [#7649](https://github.com/SAP/ui5-webcomponents-react/issues/7649)
- **cypress-commands:** support Cypress v15 ([#7694](https://github.com/SAP/ui5-webcomponents-react/issues/7694)) ([0d9bba7](https://github.com/SAP/ui5-webcomponents-react/commit/0d9bba7db5ff275c3e85753860d9a12163c1a7af))
- **MessageView:** fix rtl behavior & allow disabling animations ([#7686](https://github.com/SAP/ui5-webcomponents-react/issues/7686)) ([145d8be](https://github.com/SAP/ui5-webcomponents-react/commit/145d8bea303f63600713ad27ce7dfc031b4e34e9)), closes [#7682](https://github.com/SAP/ui5-webcomponents-react/issues/7682)
- **ObjectStatus:** implement delta styles for Quartz theme ([#7685](https://github.com/SAP/ui5-webcomponents-react/issues/7685)) ([9de75d6](https://github.com/SAP/ui5-webcomponents-react/commit/9de75d650287767e76dc66a5c90cdc494b098545)), closes [#7683](https://github.com/SAP/ui5-webcomponents-react/issues/7683)
- **ScatterChart - TypeScript:** fix `measures` type ([#7692](https://github.com/SAP/ui5-webcomponents-react/issues/7692)) ([79aac33](https://github.com/SAP/ui5-webcomponents-react/commit/79aac33460761debdb8ea72b5298b65bfb280127))

## [2.13.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.13.0...v2.13.1) (2025-08-14)

### Bug Fixes

- **ObjectPage:** handle `scrollPaddingBlock` when `relatedTarget` is `null` ([#7631](https://github.com/SAP/ui5-webcomponents-react/issues/7631)) ([09d8d19](https://github.com/SAP/ui5-webcomponents-react/commit/09d8d192110c2c4cab851dee891e250dc4566b9b)), closes [#7570](https://github.com/SAP/ui5-webcomponents-react/issues/7570)
- **SelectDialog:** add translation for selection announcement ([#7647](https://github.com/SAP/ui5-webcomponents-react/issues/7647)) ([29bc18f](https://github.com/SAP/ui5-webcomponents-react/commit/29bc18fa2deee9900247ba90258e6f1754b0639b))

# [2.13.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.12.0...v2.13.0) (2025-08-05)

### Bug Fixes

- **AnalyticalTable:** correctly log warning for column width ([#7539](https://github.com/SAP/ui5-webcomponents-react/issues/7539)) ([0b5a163](https://github.com/SAP/ui5-webcomponents-react/commit/0b5a16368166d7c064d062e4acc5606f369d9a9f))
- **deps:** update dependency cross-env to v10 ([#7572](https://github.com/SAP/ui5-webcomponents-react/issues/7572)) ([89ed3f3](https://github.com/SAP/ui5-webcomponents-react/commit/89ed3f3afcf74617d0827e101f17eb494e298eea))
- **deps:** update dependency react-content-loader to v7.1.0 ([#7533](https://github.com/SAP/ui5-webcomponents-react/issues/7533)) ([69eac6f](https://github.com/SAP/ui5-webcomponents-react/commit/69eac6ffa6e660c918f3831ff56fe480735838f5))
- **deps:** update dependency react-content-loader to v7.1.1 ([#7540](https://github.com/SAP/ui5-webcomponents-react/issues/7540)) ([a12c466](https://github.com/SAP/ui5-webcomponents-react/commit/a12c466b7851ed558b47bffa33cf0b1d18a0080c))
- **MessageViewButton:** make `counter` accessible to screen readers ([#7602](https://github.com/SAP/ui5-webcomponents-react/issues/7602)) ([de906a1](https://github.com/SAP/ui5-webcomponents-react/commit/de906a171a509e01ea18238e37fe58fc0c6f8501))
- **ObjectPage:** toggle header correctly when `toggleHeaderArea` is initially called ([#7531](https://github.com/SAP/ui5-webcomponents-react/issues/7531)) ([7625a62](https://github.com/SAP/ui5-webcomponents-react/commit/7625a621ff61eab3da8a836f1b5135c4ee6031ec)), closes [#7527](https://github.com/SAP/ui5-webcomponents-react/issues/7527)
- **SelectDialog:** adjust heading level to `h1` ([#7594](https://github.com/SAP/ui5-webcomponents-react/issues/7594)) ([60faf04](https://github.com/SAP/ui5-webcomponents-react/commit/60faf04e4756ab2db745ac9f2fccb86541e558fd)), closes [#7568](https://github.com/SAP/ui5-webcomponents-react/issues/7568)
- **SelectDialog:** apply latest Design and A11y specs ([#7586](https://github.com/SAP/ui5-webcomponents-react/issues/7586)) ([e26f690](https://github.com/SAP/ui5-webcomponents-react/commit/e26f690d47216a6f80c331d5bf1616c55df52b3e)), closes [#7577](https://github.com/SAP/ui5-webcomponents-react/issues/7577)
- **SelectDialog:** enable F6-Navigation ([#7583](https://github.com/SAP/ui5-webcomponents-react/issues/7583)) ([9cd3f24](https://github.com/SAP/ui5-webcomponents-react/commit/9cd3f24d4bec57b7ed6f538d92307e59874e29f9)), closes [#7567](https://github.com/SAP/ui5-webcomponents-react/issues/7567)

### Features

- **AnalyticalTable:** add components that should not select a row when pressed ([#7517](https://github.com/SAP/ui5-webcomponents-react/issues/7517)) ([4e902af](https://github.com/SAP/ui5-webcomponents-react/commit/4e902af9b1cd52260a735fe553b253fd2d93f6c9)), closes [#7516](https://github.com/SAP/ui5-webcomponents-react/issues/7516)
- **ColumnChartWithTrend:** add `tooltipConfig` prop ([#7607](https://github.com/SAP/ui5-webcomponents-react/issues/7607)) ([b942f5f](https://github.com/SAP/ui5-webcomponents-react/commit/b942f5fae43e31e9bd83cf18ea657b4d0dbf6421)), closes [#7597](https://github.com/SAP/ui5-webcomponents-react/issues/7597)
- **ObjectPage:** implement keyboard-navigation & focus handling for sections ([#7528](https://github.com/SAP/ui5-webcomponents-react/issues/7528)) ([b36f1fa](https://github.com/SAP/ui5-webcomponents-react/commit/b36f1fa4b63bcf749d35409f7a4fb24947d7acbc)), closes [#7386](https://github.com/SAP/ui5-webcomponents-react/issues/7386) [#7268](https://github.com/SAP/ui5-webcomponents-react/issues/7268) [#7548](https://github.com/SAP/ui5-webcomponents-react/issues/7548)
- **ObjectPageSection:** add `tabRef` prop ([#7590](https://github.com/SAP/ui5-webcomponents-react/issues/7590)) ([251e20a](https://github.com/SAP/ui5-webcomponents-react/commit/251e20a444a3684405f8a9b89771ec6f460e76d6)), closes [#7589](https://github.com/SAP/ui5-webcomponents-react/issues/7589) [#4369](https://github.com/SAP/ui5-webcomponents-react/issues/4369)
- **SelectDialog:** add `headerTextLevel` prop ([#7595](https://github.com/SAP/ui5-webcomponents-react/issues/7595)) ([4d45358](https://github.com/SAP/ui5-webcomponents-react/commit/4d45358f11fbd80c62ebf620f28c17d4ec8c7d51)), closes [#7593](https://github.com/SAP/ui5-webcomponents-react/issues/7593) [#7568](https://github.com/SAP/ui5-webcomponents-react/issues/7568)
- **SelectDialog:** add SR announcement for number of selected items ([#7598](https://github.com/SAP/ui5-webcomponents-react/issues/7598)) ([6f42bcc](https://github.com/SAP/ui5-webcomponents-react/commit/6f42bccce98c3ef4cb594d4f463c293982b01217)), closes [#7592](https://github.com/SAP/ui5-webcomponents-react/issues/7592)
- **SplitterLayout:** introduce `onResize` event ([#7519](https://github.com/SAP/ui5-webcomponents-react/issues/7519)) ([35b1fc8](https://github.com/SAP/ui5-webcomponents-react/commit/35b1fc85bca23a751b8fdf58e70d21a313f8ebbf)), closes [#7477](https://github.com/SAP/ui5-webcomponents-react/issues/7477)
- update to UI5 Web Components v2.13.1 ([#7621](https://github.com/SAP/ui5-webcomponents-react/issues/7621)) ([23c89f9](https://github.com/SAP/ui5-webcomponents-react/commit/23c89f9620225a73ed0e8f0c4f68997ca7a54782))

# [2.12.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.11.1...v2.12.0) (2025-07-07)

### Bug Fixes

- **AnalyticalTable:** correct header row border styles in Quartz theme ([#7459](https://github.com/SAP/ui5-webcomponents-react/issues/7459)) ([adf8982](https://github.com/SAP/ui5-webcomponents-react/commit/adf89826755a0c293ce54cbc49bc78a13bdd8e71))
- **AnalyticalTable:** update loading indicator and overlay styles ([#7447](https://github.com/SAP/ui5-webcomponents-react/issues/7447)) ([0085aae](https://github.com/SAP/ui5-webcomponents-react/commit/0085aae39504caf20e8f9ac91ea82a3c6d4878a9))
- **deps:** update dependency @tanstack/react-virtual to v3.13.10 (main) ([#7433](https://github.com/SAP/ui5-webcomponents-react/issues/7433)) ([415e5be](https://github.com/SAP/ui5-webcomponents-react/commit/415e5bee3ff6cbfb0dd953ff8e4f98eaa97fb852))
- **deps:** update dependency @tanstack/react-virtual to v3.13.11 (main) ([#7467](https://github.com/SAP/ui5-webcomponents-react/issues/7467)) ([b8a3806](https://github.com/SAP/ui5-webcomponents-react/commit/b8a38061feb1282fe20f1f13abf3f2ebded0fd80))
- **deps:** update dependency @tanstack/react-virtual to v3.13.12 (main) ([#7483](https://github.com/SAP/ui5-webcomponents-react/issues/7483)) ([e91f28c](https://github.com/SAP/ui5-webcomponents-react/commit/e91f28c59ce4040820aaa83e1b43cacc060485ca))
- **deps:** update dependency recharts to v2.15.4 (main) ([#7460](https://github.com/SAP/ui5-webcomponents-react/issues/7460)) ([e606f6a](https://github.com/SAP/ui5-webcomponents-react/commit/e606f6a5aa04ceda4d01a94384c5dabf4bb47462))
- **MessageView:** announce SegmentedButton message by with screen readers ([#7455](https://github.com/SAP/ui5-webcomponents-react/issues/7455)) ([f1f271b](https://github.com/SAP/ui5-webcomponents-react/commit/f1f271b266c75363aefcbd0ef5a6487bdea627d7))
- **MessageViewButton:** remove `counter` restriction ([#7456](https://github.com/SAP/ui5-webcomponents-react/issues/7456)) ([498b5ec](https://github.com/SAP/ui5-webcomponents-react/commit/498b5ecf680d1a983c69d519be4c320b65d65cb3)), closes [#7454](https://github.com/SAP/ui5-webcomponents-react/issues/7454)
- **ObjectPageTitle:** prevent `header` overflow ([#7498](https://github.com/SAP/ui5-webcomponents-react/issues/7498)) ([e353960](https://github.com/SAP/ui5-webcomponents-react/commit/e3539604ebdb06b373376ceb8f56d7ed17e9858a))
- **SplitterElement:** allow passing `number` for `size` prop ([#7499](https://github.com/SAP/ui5-webcomponents-react/issues/7499)) ([0869311](https://github.com/SAP/ui5-webcomponents-react/commit/0869311e53f6e94316e7dbb53fc448e18b5013dd))
- **SplitterLayout - TypeScript:** extend `children` type ([#7457](https://github.com/SAP/ui5-webcomponents-react/issues/7457)) ([1903670](https://github.com/SAP/ui5-webcomponents-react/commit/19036700d66812c3abab78946ba9d4cee824a093))
- **VariantManagement:** fix delete button alignment & pop-in behavior ([#7496](https://github.com/SAP/ui5-webcomponents-react/issues/7496)) ([80324af](https://github.com/SAP/ui5-webcomponents-react/commit/80324af533d2126c5a6e6e9fd15ee0da0b7ba8df)), closes [#7476](https://github.com/SAP/ui5-webcomponents-react/issues/7476)

### Features

- **AnalyticalTable:** introduce `alwaysShowBusyIndicator` prop ([#7448](https://github.com/SAP/ui5-webcomponents-react/issues/7448)) ([80382b8](https://github.com/SAP/ui5-webcomponents-react/commit/80382b8710e3af2d3e3fce0cd0f3d10612a13d30)), closes [#7402](https://github.com/SAP/ui5-webcomponents-react/issues/7402)
- **Assets:** add `Assets-fetch.js` ([#7345](https://github.com/SAP/ui5-webcomponents-react/issues/7345)) ([ea8e7a0](https://github.com/SAP/ui5-webcomponents-react/commit/ea8e7a0a6d0889b8d5ea00100037ea22c3a7cf2e))
- **compat:** enable scoping for custom elements in compat package only ([#7514](https://github.com/SAP/ui5-webcomponents-react/issues/7514)) ([13dc7a4](https://github.com/SAP/ui5-webcomponents-react/commit/13dc7a445d1d39c49ffd517d11b1927ee2ad45d3))
- **FilterBar:** support clearing all filters at once ([#7512](https://github.com/SAP/ui5-webcomponents-react/issues/7512)) ([82faa6d](https://github.com/SAP/ui5-webcomponents-react/commit/82faa6d5ff7198625e0d77029b0758040ed46388))
- **ObjectPageTitle:** introduce `snappedHeader` & `snappedSubHeader`prop ([#7497](https://github.com/SAP/ui5-webcomponents-react/issues/7497)) ([5ebaf8f](https://github.com/SAP/ui5-webcomponents-react/commit/5ebaf8fcda32fd122bcedda40ba6d242c4c3ad0f)), closes [#7490](https://github.com/SAP/ui5-webcomponents-react/issues/7490)
- update to UI5 Web Components v2.12.0 ([#7505](https://github.com/SAP/ui5-webcomponents-react/issues/7505)) ([84ae471](https://github.com/SAP/ui5-webcomponents-react/commit/84ae471949980686fcd7f1f3b2465fdf5e03fd27))

## [2.11.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.11.0...v2.11.1) (2025-06-06)

### Bug Fixes

- **cli:** update patch ([#7423](https://github.com/SAP/ui5-webcomponents-react/issues/7423)) ([2e5fccb](https://github.com/SAP/ui5-webcomponents-react/commit/2e5fccb900352025a6f3be79f817193cf7f2a0fe))

# [2.11.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.10.1...v2.11.0) (2025-06-06)

### Bug Fixes

- **AnalyticalTable - subcomponents:** fix non-breaking React error & improve performance ([#7366](https://github.com/SAP/ui5-webcomponents-react/issues/7366)) ([c0d745a](https://github.com/SAP/ui5-webcomponents-react/commit/c0d745af9905c9fb610f64f60de3f16b12ce33ad)), closes [#6755](https://github.com/SAP/ui5-webcomponents-react/issues/6755)
- **deps:** pin dependencies (main) ([#7418](https://github.com/SAP/ui5-webcomponents-react/issues/7418)) ([78bd9d8](https://github.com/SAP/ui5-webcomponents-react/commit/78bd9d836a370584d2ade16e6d76632bfee7170a))
- **deps:** update dependency execa to v9.6.0 (main) ([#7419](https://github.com/SAP/ui5-webcomponents-react/issues/7419)) ([01c0280](https://github.com/SAP/ui5-webcomponents-react/commit/01c0280c6f067c9ce9b9d0de087d171f6392c9e3))
- **ObjectPage:** prevent jumping of active tab when selecting section ([#7395](https://github.com/SAP/ui5-webcomponents-react/issues/7395)) ([94ca592](https://github.com/SAP/ui5-webcomponents-react/commit/94ca592c5c2412a9e448f01073973acaecae2332)), closes [#7038](https://github.com/SAP/ui5-webcomponents-react/issues/7038)

### Features

- **cli:** add experimental `patch-compat-table` command ([#7341](https://github.com/SAP/ui5-webcomponents-react/issues/7341)) ([f85d2c2](https://github.com/SAP/ui5-webcomponents-react/commit/f85d2c2518321c3cb96bb9fa498b0f6cbfe28acc)), closes [#7314](https://github.com/SAP/ui5-webcomponents-react/issues/7314)
- **ObjectPage:** extend `accessibilityAttributes` with `expandButton` ([#7405](https://github.com/SAP/ui5-webcomponents-react/issues/7405)) ([fff9fb9](https://github.com/SAP/ui5-webcomponents-react/commit/fff9fb9b5293c1c3e6a35952219d7cb31b9680b5)), closes [#7365](https://github.com/SAP/ui5-webcomponents-react/issues/7365)
- update to UI5 Web Components 2.11.0 ([#7414](https://github.com/SAP/ui5-webcomponents-react/issues/7414)) ([a5985dd](https://github.com/SAP/ui5-webcomponents-react/commit/a5985dded43d6d28fdd83db94a45834280ab3e77))

## [2.10.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.10.0...v2.10.1) (2025-05-28)

### Bug Fixes

- **AnalyticalTable:** prevent error if `onFilter` is not defined ([#7388](https://github.com/SAP/ui5-webcomponents-react/issues/7388)) ([d30e2d5](https://github.com/SAP/ui5-webcomponents-react/commit/d30e2d5fba309fedf08151c14f6139e5d0c8138b))
- **Assets:** exclude `-fetch` assets & remove unsupported `Assets-static.js` ([#7344](https://github.com/SAP/ui5-webcomponents-react/issues/7344)) ([5b180b9](https://github.com/SAP/ui5-webcomponents-react/commit/5b180b9c2b0045deb49400fc0b01d0f97cd3dfc9)), closes [#7343](https://github.com/SAP/ui5-webcomponents-react/issues/7343)
- **cypress-commands:** make the options optional for clickUi5ListItemByText ([#7316](https://github.com/SAP/ui5-webcomponents-react/issues/7316)) ([74ebb19](https://github.com/SAP/ui5-webcomponents-react/commit/74ebb1900ce28afee66a8a268d0af18a289a1ba5))
- **deps:** pin dependencies (main) ([#7334](https://github.com/SAP/ui5-webcomponents-react/issues/7334)) ([86c9b7b](https://github.com/SAP/ui5-webcomponents-react/commit/86c9b7bd0801628aae42202618c86b7324effb87))
- **deps:** pin dependency remark-gfm to 4.0.1 (main) ([#7335](https://github.com/SAP/ui5-webcomponents-react/issues/7335)) ([7b76a7e](https://github.com/SAP/ui5-webcomponents-react/commit/7b76a7e139f52940ed3892967aa4c779b55536d9))
- **deps:** update dependency @tanstack/react-virtual to v3.13.9 (main) ([#7367](https://github.com/SAP/ui5-webcomponents-react/issues/7367)) ([e2b36fd](https://github.com/SAP/ui5-webcomponents-react/commit/e2b36fd6392778ddc6cb86cb8d54ed181c32483d))
- **MessageView:** prevent error if `onItemSelect` is not defined ([#7389](https://github.com/SAP/ui5-webcomponents-react/issues/7389)) ([bfe3f3a](https://github.com/SAP/ui5-webcomponents-react/commit/bfe3f3a5203f32ee8e37ba98731bd8c65dff95d2))
- **ObjectPage:** correct position of header feature buttons ([#7374](https://github.com/SAP/ui5-webcomponents-react/issues/7374)) ([d4b4db7](https://github.com/SAP/ui5-webcomponents-react/commit/d4b4db7798a03b62fde99a72455915d7955a9560)), closes [#7362](https://github.com/SAP/ui5-webcomponents-react/issues/7362)
- **SelectDialog:** use `headerText` as `accessibleName` per default ([#7327](https://github.com/SAP/ui5-webcomponents-react/issues/7327)) ([400d46b](https://github.com/SAP/ui5-webcomponents-react/commit/400d46be7e2bf041e0c367161d3edf636d400694)), closes [#7319](https://github.com/SAP/ui5-webcomponents-react/issues/7319)

# [2.10.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.9.2...v2.10.0) (2025-05-08)

### Bug Fixes

- **AnalyticalCardHeader:** fix `role` ([#7259](https://github.com/SAP/ui5-webcomponents-react/issues/7259)) ([4803abb](https://github.com/SAP/ui5-webcomponents-react/commit/4803abbd120e0e323c83e17abab3e57a7ce2c7ef)), closes [#7253](https://github.com/SAP/ui5-webcomponents-react/issues/7253)
- **AnalyticalTable:** allow focusing "no-data" & placeholder components ([#7286](https://github.com/SAP/ui5-webcomponents-react/issues/7286)) ([e8b3e14](https://github.com/SAP/ui5-webcomponents-react/commit/e8b3e14c203b175097e33c26a489950d384a49d9)), closes [#7282](https://github.com/SAP/ui5-webcomponents-react/issues/7282)
- **AnalyticalTable:** improve screen reader announcement for filter input ([#7300](https://github.com/SAP/ui5-webcomponents-react/issues/7300)) ([377f4c2](https://github.com/SAP/ui5-webcomponents-react/commit/377f4c213e5b5f5e396f499a324a853471ea2c3a)), closes [#7298](https://github.com/SAP/ui5-webcomponents-react/issues/7298)
- **AnalyticalTable:** restore focus when ungrouping a column ([#7299](https://github.com/SAP/ui5-webcomponents-react/issues/7299)) ([980449e](https://github.com/SAP/ui5-webcomponents-react/commit/980449e2e8e6b702ad7eb44b1545d10ef4288973)), closes [#7284](https://github.com/SAP/ui5-webcomponents-react/issues/7284)
- **deps:** update dependency @tanstack/react-virtual to v3.13.8 (main) ([#7301](https://github.com/SAP/ui5-webcomponents-react/issues/7301)) ([4a7006f](https://github.com/SAP/ui5-webcomponents-react/commit/4a7006fc952c44ca7f1c8c0c6ca0ac04f7035409))
- **deps:** update dependency dedent to v1.6.0 (main) ([#7292](https://github.com/SAP/ui5-webcomponents-react/issues/7292)) ([e779291](https://github.com/SAP/ui5-webcomponents-react/commit/e779291bc9e529b928504d4fc1a104798927507d))
- **deps:** update dependency recharts to v2.15.3 (main) ([#7247](https://github.com/SAP/ui5-webcomponents-react/issues/7247)) ([d9dcffd](https://github.com/SAP/ui5-webcomponents-react/commit/d9dcffd3e4cf561b638fc102a2967aeeb77e4b13))
- **ObjectPage:** fix scroll-into-view behavior for Chromium browsers ([#7266](https://github.com/SAP/ui5-webcomponents-react/issues/7266)) ([16e0f49](https://github.com/SAP/ui5-webcomponents-react/commit/16e0f49a695a63f82a8bee6814cdc47dd9410e87)), closes [#7057](https://github.com/SAP/ui5-webcomponents-react/issues/7057)
- **ObjectPage:** safeguard DOM node access in focus handlers ([#7313](https://github.com/SAP/ui5-webcomponents-react/issues/7313)) ([0872213](https://github.com/SAP/ui5-webcomponents-react/commit/0872213526da9fb245922c52135f164bc4cbb9bd))
- **ObjectStatus:** implement focus deltas for hc theme ([#7283](https://github.com/SAP/ui5-webcomponents-react/issues/7283)) ([9061974](https://github.com/SAP/ui5-webcomponents-react/commit/90619746055c0c5ab884e2469aee1bf30c5a8320)), closes [#7280](https://github.com/SAP/ui5-webcomponents-react/issues/7280)
- **PieChart & DonutChart:** support active segment without displaying legend ([#7279](https://github.com/SAP/ui5-webcomponents-react/issues/7279)) ([9c675d5](https://github.com/SAP/ui5-webcomponents-react/commit/9c675d53e960dda2bdf976b9967572de940c8157))
- **TheminParameters:** reflect updated global CSS vars ([#7261](https://github.com/SAP/ui5-webcomponents-react/issues/7261)) ([d4022f1](https://github.com/SAP/ui5-webcomponents-react/commit/d4022f1f95d3b62d78096015c97799d9acc99de1))

### Features

- **AnalyticalCardHeader:** allow customizing the `aria-level` of `titleText` ([#7260](https://github.com/SAP/ui5-webcomponents-react/issues/7260)) ([79c6ce6](https://github.com/SAP/ui5-webcomponents-react/commit/79c6ce6e27c9139cd2948b04193907124147423a))
- **AnalyticalTable:** introduce `onFilter` callback prop ([#7304](https://github.com/SAP/ui5-webcomponents-react/issues/7304)) ([a728467](https://github.com/SAP/ui5-webcomponents-react/commit/a728467f7565c1de16409088cff570df80d297fd)), closes [#6562](https://github.com/SAP/ui5-webcomponents-react/issues/6562)
- **cypress-commands:** allow `clickUi5ListItemByText` to be chained ([#7312](https://github.com/SAP/ui5-webcomponents-react/issues/7312)) ([5be7e83](https://github.com/SAP/ui5-webcomponents-react/commit/5be7e831033b2b40017c2bc6fc5a0eb282788bbe))
- update to UI5 Web Components 2.10.0 ([#7308](https://github.com/SAP/ui5-webcomponents-react/issues/7308)) ([b85b54d](https://github.com/SAP/ui5-webcomponents-react/commit/b85b54d4ddbce317e14629dcb4cf5ff3e99bbe9c))

## [2.9.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.9.1...v2.9.2) (2025-04-15)

### Bug Fixes

- **AnalyticalTable:** improve `"Default"` `scaleWidthMode` calculation ([#7214](https://github.com/SAP/ui5-webcomponents-react/issues/7214)) ([3afa357](https://github.com/SAP/ui5-webcomponents-react/commit/3afa3572dc05a88bc73b30ad3e4fcd9850a1adf3)), closes [#7072](https://github.com/SAP/ui5-webcomponents-react/issues/7072) [#4971](https://github.com/SAP/ui5-webcomponents-react/issues/4971)
- **AnalyticalTable:** update column widths correctly when grouped or reordered ([#7210](https://github.com/SAP/ui5-webcomponents-react/issues/7210)) ([b5c3c2b](https://github.com/SAP/ui5-webcomponents-react/commit/b5c3c2b2dfaf586f87bb70e18eaa1233ec1f4b42))
- **cypress-commands:** force "Enter" press for `clickDropdownMenuItem` (for `ui5-select`) ([#7223](https://github.com/SAP/ui5-webcomponents-react/issues/7223)) ([3c25985](https://github.com/SAP/ui5-webcomponents-react/commit/3c259859f3e8979bf651e9bdfb0b203166d82cf5))
- **ObjectPage:** correct spacing when `image` is not present ([#7238](https://github.com/SAP/ui5-webcomponents-react/issues/7238)) ([554b88d](https://github.com/SAP/ui5-webcomponents-react/commit/554b88d68327ce2badd117bd0356f5dcf2076453))
- **ObjectPage:** fire onSelectedSectionChange correctly in IconTabBar `mode` ([#7240](https://github.com/SAP/ui5-webcomponents-react/issues/7240)) ([1d4c4fe](https://github.com/SAP/ui5-webcomponents-react/commit/1d4c4feaaae88dfb5da1b42158932856fd1dac69)), closes [#7235](https://github.com/SAP/ui5-webcomponents-react/issues/7235)
- **Toolbar - compat:** apply same bg colors as ui5-webcomponents Toolbar ([#7221](https://github.com/SAP/ui5-webcomponents-react/issues/7221)) ([f3dab01](https://github.com/SAP/ui5-webcomponents-react/commit/f3dab01755ede98d86c590af4f496ecdbd3b1d50)), closes [#7220](https://github.com/SAP/ui5-webcomponents-react/issues/7220)

## [2.9.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.9.0...v2.9.1) (2025-04-10)

### Bug Fixes

- attach ui5-webcomponents event handlers before browser paint ([#7218](https://github.com/SAP/ui5-webcomponents-react/issues/7218)) ([94416ae](https://github.com/SAP/ui5-webcomponents-react/commit/94416aecefef132e41e44e538bdb8aea0cbe28cc)), closes [#7217](https://github.com/SAP/ui5-webcomponents-react/issues/7217)
- **ObjectPage:** fix programmatic section selection in `IconTabBar` `mode` ([#7219](https://github.com/SAP/ui5-webcomponents-react/issues/7219)) ([5d0d37b](https://github.com/SAP/ui5-webcomponents-react/commit/5d0d37bd005956cc06ee0e8fc93cdf4899869d54)), closes [#7215](https://github.com/SAP/ui5-webcomponents-react/issues/7215)

# [2.9.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.8.2...v2.9.0) (2025-04-07)

### Bug Fixes

- **AnalyticalTable:** improve accessibility ([#7181](https://github.com/SAP/ui5-webcomponents-react/issues/7181)) ([8d652b4](https://github.com/SAP/ui5-webcomponents-react/commit/8d652b4c729771115f948b78a51913dc59ff6262)), closes [#6515](https://github.com/SAP/ui5-webcomponents-react/issues/6515) [#7147](https://github.com/SAP/ui5-webcomponents-react/issues/7147)
- **ColumnChartWithTrend:** correct height calculation ([#7172](https://github.com/SAP/ui5-webcomponents-react/issues/7172)) ([5f98e64](https://github.com/SAP/ui5-webcomponents-react/commit/5f98e64bd3035104b78abd1125b9b8a6a3fcf48d)), closes [#6204](https://github.com/SAP/ui5-webcomponents-react/issues/6204)
- **MessageViewButton:** adjust default tooltip ([#7162](https://github.com/SAP/ui5-webcomponents-react/issues/7162)) ([65e033d](https://github.com/SAP/ui5-webcomponents-react/commit/65e033d79fcbf0034f34ef4d6d9d507f452900cd))
- **MessageView:** improve accessibility ([#7098](https://github.com/SAP/ui5-webcomponents-react/issues/7098)) ([ee114c5](https://github.com/SAP/ui5-webcomponents-react/commit/ee114c5fa6042699eb4d95890d631d8918aa3627)), closes [#7076](https://github.com/SAP/ui5-webcomponents-react/issues/7076) [#7087](https://github.com/SAP/ui5-webcomponents-react/issues/7087) [#7059](https://github.com/SAP/ui5-webcomponents-react/issues/7059)
- **Toolbar - compat:** prevent empty overflow popover ([#7185](https://github.com/SAP/ui5-webcomponents-react/issues/7185)) ([1773d9d](https://github.com/SAP/ui5-webcomponents-react/commit/1773d9d227e6e4e921358884f3977adc1233bec4))

### Features

- **cli:** add deprecation notice of components in wrapper script ([#7178](https://github.com/SAP/ui5-webcomponents-react/issues/7178)) ([b923669](https://github.com/SAP/ui5-webcomponents-react/commit/b92366919ae13630d11077a01c299875bbea91f6))
- **MessageItem:** allow customizing `accessibleName` and `tooltip` ([#7099](https://github.com/SAP/ui5-webcomponents-react/issues/7099)) ([43fcb35](https://github.com/SAP/ui5-webcomponents-react/commit/43fcb35783abd7d97380fc0924546447809a574c))
- **ObjectPage:** allow customizing `role` of `footerArea` container ([#7187](https://github.com/SAP/ui5-webcomponents-react/issues/7187)) ([3b2e248](https://github.com/SAP/ui5-webcomponents-react/commit/3b2e2488d05297e04a8b56311f411e2ee3335701)), closes [#7173](https://github.com/SAP/ui5-webcomponents-react/issues/7173)
- **ObjectStatus:** add latest `Indication` `state`s ([#7120](https://github.com/SAP/ui5-webcomponents-react/issues/7120)) ([5fc96da](https://github.com/SAP/ui5-webcomponents-react/commit/5fc96dacc50744f1f515994db1fa651e6216c9b2))
- update to UI5 Web Components 2.9.0 ([#7203](https://github.com/SAP/ui5-webcomponents-react/issues/7203)) ([04fecc4](https://github.com/SAP/ui5-webcomponents-react/commit/04fecc454fbd633c7d0213054e1097ab3b9b069a))

## [2.8.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.8.1...v2.8.2) (2025-04-07)

### Bug Fixes

- **deps:** update dependency @tanstack/react-virtual to v3.13.5 (main) ([#7133](https://github.com/SAP/ui5-webcomponents-react/issues/7133)) ([51ebd52](https://github.com/SAP/ui5-webcomponents-react/commit/51ebd52957f9567c4718384bac4af0a392550eea))
- **deps:** update dependency @tanstack/react-virtual to v3.13.6 (main) ([#7161](https://github.com/SAP/ui5-webcomponents-react/issues/7161)) ([a7feb21](https://github.com/SAP/ui5-webcomponents-react/commit/a7feb21a7de697c566019c436bbede629c75320b))
- **deps:** update dependency recharts to v2.15.2 (main) ([#7184](https://github.com/SAP/ui5-webcomponents-react/issues/7184)) ([707c926](https://github.com/SAP/ui5-webcomponents-react/commit/707c92669ff0f64e5ae256b8797872d77297a0df))
- **deps:** update react monorepo to v19.1.0 (main) (minor) ([#7154](https://github.com/SAP/ui5-webcomponents-react/issues/7154)) ([287ae70](https://github.com/SAP/ui5-webcomponents-react/commit/287ae70e75eb952933601e8c8e4232d40aaed1b9))
- **i18n:** update french translation of cancel ([#7146](https://github.com/SAP/ui5-webcomponents-react/issues/7146)) ([ea676c8](https://github.com/SAP/ui5-webcomponents-react/commit/ea676c838c2bf18dd5e635644db743f73946a782)), closes [#7141](https://github.com/SAP/ui5-webcomponents-react/issues/7141)
- **ObjectPage:** announce first section heading with screen readers ([#7186](https://github.com/SAP/ui5-webcomponents-react/issues/7186)) ([8c49573](https://github.com/SAP/ui5-webcomponents-react/commit/8c49573405cf35fa44e584560b7d3f42dec4c671)), closes [#7043](https://github.com/SAP/ui5-webcomponents-react/issues/7043)
- **ObjectPage:** correct position of snapped `image` ([#7151](https://github.com/SAP/ui5-webcomponents-react/issues/7151)) ([e99a24f](https://github.com/SAP/ui5-webcomponents-react/commit/e99a24fa31e95e9b57d2b9123a7e90526078069e))
- **ObjectPage:** improve focus and scroll behavior ([#7150](https://github.com/SAP/ui5-webcomponents-react/issues/7150)) ([1516a82](https://github.com/SAP/ui5-webcomponents-react/commit/1516a8244e96d7b2f7c10e1418fba050507ef902)), closes [#5783](https://github.com/SAP/ui5-webcomponents-react/issues/5783) [#7155](https://github.com/SAP/ui5-webcomponents-react/issues/7155)

## [2.8.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.8.0...v2.8.1) (2025-03-24)

### Bug Fixes

- **AnalyticalTable:** align column popover based on `hAlign` ([#7081](https://github.com/SAP/ui5-webcomponents-react/issues/7081)) ([eb7dddc](https://github.com/SAP/ui5-webcomponents-react/commit/eb7dddc28ee614d5ddbf637851c1b8c1e74cbe68)), closes [#7080](https://github.com/SAP/ui5-webcomponents-react/issues/7080)
- **AnalyticalTable:** fix focus behavior when tabbing ([#7063](https://github.com/SAP/ui5-webcomponents-react/issues/7063)) ([8be0e35](https://github.com/SAP/ui5-webcomponents-react/commit/8be0e35f7e837c4ad17d2ebd18f48a9760b398e0)), closes [#7062](https://github.com/SAP/ui5-webcomponents-react/issues/7062)
- **deps:** update dependency @tanstack/react-virtual to v3.13.4 ([#7071](https://github.com/SAP/ui5-webcomponents-react/issues/7071)) ([cf721e5](https://github.com/SAP/ui5-webcomponents-react/commit/cf721e57de5d0192546ca1aa149d756471d278ca))
- **FilterBar:** fix reordering in `StrictMode` ([#7060](https://github.com/SAP/ui5-webcomponents-react/issues/7060)) ([7f0f4e6](https://github.com/SAP/ui5-webcomponents-react/commit/7f0f4e6c966dadda85bf4d52bd7743dec19ed68b)), closes [#7013](https://github.com/SAP/ui5-webcomponents-react/issues/7013)
- **MessageBox:** always create valid id for `String` action button ([#7091](https://github.com/SAP/ui5-webcomponents-react/issues/7091)) ([57b9b54](https://github.com/SAP/ui5-webcomponents-react/commit/57b9b5412a527d6e628407c02bb3f807e6adc837))
- **ObjectPage:** always show focused elements in content ([#7104](https://github.com/SAP/ui5-webcomponents-react/issues/7104)) ([c8bea19](https://github.com/SAP/ui5-webcomponents-react/commit/c8bea19e005815770d359503614019b66a0075fa)), closes [#7057](https://github.com/SAP/ui5-webcomponents-react/issues/7057) [#7010](https://github.com/SAP/ui5-webcomponents-react/issues/7010)
- **ObjectPage:** fire `onPinButtonToggle` only when required ([#7064](https://github.com/SAP/ui5-webcomponents-react/issues/7064)) ([16c0453](https://github.com/SAP/ui5-webcomponents-react/commit/16c04536d85c77a34afc99befeab5308d80f232c))
- **ObjectPage:** use full width for header content if no `image` is set ([#7046](https://github.com/SAP/ui5-webcomponents-react/issues/7046)) ([41f0dc9](https://github.com/SAP/ui5-webcomponents-react/commit/41f0dc948748c56b12dcedfd1b7ae9f427fffabc)), closes [#7025](https://github.com/SAP/ui5-webcomponents-react/issues/7025)
- **ObjectStatus:** screen readers announce "button" only once ([#7047](https://github.com/SAP/ui5-webcomponents-react/issues/7047)) ([c03e359](https://github.com/SAP/ui5-webcomponents-react/commit/c03e359fdbb69bb0f90e9854ed2b24d8304c745f)), closes [#7039](https://github.com/SAP/ui5-webcomponents-react/issues/7039)
- **ObjectStatus:** use `IconMode.Decorative` instead of `aria-hidden` ([#7110](https://github.com/SAP/ui5-webcomponents-react/issues/7110)) ([45664cf](https://github.com/SAP/ui5-webcomponents-react/commit/45664cf7e442ea5aa07703fe7d19109595372c52))
- **renovate:** fix warnings ([#7075](https://github.com/SAP/ui5-webcomponents-react/issues/7075)) ([b2c79ea](https://github.com/SAP/ui5-webcomponents-react/commit/b2c79eae7d62417cab7db006375ffe2361908a4e))
- **VariantManagement:** allow quotes in `VariantItem` name ([#7108](https://github.com/SAP/ui5-webcomponents-react/issues/7108)) ([eafca89](https://github.com/SAP/ui5-webcomponents-react/commit/eafca89e4bea54fd765453f15270ea76f5be7441)), closes [#7106](https://github.com/SAP/ui5-webcomponents-react/issues/7106)

# [2.8.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.7.2...v2.8.0) (2025-03-05)

### Bug Fixes

- **deps:** update dependency @tanstack/react-virtual to v3.13.1 ([#6995](https://github.com/SAP/ui5-webcomponents-react/issues/6995)) ([1b51f0b](https://github.com/SAP/ui5-webcomponents-react/commit/1b51f0b16baf66c17da490e4a2b1e3c28b944c02))
- **deps:** update dependency @tanstack/react-virtual to v3.13.2 ([#6998](https://github.com/SAP/ui5-webcomponents-react/issues/6998)) ([aee6c53](https://github.com/SAP/ui5-webcomponents-react/commit/aee6c53f3c8c43e5cc1e4bc77d02d61d45f1beb9))
- **FilterBar:** disable "down" reorder btns on last row ([#7040](https://github.com/SAP/ui5-webcomponents-react/issues/7040)) ([a20770a](https://github.com/SAP/ui5-webcomponents-react/commit/a20770af948cb9fbbe7aa54658883f82569bbefb))
- **Toolbar (compat):** exclude spacer from overflow popover ([#6962](https://github.com/SAP/ui5-webcomponents-react/issues/6962)) ([44bcdd7](https://github.com/SAP/ui5-webcomponents-react/commit/44bcdd7ce6c874df0bb334196b1f6634add5a6a9)), closes [#6933](https://github.com/SAP/ui5-webcomponents-react/issues/6933)
- **Toolbar (compat):** remove `margin` from empty items ([#6952](https://github.com/SAP/ui5-webcomponents-react/issues/6952)) ([eac4baf](https://github.com/SAP/ui5-webcomponents-react/commit/eac4baf9b34ca8e8cae7df0fec2e4357ed969852))

### Features

- introduce AI package (`@ui5/webcomponents-ai-react`) ([#6928](https://github.com/SAP/ui5-webcomponents-react/issues/6928)) ([b6e1c8f](https://github.com/SAP/ui5-webcomponents-react/commit/b6e1c8f61d83bbde0d0cb7a2d40625ab15d32c06))
- update to UI5 Web Components 2.8.0 ([#7035](https://github.com/SAP/ui5-webcomponents-react/issues/7035)) ([5a406c3](https://github.com/SAP/ui5-webcomponents-react/commit/5a406c31d5808ed41a99d47d3e07af21bb2a9262))

## [2.7.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.7.1...v2.7.2) (2025-02-13)

### Bug Fixes

- **AnalyticalTable:** update virtualizer in animation frame ([#6923](https://github.com/SAP/ui5-webcomponents-react/issues/6923)) ([d87c06e](https://github.com/SAP/ui5-webcomponents-react/commit/d87c06ed8dd56cef03bdd17a4cfb1fca58b3523d))
- **deps:** update dependency @tanstack/react-virtual to v3.13.0 ([#6913](https://github.com/SAP/ui5-webcomponents-react/issues/6913)) ([280afa9](https://github.com/SAP/ui5-webcomponents-react/commit/280afa994b90b39fd9c45218af58b03911640837))
- export all components on root ([#6942](https://github.com/SAP/ui5-webcomponents-react/issues/6942)) ([90b7bb6](https://github.com/SAP/ui5-webcomponents-react/commit/90b7bb64a2468f6d7fb14a5cc3cf1075f698cbf7)), closes [#6941](https://github.com/SAP/ui5-webcomponents-react/issues/6941)
- suppress hydration warning ([#6910](https://github.com/SAP/ui5-webcomponents-react/issues/6910)) ([376e118](https://github.com/SAP/ui5-webcomponents-react/commit/376e118ff3fa31f21b2f4422016536c77a8c91c1))

## [2.7.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.7.0...v2.7.1) (2025-02-05)

### Bug Fixes

- **base:** correct `getEffectiveScopingSuffixForTag` import path ([#6901](https://github.com/SAP/ui5-webcomponents-react/issues/6901)) ([59a3324](https://github.com/SAP/ui5-webcomponents-react/commit/59a3324ae067bd73bd906468d4e3b77ff94f45d3)), closes [#6900](https://github.com/SAP/ui5-webcomponents-react/issues/6900)
- mount ui5 web components only on the client ([#6902](https://github.com/SAP/ui5-webcomponents-react/issues/6902)) ([93830e9](https://github.com/SAP/ui5-webcomponents-react/commit/93830e92b989047ee68c37b40def7b755a5a3e9a))
- **ObjectPage:** position expand/collapse buttons correctly ([#6897](https://github.com/SAP/ui5-webcomponents-react/issues/6897)) ([70745c6](https://github.com/SAP/ui5-webcomponents-react/commit/70745c6cbf6022f43969e68c320e4bf9d4e182bf)), closes [#6867](https://github.com/SAP/ui5-webcomponents-react/issues/6867)

# [2.7.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.6.0...v2.7.0) (2025-02-04)

### Bug Fixes

- **AnalyticalTable - TypeScript:** fix incorrect `setFilter` type ([#6842](https://github.com/SAP/ui5-webcomponents-react/issues/6842)) ([4a21ffb](https://github.com/SAP/ui5-webcomponents-react/commit/4a21ffbb506489782066f43a9d9a231add59c4f2))
- **AnalyticalTable:** allow typing SPACE in custom cell content ([#6881](https://github.com/SAP/ui5-webcomponents-react/issues/6881)) ([35e1420](https://github.com/SAP/ui5-webcomponents-react/commit/35e142023b76c19813490a8b4cb288d630f54655))
- **AnalyticalTable:** apply correct column width when hiding columns ([#6848](https://github.com/SAP/ui5-webcomponents-react/issues/6848)) ([16e1803](https://github.com/SAP/ui5-webcomponents-react/commit/16e18034a742fe753a1520e94258f6d5e5921539)), closes [#5938](https://github.com/SAP/ui5-webcomponents-react/issues/5938)
- **deps:** update dependency @tanstack/react-virtual to ~3.12.0 ([#6888](https://github.com/SAP/ui5-webcomponents-react/issues/6888)) ([87b27ff](https://github.com/SAP/ui5-webcomponents-react/commit/87b27fff4ce9b413afc9851c17c9aa8a204486d9))
- **deps:** update dependency @tanstack/react-virtual to v3.11.3 ([#6870](https://github.com/SAP/ui5-webcomponents-react/issues/6870)) ([a0d000a](https://github.com/SAP/ui5-webcomponents-react/commit/a0d000a3d16c24c4470230534b7a868b22c535e4))
- **deps:** update dependency recharts to v2.15.1 ([#6871](https://github.com/SAP/ui5-webcomponents-react/issues/6871)) ([4be074a](https://github.com/SAP/ui5-webcomponents-react/commit/4be074a7c8631836085512b853fca38badc63f93))
- **deps:** update ui5 web components to v2.6.3 (patch) ([#6878](https://github.com/SAP/ui5-webcomponents-react/issues/6878)) ([b678456](https://github.com/SAP/ui5-webcomponents-react/commit/b67845656f623ffee1c7842cc2d7a56654e995cd))
- **MessageItem:** enable details view if Link overflows ([#6859](https://github.com/SAP/ui5-webcomponents-react/issues/6859)) ([88e1398](https://github.com/SAP/ui5-webcomponents-react/commit/88e13984782deddebcf5869ef7333fcf78317fd7)), closes [#6857](https://github.com/SAP/ui5-webcomponents-react/issues/6857)
- **ObjectPage:** fix scroll-to/selection behavior ([#6879](https://github.com/SAP/ui5-webcomponents-react/issues/6879)) ([2b658d8](https://github.com/SAP/ui5-webcomponents-react/commit/2b658d8e4e51ed0262964082606c9aa4d6ef6c57)), closes [#6798](https://github.com/SAP/ui5-webcomponents-react/issues/6798)
- **SplitterLayout:** implement latest design specs ([#6885](https://github.com/SAP/ui5-webcomponents-react/issues/6885)) ([567a1b3](https://github.com/SAP/ui5-webcomponents-react/commit/567a1b30a19cf21376570889ddcb39318a426b88))
- **ThemingParameters:** update css vars ([#6823](https://github.com/SAP/ui5-webcomponents-react/issues/6823)) ([a2cc7bd](https://github.com/SAP/ui5-webcomponents-react/commit/a2cc7bd4cd4aa6bc7fcdf02db64c9130aef1b02b))

### Features

- **cypress-commands:** support cypress v14 ([#6828](https://github.com/SAP/ui5-webcomponents-react/issues/6828)) ([cc7f950](https://github.com/SAP/ui5-webcomponents-react/commit/cc7f950beee4d74329bc077f773c941680cac0ea))
- **FlexBox:** introduce `gap` prop ([#6849](https://github.com/SAP/ui5-webcomponents-react/issues/6849)) ([10bf5ac](https://github.com/SAP/ui5-webcomponents-react/commit/10bf5ac076ba97143ad1257718e498b9b3da6445)), closes [#6832](https://github.com/SAP/ui5-webcomponents-react/issues/6832)
- update to UI5 Web Components 2.7.0 ([#6890](https://github.com/SAP/ui5-webcomponents-react/issues/6890)) ([1b85eb3](https://github.com/SAP/ui5-webcomponents-react/commit/1b85eb3522a9bfc6d0fb6ae1e6e5237f95df7b56))

# [2.6.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.5.0...v2.6.0) (2025-01-09)

### Bug Fixes

- **AnalyticalTable - TypeScript:** adjust column types for filtering ([#6715](https://github.com/SAP/ui5-webcomponents-react/issues/6715)) ([ee6e748](https://github.com/SAP/ui5-webcomponents-react/commit/ee6e7489018655d48013dc4b97f71e3acd8ac27b))
- **AnalyticalTable:** use single stylesheet ([#6763](https://github.com/SAP/ui5-webcomponents-react/issues/6763)) ([1c5b596](https://github.com/SAP/ui5-webcomponents-react/commit/1c5b5969870ab0b76b0e8dc8855d8d06b5551de3))
- **charts:** support React19 ([#6742](https://github.com/SAP/ui5-webcomponents-react/issues/6742)) ([857d6b5](https://github.com/SAP/ui5-webcomponents-react/commit/857d6b5add84ec1af22ab252493fcac1b58e750d))
- **deps:** update dependency @tanstack/react-virtual to v3.11.1 ([#6716](https://github.com/SAP/ui5-webcomponents-react/issues/6716)) ([d17c922](https://github.com/SAP/ui5-webcomponents-react/commit/d17c9223560cef80531d16ad0d7154ba7751db4a))
- **deps:** update dependency @tanstack/react-virtual to v3.11.2 ([#6751](https://github.com/SAP/ui5-webcomponents-react/issues/6751)) ([381e0bc](https://github.com/SAP/ui5-webcomponents-react/commit/381e0bcab051c5d97015e3eb2f38e4551f195943))
- **deps:** update ui5 web components to v2.5.1 (patch) ([#6753](https://github.com/SAP/ui5-webcomponents-react/issues/6753)) ([2d4d04a](https://github.com/SAP/ui5-webcomponents-react/commit/2d4d04a3e69acab55a92fb9547d28283d9114087))
- **FilterBar:** correct callback values for `onFiltersDialogSelectionChange` ([#6724](https://github.com/SAP/ui5-webcomponents-react/issues/6724)) ([0e289fa](https://github.com/SAP/ui5-webcomponents-react/commit/0e289fadfdba3c258f6161d2c8b08fbfcd0c740a)), closes [#6720](https://github.com/SAP/ui5-webcomponents-react/issues/6720)
- **MessageViewButton:** correct tooltips ([#6766](https://github.com/SAP/ui5-webcomponents-react/issues/6766)) ([de4608f](https://github.com/SAP/ui5-webcomponents-react/commit/de4608fef7dadac147dafcdd7bb45dafd079e368)), closes [#6594](https://github.com/SAP/ui5-webcomponents-react/issues/6594)
- **MessageView:** fix group order ([#6760](https://github.com/SAP/ui5-webcomponents-react/issues/6760)) ([4d7c8e1](https://github.com/SAP/ui5-webcomponents-react/commit/4d7c8e1de3059374d6eeb1e24429c4fe3a8f66fd)), closes [#6750](https://github.com/SAP/ui5-webcomponents-react/issues/6750)
- **ObjectPage:** scroll to section when programmatically selected ([#6768](https://github.com/SAP/ui5-webcomponents-react/issues/6768)) ([ad9937a](https://github.com/SAP/ui5-webcomponents-react/commit/ad9937a6892864ec7cbc0fa84faa4845a38b948c)), closes [#6765](https://github.com/SAP/ui5-webcomponents-react/issues/6765)
- **SelectDialog:** set search input type to `"search"` ([#6791](https://github.com/SAP/ui5-webcomponents-react/issues/6791)) ([9919542](https://github.com/SAP/ui5-webcomponents-react/commit/9919542c0bde8ab8f146829cd916c4908b8539b0))

### Features

- update to UI5 Web Components 2.6.2 ([#6792](https://github.com/SAP/ui5-webcomponents-react/issues/6792)) ([c147bf7](https://github.com/SAP/ui5-webcomponents-react/commit/c147bf7b4d30e606ffab67ed0cbece6c202a8e1c))

# [2.5.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.4.0...v2.5.0) (2024-12-09)

### Bug Fixes

- **AnalyticalTable:** block interaction during loading ([#6602](https://github.com/SAP/ui5-webcomponents-react/issues/6602)) ([de3c96d](https://github.com/SAP/ui5-webcomponents-react/commit/de3c96d32718298d612be97e0a8b296e4908ef40))
- **AnalyticalTable:** only show `BusyIndicator` if table has data ([#6614](https://github.com/SAP/ui5-webcomponents-react/issues/6614)) ([36aa447](https://github.com/SAP/ui5-webcomponents-react/commit/36aa4477688efbb481089dd29d6032895220f033))
- **AnalyticalTable:** show vertical resizer while dragging ([#6694](https://github.com/SAP/ui5-webcomponents-react/issues/6694)) ([0715e49](https://github.com/SAP/ui5-webcomponents-react/commit/0715e49a715d8dc9344cd76e282674b11688dc72))
- **AnalyticalTable:** update column header icons to align with latest specs ([#6593](https://github.com/SAP/ui5-webcomponents-react/issues/6593)) ([b5859ed](https://github.com/SAP/ui5-webcomponents-react/commit/b5859ed5978894ecdc704403d942475ff2ce47b3))
- **cli:** improve description for events & outline experimental components ([#6625](https://github.com/SAP/ui5-webcomponents-react/issues/6625)) ([799e0dc](https://github.com/SAP/ui5-webcomponents-react/commit/799e0dccf94c86365cbc6d95cb506fd0a0815e55))
- **deps:** update dependency @tanstack/react-virtual to ~3.11.0 ([#6702](https://github.com/SAP/ui5-webcomponents-react/issues/6702)) ([2d9dbe4](https://github.com/SAP/ui5-webcomponents-react/commit/2d9dbe4d5cd8041e6c19c1d4ad013eb8a351f46e))
- **deps:** update dependency @tanstack/react-virtual to v3.10.9 ([#6605](https://github.com/SAP/ui5-webcomponents-react/issues/6605)) ([4f76c5d](https://github.com/SAP/ui5-webcomponents-react/commit/4f76c5d9b6d25c0df6cafe6628ffbdc29a003c19))
- **deps:** update dependency recharts to v2.14.1 ([#6684](https://github.com/SAP/ui5-webcomponents-react/issues/6684)) ([4ce15b0](https://github.com/SAP/ui5-webcomponents-react/commit/4ce15b0a8b6eab78827e62e151e1353519817b30))
- **deps:** update nextjs monorepo to v15 (major) ([#6538](https://github.com/SAP/ui5-webcomponents-react/issues/6538)) ([6ca32ce](https://github.com/SAP/ui5-webcomponents-react/commit/6ca32ce0c12a30b2733ba891742e5171c31210ff))
- **MessageViewButton:** add default tooltip & aria-label ([#6595](https://github.com/SAP/ui5-webcomponents-react/issues/6595)) ([d924cbf](https://github.com/SAP/ui5-webcomponents-react/commit/d924cbf4e27437659fa05d7266e407fa79ede310)), closes [#6594](https://github.com/SAP/ui5-webcomponents-react/issues/6594)
- **NavigationLayout:** add root export ([#6657](https://github.com/SAP/ui5-webcomponents-react/issues/6657)) ([6954d95](https://github.com/SAP/ui5-webcomponents-react/commit/6954d956fbf8413e1d4b8fa93795e1ea505a117b))
- **ObjectPage:** fix selection & header scroll behavior ([#6663](https://github.com/SAP/ui5-webcomponents-react/issues/6663)) ([62eb7e0](https://github.com/SAP/ui5-webcomponents-react/commit/62eb7e0f66c669c5a52cd05472d84cbfca711117)), closes [#6600](https://github.com/SAP/ui5-webcomponents-react/issues/6600) [#6648](https://github.com/SAP/ui5-webcomponents-react/issues/6648)
- **ObjectStatus:** fix icon alignment in large & inverted mode ([#6676](https://github.com/SAP/ui5-webcomponents-react/issues/6676)) ([7aebe5f](https://github.com/SAP/ui5-webcomponents-react/commit/7aebe5f6781332b2718dde2552b4f56c4f28add1)), closes [#6668](https://github.com/SAP/ui5-webcomponents-react/issues/6668)
- **Pie- & DonutChart:** improve `activeSegment` handling & fix focus behavior ([#6686](https://github.com/SAP/ui5-webcomponents-react/issues/6686)) ([d5b612d](https://github.com/SAP/ui5-webcomponents-react/commit/d5b612db5f84550ab83174ba0782f5518b93b94d)), closes [#6683](https://github.com/SAP/ui5-webcomponents-react/issues/6683)
- **StyleStore:** fix stale reference leading to memory leak ([#6649](https://github.com/SAP/ui5-webcomponents-react/issues/6649)) ([4aaf4f9](https://github.com/SAP/ui5-webcomponents-react/commit/4aaf4f9ce446333678ea669f7e5a41516a74e5c7)), closes [#6646](https://github.com/SAP/ui5-webcomponents-react/issues/6646)
- **StyleStore:** replace `useSyncExternalStore` shim with `react` import ([#6650](https://github.com/SAP/ui5-webcomponents-react/issues/6650)) ([af15a8c](https://github.com/SAP/ui5-webcomponents-react/commit/af15a8cbea51c55cd440d1da8b410a7e928fe4c4))
- **VariantManagement:** fix `hideApplyAutomatically` ([#6624](https://github.com/SAP/ui5-webcomponents-react/issues/6624)) ([06a88f5](https://github.com/SAP/ui5-webcomponents-react/commit/06a88f56b43e06d719ce87e4e493eeb1eaa80ad2)), closes [#6618](https://github.com/SAP/ui5-webcomponents-react/issues/6618)
- **VariantManagement:** fix boolean prop handling ([#6641](https://github.com/SAP/ui5-webcomponents-react/issues/6641)) ([69ed3e0](https://github.com/SAP/ui5-webcomponents-react/commit/69ed3e0cbb24ca02b856580e63c15604e216d750)), closes [#6616](https://github.com/SAP/ui5-webcomponents-react/issues/6616)
- **VariantManagement:** fix dirty-state and `readOnly` behavior ([#6628](https://github.com/SAP/ui5-webcomponents-react/issues/6628)) ([fe389bc](https://github.com/SAP/ui5-webcomponents-react/commit/fe389bcd439bbd6dd68c51bd6217872eaf7d259f)), closes [#6622](https://github.com/SAP/ui5-webcomponents-react/issues/6622) [#6617](https://github.com/SAP/ui5-webcomponents-react/issues/6617)
- **VariantManagement:** support React 19 ([#6639](https://github.com/SAP/ui5-webcomponents-react/issues/6639)) ([1b4c37d](https://github.com/SAP/ui5-webcomponents-react/commit/1b4c37d265d6569dc57697ed5a7edc881058779d))

### Features

- **AnalyticalTable:** introduce `popinDisplay` column option ([#6619](https://github.com/SAP/ui5-webcomponents-react/issues/6619)) ([cc2bca7](https://github.com/SAP/ui5-webcomponents-react/commit/cc2bca78ba18dd2d96cfa4a9ab583a349ef8dd04)), closes [#5972](https://github.com/SAP/ui5-webcomponents-react/issues/5972)
- update to UI5 Web Components 2.5.0 ([#6696](https://github.com/SAP/ui5-webcomponents-react/issues/6696)) ([19a29aa](https://github.com/SAP/ui5-webcomponents-react/commit/19a29aac347a42e5caa3bc85a540bbe5bc4b3cbd))

# [2.4.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.3.3...v2.4.0) (2024-11-05)

### Bug Fixes

- **AnalyticalTable:** remove unnecessary `aria-expanded` ([#6587](https://github.com/SAP/ui5-webcomponents-react/issues/6587)) ([a74ffbc](https://github.com/SAP/ui5-webcomponents-react/commit/a74ffbcecb54ca376775b1d50e80c3c82d99b17b)), closes [#6516](https://github.com/SAP/ui5-webcomponents-react/issues/6516)
- **deps:** update dependency recharts to v2.13.3 ([#6582](https://github.com/SAP/ui5-webcomponents-react/issues/6582)) ([96096c7](https://github.com/SAP/ui5-webcomponents-react/commit/96096c7e5b0b1fc5864da864ee1270f2b20445dc))

### Features

- **AnalyticalTable:** allow passing custom header popovers ([#6576](https://github.com/SAP/ui5-webcomponents-react/issues/6576)) ([03d973e](https://github.com/SAP/ui5-webcomponents-react/commit/03d973e344e4552b1c320731cb65ffa1c68c9426))
- update @ui5/webcomponents to ~2.4.0 ([#6585](https://github.com/SAP/ui5-webcomponents-react/issues/6585)) ([2a4049c](https://github.com/SAP/ui5-webcomponents-react/commit/2a4049c1d5686e443a569f01d94331aa13a66c88))

### Reverts

- Revert "chore: lerna force-publish" ([e947895](https://github.com/SAP/ui5-webcomponents-react/commit/e9478956b79d2a8399fd911c13f38267b5c5b1b2))

## [2.3.3](https://github.com/SAP/ui5-webcomponents-react/compare/v2.3.2...v2.3.3) (2024-10-31)

### Bug Fixes

- **AnalyticalTable - TypeScript:** correct typing for `onRowClick` and accessor function ([#6520](https://github.com/SAP/ui5-webcomponents-react/issues/6520)) ([c838d80](https://github.com/SAP/ui5-webcomponents-react/commit/c838d80c34b7a8295e2948b97a97175462b26f66)), closes [#6519](https://github.com/SAP/ui5-webcomponents-react/issues/6519)
- **AnalyticalTable:** calculate column width correctly when grouping ([#6568](https://github.com/SAP/ui5-webcomponents-react/issues/6568)) ([1a5a024](https://github.com/SAP/ui5-webcomponents-react/commit/1a5a024e0735a515d1f9f2c314995386ebff3324)), closes [#6534](https://github.com/SAP/ui5-webcomponents-react/issues/6534)
- **compat:** use deep import paths for `main` imports ([#6554](https://github.com/SAP/ui5-webcomponents-react/issues/6554)) ([d432c5e](https://github.com/SAP/ui5-webcomponents-react/commit/d432c5e54b3f216e3252584f6cae8cec1720bdfb))
- **deps:** update dependency recharts to v2.13.1 ([#6482](https://github.com/SAP/ui5-webcomponents-react/issues/6482)) ([8d4b364](https://github.com/SAP/ui5-webcomponents-react/commit/8d4b3648a23315b5f8237dbe129bfbeb575a7746))
- **deps:** update dependency recharts to v2.13.2 ([#6574](https://github.com/SAP/ui5-webcomponents-react/issues/6574)) ([fcd3ee2](https://github.com/SAP/ui5-webcomponents-react/commit/fcd3ee2a976777c6a7fd701ac8425b887ebb37e1))

## [2.3.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.3.1...v2.3.2) (2024-10-23)

### Bug Fixes

- **compat:** update `@ui5/webcomponents-react` peer-dep ([#6541](https://github.com/SAP/ui5-webcomponents-react/issues/6541)) ([f6db6f7](https://github.com/SAP/ui5-webcomponents-react/commit/f6db6f7aa626da78a481d926396f8aeb7fed7729)), closes [#6540](https://github.com/SAP/ui5-webcomponents-react/issues/6540)
- **ObjectPage:** support section selection in iframe ([#6535](https://github.com/SAP/ui5-webcomponents-react/issues/6535)) ([ca82fcb](https://github.com/SAP/ui5-webcomponents-react/commit/ca82fcb69c1b753202d490f35405ca88d6dce36c))
- **Toolbar - compat:** announce number of items in overflow popover ([#6545](https://github.com/SAP/ui5-webcomponents-react/issues/6545)) ([60411d6](https://github.com/SAP/ui5-webcomponents-react/commit/60411d65ddc97d28fb444b320f6c26651a1aa467)), closes [#5926](https://github.com/SAP/ui5-webcomponents-react/issues/5926)

## [2.3.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.3.0...v2.3.1) (2024-10-17)

### Bug Fixes

- **charts:** update `@ui5/webcomponents-react` peer-dependencies ([#6509](https://github.com/SAP/ui5-webcomponents-react/issues/6509)) ([21f1d39](https://github.com/SAP/ui5-webcomponents-react/commit/21f1d396fc69f11af522b160906ffbcf4734e64d))
- export all ui5 web components from root ([#6512](https://github.com/SAP/ui5-webcomponents-react/issues/6512)) ([36b4652](https://github.com/SAP/ui5-webcomponents-react/commit/36b4652b0126c2fea942cdf684822a226ab93af5))

# [2.3.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.2.0...v2.3.0) (2024-10-17)

### Bug Fixes

- **AnalyticalTable:** border styles ([#6506](https://github.com/SAP/ui5-webcomponents-react/issues/6506)) ([76b925b](https://github.com/SAP/ui5-webcomponents-react/commit/76b925b4859843bee355840044a1f9acf7a0df9d)), closes [#6477](https://github.com/SAP/ui5-webcomponents-react/issues/6477)
- **codemod:** correctly replace `type` of `TableRow` ([#6468](https://github.com/SAP/ui5-webcomponents-react/issues/6468)) ([659b432](https://github.com/SAP/ui5-webcomponents-react/commit/659b4324c4500e27a0a6e7695053b2094f69a860))
- **FilterBar:** add tooltip for list-view SegmentedButtonItem ([#6501](https://github.com/SAP/ui5-webcomponents-react/issues/6501)) ([5348750](https://github.com/SAP/ui5-webcomponents-react/commit/5348750dde72758c3dbb4d2366091669b829d63d)), closes [#6496](https://github.com/SAP/ui5-webcomponents-react/issues/6496)
- **FilterBar:** show FilterBar buttons if `hideToolbar` is active ([#6464](https://github.com/SAP/ui5-webcomponents-react/issues/6464)) ([65d48a5](https://github.com/SAP/ui5-webcomponents-react/commit/65d48a5223d3f421f8eb24eff7ce46d9fa91c066)), closes [#6461](https://github.com/SAP/ui5-webcomponents-react/issues/6461)
- **ObjectPage:** improve selection & scroll behavior ([#6492](https://github.com/SAP/ui5-webcomponents-react/issues/6492)) ([2e09839](https://github.com/SAP/ui5-webcomponents-react/commit/2e09839cab8f2394ce4531edb155d7717f3ff0ce)), closes [#6478](https://github.com/SAP/ui5-webcomponents-react/issues/6478)
- **ObjectPageSubSection:** update styles to latest specs ([#6494](https://github.com/SAP/ui5-webcomponents-react/issues/6494)) ([40a180a](https://github.com/SAP/ui5-webcomponents-react/commit/40a180a1c4539d549ace8adc8121e3a6be97257c)), closes [#5850](https://github.com/SAP/ui5-webcomponents-react/issues/5850)
- **Ui5DomRef - TypeScript:** update types ([#6471](https://github.com/SAP/ui5-webcomponents-react/issues/6471)) ([464f2fd](https://github.com/SAP/ui5-webcomponents-react/commit/464f2fd7870cd116fcb75aa31858c4d2065a921c))

### Features

- **charts:** allow configuring the `zoomingTool` ([#6489](https://github.com/SAP/ui5-webcomponents-react/issues/6489)) ([4d3f4fc](https://github.com/SAP/ui5-webcomponents-react/commit/4d3f4fc255024ee0f629c8cdbad67df292bb6fbc))
- **charts:** allow configuring the internal `Legend` component ([#6493](https://github.com/SAP/ui5-webcomponents-react/issues/6493)) ([1bc98f9](https://github.com/SAP/ui5-webcomponents-react/commit/1bc98f91c638b60fb05ab45b5d1dd30532eccd77)), closes [#5777](https://github.com/SAP/ui5-webcomponents-react/issues/5777)
- **charts:** allow rechart's `accessibilityLayer` prop ([#6459](https://github.com/SAP/ui5-webcomponents-react/issues/6459)) ([6de7aa7](https://github.com/SAP/ui5-webcomponents-react/commit/6de7aa71102ed46471607e67c46f413fcde0fd42)), closes [#6446](https://github.com/SAP/ui5-webcomponents-react/issues/6446)
- **cypress-commands:** add `findToolbarButtonByText ` query ([#6463](https://github.com/SAP/ui5-webcomponents-react/issues/6463)) ([d16a334](https://github.com/SAP/ui5-webcomponents-react/commit/d16a33480c55e9bfae7eb968d3722b0af8b1d968))

# [2.2.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.1.1...v2.2.0) (2024-10-04)

### Bug Fixes

- **AnalyticalTable:** announce select-all cell for screen readers ([#6408](https://github.com/SAP/ui5-webcomponents-react/issues/6408)) ([82687e7](https://github.com/SAP/ui5-webcomponents-react/commit/82687e7642d477ca56d78f8343365ba8c365981a)), closes [#6209](https://github.com/SAP/ui5-webcomponents-react/issues/6209)
- **AnalyticalTable:** offer limited support for `infiniteScroll` combined with a grouped table ([#6431](https://github.com/SAP/ui5-webcomponents-react/issues/6431)) ([ed48142](https://github.com/SAP/ui5-webcomponents-react/commit/ed481425ac8b130a7aeef171b30dce9e23e85b2c))
- **BarChart & BulletChart:** adjust y-axis label distribution ([#6406](https://github.com/SAP/ui5-webcomponents-react/issues/6406)) ([a7f3284](https://github.com/SAP/ui5-webcomponents-react/commit/a7f3284685fad96677a22ef4739f4ff6abbc71a2))
- remove CSS `[@layer](https://github.com/layer)` rule from static CSS bundle ([#6430](https://github.com/SAP/ui5-webcomponents-react/issues/6430)) ([b2942f8](https://github.com/SAP/ui5-webcomponents-react/commit/b2942f8a6ebd70c36ba1b8b44c6bd37aec6861c3))

### Features

- **charts:** add 12th chart color ([#6444](https://github.com/SAP/ui5-webcomponents-react/issues/6444)) ([1d9f558](https://github.com/SAP/ui5-webcomponents-react/commit/1d9f558f2f9563f4038fad3bd937f2798a7f8771))
- **ThemingParameters:** update `ThemingParameters` to use latest CSS vars ([#6443](https://github.com/SAP/ui5-webcomponents-react/issues/6443)) ([744d72a](https://github.com/SAP/ui5-webcomponents-react/commit/744d72a5d5772f776f33d2e6483c2a7059d3216c))
- update @ui5/webcomponents to ~2.3.0 ([#6440](https://github.com/SAP/ui5-webcomponents-react/issues/6440)) ([7e8e805](https://github.com/SAP/ui5-webcomponents-react/commit/7e8e8055a16680048282cbee4493bfcc12c60b58)), closes [#6340](https://github.com/SAP/ui5-webcomponents-react/issues/6340)

## [2.1.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.1.0...v2.1.1) (2024-09-24)

### Bug Fixes

- **compat:** allow file/deep imports for components ([#6394](https://github.com/SAP/ui5-webcomponents-react/issues/6394)) ([a5eb344](https://github.com/SAP/ui5-webcomponents-react/commit/a5eb34498fa8b566208175c7f6acafbac17ef0df)), closes [#6344](https://github.com/SAP/ui5-webcomponents-react/issues/6344)
- **deps:** update dependency @tanstack/react-virtual to v3.10.8 ([#6292](https://github.com/SAP/ui5-webcomponents-react/issues/6292)) ([b981202](https://github.com/SAP/ui5-webcomponents-react/commit/b9812029d373af26b4a7dfad5e2957087481f7b6))
- ensure availability of internal CSS vars ([#6393](https://github.com/SAP/ui5-webcomponents-react/issues/6393)) ([d8a8df3](https://github.com/SAP/ui5-webcomponents-react/commit/d8a8df3054ebaa079dddd5ef4a243346824c959a))
- **SplitterLayout:** fix cursor for vertical resize ([#6324](https://github.com/SAP/ui5-webcomponents-react/issues/6324)) ([2e0f7aa](https://github.com/SAP/ui5-webcomponents-react/commit/2e0f7aaf843b046e88919bda177d2aeb8b147df6)), closes [#6323](https://github.com/SAP/ui5-webcomponents-react/issues/6323)
- **useStyleSheet:** scope component name to ui5wc runtime ([#6395](https://github.com/SAP/ui5-webcomponents-react/issues/6395)) ([1383b37](https://github.com/SAP/ui5-webcomponents-react/commit/1383b3757f546a417071a31297a1f413d0711a56))

# [2.1.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.2...v2.1.0) (2024-09-05)

### Bug Fixes

- **AnalyticalTable:** respect max-width in grow mode ([#6314](https://github.com/SAP/ui5-webcomponents-react/issues/6314)) ([98738d3](https://github.com/SAP/ui5-webcomponents-react/commit/98738d3e043a66c29be095a6f3618ebf9cfabb3b))
- **deps:** define `use-sync-external-store` as dependency ([#6304](https://github.com/SAP/ui5-webcomponents-react/issues/6304)) ([4227642](https://github.com/SAP/ui5-webcomponents-react/commit/422764270d5fd3a3dad0c07c948f616fe7abaccf))

### Features

- update to UI5 Web Components ~2.2.0 ([#6312](https://github.com/SAP/ui5-webcomponents-react/issues/6312)) ([5be0319](https://github.com/SAP/ui5-webcomponents-react/commit/5be03197ff27d61921ce06c013e028a71bc704f3))
- wrap all styles in ui5-webcomponents-react css layer ([#6306](https://github.com/SAP/ui5-webcomponents-react/issues/6306)) ([b43c1be](https://github.com/SAP/ui5-webcomponents-react/commit/b43c1be9b88a8201822859f0ad9e4fd2af613bf1)), closes [#6276](https://github.com/SAP/ui5-webcomponents-react/issues/6276)

## [2.0.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.1...v2.0.2) (2024-08-28)

### Bug Fixes

- generate version info during build ([#6277](https://github.com/SAP/ui5-webcomponents-react/issues/6277)) ([c887d5c](https://github.com/SAP/ui5-webcomponents-react/commit/c887d5c1798b8b0ec339ad0af9d0aca352a03074))

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
