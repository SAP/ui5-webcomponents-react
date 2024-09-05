# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.1.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.2...v2.1.0) (2024-09-05)

### Features

- update to UI5 Web Components ~2.2.0 ([#6312](https://github.com/SAP/ui5-webcomponents-react/issues/6312)) ([5be0319](https://github.com/SAP/ui5-webcomponents-react/commit/5be03197ff27d61921ce06c013e028a71bc704f3))

## [2.0.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.1...v2.0.2) (2024-08-28)

### Bug Fixes

- generate version info during build ([#6277](https://github.com/SAP/ui5-webcomponents-react/issues/6277)) ([c887d5c](https://github.com/SAP/ui5-webcomponents-react/commit/c887d5c1798b8b0ec339ad0af9d0aca352a03074))

## [2.0.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0...v2.0.1) (2024-08-26)

### Bug Fixes

- remove json export from root index files ([#6269](https://github.com/SAP/ui5-webcomponents-react/issues/6269)) ([a665715](https://github.com/SAP/ui5-webcomponents-react/commit/a665715b0652bfedf860e0c2a5ca407be9e41aa7))

# [2.0.0](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.3...v2.0.0) (2024-08-23)

### chore

- **charts:** remove MicroBarChart ([#6249](https://github.com/SAP/ui5-webcomponents-react/issues/6249)) ([93439fb](https://github.com/SAP/ui5-webcomponents-react/commit/93439fb97f14db4dbc642014b3735bf3bb7a94f9))

### BREAKING CHANGES

- **charts:** the `MicroBarChart` component as been removed as this is a legacy component which is not covered by design specs anymore.

# [2.0.0-rc.3](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2024-08-21)

### Features

- register current runtime version in window ([#6222](https://github.com/SAP/ui5-webcomponents-react/issues/6222)) ([367628c](https://github.com/SAP/ui5-webcomponents-react/commit/367628c117a389b85a9b9fa977d865fdad4e7f33)), closes [#6210](https://github.com/SAP/ui5-webcomponents-react/issues/6210)

# [2.0.0-rc.2](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.1...v2.0.0-rc.2) (2024-08-07)

**Note:** Version bump only for package @ui5/webcomponents-react-charts

# [2.0.0-rc.1](https://github.com/SAP/ui5-webcomponents-react/compare/v2.0.0-rc.0...v2.0.0-rc.1) (2024-07-19)

### Code Refactoring

- drop support for React 16 & 17 ([#6095](https://github.com/SAP/ui5-webcomponents-react/issues/6095)) ([07facf3](https://github.com/SAP/ui5-webcomponents-react/commit/07facf3678c6d0432eb30ddae8c90784dd8351e6))

### BREAKING CHANGES

- the minimum required `react` and `react-dom` version is now 18.0.0

# [2.0.0-rc.0](https://github.com/SAP/ui5-webcomponents-react/compare/v1.29.2...v2.0.0-rc.0) (2024-07-11)

### Bug Fixes

- **deps:** update dependency react-content-loader to v7.0.1 ([#5899](https://github.com/SAP/ui5-webcomponents-react/issues/5899)) ([5ed11e9](https://github.com/SAP/ui5-webcomponents-react/commit/5ed11e94b1fc19b51ee8437fb019ff9d4037037d))
- **deps:** update dependency react-content-loader to v7.0.2 ([#5909](https://github.com/SAP/ui5-webcomponents-react/issues/5909)) ([cb79434](https://github.com/SAP/ui5-webcomponents-react/commit/cb79434d3bbbb1de8cef023abf1c8fbfb2368ab0))
- use new JSX transform in preparation for React 19 ([#5837](https://github.com/SAP/ui5-webcomponents-react/issues/5837)) ([7dcad64](https://github.com/SAP/ui5-webcomponents-react/commit/7dcad64b3fb627f245a0a9e1a46e8ac01399ae09))

### Features

- **charts:** introduce `loadingDelay` prop ([#6027](https://github.com/SAP/ui5-webcomponents-react/issues/6027)) ([71fcb40](https://github.com/SAP/ui5-webcomponents-react/commit/71fcb408bf2bafd8af4d6b4c7c7d47f4c518e520))
- move `Loader` to `compat` package & replace with `BusyIndicator` ([#6020](https://github.com/SAP/ui5-webcomponents-react/issues/6020)) ([80d8c0b](https://github.com/SAP/ui5-webcomponents-react/commit/80d8c0b1f4ed5b69e6f1aa835f5b20d0cf264622))
- **RadialChart:** introduce `loading` & `loadingDelay` props ([#6028](https://github.com/SAP/ui5-webcomponents-react/issues/6028)) ([3891437](https://github.com/SAP/ui5-webcomponents-react/commit/3891437548c6e51e84c4ebdfe0180e1f4e2cd8ac))
- support React 19 ([#5860](https://github.com/SAP/ui5-webcomponents-react/issues/5860)) ([c78ab7f](https://github.com/SAP/ui5-webcomponents-react/commit/c78ab7f5c9998bbcf65b107151d206eccb3c6f99))
- update UI5 Web Components to 2.0.0 ([#6023](https://github.com/SAP/ui5-webcomponents-react/issues/6023)) ([49efb9b](https://github.com/SAP/ui5-webcomponents-react/commit/49efb9b71aa41d7efdcc8f02b592f91cf365d2b6))

### BREAKING CHANGES

- updated UI5 Web Components to v2. All [breaking changes](https://sap.github.io/ui5-webcomponents/docs/migration-guides/to-version-2/) apply to this project as well.
- the `SuggestionGroupItem` component has been replaced by the `SuggestionItemGroup` component
- The deprecated `Loader` component has been moved to the `@ui5/webcomponents-react-compat` package. Please use the `BusyIndicator` instead, as it's now the only loading indicator that is supported by our UX guidelines. Please visit our [Migration Guide](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/migration-guide--docs)
  for more details.
- **ObjectPage (TypeScript):** replace `headerTitle` type
  with `ReactElement<DynamicPageTitlePropTypes>`
- **ObjectPage (TypeScript):** replace `headerContent`
  type with `ReactElement<DynamicPageHeaderPropTypes>`
- **ObjectPage (TypeScript):** replace `image` type with
  `string | ReactElement<AvatarPropTypes>`

# 1.x.x

The changelog for 1.x.x can be found [here](https://github.com/SAP/ui5-webcomponents-react/blob/v1.29.x/packages/charts/CHANGELOG.md).
