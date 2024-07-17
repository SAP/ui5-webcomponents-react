# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
